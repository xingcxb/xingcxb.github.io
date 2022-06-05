const experience = require("../nav/experience");
const projects = require("../nav/projects");
module.exports = [
  { text: "首页", link: "/" },
  { text: "吐槽", link: "/speak/" },
  experience,
  { text: "读书笔记", link: "/book/" },
  projects,
  { text: "时间线", link: "/archives/" },
  { text: "关于", link: "/about/" },
];
