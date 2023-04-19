import { useMedia } from 'hooks';
import MainTitle from 'components/MainTitle/MainTitle';
import { Box } from 'components/Box';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import FollowUs from 'components/Layout/Footer/FollowUs/FollowUs';
import {
  Page,
  ContainerForm,
  ContainerPopular,
  SharedContainer,
  SocialsTitle,
} from './AddRecipePage.styled';
import GoToTop from 'helpers/scrollToTop';

const AddRecipePage = () => {
  const { isDesktopScreen } = useMedia();
  return (
    <Page>
      <MainTitle text="Add recipe" />
      <SharedContainer>
        <ContainerForm>
          <AddRecipeForm />
        </ContainerForm>
        <ContainerPopular>
          {isDesktopScreen && (
            <Box mb={100}>
              <SocialsTitle>Follow us</SocialsTitle>
              <FollowUs place="recipe-page" sizeIcon={26} />
            </Box>
          )}
          <PopularRecipe />
        </ContainerPopular>
      </SharedContainer>
      <GoToTop />
    </Page>
  );
};

export default AddRecipePage;
