import styled from 'styled-components';

import image1green from 'images/SearchBackground/image1green.png';
import image2green from 'images/SearchBackground/image2green.png';
import image3green from 'images/SearchBackground/image3green.png';
import image4green from 'images/SearchBackground/image4green.png';
import image1black from 'images/SearchBackground/image1black.png';
import image2black from 'images/SearchBackground/image2black.png';
import whiteMob_min from 'images/SearchBackground/whiteMob-min.png';
import white2 from 'images/SearchBackground/white2-min.png';

export const Container = styled.div`
  position: absolute;
  width: 345px;
  height: 192px;

  background-image: url(${image1green}),
    ${p => (p.dark ? `url(${whiteMob_min})` : `url(${image1black})`)},
    url(${image2green});
  background-repeat: no-repeat;
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: left 105px top 14px, left 231px top 79px,
    left 332px top 46px;

  @media screen and (min-width: 768px) {
    width: 718px;
    height: 240px;
    background-image: url(${image3green}),
      ${p => (p.dark ? `url(${white2})` : `url(${image2black})`)},
      url(${image4green});
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 189px top 17px, left 407px top 87px,
      left 695px top 31px;
  }

  @media screen and (min-width: 1440px) {
    width: 1180px;
    height: 240px;
    background-image: url(${image3green}),
      ${p => (p.dark ? `url(${white2})` : `url(${image2black})`)},
      url(${image4green});
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 228px top 56px, left 706px top 139px,
      left 1149px top 69px;
  }
`;
