import bgImage from '../../../assets/figma/recap/2022/bg.png';
import arrowLeft from '../../../assets/figma/recap/2022/arrow-left.png';
import arrowRight from '../../../assets/figma/recap/2022/arrow-right.png';
import decoCassette from '../../../assets/figma/recap/2022/deco-cassette.png';
import decoRight from '../../../assets/figma/recap/2022/deco-right.png';
import decoStarBurst from '../../../assets/figma/recap/2022/deco-star-burst.png';
import gallery1 from '../../../assets/figma/recap/2022/gallery-1.png';
import gallery2 from '../../../assets/figma/recap/2022/gallery-2.png';
import gallery3 from '../../../assets/figma/recap/2022/gallery-3.png';
import gallery4 from '../../../assets/figma/recap/2022/gallery-4.png';
import gallery5 from '../../../assets/figma/recap/2022/gallery-5.png';
import gallery6 from '../../../assets/figma/recap/2022/gallery-6.png';
import gallery7 from '../../../assets/figma/recap/2022/gallery-7.png';
import guest1 from '../../../assets/figma/recap/2022/guest-1.png';
import guest2 from '../../../assets/figma/recap/2022/guest-2.png';
import guest3 from '../../../assets/figma/recap/2022/guest-3.png';
import guest4 from '../../../assets/figma/recap/2022/guest-4.png';
import guest5 from '../../../assets/figma/recap/2022/guest-5.png';
import judge1 from '../../../assets/figma/recap/2022/judge-1.png';
import judge2 from '../../../assets/figma/recap/2022/judge-2.png';
import judge3 from '../../../assets/figma/recap/2022/judge-3.png';
import medalFirst from '../../../assets/figma/recap/2022/medal-first.svg';
import medalSecond from '../../../assets/figma/recap/2022/medal-second.svg';
import medalStar from '../../../assets/figma/recap/2022/medal-star.svg';
import medalStar2 from '../../../assets/figma/recap/2022/medal-star-2.svg';
import starDeco from '../../../assets/figma/recap/2022/star-deco.png';
import winner1 from '../../../assets/figma/recap/2022/winner-1.png';
import winner2 from '../../../assets/figma/recap/2022/winner-2.png';
import winner3 from '../../../assets/figma/recap/2022/winner-3.png';
import winner4 from '../../../assets/figma/recap/2022/winner-4.png';
import type { RecapYearData } from '../types/recapYearData';
import { RECAP_2022_SPONSORS } from '../../../components/SponsorsSection';

export const RECAP_2022_DATA: RecapYearData = {
  year: '2022',
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
    participants: '100+',
    interests: '300+',
  },
  judges: [judge1, judge2, judge3],
  winners: [
    {
      image: winner1,
      label: 'CHAMPION',
      name: 'Last Fire Crew',
      variant: 'champion',
      medalIcon: medalFirst,
    },
    {
      image: winner2,
      label: 'RUNNER UP',
      name: 'TRAP DEIII',
      variant: 'runner-up',
      medalIcon: medalSecond,
    },
    {
      image: winner3,
      label: 'Best Performance',
      name: 'LAST FIRE CREW',
      variant: 'best-performance',
      medalIcon: medalStar,
    },
    {
      image: winner4,
      label: 'CYPHER KINGZ',
      name: 'DATSU',
      variant: 'cypher',
      medalIcon: medalStar2,
    },
  ],
  specialGuests: [guest1, guest2, guest3,guest4, guest5],
  mcDjImages: [],
  mcDjDescription: 'MC Tùng Bi Quang Anh và DJ Tedymation là người đã truyền tải trọn vẹn năng lượng bùng nổ, nhiệt huyết, thổi bùng ngọn lửa đam mê trong các bạn trẻ.',
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
  sponsors: RECAP_2022_SPONSORS,
  sponsorsDecoration: decoRight,
};
