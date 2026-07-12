import heroTexture from '../../../../assets/figma/contact/hero-bg.png';
import './ContactHero.css';

export const ContactHero = () => {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-heading">
      <img
        className="contact-hero__texture"
        src={heroTexture}
        alt=""
        aria-hidden="true"
      />

      <div className="contact-hero__content">
        <div className="contact-hero__title-wrap">
          <span className="contact-hero__accent" aria-hidden="true" />
          <h1 id="contact-hero-heading" className="contact-hero__title">
            CONTACT
          </h1>
        </div>
        <p className="contact-hero__description">
          Nếu bạn quan tâm hoặc muốn hoặc trở thành nhà tài trợ, đối tác truyền
          thông, hoặc đơn vị đồng hành, hãy liên hệ với bọn mình để nhận toàn bộ
          danh sách quyền lợi và gói tài trợ phù hợp nhất.
        </p>
      </div>
    </section>
  );
};
