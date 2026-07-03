import heroMascot from '../../../../assets/figma/hero-mascot.png';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__image-wrap">
        <img
          className="hero__image"
          src={heroMascot}
          alt="Chọi Deyyy mascot with boombox"
          width={1440}
          height={1439}
        />
      </div>
    </section>
  );
};
