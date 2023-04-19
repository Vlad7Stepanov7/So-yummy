import { Conteiner, Wrapper } from './Footer.styled';
import Navigation from './Navigation/Navigation';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  return (
    <Conteiner>
      <Wrapper>
        <Navigation />
      </Wrapper>
      <Copyright />
    </Conteiner>
  );
};

export default Footer;
