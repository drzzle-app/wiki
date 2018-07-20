module.exports = {
  title: 'Drzzle Support Wiki',
  description: 'This is the support wiki for usage of the Drzzle application.',
  port: 8081,
  head: [
    [
      'link', {
        rel: 'shortcut icon',
        href: '/drzzle-favicon.png',
        type: 'image/png',
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: 'Homepage',
        link: 'https://drzzle.com',
      },
      {
        text: 'Start Free Trial',
        link: 'https://signup.drzzle.com',
      },
    ],
    sidebar: [
      '/',
      '/glossary/',
      {
        title: 'Websites',
        children: [
          '/websites/adding/',
          '/websites/basic-editing/',
        ]
      },
      {
        title: 'Domains',
        children: [
          '/domains/adding/',
          '/domains/records/',
          '/domains/transfer/',
        ]
      },
      {
        title: 'SSL Certificates',
        children: [
          '/ssl/adding/',
          '/ssl/editing/',
          '/ssl/deleting/',
        ]
      },
      {
        title: 'Components',
        children: [
          '/components/droplets/',
          '/components/puddles/',
          '/components/content-blocks/',
          '/components/sections/',
        ]
      },
      {
        title: 'Themes',
        children: [
          '/themes/'
        ]
      },
      {
        title: 'Pages',
        children: [
          '/pages/searching/',
          '/pages/creating/',
          '/pages/editing/',
          '/pages/scrolling/',
          '/pages/deleting/',
        ]
      },
      {
        title: 'Drafts',
        children: [
          '/drafts/creating/',
          '/drafts/publishing/',
        ]
      },
      {
        title: 'Templates',
        children: [
          '/templates/creating/',
          '/templates/editing/',
          '/templates/deleting/',
        ]
      },
      {
        title: 'Global Options',
        children: [
          '/global/sitemap/',
          '/global/favicon/',
        ],
      },
      {
        title: 'Developers',
        children: [
          '/developers/overview/',
          '/developers/framework/'
        ]
      },
    ]
  },
}
