import organizersImage from '../../../../assets/figma/about-us/organizers.png';
import partnerNavi from '../../../../assets/figma/about-us/partner-navi.png';
import partnerSoloist from '../../../../assets/figma/about-us/partner-soloist.png';
import './RecapOrganizers.css';

const PARTNERS = [
  {
    id: 'partnerA',
    logo: partnerSoloist,
    logoAlt: 'TPConik Team',
  },
  {
    id: 'partnerB',
    logo: partnerNavi,
    logoAlt: 'Navi Dance Team',
  },
] as const;

export const RecapOrganizers = () => {
  return (
    <section
      className="recap-organizers"
      aria-labelledby="recap-organizers-heading"
    >
      <h2 id="recap-organizers-heading" className="recap-organizers__title">
        BAN TỔ CHỨC
      </h2>

      <img
        className="recap-organizers__photo"
        src={organizersImage}
        alt="Ban tổ chức Chọi Deyyy"
      />

      <div className="recap-organizers__partners">
        {PARTNERS.map((partner) => (
          <div
            key={partner.id}
            className={`recap-organizers__partner recap-organizers__partner--${partner.id}`}
          >
            <div className="recap-organizers__logo-wrap">
              <div className="recap-organizers__logo-stage">
                <img
                  className="recap-organizers__logo"
                  src={partner.logo}
                  alt={partner.logoAlt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
