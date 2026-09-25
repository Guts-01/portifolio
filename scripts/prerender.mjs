import { readFile, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { seo, siteUrl } from "../src/data/seo.js";

const dist = join(process.cwd(), "dist");
const template = await readFile(join(dist, "index.html"), "utf8");
const { render } = await import(
  pathToFileURL(join(dist, "server", "entry-server.js")).href
);

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

for (const [path, page] of Object.entries(seo)) {
  const canonical = `${siteUrl}${path}`;
  const head = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="summary" />`,
  ];

  if (path === "/") {
    const person = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Guto Oliveira",
      url: siteUrl,
      jobTitle: "Desenvolvedor web e profissional de Quality Assurance",
      sameAs: [
        "https://github.com/Guts-01",
        "https://www.linkedin.com/in/guto-oliveira-227580294/",
      ],
    };
    head.push(
      `<script type="application/ld+json">${JSON.stringify(person).replaceAll("<", "\\u003c")}</script>`,
    );
  }

  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace("</head>", `    ${head.join("\n    ")}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`);

  const output =
    path === "/"
      ? join(dist, "index.html")
      : join(dist, `${path.slice(1)}.html`);
  await writeFile(output, html);
}

const urls = Object.keys(seo)
  .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
  .join("\n");
await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
await writeFile(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
await rm(join(dist, "server"), { recursive: true });
