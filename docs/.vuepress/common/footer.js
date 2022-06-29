const { penName, footerTitle } = require("../common/info");
module.exports = {
  // 页脚信息
  createYear: 2022, // 博客创建年份
  copyrightInfo:
    penName +
    " | " +
    footerTitle +
    '<br> <a href="http://beian.miit.gov.cn/" target="_blank"></a><a href="/sitemap.xml">sitemap</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>', // 博客版权信息，支持a标签
};
