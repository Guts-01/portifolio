import { useState } from "react";
import emailjs from "@emailjs/browser";

// Identificadores públicos do EmailJS. Restrinja os domínios autorizados no painel do serviço.
const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_g2ifs8m",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_rly8dcw",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "eg4imXeBZ3XSN9cwi",
};

const emptyForm = { name: "", email: "", message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending" || form.website) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name_client: name,
          email_client: email,
          message_client: message,
        },
        emailConfig.publicKey,
      );
      setForm(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const message = {
    invalid: "Preencha todos os campos.",
    success: "Mensagem enviada com sucesso!",
    error: "Não foi possível enviar. Tente novamente ou use o WhatsApp.",
  }[status];

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Deixe este campo vazio</label>
        <input
          id="contact-website"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          value={form.website}
          onChange={(event) =>
            setForm({ ...form, website: event.target.value })
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-name">Nome</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Nome completo"
          maxLength="120"
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">E-mail</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          maxLength="254"
          required
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Mensagem</label>
        <textarea
          id="contact-message"
          name="message"
          rows="6"
          placeholder="Conte brevemente sobre seu projeto ou necessidade"
          maxLength="2000"
          required
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
        />
      </div>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
