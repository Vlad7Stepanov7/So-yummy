import React from 'react';
import { Button } from 'components/Button/Button';
import { MainIcon } from 'images/svgIcons';
import {
  Main,
  Title,
  Subtitle,
  ButtonsWrapper,
  SvgWrapper,
} from './WellcomePage.styled';
import { Box } from 'components/Box';

export const WellcomePage = () => {
  return (
    <>
      <Main>
        <Box>
          <SvgWrapper>
            <MainIcon />
          </SvgWrapper>
          <Title>Welcome to the app!</Title>
          <Subtitle>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Subtitle>
          <ButtonsWrapper>
            <Button
              look="rounded_dark"
              to="/register"
              fontSize="14px"
              fontSizeTablet="16px"
              width="132px"
              heigth="45px"
              widthTablet="184px"
              heigthTablet="67px"
            >
              Registration
            </Button>
            <Button
              look="rounded_transparent"
              to="/signin"
              fontSize="14px"
              fontSizeTablet="16px"
              width="95px"
              heigth="45px"
              widthTablet="184px"
              heigthTablet="67px"
            >
              Sign In
            </Button>
          </ButtonsWrapper>
        </Box>
      </Main>
    </>
  );
};
