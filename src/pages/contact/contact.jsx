import NavBar from '../../components/navbar/navbar';
import { useState } from 'react';
import { WorkBody, WorkScreen, Container, TitleConteinerWork, Button } from './contactStyles';
import { HtmlTag_h1, HtmlTag_hr, HtmlTag_p, HtmlTag_space_columm } from '../../components/htmlTags/Tags_html';
import ContactForm from '../../components/form/form';

const DownloadConcluido = 'Download Feito!';

function Contact() {
    const [NomeBaixarCurriculo, setNomeBaixarCurriculo] = useState("Baixar Currículo");
    
    return (
        <WorkBody>
            <NavBar />
            <WorkScreen>
                    <TitleConteinerWork>
                        <HtmlTag_h1>Entre em contato!</HtmlTag_h1>
                        <HtmlTag_p>
                        Deixe aqui sua mensagem, dúvida ou sugestão.
                        </HtmlTag_p>
                        <HtmlTag_hr></HtmlTag_hr>
                    </TitleConteinerWork>

                <Container>
                    <ContactForm></ContactForm>
                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_p>
                        Se preferir, entre em contato por e-mail ou baixe meu currículo.
                    </HtmlTag_p>
                    <HtmlTag_space_columm></HtmlTag_space_columm>
                    <HtmlTag_hr></HtmlTag_hr>
        
                    <Button href="mailto:oliveriraguto4.com">Entre em Contato</Button>
                    <Button onClick={ () => setNomeBaixarCurriculo(DownloadConcluido)} href='/src/assets/curriculo/curriculo.pdf' download>
                        {NomeBaixarCurriculo}
                    </Button>
                </Container>
            </WorkScreen>
        </WorkBody>
    );
}

export default Contact;
