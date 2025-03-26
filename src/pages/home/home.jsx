import { HtmlTag_hr, HtmlTag_p, HtmlTag_h1 } from '../../components/htmlTags/Tags_html';
import NavBar from '../../components/navbar/navbar';
import { StyledLink } from '../../components/navbar/navBarStyles';
import {
    ConteinerGoogleMaps,
    ConteinerHabilidades,
    DivImagesSoftSkills,
    ConteinerPerfil,
    ConteinerResumo,
    ConteinerSoftskills,
    GoogleMaps,
    HomeBody,
    ImageCapa,
    ImagePerfil,
    ImageSoftSkills,
    MainScreen,
    Mapstyle,
    ParagraphSoftSkills,
    Sobremim,
    StrongTecnologias,
}
    from './homeStyles';

import '../../components/css/propeties.css';
// Importando as imagens das softskills
import react_img from '../../assets/images/home/mainScreen/biblioteca.png';
import javascript from '../../assets/images/home/mainScreen/js.png';
import html from '../../assets/images/home/mainScreen/html.png';
import css from '../../assets/images/home/mainScreen/css-3.png';
import bootstrap from '../../assets/images/home/mainScreen/bootstrap.png';
import responsivo from '../../assets/images/home/mainScreen/designer-de-web.png';
import mysql from '../../assets/images/home/mainScreen/servidor-sql.png';
import postgres from '../../assets/images/home/mainScreen/postgre.png';
import java from '../../assets/images/home/mainScreen/java.png';
import api from '../../assets/images/home/mainScreen/api.png';
import git from '../../assets/images/home/mainScreen/confirmar-git.png';
import github from '../../assets/images/home/mainScreen/github.png';
import microsoftOffice from '../../assets/images/home/mainScreen/microsoft.png';
import azure from '../../assets/images/home/mainScreen/azure.png';
import scrum from '../../assets/images/home/mainScreen/scrum.png';
import hack from '../../assets/images/home/mainScreen/hacker.png';
import investigador from '../../assets/images/home/mainScreen/investigador.png';
import kaliLinux from '../../assets/images/home/mainScreen/dragao.png';
import DeepWeb from '../../assets/images/home/mainScreen/incognito.png';
import python from '../../assets/images/home/mainScreen/python.png';
import robotframework from '../../assets/images/home/mainScreen/robo.png';
import selenium from '../../assets/images/home/mainScreen/se.png';
import qualidade from '../../assets/images/home/mainScreen/qualidade.png';

