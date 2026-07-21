import type { McDjMember, McDjSectionProps } from './types';
import './McDjSection.css';

export const McDjSection = ({
  title = 'MC & DJ',
  members,
  variant = 'event',
  className = '',
  decorationSrc,
  secondaryDecorationSrc,
  headingId,
}: McDjSectionProps) => {
  if (members.length === 0) {
    return null;
  }

  const resolvedHeadingId =
    headingId ?? `mc-dj-heading-${variant}`;

  return (
    <section
      className={`mc-dj-section mc-dj-section--${variant} ${className}`.trim()}
      aria-labelledby={resolvedHeadingId}
    >
      <h2 id={resolvedHeadingId} className="mc-dj-section__title">
        {title}
      </h2>

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
