import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: ${p =>
    p.place === 'recipe-page' ? 'flex-start' : 'center'};
  align-items: center;
  gap: 9px;

  @media ${props => props.theme.device.tablet} {
    gap: 13px;
  }
`;

export const Item = styled.li`
  transition: all 250ms linear;
  :hover {
    border-radius: 6px;
    background: ${p => (p.dark ? '#8BAA36' : '#22252A')};
  }
`;

export const Link = styled.a`
  transition: all 250ms linear;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.footerSocialIcons};

  :hover {
    color: ${p => (p.dark ? '#22252A' : '#FAFAFA')};
  }
`;
