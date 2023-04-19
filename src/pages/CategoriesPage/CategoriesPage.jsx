import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipesByCategory } from 'api/categories';
import { CategoriesList } from 'components/Categories/CategoriesList/CategoriesList';
import { RecipesList } from 'components/Categories/CategoriesRecipesList/CategoriesRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import BGDots from 'reusableComponents/BGDots/BGDots';
import { EmptyMessage } from 'pages/ShoppingPage/ShoppingPage.styled';
import { Loader } from 'components/Loader/Loader';
import { Paginator } from 'components/Paginator/Paginator';
import GoToTop from 'helpers/scrollToTop';
import { Box } from 'components/Box';

const CategoriesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalRecipies, setTotalRecipies] = useState(0);
  const [page, setPage] = useState(1);

  const { categoryName } = useParams();

  useEffect(() => {
    setPage(1);
  }, [categoryName]);

  useEffect(() => {
    setLoading(true);
    const getRecipes = async () => {
      try {
        const data = await getRecipesByCategory(categoryName, page);
        setTotalRecipies(data.total);
        setRecipes(data.recipes);
        setLoading(false);
      } catch (error) {
        setError(error.massege);
      }
    };
    getRecipes();
  }, [categoryName, page]);

  return (
    <main>
      <BGDots />
      <MainTitle text={'Categories'} />
      <CategoriesList />
      {loading && (
        <div
          style={{
            margin: '30px 0px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Loader />
        </div>
      )}
      {recipes.length > 0 && !loading && <RecipesList items={recipes} />}
      {error && <EmptyMessage>Something went wrong...</EmptyMessage>}

      <Box mt={20}>
        <Paginator
          totalData={totalRecipies}
          perPage={8}
          setPage={setPage}
          page={page}
        />
      </Box>
       
      <GoToTop />
    </main>
  );
};

export default CategoriesPage;
