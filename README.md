<!-- # Portfólio · Guto Oliveira

Portfólio em React e Vite com páginas estáticas para início, trajetória, projetos e serviços.

## Executar localmente

Requer Node.js compatível com Vite 8 (Node 20.19+ ou 22.12+).

```bash
npm ci
npm run dev
```

O Vite informa o endereço local no terminal. Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

Outros comandos: `npm run lint`, `npm run format:check` e `npm audit`.

## Organização

- `src/App.jsx`: layout, navegação e seleção da página.
- `src/pages/`: conteúdo semântico de cada rota.
- `src/data/site.js`: projetos, serviços, habilidades, histórico e links.
- `src/data/seo.js`: títulos, descrições e endereço canônico.
- `src/components/ContactForm.jsx`: formulário de contato.
- `src/styles.css`: estilos e pontos de adaptação para telas menores.
- `scripts/prerender.mjs`: gera HTML por rota, `sitemap.xml` e `robots.txt` após o build.

O build cria `dist/index.html`, `dist/about.html`, `dist/projects.html` e `dist/services.html`. O arquivo `vercel.json` usa `cleanUrls` para expor essas páginas em `/`, `/about`, `/projects` e `/services` e entrega 404 para endereços inexistentes. Se o domínio principal mudar, atualize `src/data/seo.js` antes de publicar.

## Contato e segurança

O formulário usa EmailJS. Os identificadores no cliente são públicos por definição; eles não devem ser tratados como segredo. Antes de publicar, restrinja o domínio autorizado e configure limites de uso no painel do EmailJS. O formulário limita o tamanho dos campos, impede envio duplo enquanto aguarda a resposta e inclui um campo oculto simples contra bots. Proteção forte contra abuso exige controles no serviço ou no servidor.

As variáveis opcionais `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` e `VITE_EMAILJS_PUBLIC_KEY` substituem os identificadores atuais quando definidas. Como toda variável `VITE_`, seus valores aparecem no bundle do navegador.

O `vercel.json` define Content Security Policy e outros cabeçalhos. Ao publicar, confirme que o formulário continua enviando e que o console não mostra bloqueios inesperados.

## Pontos para o code review e QA

- Verificar navegação, links externos, conteúdo e formulário em `/`, `/about`, `/projects` e `/services`.
- Conferir foco por teclado, link “Pular para o conteúdo”, rótulos do formulário e leitura de títulos em leitor de tela.
- Conferir layout em celular, tablet, notebook e desktop; incluir 320, 375, 768, 1024 e 1366 px.
- Conferir o código-fonte HTML entregue por rota: título, descrição, canônica, conteúdo principal, `sitemap.xml` e `robots.txt`.
- Confirmar 404 real e cabeçalhos de segurança na Vercel após o deploy.
- Revisar regras de origem e limite de envios no painel do EmailJS; testar falha de rede e tentativas repetidas.

O pré-render melhora a disponibilidade do conteúdo para buscadores, mas não garante posicionamento. Dados estruturados, indexação e resultados de busca devem ser conferidos após a publicação. -->

# 🚀 Meu Portfólio   

Bem-vindo ao meu portfólio! Este projeto foi desenvolvido para apresentar minhas habilidades, projetos e formas de contato.  

🔗 **Acesse o projeto online:** [Guto-oliveira](https://guto-oliveira-portifolio.vercel.app/)
---

## 📸 Preview  
---
![Portfolio Preview](https://i.postimg.cc/j51m578v/Captura-de-tela-2025-03-25-222024.png)

---

## 🛠️ Tecnologias utilizadas nesse projeto!!

<div style="display: inline_block">
  <img align="center" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img align="center" alt="css3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img align="center" alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img align="center" alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img align="center" alt="git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
</div>

## Processos Ferramentais

- ⚛️ **React** – Biblioteca para construção da interface  
- 💅 **Styled-Components** – Estilização moderna e dinâmica  
- 🚀 **Vercel** – Deploy rápido e fácil  


# 🌎 Contato
### Se quiser bater um papo ou colaborar em projetos, me encontre aqui:

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/guts.okx/)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guto-oliveira-227580294/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:oliveriraguto4.com)