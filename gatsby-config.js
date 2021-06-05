module.exports = {
  siteMetadata: {
    title: "Tecwaver",
    decription: "为了更丰裕的生活",
    footerLinks: [
      {
        columnTitle: "关于",
        links: [
          { to: "", name: "公司介绍" },
          { to: "", name: "加入我们" },
          { to: "", name: "最新动态" },
        ],
      },
      {
        columnTitle: "用户服务",
        links: [
          { to: "", name: "意见反馈" },
          { to: "", name: "用户协议" },
          { to: "", name: "审查规范" },
        ],
      },
      {
        columnTitle: "产品链接",
        links: [
          { to: "", name: "远程动力" },
          { to: "", name: "网上自习室" },
          { to: "", name: "咨询平台" },
        ],
      },
      // {
      //   columnTitle: "友情链接",
      //   links: [],
      // },
      {
        columnTitle: "商务合作",
        links: [
          { to: "", name: "联系我们" },
          { to: "", name: "加盟我们" },
          { to: "", name: "项目合作" },
        ],
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-3FGC483DKE",
      },
    },
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.svg",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
