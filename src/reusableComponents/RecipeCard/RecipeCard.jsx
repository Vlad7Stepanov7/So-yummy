import React from 'react';

import { Link } from 'react-router-dom';

import { CardContainer, Image, TextContainer } from './RecipeCard.styled';

const RecipeCard = ({ image, altText, text, isShow, id }) => {
  const shortText =
    text.length < 28 ? text : text.substr(0, 28).replace(/\s+\S*$/, '') + '...';

  return (
    <>
      <CardContainer>
        <Link to={`/recipe/${id}`}>
          <Image src={image} alt={altText} />
        </Link>
        <TextContainer>{isShow ? text : shortText}</TextContainer>
      </CardContainer>
    </>
  );
};

export default RecipeCard;
