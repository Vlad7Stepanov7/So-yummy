import styled from 'styled-components';

import BgMobile from 'images/bg/mobile-menu-bg-mob-1x-min.png';
import BgTablet from 'images/bg/mobile-menu-bg-tab-1x-min.png';
import { IoClose } from 'react-icons/io5';
export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
`;
export const Wrapper = styled.div`
  position: fixed;
  background-color: ${p => p.theme.colors.shoppingItemImageBg};
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  padding: 18px 16px;
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-position: bottom 0 right 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 18px 32px;
    background-image: url(${BgTablet});
  }
`;

export const LogoWrapper = styled.div``;
export const ButtonClose = styled.button`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 18px;
  right: 18px;
  margin-left: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${p => (p.dark ? '#FAFAFA' : '#333333')};

  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled(IoClose)`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
