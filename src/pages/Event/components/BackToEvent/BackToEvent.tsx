import { Link } from 'react-router-dom';
import './BackToEvent.css';

export const BackToEvent = () => {
  return (
    <Link to="/event" className="back-to-event">
      ← Quay lại Event
    </Link>
  );
};
