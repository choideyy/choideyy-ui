import bgImage from '../../../assets/figma/event/crew-vs-crew/bg.png';
import battleImage from '../../../assets/figma/event/crew-vs-crew/battle.png';
import decoBottom from '../../../assets/figma/event/crew-vs-crew/deco-bottom.png';
import decoLeft from '../../../assets/figma/event/crew-vs-crew/deco-left.png';
import decoRight from '../../../assets/figma/event/crew-vs-crew/deco-right.png';
import iconAward from '../../../assets/figma/event/crew-vs-crew/icon-award.svg';
import iconGroups from '../../../assets/figma/event/crew-vs-crew/icon-groups.svg';
import iconTime from '../../../assets/figma/event/crew-vs-crew/icon-time.svg';
import showcaseImage from '../../../assets/figma/event/crew-vs-crew/showcase.png';
import ChampionCard from '../../../assets/figma/event/crew-vs-crew/prize-champion.png';
import { BackToEvent } from '../components/BackToEvent';
// import { ChampionCard } from '../components/ChampionCard';
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
  <>Đại diện các đội <strong>bốc cặp đấu loại trực tiếp</strong></>,
  <>Mỗi đội sẽ có <strong>03 lượt đấu, tổng 06 lượt/trận </strong>(lần lượt giữa các đội thi)</>,
  <>Thời lượng một lượt của mỗi đội: <strong>1m30</strong></>,
  <>Mỗi trận được phép hòa <strong>tối đa 01 lần</strong></>,
  <>BGK chấm điểm & chọn <strong>02 đội thắng</strong> vào <strong>FINAL</strong></>,
] as const;

const FINAL_RULES = [
   <>Mỗi đội có <strong>04 lượt đấu, tổng 08 lượt/trận</strong></>,
   <>Thời lượng một lượt của mỗi đội: <strong>1m30</strong></>,
   <>Vòng Final được phép <strong>hòa tối đa 02 lần</strong></>,
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

        <section className="crew-vs-crew__section" aria-labelledby="crew-showcase-heading">
          <div className="crew-vs-crew__banner-wrap">
            <RoundBanner label="Vòng Showcase" />
            <p className="crew-vs-crew__theme-label">CHỦ ĐỀ</p>
          </div>

          <div className="crew-vs-crew__showcase-grid">
            <div className="crew-vs-crew__theme">
              <h2 id="crew-showcase-heading" className="crew-vs-crew__theme-title">
                Học đường
              </h2>
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

            <div className="crew-vs-crew__showcase-image-wrapper">
              <img
                className="crew-vs-crew__showcase-image"
                src={showcaseImage}
                alt="Crew showcase performance"
              />
            </div>
          </div>
        </section>

        
        <section className="crew-vs-crew__section" aria-labelledby="crew-showcase-heading">
          <div className="crew-vs-crew__prize-box">
                <p className="crew-vs-crew__prize-label">Best performance</p>
                <p className="crew-vs-crew__prize-desc">
                  Tiết mục có phần trình diễn ấn tượng nhất do BGK lựa chọn
                </p>
                <p className="crew-vs-crew__prize-amount">2.000.000 VND</p>
              </div>
        </section>

        <section className="crew-vs-crew__section" aria-labelledby="crew-battle-heading">
          <div className="crew-vs-crew__banner-wrap crew-vs-crew__banner-wrap--battle">
            <RoundBanner label="Vòng battle" rotation="1.68deg" align="right" />
          </div>

          <div className="crew-vs-crew__battle-grid">
            <div className="crew-vs-crew__battle-image-wrapper">
              <img
                className="crew-vs-crew__battle-image"
                src={battleImage}
                alt="Crew battle performance"
              />
            </div>

            <h2 id="crew-battle-heading" className="crew-vs-crew__battle-heading">
              TOP 8 VÀ BÁN KẾT
            </h2>
            <ul className="crew-vs-crew__rules-list">
              {BATTLE_RULES.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="crew-vs-crew__final">
            <p className="crew-vs-crew__final-label">FINAL</p>
            <ul className="crew-vs-crew__rules-list crew-vs-crew__rules-list--final">
              {FINAL_RULES.map((rule,index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="crew-vs-crew__champion" aria-label="Champion prize">
          <img
                className="crew-vs-crew__prize-image"
                src={ChampionCard}
                alt="Champion Card prize"
              />
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
