import styled from 'styled-components';
import mainBgMobile from '../../images/mobile/main-mob-min.png';
import mainBgMobileRetina from '../../images/mobile/main-mob-ret-min.png';
import mainBgTablet from '../../images/tablet/main-tab-min.png';
import mainBgTabletRetina from '../../images/tablet/main-tab-ret-min.png';
import mainBgDesktop from '../../images/desktop/main-des.png';
import mainBgDesktopRetina from '../../images/desktop/main-des-ret.png';

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
  }

  svg {
    width: 54px;
    height: 54px;

    @media screen and (min-width: 768px) {
      width: 68px;
      height: 68px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 35px;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgMobile});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgMobileRetina});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgTabletRetina});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg), url(${mainBgDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg),
        url(${mainBgDesktopRetina});
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;

  text-align: center;
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  } ;
`;

export const Subtitle = styled.p`
  margin-bottom: 44px;
  max-width: 305px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #fafafa;

  @media screen and (min-width: 768px) {
    max-width: 505px;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  } ;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  } ;
`;
