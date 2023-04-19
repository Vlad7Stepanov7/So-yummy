import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: 50px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.sectionTitle};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding-top: 100px;
  }
`;
