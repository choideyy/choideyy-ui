import type { Sponsor } from '../../../components/SponsorsSection';

export type RecapWinnerVariant =
  | 'champion'
  | 'runner-up'
  | 'best-performance'
  | 'cypher'
  | 'seven-to-smoke';

export type RecapWinner = {
  image: string;
  label: string;
  name: string;
  variant: RecapWinnerVariant;
  medalIcon: string;
  rotation?: string;
};

export type RecapYearData = {
  year: string;
  bgImage: string;
  starDecoImage: string;
  galleryImages: string[];
  stats: {
    participants: string;
    interests: string;
    interestsLabel?: string; 
  };
  judges: string[];
  winners: RecapWinner[];
  specialGuests: string[];
  mcDjImages: string[];
  mcDjDescription?: string | React.ReactNode;
  decorations: {
    starBurst: string;
    cassette: string;
    rightDeco: string;
  };
  medals: {
    first: string;
    second: string;
    star: string;
    star2: string;
  };
  arrows: {
    left: string;
    right: string;
  };
  sponsors: Sponsor[];
  sponsorsDecoration?: string;
};
