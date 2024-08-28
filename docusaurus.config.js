// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iFood Open Source',
  tagline: 'iFood Open Source',
  url: 'https://ifood.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iFood', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themes: [
    '@ifood/docusaurus-theme'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Página Inicial',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/bolos',
            position: 'left',
            label: 'Bolos',
          },
          {
            to: '/docs/doces',
            position: 'left',
            label: 'Doces',
          },
          {
            to: '/blog',
            position: 'left',
            label: 'Blog',
          },
          {
            to: '/projects',
            position: 'left',
            label: 'Projects',
          },
          {
            to: '/docs/encomendar',
            label: 'Como encomendar',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Map',
            items: [
              {
                label: 'Bolos',
                to: '/docs/bolos',
              },
              {
                label: 'Doces',
                to: '/docs/doces',
              },
            ],
          },
          {
            title: 'Information',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ifood',
              },
              {
                label: 'Blog',
                href: 'https://medium.com/ifood-engineering',
              },
              {
                label: 'Careers',
                href: 'https://carreiras.ifood.com.br/en',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
