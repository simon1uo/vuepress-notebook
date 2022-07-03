(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{532:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("相关问题：")]),t._v(" "),s("ul",[s("li",[t._v("如果提高 CSS 的性能？")])])]),t._v(" "),s("h2",{attrs:{id:"实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),s("p",[t._v("主要有以下的方面入手：")]),t._v(" "),s("ul",[s("li",[t._v("内联首屏关键 CSS")]),t._v(" "),s("li",[t._v("异步加载 CSS")]),t._v(" "),s("li",[t._v("资源压缩")]),t._v(" "),s("li",[t._v("合理使用选择器")]),t._v(" "),s("li",[t._v("减少使用昂贵的属性")]),t._v(" "),s("li",[t._v("不要使用  "),s("code",[t._v("@import")])])]),t._v(" "),s("h3",{attrs:{id:"内联首屏关键-css-critical-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联首屏关键-css-critical-css"}},[t._v("#")]),t._v(" 内联首屏关键 CSS / Critical CSS")]),t._v(" "),s("p",[t._v("打开一个页面，页面的首要内容出现在屏幕的事件影响着用户的体验。而通过内联 CSS 关键代码能够使得浏览器在下载完 HTML 之后立刻渲染。")]),t._v(" "),s("p",[t._v("而如果外部引用 CSS 代码，只有在在解析 HTML 结构的过程中遇到了外部 CSS 文件，才会开始下载 CSS 代码，再进行渲染。")]),t._v(" "),s("p",[t._v("所以，内联使用 CSS 样式可以使渲染时间提前。")]),t._v(" "),s("p",[t._v("但是，较大的 CSS 代码不适合内联（会造成初始拥塞窗口、没有缓存），而其余的代码采取外部引用的方式。")]),t._v(" "),s("h3",{attrs:{id:"异步加载-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步加载-css"}},[t._v("#")]),t._v(" 异步加载 CSS")]),t._v(" "),s("p",[t._v("CSS 文件请求、下载、解析完成之前，CSS 会造成阻塞渲染，浏览器将不会渲染任何已处理的内容。")]),t._v(" "),s("p",[t._v("在加载内联 CSS 代码后，后面的外部引用 CSS 没必要阻塞浏览器渲染。这时可以采取异步加载的方案，主要有以下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用 JavaScript 将  "),s("code",[t._v("link")]),t._v("  标签插入到  "),s("code",[t._v("head")]),t._v("  标签的最后：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myCSS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmyCSS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),t._v("\nmyCSS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mystyles.css"')]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myCss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" docuemnt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextSibiling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("设置  "),s("code",[t._v("link")]),t._v("  标签的  "),s("code",[t._v("media")]),t._v("  属性为  "),s("code",[t._v("noexist")]),t._v(" ，浏览器会认为当前样式表不使用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完毕之后，将  "),s("code",[t._v("media")]),t._v("  的值设置为  "),s("code",[t._v("screen")]),t._v("  或者  "),s("code",[t._v("all")]),t._v(" ，从而让浏览器开始解析 CSS。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mystyle.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("noexist`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("media"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("通过  "),s("code",[t._v("rel")]),t._v("  属性将  "),s("code",[t._v("link")]),t._v("  元素标记为  "),s("code",[t._v("alternate")]),t._v("  可选样式表，也能实现浏览器的异步加载。在加载完成之后， "),s("code",[t._v("rel")]),t._v("  设置回为  "),s("code",[t._v("stylesheet")]),t._v(" ：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alternate stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mystyles.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"资源压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源压缩"}},[t._v("#")]),t._v(" 资源压缩")]),t._v(" "),s("p",[t._v("利用  "),s("code",[t._v("webpack")]),t._v(" 、 "),s("code",[t._v("gulp")]),t._v("  /  "),s("code",[t._v("grunt")]),t._v("  、 "),s("code",[t._v("rollup")]),t._v("  等模块化工具，可以将 CSS 的代码进行压缩，使得文件变小，大大降低浏览器的加载时间。")]),t._v(" "),s("h3",{attrs:{id:"合理使用-css-选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合理使用-css-选择器"}},[t._v("#")]),t._v(" 合理使用 CSS 选择器")]),t._v(" "),s("p",[t._v("CSS 的匹配规则是 "),s("strong",[t._v("从右向左")]),t._v(" 开始匹配。")]),t._v(" "),s("p",[t._v("🌰 例子 / 例如  "),s("code",[t._v("#markdown .content h3")]),t._v("  匹配的规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("先找到  "),s("code",[t._v("h3")]),t._v("  标签的元素；")]),t._v(" "),s("li",[t._v("然后去除祖先不是  "),s("code",[t._v(".content")]),t._v("  类的元素；")]),t._v(" "),s("li",[t._v("最后取出祖先不是  "),s("code",[t._v("#markdown")]),t._v("  的元素；")])]),t._v(" "),s("p",[t._v("如果嵌套的层级更多，页面中的元素更多，那么匹配所要话费的时间代价更高。所以在编写选择器时，应该遵循以下规则：")]),t._v(" "),s("ul",[s("li",[t._v("不要嵌套使用过多复杂的选择器，最好不要三层以上；")]),t._v(" "),s("li",[t._v("使用  "),s("code",[t._v("id")]),t._v("  选择器就没有必要再进行嵌套；")]),t._v(" "),s("li",[t._v("通配符  "),s("code",[t._v("*")]),t._v("  和属性选择器效率最低，避免使用；")])]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"减少使用昂贵的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少使用昂贵的属性"}},[t._v("#")]),t._v(" 减少使用昂贵的属性")]),t._v(" "),s("p",[t._v("页面发生重绘的时候，昂贵属性例如  "),s("code",[t._v("box-shadow")]),t._v("  /  "),s("code",[t._v("border-radius")]),t._v("  /  "),s("code",[t._v("filter")]),t._v("  /  "),s("code",[t._v("transparent")]),t._v("  /  "),s("code",[t._v(":nth-child")]),t._v("  等属性，会降低 "),s("strong",[t._v("浏览器的渲染性能")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"不要使用-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要使用-import"}},[t._v("#")]),t._v(" 不要使用  "),s("code",[t._v("@import")])]),t._v(" "),s("p",[t._v("CSS 样式文件有两种引入的方式，一种是  "),s("code",[t._v("link")]),t._v("  元素，另一种是  "),s("code",[t._v("@import")]),t._v(" 。 "),s("code",[t._v("@import")]),t._v("  会影响浏览器的并行下载，"),s("strong",[t._v("使得页面在加载的时候增加额外的延迟")]),t._v("，增添额外的往返耗时。")]),t._v(" "),s("p",[t._v("并且多个  "),s("code",[t._v("@import")]),t._v("  可能会导致下载顺序紊乱。")]),t._v(" "),s("p",[t._v("🌰 例子：如果一个 CSS 文件  "),s("code",[t._v("index.css")]),t._v("  中包含了以下的导入内容： "),s("code",[t._v('@import url("reset.css")')]),t._v("  ，那么浏览器就必须先把  "),s("code",[t._v("index.css")]),t._v("  下载、解析和执行后，才下载、解析和执行第二个文件  "),s("code",[t._v("reset.css")]),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("ul",[s("li",[t._v("减少重排的操作，以及减少不必要的重绘；")]),t._v(" "),s("li",[t._v("了解哪些属性可以继承而来，避免对这些属性重复编写；")]),t._v(" "),s("li",[t._v("动画或者过渡尽量使用  "),s("code",[t._v("transform")]),t._v("  和  "),s("code",[t._v("opacity")]),t._v("  ，避免使用  "),s("code",[t._v("left")]),t._v("  和  "),s("code",[t._v("top")]),t._v("  属性。")])]),t._v(" "),s("h3",{attrs:{id:"-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vue3js.cn/interview/css/css_performance.html#%E4%BA%8C%E3%80%81%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：如果要做优化，CSS 提高性能的方法有哪些？ | web 前端面试 - 面试官系列 (vue3js.cn)"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("🌟 "),s("a",{attrs:{href:"https://juejin.cn/post/6844903649605320711#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 性能优化的 8 个技巧 - 掘金 (juejin.cn)"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);