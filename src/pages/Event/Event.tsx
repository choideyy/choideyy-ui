import eventBg from '../../assets/figma/event/event-bg.png';
import { EventDetailsSection } from './components/EventDetailsSection';
import { FacebookSection } from './components/FacebookSection';
import { JudgesCarousel } from './components/JudgesCarousel';
import { NewPostMarquee } from './components/NewPostMarquee';
import { PrizesSection } from './components/PrizesSection';
import { RulesSection } from './components/RulesSection';
import { ScrollToTop } from './components/ScrollToTop';
import { SpecialGuestsCarousel } from './components/SpecialGuestsCarousel';
import { SponsorsSection } from './components/SponsorsSection';
import { ThemeSection } from './components/ThemeSection';
import './Event.css';

export const Event = () => {
  return (
    <div className="event">
      <img
        className="event__bg"
        src={eventBg}
        alt=""
        aria-hidden="true"
      />

      <main className="event__main">
        <div className="event__hero">
          <NewPostMarquee />
          <FacebookSection />
        </div>
        <ThemeSection />
        <EventDetailsSection />
        <PrizesSection />
        <RulesSection />
        <JudgesCarousel />
        <SpecialGuestsCarousel />
        <SponsorsSection />
        <ScrollToTop />
      </main>
    </div>
  );
};
