(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{531:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"node-js-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-简介"}},[s._v("#")]),s._v(" Node.js 简介")]),s._v(" "),a("ul",[a("li",[s._v("Node.js 是让 JavaScript 运行在服务端的开发平台。是一个基于 Chrome JavaScript 运行时建立的一个平台。底层架构是 JavaScript，文件后缀名为 "),a("code",[s._v(".js")]),s._v(" ；")]),s._v(" "),a("li",[s._v("Node.js 是一个事件驱动 I/O 服务端的 JavaScript 环境；")])]),s._v(" "),a("h2",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),a("p",[s._v("与 Java 程序比较，JavaScript 是解释性语言，不需要进行编译。")]),s._v(" "),a("p",[s._v("Nodejs 运行在 V8 (JVM) 引擎中，"),a("strong",[s._v("运行的命令")]),s._v("是： "),a("code",[s._v("node + 文件名.js")]),s._v(" 。")]),s._v(" "),a("p",[s._v("🌰 例子：")]),s._v(" "),a("ul",[a("li",[s._v("创建文件  "),a("code",[s._v("hello.js")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, Node.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在终端中运行语句：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ node hello.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"请求响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求响应"}},[s._v("#")]),s._v(" 请求响应")]),s._v(" "),a("p",[s._v("🌰 创建文件 "),a("code",[s._v("httpSever.js")]),s._v(" ：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入 http 模块")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个httpServer服务：")]),s._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("requset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'Content-type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/plain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 写入head信息")]),s._v("\n    response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello Server!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向浏览器输出内容")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 端口为8080")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server starting at http://localhost:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"npm-包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-包管理"}},[s._v("#")]),s._v(" NPM 包管理")]),s._v(" "),a("p",[s._v("NPM 全称 Node Package Manager，是 Node.js 包管理工具。")]),s._v(" "),a("h3",{attrs:{id:"管理项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理项目"}},[s._v("#")]),s._v(" 管理项目")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建项目的文件夹📁；")])]),s._v(" "),a("li",[a("p",[s._v("初始化项目：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ npm init\n$ npm init -y # 直接生成pakage.json文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"安装依赖-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖-install"}},[s._v("#")]),s._v(" 安装依赖  "),a("code",[s._v("install")])]),s._v(" "),a("ol",[a("li",[s._v("使用  "),a("code",[s._v("npm install")]),s._v("  安装依赖包的最新版，到  "),a("code",[s._v("项目目录/node_modules")]),s._v("  下：")])]),s._v(" "),a("ul",[a("li",[s._v("安装会自动在项目目录下添加  "),a("code",[s._v("pakage-lock.json")]),s._v("  文件，帮助锁定安装包的版本；")]),s._v(" "),a("li",[s._v("会自动在  "),a("code",[s._v("package.json")]),s._v("  文件中，依赖包会被添加到 dependencies 节点下；")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ npm install jquery\n$ npm install jquery@2.1.x # 安装特定的版本\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[s._v("devDependencies")]),s._v(" 节点："),a("strong",[s._v("开发时的依赖包")]),s._v("，项目打包到生产环境的时候不包含的依赖，使用  "),a("code",[s._v("-D")]),s._v("  参数将依赖添加到 devDependencies 节点：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ npm install --save-dev eslint\n$ npm install -D eslint\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("全局安装命令行工具  "),a("code",[s._v("-g")]),s._v("  参数：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ npm install -g webpack\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("初始化传输或者备份后的项目：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ npm install # 根据package.json中的配置下载依赖\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ npm update <包名> # 更新包\n$ npm update -g <包名> # 全局更新包\n\n$ npm uninstall <包名> # 卸载包\n$ npm uninstall -g <包名>  # 全局卸载包\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[s._v("#")]),s._v(" "),a("code",[s._v("package.json")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("发布或者备份项目时， `node_modules` 文件夹可以不必保留，因为 `package.json` 提供了该项目的包的配置，只要运行命令：\n")])])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ npm install\n$ npm i\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("即可重新安装和生成  "),a("code",[s._v("node_modules")]),s._v("  。")]),s._v(" "),a("p",[s._v("因此，在下载 Node.js 项目后，第一个要执行的命令是  "),a("code",[s._v("npm install")]),s._v("  。")]),s._v(" "),a("p",[s._v("🔗 链接：")]),s._v(" "),a("blockquote",[a("p",[s._v("Node.js 中文官网：https://nodejs.org/zh-cn/")])])])}),[],!1,null,null,null);t.default=e.exports}}]);