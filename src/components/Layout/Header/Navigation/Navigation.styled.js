import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    align-items: center;
    margin: 0 auto;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 30px;
    flex-direction: row;
  }
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.subtitle};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1;

  cursor: pointer;

  color: ${p => p.theme.colors.headerText};

  &.active {
    color: ${p => p.theme.colors.accentColor};
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl}px;
  }
  @media screen and (min-width: 1440px) {
    color: ${p => (p.recipe?.recipeId ? '#23262A' : p.theme.colors.headerText)};
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: 1.5;
    padding: 10px 0;
  }
`;
export const SearchIcon = styled(RiSearchLine)`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p``;
