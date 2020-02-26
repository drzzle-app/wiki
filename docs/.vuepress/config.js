module.exports = {
  title: "Drzzle Support Wiki",
  ga: "UA-122675256-1",
  description: "Public facing support wiki for Drzzle.",
  port: 8081,
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/drz-favicon.png",
        type: "image/png"
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "Homepage",
        link: "https://drzzle.app"
      }
    ],
    sidebar: [
      "/",
      "/glossary/",
      {
        title: "Websites",
        children: ["/websites/adding/", "/websites/basic-editing/"]
      },
      {
        title: "Sub-Users",
        children: ["/sub-users/", "/sub-users/creating/"]
      },
      {
        title: "Domains",
        children: [
          "/domains/adding/",
          "/domains/records/",
          "/domains/transfer/"
        ]
      },
      {
        title: "Components",
        children: [
          "/components/droplets/",
          "/components/puddles/",
          "/components/content-blocks/",
          "/components/sections/"
        ]
      },
      {
        title: "Themes",
        children: ["/themes/"]
      },
      {
        title: "Pages",
        children: [
          "/pages/searching/",
          "/pages/creating/",
          "/pages/editing/",
          "/pages/scrolling/",
          "/pages/deleting/",
          "/pages/previewing/"
        ]
      },
      {
        title: "Drafts",
        children: ["/drafts/creating/", "/drafts/publishing/"]
      },
      {
        title: "Templates",
        children: [
          "/templates/creating/",
          "/templates/editing/",
          "/templates/deleting/"
        ]
      },
      {
        title: "Global Options",
        children: [
          "/global/sitemap/",
          "/global/meta-image/",
          "/global/favicon/",
          "/global/fonts/",
          "/global/colors/"
        ]
      },
      {
        title: "Developers",
        children: ["/developers/overview/", "/developers/framework/"]
      }
    ]
  }
};
