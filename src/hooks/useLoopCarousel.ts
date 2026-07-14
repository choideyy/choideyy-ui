import { useCallback, useEffect, useRef, useState } from 'react';
import type { TransitionEvent } from 'react';

const AUTO_ADVANCE_MS = 4000;
const START_INDEX = 1;

export const useLoopCarousel = (itemCount: number) => {
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
      if (isAnimatingRef.current || isResettingRef.current) return;
      isAnimatingRef.current = true;
      setEnableTransition(true);
      setTrackIndex((current) => current + 1);
    }, AUTO_ADVANCE_MS);
  }, [clearAutoAdvance]);

  const goToNext = useCallback(() => {
    if (isAnimatingRef.current || isResettingRef.current) return;
    isAnimatingRef.current = true;
    setEnableTransition(true);
    setTrackIndex((current) => current + 1);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const goToPrevious = useCallback(() => {
    if (isAnimatingRef.current || isResettingRef.current) return;
    isAnimatingRef.current = true;
    setEnableTransition(true);
    setTrackIndex((current) => current - 1);
    startAutoAdvance();
  }, [startAutoAdvance]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== 'transform') return;

    isAnimatingRef.current = false;

    if (trackIndex === 0) {
      isResettingRef.current = true;
      setEnableTransition(false);
      setTrackIndex(itemCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          isResettingRef.current = false;
        });
      });
      return;
    }

    if (trackIndex === itemCount + 1) {
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
    if (itemCount === 0) return;
    startAutoAdvance();
    return clearAutoAdvance;
  }, [clearAutoAdvance, startAutoAdvance, itemCount]);

  const activeIndex =
    ((trackIndex - START_INDEX) % itemCount + itemCount) % itemCount;

  return {
    trackIndex,
    enableTransition,
    goToNext,
    goToPrevious,
    handleTransitionEnd,
    activeIndex,
    START_INDEX,
  };
};