import { useMedia } from "hooks";
import { MainIcon, FooterIcon } from "images/svgIcons";

import { useLocation } from "react-router-dom";
import { WrapLogo, StyleLink } from "./Logo.styled";

const Logo = ({ handleClick }) => {
  const { pathname } = useLocation();
  const { isMobileScreen, isDesktopScreen } = useMedia();
  const onDesktop = () => {
    if (!isDesktopScreen) {
      handleClick();
    }
  };
  return (
    <StyleLink onClick={() => onDesktop()} to="/main">
      {isMobileScreen ? (
        <>
          {pathname === "/main" ? (
            <WrapLogo>
              <FooterIcon mobile={isMobileScreen} />
            </WrapLogo>
          ) : (
            <MainIcon mobile={isMobileScreen} />
          )}
        </>
      ) : (
        <MainIcon mobile={isMobileScreen} />
      )}
    </StyleLink>
  );
};

export default Logo;
