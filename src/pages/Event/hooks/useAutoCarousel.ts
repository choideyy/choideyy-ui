import { useCallback, useEffect, useRef, useState } from 'react';

type UseAutoCarouselOptions = {
  itemCount: number;
  intervalMs?: number;
};

export const useAutoCarousel = ({
  itemCount,
  intervalMs = 4000,
}: UseAutoCarouselOptions) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoAdvance = useCallback(() => {
    clearAutoAdvance();
    if (itemCount <= 1) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, intervalMs);
  }, [clearAutoAdvance, intervalMs, itemCount]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % itemCount);
    startAutoAdvance();
  }, [itemCount, startAutoAdvance]);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + itemCount) % itemCount);
    startAutoAdvance();
  }, [itemCount, startAutoAdvance]);

  useEffect(() => {
    startAutoAdvance();
    return clearAutoAdvance;
  }, [clearAutoAdvance, startAutoAdvance]);

  return {
    activeIndex,
    goToNext,
    goToPrevious,
  };
};
