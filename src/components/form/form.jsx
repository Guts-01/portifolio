import { useState } from "react";
import { FormContainer, Title, Input, Textarea, Button, Label } from "./formStyle";

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

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Title>Tire sua dúvida!</Title>

            <Label >
                Nome:
            </Label>
            <Input
                type="text"
                name="name"
                placeholder="Jhon Wayne"
                value={formData.name}
                onChange={handleChange}
            // required
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

            <Button type="submit">Enviar</Button>
        </FormContainer>
    );
};

export default ContactForm;

