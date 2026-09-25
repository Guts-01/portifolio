import { FaDownload } from "react-icons/fa";
import {
  complementaryCourses,
  education,
  experiences,
  professionalObjective,
  professionalSummary,
  technicalCompetencies,
} from "../data/about.js";
import { timeline } from "../data/site.js";
import resumePdf from "../../meu-curriculo.pdf";

export default function About() {
  return (
    <main className="page shell about-page">
      <header className="page-heading about-heading">
        <p className="eyebrow">Sobre mim</p>
        <h1>Minha trajetória profissional</h1>
        <p>Conheça minha experiência, formação e áreas de atuação.</p>
      </header>

      <section className="about-section" aria-labelledby="profile-title">
        <h2 id="profile-title">Perfil profissional</h2>
        <div className="about-intro-grid">
          <article className="card">
            <h3>Resumo</h3>
            <p>{professionalSummary}</p>
          </article>
          <article className="card">
            <h3>Objetivo profissional</h3>
            <p>{professionalObjective}</p>
          </article>
        </div>
      </section>

      <section className="about-section" aria-labelledby="experience-title">
        <h2 id="experience-title">Experiência profissional</h2>
        <ol className="about-experience-list">
          {experiences.map(({ company, role, period, highlights }) => (
            <li className="card" key={company}>
              <div className="about-experience-heading">
                <div>
                  <h3>{company}</h3>
                  <p>{role}</p>
                </div>
                <span>{period}</span>
              </div>
              <ul className="about-detail-list">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section" aria-labelledby="competencies-title">
        <h2 id="competencies-title">Competências técnicas</h2>
        <p className="about-section-description">
          Práticas e competências técnicas que venho aprimorando ao longo da minha trajetória profissional e acadêmica.
        </p>
        <div className="about-competencies-grid">
          {technicalCompetencies.map(({ category, items }) => (
            <section className="card" key={category} aria-label={category}>
              <h3>{category}</h3>
              <ul className="tag-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <div className="about-section about-learning-grid">
        <section aria-labelledby="education-title">
          <h2 id="education-title">Formação acadêmica</h2>
          <ul className="about-learning-list">
            {education.map(({ course, institution, period }) => (
              <li className="card" key={course}>
                <h3>{course}</h3>
                <p>{institution}</p>
                <span>{period}</span>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="courses-title">
          <h2 id="courses-title">Cursos complementares</h2>
          <ul className="about-learning-list">
            {complementaryCourses.map(({ course, institution }) => (
              <li className="card" key={`${course}-${institution}`}>
                <h3>{course}</h3>
                <p>{institution}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        aria-labelledby="timeline-title"
        className="about-section narrow"
      >
        <h2 id="timeline-title">Linha temporal da minha trajetória</h2>
        <ol className="timeline">
          {timeline.map(({ date, text }) => (
            <li key={date}>
              <h3>{date}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="about-section narrow" aria-labelledby="download-title">
          <a
          className="button about-download"
          href={resumePdf}
          download="Alailton-Oliveira-Dias-Curriculo.pdf"
          type="application/pdf"
        >
          <FaDownload aria-hidden="true" focusable="false" />
          Baixar currículo em PDF
        </a>
      </section>
    </main>
  );
}
