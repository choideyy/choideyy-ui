import { type KeyboardEvent, type ReactNode, useCallback } from 'react';
import './OrganizerPartnerCard.css';

type OrganizerPartnerCardProps = {
  partnerId: 'partnerA' | 'partnerB';
  name: string;
  logo: string;
  logoAlt: string;
  descriptionPosition: 'left' | 'right';
  paragraphs: ReactNode[];
  isActive: boolean;
  onToggle: () => void;
};

export const OrganizerPartnerCard = ({
  partnerId,
  name,
  logo,
  logoAlt,
  descriptionPosition,
  paragraphs,
  isActive,
  onToggle,
}: OrganizerPartnerCardProps) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onToggle();
      }
    },
    [onToggle],
  );

  return (
    <button
      type="button"
      className={`organizer-partner-card organizer-partner-card--${partnerId} organizer-partner-card--description-${descriptionPosition}${isActive ? ' is-active' : ''}`}
      aria-expanded={isActive}
      aria-label={
        isActive
          ? 'Quay lại danh sách đối tác'
          : `Xem thêm thông tin về ${name}`
      }
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    >
      <div className="organizer-partner-card__inner">
        <div className="organizer-partner-card__logo-wrap">
          <span className="organizer-partner-card__logo-hint organizer-partner-card__logo-hint--expand">
            Bấm để xem thêm
          </span>
          <span className="organizer-partner-card__logo-hint organizer-partner-card__logo-hint--collapse">
            Bấm để quay lại
          </span>
          <div className="organizer-partner-card__logo-stage">
            <img className="organizer-partner-card__logo" src={logo} alt={logoAlt} />
          </div>
        </div>

        {isActive && (
          <div className="organizer-partner-card__description">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};
