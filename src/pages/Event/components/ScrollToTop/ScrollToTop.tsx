import scrollTopIcon from '../../../../assets/figma/scroll-top.png';
import './ScrollToTop.css';

export const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className="event-scroll-top"
      aria-label="Scroll to top"
      onClick={handleClick}
    >
      <img src={scrollTopIcon} alt="" aria-hidden="true" />
    </button>
  );
};
