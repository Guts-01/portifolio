import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ===========================================
//               NavBar
// ===========================================


export const NavBarStyled = styled.nav`
    background-color: var(--corNavBar);
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    padding: 30px;
    position: fixed;
    text-align: center; 
    max-width: 20%;
    width:20%;
    @media (max-width: 430px){
        display: none;
}`

export const StyledLink = styled(Link)`
        text-decoration: none;
    `

export const SectionsLinks = styled.a`
    align-items: center;
    border-radius: 10px;
    text-decoration: none;
    cursor: default;
    color: var(--corHome);
    background-color:var(--corTexto);
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    height: 5vh;
    width: 100%;
    transition: 0.2s ease-in;
    opacity: 0.7;
    &:hover{
        transform: scale(1.1);
        opacity: 1;
    }
    @media (max-width: 1024px) and (min-width: 800px) {
        height: 4vh;
        gap: 5px;
        height: 4vh;
        gap: 5px;
        font-size: 12px;
        padding: 5px;
    }
   @media (max-width: 768px) {
        height: 4vh;
        gap: 5px;
        font-size: 12px;
        padding: 5px;
    }
`;

export const SectionsLinks_img = styled.img`
    width: 20px;
    height: 20px;
`;

export const FooterNavBar = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 30vh;
    padding: 10px;
    width: 100%;
`
export const SectionsFooter = styled.section`
    align-items: center;
    border-radius: 10px;
    color: var(--corTexto);
    display: flex;
    flex-direction: row;
    font-family: var(--fontPrincipal);
    height: 5vh;
    justify-content: center;
    text-decoration: none;
    width: 100%;
`;


export const ButtonUp = styled.a`
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
`;