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
    margin-bottom: 60px;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: space-around;
`;

export const Linha = styled.hr`
    border-color: red;
    width: 2px;
    height: 80%;
    position:absolute; 
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    transition: 0.9s ease-in;
`;

export const EventRight = styled.div`
    background:var(--corHome);
    padding: 15px;
    margin: auto 10px;
    border-radius: 8px;
    width: 400px;
    right: 45%;
    gap: 20px;
    position: relative;
    z-index: 100;
    text-align: left;
    font-family: var(--fontPrincipal);
    border: 1px solid var(--corTexto);
    transition: 0.4s ease-in;
    cursor: default;
&:hover{
    transform: scale(1.1);
}
`
export const EventLeft = styled.div`
    background:var(--corHome);
    padding: 15px;
    margin: auto 10px;
    border-radius: 8px;
    width: 400px;
    left: 45%;
    gap: 20px;
    z-index: 100;
    position: relative;
    text-align: right;
    font-family: var(--fontPrincipal);
    border: 1px solid var(--corTexto);
    transition: 0.4s ease-in;
    cursor: default;
&:hover{
    transform: scale(1.1);
}
`