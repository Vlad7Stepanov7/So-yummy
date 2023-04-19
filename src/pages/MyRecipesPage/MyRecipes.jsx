import MyRecipesList from 'components/RecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../FavoritePage/Favorite.styled';
import BGDots from 'reusableComponents/BGDots/BGDots';
import GoToTop from 'helpers/scrollToTop';

const MyRecipes = () => (
  <Page>
    <BGDots />
    <MainTitle text="My recipes" />
    <MyRecipesList />
    <GoToTop />
  </Page>
);

export default MyRecipes;
