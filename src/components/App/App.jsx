import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { merge, get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { StyledToastContainer } from 'pages/RegisterPage/RegisterPage.styled';
import { baseTheme } from '../../theme';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'store/auth/authOperations';
import { SigninPage } from 'pages/SigninPage/SigninPage';
import { RegisterPage, WellcomePage, NotFoundPage } from 'pages';
import { SharedLayout } from 'components/Layout/SharedLayout/SharedLayout';
import { PrivateRoute, RestrictedRoute } from 'components/Routes';
import { Loader } from 'components/Loader/Loader';

const ShoppingPage = lazy(() => import('pages/ShoppingPage/ShoppingPage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const MyRecipes = lazy(() => import('pages/MyRecipesPage/MyRecipes'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const Favorite = lazy(() => import('pages/FavoritePage/Favorite'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const MainPage = lazy(() => import('pages/MainPage/MainPage'));

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(state => state.auth);
  const [mode, setMode] = useState('light');
  const darkMode = useSelector(state => state.theme.darkMode);
  const theme = getTheme(mode);

  useMemo(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {!isRefreshing && (
          <Routes>
            {!isLoggedIn && <Route index element={<WellcomePage />} />}

            <Route
              path="/"
              element={
                <PrivateRoute component={SharedLayout} redirectTo="/signin" />
              }
            >
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path="main"
                element={
                  <Suspense fallback={<Loader />}>
                    <MainPage />
                  </Suspense>
                }
              />

              <Route
                path="categories/:categoryName"
                element={
                  <Suspense fallback={<Loader />}>
                    <CategoriesPage />
                  </Suspense>
                }
              />

              <Route
                path="add"
                element={
                  <Suspense fallback={<Loader pageHeight="100vh" />}>
                    <AddRecipePage />
                  </Suspense>
                }
              />

              <Route
                path="favorite"
                element={
                  <Suspense fallback={<Loader />}>
                    <Favorite />
                  </Suspense>
                }
              />

              <Route
                path="recipe/:recipeId"
                element={
                  <Suspense fallback={<Loader pageHeight="100vh" />}>
                    <RecipePage />
                  </Suspense>
                }
              />

              <Route
                path="my"
                element={
                  <Suspense fallback={<Loader />}>
                    <MyRecipes />
                  </Suspense>
                }
              />

              <Route
                path="search"
                element={
                  <Suspense fallback={<Loader />}>
                    <SearchPage />
                  </Suspense>
                }
              />

              <Route
                path="shopping-list"
                element={
                  <Suspense fallback={<Loader />}>
                    <ShoppingPage />
                  </Suspense>
                }
              />
            </Route>

            <Route
              index
              path="/register"
              element={
                <RestrictedRoute component={RegisterPage} redirectTo="/main" />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute component={SigninPage} redirectTo="/main" />
              }
            />

            <Route
              path="/signin/:verificationToken"
              element={
                <RestrictedRoute component={SigninPage} redirectTo="/main" />
              }
            />
          </Routes>
        )}
        <StyledToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? 'dark' : 'light'}
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
