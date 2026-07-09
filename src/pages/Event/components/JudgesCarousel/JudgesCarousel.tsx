import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import judge1 from '../../../../assets/figma/event/judge-1.png';
import judge2 from '../../../../assets/figma/event/judge-2.png';
import judge3 from '../../../../assets/figma/event/judge-3.png';
import { CarouselControls } from '../CarouselControls';
import './JudgesCarousel.css';

const JUDGES = [
  {
    id: 'judge-1',
    image: judge1,
    name: 'JUDGE',
  },
  {
    id: 'judge-2',
    image: judge2,
    name: 'JUDGE OK ANIMATION',
  },
  {
    id: 'judge-3',
    image: judge3,
    name: 'JUDGE',
  },
] as const;

const EXTENDED_JUDGES = [
  JUDGES[JUDGES.length - 1],
  ...JUDGES,
  JUDGES[0],
];

const AUTO_ADVANCE_MS = 4000;

export const JudgesCarousel = () => {
  const [trackIndex, setTrackIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoAdvance = useCallback(() => {
    clearAutoAdvance();
    intervalRef.current = setInterval(() => {
      setEnableTransition(true);
      setTrackIndex((current) => current + 1);
    }, AUTO_ADVANCE_MS);
  }, [clearAutoAdvance]);

  const goToNext = useCallback(() => {
    setEnableTransition(true);
    setTrackIndex((current) => current + 1);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const goToPrevious = useCallback(() => {
    setEnableTransition(true);
    setTrackIndex((current) => current - 1);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const handleTransitionEnd = () => {
    if (trackIndex === 0) {
      setEnableTransition(false);
      setTrackIndex(JUDGES.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
      return;
    }

    if (trackIndex === JUDGES.length + 1) {
      setEnableTransition(false);
      setTrackIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  useEffect(() => {
    startAutoAdvance();
    return clearAutoAdvance;
  }, [clearAutoAdvance, startAutoAdvance]);

  const activeIndex = ((trackIndex - 1) % JUDGES.length + JUDGES.length) % JUDGES.length;

  return (
    <section className="event-judges" aria-labelledby="event-judges-heading">
      <div className="event-judges__header">
        <h2 id="event-judges-heading" className="event-judges__title">
          JUDGES
        </h2>
        <CarouselControls
          onPrevious={goToPrevious}
          onNext={goToNext}
          previousLabel="Previous judge"
          nextLabel="Next judge"
        />
      </div>

      <div className="event-judges__viewport" aria-live="polite">
        <div
          className={`event-judges__track${
            enableTransition ? '' : ' event-judges__track--instant'
          }`}
          style={{ '--track-index': trackIndex } as CSSProperties}
          onTransitionEnd={handleTransitionEnd}
        >
          {EXTENDED_JUDGES.map((judge, index) => {
            const isActive = index === trackIndex;

            return (
              <article
                key={`${judge.id}-${index}`}
                className={`event-judges__card${
                  isActive ? ' event-judges__card--active' : ''
                }`}
                aria-hidden={!isActive}
              >
                <img
                  className="event-judges__image"
                  src={judge.image}
                  alt={judge.name}
                />
                <p className="event-judges__name">{judge.name}</p>
              </article>
            );
          })}
        </div>
      </div>

      <p className="event-judges__sr-only">
        Showing judge {activeIndex + 1} of {JUDGES.length}
      </p>
    </section>
  );
};
