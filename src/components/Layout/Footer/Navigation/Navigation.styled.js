import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WrapperForLogo = styled.span`
display: flex;
align-items: center;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
line-height: 18px;
letter-spacing: 0.015em;
color: ${p => p.theme.colors.button.mainTextColor};
margin-bottom: ${p => p.theme.space[5]}px;

@media screen and (max-width: 767px) {
    justify-content: center;
  }

@media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[3] * 3}px;
    font-size: 28px;
    line-height: 28px;
  }

@media screen and (min-width: 1440px) {
  margin-bottom: ${p => p.theme.space[2] * 10}px;
} 
`;

export const Logo = styled(NavLink)`
  margin-right: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 768px) {
    margin-right: ${p => p.theme.space[2] * 3}px;
  }
`;

export const WrapperForDescription = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-right: 173px;
  } 

  @media screen and (min-width: 1440px) {
    margin-right: 159px;
  } 
`;

export const Description = styled.ul`
  list-style: inside;

  @media screen and (min-width: 1440px) {
    width: 418px;
  } 
`;

export const ItemOfDescription = styled.li`
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.footerText};
  
  margin-bottom: 10px;
  color: ${p => p.theme.colors.footerText};
  
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: 24px;
  }
`;

export const WrapperForNav = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: ${p => p.theme.space[3] * 9}px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: ${p => p.theme.space[0]};
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
   @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 41px;
  }
`;

export const WrapperForText = styled.p`
  @media screen and (max-width: 1439px) {
    display: inline;  
  }
  @media screen and (min-width: 1440px) {
    margin-left: 25px;  
  }
`;
