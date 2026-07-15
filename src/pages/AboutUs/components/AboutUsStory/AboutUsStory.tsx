 import decoLip from '../../../../assets/figma/about-us/deco-lip.png';
import decoStar from '../../../../assets/figma/about-us/deco-star.png';
import './AboutUsStory.css';

export const AboutUsStory = () => {
  return (
    <section className="about-us-story" aria-labelledby="about-us-story-heading">
      <img
        className="about-us-story__lip"
        src={decoLip}
        alt=""
        aria-hidden="true"
      />
      <img
        className="about-us-story__star"
        src={decoStar}
        alt=""
        aria-hidden="true"
      />

      <div className="about-us-story__labels" aria-hidden="true">
        <span className="about-us-story__label about-us-story__label--about">
          about
        </span>
        <span className="about-us-story__label about-us-story__label--us">
          us
        </span>
      </div>

      <div className="about-us-story__content">
        <h2 id="about-us-story-heading" className="visually-hidden">
          Our story
        </h2>
        <div className="about-us-story__para1">
          <p>
            <strong>Chọi Deyyy</strong> được hình thành từ cảm hứng văn hoá đặc
            trưng của Hải Phòng, thành phố vốn nổi tiếng với{' '}
            <strong>lễ hội Chọi Trâu Đồ Sơn</strong> – một biểu tượng gắn liền với
            tinh thần mạnh mẽ, quyết liệt và giàu bản sắc. Từ “Chọi” được giữ lại
            như một dấu ấn về sự đối đầu, bản lĩnh và tinh thần thi đấu, đồng thời
            phù hợp với tính chất của một giải hiphop
          </p>
        </div>
        <div className="about-us-story__para2">
          <p>
            Hình ảnh <strong>gà trống</strong> được lựa chọn làm mascot vì liên
            hệ trực tiếp với từ lóng <strong>“gáy”</strong> – một cách biểu đạt
            phổ biến trong giới trẻ và cộng đồng hiphop, thể hiện sự tự tin, khí
            thế và tinh thần thách thức. Gà trống cũng gợi nhắc đến{' '}
            <strong>văn hoá Chọi Gà</strong> dân gian, nơi sức mạnh và bản lĩnh
            được phô diễn rõ nét. Sự kết hợp giữa “Chọi” và hình tượng gà trống
            tạo nên một biểu tượng vừa gần gũi, vừa giàu tính biểu trưng.
          </p>
        </div>

        <div className="about-us-story__deyyy">
          <p>
            Tên gọi <strong>“Deyyy”</strong> được phát triển từ hai âm quen
            thuộc trong đời sống hiphop:
          </p>
          <ul>
            <li>
              Âm <strong>“đê”</strong> trong những câu nhảy khiêu khích như “gáy
              đê”, “nhảy đi, nhảy đê” – mang tính kích lệ, thúc đẩy tinh thần
              thi đấu.
            </li>
            <li>
              Âm <strong>“eyyy”</strong> trong tiếng cổ vũ, cảm thán thường
              vang lên khi dancer tạo ra những khoảnh khắc ấn tượng.
            </li>
          </ul>
          <p>
            Khi kết hợp, hai âm này tạo thành “Deyyy” – một tên gọi ngắn gọn,
            dễ nhớ và mang đậm tinh thần sôi động của hiphop. Đồng thời, cách
            phát âm “Deyyy” gần giống từ <strong>“Day”</strong> trong tiếng Anh,
            gợi lên ý nghĩa{' '}
            <strong>“Chọi Day – ngày Chọi – ngày thi đấu”</strong> của các
            dancers
          </p>
        </div>
      </div>
    </section>
  );
};
