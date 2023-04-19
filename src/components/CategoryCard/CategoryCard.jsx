import CategoryCardStyled from './CategoryCardStyled';
import { useState, useEffect } from 'react';
import { RecipeStyled } from './CategoryCardStyled';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ name, popular }) => {
  const [number, setNumber] = useState(1);
  const navigate = useNavigate();

  const resizeHandler = async () => {
    if (window.screen.width < 768) {
      setNumber(1);
    }
    if (window.screen.width >= 768 && window.screen.width < 1440) {
      setNumber(2);
    }
    if (window.screen.width >= 1440) {
      setNumber(4);
    }
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
    // eslint-disable-next-line
  }, []);

  const seeAllHandler = () => {
    navigate(`/categories/${name}`);
  };

  return (
    <CategoryCardStyled>
      <h2>{name}</h2>
      <div>
        {popular.slice(0, number).map(recipe => (
          <RecipeStyled
            imgUrl={recipe.preview}
            key={recipe.id}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <span>{recipe.title}</span>
          </RecipeStyled>
        ))}
      </div>
      <button onClick={seeAllHandler}>
        <span>See all</span>
      </button>
    </CategoryCardStyled>
  );
};

export default CategoryCard;
