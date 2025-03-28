import styled from "styled-components";

export const WorkBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
`;

// ===========================================
//               Tela de Trabalho
// ===========================================

export const WorkScreen = styled.main`
    width: 100%;
    margin-left: 20%;
    color: var(--corTexto);
`;

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    color: #a5a5a5;
`;

export const TitleConteinerWork = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;
    width: 100%;
    gap:10px;
    color: #a5a5a5;
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
    transition: 0.2s ease-in;
    cursor:pointer;
    &:hover {
        border: 1px solid red;
        transform: scale(1.1);
    }
`;

export const ServiceTitle = styled.h3`
    font-size: 1.1rem;
    color: var(--corTexto);
    font-family: var(--fontPrincipal);
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
`;

