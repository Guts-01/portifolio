import styled from 'styled-components';
import capaPerfil from '../../assets/images/home/mainScreen/programming-1873854_1280.png'
import fotoPerfil from '../../assets/images/home/mainScreen/foto_perfil.jpg'

export const HomeBody = styled.body`
    background-color: var(--corHome);
    display: flex;
    flex-direction: row;
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
    color: var(--corTexto);
    background-color: var(--corHome);
`;

export const ImageCapa = styled.section`
    width: 100%;
    height: 300px;
    background-image: url(${capaPerfil});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const ConteinerPerfil = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    width: 100%;
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
    top: 20%;
    left: 28%;
`;

export const Sobremim = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    height: 20vh;
    padding-left: 40%;
`;

export const ConteinerResumo = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    width: 100%;
    gap: 20px;
    margin-top: 3%;
    color: #a5a5a5;
`;

export const StrongTecnologias = styled.strong`
    color: var(--corTexto);
`;

export const ConteinerHabilidades = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    width: 100%;
    gap: 40px;
    margin-top: 3%;
    color: #a5a5a5;
`;

export const ConteinerSoftskills = styled.div`
    width: 100%;

    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 2%;
    place-items: center;
    gap: 20px;
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
    opacity:0.6 !important;
    filter: brightness(100%);
    &:hover{
        opacity: 1 !important;
        transform: scale(1.1) !important;
    }
`;

export const ImageSoftSkills = styled.img`
    width: 30px;
    height: 30px;
    transition: 0.2s ease-in;
    border-radius: 10px; 
`;

export const ParagraphSoftSkills = styled.button`
    font-size: 12px;
    color: var(--corHome);
    text-align: center;
    font-family: var(--fontPrincipal);
    border:none;
    background-color: transparent;
`;

export const ConteinerGoogleMaps = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    width: 95%;
    gap: 20px;
    margin-top: 3%;
    color: #a5a5a5;
`;

export const GoogleMaps = styled.div`
    width: 100%;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    border: 0;
    justify-content: center;
`;

export const Mapstyle = styled.iframe`
    width: 700px;
    height: 500px;
    border: 0;
    border-radius: 20px;
`;
