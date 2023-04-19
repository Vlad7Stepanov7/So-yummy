import styled from "styled-components";

export const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.background};
  background-image: url('../../images/mobile/main-mob-min.png');
`;

export const MainText = styled.p`
  color: ${(p) => p.theme.colors.primaryText};
  font-size: ${(p) => p.theme.fontSizes.xxxl}px;
`;
