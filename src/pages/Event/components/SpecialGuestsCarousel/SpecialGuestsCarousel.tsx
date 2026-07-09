import specialGuest from '../../../../assets/figma/event/special-guest.png';
import { useAutoCarousel } from '../../hooks/useAutoCarousel';
import { CarouselControls } from '../CarouselControls';
import './SpecialGuestsCarousel.css';

const SPECIAL_GUESTS = [
  {
    id: 'os-crew',
    image: specialGuest,
    name: 'OS CREW',
  },
] as const;

export const SpecialGuestsCarousel = () => {
  const { activeIndex, goToNext, goToPrevious } = useAutoCarousel({
    itemCount: SPECIAL_GUESTS.length,
    intervalMs: 4000,
  });

  const guest = SPECIAL_GUESTS[activeIndex];

  return (
    <section className="event-guests" aria-labelledby="event-guests-heading">
      <div className="event-guests__header">
        <h2 id="event-guests-heading" className="event-guests__title">
          SPECIAL GUESTS
        </h2>
        {SPECIAL_GUESTS.length > 1 && (
          <CarouselControls
            onPrevious={goToPrevious}
            onNext={goToNext}
            previousLabel="Previous special guest"
            nextLabel="Next special guest"
          />
        )}
      </div>

      <article className="event-guests__card" aria-live="polite">
        <img
          className="event-guests__image"
          src={guest.image}
          alt={guest.name}
        />
        <p className="event-guests__name">{guest.name}</p>
      </article>
    </section>
  );
};
