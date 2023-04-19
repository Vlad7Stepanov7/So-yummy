import { NavLink } from "react-router-dom"
import { RecipeItem, TitleBox, Wrapper } from "./CategoriesRecipesItems.styled";



export const RecipesItem = ({ recipe }) => {
    return (
        <RecipeItem>
            <NavLink to={`/recipe/${recipe._id}`}>
                <Wrapper>
                    <img src={recipe.preview} alt={recipe.title} />
                    <TitleBox>
                        <p>{recipe.title}</p>
                    </TitleBox>
                </Wrapper>
            </NavLink>
        </RecipeItem>
    )
}