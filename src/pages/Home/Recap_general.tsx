import './Recap_general.css';

const recapBackground = 'https://www.figma.com/api/mcp/asset/1529b191-b01d-46aa-b9ff-de73f1032920';
const logoWordmark = 'https://www.figma.com/api/mcp/asset/bb5b8329-a9a4-41dc-89ef-8dea1576967e';
const footerVisual = 'https://www.figma.com/api/mcp/asset/f88fa882-64b5-4adb-a149-01a49bf6355d';
const instagramIcon = 'https://www.figma.com/api/mcp/asset/8bc3f400-a739-42b8-a9d3-05b7ce021b97';
const youtubeIcon = 'https://www.figma.com/api/mcp/asset/b1d5a243-4806-4ec0-8574-ad7bbc1b6886';
const socialBadge = 'https://www.figma.com/api/mcp/asset/6f95c7f1-f5d8-4bfe-72c096daf65b';

export const RecapGeneral = () => {
  return (
    <div className="home">
      <div className="home__background" aria-hidden="true">
        <img src={recapBackground} alt="" />
      </div>

      <main className="home__main">
        <section className="recap" aria-labelledby="recap-title">
          <nav className="recap__bar" aria-label="Page navigation">
            <a href="#event" className="recap__bar-link">
              EVENT
            </a>
            <a href="#contact" className="recap__bar-link">
              CONTACT
            </a>
            <a href="#about" className="recap__bar-link recap__bar-link--about">
              ABOUT US
            </a>
            <a href="#register" className="recap__register">
              ĐĂNG KÍ
            </a>
            <div className="recap__brand">
              <img src={logoWordmark} alt="Choi Deyyy" />
              <span className="recap__brand-label">recap</span>
            </div>
          </nav>

          <div className="recap__hero">
            <h1 id="recap-title">CHỌI DEYYY DANCE COMPETITION</h1>
            <div className="recap__actions">
              <a href="#year-2022" className="recap__pill recap__pill--primary">
                2022
              </a>
              <a href="#year-2025" className="recap__pill">
                2025
              </a>
            </div>
          </div>
        </section>

        <footer className="recap__footer" id="contact">
          <div className="recap__footer-visual" aria-hidden="true">
            <img src={footerVisual} alt="" />
          </div>

          <div className="recap__footer-content">
            <div className="recap__socials" aria-label="Social links">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="#" aria-label="Follow us">
                <img src={socialBadge} alt="" />
              </a>
            </div>

            <div className="recap__contact-block">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <p>choideyyy@gmail.com</p>
              <p>(+84) 971723158 - Nguyễn Thị Hà Phương</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
