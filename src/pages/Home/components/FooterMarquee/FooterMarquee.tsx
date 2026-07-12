import logoChoideyy from '../../../../assets/figma/logo-choideyy.png';
import mascotSpeaker from '../../../../assets/figma/mascot-speaker.png';
import './FooterMarquee.css';

const MARQUEE_ITEMS = 5;

const MarqueeItem = () => (
  <div className="footer-marquee__item">
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
);

export const FooterMarquee = () => {
  const items = Array.from({ length: MARQUEE_ITEMS }, (_, index) => (
    <MarqueeItem key={index} />
  ));

  return (
    <div className="footer-marquee" aria-hidden="true">
      <div className="footer-marquee__track">
        <div className="footer-marquee__group">{items}</div>
        <div className="footer-marquee__group">{items}</div>
      </div>
    </div>
  );
};
