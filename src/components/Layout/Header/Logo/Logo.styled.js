import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapLogo = styled.div`
  svg {
    width: 40px;
    height: 40px;
    border-radius: 12px;

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }
`;
export const StyleLink = styled(NavLink)`
  transition: all 250ms ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
  }
`;
