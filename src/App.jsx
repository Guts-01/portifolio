import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaArrowUp, FaLinkedin, FaMoon, FaSun } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import { navigation, socialLinks } from "./data/site.js";
import { seo, siteUrl } from "./data/seo.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";

const pages = {
  "/": Home,
  "/about": About,
  "/projects": Projects,
  "/services": Services,
};

const socialIcons = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  Instagram: SiInstagram,
};

function SocialIcon({ label }) {
  const Icon = socialIcons[label];
  return <Icon className="social-icon" aria-hidden="true" focusable="false" />;
}

function PageMeta({ path }) {
  useEffect(() => {
    const page = seo[path];
    document.title = page?.title || "Página não encontrada | Guto Oliveira";

    const description = document.querySelector('meta[name="description"]');
    if (description)
      description.content = page?.description || "Portfólio de Guto Oliveira.";

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `${siteUrl}${path}`;

    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.content = page ? "index,follow" : "noindex,follow";
  }, [path]);

  return null;
}

export default function App({ path = "/" }) {
  const currentPath = path !== "/" ? path.replace(/\/$/, "") : path;
  const Page = pages[currentPath];
  const [theme, setTheme] = useState("light");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem("theme") === "dark") setTheme("dark");
    } catch {
      // O tema claro continua disponível quando o armazenamento está bloqueado.
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor)
      themeColor.content = theme === "dark" ? "#000000" : "#f8fafc";
  }, [theme]);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // A troca permanece ativa nesta página mesmo sem armazenamento.
    }
  }

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <>
      <PageMeta path={currentPath} />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a
            className="brand"
            href="/"
            aria-label="Guto Oliveira, voltar ao início"
          >
            Portifólio <span>Profissional</span>
          </a>
          <nav aria-label="Navegação principal">
            <ul className="nav-list">
              {navigation.map(({ to, label }) => (
                <li key={to}>
                  <a
                    href={to}
                    className={
                      currentPath === to ? "nav-link active" : "nav-link"
                    }
                    aria-current={currentPath === to ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"
            }
            aria-pressed={theme === "dark"}
            title={
              theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"
            }
          >
            {theme === "light" ? (
              <FaMoon aria-hidden="true" />
            ) : (
              <FaSun aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <div id="conteudo" tabIndex="-1">
        {Page ? (
          <Page />
        ) : (
          <main className="shell page">
            <h1>Página não encontrada</h1>
            <p>O endereço informado não existe.</p>
            <a className="button" href="/">
              Voltar ao início
            </a>
          </main>
        )}
      </div>

      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      )}

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} Guto Oliveira</p>
          <nav aria-label="Redes sociais">
            <ul className="social-list">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <SocialIcon label={label} />
                    {label}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

PageMeta.propTypes = {
  path: PropTypes.string.isRequired,
};

SocialIcon.propTypes = {
  label: PropTypes.string.isRequired,
};

App.propTypes = {
  path: PropTypes.string,
};
