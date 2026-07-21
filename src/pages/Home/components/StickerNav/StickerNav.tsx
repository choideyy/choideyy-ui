import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import stickerBg from '../../../../assets/figma/sticker-bg.png';
import stickerDeco from '../../../../assets/figma/sticker-deco.png';
import './StickerNav.css';

const STICKER_ROUTES = {
  contact: '/contact',
  event: '/event',
  about: '/about-us',
  recap: '/recap',
} as const;

type StickerItem = {
  id: keyof typeof STICKER_ROUTES;
  label: string;
  ariaLabel: string;
  fontFamily: string;
  fontSize: number;
  stickerWidth: number;
  labelMaxWidth: number;
  labelOffsetX?: number;
  labelOffsetY?: number;
  color: string;
  textTransform?: 'lowercase' | 'uppercase' | 'none';
  textShadow?: string;
  rotation: number;
  stickerRotation: number;
  position: {
    top: string;
    left: string;
  };
};

const STICKERS: StickerItem[] = [
  {
    id: 'contact',
    label: 'contact',
    ariaLabel: 'Navigate to Contact page',
    fontFamily: 'var(--font-aerosoldier)',
    fontSize: 96,
    stickerWidth: 450,
    labelMaxWidth: 287,
    color: 'var(--black)',
    textTransform: 'lowercase',
    rotation: -12.92,
    stickerRotation: -16.97,
    position: { top: '2.7%', left: '2.4%' },
  },
  {
    id: 'event',
    label: 'event',
    ariaLabel: 'Navigate to Event page',
    fontFamily: 'var(--font-slopdogz)',
    fontSize: 180,
    stickerWidth: 450,
    labelMaxWidth: 319,
    color: 'var(--charcoal-black)',
    textTransform: 'lowercase',
    rotation: -15.7,
    stickerRotation: 2.23,
    position: { top: '35.6%', left: '16.2%' },
  },
  {
    id: 'about',
    label: 'about us',
    ariaLabel: 'Navigate to About Us page',
    fontFamily: 'var(--font-slopdogz)',
    fontSize: 128,
    stickerWidth: 450,
    labelMaxWidth: 272,
    color: 'var(--black)',
    textTransform: 'lowercase',
    rotation: 6.09,
    stickerRotation: 4.93,
    position: { top: '6.7%', left: '44.2%' },
  },
  {
    id: 'recap',
    label: 'recap',
    ariaLabel: 'Navigate to Recap page',
    fontFamily: 'var(--font-another-tag)',
    fontSize: 150,
    stickerWidth: 450,
    labelMaxWidth: 225,
    color: 'var(--charcoal-black)',
    textTransform: 'uppercase',
    textShadow: '1px 2px 4px rgba(0, 0, 0, 0.25)',
    rotation: -1.19,
    stickerRotation: -5.68,
    position: { top: '32.5%', left: '60.1%' },
    labelOffsetY: 25,
  },
];

const stickerStyle = (sticker: StickerItem): CSSProperties =>
  ({
    '--sticker-width': sticker.stickerWidth,
    '--label-font-size': sticker.fontSize,
    '--label-max-width': sticker.labelMaxWidth,
    '--offset-x': `${sticker.labelOffsetX ?? 0}px`,
    '--offset-y': `${sticker.labelOffsetY ?? 0}px`,
    top: sticker.position.top,
    left: sticker.position.left,
  }) as CSSProperties;

export const StickerNav = () => {
  return (
    <section className="sticker-nav" aria-label="Quick navigation">
      <div className="sticker-nav__scale">
        <div className="sticker-nav__grid">
          <div className="sticker-nav__deco" aria-hidden="true">
            <img src={stickerDeco} alt="" />
          </div>

          {STICKERS.map((sticker) => (
            <Link
              key={sticker.id}
              to={STICKER_ROUTES[sticker.id]}
              className={`sticker-nav__item${
                sticker.id === 'event' ? ' sticker-nav__item--event' : ''
              }${
                sticker.id === 'contact' ? ' sticker-nav__item--contact' : ''
              }`}
              style={stickerStyle(sticker)}
              aria-label={sticker.ariaLabel}
            >
              <div
                className="sticker-nav__sticker"
                style={{ transform: `rotate(${sticker.stickerRotation}deg)` }}
              >
                <img
                  className="sticker-nav__bg"
                  src={stickerBg}
                  alt=""
                  aria-hidden="true"
                />
                <span
                  className="sticker-nav__label"
                  aria-hidden="true"
                  style={{
                    fontFamily: sticker.fontFamily,
                    color: sticker.color,
                    textTransform: sticker.textTransform,
                    textShadow: sticker.textShadow,
                    transform: `rotate(${sticker.rotation}deg)`,
                  }}
                >
                  {sticker.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
