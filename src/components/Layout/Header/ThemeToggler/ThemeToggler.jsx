import { useDispatch, useSelector } from "react-redux";
import { Container, Switch } from "./ThemeToggler.styled";
import { toggleTheme } from "store/theme/ThemeSlice";

const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <Container>
      <Switch
        type="checkbox"
        checked={theme}
        onChange={() => dispatch(toggleTheme())}
      />
    </Container>
  );
};

export default ThemeToggler;
