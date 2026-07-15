import { Link } from 'react-router-dom';
import './BackToRecap.css';

export const BackToRecap = () => {
  return (
    <Link to="/recap" className="back-to-recap">
      ← Quay lại
    </Link>
  );
};
