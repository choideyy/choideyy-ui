import rule2vs2 from '../../../../assets/figma/event/rule-2vs2.png';
import ruleCrew from '../../../../assets/figma/event/rule-crew-vs-crew.png';
import './RulesSection.css';

const RULES = [
  {
    image: ruleCrew,
    label: 'Crew vs crew',
  },
  {
    image: rule2vs2,
    label: '2 vs 2 ALL STYLE',
  },
] as const;

export const RulesSection = () => {
  return (
    <section className="event-rules" aria-labelledby="event-rules-heading">
      <h2 id="event-rules-heading" className="event-rules__title">
        RULE
      </h2>

      <div className="event-rules__grid">
        {RULES.map((rule) => (
          <article key={rule.label} className="event-rules__card">
            <div className="event-rules__image-wrap">
              <img
                className="event-rules__image"
                src={rule.image}
                alt={rule.label}
              />
            </div>
            <p className="event-rules__label">{rule.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
