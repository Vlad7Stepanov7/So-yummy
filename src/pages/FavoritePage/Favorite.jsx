import FavoriteList from 'components/FavoriteList/FavoriteList';
import MainTitle from 'components/MainTitle/MainTitle';
import BGDots from 'reusableComponents/BGDots/BGDots';
import { Page } from './Favorite.styled';
import GoToTop from 'helpers/scrollToTop';

const Favorite = () => (
  <Page>
    <BGDots />
    <MainTitle text="Favorite" />
    <FavoriteList />
    <GoToTop />
  </Page>
);

export default Favorite;
