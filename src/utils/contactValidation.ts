import type {
  ContactFormField,
  ContactFormFieldErrors,
  ContactFormValues,
  ContactValidationDetail,
} from '../types/contact';

export const CONTACT_FIELD_LIMITS = {
  name: { min: 2, max: 100 },
  phone: { max: 30 },
  message: { min: 10, max: 5000 },
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s+\-().]+$/;

export const trimContactValues = (
  values: ContactFormValues,
): ContactFormValues => ({
  name: values.name.trim(),
  email: values.email.trim(),
  phone: values.phone.trim(),
  message: values.message.trim(),
});

export const validateContactForm = (
  values: ContactFormValues,
): ContactFormFieldErrors => {
  const trimmed = trimContactValues(values);
  const errors: ContactFormFieldErrors = {};

  if (!trimmed.name) {
    errors.name = 'Vui lòng nhập họ tên hoặc tên doanh nghiệp.';
  } else if (trimmed.name.length < CONTACT_FIELD_LIMITS.name.min) {
    errors.name = 'Thông tin này cần ít nhất 2 ký tự.';
  } else if (trimmed.name.length > CONTACT_FIELD_LIMITS.name.max) {
    errors.name = 'Thông tin này không được vượt quá 100 ký tự.';
  }

  if (!trimmed.email) {
    errors.email = 'Vui lòng nhập email.';
  } else if (!EMAIL_PATTERN.test(trimmed.email)) {
    errors.email = 'Email không đúng định dạng.';
  }

  if (trimmed.phone) {
    if (trimmed.phone.length > CONTACT_FIELD_LIMITS.phone.max) {
      errors.phone = 'Số điện thoại không được vượt quá 30 ký tự.';
    } else if (!PHONE_PATTERN.test(trimmed.phone)) {
      errors.phone = 'Số điện thoại chứa ký tự không hợp lệ.';
    }
  }

  if (!trimmed.message) {
    errors.message = 'Vui lòng nhập nội dung ghi chú.';
  } else if (trimmed.message.length < CONTACT_FIELD_LIMITS.message.min) {
    errors.message = 'Nội dung cần ít nhất 10 ký tự.';
  } else if (trimmed.message.length > CONTACT_FIELD_LIMITS.message.max) {
    errors.message = 'Nội dung không được vượt quá 5000 ký tự.';
  }

  return errors;
};

export const hasContactErrors = (errors: ContactFormFieldErrors): boolean =>
  Object.keys(errors).length > 0;

export const isContactFormField = (path: string): path is ContactFormField =>
  path === 'name' ||
  path === 'email' ||
  path === 'phone' ||
  path === 'message';

export const mapContactErrorDetails = (
  details: ContactValidationDetail[] | undefined,
): ContactFormFieldErrors => {
  if (!Array.isArray(details)) {
    return {};
  }

  const errors: ContactFormFieldErrors = {};

  for (const detail of details) {
    if (!detail?.path || !isContactFormField(detail.path) || errors[detail.path]) {
      continue;
    }

    errors[detail.path] = detail.message;
  }

  return errors;
};

export const getFirstInvalidField = (
  errors: ContactFormFieldErrors,
): ContactFormField | undefined => {
  const order: ContactFormField[] = ['email', 'phone', 'name', 'message'];

  return order.find((field) => Boolean(errors[field]));
};
