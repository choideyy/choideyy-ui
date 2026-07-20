import themeStar from '../../../../assets/figma/event/theme-star.png';
import './ThemeSection.css';

export const ThemeSection = () => {
  return (
    <section className="event-theme" aria-labelledby="event-theme-heading">
      <div className="event-theme__header">
        <img
          className="event-theme__star"
          src={themeStar}
          alt=""
          aria-hidden="true"
        />
        <p className="event-theme__label">CHỦ ĐỀ</p>
      </div>

      <div className="event-theme__body">
        <div className="event-theme__text">
          <h2 id="event-theme-heading" className="event-theme__title">
            Học <br/>đường
          </h2>
          <p className="event-theme__subtitle">Điểm bắt đầu <br/>của đam mê</p>
        </div>
        <div className="event-theme__content">
          <p>
          <strong>“Học Đường”</strong> đưa chúng ta trở lại những năm tháng thanh
          xuân – nơi mỗi dancer bắt đầu hành trình của mình. Từ những buổi tập đầu
          tiên còn vụng về, những lần phải giấu gia đình để theo đuổi đam mê, đến
          những giờ tập miệt mài cùng bạn bè sau giờ học. Trường học là nơi những
          bước nhảy đầu tiên được hình thành, nơi khó khăn và hoài nghi không thể
          dập tắt ngọn lửa nhiệt huyết của tuổi trẻ.
          </p>
          <p>
          Chủ đề mong muốn tái hiện hành trình trưởng thành của mỗi dancer:{' '}
          <strong>những ngày đầu tiếp cận Nhảy đường phố</strong>, những thử thách
          phải vượt qua, và khoảnh khắc ta dám sống với điều mình yêu thích. Hãy
          mang thanh xuân lên sân khấu, kể lại câu chuyện của bạn bằng âm nhạc, và
          để từng bước nhảy viết tiếp đam mê theo cách đặc biệt nhất.
          </p>
        </div>  
      </div>
    </section>
  );
};
