import { useEffect, useMemo, useState } from 'react';
import './Countdown.css';

/** 08/08/2026 13:00 Asia/Ho_Chi_Minh (UTC+7, no DST) */
export const EVENT_TARGET_DATE = new Date('2026-08-08T13:00:00+07:00');

type CountdownProps = {
  targetDate?: Date;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const LABELS = ['Ngày', 'Giờ', 'Phút', 'Giây'] as const;
const ZERO_TIME: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const getTimeLeft = (target: Date): TimeLeft => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return ZERO_TIME;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (value: number) => String(value).padStart(2, '0');

export const Countdown = ({ targetDate }: CountdownProps) => {
  const target = useMemo(
    () => targetDate ?? EVENT_TARGET_DATE,
    [targetDate]
  );
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));

    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  const values = [
    pad(timeLeft.days),
    pad(timeLeft.hours),
    pad(timeLeft.minutes),
    pad(timeLeft.seconds),
  ];

  return (
    <div className="countdown" aria-label="Event countdown">
      <div className="countdown__values">
        {values.map((value, index) => (
          <span key={LABELS[index]} className="countdown__group">
            <span className="countdown__number">{value}</span>
            {index < values.length - 1 && (
              <span className="countdown__separator">:</span>
            )}
          </span>
        ))}
      </div>
      <div className="countdown__labels">
        {LABELS.map((label) => (
          <span key={label} className="countdown__label">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
