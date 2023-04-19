import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 70px;
  }
`;

export const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
`;

export const SearchItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    margin: 15px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin: 50px 7px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const NoRecipesImg = styled.img`
  width: 208px;
  height: 133px;
  margin: auto;
  margin-bottom: 33px;
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    margin-bottom: 33px;
  }

  @media screen and (min-width: 1140px) {
    width: 350px;
    height: 225px;
    margin-bottom: 33px;
  }
`;

export const NoRecipesText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 101px;
  opacity: 0.5;
  color: ${p => p.theme.colors.notFoundPageText};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 200px;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
`;
