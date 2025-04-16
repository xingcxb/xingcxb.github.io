(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{567:function(t,s,e){"use strict";e.r(s);var v=e(0),a=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"sqlite简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlite简介"}},[t._v("#")]),t._v(" "),s("code",[t._v("SQLite")]),t._v("简介")]),t._v(" "),s("p",[s("code",[t._v("SQLite")]),t._v("是一个进程内的库，实现了自给自足的、无服务器的、零配置的、事务性的"),s("code",[t._v("SQL")]),t._v("数据库引擎。它是一个零配置的数据库，这意味着与其他数据库不一样，您不需要在系统中配置。\n就像其他数据库，"),s("code",[t._v("SQLite")]),t._v("引擎不是一个独立的进程，可以按应用程序需求进行静态或动态连接。"),s("code",[t._v("SQLite")]),t._v("直接访问其存储文件。")]),t._v(" "),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-1725717718088510","data-ad-slot":"4281148213"}}),t._v(" "),s("h3",{attrs:{id:"为什么要用sqlite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用sqlite"}},[t._v("#")]),t._v(" 为什么要用"),s("code",[t._v("SQLite")]),t._v("？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("不需要一个单独的服务器进程或操作的系统（无服务器的）。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SQLite")]),t._v("不需要配置，这意味着不需要安装或管理。")])]),t._v(" "),s("li",[s("p",[t._v("一个完整的"),s("code",[t._v("SQLite")]),t._v("数据库是存储在一个单一的跨平台的磁盘文件。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SQLite")]),t._v("是非常小的，是轻量级的，完全配置时小于"),s("code",[t._v("400KiB")]),t._v("，省略可选功能配置时小于"),s("code",[t._v("250KiB")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SQLite")]),t._v("是自给自足的，这意味着不需要任何外部的依赖。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SQLite")]),t._v("事务是完全兼容"),s("code",[t._v("ACID")]),t._v("的，允许从多个进程或线程安全访问。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SQLite")]),t._v("支持"),s("code",[t._v("SQL92（SQL2）")]),t._v("标准的大多数查询语言的功能。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SQLite")]),t._v("使用"),s("code",[t._v("ANSI-C")]),t._v("编写的，并提供了简单和易于使用的"),s("code",[t._v("API")]),t._v("。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SQLite")]),t._v("可在"),s("code",[t._v("UNIX（Linux, Mac OS-X, Android, iOS）")]),t._v("和"),s("code",[t._v("Windows（Win32, WinCE, WinRT）")]),t._v("中运行。")])])]),t._v(" "),s("h2",{attrs:{id:"sqlite的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlite的安装"}},[t._v("#")]),t._v(" "),s("code",[t._v("SQLite")]),t._v("的安装")]),t._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" "),s("code",[t._v("Windows")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("访问"),s("code",[t._v("SQLite")]),t._v("下载页面，从"),s("code",[t._v("Windows")]),t._v("区下载预编译的二进制文件。")])]),t._v(" "),s("li",[s("p",[t._v("您需要下载"),s("code",[t._v("sqlite-tools-win32-*.zip")]),t._v("和"),s("code",[t._v("sqlite-dll-win32-*.zip")]),t._v("压缩文件。")])]),t._v(" "),s("li",[s("p",[t._v("创建文件夹"),s("code",[t._v("C:\\sqlite")]),t._v("，并在此文件夹下解压上面两个压缩文件，将得到"),s("code",[t._v("sqlite3.def")]),t._v("、"),s("code",[t._v("sqlite3.dll")]),t._v("和"),s("code",[t._v("sqlite3.exe")]),t._v("文件。")])]),t._v(" "),s("li",[s("p",[t._v("添加"),s("code",[t._v("C:\\sqlite")]),t._v("到"),s("code",[t._v("PATH")]),t._v("环境变量，最后在命令提示符下，使用"),s("code",[t._v("sqlite3")]),t._v("命令，将显示如下结果。")])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("sqlite3\nSQLite version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v(".15.2 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2013")]),t._v("-01-09 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":53:05\nEnter "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".help"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" instructions\nEnter SQL statements terminated with a "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v("\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" "),s("code",[t._v("Linux")])]),t._v(" "),s("p",[t._v("几乎所有版本的"),s("code",[t._v("Linux")]),t._v("操作系统都附带"),s("code",[t._v("SQLite")]),t._v("。所以，只要使用下面的命令来检查您的机器上是否已经安装了"),s("code",[t._v("SQLite")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ sqlite3\nSQLite version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v(".15.2 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2013")]),t._v("-01-09 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":53:05\nEnter "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".help"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" instructions\nEnter SQL statements terminated with a "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v("\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("如果没有看到上面的结果，那么就意味着没有在 Linux 机器上安装 SQLite。因此，让我们按照下面的步骤安装 SQLite：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("请访问"),s("code",[t._v("SQLite")]),t._v("下载页面，从源代码区下载"),s("code",[t._v("sqlite-autoconf-*.tar.gz")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("步骤如下：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf sqlite-autoconf-3071502.tar.gz\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" sqlite-autoconf-3071502\n$ ./configure "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" "),s("code",[t._v("macOS")])]),t._v(" "),s("p",[t._v("最新版本的"),s("code",[t._v("macOS")]),t._v("会预安装"),s("code",[t._v("SQLite")]),t._v("，但是如果没有可用的安装，只需按照如下步骤进行：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("请访问"),s("code",[t._v("SQLite")]),t._v("下载页面，从源代码区下载"),s("code",[t._v("sqlite-autoconf-*.tar.gz")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("步骤如下：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf sqlite-autoconf-3071502.tar.gz\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" sqlite-autoconf-3071502\n$ ./configure "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("验证"),s("code",[t._v("SQLite")]),t._v("是否安装成功：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ sqlite3\nSQLite version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v(".15.2 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2013")]),t._v("-01-09 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":53:05\nEnter "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".help"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" instructions\nEnter SQL statements terminated with a "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v("\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"基础命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[t._v("#")]),t._v(" 基础命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v(".backup ?DB? FILE")])]),t._v(" "),s("td",[t._v("备份"),s("code",[t._v("DB")]),t._v("数据库（默认是"),s("code",[t._v("main")]),t._v("）到"),s("code",[t._v("FILE")]),t._v("文件。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".bail ON|OFF")])]),t._v(" "),s("td",[t._v("发生错误后停止。默认为"),s("code",[t._v("OFF")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".databases")])]),t._v(" "),s("td",[t._v("列出数据库的名称及其所依附的文件。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".dump ?TABLE?")])]),t._v(" "),s("td",[t._v("以"),s("code",[t._v("SQL")]),t._v("文本格式转储数据库。如果指定了"),s("code",[t._v("TABLE")]),t._v("表，则只转储匹配"),s("code",[t._v("LIKE")]),t._v("模式的"),s("code",[t._v("TABLE")]),t._v("表。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".echo ON|OFF")])]),t._v(" "),s("td",[t._v("开启或关闭"),s("code",[t._v("echo")]),t._v("命令。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".exit")])]),t._v(" "),s("td",[t._v("退出"),s("code",[t._v("SQLite")]),t._v("提示符。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".explain ON|OFF")])]),t._v(" "),s("td",[t._v("开启或关闭适合于"),s("code",[t._v("EXPLAIN")]),t._v("的输出模式。如果没有带参数，则为"),s("code",[t._v("EXPLAIN on")]),t._v("，即开启"),s("code",[t._v("EXPLAIN")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".header(s) ON|OFF")])]),t._v(" "),s("td",[t._v("开启或关闭头部显示。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".help")])]),t._v(" "),s("td",[t._v("显示消息。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".import FILE TABLE")])]),t._v(" "),s("td",[t._v("导入来自"),s("code",[t._v("FILE")]),t._v("文件的数据到"),s("code",[t._v("TABLE")]),t._v("表中。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".indices ?TABLE?")])]),t._v(" "),s("td",[t._v("显示所有索引的名称。如果指定了"),s("code",[t._v("TABLE")]),t._v("表，则只显示匹配"),s("code",[t._v("LIKE")]),t._v("模式的"),s("code",[t._v("TABLE")]),t._v("表的索引。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".load FILE ?ENTRY?")])]),t._v(" "),s("td",[t._v("加载一个扩展库。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".log FILE|off")])]),t._v(" "),s("td",[t._v("开启或关闭日志。"),s("code",[t._v("FILE")]),t._v("文件可以是"),s("code",[t._v("stderr")]),t._v("（标准错误）/"),s("code",[t._v("stdout")]),t._v("（标准输出）。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".mode MODE")])]),t._v(" "),s("td",[t._v("设置输出模式")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".nullvalue STRING")])]),t._v(" "),s("td",[t._v("在"),s("code",[t._v("NULL")]),t._v("值的地方输出"),s("code",[t._v("STRING")]),t._v("字符串。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".output FILENAME")])]),t._v(" "),s("td",[t._v("发送输出到"),s("code",[t._v("FILENAME")]),t._v("文件。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".output stdout")])]),t._v(" "),s("td",[t._v("发送输出到屏幕。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".print STRING...")])]),t._v(" "),s("td",[t._v("逐字地输出"),s("code",[t._v("STRING")]),t._v("字符串。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".prompt MAIN CONTINUE")])]),t._v(" "),s("td",[t._v("替换标准提示符。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".quit")])]),t._v(" "),s("td",[t._v("退出"),s("code",[t._v("SQLite")]),t._v("提示符。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".read FILENAME")])]),t._v(" "),s("td",[t._v("执行"),s("code",[t._v("FILENAME")]),t._v("文件中的"),s("code",[t._v("SQL")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".schema ?TABLE?")])]),t._v(" "),s("td",[t._v("显示"),s("code",[t._v("CREATE")]),t._v("语句。如果指定了"),s("code",[t._v("TABLE")]),t._v("表，则只显示匹配"),s("code",[t._v("LIKE")]),t._v("模式的"),s("code",[t._v("TABLE")]),t._v("表。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".separator STRING")])]),t._v(" "),s("td",[t._v("改变输出模式和"),s("code",[t._v(".import")]),t._v("所使用的分隔符。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".show")])]),t._v(" "),s("td",[t._v("显示各种设置的当前值。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".stats ON|OFF")])]),t._v(" "),s("td",[t._v("开启或关闭统计。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".tables ?PATTERN?")])]),t._v(" "),s("td",[t._v("列出匹配"),s("code",[t._v("LIKE")]),t._v("模式的表的名称。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".timeout MS")])]),t._v(" "),s("td",[t._v("尝试打开锁定的表"),s("code",[t._v("MS")]),t._v("毫秒。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".width NUM NUM")])]),t._v(" "),s("td",[t._v("为"),s("code",[t._v("column")]),t._v("模式设置列宽度。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".timer ON|OFF")])]),t._v(" "),s("td",[t._v("开启或关闭"),s("code",[t._v("CPU")]),t._v("定时器。")])])])]),t._v(" "),s("h2",{attrs:{id:"sqlite创建一个数据库文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlite创建一个数据库文件"}},[t._v("#")]),t._v(" "),s("code",[t._v("SQLite")]),t._v("创建一个数据库文件")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建ipdata.db文件")]),t._v("\nsqlite3 ipdata.db\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退出sqlite3提示符")]),t._v("\n.exit\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"实战-sqlite-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实战-sqlite-3"}},[t._v("#")]),t._v(" 实战 "),s("code",[t._v("sqlite 3")])]),t._v(" "),s("h3",{attrs:{id:"清空表数据并将自增-id-设为0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清空表数据并将自增-id-设为0"}},[t._v("#")]),t._v(" 清空表数据并将自增 "),s("code",[t._v("id")]),t._v(" 设为0")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Sqlite")]),t._v(" 没有实现 "),s("code",[t._v("TRUNCATE")]),t._v(" 表操作，但是当 "),s("code",[t._v("sqlite")]),t._v(" 数据库包含自增列时，会自动创建一个 "),s("code",[t._v("sqlite_sequence")]),t._v(" 的表。这个表包含两个列："),s("code",[t._v("name")]),t._v(" 和 "),s("code",[t._v("seq")]),t._v(" 。"),s("code",[t._v("name")]),t._v(" 记录自增列所在的表，"),s("code",[t._v("seq")]),t._v(" 记录当前序号（下一条记录的编号就是当前序号加1）。如果想把某个自增列的序号归零，只需要修改 "),s("code",[t._v("sqlite_sequence")]),t._v(" 表就可以了。")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" TblName\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sqlite_sequence "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TblName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" sqlite_sequence "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" seq "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TblName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("strong",[t._v("如果想将所有表的自增列都归零，直接清空 "),s("code",[t._v("sqlite_sequence")]),t._v(" 表就可以了")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sqlite_sequence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);