(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{533:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"fyne库简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fyne库简介"}},[s._v("#")]),s._v(" "),a("code",[s._v("Fyne")]),s._v("库简介")]),s._v(" "),a("p",[a("code",[s._v("Fyne")]),s._v("是一个易于使用的"),a("code",[s._v("UI")]),s._v("工具包和用"),a("code",[s._v("Go")]),s._v("编写的应用程序"),a("code",[s._v("API")]),s._v("。它旨在构建在桌面和移动设备上运行的应用程序，这些应用程序具有单个代码库。")]),s._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-1725717718088510","data-ad-slot":"4281148213"}}),s._v(" "),a("h2",{attrs:{id:"项目地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[s._v("#")]),s._v(" 项目地址")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/fyne-io/fyne",target:"_blank",rel:"noopener noreferrer"}},[s._v("fyne-io/fyne: Cross platform GUI in Go inspired by Material Design"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h3",{attrs:{id:"安装基础环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装基础环境"}},[s._v("#")]),s._v(" 安装基础环境")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),a("p",[a("code",[s._v("Fyne")]),s._v("需要有"),a("code",[s._v("3")]),s._v("个基本要素，"),a("code",[s._v("Go")]),s._v("工具（至少 1.12 版本），"),a("code",[s._v("C")]),s._v("编译器（与系统图形驱动连接）和系统图形驱动。")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("以上安装的环境仅仅是在开发时所需要的依赖，打包后的程序不会需要在终端用户的机器上面安装这些环境")])]),s._v(" "),a("h4",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" "),a("code",[s._v("Windows")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装"),a("code",[s._v("Go")]),s._v("环境，"),a("a",{attrs:{href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("安装可用的"),a("code",[s._v("windows")]),s._v("版"),a("code",[s._v("C")]),s._v("语言编译器，以下是官方通过测试的编译器，任意选择其中一个即可")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("MSYS2 with MingW-w64")]),s._v(" - "),a("a",{attrs:{href:"https://www.msys2.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("msys2.org"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("code",[s._v("TDM-GCC")]),s._v(" - "),a("a",{attrs:{href:"https://jmeubank.github.io/tdm-gcc/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("tdm-gcc.tdragon.net"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("code",[s._v("Cygwin")]),s._v(" - "),a("a",{attrs:{href:"https://www.cygwin.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cygwin.com"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[a("p",[s._v("更新"),a("code",[s._v("Windows")]),s._v("的图形驱动版本，使其保证最新")])])]),s._v(" "),a("h5",{attrs:{id:"msys2安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msys2安装步骤"}},[s._v("#")]),s._v(" "),a("code",[s._v("MSYS2")]),s._v("安装步骤")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("从"),a("code",[s._v("msys2.org")]),s._v("安装"),a("code",[s._v("MSYS2")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("一旦安装，不要使用打开的"),a("code",[s._v("MSYS")]),s._v("终端")])]),s._v(" "),a("li",[a("p",[s._v("从开始菜单中打开"),a("code",[s._v("MSYS2 MinGW 64-bit")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v('执行以下命令（如果被要求提供安装选项，请务必选择 "全部"）。')]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Syu")]),s._v("\npacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" mingw-w64-x86_64-toolchain\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("将"),a("code",[s._v("/c/Program/Files/Go/bin")]),s._v("和"),a("code",[s._v("~/Go/bin")]),s._v("添加到你的"),a("code",[s._v("PATH")]),s._v("中，对于"),a("code",[s._v("MSYS2")]),s._v("你可以把下面的命令粘贴到你的终端。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/c/Program\\ Files/Go/bin:~/Go/bin"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h4",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" "),a("code",[s._v("macOS")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装"),a("code",[s._v("Go")]),s._v("环境，"),a("a",{attrs:{href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("从"),a("code",[s._v("Mac App Store")]),s._v("安装"),a("code",[s._v("Xcode")]),s._v("，"),a("a",{attrs:{href:"https://apps.apple.com/zh/app/xcode/id497799835",target:"_blank",rel:"noopener noreferrer"}},[s._v("Xcode"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("通过打开一个终端窗口并输入以下内容来设置"),a("code",[s._v("Xcode")]),s._v("命令行工具。"),a("code",[s._v("xcode-select --install")])])]),s._v(" "),a("li",[a("p",[s._v("更新图形驱动")])])]),s._v(" "),a("h4",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" "),a("code",[s._v("Linux")])]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("Linux")]),s._v("对应的软件包管理器安装"),a("code",[s._v("Go")]),s._v("、"),a("code",[s._v("gcc")]),s._v("和图形库头文件。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("Debian/Ubuntu")]),s._v(": "),a("code",[s._v("sudo apt-get install golang gcc libgl1-mesa-dev xorg-dev")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Fedora")]),s._v(": "),a("code",[s._v("sudo dnf install golang gcc libXcursor-devel libXrandr-devel mesa-libGL-devel libXi-devel libXinerama-devel libXxf86vm-devel")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Arch Linux")]),s._v(": "),a("code",[s._v("sudo pacman -S go xorg-server-devel libxcursor libxrandr libxinerama libxi")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Solus")]),s._v(": "),a("code",[s._v("sudo eopkg it -c system.devel golang mesalib-devel libxrandr-devel libxcursor-devel libxi-devel libxinerama-devel")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("openSUSE")]),s._v(": "),a("code",[s._v("sudo zypper install go gcc libXcursor-devel libXrandr-devel Mesa-libGL-devel libXi-devel libXinerama-devel libXxf86vm-devel")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Void Linux")]),s._v(": "),a("code",[s._v("sudo xbps-install -S go base-devel xorg-server-devel libXrandr-devel libXcursor-devel libXinerama-devel")])])])]),s._v(" "),a("h3",{attrs:{id:"安装fyne核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装fyne核心"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("Fyne")]),s._v("核心")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go get fyne.io/fyne/v2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[s._v("#")]),s._v(" "),a("code",[s._v("demo")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go get fyne.io/fyne/v2/cmd/fyne_demo/\nfyne_demo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"hello-fyne"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-fyne"}},[s._v("#")]),s._v(" "),a("code",[s._v("Hello Fyne")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("package main\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fyne.io/fyne/v2/app"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fyne.io/fyne/v2/container"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fyne.io/fyne/v2/widget"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nfunc "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\ta :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" app.New"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tw :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a.NewWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\thello :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" widget.NewLabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello Fyne!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tw.SetContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("container.NewVBox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t\thello,\n\t\twidget.NewButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hi!"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\thello.SetText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Welcome :)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n\n\tw.ShowAndRun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("Fyne")]),s._v("并没有提供中文的字体，如果需要使用中文自己需要自行引用中文字体。")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);