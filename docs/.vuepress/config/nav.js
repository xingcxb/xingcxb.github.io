const go = require("../nav/go");
const projects = require("../nav/projects");
const tools = require("../nav/tools");
module.exports = [
  { text: "首页", link: "/" },
  { text: "吐槽", link: "/speak/" },
  go,
  tools,
  { text: "读吧", link: "/read/" },
  projects,
  { text: "时间线", link: "/archives/" },
  { text: "关于", link: "/about/" },
];
