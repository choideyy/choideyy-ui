import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../components/navigation/NavBar';
import { Footer } from '../pages/Home/components/Footer';
import { FooterMarquee } from '../pages/Home/components/FooterMarquee';

export const AppLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = hash.replace('#', '');
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView();
    }
  }, [pathname, hash]);

  return (
    <>
      <NavBar />
      <Outlet />
      <FooterMarquee />
      <Footer />
    </>
  );
};
