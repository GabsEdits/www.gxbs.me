import { defineConfig } from "vitepress";
import { genFeed } from "./feed.ts";
const accent = "#DA6944";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: "en-US",
  title: "Gabs",
  description: "Human, Front-end Developer & Open Source Contributor",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    author: "Gabriel Cozma",
    articles: {
      giscus: {
        repo: "GabsEdits/gabs.eu.org",
        repoid: "R_kgDOLDBscA",
        categoryid: "DIC_kwDOLDBscM4CdfK8",
        category: "Blog Comments",
      },
    },
    nav: {
      links: [
        { text: "Blog", link: "/blog/" },
        { text: "Find Me", link: "/findme" },
        { text: "Projects", link: "/projects" },
      ],
      git: "https://github.com/GabsEdits/gabs.eu.org",
      rss: "/atom.xml",
    },
    footer: {
      copyright: true,
      poweredBy: true,

      madeby: {
        show: false,
        name: "Gabs",
        link: "https://gabs.eu.org",
      },

      copyleft: {
        show: true,
        license: "MIT License",
        info: "https://github.com/GabsEdits/gabs.eu.org/blob/main/LICENSE",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [
    ["meta", { name: "author", content: "Gabriel Cozma" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "me", href: "https://vmst.io/@gabs" }],
    ["meta", { name: "theme-color", content: "#f17755" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    [
      "meta",
      {
        name: "og:description",
        content: "Human, Front-end Developer & Open Source Contributor.",
      },
    ],
    ["meta", { name: "og:site_name", content: "Gabs | Gabriel Cozma" }],
    ["meta", { name: "og:title", content: "Gabs | Gabriel Cozma" }],
    ["meta", { name: "og:url", content: "https://gabs.eu.org" }],
    [
      "meta",
      { name: "og:image", content: "https://gabs.eu.org/assets/cover.png" },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://gabs.eu.org/assets/cover.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Gabs | Gabriel Cozma" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Human, Front-end Developer & Open Source Contributor.",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://gabs.eu.org" }],
  ],
  sitemap: {
    hostname: "https://gabs.eu.org",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "sass:color";
          $color-accent: ${accent};
          $color-accent-l: color.scale($color-accent, $lightness: -60%);
          $bg-color-d: color.scale($color-accent, $lightness: -86%, $saturation: -60%);
          $bg-color-l: color.scale($color-accent, $lightness: 95%, $saturation: -65%);
          $bg-color-s-d: mix($color-accent, $bg-color-d, 20%);
          `,
        },
      },
    },
  },
  buildEnd: genFeed,
});
