import styled from "styled-components";


export const RecipeList = styled.ul`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    padding-top: ${p=>p.theme.space[5]}px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: ${p=>p.theme.space[5]}px;
    padding-top:50px;
    }

  @media screen and (min-width: 1440px) {
    column-gap: 14px;
    row-gap: 100px;
    }

`