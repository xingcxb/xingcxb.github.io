(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{468:function(v,e,_){"use strict";_.r(e);var t=_(0),o=Object(t.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[e("code",[v._v("Mac")]),v._v("外接非"),e("code",[v._v("Apple")]),v._v("认证的显示器其实一直是有色彩问题的，有的情况是整体颜色发灰，有的情况是绿色特别绿，微信的绿色变成接近荧光绿那种绿色。这是"),e("code",[v._v("Mac")]),v._v("的奇葩设计导致的，需要修改系统配置解决。今天升级了 "),e("code",[v._v("Big Sur")]),v._v("，之前在"),e("code",[v._v("Catalina")]),v._v("已经配置过的显示器失效了，又需要重新配置，为了以后配置能更快完成，故写下本篇博文。")]),v._v(" "),e("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-1725717718088510","data-ad-slot":"4281148213"}}),v._v(" "),e("h2",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[v._v("#")]),v._v(" 原因")]),v._v(" "),e("p",[e("code",[v._v("Mac")]),v._v("系统外接显示器色彩不正确的问题，是因为"),e("code",[v._v("Mac")]),v._v("对于未识别的显示器，默认使用"),e("code",[v._v("ycbcr")]),v._v("的色彩空间来驱动，而"),e("code",[v._v("Windows")]),v._v("会默认使用"),e("code",[v._v("RGB")]),v._v("的色彩空间来驱动，而大部分显示器是不支持"),e("code",[v._v("ycbcr")]),v._v("色彩空间的，这个色彩空间主要是用在电视上，也就是说"),e("code",[v._v("macOS")]),v._v("上，未识别的显示器统一认为是电视。而"),e("code",[v._v("Mac")]),v._v("不像"),e("code",[v._v("Windows")]),v._v("，会积极适配各种外接硬件，"),e("code",[v._v("macOS")]),v._v("原生可以识别的显示器十分有限，这也就导致"),e("code",[v._v("Mac")]),v._v("外接第三方显示器基本上都是会有色彩问题的。")]),v._v(" "),e("p",[v._v("对于"),e("code",[v._v("TypeC")]),v._v("接口的"),e("code",[v._v("Mac")]),v._v("，有没有这个问题取决于转接头，有的转接头会兼容，有的转接头不兼容。")]),v._v(" "),e("p",[v._v("对于"),e("code",[v._v("M1")]),v._v("芯片的"),e("code",[v._v("Mac")]),v._v("这个问题暂时无法通过修改系统配置来解决，解决方法同"),e("code",[v._v("TypeC")]),v._v("接口的"),e("code",[v._v("Mac")]),v._v("，使用不同的转接头会有不同的效果。")]),v._v(" "),e("h2",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[v._v("#")]),v._v(" 解决方法")]),v._v(" "),e("p",[v._v("解决方法就是在"),e("code",[v._v("macOS")]),v._v("的系统文件夹下放入外接显示器的配置，并设置为"),e("code",[v._v("RGB")]),v._v("色彩空间来驱动。首先要生成配置文件。")]),v._v(" "),e("p",[v._v("在已经接了外接显示器的情况下，在命令行使用"),e("code",[v._v("ruby")]),v._v("运行 这个文件，就可以在用户目录生成配置文件，我的路径为："),e("code",[v._v("/Users/zhangzida/DisplayVendorID-5e3/DisplayProductID-3402")])]),v._v(" "),e("p",[v._v("接着把这个文件夹放入"),e("code",[v._v("/System/Library/Displays/Contents/Resources/Overrides")]),v._v("就可以了。但是由于系统限制，系统文件夹是只读的，我们还要去关闭系统保护才能在这里面写文件。")]),v._v(" "),e("h3",{attrs:{id:"对于big-sur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对于big-sur"}},[v._v("#")]),v._v(" 对于"),e("code",[v._v("Big Sur")]),v._v("：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("需要重启进入恢复模式，进入恢复模式的方式是按下"),e("code",[v._v("Options")]),v._v("开机，然后再按"),e("code",[v._v("Command + R")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("在恢复模式下的命令行输入："),e("code",[v._v("csrutil authenticated-root disable")]),v._v("，然后再重启。")])]),v._v(" "),e("li",[e("p",[v._v("重启后在命令行输入"),e("code",[v._v("sudo mount -o nobrowse -t apfs /dev/diskNsM /path/to/mntpoint")]),v._v("挂载系统盘。"),e("code",[v._v("diskNsM")]),v._v("为 系统盘的设备名，在磁盘工具可以看到：")])])]),v._v(" "),e("div",{staticClass:"center-container"},[e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xingcxb/blog_img@blog1/%E9%9A%8F%E7%AC%94/1605265351257.png",alt:"不器小窝"}})])]),e("p",[v._v("注意最后的"),e("code",[v._v("s")]),v._v("和之后的内容要截取掉，比如我的系统盘设备名为"),e("code",[v._v("disk1s5s1")]),v._v("，则"),e("code",[v._v("diskNsM")]),v._v("为"),e("code",[v._v("disk1s5")]),v._v("。"),e("code",[v._v("/path/to/mntpoint")]),v._v("为需要挂载的路径，可以为任意路径，我挂载到了下载文件夹。我的整个命令为："),e("code",[v._v("sudo mount -o nobrowse -t apfs /dev/disk1s5 /Users/zhangzida/Downloads/")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("由于挂载到了下载文件夹，挂载好后，进入下载文件夹，就会进入到系统根目录了，我们把配置文件夹复制到相应的系统目录。")])]),v._v(" "),e("li",[e("p",[v._v("然后需要重建系统"),e("code",[v._v("snapshot")]),v._v("，使用到的命令为："),e("code",[v._v("sudo bless --folder /path/to/mntpoint/System/Library/CoreServices --bootefi --create-snapshot")]),v._v("，我的情况用到的命令为："),e("code",[v._v("sudo bless --folder /Users/zhangzida/Downloads/System/Library/CoreServices --bootefi --create-snapshot")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("然后重启电脑即可生效。")])])]),v._v(" "),e("h3",{attrs:{id:"对于catalina"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对于catalina"}},[v._v("#")]),v._v(" 对于"),e("code",[v._v("Catalina")]),v._v("：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("重启进入恢复模式，在恢复模式命令行输入"),e("code",[v._v("csrutil disable")]),v._v("，再重启进入系统。")])]),v._v(" "),e("li",[e("p",[v._v("在系统的命令行输入"),e("code",[v._v("sudu mount -uw /")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("在命令行用"),e("code",[v._v("mv")]),v._v("命令移动配置文件夹到相应的系统目录，我用到的命令为："),e("code",[v._v("sudo mv /Users/zhangzida/DisplayVendorID-5e3 /System/Library/Displays/Contents/Resources/Overrides")]),v._v("，请自行修改用户名为自己电脑上的。")])]),v._v(" "),e("li",[e("p",[v._v("重启电脑生效。")])])]),v._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://m.bilibili.com/video/BV19741187pv?t=1499",target:"_blank",rel:"noopener noreferrer"}},[v._v("小米 34 寸带鱼屏显示器评测，因为这个问题我只能退货。"),e("OutboundLink")],1),v._v("（5 分 20 秒处）")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://m.bilibili.com/video/BV19741187pv?t=1499",target:"_blank",rel:"noopener noreferrer"}},[v._v("How to Force RGB mode in MacOS Mojave ?"),e("OutboundLink")],1)]),v._v(" "),e("p",[e("a",{attrs:{href:"https://m.bilibili.com/video/BV19741187pv?t=1499",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://twitter.com/EBADTWEET/status/1275454103900971012"),e("OutboundLink")],1)])],1)}),[],!1,null,null,null);e.default=o.exports}}]);