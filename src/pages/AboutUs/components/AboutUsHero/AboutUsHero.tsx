import heroBanner from '../../../../assets/figma/about-us/hero-banner.png';
import './AboutUsHero.css';

export const AboutUsHero = () => {
  return (
    <section className="about-us-hero" aria-label="About us banner">
      <img
        className="about-us-hero__banner"
        src={heroBanner}
        alt="Chọi Deyyy Vol.3"
      />
    </section>
  );
};
