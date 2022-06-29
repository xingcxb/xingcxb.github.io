const language = require("../nav/language");
const projects = require("../nav/projects");
const tools = require("../nav/tools");
const more = require("../nav/more");

module.exports = [
  { text: "首页", link: "/" },
  { text: "随笔", link: "/speak/" },
  language,
  tools,
  { text: "读吧", link: "/read/" },
  projects,
  { text: "时间线", link: "/archives/" },
  { text: "关于", link: "/about/" },
  more,
];
