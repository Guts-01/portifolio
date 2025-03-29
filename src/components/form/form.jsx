import { useState } from "react";
import { FormContainer, Title, Input, Textarea, Button, Label } from "./formStyle";
import { HtmlTag_hr } from "../htmlTags/Tags_html";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Mensagem enviada com sucesso! 🚀");
        setFormData({ name: "", email: "", message: "" });
    };
    
    const ButtontextSend = "Enviado";

    const [buttonText, setButtonText] = useState("Enviar");

    return (
        <FormContainer onSubmit={handleSubmit} data-aos="zoom-in-up"  data-aos-once="true" data-aos-duration="5000">
            <Title>Entre em contato</Title>
            <HtmlTag_hr></HtmlTag_hr>
            <Label >
                Nome:
            </Label>
            <Input
                type="text"
                name="name"
                placeholder="Jhon Wayne"
                value={formData.name}
                onChange={handleChange}
            />
            <Label >
                Email:
            </Label>
            <Input
                type="email"
                name="email"
                placeholder="jhonwayne@exemple.com"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <Label >
                Mensagem:
            </Label>
            <Textarea
                name="message"
                placeholder="Digite sua mensagem aqui..."
                value={formData.message}
                onChange={handleChange}
                required
            />

            <Button type="submit" onClick={
                () => {
                    if (!formData.name || !formData.email || !formData.message) {
                        setButtonText(buttonText)
                    }
                    else(
                        setButtonText(ButtontextSend)
                    )
                }
            }>{buttonText}</Button>
        </FormContainer>
    );
};

export default ContactForm;

