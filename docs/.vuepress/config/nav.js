const go = require("../nav/go");
const projects = require("../nav/projects");
module.exports = [
  { text: "首页", link: "/" },
  { text: "吐槽", link: "/speak/" },
  go,
  { text: "读书笔记", link: "/read/" },
  projects,
  { text: "时间线", link: "/archives/" },
  { text: "关于", link: "/about/" },
];
