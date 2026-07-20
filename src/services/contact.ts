import { env } from '../config/env';
import type { ContactValidationDetail } from '../types/contact';
import { mapContactErrorDetails } from '../utils/contactValidation';

export type ContactFormRequest = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  formStartedAt: number;
  website: string;
};

export type ContactFormSuccessResponse = {
  success: true;
};

export type ContactFormErrorResponse = {
  success: false;
  error: string;
  details?: ContactValidationDetail[];
};

type ContactApiResponse = ContactFormSuccessResponse | ContactFormErrorResponse;

export class ContactSubmitError extends Error {
  readonly status: number;
  readonly details?: ContactValidationDetail[];
  readonly fieldErrors: ReturnType<typeof mapContactErrorDetails>;

  constructor(
    message: string,
    status: number,
    details?: ContactValidationDetail[],
  ) {
    super(message);
    this.name = 'ContactSubmitError';
    this.status = status;
    this.details = details;
    this.fieldErrors = mapContactErrorDetails(details);
  }
}

const normalizeBaseUrl = (baseUrl: string): string =>
  baseUrl.replace(/\/+$/, '');

const getContactEndpoint = (): string => {
  if (!env.contactApiUrl) {
    if (import.meta.env.DEV) {
      console.warn(
        '[contact] VITE_CONTACT_API_URL is not set. Contact form submissions are disabled.',
      );
    }

    throw new ContactSubmitError(
      'Không thể gửi biểu mẫu lúc này. Vui lòng thử lại sau.',
      0,
    );
  }

  return `${normalizeBaseUrl(env.contactApiUrl)}/api/contact`;
};

const isBotOrTimingError = (errorMessage: string): boolean => {
  const normalized = errorMessage.toLowerCase();

  return (
    normalized.includes('bot') ||
    normalized.includes('honeypot') ||
    normalized.includes('too quickly') ||
    normalized.includes('too fast') ||
    normalized.includes('formstartedat') ||
    normalized.includes('timestamp') ||
    normalized.includes('spam')
  );
};

const getErrorMessage = (
  status: number,
  body: ContactApiResponse | null,
): string => {
  const backendError =
    body && 'success' in body && body.success === false ? body.error : '';

  if (status === 400) {
    if (backendError && isBotOrTimingError(backendError)) {
      return 'Không thể gửi biểu mẫu. Vui lòng kiểm tra lại thông tin và thử lại sau vài giây.';
    }

    if (body && 'success' in body && body.success === false && body.details?.length) {
      return 'Thông tin chưa hợp lệ. Vui lòng kiểm tra lại biểu mẫu.';
    }

    return 'Thông tin chưa hợp lệ. Vui lòng kiểm tra lại biểu mẫu.';
  }

  switch (status) {
    case 403:
      if (import.meta.env.DEV) {
        console.warn(
          '[contact] Received 403. Verify backend allowed-origin configuration for http://localhost:5173.',
          backendError,
        );
      }
      return 'Không thể gửi biểu mẫu từ địa chỉ hiện tại. Vui lòng thử lại sau.';
    case 413:
      return 'Nội dung gửi quá lớn. Vui lòng rút gọn ghi chú và thử lại.';
    case 415:
      return 'Không thể gửi biểu mẫu do định dạng yêu cầu không hợp lệ.';
    case 429:
      return 'Bạn đã gửi quá nhiều yêu cầu. Vui lòng chờ một lúc rồi thử lại.';
    case 500:
      return 'Hệ thống đang gặp sự cố. Vui lòng thử lại sau.';
    default:
      return 'Không thể gửi biểu mẫu. Vui lòng thử lại.';
  }
};

export const buildContactRequest = (
  values: {
    name: string;
    email: string;
    phone: string;
    message: string;
  },
  formStartedAt: number,
  website: string,
): ContactFormRequest => {
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  return {
    name,
    email,
    message,
    formStartedAt,
    website,
    ...(phone ? { phone } : {}),
  };
};

export async function submitContact(
  payload: ContactFormRequest,
): Promise<ContactFormSuccessResponse> {
  const contactEndpoint = getContactEndpoint();

  let response: Response;

  try {
    response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ContactSubmitError(
      'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng và thử lại.',
      0,
    );
  }

  const data = (await response.json().catch(() => null)) as ContactApiResponse | null;

  if (response.ok && data?.success === true) {
    return data;
  }

  const details =
    data && 'success' in data && data.success === false ? data.details : undefined;

  throw new ContactSubmitError(
    getErrorMessage(response.status, data),
    response.status,
    details,
  );
}
