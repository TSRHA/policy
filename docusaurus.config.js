// @ts-check
const config = {
  title: '台灣海洋永續休閒採捕政策白皮書',
  tagline: '以證據、風險與共同治理取代工具名稱禁令',
  url: 'https://tsrha.github.io',
  baseUrl: '/policy/',
  organizationName: 'TSRHA',
  projectName: 'policy',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'zh-Hant', locales: ['zh-Hant'] },
  presets: [
    ['classic', {
      docs: { sidebarPath: './sidebars.js', routeBasePath: '/' },
      blog: false,
      theme: { customCss: './src/css/custom.css' },
    }],
  ],
  themeConfig: {
    navbar: {
      title: '休閒採捕政策白皮書',
      items: [
        {type: 'docSidebar', sidebarId: 'whitepaperSidebar', position: 'left', label: '白皮書'},
        {href: 'https://github.com/TSRHA/policy', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: '研究基礎', items: [
          {label: '友善採捕・現況與問題', href: 'https://liumusicforever.github.io/friendly-harvest-research/index.html'},
          {label: '友善採捕・短中長期建議', href: 'https://liumusicforever.github.io/friendly-harvest-research/plan.html'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} TSRHA. Draft for policy discussion.`,
    },
  },
};
module.exports = config;
