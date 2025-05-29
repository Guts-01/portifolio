import AOS from 'aos'
import 'aos/dist/aos.css';
import { useState,useEffect } from "react";
import { motion } from "framer-motion"; // Importando a biblioteca de animações
import NavBar from '../../components/navBar/navBar';
import NavMobile from '../../components/navBar/navBarMobile';
import { AboutBody, AboutScreen, Container, Timeline, EventRight, Button, TitleConteinerAbout, Linha, EventLeft } from "./aboutStyles";
import { HtmlTag_h1, HtmlTag_hr, HtmlTag_space_columm, HtmlTag_p } from '../../components/htmlTags/Tags_html';

const DownloadConcluido = 'Download Feito!';

function About() {
    const [NomeBaixarCurriculo, setNomeBaixarCurriculo] = useState("Baixar CV");
    useEffect(() => {
        AOS.init({duration:2000})
    },[])

    return (
        <AboutBody>
            <NavBar />
            <NavMobile />
            <AboutScreen>
                <TitleConteinerAbout data-aos="fade-up" data-aos-delay={Math.floor(Math.random() * 500)}>
                    <HtmlTag_h1>Sobre mim - Minha trajetória</HtmlTag_h1>
                    <HtmlTag_p>
                        Um pouco sobre mim, e como cheguei até aqui.
                        Pretendo sempre manter atualizado este espaço, para que você possa acompanhar minha trajetória.
                    </HtmlTag_p>
                    <HtmlTag_hr />
                </TitleConteinerAbout>

                <Container>
                    <Timeline>
                        <Linha></Linha>
                        {[
                            { yearRight: "2023 - Início da Jornada", textRight: "Comecei minha trajetória na área de tecnologia agora pra valer, quando me inscrevi para o curso de desenvolvimento web no IOS, Onde pude aprender mais sobre HTML, CSS e JavaScript, além de ter contato com o git e o github." },
                            { yearLeft: "2023 - 12 de Julho", textLeft: "Concluir o curso com êxito, com uma apresentação sobre o meu TCC em equipe." },
                            { yearRight: "2023 - 19 de Outubro", textRight: "Recebi uma proposta para estagiar na maior empresa de tecnologia do Brasil no ramo de soluções para varejo, e ganhei também uma bolsa para ingressar na faculdade, com o primeiro ano sendo totalmente custeado pela empresa." },
                            { yearLeft: "2024", textLeft: "Agora com a virada de chave na minha vida estando trabalhando em uma multinacional, decidi também direcionar meus estudos para onde me prendia os olhos, na cibersegurança." },
                            { yearRight: "2024 - 19 de Agosto", textRight: "Com apenas 9 meses de estágio, fui contemplado com a tão sonhada efetivação. Apesar dos meus esforços, não estava esperando que viesse assim tão de repente. Confesso que fiquei surpreso com a notícia." },
                            { yearLeft: "2025 - Atualmente", textLeft: "Estou há 7 meses no novo cargo, e a experiência tem me agradado bastante. Encontro vários desafios no dia a dia, e superá-los tem trazido uma ótima experiência e conhecimento para mim." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 2 }}
                            >
                                {item.yearRight && item.textRight && (
                                    <EventRight>
                                        <h3>{item.yearRight}</h3>
                                        <HtmlTag_space_columm />
                                        <HtmlTag_hr />
                                        <HtmlTag_space_columm />
                                        <HtmlTag_p>{item.textRight}</HtmlTag_p>
                                    </EventRight>
                                )}

                                {item.yearLeft && item.textLeft && (
                                    <EventLeft>
                                        <h3>{item.yearLeft}</h3>
                                        <HtmlTag_space_columm />
                                        <HtmlTag_hr />
                                        <HtmlTag_space_columm />
                                        <HtmlTag_p>{item.textLeft}</HtmlTag_p>
                                    </EventLeft>
                                )}
                            </motion.div>
                        ))}

{/*                     <HtmlTag_p>
                        Saiba mais sobre certificações, cursos e experiências profissionais no meu currículo.
                    </HtmlTag_p>
                    </Timeline>
                    <HtmlTag_space_columm />
                    <Button onClick={() => setNomeBaixarCurriculo(DownloadConcluido)} href='/src/assets/curriculo/curriculo.pdf' download>
                        {NomeBaixarCurriculo}
                    </Button> */}
                </Container>
            </AboutScreen>
        </AboutBody>
    );
}

export default About;
