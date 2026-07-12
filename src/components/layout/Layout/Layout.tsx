import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../../navigation/NavBar';

export const Layout = () => {
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
    </>
  );
};
