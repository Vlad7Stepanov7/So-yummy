import React from 'react';
import {
  AppleIcon,
  BananaIcon,
  FishIcon,
  OrangeIcon,
  PorkIcon,
} from '../images/svgIcons';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #8baa36;
  border-radius: 8px;
  width: ${({ size }) => {
    switch (size) {
      case 33:
        return '57px';
      case 49:
        return '97px';
      case 56:
        return '112px';
      case 60:
        return '128px';
      default:
        break;
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 33:
        return '57px';
      case 49:
        return '97px';
      case 56:
        return '112px';
      case 60:
        return '128px';
      default:
        break;
    }
  }};
`;

export const BlankIcon = ({ name, size }) => {
  const sizes = {
    s: 33,
    m: 49,
    l: 56,
    xl: 60,
  };

  const icosnArray = {
    apple: <AppleIcon size={sizes[size]} />,
    fish: <FishIcon size={sizes[size]} />,
    pork: <PorkIcon size={sizes[size]} />,
    banana: <BananaIcon size={sizes[size]} />,
    orange: <OrangeIcon size={sizes[size]} />,
  };

  return <Wrapper size={sizes[size]}>{icosnArray[name]}</Wrapper>;
};
