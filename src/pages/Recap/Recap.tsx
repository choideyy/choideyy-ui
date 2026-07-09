import './Recap.css';

const imgRecap = 'https://www.figma.com/api/mcp/asset/1738fd3a-cf5a-40d6-b6ba-722b8c7b764b';

export const Recap = () => {
  return (
    <div className="recap">
      <img className="recap__bg" src={imgRecap} alt="" aria-hidden="true" />

      <main className="recap__hero">
        <h1>CHỌI DEYYY DANCE COMPETITION</h1>
        <div className="recap__year-wrapper">
          <div className="recap__year-links">
            <a className="recap__year-card" href="#year-2022">
              <span>2022</span>
            </a>
            <a className="recap__year-card recap__year-card--accent" href="#year-2025">
              <span>2025</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
