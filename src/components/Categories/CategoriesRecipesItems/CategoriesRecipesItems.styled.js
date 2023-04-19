import styled from "styled-components";


export const RecipeItem = styled.li`

    border-radius: 8px;
    overflow: hidden;

    &:hover,
    &:focus{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: box-shadow 250ms cubic-bezier(.29,.57,.63,.45);

    }
    
    @media screen and (min-width: 768px) {
        flex-basis: calc((100% - 32px) / 2);
        border-radius: 8px;

    }
    @media screen and (min-width: 1440px) {
        flex-basis: calc((100% - 3 * 14px) / 4);
    }
    

`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    img{
        width: 343px;
        height: 323px;
        @media screen and (min-width: 768px) {
            width: 336px;
            height: 323px;
        }
        @media screen and (min-width: 1440px) {
            width: 300px;
            height: 323px;
        }
    }
`

export const TitleBox = styled.div`
    position: absolute;
    bottom: 26px;
    padding: 16px;
    width: 307px;
    background-color: #fff;
    border-radius: 8px;
    @media screen and (min-width: 768px) {
        width: 300px;
    }
    @media screen and (min-width: 1440px) {
        width: 268px;
        bottom: 24px;

    }
    p {
        font-weight: 500px;
        font-size: 16px;
        line-height: 1.25;
        letter-spacing: -0.24px;
        text-align: left;
        color: #3E4462;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
