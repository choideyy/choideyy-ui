import type { McDjMember, McDjSectionProps } from './types';
import './McDjSection.css';

export const McDjSection = ({
  title = 'MC & DJ',
  members = [],
  description,
  variant = 'event',
  className = '',
  decorationSrc,
  secondaryDecorationSrc,
  headingId,
}: McDjSectionProps) => {
  const hasImages = members.length > 0;
  const hasDescription = description !== undefined;

  if (!hasImages && !hasDescription) {
    return null;
  }

  const resolvedHeadingId =
    headingId ?? `mc-dj-heading-${variant}`;

  const contentModeClass = hasDescription
  ? 'mc-dj-section--has-description'
  : 'mc-dj-section--has-images';


  return (
    <section
      className={`mc-dj-section mc-dj-section--${variant} ${contentModeClass} ${className}`.trim()}
      aria-labelledby={resolvedHeadingId}
    >
      <h2 id={resolvedHeadingId} className="mc-dj-section__title">
        {title}
      </h2>

      {hasDescription ? (
        <p className="mc-dj-section__description">{description}</p>
      ) : (
        <div className="mc-dj-section__grid">
          {members.map((member: McDjMember) => (
            <img
              key={member.id}
              src={member.image}
              alt={member.alt}
              className="mc-dj-section__card"
            />
          ))}
        </div>
      )}

      {decorationSrc ? (
        <img
          className="mc-dj-section__deco mc-dj-section__deco--star"
          src={decorationSrc}
          alt=""
          aria-hidden="true"
        />
      ) : null}

      {secondaryDecorationSrc ? (
        <img
          className="mc-dj-section__deco mc-dj-section__deco--cassette"
          src={secondaryDecorationSrc}
          alt=""
          aria-hidden="true"
        />
      ) : null}
    </section>
  );
};
