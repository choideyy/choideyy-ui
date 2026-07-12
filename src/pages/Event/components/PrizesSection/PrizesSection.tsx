import type { CSSProperties } from 'react';
import decoration from '../../../../assets/figma/event/decoration.png';
import './PrizesSection.css';

const PRIZES = [
  {
    title: 'Best Performance',
    amount: '2.000.000 VND',
    rotation: '-1.66deg',
  },
  {
    title: 'Giải Nhất hạng mục Crew vs Crew',
    amount: '5.000.000 VND',
    rotation: '2.26deg',
  },
  {
    title: 'Giải Nhất hạng mục 2 vs 2 All Style',
    amount: '3.000.000 VND',
    rotation: '-0.64deg',
  },
] as const;

export const PrizesSection = () => {
  return (
    <section className="event-prizes" aria-labelledby="event-prizes-heading">
      <h2 id="event-prizes-heading" className="event-prizes__title">
        GIẢI THƯỞNG
      </h2>

      <ul className="event-prizes__list">
        {PRIZES.map((prize) => (
          <li
            key={prize.title}
            className="event-prizes__item"
            style={
              { '--prize-rotation': prize.rotation } as CSSProperties
            }
          >
            <p className="event-prizes__item-title">{prize.title}</p>
            <p className="event-prizes__item-amount">{prize.amount}</p>
          </li>
        ))}
      </ul>

      <img
        className="event-prizes__decoration"
        src={decoration}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};
