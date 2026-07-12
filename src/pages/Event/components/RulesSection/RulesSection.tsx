import { Link } from 'react-router-dom';
import bottomDeco from '../../../../assets/figma/event/bottom-deco.png';
import rule2vs2 from '../../../../assets/figma/event/rule-2vs2.png';
import ruleCrew from '../../../../assets/figma/event/rule-crew-vs-crew.png';
import './RulesSection.css';

const RULES = [
  {
    image: ruleCrew,
    label: 'Crew vs crew',
    to: '/event/crew-vs-crew',
  },
  {
    image: rule2vs2,
    label: '2 vs 2 ALL STYLE',
    to: '/event/2-vs-2',
  },
] as const;

export const RulesSection = () => {
  return (
    <section className="event-rules" aria-labelledby="event-rules-heading">
      <div className="event-rules__deco-layer" aria-hidden="true">
        <img className="event__bottom-deco" src={bottomDeco} alt="" />
      </div>

      <div className="event-rules__content">
        <h2 id="event-rules-heading" className="event-rules__title">
          RULE
        </h2>

        <div className="event-rules__grid">
          {RULES.map((rule) => (
            <Link key={rule.label} to={rule.to} className="event-rules__card">
              <div className="event-rules__image-wrap">
                <img
                  className="event-rules__image"
                  src={rule.image}
                  alt={rule.label}
                />
              </div>
              <p className="event-rules__label">{rule.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
