import bgImage from '../../../assets/figma/event/two-vs-two/bg.png';
import battleImage from '../../../assets/figma/event/two-vs-two/battle.png';
import decoBottom from '../../../assets/figma/event/two-vs-two/deco-bottom.png';
import decoLeft from '../../../assets/figma/event/two-vs-two/deco-left.png';
import decoRight from '../../../assets/figma/event/two-vs-two/deco-right.png';
import decoStar from '../../../assets/figma/event/two-vs-two/deco-star.png';
import iconCards from '../../../assets/figma/event/two-vs-two/icon-cards.svg';
import iconPerson from '../../../assets/figma/event/two-vs-two/icon-person.svg';
import iconRegister from '../../../assets/figma/event/two-vs-two/icon-register.svg';
import prelimImage from '../../../assets/figma/event/two-vs-two/prelim.png';
import recallBg from '../../../assets/figma/event/two-vs-two/recall-bg.png';
import recallPin from '../../../assets/figma/event/two-vs-two/recall-pin.png';
import recallTape from '../../../assets/figma/event/two-vs-two/recall-tape.png';
import ChampionCard from '../../../assets/figma/event/prize-champion.png';
import { BackToEvent } from '../components/BackToEvent';
import { RoundBanner } from '../components/RoundBanner';
import { ScrollToTop } from '../components/ScrollToTop';
import './TwoVsTwo.css';

const PRELIM_RULES = [
  <>Lần lượt các Duo sẽ thi đấu theo thứ tự do BTC sắp xếp</>,
  <>Mỗi Đuo có <strong>1 lượt thi - 45 giây/lượt</strong></>,
  <>BGK chấm điểm và chọn ra <strong>TOP 16</strong></>,
] as const;

const TOP16_RULES = [
  <>Thứ tự các cặp đấu được đấu BTC sắp xếp</>,
  <>Mỗi Duo thi <strong>02 lượt (tổng 04 lượt/trận, mỗi lượt 60 giây)</strong> </>,
  <>Mỗi trận <strong>hòa tối đa 1 lần</strong></>,
] as const;

const TOP8_RULES = [
  <>Bốc thăm chọn cặp đấu</>,
  <>Mỗi trận gồm <strong>04 lượt (02 lượt/Duo), 60 giây/lượt - tổng 4 phút/trận</strong></>,
  <><strong>Chấm hòa tối đa 01 lần</strong></>,
  <>Sau 4 trận, trong <strong>15 giây đếm ngược</strong>, các Duo <strong>thua trước đó</strong> có thể <strong>Recall (Thách Đấu)</strong> các Duo vừa thắng</>,
] as const;

const RECALL_CONDITIONS = [
  {
    icon: iconRegister,
    title: 'Điểm số:',
    value: 'Tổng điểm Prelim >= 45/60',
  },
  {
    icon: iconCards,
    title: 'Trạng thái:',
    value: 'Duo đã thi đấu và thua ở vòng Top 8',
  },
  {
    icon: iconPerson,
    title: 'Đối tượng:',
    value:
      'Không Recall đội thắng tuyệt đối (full phiếu BGK) hoặc chính đối thủ vừa đấu',
  },
] as const;

const RECALL_METHOD = [
  <>Đội bước ra trước sẽ được quyền Recall, nếu nhiều Duo cùng Recall, BTC sẽ tiến hành <strong>xoay chai</strong> để chọn ra một <strong>Duo duy nhất được quyền thách đấu</strong></>,
  <>Mỗi đội thua chỉ được <strong>Recall 1 lần</strong>, mỗi đội thắng <strong>chỉ bị Recall 1 lần</strong></>,
  <>Recall diễn ra <strong>1 lượt 45 giây, không có kết quả hòa</strong></>,
  <><strong>Recall thắng</strong>: Thay thế vị trí Duo thắng và đi tiếp</>,
  <><strong>Recall thua</strong>: Duo thắng ban đầu giữ nguyên vị trí</>,
] as const;

const FINAL_RULES = [
  <><strong>TOP 4 Duo</strong>: 04 lượt/trận, 60 giây/lượt, tổng 4 phút/trận</>,
  <><strong>TOP 2 Duo</strong>: 04 lượt/trận, 60 giây/lượt, tổng 4 phút/trận</>,
] as const;

