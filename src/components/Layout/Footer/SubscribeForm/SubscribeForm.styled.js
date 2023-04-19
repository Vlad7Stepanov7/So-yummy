import styled from "styled-components";
import { Field, Form } from "formik";

export const Input = styled(Field)`
  padding: 10px 42px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.xxs}px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.button.mainTextColor};
  background-color: ${p => p.theme.colors.footerBg};

  border: ${({ state }) => {
  switch (state) {
    case "error":
      return "1px solid #E74A3B";
    case "undefined":
      return "1px solid rgba(255, 255, 255, 16%)"
    default:
     return "1px solid rgba(255, 255, 255, 16%)"
  }
  }};
   
  border-radius: 6px;
  
  &::placeholder {
    color: ${p => p.theme.colors.footerText};
    opacity: 1;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    
    padding: 14px 40px  14px 52px;
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: 21px;
  }

  @media screen and (min-width: 1440px) {
    padding: 15px 70.5px  15px 51.5px;
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: 27px;
  }
`;

export const EmailIcon = styled.svg`
  position: absolute;
  width: 16px;
  height: 12px;
  top: 13px;
  left: 14px;

  @media screen and (min-width: 768px) {
   width: 20px;
   height: 16px;
   top: 17px;
   left: 15px;
  }

  @media screen and (min-width: 1440px) {
    top: 20px;
    left: 18px;
  }
`;

export const NameInput = styled.label`
  position: relative;
  display: block;
  width: 204px;
  margin-bottom: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
   width: 259px;
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-right: ${p => p.theme.space[2] * 3}px;
  }

  @media screen and (min-width: 1440px) {
    width: 338px;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const FormSubscribe = styled(Form)`
  width: 204px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 442px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 339px;
  }
`;

export const WrapperForm = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 44px;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 38px;
  }

   @media screen and (min-width: 1440px) {
    width: 339px;
  }
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[2] * 7}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.footerText};
`;

export const Title = styled.p`
  margin-bottom: ${p => p.theme.space[1] * 7}px;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 27px;
  color: ${p => p.theme.colors.footerText};
`;