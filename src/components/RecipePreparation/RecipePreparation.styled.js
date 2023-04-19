import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 28px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 32px;
  }
`;

export const Container = styled.div`
  @media ${props => props.theme.device.desktop} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 50px;
  }
`;

export const InstructionList = styled.ul`
  margin-bottom: 40px;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 50px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const IconNum = styled.span`
  flex-basis: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  min-height: 21px;
  padding: 5px 13px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: ${p => p.theme.colors.secondaryTextColor};
  border-radius: 50%;
  background-color: ${p => p.theme.colors.accentColor};

  @media ${props => props.theme.device.tablet} {
    padding: 5px 15px;
    font-size: 14px;
  }
`;

export const Instruction = styled.p`
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;

export const BoxImg = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  overflow: hidden;

  @media ${props => props.theme.device.tablet} {
    width: 433px;
  }

  @media ${props => props.theme.device.desktop} {
    align-self: flex-start;
    min-width: 433px;
  }
`;

export const Images = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
