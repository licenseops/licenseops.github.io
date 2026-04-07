import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LicenseOps',
  tagline: 'A fast CLI tool to check, fix, and migrate license headers across 50+ languages.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://licenseops.dev',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'licenseops',
  projectName: 'licenseops.github.io',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          lastVersion: 'v0.1.0',
          versions: {
            'v0.1.0': {
              label: 'v0.1.0',
            },
          },
          editUrl:
            'https://github.com/licenseops/licenseops.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/licenseops/licenseops.github.io/edit/main/',
          onInlineTags: 'throw',
          onInlineAuthors: 'throw',
          onUntruncatedBlogPosts: 'throw',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Algolia DocSearch — apply at https://docsearch.algolia.com/apply/
    // Once approved, replace these placeholder values with your credentials.
    // The apiKey is a public search-only key — safe to commit.
    algolia: {
      appId: 'YOUR_ALGOLIA_APP_ID',
      apiKey: 'YOUR_ALGOLIA_SEARCH_API_KEY',
      indexName: 'licenseops',
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // TODO: Create a branded social card image (1200x630 PNG)
    // image: 'img/licenseops-social-card.png',
    navbar: {
      title: 'LicenseOps',
      logo: {
        alt: 'LicenseOps Logo',
        src: 'img/licenseops-logo.svg',
        srcDark: 'img/licenseops-logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/chalindukodikara/licenseops',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/',
            },
            {
              label: 'Configuration',
              to: '/docs/configuration/',
            },
            {
              label: 'Use Cases',
              to: '/docs/use-cases/',
            },
            {
              label: 'CI Integration',
              to: '/docs/ci-integration/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/chalindukodikara/licenseops/issues',
            },
            {
              label: 'Report Issues',
              href: 'https://github.com/chalindukodikara/licenseops/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/chalindukodikara/licenseops',
            },
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} Chalindu Kodikara. Licensed under Apache-2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'yaml',
        'go',
        'python',
        'rust',
        'java',
        'css',
        'makefile',
        'docker',
        'javascript',
        'typescript',
        'json',
        'sql',
        'haskell',
        'toml',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
