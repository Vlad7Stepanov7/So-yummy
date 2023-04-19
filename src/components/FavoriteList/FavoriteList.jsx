import { useLayoutEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getFavoriteRecipes, deleteFavoriteRecipe } from 'api/index';
import MyRecipeItem from '../RecipeItem/MyRecipeItem';
import { Loader } from '../Loader/Loader';

import { List, ListText, LoaderBox } from './FavoriteList.styled.js';
import { Paginator } from 'components/Paginator/Paginator';

const FavoriteList = () => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 4;

  const getFavorites = async () => {
    try {
      setLoading(true);
      const data = await getFavoriteRecipes();
      setAllRecipes(data);
    } catch (error) {
      toast.error('Something went wrong by getting recipes');
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    getFavorites();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteFavoriteRecipe(id);
      const data = await getFavoriteRecipes();
      setAllRecipes(data);
      setCurrentItems(data);
    } catch (error) {
      toast.error('Something went wrong by removing recipe');
    }
  };

  return (
    <>
      <List>
        {loading && (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        )}
        {currentItems.length !== 0 &&
          !loading &&
          currentItems.map(({ description, preview, time, title, _id }) => (
            <MyRecipeItem
              key={_id}
              description={description}
              preview={preview}
              time={time}
              title={title}
              id={_id}
              handleDelete={handleDelete}
            />
          ))}
        {allRecipes.length === 0 && !loading && (
          <ListText>You don't have your recipes</ListText>
        )}
      </List>
      {!!allRecipes.length && (
        <Paginator
          totalItems={allRecipes}
          perPage={itemsPerPage}
          setCurrentItems={setCurrentItems}
        />
      )}
    </>
  );
};

export default FavoriteList;
