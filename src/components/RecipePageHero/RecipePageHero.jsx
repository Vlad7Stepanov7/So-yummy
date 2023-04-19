import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorite,
  selectFavoriteIsLoading,
  selectFavoriteError,
} from 'store/recipe/recipeSelectors';
import {
  addRecipeToFavorite,
  removeRecipeFromFavorite,
} from 'store/recipe/recipeOperation';
import { Loader } from 'components/Loader/Loader';
import { ShowToastError } from 'helpers/showToastError';
import { MainPageTitle } from './MainPageTitle/MainPageTitle';
import { Button } from 'components/Button/Button';
import { TbClockHour4 } from 'react-icons/tb';
import { Hero, Description, Time, ContainerBtn } from './RecipePageHero.styled';

export const RecipePageHero = ({ recipe, isMyrecipe }) => {

  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const isLoading = useSelector(selectFavoriteIsLoading);
  const error = useSelector(selectFavoriteError);
  const [currentFavorite, setCurrentFavorite] = useState(favorite);

  useEffect(() => {
    setCurrentFavorite(favorite);
  }, [favorite]);

  const handleAddToFavorite = () => {
    dispatch(addRecipeToFavorite(recipe._id));
    setCurrentFavorite(!favorite);
  };

  const handleRemoveFavorite = () => {
    dispatch(removeRecipeFromFavorite(recipe._id));
    setCurrentFavorite(!favorite);
  };

  return (
    <Hero>
      <MainPageTitle title={recipe.title} />
      <Description>{recipe.description}</Description>

      {!isMyrecipe && (
        <ContainerBtn>
          {currentFavorite ? (
            <Button
              type="button"
              fontSize="10px"
              fontSizeTablet="16px"
              look="rounded_other"
              width="150px"
              widthTablet="278px"
              heigth="35px"
              heigthTablet="59px"
              lineHeight="15px"
              lineHeightTablet="24px"
              onClick={handleRemoveFavorite}
            >
              {isLoading ? <Loader size="30" /> : 'Remove From Favorite'}
            </Button>
          ) : (
            <Button
              type="button"
              fontSize="10px"
              fontSizeTablet="16px"
              look="rounded_other"
              width="150px"
              widthTablet="278px"
              heigth="35px"
              heigthTablet="59px"
              lineHeight="15px"
              lineHeightTablet="24px"
              onClick={handleAddToFavorite}
            >
              {isLoading ? <Loader size="30" /> : 'Add To Favorite'}
            </Button>
          )}
        </ContainerBtn>
      )}
      <Time>
        <TbClockHour4 />
        {`${recipe.time} min`}
      </Time>
      {error && <ShowToastError msg="Failed to add to favorite" />}
    </Hero>
  );
};

RecipePageHero.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
};
