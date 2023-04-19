import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  @media screen and (max-width: 767px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.footerText};
  :hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const Item = styled.li`
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;
