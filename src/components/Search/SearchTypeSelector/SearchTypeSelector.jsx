import CustomSelect from './CustomSelect';
import { Search, SearchForm, Text } from './SearchByType.styled';

const SearchByType = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Text>Search by:</Text>
      <Search>
        <SearchForm>
          <CustomSelect />
        </SearchForm>
      </Search>
    </div>
  );
};

export default SearchByType;
