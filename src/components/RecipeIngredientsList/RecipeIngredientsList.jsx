import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingListError } from 'store/recipe/recipeSelectors';
import {
  addToShoppingList,
  removeFromShoppingList,
} from 'store/recipe/recipeOperation';
import { ShowToastError } from 'helpers/showToastError';
import { BsCheckLg } from 'react-icons/bs';
import placeholder from '../../images/recipepage/placeholder.png';
import { Box } from 'components/Box';
import {
  Section,
  TableData,
  Container,
  Title,
  List,
  Item,
  RecipeImage,
  IngredientTitle,
  MeasureInfo,
  ContainerCheckbox,
  Checkbox,
  Icon,
} from './RecipeIngredientsList.styled';

export const RecipeIngredientsList = ({ ingredients = [] }) => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const error = useSelector(selectShoppingListError);

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: checked,
    });
    const data = {
      productId: item._id ?? item.id,
      measure: item.measure,
    };

    if (checked) {
      dispatch(addToShoppingList(data))
        .unwrap()
        .then(() => toast.success(`${item.title} add to shopping list`))
        .catch(err => err);
    } else
      dispatch(removeFromShoppingList(item._id ?? item.id))
        .unwrap()
        .then(() => toast.success(`${item.title} removed from shopping list`))
        .catch(err => err);
  };

  return (
    <Section>
      <TableData>
        <Title>Ingredients</Title>
        <Container>
          <Title>Number</Title>
          <Title>Add to list</Title>
        </Container>
      </TableData>
      <List>
        {ingredients.map(item => (
          <Item key={item._id ?? item.id}>
            <Box display="flex" alignItems="center">
              <RecipeImage src={item.thumb ?? placeholder} alt={item.title} />
              <IngredientTitle>{item.title}</IngredientTitle>
            </Box>
            <Container>
              <MeasureInfo>{item.measure}</MeasureInfo>
              <ContainerCheckbox>
                <Checkbox
                  type="checkbox"
                  checked={checkedItems[item._id ?? item.id] ?? false}
                  onChange={e => handleChange(e, item)}
                  name={item._id ?? item.id}
                />
                <Icon>
                  <BsCheckLg />
                </Icon>
              </ContainerCheckbox>
            </Container>
          </Item>
        ))}
      </List>
      {error && <ShowToastError msg="Failed to add to shopping cart" />}
    </Section>
  );
};

RecipeIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      desc: PropTypes.string,
      measure: PropTypes.string,
      thumb: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
