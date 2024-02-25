const { penName, footerTitle } = require("../common/info");
module.exports = {
  // 页脚信息
  createYear: 2022, // 博客创建年份
  copyrightInfo:
    penName +
    " | " +
    footerTitle +
    '<br> <a href="/sitemap.xml">sitemap</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br/><a href="https://www.foreverblog.cn/go.html" target="_blank"> <img src="https://img.foreverblog.cn/wormhole_3_tp.gif" alt="" style="width:auto;height:32px;" title="穿梭虫洞-随机访问十年之约友链博客"></a>', // 博客版权信息，支持a标签
};
