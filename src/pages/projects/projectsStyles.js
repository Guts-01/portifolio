import styled from "styled-components";

export const ProjectsBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
    overflow: hidden;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

// ===========================================
//               Tela De Projetos
// ===========================================

export const ProjectsScreen = styled.main`
    width: 100%;
    margin-left: 20%;
    color: var(--corTexto);
    gap: 60px;
    @media (max-width: 1024px) {
        margin-left: 0;
        padding: 5%;
    }
    @media (max-width: 440px){
        padding-bottom: 80px;
    }
`;

export const TitleConteinerProjetos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;
    width: 95%;
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

export const ConteinerProjetosLeft = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: end;
    padding: 2% 10%;
    gap: 10px;
    margin-top: 60px;
    margin-bottom: 60px;
    @media (max-width: 1024px) and (min-width: 800px) {
        margin-left: 20%;
        margin-top: 220px;
        margin-bottom: 250px;
        width: 70%;
    }
   @media (max-width: 768px) {
        margin-left: 20%;
        margin-top: 150px;
        margin-bottom: 250px;
        width: 70%;
    }
    @media (max-width: 440px) {
        margin-left: 0;
        font-size: 10px;
        width: 100%;
        margin-bottom: 150px;
    }
    @media (max-width: 393px){
        margin-left: 0;
        margin-bottom: 150px;
    }
    @media (max-width: 360px){
        margin-left: 0;
        margin-bottom: 150px;
    }
`;

export const ConteinerProjetosRight = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 0 10%;
    gap: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width: 1024px) and (min-width: 800px) {
        margin-left: 20%;
        margin-top: 250px;
        margin-bottom: 250px;
        width: 70%;
    }
   @media (max-width: 768px) {
        margin-left: 20%;
        margin-top: 150px;
        margin-bottom: 250px;
        width: 70%;
    }
    @media (max-width: 440px) {
        margin-left: 0;
        font-size: 10px;
        width: 100%;
        margin-top: 120px;
        margin-bottom: 150px;
    }
    @media (max-width: 393px){
        margin-left: 0;
        margin-bottom: 150px;
    }
    @media (max-width: 360px){
        margin-left: 0;
        margin-bottom: 150px;
    }
`;

export const Divprojects = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
    gap: 40px;
    justify-content: space-around;
    @media (max-width: 1024px) and (min-width: 800px) {
        flex-direction: column;
    }
   @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 440px) {
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 393px){
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 360px){
        justify-content: center;
        align-items: center;
    }
`;

export const ImagemProjects = styled.div`
    display: flex;
    align-items: center;
`;

export const ImagemDoProjetoPC = styled.img`
    width: 450px;
    height: 300px;
    @media (max-width: 440px) {
        width: 350px;
        height: 200px;
    }
    @media (max-width: 393px){
        width: 350px;
        height: 200px;
    }
    @media (max-width: 360px){
        width: 300px;
        height: 200px;
    }
`;

export const ImagemDoProjetoMobile = styled.img`
    width: 90px;
    height: 190px;
    position: absolute;
    @media (max-width: 440px) {
        width: 50px;
        height: 100px;
    }
    @media (max-width: 393px){
        width: 50px;
        height: 100px;
    }
    @media (max-width: 360px){
        width: 50px;
        height: 100px;
    }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 300px;
    color: #a5a5a5;
    @media (max-width: 1024px) and (min-width: 800px) {
        margin-left: 22%; 
    }
   @media (max-width: 768px) {
        margin-left: 22%; 
    }
    @media (max-width: 440px) {
        margin: 0;
    }
    @media (max-width: 393px){
        margin: 0;
    }
    @media (max-width: 360px){
        margin: 0;
    }
`;

export const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const ButtonRepo = styled.button`
    border-radius: 10px;
    width: 100px;
    border: 1px solid var(--corTexto);
    text-decoration: none;
    color: var(--corTexto);
    background-color:black;
    padding: 10px;
    transition: 0.2s ease-in;
    &:hover{
        transform: scale(1.1);
    }
`;

export const ButtonSite = styled.button`
    border-radius: 10px;
    width: 100px;
    border: 1px solid var(--corTexto);
    text-decoration: none;
    color: var(--corTexto);
    background-color:red;
    padding: 10px;
    transition: 0.2s ease-in;
    &:hover{
        transform: scale(1.1);
    }
`;

export const ButtonInfo = styled.button`
    border-radius: 10px;
    width: 100px;
    border: 1px solid var(--corTexto);
    text-decoration: none;
    color: var(--corTexto);
    background-color:gray;
    padding: 10px;
    transition: 0.2s ease-in;
    &:hover{
        transform: scale(1.1);
    }
`;

export const StrongTecnologiasProject = styled.strong`
    color: var(--corTexto);
`;