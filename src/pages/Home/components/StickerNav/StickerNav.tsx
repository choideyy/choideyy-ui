import type { CSSProperties } from 'react';
import stickerBg from '../../../../assets/figma/sticker-bg.png';
import stickerDeco from '../../../../assets/figma/sticker-deco.png';
import './StickerNav.css';

type StickerItem = {
  id: string;
  label: string;
  href: string;
  fontFamily: string;
  fontSize: number;
  stickerWidth: number;
  labelMaxWidth: number;
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
    href: '#contact',
    fontFamily: 'var(--font-aerosoldier)',
    fontSize: 96,
    stickerWidth: 481,
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
    href: '#event',
    fontFamily: 'var(--font-slopdogz)',
    fontSize: 180,
    stickerWidth: 481,
    labelMaxWidth: 319,
    color: 'var(--charcoal-black)',
    textTransform: 'lowercase',
    rotation: -15.7,
    stickerRotation: 2.23,
    position: { top: '25.6%', left: '19.2%' },
  },
  {
    id: 'about',
    label: 'about us',
    href: '#about',
    fontFamily: 'var(--font-slopdogz)',
    fontSize: 128,
    stickerWidth: 481,
    labelMaxWidth: 272,
    color: 'var(--black)',
    textTransform: 'lowercase',
    rotation: 6.09,
    stickerRotation: 4.93,
    position: { top: '6.7%', left: '45.2%' },
  },
  {
    id: 'recap',
    label: 'recap',
    href: '#recap',
    fontFamily: 'var(--font-another-tag)',
    fontSize: 150,
    stickerWidth: 481,
    labelMaxWidth: 225,
    color: 'var(--charcoal-black)',
    textTransform: 'uppercase',
    textShadow: '1px 2px 4px rgba(0, 0, 0, 0.25)',
    rotation: -1.19,
    stickerRotation: -5.68,
    position: { top: '27.5%', left: '60.1%' },
  },
];

const stickerStyle = (sticker: StickerItem): CSSProperties =>
  ({
    '--sticker-width': sticker.stickerWidth,
    '--label-font-size': sticker.fontSize,
    '--label-max-width': sticker.labelMaxWidth,
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
            <a
              key={sticker.id}
              href={sticker.href}
              className={`sticker-nav__item${
                sticker.id === 'event' ? ' sticker-nav__item--event' : ''
              }${
                sticker.id === 'contact' ? ' sticker-nav__item--contact' : ''
                }`}
              style={stickerStyle(sticker)}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
