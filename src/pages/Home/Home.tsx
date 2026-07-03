import homeBg from '../../assets/figma/home-bg.png';
import { NavBar } from '../../components/navigation/NavBar';
import { Countdown } from './components/Countdown';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FooterMarquee } from './components/FooterMarquee';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ReadyBanner } from './components/ReadyBanner';
import { StickerNav } from './components/StickerNav';
import './Home.css';

export const Home = () => {
  return (
    <div className="home">
      <img
        className="home__bg"
        src={homeBg}
        alt=""
        aria-hidden="true"
      />
      <NavBar />
      <main className="home__main">
        <Hero />
        <section className="home__cta" aria-label="Event countdown">
          <ReadyBanner />
          <Countdown />
        </section>
        <IntroSection />
        <StickerNav />
        <FAQSection />
      </main>
      <FooterMarquee />
      <Footer />
    </div>
  );
};
