import bgImage from '../../assets/figma/about-us/bg.png';
import { AboutUsHero } from './components/AboutUsHero';
import { AboutUsOrganizers } from './components/AboutUsOrganizers';
import { AboutUsPurpose } from './components/AboutUsPurpose';
import { AboutUsStats } from './components/AboutUsStats';
import { AboutUsStory } from './components/AboutUsStory';
import './AboutUs.css';

export const AboutUs = () => {
  return (
    <div className="about-us">
      <img className="about-us__bg" src={bgImage} alt="" aria-hidden="true" />

      <main className="about-us__main">
        <AboutUsHero />
        <AboutUsStory />
        <AboutUsPurpose />
        <AboutUsStats />
        <AboutUsOrganizers />
      </main>
    </div>
  );
};
