import styled from "styled-components";

export const WorkBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

// ===========================================
//               Tela de Trabalho
// ===========================================

export const WorkScreen = styled.main`
    width: 100%;
    margin-left: 20%;
    color: var(--corTexto);
    @media (max-width: 1024px) {
        margin-left: 0;
        padding: 5%;
    }
`;


export const TitleConteinerWork = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;
    width: 100%;
    gap:10px;
    color: #a5a5a5;
    @media (max-width: 834px) and (min-width: 800px) {
        width: 75%;
        margin-left: 20%;
    }
    @media (max-width: 768px){
        width: 75%;
        margin-left: 20%;
    }
    @media (max-width: 440px) {
        margin: 0;
        width: 100%;
    }
    @media (max-width: 393px){
        margin: 0;
        width: 100%;
    }
    @media (max-width: 360px){
        margin: 0;
        width: 100%;
    }
`;

export const Container = styled.div`
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        color: #a5a5a5;
        @media (max-width: 834px) and (min-width: 800px) {
            width: 70%;
            margin-left: 25%;
        }
        @media (max-width: 768px){
            width: 70%;
            margin-left: 25%;
        }
        @media (max-width: 440px) {
        margin: 0;
        width: 100%;
        font-size: 10px;
    }
        @media (max-width: 393px){
        margin: 0;
        width: 100%;
        font-size: 10px;
    }
        @media (max-width: 360px){
        margin: 0;
        width: 100%;
        font-size: 10px;
    }
    `;


export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    padding: 50px;
    width: 100%;
    gap: 30px;
    margin-bottom: 50px;
    @media (max-width: 834px) and (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
`;

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    border-radius: 20px;
    padding: 15px;
    width: 200px;
    height: 240px;
    gap: 5%;
    cursor:default;
    @media (max-width: 440px) {
        width: 180px;
    }
    @media (max-width: 393px){
        width: 160px;
    }
    @media (max-width: 360px){
        width: 140px;
    }
`;

export const ServiceTitle = styled.h3`
    font-size: 1.1rem;
    color: var(--corTexto);
    font-family: var(--fontPrincipal);
    @media (max-width: 440px) {
        font-size: 13px;
    }
    @media (max-width: 393px){
        font-size: 13px;
    }
    @media (max-width: 360px){
        font-size: 13px;
    }
`;

export const ServiceDescription = styled.p`
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #a5a5a5;
    font-family: var(--fontPrincipal);
`;

export const ServiceButton = styled.a`
    background-color: red;
    display: inline-block;
    color: #fff;
    padding:10px 10px;
    border-radius: 10px;
    border: 1px solid var(--corTexto);
    text-decoration: none;
    font-size: 15px;
    font-family: var(--fontPrincipal);
    transition: 0.2s ease-in;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 440px) {
        padding:8px 5px;
        font-size: 10px;
    }
    @media (max-width: 393px){
        padding:8px 5px;
        font-size: 10px;
    }
    @media (max-width: 360px){
        padding:8px 5px;
        font-size: 10px;
    }
`;

