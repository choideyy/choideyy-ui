import sponsorKimPhung from '../../../../assets/figma/event/sponsors/sponsor-kim-phung.png';
import sponsorLacomy from '../../../../assets/figma/event/sponsors/sponsor-lacomy.png';
import sponsorCharacter from '../../../../assets/figma/event/sponsors/sponsor-character.png';
import sponsorNup from '../../../../assets/figma/event/sponsors/sponsor-nup.png';
import sponsorTiemGomNha from '../../../../assets/figma/event/sponsors/sponsor-tiem-gom-nha.png';
import sponsorsDeco from '../../../../assets/figma/event/sponsors-deco.png';
import sponsor70s from '../../../../assets/figma/event/sponsors/sponsor-70s.png';
import sponsor5050 from '../../../../assets/figma/event/sponsors/sponsor-5050.png';
import sponsorTedfunk from '../../../../assets/figma/event/sponsors/sponsor-tedfunk.png';
import sponsorEy9conic from '../../../../assets/figma/event/sponsors/sponsor-ey9conic.png';
import sponsorBepBinh from '../../../../assets/figma/event/sponsors/sponsor-bepbinh.png';
import './SponsorsSection.css';

type Sponsor = {
  id: string;
  logo: string;
  alt: string;
};

const SPONSORS: Sponsor[] = [
  {
    id: 'nup',
    logo: sponsorNup,
    alt: 'núp',
  },
  {
    id: 'kim-phung',
    logo: sponsorKimPhung,
    alt: 'Kim Phụng Bất Động Sản',
  },
  {
    id: 'lacomy',
    logo: sponsorLacomy,
    alt: 'Lacomy styling',
  },
  {
    id: 'character',
    logo: sponsorCharacter,
    alt: 'Character sponsor logo',
  },
  {
    id: 'tiem-gom-nha',
    logo: sponsorTiemGomNha,
    alt: 'Tiệm Gốm Nhật Hải Phòng',
  },
  {
    id: '70s',
    logo: sponsor70s,
    alt: '70s',
  },
  {
    id: '5050',
    logo: sponsor5050,
    alt: '5050',
  },
  {
    id: 'tedfunk',
    logo: sponsorTedfunk,
    alt: 'Tedfunk',
  },
  {
    id: 'ey9conic',
    logo: sponsorEy9conic,
    alt: 'Ey9conic',
  },
  {
    id: 'bepbinh',
    logo: sponsorBepBinh,
    alt: 'Bếp Bình',
  }
];

const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="event-sponsors__item">
    <img
      className="event-sponsors__logo"
      src={sponsor.logo}
      alt={sponsor.alt}
      loading="lazy"
      decoding="async"
    />
  </div>
);

export const SponsorsSection = () => {
  const sponsorItems = SPONSORS.map((sponsor) => (
    <SponsorLogo key={sponsor.id} sponsor={sponsor} />
  ));

  return (
    <section className="event-sponsors" aria-labelledby="event-sponsors-heading">
      <div className="event-sponsors__deco-layer" aria-hidden="true">
        <img className="event-sponsors__deco" src={sponsorsDeco} alt="" />
      </div>

      <div className="event-sponsors__content">
        <h2 id="event-sponsors-heading" className="event-sponsors__title">
          NHÀ TÀI TRỢ
        </h2>

        <div className="event-sponsors__marquee" aria-hidden="true">
          <div className="event-sponsors__track">
            <div className="event-sponsors__group">{sponsorItems}</div>
            <div className="event-sponsors__group">{sponsorItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
