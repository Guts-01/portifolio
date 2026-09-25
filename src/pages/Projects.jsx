import { projects } from "../data/site.js";
import StackIcon from "../components/StackIcon.jsx";

export default function Projects() {
  return (
    <main className="page shell">
      <header className="page-heading">
        <p className="eyebrow">Portfólio</p>
        <h1>Projetos</h1>
        <p>
          Projetos pessoais, estudos e trabalhos desenvolvidos ao longo da minha
          trajetória.
        </p>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
            aria-labelledby={project.id}
          >
            <div className="project-images">
              <img
                src={project.desktop}
                alt={`Captura da versão para computador de ${project.title}`}
                loading="lazy"
                decoding="async"
              />
              <img
                className="phone-image"
                src={project.mobile}
                alt={`Captura da versão para celular de ${project.title}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-copy">
              <p className="eyebrow">Projeto</p>
              <h2 id={project.id}>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label="Tecnologias utilizadas">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <StackIcon name={tech} />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
              <div className="actions">
                {project.repo && (
                  <a
                    className="button button-outline"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                )}
                <a
                  className="button"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
              <details className="project-details">
                <summary>Sobre o projeto</summary>
                <p>{project.details}</p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
