import sponsorCircle from '../../../../assets/figma/event/sponsor-circle.png';
import sponsorsDeco from '../../../../assets/figma/event/sponsors-deco.png';
import { useAutoCarousel } from '../../hooks/useAutoCarousel';
import { CarouselControls } from '../CarouselControls';
import './SponsorsSection.css';

const SPONSOR_SLOTS = 5;

export const SponsorsSection = () => {
  const { activeIndex, goToNext, goToPrevious } = useAutoCarousel({
    itemCount: SPONSOR_SLOTS,
    intervalMs: 4000,
  });

  return (
    <section className="event-sponsors" aria-labelledby="event-sponsors-heading">
      <div className="event-sponsors__header">
        <h2 id="event-sponsors-heading" className="event-sponsors__title">
          NHÀ TÀI TRỢ
        </h2>
        <CarouselControls
          onPrevious={goToPrevious}
          onNext={goToNext}
          previousLabel="Previous sponsor"
          nextLabel="Next sponsor"
        />
      </div>

      <div className="event-sponsors__row" aria-live="polite">
        {Array.from({ length: SPONSOR_SLOTS }, (_, index) => (
          <div
            key={index}
            className={`event-sponsors__item${
              index === activeIndex ? ' event-sponsors__item--active' : ''
            }`}
          >
            <img
              src={sponsorCircle}
              alt={`Sponsor placeholder ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <img
        className="event-sponsors__deco"
        src={sponsorsDeco}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};
