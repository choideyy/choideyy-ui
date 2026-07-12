import scrollTopIcon from '../../../../assets/figma/scroll-top.svg';
import type { RecapYearData } from '../../types/recapYearData';
import { BackToRecap } from '../BackToRecap';
import './RecapYearDetail.css';

type RecapYearDetailProps = {
  data: RecapYearData;
};

export const RecapYearDetail = ({ data }: RecapYearDetailProps) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="recap-year" data-year={data.year}>
      <img
        className="recap-year__bg"
        src={data.bgImage}
        alt=""
        aria-hidden="true"
      />

      <main className="recap-year__main">
        <BackToRecap />

        <header className="recap-year__hero">
          <span className="recap-year__hero-accent" aria-hidden="true" />
          <h1 className="recap-year__hero-title">{data.year}</h1>
        </header>

        <section className="recap-year__gallery" aria-label="Event photos">
          <div className="recap-year__gallery-grid">
            {data.galleryImages.map((image, index) => (
              <img
                key={`gallery-${index}`}
                src={image}
                alt={`Recap ${data.year} photo ${index + 1}`}
                className={`recap-year__gallery-item recap-year__gallery-item--${index + 1}`}
              />
            ))}
          </div>
          <button type="button" className="recap-year__see-more">
            XEM THÊM
          </button>
        </section>

        <section className="recap-year__stats" aria-label="Event statistics">
          <img
            className="recap-year__stats-deco"
            src={data.starDecoImage}
            alt=""
            aria-hidden="true"
          />
          <div className="recap-year__stats-cards">
            <div className="recap-year__stat recap-year__stat--interests">
              <p className="recap-year__stat-value">{data.stats.interests}</p>
              <p className="recap-year__stat-label">
                Tổng số lượt quan tâm sự kiện
              </p>
            </div>
            <div className="recap-year__stat recap-year__stat--participants">
              <p className="recap-year__stat-value">{data.stats.participants}</p>
              <p className="recap-year__stat-label">
                Tổng số người tham gia sự kiện
              </p>
            </div>
          </div>
        </section>

        <section className="recap-year__judges" aria-labelledby="recap-judges">
          <div className="recap-year__section-header">
            <h2 id="recap-judges">JUDGES</h2>
            <div className="recap-year__arrows" aria-hidden="true">
              <img src={data.arrows.left} alt="" />
              <img src={data.arrows.right} alt="" />
            </div>
          </div>
          <div className="recap-year__judges-track">
            {data.judges.map((image, index) => (
              <img
                key={`judge-${index}`}
                src={image}
                alt={`Judge ${index + 1}`}
                className="recap-year__judge-card"
              />
            ))}
          </div>
        </section>

        <section className="recap-year__winners" aria-labelledby="recap-winners">
          <h2 id="recap-winners" className="recap-year__winners-title">
            WINNERS
          </h2>
          <ul className="recap-year__winners-list">
            {data.winners.map((winner) => (
              <li
                key={`${winner.label}-${winner.name}`}
                className={`recap-year__winner recap-year__winner--${winner.variant}`}
                style={
                  winner.rotation
                    ? { '--winner-rotation': winner.rotation }
                    : undefined
                }
              >
                <img
                  className="recap-year__winner-photo"
                  src={winner.image}
                  alt={`${winner.label} ${winner.name}`}
                />
                <div className="recap-year__winner-banner">
                  <img
                    className="recap-year__winner-medal"
                    src={winner.medalIcon}
                    alt=""
                    aria-hidden="true"
                  />
                  <p>
                    <em>{winner.label}:</em> {winner.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="recap-year__guests"
          aria-labelledby="recap-special-guests"
        >
          <div className="recap-year__section-header">
            <h2 id="recap-special-guests">SPECIAL GUESTS</h2>
            <div className="recap-year__arrows" aria-hidden="true">
              <img src={data.arrows.left} alt="" />
              <img src={data.arrows.right} alt="" />
            </div>
          </div>
          <div className="recap-year__guests-track">
            {data.specialGuests.length > 0 ? (
              data.specialGuests.map((image, index) => (
                <img
                  key={`guest-${index}`}
                  src={image}
                  alt={`Special guest ${index + 1}`}
                  className="recap-year__guest-card"
                />
              ))
            ) : (
              <>
                <div className="recap-year__guest-placeholder" />
                <div className="recap-year__guest-placeholder" />
                <div className="recap-year__guest-placeholder" />
              </>
            )}
          </div>
          <img
            className="recap-year__deco-right"
            src={data.decorations.rightDeco}
            alt=""
            aria-hidden="true"
          />
        </section>

        <section className="recap-year__mc-dj" aria-labelledby="recap-mc-dj">
          <h2 id="recap-mc-dj">MC &amp; DJ</h2>
          <div className="recap-year__mc-dj-grid">
            {data.mcDjImages.length > 0 ? (
              data.mcDjImages.map((image, index) => (
                <img
                  key={`mc-dj-${index}`}
                  src={image}
                  alt={`MC & DJ ${index + 1}`}
                  className="recap-year__mc-dj-card"
                />
              ))
            ) : (
              <>
                <div className="recap-year__mc-dj-placeholder" />
                <div className="recap-year__mc-dj-placeholder" />
              </>
            )}
          </div>
          <img
            className="recap-year__deco-star"
            src={data.decorations.starBurst}
            alt=""
            aria-hidden="true"
          />
          <img
            className="recap-year__deco-cassette"
            src={data.decorations.cassette}
            alt=""
            aria-hidden="true"
          />
        </section>

        <button
          type="button"
          className="recap-year__scroll-top"
          aria-label="Scroll to top"
          onClick={handleScrollTop}
        >
          <img src={scrollTopIcon} alt="" aria-hidden="true" />
        </button>
      </main>
    </div>
  );
};
