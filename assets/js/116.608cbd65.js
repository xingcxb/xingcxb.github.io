(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{523:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"缘起"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缘起"}},[t._v("#")]),t._v(" 缘起")]),t._v(" "),s("p",[t._v("最近一直专注用 "),s("code",[t._v("go")]),t._v(" 写一个客户端，实际在运行的时候发现 "),s("code",[t._v("2000")]),t._v(" 个并发的情况下会导致内存和 "),s("code",[t._v("CPU")]),t._v(" 起飞，在已经编译成二进制的文件中不好找到问题点在哪里，因为一些外部通讯，导致本地无法做到测试，所以想找到问题比较头疼，后面搜索了后发现 "),s("code",[t._v("go")]),t._v(" 还有个神器 "),s("code",[t._v("pprof")]),t._v(" 可以在二进制的情况下进行读取异常的情况。")]),t._v(" "),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-1725717718088510","data-ad-slot":"4281148213"}}),t._v(" "),s("h2",{attrs:{id:"必备网址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#必备网址"}},[t._v("#")]),t._v(" 必备网址")]),t._v(" "),s("h2",{attrs:{id:"快速入手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入手"}},[t._v("#")]),t._v(" 快速入手")]),t._v(" "),s("p",[t._v("假设你的代码如下：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bytes"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"math/rand"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 换成一个随机字符串并返回对应的缓冲区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genRandomBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Buffer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buff bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Buffer\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tbuff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Intn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("buff\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环调用生成字符串方法，模拟 CPU 负载")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genRandomBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[t._v("要启用 "),s("code",[t._v("pprof")]),t._v(" 仅仅需要在在 "),s("code",[t._v("main")]),t._v(" 方法第一行加上 "),s("code",[t._v('log.Fatal(http.ListenAndServe("127.0.0.1:6060", nil))')]),t._v("，另外引入 "),s("code",[t._v('_ "net/http/pprof"')]),t._v(" 和 "),s("code",[t._v('"net/http"')]),t._v(" 即可")]),t._v(" "),s("p",[t._v("简化代码如下：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http/pprof"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启 pprof")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListenAndServe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:6060"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("blockquote",[s("p",[t._v("注意： 此时仅仅是加入了对于程序的监控的权限，并不能直接获取结果，需要使用浏览器 访问 "),s("code",[t._v("127.0.0.1:6060")]),t._v(" 获取到结果")])]),t._v(" "),s("p",[t._v("我个人的话更加倾向于 "),s("code",[t._v("web ui")]),t._v(" 来进行处理，这个看上去更直观一些。")]),t._v(" "),s("h3",{attrs:{id:"web-ui-处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-ui-处理"}},[t._v("#")]),t._v(" "),s("code",[t._v("web ui")]),t._v(" 处理")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("需要先安装 "),s("code",[t._v("graphviz")]),t._v("，我个人是 "),s("code",[t._v("macOS")]),t._v(" 所以直接 "),s("code",[t._v("brew install graphviz")]),t._v(" 就可以了，自己的系统可能会有不同的安装方式，自行搜索(该步骤仅仅需要执行一次)")])]),t._v(" "),s("li",[s("p",[t._v("终端中执行 "),s("code",[t._v('go tool pprof -http=127.0.0.1:6061 "http://程序运行的公网ip地址:6060/debug/pprof/profile?seconds=30"')]),t._v("，执行后会自行打开浏览器，访问 "),s("code",[t._v("127.0.0.1:6061")]),t._v("，直接查看即可")])])]),t._v(" "),s("h3",{attrs:{id:"使用-go-tool-处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-go-tool-处理"}},[t._v("#")]),t._v(" 使用 "),s("code",[t._v("go tool")]),t._v(" 处理")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("先在浏览器中请求 "),s("code",[t._v("http://程序运行的公网ip地址:6060/debug/pprof/profile?seconds=30")]),t._v("，等待文件下载下来")])]),t._v(" "),s("li",[s("p",[t._v("终端中执行 "),s("code",[t._v("go tool pprof main cpu.pprof")]),t._v("，执行后会进入命令等待中")])]),t._v(" "),s("li",[s("p",[t._v("输入 "),s("code",[t._v("help")]),t._v(" 找到对应的参数直接进行处理即可")])])]),t._v(" "),s("h4",{attrs:{id:"列属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列属性"}},[t._v("#")]),t._v(" 列属性")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("flat")]),t._v("： 表示函数自身的 "),s("code",[t._v("CPU")]),t._v(" 使用时间，单位为纳秒")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("flat%")]),t._v("：表示函数自身的 "),s("code",[t._v("CPU")]),t._v(" 使用时间占总时间的百分比")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("sum%")]),t._v("： 表示函数及其内部调用的其他函数的 "),s("code",[t._v("CPU")]),t._v(" 使用时间占总时间的百分比")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cum")]),t._v("： 表示函数及其内部调用的其他函数的 "),s("code",[t._v("CPU")]),t._v(" 使用时间之和，单位为纳秒")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cum%")]),t._v("： 表示函数及其内部调用的其他函数的 "),s("code",[t._v("CPU")]),t._v(" 使用时间之和占总时间的百分比")])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("flat")]),t._v(" 和 "),s("code",[t._v("cum")]),t._v(" 的区别在于: "),s("code",[t._v("flat")]),t._v(" 只统计函数自身的 "),s("code",[t._v("CPU")]),t._v(" 使用时间，不包括调用其他函数的时间，而 "),s("code",[t._v("cum")]),t._v(" 则包括了函数自身的时间和调用其他函数的时间。")])]),t._v(" "),s("h2",{attrs:{id:"经验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经验"}},[t._v("#")]),t._v(" 经验")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装 "),s("code",[t._v("graphviz")]),t._v(" 时可能多次出现网络中断的情况，失败了继续再安装就好，等待安装完毕")])]),t._v(" "),s("li",[s("p",[t._v("关于如何分析，这个基本上看火焰图可以看到重点出现问题的地方，然后再在其中找到出现延迟的路径位置，挺详细的")])])]),t._v(" "),s("h2",{attrs:{id:"文档资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档资料"}},[t._v("#")]),t._v(" 文档资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://dbwu.tech/posts/golang_pprof",target:"_blank",rel:"noopener noreferrer"}},[t._v("蛮荆"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);