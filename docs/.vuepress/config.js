const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");

const { penName, title } = require("./common/info");

module.exports = {
  // 使用npm包主题 vuepress-theme-vdoing
  theme: "vdoing",
  // 仓库地址
  base: "/",
  head,
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4"], // 支持 h2、h3、h4 标题
  },
  // 多语言支持
  locales: {
    "/": {
      lang: "zh-CN",
      title: penName + title,
      description:
        "全栈博客,个人技术博客,Go,Golang开发,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown,Go",
    },
  },
  plugins,
  themeConfig,
};
