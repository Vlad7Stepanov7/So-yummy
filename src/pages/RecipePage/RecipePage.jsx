import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecipeById,
  selectRecipeIsLoading,
  selectRecipeError,
  selectOwnRecipeById,
} from 'store/recipe/recipeSelectors';
import { getRecipeById, getOwnRecipeById } from 'store/recipe/recipeOperation';
import GoToTop from 'helpers/scrollToTop';
import { Loader } from 'components/Loader/Loader';
import { ShowToastError } from 'helpers/showToastError';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);
  const ownRecipe = useSelector(selectOwnRecipeById);
  const isLoading = useSelector(selectRecipeIsLoading);
  const error = useSelector(selectRecipeError);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState([]);

  const [myRecipe, setOwnRecipe] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location?.state?.from.pathname === '/my') {
      setOwnRecipe(true);
      dispatch(getOwnRecipeById(recipeId));
    } else {
      dispatch(getRecipeById(recipeId));
      setOwnRecipe(false);
    }
  }, [recipeId, dispatch, location?.state?.from.pathname]);


  useEffect(() => {
    setCurrentRecipe(recipe ?? ownRecipe);
  }, [recipe, ownRecipe]);

  useEffect(() => {
    if (currentRecipe !== null) {
      const { ingredients, ingredientsParse } = currentRecipe;
      setCurrentIngredients(ingredients ?? ingredientsParse);
    }
  }, [currentRecipe]);

  return (
    <>
      <GoToTop />
      {isLoading && <Loader pageHeight="100vh" />}
      {currentRecipe !== null && (
        <div>

          <RecipePageHero recipe={currentRecipe} isMyrecipe={myRecipe} />

          <RecipeIngredientsList ingredients={currentIngredients} />
          <RecipePreparation recipe={currentRecipe} />
        </div>
      )}
      {recipe && ownRecipe && error && (
        <ShowToastError msg="Can't upload recipe" />
      )}
    </>
  );
};

export default RecipePage;
