import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Switch = styled.input`
  position: relative;
  width: 61px;
  height: 27px;
  -webkit-appearance: none;
  outline: none;
  background-color: #efefef;
  border-radius: 50px;
  transition: 0.5s;
  background: #efefef;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  &:checked {
    background: #8baa36;
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
    ::before {
      left: 37px;
      background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
      filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50px;
    top: 50%;
    left: 3px;
    filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
    background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
    transition: 0.5s;
    transform: scale(1) translateY(-50%);
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
