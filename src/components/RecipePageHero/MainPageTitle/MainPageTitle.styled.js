import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 18px;
  max-width: 600px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.accentColor};

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 24px;
    font-size: 44px;
  }
`;
