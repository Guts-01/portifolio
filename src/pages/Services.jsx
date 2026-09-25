import { services } from "../data/site.js";
import ContactForm from "../components/ContactForm.jsx";

const phone = "5511915858636";

export default function Services() {
  return (
    <main className="page shell">
      <header className="page-heading">
        <p className="eyebrow">Como posso ajudar</p>
        <h1>Serviços</h1>
        <p>
          Precisa de algo diferente? Conte sua ideia e conversamos sobre o
          projeto.
        </p>
      </header>
      <section aria-labelledby="services-title">
        <h2 id="services-title" className="sr-only">
          Serviços disponíveis
        </h2>
        <div className="services-grid">
          {services.map(({ title, description }) => (
            <article className="card service-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <a
                className="text-link"
                href={`https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar sobre este serviço
                <span className="sr-only"> (abre em nova aba)</span>{" "}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
      <section
        id="contato"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">Não encontrou o que procura?</h2>
          <p>Envie uma mensagem contando o que você precisa.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
