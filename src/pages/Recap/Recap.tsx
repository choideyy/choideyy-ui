import { Link } from 'react-router-dom';
import recapBg from '../../assets/figma/recap/bg.png';
import './Recap.css';

export const Recap = () => {
  return (
    <div className="recap">
      <img className="recap__bg" src={recapBg} alt="" aria-hidden="true" />

      <main className="recap__hero">
        <h1>CHỌI DEYYY DANCE COMPETITION</h1>
        <div className="recap__year-wrapper">
          <div className="recap__year-links">
            <Link className="recap__year-card" to="/recap/2022">
              <span>2022</span>
            </Link>
            <Link className="recap__year-card recap__year-card--accent" to="/recap/2025">
              <span>2025</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
