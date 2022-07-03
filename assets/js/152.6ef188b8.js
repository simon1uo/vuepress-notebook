(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{480:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("🔗 相关链接：")]),t._v(" "),s("ul",[s("li",[t._v("📁 官方文档："),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js (vuejs.org)"),s("OutboundLink")],1),t._v(" "),s("ul",[s("li",[t._v("🇨🇳 中文文档："),s("a",{attrs:{href:"https://cn.vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js (vuejs.org)"),s("OutboundLink")],1)])])])]),t._v(" "),s("p",[t._v("🚠 实例代码仓库：https://github.com/simon1uo/vue-notes")]),t._v(" "),s("p",[t._v("Vue 是一个动态构建用户界面的渐进式 JavaScript 框架；")]),t._v(" "),s("blockquote",[s("p",[t._v("相关概念：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("渐进式： 自底向上逐层的应用；")])]),t._v(" "),s("li",[s("p",[t._v("简单应用：只需要轻量小巧的核心库；")])]),t._v(" "),s("li",[s("p",[t._v("复杂应用：可引入各式各样的 Vue 插件；")])])])]),t._v(" "),s("p",[t._v("特点：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("遵循组件化模式")]),t._v("，提高代码的复用率、更好维护；")])]),t._v(" "),s("li",[s("p",[t._v("声明式编码，无需操作 DOM，提高开发效率；（非命令式编码）")])]),t._v(" "),s("li",[s("p",[t._v("使用虚拟 DOM + Diff 算法，尽量复用 DOM 节点；")])]),t._v(" "),s("li",[s("p",[t._v("编码简洁、体积小、运行效率高，适合移动 / PC 端开发；")])]),t._v(" "),s("li",[s("p",[t._v("只关注 UI, 也可以引入其它第三方库开发项目；")]),t._v(" "),s("p",[t._v("其他 JS 框架的关联：")])]),t._v(" "),s("li",[s("p",[t._v("借鉴 Angular 的模板和数据绑定技术；")])]),t._v(" "),s("li",[s("p",[t._v("借鉴 React 的组件化和虚拟 DOM 技术；")])])]),t._v(" "),s("h2",{attrs:{id:"基础学习中使用-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础学习中使用-vue"}},[t._v("#")]),t._v(" 基础学习中使用 Vue")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("为了在学习过程中得到警告提示，使用开发版本的 Vue.js:")]),t._v(" "),s("p",[t._v("在文档中引入  "),s("code",[t._v("vue.js")]),t._v("  ：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("此处引入的是 cdn 的 Vue 2 开发环境版本。生产环境版本可以替换为  "),s("code",[t._v("https://cdn.jsdelivr.net/npm/vue@2")]),t._v(" （优化尺寸和速度）")])])]),t._v(" "),s("li",[s("p",[t._v("安装浏览器拓展 🔗 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Devtools "),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("（可选项） "),s("strong",[t._v("关闭生产环境提示")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("producitonTip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("p",[t._v("🌰 第一个 Vue 页面：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 1. 准备容器 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" hello, {{name}}, {{age}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("producitonTip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个Vue实例")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'simon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("blockquote",[s("ul",[s("li",[s("code",[t._v("el")]),t._v("   指定当前 Vue 实例为哪个容器服务，通常为 CSS 选择器；")]),t._v(" "),s("li",[s("code",[t._v("data")]),t._v("  存储数据；")])])]),t._v(" "),s("h3",{attrs:{id:"使用-vue-工作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-工作步骤"}},[t._v("#")]),t._v(" "),s("strong",[t._v("使用 Vue 工作步骤")])]),t._v(" "),s("ol",[s("li",[t._v("创建 Vue 实例，传入一个配置对象；")]),t._v(" "),s("li",[t._v("准备一个容器，内可使用特殊的 Vue 语法（如  "),s("code",[t._v("{{}}")]),t._v("  引用数据）；")]),t._v(" "),s("li",[t._v("容器内的代码被称为 "),s("strong",[t._v("Vue 模版")]),t._v("；")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),s("ul",[s("li",[t._v("一个实例只能为一个容器服务，多个实例不能接管同一个容器 ——"),s("strong",[t._v(" 容器与实例一对一")]),t._v("；")]),t._v(" "),s("li",[t._v("真实开发中"),s("strong",[t._v("只有一个")]),t._v(" Vue 实例，并且会配合着组件一起使用；")]),t._v(" "),s("li",[s("code",[t._v("{variable}")]),t._v("  中的  "),s("code",[t._v("xx")]),t._v("  要写 JavaScript "),s("strong",[t._v("表达式")]),t._v("，且  "),s("code",[t._v("variable")]),t._v("  可以自动读取到  "),s("code",[t._v("data")]),t._v("  中的所有属性；")]),t._v(" "),s("li",[t._v("一旦 "),s("code",[t._v("data")]),t._v("  中的数据发生改变，那么模板中用到该数据的地方也会"),s("strong",[t._v("自动更新")]),t._v("；")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);