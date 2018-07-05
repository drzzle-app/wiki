module.exports = {
  title: 'Drzzle Support',
  description: 'Just playing around',
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
      {
        title: 'Domains',
        children: [
          '/domains/records/'
        ]
      }
    ]
  },
}
