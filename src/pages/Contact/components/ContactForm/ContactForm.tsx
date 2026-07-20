import { useState, type FormEvent } from 'react';
import { Snackbar } from '../../../../components/Snackbar';
import {
  buildContactRequest,
  ContactSubmitError,
  submitContact,
} from '../../../../services/contact';
import type {
  ContactFormField,
  ContactFormFieldErrors,
  ContactFormValues,
} from '../../../../types/contact';
import {
  getFirstInvalidField,
  hasContactErrors,
  trimContactValues,
  validateContactForm,
} from '../../../../utils/contactValidation';
import './ContactForm.css';

const INITIAL_VALUES: ContactFormValues = {
  email: '',
  phone: '',
  name: '',
  message: '',
};

const SUCCESS_MESSAGE =
  'Thông tin của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất có thể.';

const FIELD_IDS: Record<ContactFormField, string> = {
  email: 'contact-email',
  phone: 'contact-phone',
  name: 'contact-name',
  message: 'contact-message',
};

type SnackbarState = {
  open: boolean;
  message: string;
  variant: 'success' | 'error';
};

const CLOSED_SNACKBAR: SnackbarState = {
  open: false,
  message: '',
  variant: 'success',
};

export const ContactForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [website, setWebsite] = useState('');
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [fieldErrors, setFieldErrors] = useState<ContactFormFieldErrors>({});
  const [snackbar, setSnackbar] = useState<SnackbarState>(CLOSED_SNACKBAR);
  const [snackbarKey, setSnackbarKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const focusField = (field: ContactFormField) => {
    document.getElementById(FIELD_IDS[field])?.focus();
  };

  const showSnackbar = (message: string, variant: 'success' | 'error') => {
    setSnackbarKey((current) => current + 1);
    setSnackbar({ open: true, message, variant });
  };

  const closeSnackbar = () => {
    setSnackbar((current) => ({ ...current, open: false }));
  };

  const updateField =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setValues((current) => {
        const nextValues = { ...current, [field]: nextValue };
        const nextErrors = validateContactForm(nextValues);

        setFieldErrors((currentErrors) => {
          if (!currentErrors[field]) {
            return currentErrors;
          }

          const updated = { ...currentErrors };

          if (!nextErrors[field]) {
            delete updated[field];
          } else {
            updated[field] = nextErrors[field];
          }

          return updated;
        });

        return nextValues;
      });
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSnackbar(CLOSED_SNACKBAR);
    setFieldErrors({});

    const trimmed = trimContactValues(values);
    const errors = validateContactForm(trimmed);

    if (hasContactErrors(errors)) {
      setFieldErrors(errors);
      showSnackbar(
        'Thông tin chưa hợp lệ. Vui lòng kiểm tra lại biểu mẫu.',
        'error',
      );

      const firstInvalidField = getFirstInvalidField(errors);
      if (firstInvalidField) {
        focusField(firstInvalidField);
      }

      return;
    }

    setIsSubmitting(true);

    try {
      await submitContact(
        buildContactRequest(trimmed, formStartedAt, website),
      );

      setValues(INITIAL_VALUES);
      setWebsite('');
      setFormStartedAt(Date.now());
      setFieldErrors({});
      showSnackbar(SUCCESS_MESSAGE, 'success');
    } catch (error) {
      if (error instanceof ContactSubmitError && hasContactErrors(error.fieldErrors)) {
        setFieldErrors(error.fieldErrors);

        const firstInvalidField = getFirstInvalidField(error.fieldErrors);
        if (firstInvalidField) {
          focusField(firstInvalidField);
        }
      }

      showSnackbar(
        error instanceof ContactSubmitError
          ? error.message
          : 'Không thể gửi biểu mẫu. Vui lòng thử lại.',
        'error',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" aria-labelledby="contact-form-heading">
      <div className="contact-form__label">
        <p id="contact-form-heading">FORM</p>
      </div>

      <form
        className="contact-form__panel"
        onSubmit={handleSubmit}
        noValidate
        aria-busy={isSubmitting}
      >
        <div className="contact-form__row contact-form__row--split">
          <label
            className={`contact-form__field${
              fieldErrors.email ? ' contact-form__field--invalid' : ''
            }`}
          >
            <span className="contact-form__field-label">Email</span>
            <input
              id={FIELD_IDS.email}
              type="email"
              name="email"
              value={values.email}
              onChange={updateField('email')}
              autoComplete="email"
              required
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={
                fieldErrors.email ? 'contact-email-error' : undefined
              }
            />
            {fieldErrors.email ? (
              <span
                id="contact-email-error"
                className="contact-form__field-error"
                role="alert"
              >
                {fieldErrors.email}
              </span>
            ) : null}
          </label>

          <label
            className={`contact-form__field${
              fieldErrors.phone ? ' contact-form__field--invalid' : ''
            }`}
          >
            <span className="contact-form__field-label">Số điện thoại</span>
            <input
              id={FIELD_IDS.phone}
              type="tel"
              name="phone"
              value={values.phone}
              onChange={updateField('phone')}
              autoComplete="tel"
              maxLength={30}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={
                fieldErrors.phone ? 'contact-phone-error' : undefined
              }
            />
            {fieldErrors.phone ? (
              <span
                id="contact-phone-error"
                className="contact-form__field-error"
                role="alert"
              >
                {fieldErrors.phone}
              </span>
            ) : null}
          </label>
        </div>

        <label
          className={`contact-form__field contact-form__field--full${
            fieldErrors.name ? ' contact-form__field--invalid' : ''
          }`}
        >
          <span className="contact-form__field-label">
            Họ và tên/Tên doanh nghiệp
          </span>
          <input
            id={FIELD_IDS.name}
            type="text"
            name="name"
            value={values.name}
            onChange={updateField('name')}
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={
              fieldErrors.name ? 'contact-name-error' : undefined
            }
          />
          {fieldErrors.name ? (
            <span
              id="contact-name-error"
              className="contact-form__field-error"
              role="alert"
            >
              {fieldErrors.name}
            </span>
          ) : null}
        </label>

        <label
          className={`contact-form__field contact-form__field--full contact-form__field--textarea${
            fieldErrors.message ? ' contact-form__field--invalid' : ''
          }`}
        >
          <span className="contact-form__field-label">Ghi chú</span>
          <textarea
            id={FIELD_IDS.message}
            name="message"
            value={values.message}
            onChange={updateField('message')}
            rows={8}
            required
            minLength={10}
            maxLength={5000}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={
              fieldErrors.message ? 'contact-message-error' : undefined
            }
          />
          {fieldErrors.message ? (
            <span
              id="contact-message-error"
              className="contact-form__field-error"
              role="alert"
            >
              {fieldErrors.message}
            </span>
          ) : null}
        </label>

        <div className="contact-form__honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </div>

        <button
          type="submit"
          className="contact-form__submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
        </button>
      </form>

      <Snackbar
        key={snackbarKey}
        open={snackbar.open}
        message={snackbar.message}
        variant={snackbar.variant}
        onClose={closeSnackbar}
      />
    </section>
  );
};
