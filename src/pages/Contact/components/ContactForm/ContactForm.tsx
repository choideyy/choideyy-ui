import { FormEvent, useState } from 'react';
import './ContactForm.css';

export const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="contact-form" aria-labelledby="contact-form-heading">
      <div className="contact-form__label">
        <p id="contact-form-heading">FORM</p>
      </div>

      <form className="contact-form__panel" onSubmit={handleSubmit}>
        <div className="contact-form__row contact-form__row--split">
          <label className="contact-form__field">
            <span className="contact-form__field-label">Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__field-label">Số điện thoại</span>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              autoComplete="tel"
            />
          </label>
        </div>

        <label className="contact-form__field contact-form__field--full">
          <span className="contact-form__field-label">
            Họ và tên/Tên doanh nghiệp
          </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />
        </label>

        <label className="contact-form__field contact-form__field--full contact-form__field--textarea">
          <span className="contact-form__field-label">Ghi chú</span>
          <textarea
            name="notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={8}
          />
        </label>

        <button type="submit" className="contact-form__submit">
          Gửi thông tin
        </button>
      </form>
    </section>
  );
};
