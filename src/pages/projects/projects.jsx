import NavBar from '../../components/navbar/navbar';
import { ButtonRepo, DivText, TitleConteinerProjetos, ProjectsBody, ProjectsScreen, ConteinerProjetosLeft, ConteinerProjetosRight, Divprojects, ImagemDoProjetoPC, ImagemProjects, ImagemDoProjetoMobile, DivButtons, ButtonSite, ButtonInfo, StrongTecnologiasProject } from './projectsStyles';
import { useState } from 'react';
import Modal from '../../components/modal/modal';
import { HtmlTag_h1, HtmlTag_p, HtmlTag_hr, HtmlTag_a, HtmlTag_space_columm } from '../../components/htmlTags/Tags_html';
import buscarCepPC from '../../assets/images/projects/Macbook-Air-buscar-cep-api-two.vercel.app.png'
import buscarCepMobile from '../../assets/images/projects/iPhone-13-PRO-buscar-cep-api-two.vercel.app.png'
import JogoGatinhoMobile from '../../assets/images/projects/iPhone-13-PRO-jogodogatinho.netlify.app.png'
import ConsultarVeiculosMobile from '../../assets/images/projects/iPhone-13-PRO-buscar-preco-fipe.vercel.app.png'
import ConsultarVeiculosPC from '../../assets/images/projects/Macbook-Air-buscar-preco-fipe.vercel.app.png'
import '../../components/css/propeties.css'

function Projects() {
  const [modalContent, setModalContent] = useState(null);

  const openModalWithContent = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ProjectsBody>
      <NavBar />
      <ProjectsScreen>
        <TitleConteinerProjetos>
          <HtmlTag_h1>Conheça todos os meus projetos</HtmlTag_h1>
          <HtmlTag_p>
            Aqui você encontra alguns dos meus projetos que desenvolvi ao longo da minha vida.
            Desde projetos pessoais até projetos da faculdade.
          </HtmlTag_p>
          <HtmlTag_hr></HtmlTag_hr>
        </TitleConteinerProjetos>

        <ConteinerProjetosLeft>
          <Divprojects>
            <DivText>
              <HtmlTag_h1>Buscar cep</HtmlTag_h1>
              <HtmlTag_p>
                Um projeto desenvolvido por mim que utiliza <StrongTecnologiasProject>Flask</StrongTecnologiasProject> como backend para fazer requisições a uma API de busca de CEP com <StrongTecnologiasProject>Python</StrongTecnologiasProject>, e um frontend em <StrongTecnologiasProject>JavaScript</StrongTecnologiasProject> que exibe os resultados em uma página <StrongTecnologiasProject>HTML</StrongTecnologiasProject> que é estilizada com <StrongTecnologiasProject>CSS</StrongTecnologiasProject>.
              </HtmlTag_p>
              <DivButtons>
                <HtmlTag_a href='https://github.com/Guts-01/buscar_cep_api' target='_blank'>
                  <ButtonRepo >Repositório</ButtonRepo>
                </HtmlTag_a>
                <HtmlTag_a href='https://buscar-cep-api-two.vercel.app' target='_blank'>
                  <ButtonSite>Site</ButtonSite>
                </HtmlTag_a>
                <ButtonInfo onClick={() => openModalWithContent('buscarCep')}>Sobre</ButtonInfo>
              </DivButtons>
            </DivText>
            <ImagemProjects>
              <ImagemDoProjetoMobile src={buscarCepMobile} alt='Imagem do projeto no Celular'></ImagemDoProjetoMobile>
              <ImagemDoProjetoPC src={buscarCepPC} alt="Imagem do projeto no pc" />
            </ImagemProjects>
          </Divprojects>
          <HtmlTag_hr></HtmlTag_hr>
        </ConteinerProjetosLeft>

        <ConteinerProjetosRight>
          <Divprojects>
            <ImagemProjects>
              <ImagemDoProjetoMobile src={JogoGatinhoMobile} alt='Imagem do projeto no Celular'></ImagemDoProjetoMobile>
            </ImagemProjects>
            <DivText>
              <HtmlTag_h1>Jogo do gatinho</HtmlTag_h1>
              <HtmlTag_p>
                Um jogo desenvolvido por mim somente para celular que utiliza <StrongTecnologiasProject>Html</StrongTecnologiasProject>, <StrongTecnologiasProject>CSS</StrongTecnologiasProject> e  <StrongTecnologiasProject>JavaScript</StrongTecnologiasProject>
              </HtmlTag_p>
              <DivButtons>
                <HtmlTag_a href='https://github.com/Guts-01/jogo_do_gatinho' target='_blank'>
                  <ButtonRepo >Repositório</ButtonRepo>
                </HtmlTag_a>
                <HtmlTag_a href='https://jogodogatinho.netlify.app' target='_blank'>
                  <ButtonSite>Site</ButtonSite>
                </HtmlTag_a>
                <ButtonInfo onClick={() => openModalWithContent('content2')}>Sobre</ButtonInfo>
              </DivButtons>
            </DivText>
          </Divprojects>
          <HtmlTag_hr></HtmlTag_hr>
        </ConteinerProjetosRight>

        <ConteinerProjetosLeft>
          <Divprojects>
            <DivText>
              <HtmlTag_h1>Consultar Veiculo</HtmlTag_h1>
              <HtmlTag_p>
                Este projeto é uma aplicação web que permite aos usuários consultar informações sobre veículos na Tabela FIPE, como marca, modelo, ano e preço médio.
              </HtmlTag_p>
              <DivButtons>
                <HtmlTag_a href='https://github.com/Guts-01/buscar-preco-fipe' target='_blank'>
                  <ButtonRepo >Repositório</ButtonRepo>
                </HtmlTag_a>
                <HtmlTag_a href='https://buscar-preco-fipe.vercel.app' target='_blank'>
                  <ButtonSite>Site</ButtonSite>
                </HtmlTag_a>
                <ButtonInfo onClick={() => openModalWithContent('consultarFipe')}>Sobre</ButtonInfo>
              </DivButtons>
            </DivText>
            <ImagemProjects>
              <ImagemDoProjetoMobile src={ConsultarVeiculosMobile} alt='Imagem do projeto no Celular'></ImagemDoProjetoMobile>
              <ImagemDoProjetoPC src={ConsultarVeiculosPC} alt="Imagem do projeto no pc" />
            </ImagemProjects>
          </Divprojects>
          <HtmlTag_hr></HtmlTag_hr>
        </ConteinerProjetosLeft>

        <TitleConteinerProjetos>
          <HtmlTag_h1>É o Fim?</HtmlTag_h1>
          <HtmlTag_p>
            Ainda estou aprimorando meus conhecimentos e desenvolvendo novos projetos, aguarde...
          </HtmlTag_p>
        </TitleConteinerProjetos>
        
      </ProjectsScreen>
      <Modal isOpen={modalContent !== null} setOpenModal={closeModal}>
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

        {modalContent === 'content2' &&
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
          </HtmlTag_p>
        }
      </Modal>
    </ProjectsBody>
  );
}

export default Projects;