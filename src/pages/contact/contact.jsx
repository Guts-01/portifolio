import NavBar from '../../components/navbar/navbar';
import { useState } from 'react';
import { WorkBody, WorkScreen, Container, TitleConteinerWork,  ServicesContainer,Service, ServiceTitle,ServiceDescription,ServiceButton } from './contactStyles';
import { HtmlTag_h1, HtmlTag_hr, HtmlTag_p, HtmlTag_space_columm } from '../../components/htmlTags/Tags_html';
import ContactForm from '../../components/form/form';

const ContratarServico = 'Contratado!';

function Contact() {
    ("Baixar CV");
    const [NomeContratarServico, setNomeContratarServico] = useState("Contratar serviço");
    return (
        <WorkBody>
            <NavBar />
            <WorkScreen>
                <TitleConteinerWork>
                    <HtmlTag_h1>O que posso fazer por você?</HtmlTag_h1>
                    <HtmlTag_p>
                        Se você precisa de algum serviço que não esta catálogado abaixo, mande-me um email contando o que você precisa, vamos bater um papo.
                    </HtmlTag_p>
                    <HtmlTag_hr></HtmlTag_hr>
                </TitleConteinerWork>

                <Container>


                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_h1>Alguns dos meus serviços Contratáveis</HtmlTag_h1>
                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_hr></HtmlTag_hr>

                    <ServicesContainer>

                        <Service>
                            <ServiceTitle>
                                Desenvolvimento de Sites e Landing pages
                            </ServiceTitle>

                            <ServiceDescription>
                                Desenvolvimento de sites responsivos e otimizados para seu negócio.
                            </ServiceDescription>
                            
                            <ServiceButton onClick={() => setNomeContratarServico(ContratarServico)} href='https://wa.me/5511915858636?text=Oi,%20Eu%20Gostaria%20de%20saber%20mais%20sobre%20este%20serviço:%20*Desenvolvimento%20de%20sites%20e%20Landing%20pages*' target='_blank'>{NomeContratarServico}</ServiceButton>
                        </Service>

                        <Service>
                            <ServiceTitle>
                                Automação de Processos e Testes
                            </ServiceTitle>

                            <ServiceDescription>
                                Criação de projetos para automação de processos e testes para o seu sistema.
                            </ServiceDescription>
                            
                            <ServiceButton onClick={() => setNomeContratarServico(ContratarServico)} href='https://wa.me/5511915858636?text=Oi,%20Eu%20Gostaria%20de%20saber%20mais%20sobre%20este%20serviço:%20*Automação%20de%20Processos%20e%20Testes*' target='_blank'>{NomeContratarServico}</ServiceButton>
                        </Service>

                        <Service>
                            <ServiceTitle>
                                Criação de aplicações web
                            </ServiceTitle>

                            <ServiceDescription>
                                Criação de aplicações web completas para a sua empresa ou negócio.
                            </ServiceDescription>
                            
                            <ServiceButton onClick={() => setNomeContratarServico(ContratarServico)} href='https://wa.me/5511915858636?text=Oi,%20Eu%20Gostaria%20de%20saber%20mais%20sobre%20este%20serviço:%20*Criação%20de%20aplicações%20web*' target='_blank'>{NomeContratarServico}</ServiceButton>
                        </Service>

                        <Service>
                            <ServiceTitle>
                                Consumo e Conexão com APIs
                            </ServiceTitle>

                            <ServiceDescription>
                                Criação de projetos para consumo e conexão com APIs de terceiros.
                            </ServiceDescription>
                            
                            <ServiceButton onClick={() => setNomeContratarServico(ContratarServico)} href='https://wa.me/5511915858636?text=Oi,%20Eu%20Gostaria%20de%20saber%20mais%20sobre%20este%20serviço:%20*Comsumo%20e%20conexão%20com%20APIs*' target='_blank'>{NomeContratarServico}</ServiceButton>
                        </Service>

                        <Service>
                            <ServiceTitle>
                                E-commerce
                            </ServiceTitle>

                            <ServiceDescription>
                                Criação de lojas virtuais para o seu negócio ou Nicho de mercado.
                            </ServiceDescription>
                            
                            <ServiceButton onClick={() => setNomeContratarServico(ContratarServico)} href='https://wa.me/5511915858636?text=Oi,%20Eu%20Gostaria%20de%20saber%20mais%20sobre%20este%20serviço:%20*E-commerce*' target='_blank'>{NomeContratarServico}</ServiceButton>
                        </Service>

                        <Service>
                            <ServiceTitle>
                                Manutenção e Clean-code
                            </ServiceTitle>

                            <ServiceDescription>
                                Manutenção e refatoração de código para melhorar a qualidade do seu sistema e projeto.
                            </ServiceDescription>
                            
                            <ServiceButton onClick={() => setNomeContratarServico(ContratarServico)} href='https://wa.me/5511915858636?text=Oi,%20Eu%20Gostaria%20de%20saber%20mais%20sobre%20este%20serviço:%20*Manutenção%20e%20Clean-code*' target='_blank'>{NomeContratarServico}</ServiceButton>
                        </Service>


                    </ServicesContainer>

                    <HtmlTag_hr></HtmlTag_hr>
                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_h1>Não encontrou o que procurava?</HtmlTag_h1>
                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_p>
                        Então me mande um email contando o que você precisa, vamos bater um papo.
                    </HtmlTag_p>
                    <HtmlTag_space_columm></HtmlTag_space_columm>

                    <ContactForm></ContactForm>

                    <HtmlTag_hr></HtmlTag_hr>
                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_p>
                        
                    </HtmlTag_p>
                    <HtmlTag_space_columm></HtmlTag_space_columm>

                </Container>
            </WorkScreen>
        </WorkBody>
    );
}

export default Contact;
