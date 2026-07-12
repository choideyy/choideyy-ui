import organizersImage from '../../../../assets/figma/about-us/organizers.png';
import partnerNavi from '../../../../assets/figma/about-us/partner-navi.png';
import partnerSoloist from '../../../../assets/figma/about-us/partner-soloist.png';
import './AboutUsOrganizers.css';

export const AboutUsOrganizers = () => {
  return (
    <section
      className="about-us-organizers"
      aria-labelledby="about-us-organizers-heading"
    >
      <h2 id="about-us-organizers-heading" className="about-us-organizers__title">
        BAN TỔ CHỨC
      </h2>

      <img
        className="about-us-organizers__photo"
        src={organizersImage}
        alt="Ban tổ chức Chọi Deyyy"
      />

      <div className="about-us-organizers__partners">
        <img src={partnerSoloist} alt="Soloist" />
        <img src={partnerNavi} alt="Navi" />
      </div>
    </section>
  );
};
