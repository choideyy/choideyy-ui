import bgImage from '../../../assets/figma/recap/2025/bg.png';
import arrowLeft from '../../../assets/figma/recap/2025/arrow-left.png';
import arrowRight from '../../../assets/figma/recap/2025/arrow-right.png';
import decoCassette from '../../../assets/figma/recap/2025/deco-cassette.png';
import decoRight from '../../../assets/figma/recap/2025/deco-right.png';
import decoStarBurst from '../../../assets/figma/recap/2025/deco-star-burst.png';
import gallery1 from '../../../assets/figma/recap/2025/gallery-1.png';
import gallery2 from '../../../assets/figma/recap/2025/gallery-2.png';
import gallery3 from '../../../assets/figma/recap/2025/gallery-3.png';
import gallery4 from '../../../assets/figma/recap/2025/gallery-4.png';
import gallery5 from '../../../assets/figma/recap/2025/gallery-5.png';
import gallery6 from '../../../assets/figma/recap/2025/gallery-6.png';
import gallery7 from '../../../assets/figma/recap/2025/gallery-7.png';
import judge1 from '../../../assets/figma/recap/2025/judge-1.png';
import judge2 from '../../../assets/figma/recap/2025/judge-2.png';
import judge3 from '../../../assets/figma/recap/2025/judge-3.png';
import mc1 from '../../../assets/figma/recap/2025/mc-1.png';
import mc2 from '../../../assets/figma/recap/2025/mc-2.png';
import medalFirst from '../../../assets/figma/recap/2025/medal-first.svg';
import medalSecond from '../../../assets/figma/recap/2025/medal-second.svg';
import medalStar from '../../../assets/figma/recap/2025/medal-star-2.svg';
import medalStar2 from '../../../assets/figma/recap/2025/medal-star-2.svg';
import starDeco from '../../../assets/figma/recap/2025/star-deco.png';
import winner1 from '../../../assets/figma/recap/2025/winner-1.png';
import winner2 from '../../../assets/figma/recap/2025/winner-2.png';
import winner3 from '../../../assets/figma/recap/2025/winner-3.png';
import type { RecapYearData } from '../types/recapYearData';
import { RECAP_2025_SPONSORS } from '../../../components/SponsorsSection';

export const RECAP_2025_DATA: RecapYearData = {
  year: '2025',
  bgImage,
  starDecoImage: starDeco,
  galleryImages: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
  ],
  stats: {
    participants: '20',
    interests: '200k+',
  },
  judges: [judge1, judge2, judge3],
  winners: [
    {
      image: winner1,
      label: 'CHAMPION',
      name: 'Khối Nghỉ Hè',
      variant: 'champion',
      medalIcon: medalFirst,
    },
    {
      image: winner2,
      label: 'RUNNER UP',
      name: 'Hội Phoạng Hường',
      variant: 'runner-up',
      medalIcon: medalSecond,
    },
    {
      image: winner3,
      label: '7-to-smoke',
      name: 'Trung Bâu',
      variant: 'seven-to-smoke',
      medalIcon: medalStar,
    },
  ],
  specialGuests: [],
  mcDjImages: [mc1, mc2],
  decorations: {
    starBurst: decoStarBurst,
    cassette: decoCassette,
    rightDeco: decoRight,
  },
  medals: {
    first: medalFirst,
    second: medalSecond,
    star: medalStar,
    star2: medalStar2,
  },
  arrows: {
    left: arrowLeft,
    right: arrowRight,
  },
  sponsors: RECAP_2025_SPONSORS,
  sponsorsDecoration: decoRight,
};
