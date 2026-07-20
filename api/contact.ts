import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  CONTACT_FIELD_LIMITS,
  validateContactForm,
} from '../src/utils/contactValidation';

type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
  source?: string;
};

const EMAIL_MAX_LENGTH = 254;
const WEBSITE_MAX_LENGTH = 200;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();

const getClientIp = (req: VercelRequest): string => {
  const forwarded = req.headers['x-forwarded-for'];

  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0]?.trim() ?? 'unknown';
  }

  return req.socket.remoteAddress ?? 'unknown';
};

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
};

const setCorsHeaders = (req: VercelRequest, res: VercelResponse): void => {
  const origin = req.headers.origin;

  if (
    typeof origin === 'string' &&
    (origin.includes('localhost') || origin.includes('127.0.0.1'))
  ) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const sanitizeText = (value: unknown, maxLength: number): string => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().slice(0, maxLength);
};

const normalizePayload = (body: unknown): ContactFormPayload | null => {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const record = body as Record<string, unknown>;
  const phone = sanitizeText(record.phone, CONTACT_FIELD_LIMITS.phone.max);

  return {
    name: sanitizeText(record.name, CONTACT_FIELD_LIMITS.name.max),
    email: sanitizeText(record.email, EMAIL_MAX_LENGTH),
    message: sanitizeText(record.message, CONTACT_FIELD_LIMITS.message.max),
    ...(phone ? { phone } : {}),
    website: sanitizeText(record.website, WEBSITE_MAX_LENGTH),
    source: sanitizeText(record.source, 100) || 'contact-page',
  };
};

const escapePlainText = (value: string): string =>
  value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');

const buildEmailText = (payload: ContactFormPayload): string => {
  const submittedAt = new Date().toISOString();

  return [
    'New contact form submission',
    '',
    `Name: ${escapePlainText(payload.name)}`,
    `Email: ${escapePlainText(payload.email)}`,
    `Phone: ${payload.phone ? escapePlainText(payload.phone) : 'Not provided'}`,
    `Source: ${escapePlainText(payload.source ?? 'contact-page')}`,
    `Submitted at: ${submittedAt}`,
    '',
    'Message:',
    escapePlainText(payload.message),
  ].join('\n');
};

const sendContactEmail = async (payload: ContactFormPayload): Promise<void> => {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL?.trim();
  const fromAddress = process.env.EMAIL_FROM_ADDRESS?.trim();
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY?.trim();

  if (!recipient || !fromAddress || !apiKey) {
    throw new Error('Email service is not configured.');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [recipient],
      reply_to: payload.email,
      subject: `Contact form: ${escapePlainText(payload.name)}`,
      text: buildEmailText(payload),
    }),
  });

  if (!response.ok) {
    throw new Error('Email provider rejected the request.');
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  if (isRateLimited(getClientIp(req))) {
    return res.status(429).json({
      message: 'Too many submissions. Please try again later.',
    });
  }

  const payload = normalizePayload(req.body);

  if (!payload) {
    return res.status(400).json({ message: 'Invalid request body.' });
  }

  if (payload.website) {
    return res.status(200).json({ message: 'Message sent successfully.' });
  }

  const errors = validateContactForm({
    name: payload.name,
    email: payload.email,
    phone: payload.phone ?? '',
    message: payload.message,
  });

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Please correct the highlighted fields.',
      errors,
    });
  }

  try {
    await sendContactEmail(payload);
    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch {
    return res.status(500).json({
      message: 'Unable to send your message. Please try again later.',
    });
  }
}
