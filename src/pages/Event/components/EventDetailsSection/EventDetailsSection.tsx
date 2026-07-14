import spiritMore from '../../../../assets/figma/event/spirit-more.png';
import spirit from '../../../../assets/figma/event/spirit.png';
import dancerImage from '../../../../assets/figma/event/dancer.png';
import crewIcon from '../../../../assets/figma/event/duo-crew-badge.svg';
import duoIcon from '../../../../assets/figma/event/people-icon.svg';
import './EventDetailsSection.css';

export const EventDetailsSection = () => {
  return (
    <section className="event-details" aria-labelledby="event-details-heading">
      <div className="event-details__banner">
        <p id="event-details-heading" className="event-details__banner-text">
          Who&apos;s Joining the vibe ?
        </p>
      </div>

      <div className="event-details__grid">
        <div className="event-details__left">
          <div className="event-details__categories" aria-label="Competition categories">
            <div className="event-details__category-item event-details__category-item--duo">
              <img
                className="event-details__category-icon event-details__category-icon--duo"
                src={duoIcon}
                alt=""
                aria-hidden="true"
              />
              <p className="event-details__category-label-duo">DUO</p>
            </div>

            <div className="event-details__category-item event-details__category-item--crew">
              <img
                className="event-details__category-icon event-details__category-icon--crew"
                src={crewIcon}
                alt=""
                aria-hidden="true"
              />
              <p className="event-details__category-label-crew">CREW</p>
            </div>
          </div>

          <img
            className="event-details__spirit"
            src={spirit}
            alt="Tinh thần mà chúng tớ tìm kiếm"
          />
          <img
            className="event-details__spirit-more"
            src={spiritMore}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="event-details__right">
          <img
            className="event-details__dancer"
            src={dancerImage}
            alt="Breakdancer performing"
          />
        </div>
      </div>

      <div className="event-details__meta">
        <p className="event-details__date">08/08/2026</p>
        <p className="event-details__venue">
          Nhà thi đấu Trường Đại học Hàng Hải
        </p>
        <p className="event-details__address">
          Số 484, Lạch Tray, Ngô Quyền, Hải Phòng
        </p>
      </div>
    </section>
  );
};
