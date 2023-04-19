import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { deleteMyRecipe, getMyRecipes } from 'api/index';
import MyRecipeItem from 'components/RecipeItem/MyRecipeItem';
import { List, ListText, LoaderBox } from '../FavoriteList/FavoriteList.styled';

const MyRecipesList = () => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);

   useEffect(() => {
      const renderRecipies = async () => {
        setLoading(true);
        try {
          const data = await getMyRecipes();
          setAllRecipes(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      renderRecipies();
    }, []);

  const handleDelete = async id => {
    try {
      await deleteMyRecipe(id);
      const data = await getMyRecipes(); 
      setAllRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <List>
      {loading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      {allRecipes !== 0 && !loading ? (
        allRecipes?.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            handleDelete={handleDelete}
            styleDel="green"
            styleBtn="dark"
          />
        ))
      ) : (
        <ListText>You don't have your recipes</ListText>
      )}
    </List>
  );
};

export default MyRecipesList;
