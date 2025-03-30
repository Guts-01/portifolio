import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavBarMobile = styled.nav`
    background-color: var(--corNavBar);
    display: none;
    flex-direction: row;
    gap: 20px;
    height: 10vh;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 9999;
    padding: 30px;
    text-align: center; 
    max-width: 100%;
    width:100%;
    @media (max-width: 450px){
        display: flex;
        justify-content: center;
}`

export const StyledLinkMobile = styled(Link)`
        text-decoration: none;
    `

export const SectionsLinksMobile = styled.a`
    align-items: center;
    border-radius: 8px;
    text-decoration: none;
    cursor: default;
    color: var(--corHome);
    background-color:var(--corTexto);
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 5vh;
    width: 100%;
    transition: 0.2s ease-in;
    opacity: 0.7;
    &:hover{
        transform: scale(1.1);
        opacity: 1;
    }
    @media (max-width: 440px) {
        height: 4vh;
        gap: 5px;
        font-size: 12px;
        padding: 5px;
    }
        @media (max-width: 393px){
        height: 3vh;
        gap: 3px;
        font-size: 10px;
        padding: 10px;
    }
        @media (max-width: 360px){
        gap: 3px;
        height: 3vh;
        font-size: 8px;
        padding: 10px;
    }
`;

export const SectionsLinks_imgMobile = styled.img`
    width: 20px;
    height: 20px;
    @media (max-width: 393px){
        width: 10px;
        height: 10px;
    }
        @media (max-width: 360px){
            width: 10px;
            height: 10px;
    }
`;


export const ButtonUpMobile = styled.a`
    text-decoration: none;
    width: 50px;
    height: 50px;
    position: fixed;
    padding: 5px;
    top: 90%;
    color: var(--corTexto);
    right: 30px;
    display: flex;
    background:transparent;
    border-radius: 100%;
    border: 1px solid var(--corTexto);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    gap: 10px;
    transition: 0.2s ease-in;
    &:hover{
        transform: scale(1.1);
    }
    @media (max-width: 440px){
        display: none;
    }
`;