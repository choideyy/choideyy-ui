export type ContactFormField = 'name' | 'email' | 'phone' | 'message';

export type ContactFormFieldErrors = Partial<Record<ContactFormField, string>>;

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactValidationDetail = {
  path: string;
  message: string;
};
