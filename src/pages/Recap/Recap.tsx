import { NavBar } from '../../components/navigation/NavBar';
import './Recap.css';

const imgRecap = 'https://www.figma.com/api/mcp/asset/1738fd3a-cf5a-40d6-b6ba-722b8c7b764b';
const imgRectangle24 = 'https://www.figma.com/api/mcp/asset/ec1e83da-16f5-45bf-9137-ed41b16bbb09';
const imgImage4 = 'https://www.figma.com/api/mcp/asset/a8b90626-7519-4676-87f9-13d375a326c0';
const imgVecteezyInstagramLogoPngInstagramIconTransparent189304151 = 'https://www.figma.com/api/mcp/asset/2e07c49e-2a98-4a73-960a-fe7ab4ecdbef';
const imgVecteezyYoutubeLogoPngYoutubeIconTransparent189306881 = 'https://www.figma.com/api/mcp/asset/5cbd12c0-170d-48e8-885c-5bb4354fea28';
const imgImage5 = 'https://www.figma.com/api/mcp/asset/80b58f7e-c390-490e-ae52-756a807722bb';
const imgCdAvt1 = 'https://www.figma.com/api/mcp/asset/312b4239-c7f4-421b-ae94-8c25b4660214';
const imgGaVerLoaCoCh2 = 'https://www.figma.com/api/mcp/asset/ad45d664-add0-4c20-80a9-df7d78a16384';
const imgImage3 = 'https://www.figma.com/api/mcp/asset/232a7319-0f2d-42b5-8ae8-103e456fdb71';

export const Recap = () => {
  return (
    <div className="recap">
      <img className="recap__bg" src={imgRecap} alt="" aria-hidden="true" />

      <NavBar />

      <main className="recap__hero">
        <h1>CHỌI DEYYY DANCE COMPETITION</h1>
        <div className="recap__year-links">
          <a className="recap__year-card" href="#year-2022">
            <span>2022</span>
          </a>
          <a className="recap__year-card recap__year-card--accent" href="#year-2025">
            <span>2025</span>
          </a>
        </div>
      </main>

      <footer className="recap__footer">
        <div className="recap__footer-image" aria-hidden="true">
          <img src={imgRectangle24} alt="" />
        </div>

        <div className="recap__footer-content">
          <div className="recap__socials" aria-label="Social media links">
            <a href="#instagram" aria-label="Instagram">
              <img src={imgVecteezyInstagramLogoPngInstagramIconTransparent189304151} alt="Instagram" />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <img src={imgVecteezyYoutubeLogoPngYoutubeIconTransparent189306881} alt="YouTube" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <img src={imgImage4} alt="Facebook" />
            </a>
          </div>

          <div className="recap__contact">
            <h2>THÔNG TIN LIÊN HỆ</h2>
            <p>choideyyy@gmail.com</p>
            <p>(+84) 971723158 - Nguyễn Thị Hà Phương</p>
          </div>
        </div>

        <div className="recap__footer-logos" aria-hidden="true">
          <img src={imgCdAvt1} alt="" className="recap__footer-avatar" />
          <img src={imgGaVerLoaCoCh2} alt="" className="recap__footer-mark" />
          <img src={imgImage3} alt="" className="recap__footer-mark" />
          <img src={imgImage5} alt="" className="recap__footer-mark recap__footer-mark--wide" />
        </div>
      </footer>
    </div>
  );
};
