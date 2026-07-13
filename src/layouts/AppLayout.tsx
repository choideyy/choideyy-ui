import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/navigation/NavBar';
import { ScrollToTop } from '../components/navigation/ScrollToTop';
import { Footer } from '../pages/Home/components/Footer';
import { FooterMarquee } from '../pages/Home/components/FooterMarquee';

export const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <FooterMarquee />
      <Footer />
    </>
  );
};
    