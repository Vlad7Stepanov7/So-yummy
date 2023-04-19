import { RecipesItem } from "../CategoriesRecipesItems/CategoriesRecipesItems";
import { RecipeList } from "./CategoriesRecipesList.styled";


export const RecipesList = ({items}) => {
    return(
        <RecipeList>
            {items.map(item => (
                <RecipesItem key={item._id} recipe={item} />
            ))}
        </RecipeList>
    )
}