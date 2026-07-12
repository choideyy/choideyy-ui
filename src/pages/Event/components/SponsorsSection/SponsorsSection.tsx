import sponsorsDeco from '../../../../assets/figma/event/sponsors-deco.png';
import './SponsorsSection.css';

const SPONSOR_SLOTS = 5;

const SponsorPlaceholder = () => (
  <div className="event-sponsors__placeholder" aria-hidden="true" />
);

export const SponsorsSection = () => {
  const placeholders = Array.from({ length: SPONSOR_SLOTS }, (_, index) => (
    <SponsorPlaceholder key={index} />
  ));

  return (
    <section className="event-sponsors" aria-labelledby="event-sponsors-heading">
      <div className="event-sponsors__deco-layer" aria-hidden="true">
        <img className="event-sponsors__deco" src={sponsorsDeco} alt="" />
      </div>

      <div className="event-sponsors__content">
        <h2 id="event-sponsors-heading" className="event-sponsors__title">
          NHÀ TÀI TRỢ
        </h2>

        <div className="event-sponsors__marquee" aria-hidden="true">
          <div className="event-sponsors__track">
            <div className="event-sponsors__group">{placeholders}</div>
            <div className="event-sponsors__group">{placeholders}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
