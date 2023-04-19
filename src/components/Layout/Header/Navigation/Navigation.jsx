import { useParams } from "react-router-dom";
import { useMedia } from "hooks";

import {
  Container,
  List,
  Link,
  Item,
  SearchIcon,
  Wrap,
  Text,
} from "./Navigation.styled";

const Navigation = ({ handleClick }) => {
  // const { categoryName } = useParams();
  const recipe = useParams();
  const { isDesktopScreen } = useMedia();

  const pageList = [
    {
      to: `/categories/${recipe.categoryName ? recipe.categoryName : "beef"}`,
      text: "Categories",
    },
    {
      to: "/add",
      text: "Add recipes",
    },
    {
      to: "/my",
      text: "My recipes",
    },

    {
      to: "/favorite",
      text: "Favorites",
    },
    {
      to: "/shopping-list",
      text: "Shopping list",
    },
    {
      to: "/search",
      text: "Search",
    },
  ];

  const onDesktop = () => {
    if (!isDesktopScreen) {
      handleClick();
    }
  };

  return (
    <Container>
      <List>
        {pageList.map(({ to, text }) => (
          <Item onClick={() => onDesktop()} key={to}>
            <Link to={to} recipe={recipe}>
              {text !== "Search" || isDesktopScreen ? (
                <>{text !== "Search" ? <Text>{text}</Text> : <SearchIcon />}</>
              ) : (
                <>
                  {isDesktopScreen ? (
                    <SearchIcon />
                  ) : (
                    <Wrap>
                      <SearchIcon />
                      <Text>{text}</Text>
                    </Wrap>
                  )}
                </>
              )}
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
