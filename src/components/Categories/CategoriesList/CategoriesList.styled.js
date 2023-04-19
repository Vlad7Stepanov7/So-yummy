import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 50px;
    @media screen and (min-width: 1440px) {
        padding-top: 100px;
    }
`

export const Bar = styled.ul`
    
    display: flex;
    gap: 28px;
    padding: 0px 30px 22px ;
    border-bottom: 1px solid #E0E0E0;
    overflow-y: scroll;
    transform: matrix(1, 0, 0, 1, 0, 0);

    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (min-width: 768px) {
        gap: 55px;
        padding: 0px 30px 18px 30px;
    }
    @media screen and (min-width: 1440px) {
        gap: 55px;
        /* padding-top: 100px; */
    }
`;

export const ItemLink = styled(NavLink)`

    display: block;
    text-decoration: none;
    position: relative;
    color: #BDBDBD;
    line-height: 38px;
    transition: color 250ms cubic-bezier(.29,.57,.63,.45);

    &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: -22px;
        width: 100%;
        height: 2px;
        background-color: transparent;
    }

    &.active{
        color: ${p=>p.theme.colors.accentColor};

        &::after{
            background-color: ${p=>p.theme.colors.accentColor};
        }
    }
     &:hover:not(.active),
     &:focus-visible:not(.active) {
        color: ${p=>p.theme.colors.accentColor};
    }
    @media screen and (min-width: 768px){
        
        &::after {
        bottom: -18px;
        }
        font-size: 18px;
    }
` 