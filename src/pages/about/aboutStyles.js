import styled from "styled-components";

export const AboutBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
`;

// ===========================================
//               Tela Sobre Mim
// ===========================================

export const AboutScreen = styled.main`
    width: 100%;
    margin-left: 20%;
    color: var(--corTexto);
    gap: 20px;
`;

export const TitleConteinerAbout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;
    width: 100%;
    gap:10px;
    color: #a5a5a5;
`;


export const Container = styled.div`
    background-color: var(--corHome);
    border-radius: 10px;
    padding: 2% 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-top: 60px;
    width: 60%;
    position: relative;

&::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 4px;
    height: 100%;
    background-color:var(--corTexto);
    transform: translateX(-50%);
}
`;

export const Event = styled.div`
    background:var(--corHome);
    padding: 15px;
    margin: auto 10px;
    border-radius: 8px;
    width: 50%;
    gap: 20px;
    position: relative;
    text-align: left;
    font-family: var(--fontPrincipal);
    border: 1px solid var(--corTexto);´

&:nth-child(odd) {
    align-self: flex-start;
}

&:nth-child(even) {
    align-self: flex-end;
}
`
