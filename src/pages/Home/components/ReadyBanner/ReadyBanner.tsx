import './ReadyBanner.css';

export const ReadyBanner = () => {
  return (
    <div className="ready-banner">
      <div className="ready-banner__shadow" aria-hidden="true" />
      <div className="ready-banner__bar" aria-hidden="true" />
      <p className="ready-banner__text">ARE YOU READY ?</p>
    </div>
  );
};
