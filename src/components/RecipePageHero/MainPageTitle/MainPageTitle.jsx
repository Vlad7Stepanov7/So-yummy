import PropTypes from 'prop-types';
import { Title } from './MainPageTitle.styled';

export const MainPageTitle = ({ title }) => <Title>{title}</Title>;

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
