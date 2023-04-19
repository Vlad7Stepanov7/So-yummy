import styled from 'styled-components';
import { HiMenuAlt2 } from 'react-icons/hi';
export const ContainerHeader = styled.header`
  position: relative;

  display: flex;
  justify-content: center;
  min-width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  display: flex;

  align-items: center;
  margin: 0 auto;
  min-width: 375px;
  z-index: 1;
  padding-top: ${p => p.theme.space[4] + 2}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[0]}px;

  @media screen and (min-width: 768px) {
    /* min-width: 768px; */

    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;

    padding-left: ${p => p.theme.space[2] * 25}px;
    padding-right: ${p => p.theme.space[2] * 25}px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

export const MenuIcon = styled(HiMenuAlt2)`
  width: 28px;
  height: 28px;
  color: ${p => (p.recipe?.recipeId ? '#23262A' : p.theme.colors.headerText)};
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 800px) {
    width: 32px;
    height: 32px;
    color: ${p =>
      p.pathname === '/main' || p.recipe?.recipeId
        ? '#23262A'
        : p.theme.colors.headerText};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
