const readEnv = (key: keyof ImportMetaEnv): string | undefined => {
  const value = import.meta.env[key]?.trim();
  return value || undefined;
};

const warnMissing = (name: string) => {
  if (import.meta.env.DEV) {
    console.warn(
      `[config] ${name} is not set. Related features are disabled until it is configured.`,
    );
  }
};

const googleFormUrl = readEnv('VITE_GOOGLE_FORM_URL');
const googleFormTicketUrl = readEnv('VITE_GOOGLE_FORM_TICKET_URL');
const contactApiUrl = readEnv('VITE_CONTACT_API_URL');

if (!googleFormUrl) {
  warnMissing('VITE_GOOGLE_FORM_URL');
}

if (!googleFormTicketUrl) {
  warnMissing('VITE_GOOGLE_FORM_TICKET_URL');
}

if (!contactApiUrl) {
  warnMissing('VITE_CONTACT_API_URL');
}

export const env = {
  googleFormUrl,
  googleFormTicketUrl,
  /** Backend base URL. The contact client appends `/api/contact`. */
  contactApiUrl,
} as const;

export const openExternalUrl = (
  url: string | undefined,
  envKey: string,
): void => {
  if (!url) {
    warnMissing(envKey);
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
};
