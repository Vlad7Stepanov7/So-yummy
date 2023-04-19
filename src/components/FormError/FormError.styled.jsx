import styled from "styled-components";

export const ErrorText = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: ${p => p.theme.colors.form.inputError};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
     position: absolute;
     top: 52px;
  }
`;