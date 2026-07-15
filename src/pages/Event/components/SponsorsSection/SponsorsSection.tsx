import sponsorsDeco from '../../../../assets/figma/event/sponsors-deco.png';
import {
  EVENT_SPONSORS,
  SponsorsSection as SharedSponsorsSection,
} from '../../../../components/SponsorsSection';

export const SponsorsSection = () => (
  <SharedSponsorsSection
    variant="event"
    sponsors={EVENT_SPONSORS}
    decorationSrc={sponsorsDeco}
  />
);
