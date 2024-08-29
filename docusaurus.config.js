// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bolo Londrina',
  url: 'https://bololondrina.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
          disableSwitch: true,
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
            to: '/docs/tortas',
            position: 'left',
            label: 'Tortas',
          },
          {
            to: '/docs/lembrancinhas',
            position: 'left',
            label: 'Lembrancinhas',
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
            title: 'Mapa do Site',
            items: [
              {
                to: '/docs/bolos',
                label: 'Bolos',
              },
              {
                to: '/docs/doces',
                label: 'Doces',
              },
              {
                to: '/docs/tortas',
                label: 'Tortas',
              },
              {
                to: '/docs/lembrancinhas',
                label: 'Lembrancinhas',
              },
              {
                to: '/docs/encomendar',
                label: 'Como encomendar',
              },
            ],
          },
          {
            title: 'Informações',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/thayhonoratoconfeitaria/',
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
      }
    }),
};

module.exports = config;
