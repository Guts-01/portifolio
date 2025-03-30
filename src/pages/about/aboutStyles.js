import styled from "styled-components";

export const AboutBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

// ===========================================
//               Tela Sobre Mim
// ===========================================

export const AboutScreen = styled.main`
    width: 100%;
    margin-left: 20%;
    color: var(--corTexto);
    gap: 20px;
    @media (max-width: 1024px) {
        margin-left: 0;
        padding: 5%;
    }
`;

export const TitleConteinerAbout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;
    width: 100%;
    gap:10px;
    color: #a5a5a5;
    @media (max-width: 1024px) and (min-width: 800px) {
        margin-left: 20%;
        width: 75%;
    }
   @media (max-width: 768px) {
        margin-left: 20%;
        width: 75%;
    }
    @media (max-width: 440px) {
        margin-left: 0;
        width: 100%;
    }
    @media (max-width: 393px){
        margin-left: 0;
        width: 100%;
    }
    @media (max-width: 360px){
        margin-left: 0;
        width: 100%;
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
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 100%;
        text-align: center;
        padding-left: 25%;
    }
    @media (max-width: 768px){
        width: 100%;
        text-align: start;
    }
    @media (max-width: 440px){
        padding-bottom: 80px;
    }
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
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 25%;
        text-align: center;
    }
   @media (max-width: 768px){
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 25%;
        text-align: center;
    }
    @media (max-width: 440px) {
        padding-left: 0;
        width: 100%;
    }
    @media (max-width: 393px){
        padding-left: 0;
        width: 100%;
    }
    @media (max-width: 360px){
        padding-left: 0;
        width: 100%;
    }
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
    @media (max-width: 1024px) and (min-width: 800px) {
        left: 65%;
    }
   @media (max-width: 768px) {
        left: 65%;
    }
    @media (max-width: 440px) {
        left: 50%;
    }
    @media (max-width: 393px){
        left: 50%;
    }
    @media (max-width: 360px){
        left: 50%;
    }
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
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 300px;
        right: 0;
        text-align: center;
    }
   @media (max-width: 768px) {
        width: 300px;
        right: 0;
        text-align: center;
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
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 300px;
        left: 0;
        text-align: center;
    }
   @media (max-width: 768px)  {
        width: 300px;
        left: 0;
        text-align: center;
    }
`
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
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 300px;
        text-align: center;
        margin-left: 25%;
    }
    @media (max-width: 768px) {
        width: 300px;
        margin-left: 25%;
        text-align: center;
    }
    @media (max-width: 440px) {
        margin: 0;
        width: 200px;
    }
    @media (max-width: 393px){
        margin: 0;
        width: 200px;
    }
    @media (max-width: 360px){
        margin: 0;
        width: 200px;
    }
    `;