import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Text = styled.p`
  padding-top: 35px;
  margin-right: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.sectionTitle};

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    font-size: 18px;
    line-height: 24px;
  }
`;