export const TwoVsTwo = () => {
  return (
    <div className="two-vs-two">
      <img className="two-vs-two__bg" src={bgImage} alt="" aria-hidden="true" />

      <main className="two-vs-two__main">
        <div className="two-vs-two__nav">
          <BackToEvent />
        </div>

        <h1 className="two-vs-two__title">2 vs 2 all style</h1>

        <section className="two-vs-two__section" aria-labelledby="two-prelim-heading">
          <RoundBanner label="Prelim & Duo Draw" rotation="-2.55deg" align="center" />

          <div className="two-vs-two__prelim-grid">
            <div className="two-vs-two__prelim-copy">
              <p className="two-vs-two__stage-label two-vs-two__stage-label--prelim">
                prelim
              </p>
              <ul className="two-vs-two__rules-list">
                {PRELIM_RULES.map((rule,index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>

              <p className="two-vs-two__stage-label two-vs-two__stage-label--top16">
                top 16
              </p>
              <ul className="two-vs-two__rules-list">
                {TOP16_RULES.map((rule,index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            <img
              className="two-vs-two__prelim-image"
              src={prelimImage}
              alt="2 vs 2 prelim performance"
            />
          </div>
        </section>

        <section className="two-vs-two__section" aria-labelledby="two-battle-heading">
          

          <div className="two-vs-two__battle-grid">
            <img
              className="two-vs-two__battle-image"
              src={battleImage}
              alt="2 vs 2 battle performance"
            />

            <div className="two-vs-two__battle-copy">
              <div className="two-vs-two__battle-banner-wrap">
              <img
                className="two-vs-two__battle-star"
                src={decoStar}
                alt=""
                aria-hidden="true"
              />

              <RoundBanner
                label="Vòng Battle"
                rotation="1.68deg"
                align="right"
              />
            </div>
              <h2 id="two-battle-heading" className="two-vs-two__battle-heading">
                TOP 8
              </h2>
              <ul className="two-vs-two__rules-list">
                {TOP8_RULES.map((rule,index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="two-vs-two__recall" aria-labelledby="two-recall-heading">
          <img
            className="two-vs-two__recall-bg"
            src={recallBg}
            alt=""
            aria-hidden="true"
          />

          <div className="two-vs-two__recall-inner">
            <img
              className="two-vs-two__recall-tape"
              src={recallTape}
              alt=""
              aria-hidden="true"
            />
            <img
              className="two-vs-two__recall-pin"
              src={recallPin}
              alt=""
              aria-hidden="true"
            />

            <h2 id="two-recall-heading" className="two-vs-two__recall-title">
              Cơ chế RECALL
            </h2>

            <div className="two-vs-two__recall-details">
              <h3 className="two-vs-two__recall-subtitle">Điều kiện:</h3>
              <ul className="two-vs-two__conditions">
                {RECALL_CONDITIONS.map((item) => (
                  <li key={item.title}>
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <p>
                      <strong>{item.title}</strong> {item.value}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="two-vs-two__recall-subtitle">Cách thức:</h3>
              <ul className="two-vs-two__rules-list two-vs-two__rules-list--recall">
                {RECALL_METHOD.map((rule,index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="two-vs-two__final-section" aria-labelledby="two-final-heading">
          <p id="two-final-heading" className="two-vs-two__final-banner">
            SEMI-FINAL & FINAL
          </p>
          <ul className="two-vs-two__rules-list two-vs-two__rules-list--final">
            {FINAL_RULES.map((rule,index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </section>

        <section className="two-vs-two__champion" aria-label="Champion prize">
          <img
                className="two-vs-two__prize-image"
                src={ChampionCard}
                alt="Champion Card prize"
              />
        </section>

        <ScrollToTop />
      </main>

      <img
        className="two-vs-two__deco two-vs-two__deco--left"
        src={decoLeft}
        alt=""
        aria-hidden="true"
      />
      <img
        className="two-vs-two__deco two-vs-two__deco--right"
        src={decoRight}
        alt=""
        aria-hidden="true"
      />
      <img
        className="two-vs-two__deco two-vs-two__deco--bottom"
        src={decoBottom}
        alt=""
        aria-hidden="true"
      />

    </div>
  );
};
