import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './BGDots.styled';

const BGDots = () => {
  const darkMode = useSelector(state => state.theme);
  return <Container dark={darkMode.darkMode}></Container>;
};

export default BGDots;
