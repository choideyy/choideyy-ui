import carouselArrow from '../../../../assets/figma/event/carousel-arrow.png';
import './CarouselControls.css';

type CarouselControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
};

export const CarouselControls = ({
  onPrevious,
  onNext,
  previousLabel,
  nextLabel,
}: CarouselControlsProps) => {
  return (
    <div className="carousel-controls">
      <button
        type="button"
        className="carousel-controls__button carousel-controls__button--previous"
        aria-label={previousLabel}
        onClick={onPrevious}
      >
        <img src={carouselArrow} alt="" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="carousel-controls__button carousel-controls__button--next"
        aria-label={nextLabel}
        onClick={onNext}
      >
        <img src={carouselArrow} alt="" aria-hidden="true" />
      </button>
    </div>
  );
};
