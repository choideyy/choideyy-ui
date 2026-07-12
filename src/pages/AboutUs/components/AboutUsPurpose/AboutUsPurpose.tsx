import gameboyImage from '../../../../assets/figma/about-us/gameboy.png';
import './AboutUsPurpose.css';

export const AboutUsPurpose = () => {
  return (
    <section className="about-us-purpose" aria-labelledby="about-us-purpose-heading">
      <div className="about-us-purpose__text">
        <h2 id="about-us-purpose-heading" className="about-us-purpose__title">
          MỤC ĐÍCH/Ý NGHĨA
        </h2>
        <p>
          Giải đấu được tổ chức với mong muốn tạo ra một sân chơi ý nghĩa dành
          cho thế hệ trẻ yêu thích Street Dance. Đây là nơi các dancer có thể học
          hỏi, mở rộng kiến thức, trau dồi kỹ năng và thể hiện bản thân qua
          từng bước nhảy. Bên cạnh đó, Chọi Deyyy hướng đến vai trò kết nối giữa
          các thế hệ dancer – tạo cơ hội để những người đi trước và lớp trẻ gặp
          gỡ, chia sẻ kinh nghiệm và cùng nhau đóng góp vào sự phát triển của bộ
          môn tại địa phương cũng như cộng đồng Street Dance Việt Nam
        </p>
      </div>

      <img
        className="about-us-purpose__image"
        src={gameboyImage}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};
