import PropTypes from 'prop-types';
import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { List, Item, Link } from './FollowUs.styled';
import { useSelector } from 'react-redux';

const FollowUs = ({ place, sizeIcon }) => {
  const darkMode = useSelector(state => state.theme);
  return (
    <List place={place}>
      <Item dark={darkMode.darkMode}>
        <Link
          href="https://uk-ua.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          dark={darkMode.darkMode}
        >
          <BsFacebook size={sizeIcon} />
        </Link>
      </Item>
      <Item dark={darkMode.darkMode}>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
          dark={darkMode.darkMode}
        >
          <BsYoutube size={sizeIcon} />
        </Link>
      </Item>
      <Item dark={darkMode.darkMode}>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
          dark={darkMode.darkMode}
        >
          <BsTwitter size={sizeIcon} />
        </Link>
      </Item>
      <Item dark={darkMode.darkMode}>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
          dark={darkMode.darkMode}
        >
          <BsInstagram size={sizeIcon} />
        </Link>
      </Item>
    </List>
  );
};

FollowUs.propTypes = {
  place: PropTypes.string,
  sizeIcon: PropTypes.number.isRequired,
};

export default FollowUs;
