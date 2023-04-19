import bgMobile1x from '../../images/recipepage/bg_mobile_1x.webp';
import bgMobile2x from '../../images/recipepage/bg_mobile_2x.webp';
import bgTablet1x from '../../images/recipepage/bg_tablet_1x.webp';
import bgTablet2x from '../../images/recipepage/bg_tablet_2x.webp';
import bgDesktop1x from '../../images/recipepage/bg_desktop_1x.webp';
import bgDesktop2x from '../../images/recipepage/bg_desktop_2x.webp';
import styled from 'styled-components';

export const Hero = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 144px 36px 90px 36px;
  height: 455px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgMobile1x});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }

  @media ${props => props.theme.device.tablet} {
    padding: 136px 131px 36px 131px;
    height: 585px;
    background-image: url(${bgTablet1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgTablet2x});
    }
  }

  @media ${props => props.theme.device.desktop} {
    padding: 170px 131px 36px 131px;
    height: 620px;
    background-image: url(${bgDesktop1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDesktop2x});
    }
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  max-width: 300px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.02em;
  color: #22252a;

  @media ${props => props.theme.device.tablet} {
    max-width: 506px;
    font-size: 18px;
  }
`;

export const ContainerBtn = styled.div`
  margin-bottom: 42px;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 60px;
  }
`;

export const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262a;

  svg {
    flex-grow: 1;
    width: 14px;
    height: 14px;
  }

  @media ${props => props.theme.device.tablet} {
    gap: 8px;
    font-size: 14px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
