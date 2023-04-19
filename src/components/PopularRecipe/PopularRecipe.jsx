import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPopularList } from 'store/popular/popularOperation';
import {
  selectPopular,
  selectIsLoading,
  selectError,
} from 'store/popular/popularSelectors';
import { Loader } from 'components/Loader/Loader';
import {
  LoaderDiv,
  Preview,
  TitlePopularRecipe,
  ContainerPopularRecipe,
  ItemBox,
  TextBox,
  ItemList,
  TitleRecipe,
  Description,
  ErrorText,
  StyledLink,
} from './PopularRecipe.styled';
import { ShowToastError } from 'helpers/showToastError';

export const PopularRecipe = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const recipeList = useSelector(selectPopular);

  useEffect(() => {
    dispatch(getPopularList());
  }, [dispatch]);

  return (
    <ContainerPopularRecipe>
      {isLoading ? (
        <LoaderDiv>
          <Loader />
        </LoaderDiv>
      ) : (
        <>
          <TitlePopularRecipe>Popular recipe</TitlePopularRecipe>

          {recipeList.length > 0 ? (
            <ItemList>
              {recipeList.map(({ _id, title, preview, description }) => (
                <ItemBox key={_id}>
                  <StyledLink to={`/recipe/${_id}`}>
                    <Preview src={preview} alt="Ingredient" />
                    <TextBox>
                      <TitleRecipe>{title}</TitleRecipe>
                      <Description>{description}</Description>
                    </TextBox>
                  </StyledLink>
                </ItemBox>
              ))}
            </ItemList>
          ) : (
            <ErrorText>
              Unfortunately, there are currently no popular recipes 🙁
            </ErrorText>
          )}
          {error && (
            <ShowToastError msg="Ooops.. Something went wrong with Popular recipe" />
          )}
        </>
      )}
    </ContainerPopularRecipe>
  );
};
