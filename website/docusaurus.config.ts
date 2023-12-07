import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import deflistPlugin from './src/plugins/remark-deflist/plugin';

const config: Config = {
    title: 'Maqueen Plus V2',
    tagline: 'Micro:bit Robot with Micropython',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://GBSL-Informatik.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/maqueen-plus-v2-mpy/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'GBSL', // Usually your GitHub org/user name.
    projectName: 'maqueen-plus-v2-mpy', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'de',
        locales: ['de'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/',
                    remarkPlugins: [
                        [
                            deflistPlugin,
                            {
                                tagNames: {
                                    dl: 'Dl',
                                },
                            }
                        ],
                    ]
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Maqueen Plus V2',
            logo: {
                alt: 'Maqueen Plus V2',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                  type: 'docsVersionDropdown',
                  position: 'right',
                  dropdownActiveClassDisabled: true,
                },
                {
                    href: 'https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'API',
                            to: '/docs',
                        },
                    ],
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} GBSL-Informatik (hfr).`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
            appId: 'DZQL4GSKC5',
            apiKey: 'cc69a77b8bd383ec3ab6cd857bfa1729',
            indexName: 'maqueen-plus-v2-mpy',
            contextualSearch: true,
            searchPagePath: 'search'
        },
    } satisfies Preset.ThemeConfig,
    plugins: [
        function (context, options) {
            return {
                name: 'raw-src-loader',
                configureWebpack(config, isServer, utils) {
                    return {
                        module: {
                            rules: [
                                {
                                    test: /\.raw\.*/,
                                    type: 'asset/source'
                                },
                            ],
                        },
                    };
                },
            };
        }
    ]
};

export default config;
