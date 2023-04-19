import MainPageSearchStyled from './MainPageSearchStyled';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const MainPageSearch = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const theme = useSelector(state => state.theme.darkMode);

  const handleNameChange = event => setSearch(event.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.error('Please, enter a valid search request!', {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: theme ? 'dark' : 'light',
      });
      setSearch('');
      return;
    }
    navigate(`/search?query=${search}`);
    setSearch('');
  };

  return (
    <MainPageSearchStyled onSubmit={onSubmit}>
      <input
        type="search"
        placeholder=""
        value={search}
        onChange={handleNameChange}
      />

      <Button
        type="submit"
        look="rounded"
        width="113px"
        heigth="52px"
        widthTablet="161px"
        heigthTablet="59px"
        heigthDesktop="70px"
        widthDesktop="161px"
        fontSize="14px"
        fontSizeTablet="16px"
        fontSizeDesktop="16px"
        lineHeight="21px"
        lineHeightTablet="24px"
        lineHeightDesktop="24px"
      >
        Search
      </Button>
    </MainPageSearchStyled>
  );
};

export default MainPageSearch;
