import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../../components/navBar/navBar';
import NavMobile from '../../components/navBar/navBarMobile';
import {
  ButtonRepo, DivText, TitleConteinerProjetos, ProjectsBody, ProjectsScreen,
  ConteinerProjetosLeft, ConteinerProjetosRight, Divprojects, ImagemDoProjetoPC,
  ImagemProjects, ImagemDoProjetoMobile, DivButtons, ButtonSite, ButtonInfo,
  StrongTecnologiasProject
} from './projectsStyles';
import Modal from '../../components/modal/modal';
import { HtmlTag_h1, HtmlTag_p, HtmlTag_hr, HtmlTag_a, HtmlTag_space_columm } from '../../components/htmlTags/Tags_html';
import buscarCepPC from '../../assets/images/projects/Macbook-Air-buscar-cep-api-two.vercel.app.png';
import buscarCepMobile from '../../assets/images/projects/iPhone-13-PRO-buscar-cep-api-two.vercel.app.png';
import JogoGatinhoMobile from '../../assets/images/projects/iPhone-13-PRO-jogodogatinho.netlify.app.png';
import ConsultarVeiculosMobile from '../../assets/images/projects/iPhone-13-PRO-buscar-preco-fipe.vercel.app.png';
import ConsultarVeiculosPC from '../../assets/images/projects/Macbook-Air-buscar-preco-fipe.vercel.app.png';
import '../../components/css/scrollAnimations.css';

