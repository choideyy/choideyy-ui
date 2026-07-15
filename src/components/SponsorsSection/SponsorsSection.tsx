import './SponsorsSection.css';
import type { Sponsor, SponsorsSectionProps } from './types';

const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="sponsors-section__item">
    <img
      className="sponsors-section__logo"
      src={sponsor.logo}
      alt={sponsor.alt}
      loading="lazy"
      decoding="async"
    />
  </div>
);

export const SponsorsSection = ({
  title = 'NHÀ TÀI TRỢ',
  sponsors,
  variant = 'event',
  className = '',
  animationSpeed = 36,
  showDecoration = true,
  decorationSrc,
  animated = true,
}: SponsorsSectionProps) => {
  const sponsorItems = sponsors.map((sponsor) => (
    <SponsorLogo key={sponsor.id} sponsor={sponsor} />
  ));

  const sectionClassName = [
    'sponsors-section',
    `sponsors-section--${variant}`,
    animated ? 'sponsors-section--animated' : 'sponsors-section--static',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClassName} aria-labelledby="sponsors-section-heading">
      {showDecoration && decorationSrc && (
        <div className="sponsors-section__deco-layer" aria-hidden="true">
          <img className="sponsors-section__deco" src={decorationSrc} alt="" />
        </div>
      )}

      <div className="sponsors-section__content">
        <h2 id="sponsors-section-heading" className="sponsors-section__title">
          {title}
        </h2>

        {animated ? (
          <div className="sponsors-section__marquee" aria-hidden="true">
            <div
              className="sponsors-section__track"
              style={{ animationDuration: `${animationSpeed}s` }}
            >
              <div className="sponsors-section__group">{sponsorItems}</div>
              <div className="sponsors-section__group">{sponsorItems}</div>
            </div>
          </div>
        ) : (
          <div className="sponsors-section__static-row">{sponsorItems}</div>
        )}
      </div>
    </section>
  );
};
