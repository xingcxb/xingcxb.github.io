(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{573:function(a,s,t){"use strict";t.r(s);var v=t(0),e=Object(v.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("念叨了好几年，终于舍得花钱买了个"),s("code",[a._v("Mac mini")]),a._v("，还好和小米曲面屏搭配的不错，没有传说中的色差问题，本文就记录一下在"),s("code",[a._v("macOS")]),a._v("下遇到的一些问题吧。")]),a._v(" "),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-1725717718088510","data-ad-slot":"4281148213"}}),a._v(" "),s("h2",{attrs:{id:"mac安装软件的已损坏-无法打开。您应该将它移到废纸篓问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac安装软件的已损坏-无法打开。您应该将它移到废纸篓问题"}},[a._v("#")]),a._v(" "),s("code",[a._v("Mac")]),a._v("安装软件的"),s("strong",[a._v("已损坏，无法打开。您应该将它移到废纸篓")]),a._v("问题")]),a._v(" "),s("h3",{attrs:{id:"允许任何来源开启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#允许任何来源开启"}},[a._v("#")]),a._v(" 允许"),s("strong",[a._v("任何来源")]),a._v("开启")]),a._v(" "),s("p",[a._v("打开"),s("strong",[a._v("启动台")]),a._v("，选择"),s("strong",[a._v("终端")]),a._v("，输入：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" spctl  --master-disable\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后回车，继续输入密码（密码输入时是不可见的），然后回车。")]),a._v(" "),s("p",[a._v("接着打开"),s("strong",[a._v("系统偏好设置")]),a._v("，选择"),s("strong",[a._v("安全性与隐私")]),a._v("，选择"),s("strong",[a._v("通用")]),a._v("，可以看到"),s("strong",[a._v("任何来源")]),a._v("已经选定。")]),a._v(" "),s("h3",{attrs:{id:"plan-b"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plan-b"}},[a._v("#")]),a._v(" "),s("code",[a._v("Plan B")])]),a._v(" "),s("p",[a._v("在终端粘贴复制输入命令（注意最后有一个空格）：")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("先不要按回车！先不要按回车！先不要按回车！先不要按回车！")])])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" xattr "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" com.apple.quarantine\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后打开"),s("strong",[a._v("访达")]),a._v("("),s("code",[a._v("Finder")]),a._v(")进入"),s("strong",[a._v("应用程序")]),a._v("目录，找到该软件图标，将图标拖到刚才的终端窗口里面，会得到如下组合：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" xattr "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" com.apple.quarantine /Applications/WebStrom.app\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回到终端窗口按回车，输入系统密码回车即可。")]),a._v(" "),s("p",[a._v("接着重新打开安装软件，就可以正常安装了。")]),a._v(" "),s("blockquote",[s("p",[a._v("如果试了还是不行，那就只能下载以前的版本了。")])]),a._v(" "),s("h2",{attrs:{id:"安装-pkg-格式的文件时「安装器」-app-获取授权无法点击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-pkg-格式的文件时「安装器」-app-获取授权无法点击"}},[a._v("#")]),a._v(" 安装 "),s("code",[a._v("pkg")]),a._v(" 格式的文件时「安装器」 "),s("code",[a._v("APP")]),a._v(" 获取授权无法点击")]),a._v(" "),s("p",[a._v("目前这个情况我只在 "),s("code",[a._v("M1 Mac mini")]),a._v(" 版本号 "),s("code",[a._v("13.5.2")]),a._v(" 上遇到过")]),a._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),s("p",[a._v("打开 "),s("code",[a._v("系统设置")]),a._v(" 选择左侧的 "),s("code",[a._v("隐私与安全性")]),a._v(" ，点击右侧的 "),s("code",[a._v("完全磁盘访问权限")]),a._v(" 进入后点击下面的 "),s("code",[a._v("+")]),a._v(" 在弹出的 "),s("code",[a._v("应用程序选择框")]),a._v(" 上的右侧搜索 "),s("code",[a._v("安装器")]),a._v(" 选择 "),s("code",[a._v("ios App安装器.app")]),a._v("，然后返回上一层选择 "),s("code",[a._v("文件和文件夹")]),a._v(" 找到 "),s("code",[a._v("ios App安装器")]),a._v(" 给它相应的权限即可")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);