// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import dotenv from "dotenv"
import { themes as prismThemes } from "prism-react-renderer"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

dotenv.config({ path: ".env.development.local" })

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "surva plugin docs",
    tagline:
        "Docs for surva network open source PocketMine-MP plugins, including Worlds, AllSigns, HotBlock, FancyGenerators and BadWordBlocker.",
    favicon: "img/favicon.ico",

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: "https://plugin-docs.surva.net",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: "facebook", // Usually your GitHub org/user name.
    // projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",

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
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/survanetwork/surva-plugin-docs/tree/main/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            // image: "img/docusaurus-social-card.jpg",
            colorMode: {
                respectPrefersColorScheme: true,
            },
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
                        href: "https://dev.surva.net/plugins/",
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
                                label: "surva dev",
                                href: "https://dev.surva.net",
                            },
                            {
                                label: "Dev blog",
                                href: "https://dev.surva.net/blog/",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/survanetwork",
                            },
                            {
                                label: "privacy policy",
                                href: "https://privaport.yellowlake.net/surva.network/",
                            },
                        ],
                    },
                ],
                copyright: `by surva network ${new Date().getFullYear()}`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
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

export default config
