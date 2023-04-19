import Nav from '../Nav/Nav';
import FollowUs from '../FollowUs/FollowUs';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { Box } from 'components/Box';
import {
  WrapperForLogo,
  Logo,
  WrapperForDescription,
  WrapperForNav,
  Wrapper,
  Description,
  ItemOfDescription,
  WrapperForText,
} from './Navigation.styled';
import { FooterIcon } from 'images/svgIcons';
import { useMedia } from 'hooks';

const Navigation = () => {
  const { screenType, isMobileScreen } = useMedia();

  return (
    <Box>
      <Wrapper>
        <WrapperForNav>
          <WrapperForDescription>
            <WrapperForLogo>
              <Logo to="/">
                <FooterIcon mobile={isMobileScreen} />
              </Logo>
              So Yummy
            </WrapperForLogo>
            {screenType !== 'mobile' ? (
              <Description>
                <ItemOfDescription>
                  Database of recipes that can be replenished
                </ItemOfDescription>
                <ItemOfDescription>
                  Flexible search for desired and unwanted
                  <WrapperForText>ingredients</WrapperForText>
                </ItemOfDescription>
                <ItemOfDescription>
                  Ability to add your own recipes with photos
                </ItemOfDescription>
                <ItemOfDescription>
                  Convenient and easy to use
                </ItemOfDescription>
              </Description>
            ) : null}
          </WrapperForDescription>
          <Nav />
        </WrapperForNav>
        <SubscribeForm />
      </Wrapper>
      <FollowUs sizeIcon={20} />
    </Box>
  );
};

export default Navigation;
