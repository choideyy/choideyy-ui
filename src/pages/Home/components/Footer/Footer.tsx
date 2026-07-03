import footerBg from '../../../../assets/figma/footer-bg.png';
import footerAvatar from '../../../../assets/figma/footer-avatar.png';
import socialFacebook from '../../../../assets/figma/social-facebook.png';
import socialInstagram from '../../../../assets/figma/social-instagram.png';
import socialYoutube from '../../../../assets/figma/social-youtube.png';
import socialTiktok from '../../../../assets/figma/social-tiktok.png';
import './Footer.css';

const SOCIAL_LINKS = [
  { name: 'Facebook', icon: socialFacebook, href: '#' },
  { name: 'Instagram', icon: socialInstagram, href: '#' },
  { name: 'YouTube', icon: socialYoutube, href: '#' },
  { name: 'TikTok', icon: socialTiktok, href: '#' },
] as const;

export const Footer = () => {

  return (
    <footer className="footer" id="contact">
      <img className="footer__bg" src={footerBg} alt="" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__avatar-wrap">
          <img
            className="footer__avatar"
            src={footerAvatar}
            alt="Chọi Deyyy mascot"
            width={300}
            height={300}
          />
        </div>

        <div className="footer__contact">
          <h3 className="footer__heading">THÔNG TIN LIÊN HỆ</h3>
          <p className="footer__email">choideyyy@gmail.com</p>
          <p className="footer__phone">
            (+84) 971723158 - Nguyễn Thị Hà Phương
          </p>
        </div>

        <div className="footer__social">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="footer__social-link"
              aria-label={link.name}
            >
              <img src={link.icon} alt="" width={93} height={93} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
