import { useEffect, useRef, useState } from 'react';
import './Snackbar.css';

export type SnackbarVariant = 'success' | 'error' | 'info' | 'warning';

type SnackbarProps = {
  open: boolean;
  message: string;
  variant?: SnackbarVariant;
  duration?: number;
  onClose: () => void;
};

const EXIT_DURATION_MS = 300;
const DEFAULT_DURATION_MS = 4500;

export const Snackbar = ({
  open,
  message,
  variant = 'info',
  duration = DEFAULT_DURATION_MS,
  onClose,
}: SnackbarProps) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCloseRef = useRef(onClose);
  const isRenderedRef = useRef(false);

  onCloseRef.current = onClose;

  useEffect(() => {
    const clearTimers = () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }

      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };

    const scheduleExit = (notifyClose: boolean) => {
      clearTimers();
      setIsVisible(false);

      exitTimerRef.current = setTimeout(() => {
        isRenderedRef.current = false;
        setIsRendered(false);

        if (notifyClose) {
          onCloseRef.current();
        }
      }, EXIT_DURATION_MS);
    };

    if (!open || !message) {
      if (isRenderedRef.current) {
        scheduleExit(false);
      }

      return clearTimers;
    }

    clearTimers();
    isRenderedRef.current = true;
    setIsRendered(true);

    const enterFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });

    hideTimerRef.current = setTimeout(() => {
      scheduleExit(true);
    }, duration);

    return () => {
      cancelAnimationFrame(enterFrame);
      clearTimers();
    };
  }, [open, message, duration]);

  if (!isRendered || !message) {
    return null;
  }

  const role = variant === 'error' ? 'alert' : 'status';
  const ariaLive = variant === 'error' ? 'assertive' : 'polite';

  return (
    <div className="snackbar-host" aria-live={ariaLive}>
      <div
        className={`snackbar snackbar--${variant}${
          isVisible ? ' snackbar--visible' : ''
        }`}
        role={role}
      >
        <p className="snackbar__message">{message}</p>
      </div>
    </div>
  );
};
