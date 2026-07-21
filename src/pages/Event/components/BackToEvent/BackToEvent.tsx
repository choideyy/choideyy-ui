import { Link } from 'react-router-dom';
import './BackToEvent.css';

export const BackToEvent = () => {
  return (
    <Link to="/event#rules" className="back-to-event">
      ← Quay lại
    </Link>
  );
};
