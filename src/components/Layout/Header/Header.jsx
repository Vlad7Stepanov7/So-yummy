import { useState } from 'react';
import { useMedia } from 'hooks';
import { useLocation, useParams } from 'react-router-dom';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserLogo from './UserLogo/UserLogo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import BurgerMenu from './BurgerMenu';

import {
  ButtonMenu,
  Container,
  Wrap,
  MenuIcon,
  ContainerHeader,
} from './Header.styled';

const Header = () => {
  const { pathname } = useLocation();
  const recipe = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktopScreen } = useMedia();

  const handleMenuClick = () => {
    setIsMenuOpen(state => !state);
  };

  return (
    <ContainerHeader>
      <Container>
        <Logo />
        {isDesktopScreen && <Navigation handleMenuClick={handleMenuClick} />}

        <Wrap>
          <UserLogo />
          <ButtonMenu onClick={handleMenuClick}>
            <MenuIcon pathname={pathname} recipe={recipe} />
          </ButtonMenu>
          {isDesktopScreen && <ThemeToggler />}
        </Wrap>
      </Container>
      {isMenuOpen && !isDesktopScreen && (
        <BurgerMenu handleClick={handleMenuClick} />
      )}
    </ContainerHeader>
  );
};

export default Header;
