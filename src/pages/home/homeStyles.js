import styled from 'styled-components';
import capaPerfil from '../../assets/images/home/mainScreen/programming-1873854_1280.png'
import fotoPerfil from '../../assets/images/home/mainScreen/foto_perfil.jpg'

export const HomeBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
    overflow: hidden;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
    @media (max-width: 430px) {
        flex-direction: column;
    }
`;

// ===========================================
//               Tela Principal
// ===========================================

export const MainScreen = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 20%;
    gap: 20px;
    color: var(--corTexto);
    background-color: var(--corHome);
    @media (max-width: 1024px) {
        margin-left: 0;
    }
    @media (max-width: 430px) {
        padding: 0;
        align-items: center;
    }
`;

export const ImageCapa = styled.section`
    width: 100%;
    height: 300px;
    background-image: url(${capaPerfil});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 1024px) and (min-width: 800px) {
        height: 250px;
    }
    @media (max-width: 440px) {
        height: 200px;
    }
    @media (max-width: 393px){
        height: 185px;
    }
    @media (max-width: 360px){
        height: 180px;
    }
`;

export const ImagePerfil = styled.div`
    border-radius: 100%;
    background-image: url(${fotoPerfil});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 25%;
    left: 28%;
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 150px;
        height: 150px;
        top: 20%;
    }
   @media (max-width: 768px)  {
        width: 150px;
        height: 150px;
        top: 25%;
    }
    @media (max-width: 440px) {
        width: 100px;
        height: 100px;
        top: 20%;
        left: 10%;
    }
`;

export const ConteinerPerfil = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    width: 100%;
    align-items: center;
`;


export const Sobremim = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    height: 20vh;
    padding-left: 20%;
    @media (max-width: 1024px) and (min-width: 800px) {
        font-size: 12px;
        padding-left: 60%;
        height: 12vh;
    }
   @media (max-width: 768px) {
        font-size: 12px;
        padding-left: 60%;
        height: 12vh;
    }
    @media (max-width: 440px) {
        font-size: 9px;
        padding-left: 45%;
    }
    @media (max-width: 360px){
        font-size: 9px;
    }
`;

export const ConteinerResumo = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    width: 100%;
    gap: 20px;
    margin-top: 3%;
    margin-bottom: 3%;
    color: #a5a5a5;
    @media (max-width: 1024px) and (min-width: 800px) {
        padding-left: 25%;
        text-align: center;
    }
   @media (max-width: 768px) {
        padding-left: 25%;
        text-align: center;
    }
    @media (max-width: 440px) {
        padding: 0 5%;
        font-size: 13px;
    }
    @media (max-width: 393px){
        font-size: 11px;
    }
`;

export const StrongTecnologias = styled.strong`
    color: var(--corTexto);
`;

export const ConteinerHabilidades = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 7fr);
    padding: 0 10%;
    width: 100%;
    gap: 30px;
    margin-top: 3%;
    color: #a5a5a5;
    @media (max-width: 1024px) and (min-width: 800px) {
        padding-left: 25%;
        text-align: center;
    }
   @media (max-width: 768px) {
        padding-left: 25%;
        text-align: center;
    }
    @media (max-width: 440px) {
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        font-size: 13px;
    }
    @media (max-width: 393px){
        font-size: 11px;
    }
    
`;

export const ConteinerSoftskills = styled.div`
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 2%;
    place-items: center;
    gap: 20px;
    @media (max-width: 1024px) and (min-width: 800px) {
        grid-template-columns: repeat(7, 1fr);
    }
   @media (max-width: 768px) {
        grid-template-columns: repeat(7, 1fr);
    }
    @media (max-width: 440px) {
        padding: 0 5%;
        grid-template-columns: repeat(1, 7fr);
        gap: 60px;
    }
`;

export const DivImagesSoftSkills = styled.div`
    width: 70px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding:10px;
    border-radius:20px;
    align-items: center;
    justify-content: center;
    background-color:var(--corTexto);
    transition: 0.2s;
    opacity:0.9 !important;
    &:hover{
        transform: scale(1.1) !important;
    }
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 60px;
    }
   @media (max-width: 768px) {
        width: 50px;
    }
    @media (max-width: 440px) {
        width: 120px;
    }
`;

export const ImageSoftSkills = styled.img`
    width: 30px;
    height: 30px;
    transition: 0.2s ease-in;
    border-radius: 10px; 
    @media (max-width: 1024px) {
        width: 20px;
    }
`;

export const ParagraphSoftSkills = styled.button`
    font-size: 12px;
    color: var(--corHome);
    text-align: center;
    font-family: var(--fontPrincipal);
    border:none;
    background-color: transparent;
    @media (max-width: 1024px) and (min-width: 800px) {
        font-size: 11px;
    }
`;

export const ConteinerGoogleMaps = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    width: 95%;
    gap: 20px;
    margin-top: 3%;
    color: #a5a5a5;
    @media (max-width: 1024px) and (min-width: 800px) {
        padding-left: 25%;
    }
   @media (max-width: 768px) {
        padding-left: 25%;
        width: 95%;
    }
    @media (max-width: 440px) {
        padding: 0% 5%;
        text-align: center;
        padding-bottom: 70px;
    }
`;

export const GoogleMaps = styled.div`
    width: 100%;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    border: 0;
    justify-content: center;
    @media (max-width: 440px) {
        padding-bottom: 40px;
    }
`;

export const Mapstyle = styled.iframe`
    width: 700px;
    height: 500px;
    border: 0;
    border-radius: 20px;
    @media (max-width: 1024px) and (min-width: 800px) {
        width: 800px;
        height: 300px;
    }
   @media (max-width: 768px) {
        width: 600px;
        height: 200px;
    }
    @media (max-width: 440px) {
        padding: 0 5%;
        text-align: center;
    }
    
`;
