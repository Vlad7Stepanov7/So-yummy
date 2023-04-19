import { Bar, ItemLink } from "./CategoriesList.styled";
import { useRef } from "react";
import { Wrapper } from "./CategoriesList.styled";

import usePreventBodyScroll from "helpers/hScrollEvListener";


const categories = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
];    




  



export const CategoriesList = () => {
    
    const { disableScroll, enableScroll } = usePreventBodyScroll();
    const scrollRef = useRef(null);

    const handleWheel = (event) => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const scrollAmount = event.deltaY;
            scrollContainer.scrollLeft += scrollAmount;
        }
    }
    return (
        <Wrapper>

            <Bar onMouseEnter={disableScroll} onMouseLeave={enableScroll} ref={scrollRef} onWheel={handleWheel}>
                {categories.map(category => (
                    <ItemLink to={`/categories/${category.toLowerCase()}`} key={category}>{category}</ItemLink>
                ))}
            </Bar>

        </Wrapper>
            
    )
};

