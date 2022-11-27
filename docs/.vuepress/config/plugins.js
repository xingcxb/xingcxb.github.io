// 插件配置
module.exports = [
  // 自定义插件，即本地插件
  [
    {
      name: "custom-plugins",
      globalUIComponents: ["BlockToggle", "GlobalTip", "Aplayer"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    },
  ],
  [
    "vuepress-plugin-vdoing-comment",
    {
      choosen: "gitalk",
      options: {
        clientID: "51e233f2dada49dcdac8",
        clientSecret: "38cc569d9433f9113c256ef3cf0b25ade576f5cc",
        repo: "xingcxb.github.io", // 仓库
        owner: "xingcxb", //所有者
        admin: ["xingcxb"],
        distractionFreeMode: false,
      },
    },
  ],
  [("sitemap", { hostname: "https://xingcxb.com" })],
  // 谷歌统计代码
  [
    "@vuepress/google-analytics",
    {
      ga: "UA-98291551-1", //替换成自己实际申请的ID
    },
  ],
  "vuepress-plugin-baidu-autopush", // 百度自动推送
  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    "thirdparty-search",
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: "在MDN中搜索",
          frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
          behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: "在Runoob中搜索",
          frontUrl: "https://www.runoob.com/?s=",
        },
        {
          title: "在Vue API中搜索",
          frontUrl: "https://cn.vuejs.org/v2/api/#",
        },
        {
          title: "在Bing中搜索",
          frontUrl: "https://cn.bing.com/search?q=",
        },
        {
          title: "通过百度搜索本站的",
          frontUrl: "https://www.baidu.com/s?wd=",
        },
      ],
    },
  ],
  // 官网：https://github.com/leo-buneev/vuepress-plugin-fulltext-search
  ["fulltext-search"],
  [
    "one-click-copy",
    {
      // 代码块复制按钮
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // String or Array
      copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    "vuepress-plugin-zooming", // 放大图片
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除 class 是 no-zoom 的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  [
    "vuepress-plugin-baidu-tongji", // 百度统计
    {
      hm: "efdb43e9c4335da1fbabf3840b82c3ed",
    },
  ],
  // 顶部阅读进度插件
  ["reading-progress"],
  // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
  [
    "dynamic-title",
    {
      showIcon:
        "https://cdn.jsdelivr.net/gh/xingcxb/blog_img@blog1/blog/basic/favicon.ico",
      showText: "ヾ(≧▽≦*)o欢迎回来！",
      hideIcon:
        "https://cdn.jsdelivr.net/gh/xingcxb/blog_img@blog1/blog/basic/favicon.ico",
      hideText: "ಥ_ಥ不要走呀！",
      recoverTime: 2000, //  持续时间
    },
  ],
  // vuepress-plugin-tabs。官网：https://github.com/pskordilakis/vuepress-plugin-tabs
  ["tabs"],
];
