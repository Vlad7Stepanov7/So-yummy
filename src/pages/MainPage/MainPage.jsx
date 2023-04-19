import PreviewCategories from 'components/PreviewCategories/PreviewCategories';
import MainPageStyled from './MainPageStyled';
import СhooseYourBreakfast from '../../components/СhooseYourBreakfast/СhooseYourBreakfast';
import MainPageSearch from 'components/MainPageSearch/MainPageSearch';
import GoToTop from 'helpers/scrollToTop';
// import { MainPageContainerStyled } from './MainPageStyled';

const MainPage = () => {
  return (
    <>
      <MainPageStyled>
        <h1>
          <span>So</span>Yummy
        </h1>
        <p>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <div>
          <СhooseYourBreakfast />
          <MainPageSearch />
        </div>
      </MainPageStyled>
      <PreviewCategories />
      <GoToTop />
    </>
  );
};

export default MainPage;
