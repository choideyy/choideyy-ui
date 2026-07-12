import bgImage from '../../../assets/figma/event/crew-vs-crew/bg.png';
import battleImage from '../../../assets/figma/event/crew-vs-crew/battle.png';
import decoBottom from '../../../assets/figma/event/crew-vs-crew/deco-bottom.png';
import decoLeft from '../../../assets/figma/event/crew-vs-crew/deco-left.png';
import decoRight from '../../../assets/figma/event/crew-vs-crew/deco-right.png';
import heroImage from '../../../assets/figma/event/crew-vs-crew/hero.png';
import iconAward from '../../../assets/figma/event/crew-vs-crew/icon-award.png';
import iconGroups from '../../../assets/figma/event/crew-vs-crew/icon-groups.png';
import iconTime from '../../../assets/figma/event/crew-vs-crew/icon-time.png';
import showcaseImage from '../../../assets/figma/event/crew-vs-crew/showcase.png';
import { BackToEvent } from '../components/BackToEvent';
import { ChampionCard } from '../components/ChampionCard';
import { RoundBanner } from '../components/RoundBanner';
import { ScrollToTop } from '../components/ScrollToTop';
import './CrewVsCrew.css';

const REQUIREMENTS = [
  {
    icon: iconAward,
    title: 'Yêu cầu về hạng mục',
    value: '<= 23 tuổi',
  },
  {
    icon: iconGroups,
    title: 'Số lượng thành viên',
    value: '3 → 8 người/đội',
  },
  {
    icon: iconTime,
    title: 'Thời lượng',
    value: '2m30 ~ 3m30',
  },
] as const;

const BATTLE_RULES = [
  'Đại diện các đội bốc cặp đấu loại trực tiếp',
  'Mỗi đội sẽ có 03 lượt đấu, tổng 06 lượt/trận (lần lượt giữa các đội thi)',
  'Thời lượng một lượt của mỗi đội: 1m30',
  'Mỗi trận được phép hòa tối đa 01 lần',
  'BGK chấm điểm & chọn 02 đội thắng vào FINAL',
] as const;

const FINAL_RULES = [
  'Mỗi đội có 04 lượt đấu, tổng 08 lượt/trận',
  'Thời lượng một lượt của mỗi đội: 1m30',
  'Vòng Final được phép hòa tối đa 02 lần',
] as const;

export const CrewVsCrew = () => {
  return (
    <div className="crew-vs-crew">
      <img className="crew-vs-crew__bg" src={bgImage} alt="" aria-hidden="true" />

      <main className="crew-vs-crew__main">
        <div className="crew-vs-crew__nav">
          <BackToEvent />
        </div>

        <h1 className="crew-vs-crew__title">CREW VS CREW</h1>

        <div className="crew-vs-crew__hero">
          <img src={heroImage} alt="" aria-hidden="true" />
        </div>

        <section className="crew-vs-crew__section" aria-labelledby="crew-showcase-heading">
          <RoundBanner label="Vòng Showcase" />

          <div className="crew-vs-crew__showcase-grid">
            <div className="crew-vs-crew__showcase-copy">
              <div className="crew-vs-crew__theme">
                <h2 id="crew-showcase-heading" className="crew-vs-crew__theme-title">
                  Học đường
                </h2>
                <p className="crew-vs-crew__theme-label">CHỦ ĐỀ</p>
              </div>

              <ul className="crew-vs-crew__requirements">
                {REQUIREMENTS.map((item) => (
                  <li key={item.title}>
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <div>
                      <p className="crew-vs-crew__req-title">{item.title}</p>
                      <p className="crew-vs-crew__req-value">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="crew-vs-crew__prize-box">
                <p className="crew-vs-crew__prize-label">Best performance</p>
                <p className="crew-vs-crew__prize-desc">
                  Tiết mục có phần trình diễn ấn tượng nhất do BGK lựa chọn
                </p>
                <p className="crew-vs-crew__prize-amount">2.000.000 VND</p>
              </div>
            </div>

            <img
              className="crew-vs-crew__showcase-image"
              src={showcaseImage}
              alt="Crew showcase performance"
            />
          </div>
        </section>

        <section className="crew-vs-crew__section" aria-labelledby="crew-battle-heading">
          <RoundBanner label="Vòng battle" rotation="1.68deg" align="right" />

          <div className="crew-vs-crew__battle-grid">
            <img
              className="crew-vs-crew__battle-image"
              src={battleImage}
              alt="Crew battle performance"
            />

            <div className="crew-vs-crew__battle-copy">
              <h2 id="crew-battle-heading" className="crew-vs-crew__battle-heading">
                TOP 8 VÀ BÁN KẾT
              </h2>
              <ul className="crew-vs-crew__rules-list">
                {BATTLE_RULES.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="crew-vs-crew__final">
            <p className="crew-vs-crew__final-label">FINAL</p>
            <ul className="crew-vs-crew__rules-list crew-vs-crew__rules-list--final">
              {FINAL_RULES.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="crew-vs-crew__champion" aria-label="Champion prize">
          <ChampionCard amount="5.000.000" />
        </section>

        <ScrollToTop />
      </main>

      <img
        className="crew-vs-crew__deco crew-vs-crew__deco--left"
        src={decoLeft}
        alt=""
        aria-hidden="true"
      />
      <img
        className="crew-vs-crew__deco crew-vs-crew__deco--right"
        src={decoRight}
        alt=""
        aria-hidden="true"
      />
      <img
        className="crew-vs-crew__deco crew-vs-crew__deco--bottom"
        src={decoBottom}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
};
