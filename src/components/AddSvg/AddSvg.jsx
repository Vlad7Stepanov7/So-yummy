import React from 'react';
import sprite from '../../images/sprite.svg';
import { useMedia } from 'hooks';

export const AddSvg = ({ name, width, height, widthTable, heightTablet, widthDesktop, heightDesktop  }) => {
  const { isTabletScreen, isDesktopScreen } = useMedia();
  if (isDesktopScreen) {
    return (
      <svg width={widthDesktop} height={heightDesktop}>
        <use xlinkHref={`${sprite}#${name}`} />
      </svg>
    )
  }

  if (isTabletScreen) {
    return (
      <svg width={widthTable} height={heightTablet}>
        <use xlinkHref={`${sprite}#${name}`} />
      </svg>
    )
  }
  return (
  <svg width={width} height={height}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
)};
