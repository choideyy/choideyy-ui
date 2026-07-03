import introDancers from '../../../../assets/figma/intro-dancers.png';
import './IntroSection.css';

export const IntroSection = () => {
  return (
    <section className="intro" id="about" aria-labelledby="intro-heading">
      <div className="intro__inner">
        <div className="intro__content">
          <h2 id="intro-heading" className="intro__title">
            CHỌI DEYY
            <br />
            DANCE COMPETITION 2026
          </h2>
          <div className="intro__text">
            <p>
              <strong>Chọi Deyyy Dance Competition</strong> là một cuộc thi nhảy
              hướng tới đối tượng trẻ nằm trong độ tuổi từ 15 tuổi trở lên -
              đối tượng đang có nhiều nhiệt huyết nhưng lại ít trải nghiệm,
              kiến thức về bộ môn Nhảy đường phố cũng như văn hóa Hiphop nói
              chung.
            </p>
            <p>
              Với sứ mệnh trở thành một sân chơi lành mạnh để các bạn dancers
              trẻ được va chạm, cọ sát và tiếp thu những bài học, định hướng từ
              các giám khảo chuyên môn (là các dancers chuyên nghiệp trong nước
              có nhiều năm kinh nghiệm), <strong>Chọi Deyyy</strong> luôn mong
              muốn là cầu nối tạo cơ hội đưa nhiều dancers trẻ đang âm thầm
              trau dồi giá trị bản thân được xuất hiện, được thể hiện và kết
              nối với nhau thông qua chuyển động và âm nhạc.
            </p>
            <p>
              Từ đó góp phần xây dựng và phát triển nền văn hóa, màu sắc nghệ
              thuật của con người Hải Phòng nói riêng, cũng như của thế hệ trẻ
              Việt Nam nói chung trong lĩnh vực Nhảy đường phố đến gần hơn với
              mọi người.
            </p>
          </div>
        </div>
        <div className="intro__image-wrap">
          <img
            className="intro__image"
            src={introDancers}
            alt="Dancers at Chọi Deyyy competition"
            width={567}
            height={835}
          />
        </div>
      </div>
    </section>
  );
};
