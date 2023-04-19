// import { useState } from 'react';
import PropTypes from 'prop-types';
import placeholder from 'images/recipepage/placeholder-meal.jpg';
import { Box } from 'components/Box';
import {
  Title,
  Container,
  Instruction,
  BoxImg,
  Images,
  InstructionList,
  Item,
  IconNum,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ recipe }) => {
  const images = recipe.previewImg ?? recipe.preview ?? placeholder;
  const instructions = recipe.instructions
    .split('.')
    .filter(item => Number.isNaN(Number(parseInt(item))))
    .filter(str => str.trim() !== '');

  return (
    <Container>
      <Box>
        <Title>Recipe Preparation</Title>
        <InstructionList>
          {instructions.map((item, idx) => (
            <Item key={idx}>
              <IconNum>{idx + 1}</IconNum>
              <Instruction>{item.trim()}</Instruction>
            </Item>
          ))}
        </InstructionList>
      </Box>
      <BoxImg>
        <Images src={images} alt={recipe.title} />
      </BoxImg>
    </Container>
  );
};

RecipePreparation.propTypes = {
  recipe: PropTypes.shape({
    instructions: PropTypes.string,
    previewImg: PropTypes.string,
    preview: PropTypes.string,
  }).isRequired,
};
