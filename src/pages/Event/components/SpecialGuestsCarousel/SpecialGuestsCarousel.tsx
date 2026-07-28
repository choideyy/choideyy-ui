import { useAutoCarousel } from '../../hooks/useAutoCarousel';
import { CarouselControls } from '../CarouselControls';
import specialGuest from '../../../../assets/figma/event/special-guest.png';
// TODO: replace with your actual NTT guest image import(s)
import nttGuestImage from '../../../../assets/figma/event/special-guest-ntt.png';
import './SpecialGuestsCarousel.css';

export type SpecialGuest = {
  id: string;
  image: string;
  name: string;
};

type SpecialGuestsCarouselProps = {
  title: string;
  guests: readonly SpecialGuest[];
  headingId: string;
  intervalMs?: number;
  className?: string;
};

const SpecialGuestsCarousel = ({
  title,
  guests,
  headingId,
  intervalMs = 4000,
  className = '',
}: SpecialGuestsCarouselProps) => {

  const { activeIndex, goToNext, goToPrevious } = useAutoCarousel({
    itemCount: guests.length,
    intervalMs,
  });

  if (guests.length === 0) {
    return null;
  }

  const guest = guests[activeIndex];

  return (
     <section
        className={`event-guests ${className}`.trim()}
        aria-labelledby={headingId}
      >
      <div className="event-guests__header">
        <h2 id={headingId} className="event-guests__title">
          {title}
        </h2>
        {guests.length > 1 && (
          <CarouselControls
            onPrevious={goToPrevious}
            onNext={goToNext}
            previousLabel={`Previous ${title.toLowerCase()}`}
            nextLabel={`Next ${title.toLowerCase()}`}
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

const SPECIAL_GUESTS_1 = [
  { id: 'os-crew', image: specialGuest, name: 'OS CREW' },
] as const;

const SPECIAL_GUESTS_NTT = [
  { id: 'ntt-guest-1', image: nttGuestImage, name: 'NHP MEDIA PRODUCTIONS' },
] as const;

export const SpecialGuestsSection = () => {
  return (
    <>
      <SpecialGuestsCarousel
        title="ĐƠN VỊ BẢO TRỢ CHUYÊN MÔN"
        guests={SPECIAL_GUESTS_1}
        headingId="event-guests-heading-1"
        className="event-guests--stacked"
      />

      <SpecialGuestsCarousel
        title="ĐƠN VỊ BẢO TRỢ HÌNH ẢNH"
        guests={SPECIAL_GUESTS_NTT}
        headingId="event-guests-heading-ntt"
      />
    </>
  );
};