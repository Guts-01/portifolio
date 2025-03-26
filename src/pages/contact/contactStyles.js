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
`;

export const TitleConteinerWork = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;
    width: 100%;
    gap:10px;
    color: #a5a5a5;
`;

export const Button = styled.a`
    display: inline-block;
    background-color:red;
    color: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid var(--corTexto);
    text-decoration: none;
    font-size: 1.2rem;
    margin: 10px;
    transition: 0.2s ease-in;
&:hover {
    transform: scale(1.1);
}
`;