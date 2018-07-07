module.exports = {
  title: 'Drzzle Support Wiki',
  description: 'This is the support wiki for usage of the Drzzle application.',
  port: 8081,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    nav: [
      {
        text: 'Drzzle',
        link: 'https://drzzle.com',
      },
    ],
    sidebar: [
      '/',
      '/glossary/',
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
        title: 'Websites',
      },
      {
        title: 'Pages',
      },
      {
        title: 'Templates',
        children: [
          '/templates/creating/',
          '/templates/editing/',
        ]
      },
      {
        title: 'Domains',
        children: [
          '/domains/records/',
          '/domains/transfer/',
          '/domains/purchase/'
        ]
      },
      {
        title: 'Site Map',
      },
    ]
  },
}
