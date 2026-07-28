export type McDjMember = {
  id: string;
  name?: string;
  role?: string;
  image: string;
  alt: string;
};

export type McDjSectionProps = {
  title?: string;
  members?: McDjMember[];
  description?: string;
  variant?: 'event' | 'recap';
  className?: string;
  decorationSrc?: string;
  secondaryDecorationSrc?: string;
  headingId?: string;
};
