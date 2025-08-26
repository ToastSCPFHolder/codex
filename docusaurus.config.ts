import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Codex",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://codex.areaomega.com",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ToastSCPFHolder", // Usually your GitHub org/user name.
  projectName: "codex", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/toastmage-scpf/codex/edit/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [require.resolve("./src/client-modules/docWidthOverride")],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Codex",
      logo: {
        alt: "SCPF Logo",
        src: "img/logo.png",
      },
      items: [],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Roblox Group',
    //           href: 'https://roblox.com/groups/16171236',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discord.gg/omega',
    //         },
    //         {
    //           label: 'YouTube',
    //           href: 'https://www.youtube.com/channel/UCASL7LU1SDDvh3_XsXiw2SQ',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} ToastMage SCPF. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
