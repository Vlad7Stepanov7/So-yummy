import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

import {
  Wrapper,
  LogoWrapper,
  ButtonClose,
  CloseIcon,
} from './BurgerMenu.styled';
import { Overlay } from '../UserLogo/ModalWrap/ModalWrap.styled';

const BurgerMenu = ({ handleClick }) => {
  const darkMode = useSelector(state => state.theme);

  useEffect(() => {
    window.addEventListener('keydown', clickCloseModal);
    return () => {
      window.removeEventListener('keydown', clickCloseModal);
    };
  });
  const clickCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      return handleClick();
    }
  };
  return (
    <Overlay onClick={clickCloseModal}>
      <Wrapper>
        <LogoWrapper>
          <Logo handleClick={handleClick} />
          <ButtonClose onClick={handleClick} dark={darkMode.darkMode}>
            <CloseIcon />
          </ButtonClose>
        </LogoWrapper>
        <Navigation handleClick={handleClick} />
        <ThemeToggler />
      </Wrapper>
    </Overlay>
  );
};

export default BurgerMenu;
