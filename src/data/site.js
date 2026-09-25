import cepDesktop from "../assets/images/projects/Macbook-Air-buscar-cep-api-two.vercel.app.png";
import cepMobile from "../assets/images/projects/iPhone-13-PRO-buscar-cep-api-two.vercel.app.png";
import catDesktop from "../assets/images/projects/Macbook-Air-guts-01.github.io.png";
import catMobile from "../assets/images/projects/iPhone-13-PRO-jogodogatinho.netlify.app.png";
import fipeDesktop from "../assets/images/projects/Macbook-Air-buscar-preco-fipe.vercel.app.png";
import fipeMobile from "../assets/images/projects/iPhone-13-PRO-buscar-preco-fipe.vercel.app.png";
import ngoDesktop from "../assets/images/projects/Macbook-Air-passatempo-educativo-lp.vercel.app.png";
import ngoMobile from "../assets/images/projects/iPhone-13-PRO-passatempo-educativo-lp.vercel.app.png";
import usersDesktop from "../assets/images/projects/Macbook-Air-robot-testes-web.vercel.app.png";
import usersMobile from "../assets/images/projects/iPhone-13-PRO-robot-testes-web.vercel.app.png";

export const navigation = [
  { to: "/", label: "Início" },
  { to: "/about", label: "Sobre mim" },
  { to: "/projects", label: "Projetos" },
  { to: "/services", label: "Serviços" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Guts-01" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guto-oliveira-227580294/",
  },
  { label: "Instagram", href: "https://www.instagram.com/guts.okx/" },
];

export const skills = [
  {
    category: "Desenvolvimento web",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Layout responsivo",
      "Acessibilidade",
      "SEO",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend e Apis",
    items: [
      "Python", 
      "Java", 
      "PostgreSQL",
      "MySQL",
      "SQLite", 
      "Integração com APIs",
      "Supabase"
    ],
  },
  {
    category: "Qualidade",
    items: [
      "Robot Framework",
      "Selenium",
      "Advpr",
      "Tir"
    ],
  },
  {
    category: "Ferramentas",
    items: ["Git", "GitHub", "Azure DevOps", "Visual Studio Code", "Microsoft Office", "Postman","Sql Server Management Studio"],
  },
  {
    category: "Cibersegurança",
    items: [
      "Conceitos de Segurança da informação",
      "Linux",
      "Investigação digital",
      "Pentest"
    ],
  },
];

export const timeline = [
  {
    date: "2023 · Início",
    text: "Comecei minha trajetória em tecnologia no curso de desenvolvimento web do IOS, estudando HTML, CSS, JavaScript, React e GitHub.",
  },
  {
    date: "2023 · Julho",
    text: "Concluí o curso e apresentei o trabalho final desenvolvido em equipe.",
  },
  {
    date: "2023 · Outubro",
    text: "Iniciei um estágio na Totvs para trabalhar com automação de testes e recebi uma bolsa para ingressar na faculdade.",
  },
  {
    date: "2024",
    text: "Passei a aprofundar meus estudos em segurança da informação.",
  },
  {
    date: "2024 · Agosto",
    text: "Fui efetivado após nove meses de estágio e passei a atuar como técnico de qualidade.",
  },
  {
    date: "2025 · Abril",
    text: "Iniciei meu trabalho como voluntário na ONG Passatempo Educativo, desenvolvendo um site para a organização.",
  },
  {
    date: "2025 - Junho",
    text: "Fui promovido a analista de qualidade júnior.",
  },
    {
    date: "2026 - Maio",
    text: "Concluir a formação em analise e desenvolvimento de sistemas.",
  },
      {
    date: "Atualmente",
    text: "Venho aprimorando meus conhecimentos em segurança da informação, desenvolvimento web e automação de testes.",
  },
];

export const projects = [
  {
    id: "buscar-cep",
    title: "Buscar CEP",
    description:
      "Consulta de CEP com interface em JavaScript e backend em Flask.",
    details:
      "O usuário informa o CEP e a aplicação consulta uma API para exibir endereço, cidade e estado.",
    stack: ["Flask", "Python", "JavaScript"],
    desktop: cepDesktop,
    mobile: cepMobile,
    repo: "https://github.com/Guts-01/buscar_cep_api",
    demo: "https://buscar-cep-api-two.vercel.app",
  },
  {
    id: "jogo-do-gatinho",
    title: "Jogo do Gatinho",
    description: "Jogo para celular desenvolvido com HTML, CSS e JavaScript.",
    details:
      "Controle um gatinho por toque e salte sobre os obstáculos para aumentar sua pontuação.",
    stack: ["HTML", "CSS", "JavaScript"],
    desktop: catDesktop,
    mobile: catMobile,
    repo: "https://github.com/Guts-01/jogo_do_gatinho",
    demo: "https://guts-01.github.io/jogo_do_gatinho/",
  },
  {
    id: "consulta-fipe",
    title: "Consultar Veículo",
    description:
      "Aplicação web para consultar preços de veículos na Tabela FIPE.",
    details:
      "A consulta é dividida em etapas: tipo de veículo, marca, modelo e ano. Ao final, a aplicação apresenta os detalhes em um cartão.",
    stack: ["Flask", "Jinja2", "Python"],
    desktop: fipeDesktop,
    mobile: fipeMobile,
    repo: "https://github.com/Guts-01/buscar-preco-fipe",
    demo: "https://buscar-preco-fipe.vercel.app",
  },
  {
    id: "passatempo-educativo",
    title: "Passatempo Educativo",
    description:
      "Landing page criada para apresentar uma campanha de doação de imposto de renda para uma ONG.",
    details:
      "A página explica a iniciativa, responde perguntas frequentes e orienta visitantes interessados em contribuir.",
    stack: ["HTML", "CSS", "JavaScript"],
    desktop: ngoDesktop,
    mobile: ngoMobile,
    demo: "https://passatempo-educativo-lp.vercel.app",
  },
  {
    id: "tabela-de-usuarios",
    title: "Tabela de usuários",
    description:
      "Aplicação para praticar automação web com cadastro, edição e exclusão de registros.",
    details:
      "Projeto de estudo para exercitar fluxos de interface e testes automatizados.",
    stack: ["React", "Axios"],
    desktop: usersDesktop,
    mobile: usersMobile,
    repo: "https://github.com/Guts-01/frontend-listar-usuarios",
    demo: "https://robot-testes-web.vercel.app",
  },
];

export const services = [
  {
    title: "Sites e landing pages",
    description:
      "Páginas responsivas para apresentar seu negócio e seus serviços.",
  },
  {
    title: "Automação de processos e testes",
    description: "Fluxos automatizados para apoiar a qualidade do seu sistema.",
  },
  {
    title: "Aplicações web",
    description: "Interfaces e funcionalidades web para projetos e empresas.",
  },
  {
    title: "Integração com APIs",
    description: "Conexão de aplicações com serviços e dados externos.",
  },
  {
    title: "Comércio eletrônico",
    description: "Experiências de compra online para negócios.",
  },
  {
    title: "Projetos freelancer",
    description: "Colaboração em projetos de curta ou longa duração.",
  },
];
