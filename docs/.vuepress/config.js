module.exports = {
  title: 'Drzzle Support Wiki',
  description: 'This is the support wiki for usage of the Drzzle application.',
  port: 8081,
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
        title: 'Websites',
      },
      {
        title: 'Pages',
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
