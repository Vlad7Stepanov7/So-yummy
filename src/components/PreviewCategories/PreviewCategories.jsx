import { useState, useEffect } from 'react';
import getCategoryList from 'api/getCategoryList';
import CategoryCard from 'components/CategoryCard/CategoryCard';
import PreviewCategoriesStyled from './PreviewCategoriesStyled';
import { Button } from 'components/Button/Button';
import { useSelector } from 'react-redux';

const PreviewCategories = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const token = useSelector(state => state.auth.token);
  const receiveCategories = async () => {
    const dataReceived = await getCategoryList(token);
    setPopularCategories(dataReceived);
  };

  useEffect(() => {
    receiveCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <PreviewCategoriesStyled>
      {popularCategories &&
        popularCategories.map(category => (
          <CategoryCard
            key={`cat_key${category[0].id}`}
            name={category[0].category}
            popular={category}
          />
        ))}
      <Button
        to="/categories/beef"
        look="rounded_other"
        width="195px"
        heigth="47px"
        widthTablet="239px"
        widthDesktop="239px"
        heigthTablet="61px"
        heigthDesktop="61px"
        fontSize="14px"
        fontSizeTablet="16px"
        fontSizeDesktop="16px"
        lineHeight="21px"
        lineHeightTablet="24px"
        lineHeightDesktop="24px"
      >
        Other categories
      </Button>
    </PreviewCategoriesStyled>
  );
};

export default PreviewCategories;
