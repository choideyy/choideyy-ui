export type Sponsor = {
  id: string;
  logo: string;
  alt: string;
};

export type SponsorsSectionVariant = 'event' | 'recap';

export type SponsorsSectionProps = {
  title?: string;
  sponsors: Sponsor[];
  variant?: SponsorsSectionVariant;
  className?: string;
  animationSpeed?: number;
  showDecoration?: boolean;
  decorationSrc?: string;
  animated?: boolean;
};
