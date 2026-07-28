import scrollTopIcon from '../../../../assets/figma/scroll-top.svg';
import { McDjSection } from '../../../../components/McDjSection';
import { SponsorsSection } from '../../../../components/SponsorsSection';
import type { RecapYearData } from '../../types/recapYearData';
import { BackToRecap } from '../BackToRecap';
import { RecapOrganizers } from '../RecapOrganizers';
import './RecapYearDetail.css';
import type { CSSProperties } from 'react';
import { useLoopCarousel } from '../../../../hooks/useLoopCarousel';
import { CarouselControls } from '../../../../components/ui/CarouselControls';

type RecapYearDetailProps = {
  data: RecapYearData;
};

export const RecapYearDetail = ({ data }: RecapYearDetailProps) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
// Galery constant and init
// const halfway = Math.ceil(data.galleryImages.length / 2);

const buildInfiniteRow = (images: string[], minItems = 20) => {
  if (images.length === 0) return [];

  const result: string[] = [];

  while (result.length < minItems) {
    result.push(...images);
  }

  return result;
};

const halfway = Math.ceil(data.galleryImages.length / 2);

const galleryTop = buildInfiniteRow(
  data.galleryImages.slice(0, halfway)
);

const galleryBottom = buildInfiniteRow(
  data.galleryImages.slice(halfway)
);

  // Carousel constants
const judgeCount = data.judges.length;
const extendedJudges =
  judgeCount > 0
    ? [data.judges[judgeCount - 1], ...data.judges, data.judges[0]]
    : [];

const judgesCarousel = useLoopCarousel(judgeCount);

const guestCount = data.specialGuests.length;
const extendedGuests =
  guestCount > 0
    ? [data.specialGuests[guestCount - 1], ...data.specialGuests, data.specialGuests[0]]
    : [];

const guestsCarousel = useLoopCarousel(guestCount);

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

          <div className="recap-year__gallery-row recap-year__gallery-row--left">
            <div className="recap-year__gallery-track">
              {galleryTop.map((image, index) => (
                  <img
                    key={`top-${index}`}
                    src={image}
                    alt={`Recap ${data.year} photo`}
                    className="recap-year__gallery-image"
                  />
                ))}
                {galleryBottom.map((image, index) => (
                  <img
                    key={`bottom-${index}`}
                    src={image}
                    alt={`Recap ${data.year} photo`}
                    className="recap-year__gallery-image"
                  />
                ))}
            </div>
          </div>

          <div className="recap-year__gallery-row recap-year__gallery-row--right">
            <div className="recap-year__gallery-track">
              {[...galleryBottom, ...galleryBottom].map((image, index) => (
                <img
                  key={`bottom-${index}`}
                  src={image}
                  alt={`Recap ${data.year} photo`}
                  className="recap-year__gallery-image"
                />
              ))}
            </div>
          </div>

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
          <div className="recap-judges__header">
            <h2 id="recap-judges" className='recap-year__judges-title'>JUDGES</h2>
            {judgeCount > 0 && (
              <CarouselControls
                onPrevious={judgesCarousel.goToPrevious}
                onNext={judgesCarousel.goToNext}
                previousLabel="Previous judge"
                nextLabel="Next judge"
              />
            )}
          </div>

          {judgeCount > 0 && (
            <div className="recap-year__judges-viewport">
              <div
                className={`recap-year__judges-track${
                  judgesCarousel.enableTransition ? '' : ' recap-year__judges-track--instant'
                }`}
                style={{ '--track-index': judgesCarousel.trackIndex } as CSSProperties}
                onTransitionEnd={judgesCarousel.handleTransitionEnd}
              >
                {extendedJudges.map((image, index) => {
                  const isActive = index === judgesCarousel.trackIndex;
                  return (
                    <article
                      key={`judge-${index}`}
                      className={`recap-year__judge-card${
                        isActive ? ' recap-year__judge-card--active' : ''
                      }`}
                      aria-hidden={!isActive}
                    >
                      <img
                        className="recap-year__judge-image"
                        src={image}
                        alt={`Judge ${(index % judgeCount) + 1}`}
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          )}
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
                    ? ({ '--winner-rotation': winner.rotation } as React.CSSProperties)
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
        {guestCount >0 &&(
        <section className="recap-year__guests" aria-labelledby="recap-guests">
          <div className="recap-guest__header">
            <h2 id="recap-guests" className='recap-year__guests-title'>SPECIAL GUESTS</h2>
            {guestCount > 0 && (
              <CarouselControls
                onPrevious={guestsCarousel.goToPrevious}
                onNext={guestsCarousel.goToNext}
                previousLabel="Previous guest"
                nextLabel="Next guest"
              />
            )}
          </div>

          {guestCount > 0 && (
            <div className="recap-year__guests-viewport">
              <div
                className={`recap-year__guests-track${
                  guestsCarousel.enableTransition ? '' : ' recap-year__guests-track--instant'
                }`}
                style={{ '--track-index': guestsCarousel.trackIndex } as CSSProperties}
                onTransitionEnd={guestsCarousel.handleTransitionEnd}
              >
                {extendedGuests.map((image, index) => {
                  const isActive = index === guestsCarousel.trackIndex;
                  return (
                    <article
                      key={`Guest-${index}`}
                      className={`recap-year__guest-card${
                        isActive ? ' recap-year__guest-card--active' : ''
                      }`}
                      aria-hidden={!isActive}
                    >
                      <img
                        className="recap-year__guest-image"
                        src={image}
                        alt={`Guest ${(index % guestCount) + 1}`}
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </section>)
        }
        {(data.mcDjImages.length > 0 || data.mcDjDescription !== undefined) && (
          <McDjSection
            variant="recap"
            headingId="recap-mc-dj"
            members={data.mcDjImages.map((image, index) => ({
              id: `mc-dj-${index}`,
              image,
              alt: `MC & DJ ${index + 1}`,
            }))}
            description={data.mcDjDescription}
            decorationSrc={data.decorations.starBurst}
            secondaryDecorationSrc={data.decorations.cassette}
          />
        )}

        {data.sponsors.length > 0 && (
          <SponsorsSection
            variant="recap"
            sponsors={data.sponsors}
            decorationSrc={data.sponsorsDecoration}
            className={`recap-year__sponsors recap-year__sponsors--${data.year}`}
          />
        )}

        <RecapOrganizers />

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
