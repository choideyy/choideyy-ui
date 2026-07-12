import type { CSSProperties } from 'react';
import './RoundBanner.css';

type RoundBannerProps = {
  label: string;
  rotation?: string;
  align?: 'left' | 'center' | 'right';
};

export const RoundBanner = ({
  label,
  rotation = '-2.42deg',
  align = 'left',
}: RoundBannerProps) => {
  return (
    <div
      className={`round-banner round-banner--${align}`}
      style={{ '--banner-rotation': rotation } as CSSProperties}
    >
      <p className="round-banner__text">{label}</p>
    </div>
  );
};
