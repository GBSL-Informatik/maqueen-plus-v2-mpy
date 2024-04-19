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
        image: 'img/maqueen-plus-v2.jpg',
        metadata: [
            {name: 'keywords', content: 'microbit, maqueen, robot, micro:bit, python, editor, micropython, library, pip, dfrobot, maqueen plus v2, maqueen plus, maqueen v2, maqueen plus v2 micropython, maqueen plus v2'}
        ],
        headTags: [
            // Declare a <link> preconnect tag
            {
              tagName: 'link',
              attributes: {
                rel: 'preconnect',
                href: 'https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/',
              },
            },
            // Declare some json-ld structured data
            {
              tagName: 'script',
              attributes: {
                type: 'application/ld+json',
              },
              innerHTML: JSON.stringify({
                "@context": "https://schema.org/", 
                "@type": "HowTo", 
                "name": "Program Mico:Bit Maqueen V2 with Python",
                "description": "Program the Maqueen Plus V2 from DFRobot with Python. This small library, written in micropython, establishes the connection to the maqueen robot. Control the motors, read the ultrasonic sensor to avoid crashes and control the color leds.",
                "image": "https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/img/maqueen-plus-v2.jpg",
                "totalTime": "PT8M",
                "tool": [{
                  "@type": "HowToTool",
                  "name": "Maqueen Plus V2"
                },{
                  "@type": "HowToTool",
                  "name": "Micro:Bit"
                }],
                "step": [{
                  "@type": "HowToStep",
                  "text": "Copy the Library",
                  "image": "https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/img/maqueen-library.png",
                  "name": "Copy the Library",
                  "url": "https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/docs/#bibliothek"
                },{
                  "@type": "HowToStep",
                  "text": "In the Python Webeditor, create a file maqueen.py and paste the code.",
                  "image": "https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/img/microbit-project.png",
                  "name": "Micropython Web Editor",
                  "url": "https://python.microbit.org/v/3/project"
                },{
                  "@type": "HowToStep",
                  "text": "Start coding - see the documentation as reference.",
                  "image": "https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/img/sample-program.png",
                  "name": "Coding",
                  "url": "https://gbsl-informatik.github.io/maqueen-plus-v2-mpy/docs/api/"
                }]    
              }),
            },
          ],
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
    ],
    scripts: [
        // Object format.
        {
            src: 'https://umami.gbsl.website/tell-me.js',
            ['data-website-id']: '7be6a26d-a716-4bfc-baea-4478f72047c4',
            ['data-domains']: 'gbsl-informatik.github.io',
            async: true,
            defer: true
        },
    ],
};

export default config;
