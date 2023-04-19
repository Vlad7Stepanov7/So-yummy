import { Box } from 'components/Box';
import React, { useEffect } from 'react';
import {
  mobileLow,
  //   mobileHigh,
  tabletLow,
  //   tabletHigh,
  desktopLow,
  //   desktopHigh,
} from 'images/bg/bgError';
import { useMedia } from 'hooks';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const NotFoundPage = () => {
  const { isMobileScreen, isDesktopScreen, isTabletScreen } = useMedia();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigate('/main', { replace: true });
      } else {
        navigate('/signin', { replace: true });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate, isLoggedIn]);

  const imageSrc =
    (isMobileScreen && mobileLow) ||
    (isTabletScreen && tabletLow) ||
    (isDesktopScreen && desktopLow);

  return (
    <Box as={'main'} mt={52}>
      <InformImage src={imageSrc} alt="not found" />
      <InformText>
        We are sorry,
        <span>but the page you were looking for can't be found...</span>
      </InformText>
    </Box>
  );
};

const InformImage = styled.img`
  margin: 0 auto;
`;

const InformText = styled.p`
  width: 230px;
  margin: 14px auto 0px;
  text-align: center;

  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.notFoundPageText};

  & span {
    margin-top: 8px;
    display: block;
    font-weight: 400;
    opacity: 0.5;
    line-height: 1.29;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    width: 430px;

    & span {
      margin-top: 14px;
      font-size: ${p => p.theme.fontSizes.m}px;
    }
  }
`;
