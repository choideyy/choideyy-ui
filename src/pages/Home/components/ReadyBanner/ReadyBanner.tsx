import './ReadyBanner.css';
import readyBannerImg from '../../../../assets/banner_ready.png';

export const ReadyBanner = () => {
  return (
    <div className="ready-banner">
      <img
        className="ready-banner__image"
        src={readyBannerImg}
        alt=""
        aria-hidden="true"
      />
      <p className="ready-banner__text">ARE YOU READY ?</p>
    </div>
  );
};