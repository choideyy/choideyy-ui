import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, TransitionEvent } from 'react';
import judge1 from '../../../../assets/figma/event/judge-1.png';
import judge2 from '../../../../assets/figma/event/judge-2.png';
import judge3 from '../../../../assets/figma/event/judge-3.png';
import judge4 from '../../../../assets/figma/event/judge-4.png';
import { CarouselControls } from '../CarouselControls';
import './JudgesCarousel.css';

const JUDGES = [
  {
    id: 'judge-1',
    image: judge1,
    name: 'JUDGE Crazy Monkey',
  },
  {
    id: 'judge-2',
    image: judge2,
    name: 'JUDGE C2 Low',
  },
  {
    id: 'judge-3',
    image: judge3,
    name: 'JUDGE CK Animation ',
  },
  {
    id: 'judge-4',
    image: judge4,
    name: 'JUDGE MAITINHVI',
  },
] as const;

const JUDGE_COUNT = JUDGES.length;

const EXTENDED_JUDGES = [
  JUDGES[JUDGE_COUNT - 1],
  ...JUDGES,
  JUDGES[0],
];

const START_INDEX = 1;
const AUTO_ADVANCE_MS = 4000;

export const JudgesCarousel = () => {
  const [trackIndex, setTrackIndex] = useState(START_INDEX);
  const [enableTransition, setEnableTransition] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimatingRef = useRef(false);
  const isResettingRef = useRef(false);

  const clearAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoAdvance = useCallback(() => {
    clearAutoAdvance();
    intervalRef.current = setInterval(() => {
      if (isAnimatingRef.current || isResettingRef.current) {
        return;
      }

      isAnimatingRef.current = true;
      setEnableTransition(true);
      setTrackIndex((current) => current + 1);
    }, AUTO_ADVANCE_MS);
  }, [clearAutoAdvance]);

  const goToNext = useCallback(() => {
    if (isAnimatingRef.current || isResettingRef.current) {
      return;
    }

    isAnimatingRef.current = true;
    setEnableTransition(true);
    setTrackIndex((current) => current + 1);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const goToPrevious = useCallback(() => {
    if (isAnimatingRef.current || isResettingRef.current) {
      return;
    }

    isAnimatingRef.current = true;
    setEnableTransition(true);
    setTrackIndex((current) => current - 1);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    isAnimatingRef.current = false;

    if (trackIndex === 0) {
      isResettingRef.current = true;
      setEnableTransition(false);
      setTrackIndex(JUDGE_COUNT);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          isResettingRef.current = false;
        });
      });
      return;
    }

    if (trackIndex === JUDGE_COUNT + 1) {
      isResettingRef.current = true;
      setEnableTransition(false);
      setTrackIndex(START_INDEX);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          isResettingRef.current = false;
        });
      });
    }
  };

  useEffect(() => {
    startAutoAdvance();
    return clearAutoAdvance;
  }, [clearAutoAdvance, startAutoAdvance]);

  const activeIndex =
    ((trackIndex - START_INDEX) % JUDGE_COUNT + JUDGE_COUNT) % JUDGE_COUNT;

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
              </article>
            );
          })}
        </div>
      </div>

      <p className="event-judges__sr-only">
        Showing judge {activeIndex + 1} of {JUDGE_COUNT}
      </p>
    </section>
  );
};
