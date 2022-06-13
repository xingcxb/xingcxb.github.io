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
        "无善无恶心之体，有善有恶意之动，知善知恶是良知，为善去恶是格物。",
    },
  },
  plugins,
  themeConfig,
};
