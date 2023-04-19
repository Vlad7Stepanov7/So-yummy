import React from "react";
import { Item, Title, Text, Image, MetaWrapper, PreparingTime, DeleteBtn } from "./RecipeCard.styled";

const RecipeCard = ({ recipeData }) => {
    const { image, title, description, time, onDelete } = recipeData;
    return (
        <Item>
            <Image src={image} alt={title} />
            <MetaWrapper>
                <Title>{title}</Title>
                <Text>{description}</Text>
                <PreparingTime>{time}</PreparingTime>
                <DeleteBtn onClick={onDelete}>Delete</DeleteBtn>
            </MetaWrapper>
        </Item>
    );
};

export default RecipeCard;