function Home(){

    return (
        <HomeBody>
            <NavBar />
            

            <MainScreen>

                <ImageCapa></ImageCapa>

                <ConteinerPerfil>
                    <ImagePerfil title='Guto oliveira'></ImagePerfil>
                    <Sobremim>
                        <HtmlTag_h1>Desenvolvedor Full-Stack</HtmlTag_h1>
                        {/* <HtmlTag_p> &#9745; - QA at Totvs | Test Analyst</HtmlTag_p> */}
                        <HtmlTag_p>QA - Totvs | Analista de Teste</HtmlTag_p>
                        <HtmlTag_p>Guto Oliveira</HtmlTag_p>
                    </Sobremim>
                    <HtmlTag_hr></HtmlTag_hr>
                </ConteinerPerfil>

                <ConteinerResumo>
                    <HtmlTag_h1>Quem sou?</HtmlTag_h1>

                    <HtmlTag_p>
                        Trabalho como <StrongTecnologias>Quality assurance</StrongTecnologias>, e atualmente estou aprimorando meu conhecimento em Cybersegurança. Sou um profissional apaixonado por desafios e inovação, e com uma sólida experiência em <StrongTecnologias>Desenvolvimento Front-end</StrongTecnologias> e <StrongTecnologias>Automação de testes</StrongTecnologias>, minha jornada é marcada pela busca constante de novos conhecimentos e desafios a serem superados pela aplicação prática de soluções eficientes. Caso queira saber mais sobre mim, <StyledLink to={"/about"}><StrongTecnologias>Clique aqui</StrongTecnologias></StyledLink>
                    </HtmlTag_p>

                    <HtmlTag_hr></HtmlTag_hr>
                </ConteinerResumo>

                <ConteinerHabilidades>
                    <HtmlTag_h1>Soft Skills</HtmlTag_h1>
                    <HtmlTag_p>
                        Conheça algumas das minhas <StrongTecnologias>habilidades</StrongTecnologias> em geral, e algumas nas quais estou adquirindo conhecimento, como é o caso da aréa de <StrongTecnologias>Cybersegurança</StrongTecnologias> e outras nas quais ja tenho mais experiencia, seja elas sobre <StrongTecnologias>Tecnologia, Métodologia ágil </StrongTecnologias> ou <StrongTecnologias>Comunicação</StrongTecnologias>, desde o básico até o avançado. Algumas dessas habilidades estão listadas com referencia a aréa de atuação.
                    </HtmlTag_p>

                    <HtmlTag_hr></HtmlTag_hr>

                    <ConteinerSoftskills>
                        <HtmlTag_p>Front-End - </HtmlTag_p>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='React js - Biblioteca para Desenvolvimento web'>
                            <ImageSoftSkills src={react_img} ></ImageSoftSkills>
                            <ParagraphSoftSkills>React</ParagraphSoftSkills>

                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Javascript - Linguagem de programação'>
                            <ImageSoftSkills src={javascript}></ImageSoftSkills>
                            <ParagraphSoftSkills>Javascript</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='HTML5 - Linguagem de marcação de Hyper texto'>
                            <ImageSoftSkills src={html}></ImageSoftSkills>
                            <ParagraphSoftSkills>HTML5</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='CSS3 - Estilização em cascata de uma página web'>
                            <ImageSoftSkills src={css}></ImageSoftSkills>
                            <ParagraphSoftSkills>CSS3</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Bootstrap - Framework para Desenvolvimento web'>
                            <ImageSoftSkills src={bootstrap}></ImageSoftSkills>
                            <ParagraphSoftSkills>Bootstrap</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Responsividade - Compatibilidade para qualquer dispositivo'>
                            <ImageSoftSkills src={responsivo}></ImageSoftSkills>
                            <ParagraphSoftSkills>Layout Reponsivo</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                    </ConteinerSoftskills>

                    <hr className='dashed'/>
                    
                    <ConteinerSoftskills>
                        <HtmlTag_p>Back-end - </HtmlTag_p>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='SQlite - Bliblioteca para manipulação de dados'>
                            <ImageSoftSkills src={mysql}></ImageSoftSkills>
                            <ParagraphSoftSkills>SQlite</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='PostgresSql - SGBD objetivo relacional'>
                            <ImageSoftSkills src={postgres}></ImageSoftSkills>
                            <ParagraphSoftSkills>PostgreSQL</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Linguagem de programação'>
                            <ImageSoftSkills src={java}></ImageSoftSkills>
                            <ParagraphSoftSkills>Java</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Apis - Uso de requisições para projetos pessoais'>
                            <ImageSoftSkills src={api}></ImageSoftSkills>
                            <ParagraphSoftSkills>Consumo de Api</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                    </ConteinerSoftskills>

                    <hr className='dashed'/>

                    <ConteinerSoftskills>
                        <HtmlTag_p>Ferramentas - </HtmlTag_p>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Software para controle e versionamento de Código'>
                            <ImageSoftSkills src={git}></ImageSoftSkills>
                            <ParagraphSoftSkills>Git</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Repositórios no Github'>
                            <ImageSoftSkills src={github}></ImageSoftSkills>
                            <ParagraphSoftSkills>Github</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Plataforma de computação em nuvem da Microsoft'>
                            <ImageSoftSkills src={azure}></ImageSoftSkills>
                            <ParagraphSoftSkills>Azure DevOps</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills title='Modelo de Metodologia Agíl'>
                            <ImageSoftSkills src={scrum}></ImageSoftSkills>
                            <ParagraphSoftSkills>Scrum</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Powerpoint - Excel - Word'>
                            <ImageSoftSkills src={microsoftOffice}></ImageSoftSkills>
                            <ParagraphSoftSkills>Microsoft Office</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                    </ConteinerSoftskills>

                    <hr className='dashed'/>

                    <ConteinerSoftskills>
                        <HtmlTag_p>Cybersegurança - </HtmlTag_p>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Pentest - Sql injection - Ransomware - Phishing'>
                            <ImageSoftSkills src={hack}></ImageSoftSkills>
                            <ParagraphSoftSkills>Pentest</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills title='Anonimato - DeepWeb - Ocultação digital'>
                            <ImageSoftSkills src={DeepWeb} ></ImageSoftSkills>
                            <ParagraphSoftSkills>Anonimato</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills title='Sistema operacional Linux - Nmap - Who.is - BruteForce'>
                            <ImageSoftSkills   src={kaliLinux}></ImageSoftSkills>
                            <ParagraphSoftSkills>Kali linux</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills title='OSINT - Técnicas de investigação - Rastreio - Fantoches'>
                            <ImageSoftSkills src={investigador}></ImageSoftSkills>
                            <ParagraphSoftSkills>Investigação Digital</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                    </ConteinerSoftskills>

                    <hr className='dashed'/>

                    <ConteinerSoftskills>
                        <HtmlTag_p>Automação - </HtmlTag_p>
                        {/* =================================================== */}
                        <DivImagesSoftSkills title='Linguagem de programação'>
                            <ImageSoftSkills src={python}></ImageSoftSkills>
                            <ParagraphSoftSkills>Python</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills  title='Framework para testes web'>
                            <ImageSoftSkills src={selenium}></ImageSoftSkills>
                            <ParagraphSoftSkills>Selenium</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills title='Testes de Software - Tests cases automatizados - captura de bugs'>
                            <ImageSoftSkills src={qualidade}></ImageSoftSkills>
                            <ParagraphSoftSkills>Garantia de qualidade</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                        <DivImagesSoftSkills title='Framework para Automação de testes multiplataforma'>
                            <ImageSoftSkills src={robotframework}></ImageSoftSkills>
                            <ParagraphSoftSkills>Robot Framework</ParagraphSoftSkills>
                        </DivImagesSoftSkills>
                        {/* =================================================== */}
                    </ConteinerSoftskills>

                    <HtmlTag_hr></HtmlTag_hr>
                </ConteinerHabilidades>

                <ConteinerGoogleMaps>
                    <HtmlTag_h1>Localização</HtmlTag_h1>
                    <HtmlTag_p>Estou localizado em <StrongTecnologias>São paulo - SP</StrongTecnologias>, caso queira entrar em contato, estou disponível para conversar e tirar dúvidas sobre qualquer assunto, seja ele sobre tecnologia, automação de testes, ou até mesmo sobre a área de Cybersegurança.</HtmlTag_p>
                    <HtmlTag_hr></HtmlTag_hr>
                    <GoogleMaps>
                        <Mapstyle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.073635473896!2d-46.65156878498093!3d-23.54362148468208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b5f4b5c5b3d%3A0x8b5f5b9c3b7e4d5d!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1633202176778!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy">
                        </Mapstyle>
                    </GoogleMaps>
                </ConteinerGoogleMaps>

            </MainScreen>
        </HomeBody>
    );
}

export default Home;