import { List, Link, Item } from "./Nav.styled";

const Nav = () => {
    return (
        <List>
             <Item>
                 <Link to="/search">Ingredients</Link>
            </Item>
             <Item>
                 <Link to="/add">Add recipes</Link>
             </Item>
             <Item>
                <Link to="/my">My recipes</Link>
            </Item>
             <Item>
                 <Link to="/favorite">Favorite</Link>
             </Item>
            <Item>
                <Link to="/shopping-list">Shopping list</Link>
            </Item> 
        </List> 
    )
}

export default Nav;
 

