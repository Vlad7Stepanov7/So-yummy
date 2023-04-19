import {
  SeeRecipeLink,
  СhooseYourBreakfastStyled,
} from './СhooseYourBreakfastStyled';
import { useSelector } from 'react-redux';

const СhooseYourBreakfast = () => {
  const theme = useSelector(state => state.theme.darkMode);

  return (
    <СhooseYourBreakfastStyled>
      <p>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </p>
      <SeeRecipeLink to="/categories/breakfast">
        <span>See recipes </span>
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 6H13.5M13.5 6L9 1.5M13.5 6L9 10.5"
            stroke={theme ? '#FAFAFA' : '#3E4462'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SeeRecipeLink>
    </СhooseYourBreakfastStyled>
  );
};

export default СhooseYourBreakfast;
