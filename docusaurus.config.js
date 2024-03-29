// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config({ path: ".env.development.local" })

const prismRenderer = require("prism-react-renderer")
const codeThemes = prismRenderer.themes

const lightCodeTheme = codeThemes.github
const darkCodeTheme = codeThemes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "surva plugin docs",
    tagline:
        "Docs for surva network open source PocketMine-MP plugins, including Worlds, AllSigns, HotBlock, FancyGenerators and BadWordBlocker.",
    url: "https://plugin-docs.surva.net",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    //organizationName: "facebook", // Usually your GitHub org/user name.
    //projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/survanetwork/surva-plugin-docs/tree/main/",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "surva plugin docs",
                logo: {
                    alt: "surva logo",
                    src: "img/surva-logo.png",
                },
                items: [
                    {
                        to: "/worlds",
                        label: "Worlds",
                        position: "left",
                    },
                    {
                        to: "/allsigns",
                        label: "AllSigns",
                        position: "left",
                    },
                    {
                        to: "/hotblock",
                        label: "HotBlock",
                        position: "left",
                    },
                    {
                        to: "/badwordblocker",
                        label: "BadWordBlocker",
                        position: "left",
                    },
                    {
                        href: "https://plugins.surva.net",
                        label: "surva Plugins",
                        position: "left",
                    },
                    {
                        href: "https://github.com/survanetwork",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "light",
                links: [
                    {
                        title: "Plugin docs",
                        items: [
                            {
                                label: "Worlds",
                                to: "/worlds",
                            },
                            {
                                label: "AllSigns",
                                to: "/allsigns",
                            },
                            {
                                label: "HotBlock",
                                to: "/hotblock",
                            },
                            {
                                label: "BadWordBlocker",
                                to: "/badwordblocker",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/t4Kg4j3829",
                            },
                            {
                                label: "Mastodon",
                                href: "https://mastodon.social/@survanetwork",
                            },
                            {
                                label: "send an e-mail 📫 to our open source team",
                                href: "mailto:opensource@surva.net",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "surva.net",
                                href: "https://surva.net",
                            },
                            {
                                label: "Dev blog",
                                href: "https://devblog.surva.net",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/survanetwork",
                            },
                            {
                                label: "privacy policy",
                                href: "https://privaport.wayspace.net/surva.network/",
                            },
                        ],
                    },
                ],
                copyright: `by surva network ${new Date().getFullYear()}`,
            },
            colorMode: {
                respectPrefersColorScheme: true,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    scripts: [
        {
            src: `${process.env.UMAMI_HOST}/script.js`,
            async: true,
            defer: true,
            "data-website-id": process.env.UMAMI_ID,
        },
    ],
}

module.exports = config
