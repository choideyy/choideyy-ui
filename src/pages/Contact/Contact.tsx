import bgImage from '../../assets/figma/contact/bg.png';
import scrollTopIcon from '../../assets/figma/scroll-top.svg';
import { ContactForm } from './components/ContactForm';
import { ContactHero } from './components/ContactHero';
import { ContactInfoCards } from './components/ContactInfoCards';
import './Contact.css';

export const Contact = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="contact">
      <img className="contact__bg" src={bgImage} alt="" aria-hidden="true" />

      <main className="contact__main">
        <ContactHero />
        <ContactInfoCards />
        <ContactForm />

        <button
          type="button"
          className="contact__scroll-top"
          aria-label="Scroll to top"
          onClick={handleScrollTop}
        >
          <img src={scrollTopIcon} alt="" aria-hidden="true" />
        </button>
      </main>
    </div>
  );
};
