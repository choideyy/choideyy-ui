import eventBg from '../../assets/figma/event/event-bg.png';
import decoStarBurst from '../../assets/figma/event/deco-star-burst.png'
import decoCassette from '../../assets/figma/event/deco-cassette.png'
import { EVENT_MC_DJ_MEMBERS, McDjSection } from '../../components/McDjSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { FacebookSection } from './components/FacebookSection';
import { JudgesCarousel } from './components/JudgesCarousel';
import { NewPostMarquee } from './components/NewPostMarquee';
import { PrizesSection } from './components/PrizesSection';
import { RulesSection } from './components/RulesSection';
import { ScrollToTop } from './components/ScrollToTop';
import { SpecialGuestsSection } from './components/SpecialGuestsCarousel';
// import { SponsorsSection } from './components/SponsorsSection';
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
        <SpecialGuestsSection />
        <McDjSection
            variant="event"
            headingId="event-mc-dj"
            members={EVENT_MC_DJ_MEMBERS}
            decorationSrc= {decoStarBurst}
            secondaryDecorationSrc= {decoCassette}
          />
        {/* <SponsorsSection /> */}
        <ScrollToTop />
      </main>
    </div>
  );
};
