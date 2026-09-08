import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://gitee.com",

  favicon: "/assets/logo.ico",

  author: {
    name: "lsmhq",
    url: "https://subata.top",
  },

  docsBranch: 'master',

  themeColor: true,

  fullscreen: true,
  
  iconAssets: "fontawesome-with-brands",

  logo: "/assets/logo.ico",

  docsDir: "src",

  docsRepo: 'https://gitee.com/lsmhq/subata',
  
  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "文章内容由Subata全员创作",

  displayFooter: true,

  encrypt: {
    global: false,
    config: {},
  },

  // page meta
  metaLocales: {
    editLink: "编辑此页",
    lastUpdated: '最近修改时间'
  },
  plugins: {
    // You should generate and use your own comment service
    // (e.g. Giscus) to enable comment support
    // comment: {
    //   provider: "Giscus",
    //   ...
    // },
    components:{
      components:[
        'Badge',
        'BiliBili',
        'PDF',
        'Share'
      ]
    },
    
    photoSwipe: true,

    copyCode:{
      showInMobile: true,
    },
    // All features enabled below are in active use
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      codetabs: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
