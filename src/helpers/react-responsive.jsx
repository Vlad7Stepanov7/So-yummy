import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