function Projects() {
  useEffect(() => {
          AOS.init({ duration: 2000 }); // Configurando a duração da animação
      }, []);

  const [modalContent, setModalContent] = useState(null);

  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);


  return (
    <ProjectsBody>
      <NavBar />
      <NavMobile />
      <ProjectsScreen>
        <TitleConteinerProjetos data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
          <HtmlTag_h1>Conheça todos os meus projetos</HtmlTag_h1>
          <HtmlTag_p>Desde projetos pessoais até profissionais</HtmlTag_p>
          <HtmlTag_hr />
        </TitleConteinerProjetos>

        <ConteinerProjetosLeft >
          <Divprojects>
            <DivText>
              <HtmlTag_h1 data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">Buscar CEP</HtmlTag_h1>
              <HtmlTag_p data-aos="fade-down" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
                Aplicação que utiliza <StrongTecnologiasProject>Flask </StrongTecnologiasProject>
                no backend para consultas de CEP via API, e frontend em
                <StrongTecnologiasProject> JavaScript</StrongTecnologiasProject>.
              </HtmlTag_p>
              <DivButtons data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
                <HtmlTag_a href='https://github.com/Guts-01/buscar_cep_api' target='_blank'>
                  <ButtonRepo>Repositório</ButtonRepo>
                </HtmlTag_a>
                <HtmlTag_a href='https://buscar-cep-api-two.vercel.app' target='_blank'>
                  <ButtonSite>Site</ButtonSite>
                </HtmlTag_a>
                <ButtonInfo onClick={() => openModalWithContent('buscarCep')}>Sobre</ButtonInfo>
              </DivButtons>
            </DivText>
            <ImagemProjects>
              <ImagemDoProjetoPC src={buscarCepPC} alt="Projeto no PC" data-aos="fade-left" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true"/>
              <ImagemDoProjetoMobile src={buscarCepMobile} alt='Projeto no Celular' data-aos="fade-right" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true"/>
            </ImagemProjects>
          </Divprojects>
        </ConteinerProjetosLeft>
        <HtmlTag_space_columm></HtmlTag_space_columm>

        <ConteinerProjetosRight>

          <Divprojects>
            <ImagemProjects>
              <ImagemDoProjetoPC src={buscarCepPC} alt="Projeto no PC" data-aos="fade-left" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true"/>
              <ImagemDoProjetoMobile src={JogoGatinhoMobile} alt='Projeto no Celular' data-aos="fade-right" data-aos-delay={Math.floor(Math.random() * 500)}  data-aos-once="true"/>
            </ImagemProjects>
            <DivText>
              <HtmlTag_h1 data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)}  data-aos-once="true">Jogo do Gatinho</HtmlTag_h1>
              <HtmlTag_p data-aos="fade-down" data-aos-delay={Math.floor(Math.random() * 500)}   data-aos-once="true">
                Jogo desenvolvido para mobile usando <StrongTecnologiasProject>HTML, CSS</StrongTecnologiasProject>
                e <StrongTecnologiasProject>JavaScript</StrongTecnologiasProject>.
              </HtmlTag_p>
              <DivButtons data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
                <HtmlTag_a href='https://github.com/Guts-01/jogo_do_gatinho' target='_blank' >
                  <ButtonRepo>Repositório</ButtonRepo>
                </HtmlTag_a>
                <HtmlTag_a href='https://jogodogatinho.netlify.app' target='_blank'>
                  <ButtonSite>Site</ButtonSite>
                </HtmlTag_a>
                <ButtonInfo onClick={() => openModalWithContent('jogoDoGatinho')}>Sobre</ButtonInfo>
              </DivButtons>
            </DivText>
          </Divprojects>
        </ConteinerProjetosRight>

        <HtmlTag_space_columm></HtmlTag_space_columm>

        <ConteinerProjetosLeft >
          <Divprojects >
            <DivText>
              <HtmlTag_h1 data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">Consultar Veículo</HtmlTag_h1>
              <HtmlTag_p data-aos="fade-down" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
                Aplicação web para consulta de preços de veículos na Tabela FIPE.
              </HtmlTag_p>
              <DivButtons data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
                <HtmlTag_a href='https://github.com/Guts-01/buscar-preco-fipe' target='_blank'>
                  <ButtonRepo>Repositório</ButtonRepo>
                </HtmlTag_a>
                <HtmlTag_a href='https://buscar-preco-fipe.vercel.app' target='_blank'>
                  <ButtonSite>Site</ButtonSite>
                </HtmlTag_a>
                <ButtonInfo onClick={() => openModalWithContent('consultarFipe')}>Sobre</ButtonInfo>
              </DivButtons>
            </DivText>
            <ImagemProjects>
              <ImagemDoProjetoPC src={ConsultarVeiculosPC} alt="Projeto no PC" data-aos="fade-left" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true"/>
              <ImagemDoProjetoMobile src={ConsultarVeiculosMobile} alt='Projeto no Celular' data-aos="fade-right" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true"/>
            </ImagemProjects>
          </Divprojects>
        </ConteinerProjetosLeft>

        <HtmlTag_space_columm></HtmlTag_space_columm>

        <TitleConteinerProjetos data-aos="zoom-in-down" data-aos-delay={Math.floor(Math.random() * 500)} data-aos-once="true">
          <HtmlTag_h1>É o Fim?</HtmlTag_h1>
          <HtmlTag_p>Ainda estou desenvolvendo mais projetos, aguarde...</HtmlTag_p>
        </TitleConteinerProjetos>
      </ProjectsScreen>

      <Modal isOpen={modalContent !== null} setOpenModal={closeModal} > 
        {modalContent === 'buscarCep' && 
          <HtmlTag_p>
            🚀 Tecnologias Utilizadas:
            <HtmlTag_space_columm></HtmlTag_space_columm>
            Framework: Flask
            <HtmlTag_space_columm></HtmlTag_space_columm>
            Frontend: HTML,CSS & JavaScript
            <HtmlTag_space_columm></HtmlTag_space_columm>
            Backend: Python
            <HtmlTag_space_columm></HtmlTag_space_columm>
            <hr className='dashed_modal_info' />
            <HtmlTag_space_columm></HtmlTag_space_columm>
            O usuário insere um CEP na interface web.
            O backend (Flask) faz uma requisição à API de busca de CEP utilizando Python.
            O resultado da requisição (endereço, cidade, estado, etc.) é retornado ao frontend.
            As informações são exibidas em tempo real na página HTML, utilizando JavaScript para manipulação dos dados.
          </HtmlTag_p>
        }
        {modalContent === 'jogoDoGatinho' &&
          <HtmlTag_p>
            🚀 Tecnologias Utilizadas:
            <HtmlTag_space_columm></HtmlTag_space_columm>
            HTML,CSS & JavaScript
            <HtmlTag_space_columm></HtmlTag_space_columm>
            <hr className='dashed_modal_info' />
            <HtmlTag_space_columm></HtmlTag_space_columm>
            É um jogo simples e divertido para celular, onde você controla um gatinho fofo usando apenas toques na tela. O objetivo é pular os foguinhos que vêm em sua direção e sobreviver o máximo de tempo possível. A cada pulo bem-sucedido, a pontuação aumenta, desafiando você a bater seus próprios recordes. Com gráficos leves em CSS, HTML e JavaScript, o jogo tem uma mecânica fácil de aprender, mas viciante!
          </HtmlTag_p>
        }
        {modalContent === 'consultarFipe' &&
          <HtmlTag_p>
            🚀 Tecnologias Utilizadas:
            <HtmlTag_space_columm></HtmlTag_space_columm>
            Framework: Flask,Jinja2
            <HtmlTag_space_columm></HtmlTag_space_columm>
            Frontend: HTML,CSS & JavaScript
            <HtmlTag_space_columm></HtmlTag_space_columm>
            Backend: Python
            <HtmlTag_space_columm></HtmlTag_space_columm>
            <hr className='dashed_modal_info' />
            <HtmlTag_space_columm></HtmlTag_space_columm>
            O fluxo é interativo, onde cada etapa da escolha (tipo de veículo, marca, modelo e ano) aparece separadamente, garantindo uma experiência mais organizada.
            Após a escolha completa, os detalhes do veículo são exibidos em um cartão, e o usuário pode iniciar uma nova pesquisa com um botão específico. O frontend é responsivo e adaptável a diferentes tamanhos de tela.
          </HtmlTag_p>}
      </Modal>
    </ProjectsBody>
  );
}

export default Projects;
