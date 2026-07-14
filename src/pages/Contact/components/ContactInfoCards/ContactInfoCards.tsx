 import iconEmail from '../../../../assets/figma/contact/icon-email.svg';
import iconFacebook from '../../../../assets/figma/contact/icon-facebook.svg';
import iconPhone from '../../../../assets/figma/contact/icon-phone.svg';
import './ContactInfoCards.css';

const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/profile.php?id=61576861010889';

const CONTACT_CARDS = [
  {
    id: 'email',
    icon: iconEmail,
    href: 'mailto:choideyyy@gmail.com',
    iconOffsetX : 0,
    iconOffsetY : 0,
    content: (
      <p className="contact-info-cards__text contact-info-cards__text--single">
        choideyyy@gmail.com
      </p>
    ),
  },
  {
    id: 'phone',
    icon: iconPhone,
    href: 'tel:+84971723158',
    iconOffsetX : -20,
    iconOffsetY : 0,
    content: (
      <div className="contact-info-cards__text-group">
        <p className="contact-info-cards__text">(+84) 971 723 158</p>
        <p className="contact-info-cards__subtext">Hà Phương</p>
      </div>
    ),
  },
  {
    id: 'facebook',
    icon: iconFacebook,
    href: FACEBOOK_PAGE_URL,
    iconOffsetX : -25,
    iconOffsetY : 0,
    content: (
      <div className="contact-info-cards__text-group">
        <p className="contact-info-cards__text">CHỌI DEYYY</p>
        <p className="contact-info-cards__subtext">Dance Competiton</p>
      </div>
    ),
  },
] as const;

export const ContactInfoCards = () => {
  return (
    <section className="contact-info-cards" aria-label="Contact information">
      <ul className="contact-info-cards__list">
        {CONTACT_CARDS.map((card) => (
          <li key={card.id}>
            <a
              className="contact-info-cards__card"
              href={card.href}
              target={card.id === 'facebook' ? '_blank' : undefined}
              rel={card.id === 'facebook' ? 'noreferrer' : undefined}
            >
              <img
                src={card.icon}
                alt=""
                aria-hidden="true"
                style={{
                  '--icon-offset-x': `${card.iconOffsetX ?? 0}px`,
                  '--icon-offset-y': `${card.iconOffsetY ?? 0}px`,
                } as React.CSSProperties}
              />
              {card.content}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
