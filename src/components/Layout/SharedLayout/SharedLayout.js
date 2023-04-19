import Footer from './../Footer/Footer';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from './../Header/Header';
import { LayoutContainer, LeafBackground } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

export const SharedLayout = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn && location.pathname === '/' && <Navigate to="/main" />}
      <Header />
      <LayoutContainer>
        <Outlet />
        <LeafBackground></LeafBackground>
      </LayoutContainer>
      <Footer />
    </div>
  );
};
