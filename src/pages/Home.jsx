import { skills } from "../data/site.js";
import StackIcon from "../components/StackIcon.jsx";
import portrait from "../assets/images/home/mainScreen/foto_perfil.webp";

export default function Home() {
  return (
    <main>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            Desenvolvedor · QA · Pentest (Ethical hacking){" "}
          </p>
          <h1 id="hero-title">
            Eai, Blz? eu sou o <span>Guto </span>
          </h1>
          <p>
            E desenvolvo experiências web, realizo <strong>pentests</strong>, trabalho com <strong>garantia de qualidade</strong> e <em>automação de testes</em>. Gosto de transformar desafios em soluções úteis.
          </p>
          <div className="actions">
            <a className="button" href="/projects">
              Conheça meus projetos
            </a>
            <a className="button button-outline" href="/services#contato">
              Vamos Trabalhar juntos?
            </a>
          </div>
        </div>
        <img
          className="portrait"
          src={portrait}
          alt="Retrato de Guto Oliveira, um desenvolvedor e profissional de QA, sorrindo para a câmera com o notebook sobre as pernas cruzadas,sentado em um puff"
          width="460"
          height="460"
        />
      </section>

      <section className="section section-alt" aria-labelledby="about-title">
        <div className="shell narrow">
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">
            Desenvolvimento, testes e aprendizado contínuo
          </h2>
          <p>
            Atuo como <strong>Desenvolvedor</strong> e <strong>Analista de qualidade</strong>. Estou aprimorando meus conhecimentos em
            segurança da informação. Minha trajetória também inclui
            desenvolvimento web e automação de testes.
          </p>
          <a className="text-link" href="/about">
            Leia minha trajetória <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section shell" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">Conhecimentos</p>
          <h2 id="skills-title">Tecnologias e práticas</h2>
          <p>
            Ferramentas com as quais trabalho e áreas que continuo estudando.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map(({ category, items }, index) => (
            <section
              className="card"
              key={category}
              aria-labelledby={`skill-${index}`}
            >
              <h3 id={`skill-${index}`}>{category}</h3>
              <ul className="tag-list">
                {items.map((item) => (
                  <li key={item}>
                    <StackIcon name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        
      </section>

      <section className="section section-alt" aria-labelledby="location-title">
        <div className="shell location-block">
          <div>
            <p className="eyebrow">Localização</p>
            <h2 id="location-title">São Paulo, SP</h2>
            <p>
              Disponível para conversar sobre desenvolvimento, testes e projetos
              em tecnologia.
            </p>
          </div>
          <a className="button" href="/services#contato">
            Entre em contato
          </a>
        </div>
        <div className="shell map-container">
          <iframe
            title="Mapa de São Paulo, SP"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.82%2C-23.72%2C-46.43%2C-23.38&layer=mapnik&marker=-23.5505%2C-46.6333"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <a
            className="text-link"
            href="https://www.openstreetmap.org/?mlat=-23.5505&mlon=-46.6333#map=11/-23.5505/-46.6333"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir mapa completo
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </section>
    </main>
  );
}
