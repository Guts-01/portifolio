import NavBar from "../../components/navbar/navbar";
import { AboutBody, AboutScreen, Container, Timeline, Event, TitleConteinerAbout } from "./aboutStyles";
import { HtmlTag_h1, HtmlTag_hr, HtmlTag_space_columm, HtmlTag_p } from '../../components/htmlTags/Tags_html';

function About() {
    return (
        <AboutBody>
            <NavBar></NavBar>
            <AboutScreen>
                <TitleConteinerAbout>
                <HtmlTag_h1>Sobre mim - Minha trajetória</HtmlTag_h1>
                    <HtmlTag_p>
                        Um pouco sobre mim, e como cheguei até aqui.
                        pretendo sempre manter atualizado este espaço, para que você possa acompanhar minha trajetória.
                    </HtmlTag_p>
                    <HtmlTag_hr></HtmlTag_hr>

                </TitleConteinerAbout>

                <Container>

                    <Timeline>

                        <Event>
                            <h3>2023 - Início da Jornada</h3>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_hr></HtmlTag_hr>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_p>Comecei minha trajetória na área de tecnologia agora pra valer, quando me inscrevi para o curso de desenvolvimento web no IOS, Onde pude aprender mais sobre HTML, CSS e JavaScript, além de ter contato com o git e o github.</HtmlTag_p>
                        </Event>

                        <Event>
                            <h3>2023 - 12 de Julho</h3>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_hr></HtmlTag_hr>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_p>Concluir o curso com êxito, com uma apresentação sobre o meu TCC em equipe.</HtmlTag_p>
                        </Event>

                        <Event>
                            <h3>2023 - 19 de Outubro</h3>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_hr></HtmlTag_hr>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_p>Recebi uma proposta para estágiar na maior empresa de tecnologia do brasil no ramo de soluções para varejo, e ganhei também uma bolsa para ingressar na faculdade, com o primeiro ano sendo totalmente custeado pela empresa.</HtmlTag_p>
                        </Event>

                        <Event>
                            <h3>2024 </h3>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_hr></HtmlTag_hr>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_p>Agora com a virada de chave na minha vida estando trabalhando em uma multinacional, decidir também direcionar meus estudos onde me prendia os olhos, na cybersegurança.</HtmlTag_p>
                        </Event>

                        <Event>
                            <h3>2024 - 19 de Agosto</h3>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_hr></HtmlTag_hr>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_p>Com apenas 9 meses de estágio, fui comtemplado com a tão sonhada efetivação, apesar dos meus esforços, não estava esperando que vinhesse assim tão de repente, confesso que fiquei surpreso com a noticia.</HtmlTag_p>
                        </Event>

                        <Event>
                            <h3>2025 - Atualmente</h3>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_hr></HtmlTag_hr>
                            <HtmlTag_space_columm></HtmlTag_space_columm>
                            <HtmlTag_p>Agora estou há 7 meses no novo cargo, e a experiencia tem me agradado bastante, encontro varios desafios no dia a dia, e superá-los tem trazido uma otima experiencia e conhecimento para mim.</HtmlTag_p>
                        </Event>

                    </Timeline>
                </Container>
            </AboutScreen>
        </AboutBody>
    )
}

export default About;