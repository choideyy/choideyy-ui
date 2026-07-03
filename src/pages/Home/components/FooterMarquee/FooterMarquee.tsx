import logoChoideyy from '../../../../assets/figma/logo-choideyy.png';
import mascotSpeaker from '../../../../assets/figma/mascot-speaker.png';
import './FooterMarquee.css';

const MARQUEE_ITEMS = 5;

export const FooterMarquee = () => {
  return (
    <div className="footer-marquee" aria-hidden="true">
      <div className="footer-marquee__track">
        {Array.from({ length: MARQUEE_ITEMS }).map((_, index) => (
          <div key={index} className="footer-marquee__item">
            <img
              className="footer-marquee__mascot"
              src={mascotSpeaker}
              alt=""
              width={127}
              height={89}
            />
            <img
              className="footer-marquee__logo"
              src={logoChoideyy}
              alt=""
              width={137}
              height={89}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
