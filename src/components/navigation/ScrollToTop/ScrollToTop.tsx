import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      const scrollToTarget = () => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'auto',
          block: 'start',
        });
      };

      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToTarget);
      });

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};
