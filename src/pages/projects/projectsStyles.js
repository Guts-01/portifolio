import styled from "styled-components";

export const ProjectsBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
`;

// ===========================================
//               Tela De Projetos
// ===========================================

export const ProjectsScreen = styled.main`
    width: 100%;
    margin-left: 20%;
    color: var(--corTexto);
    gap: 20px;
`;

export const TitleConteinerProjetos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 10%;
    width: 100%;
    gap:10px;
    color: #a5a5a5;
`;

export const ConteinerProjetosLeft = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: end;
    padding: 2% 10%;
    gap: 10px;
    margin-top: 20px;
`;

export const ConteinerProjetosRight = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 0 10%;
    gap: 10px;
    margin-top: 50px;
`;

export const Divprojects = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
    gap: 40px;
    justify-content: space-around;
`;

export const ImagemProjects = styled.div`
    display: flex;
    align-items: center;
`;

export const ImagemDoProjetoPC = styled.img`
    width: 450px;
    height: 300px;
`;

export const ImagemDoProjetoMobile = styled.img`
    width: 90px;
    height: 190px;
    position: absolute;
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 300px;
    color: #a5a5a5;;
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