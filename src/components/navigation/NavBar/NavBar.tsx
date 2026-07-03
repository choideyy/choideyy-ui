import logoChoideyy from '../../../assets/figma/logo-choideyy.png';
import { Button } from '../../ui/Button';
import './NavBar.css';

const NAV_LINKS = [
  { label: 'EVENT', href: '#event' },
  { label: 'RECAP', href: '#recap' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
] as const;

const NavBarInner = () => (
  <div className="navbar__inner">
    <a href="#" className="navbar__logo" aria-label="Chọi Deyyy home">
      <img src={logoChoideyy} alt="Chọi Deyyy" width={138} height={90} />
    </a>

    <nav className="navbar__nav" aria-label="Main navigation">
      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="navbar__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <Button className="navbar__cta">ĐĂNG KÍ</Button>
  </div>
);

export const NavBar = () => {
  return (
    <>
      <header className="navbar">
        <NavBarInner />
      </header>
      <div className="navbar__placeholder" aria-hidden="true">
        <NavBarInner />
      </div>
    </>
  );
};
