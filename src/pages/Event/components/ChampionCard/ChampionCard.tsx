import logoChoideyy from '../../../../assets/figma/logo-choideyy.png';
import mascotSpeaker from '../../../../assets/figma/mascot-speaker.png';
import './ChampionCard.css';

type ChampionCardProps = {
  amount: string;
};

export const ChampionCard = ({ amount }: ChampionCardProps) => {
  return (
    <div className="champion-card">
      <div className="champion-card__inner">
        <div className="champion-card__logos">
          <img src={logoChoideyy} alt="" aria-hidden="true" />
          <img src={mascotSpeaker} alt="" aria-hidden="true" />
        </div>
        <div className="champion-card__content">
          <p className="champion-card__title">CHAMPION</p>
          <p className="champion-card__subtitle">
            Chọi Deyyy Dance Competition Vol.3
          </p>
          <p className="champion-card__amount">{amount}</p>
        </div>
      </div>
    </div>
  );
};
