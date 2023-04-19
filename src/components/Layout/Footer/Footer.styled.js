import styled from 'styled-components';

export const Conteiner = styled.footer`
  margin: 0 auto;
  min-width: 375px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1600px;
  }
`;

export const Wrapper = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2] * 7}px;
  padding-bottom: ${p => p.theme.space[1] * 9}px;
  background-color: ${p => p.theme.colors.footerBg};

  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[1] * 25}px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[3] * 3}px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: ${p => p.theme.space[2] * 15}px;
    padding-left: ${p => p.theme.space[2] * 25}px;
    padding-right: ${p => p.theme.space[2] * 25}px;
    padding-bottom: ${p => p.theme.space[1] * 25}px;
  }
`;
