import { useEffect, useState } from 'react';
import logoChoideyy from '../../../assets/figma/logo-choideyy.png';
import { Button } from '../../ui/Button';
import './NavBar.css';

const NAV_LINKS = [
  { label: 'EVENT', href: '#event' },
  { label: 'RECAP', href: '#recap' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
] as const;

const MENU_LINKS = [
  { label: 'HOME', href: '#' },
  ...NAV_LINKS,
] as const;

type NavBarInnerProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
};

const NavBarInner = ({ isMenuOpen, onMenuToggle }: NavBarInnerProps) => (
  <div className="navbar__inner">
    <button
      type="button"
      className="navbar__menu-btn"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
      onClick={onMenuToggle}
    >
      <span className="navbar__menu-icon" aria-hidden="true">
        <span className="navbar__menu-line" />
        <span className="navbar__menu-line" />
        <span className="navbar__menu-line" />
      </span>
    </button>

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`navbar${isMenuOpen ? ' navbar--menu-open' : ''}`}
      >
        <NavBarInner isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />

        <div
          className="navbar__overlay"
          hidden={!isMenuOpen}
          aria-hidden={!isMenuOpen}
        >
          <nav className="navbar__overlay-nav" aria-label="Mobile navigation">
            <ul className="navbar__overlay-links">
              {MENU_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="navbar__overlay-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="navbar__placeholder" aria-hidden="true">
        <NavBarInner isMenuOpen={false} onMenuToggle={() => {}} />
      </div>
    </>
  );
};
