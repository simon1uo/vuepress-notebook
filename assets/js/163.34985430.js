(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{634:function(v,_,e){"use strict";e.r(_);var o=e(29),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("传统方式编写网页应用中存在的问题：")]),v._v(" "),e("ul",[e("li",[v._v("依赖关系混乱、不好维护；")]),v._v(" "),e("li",[v._v("代码复用率不高；")])]),v._v(" "),e("h3",{attrs:{id:"模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[v._v("#")]),v._v(" 模块")]),v._v(" "),e("ul",[e("li",[v._v("理解：向外"),e("strong",[v._v("提供特定功能")]),v._v("的 JavaScript 的程序，一般是一个 JavaScript 文件；")]),v._v(" "),e("li",[v._v("作用：复用、简化 JavaScript 的编写，提高 JavaScript 运行的效率；")])]),v._v(" "),e("h3",{attrs:{id:"组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[v._v("#")]),v._v(" 组件")]),v._v(" "),e("ul",[e("li",[v._v("理解：实现"),e("strong",[v._v("局部")]),v._v("（最小化、特定、可嵌套使用）功能效果的"),e("strong",[v._v("代码和资源")]),v._v("的集合（HTML/CSS/JavaScript 等静态资源）")]),v._v(" "),e("li",[v._v("作用：复用编码、简化项目编码，提高网页应用运行效率；")])]),v._v(" "),e("h3",{attrs:{id:"模块化和组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化和组件化"}},[v._v("#")]),v._v(" 模块化和组件化")]),v._v(" "),e("ul",[e("li",[v._v("当应用中的 JavaScript 以模块来编写，则这个应用是模块化应用；")]),v._v(" "),e("li",[v._v("当应用中的功能都是多组件方式来编写的，则这个应用是一个组件化应用；")])]),v._v(" "),e("h2",{attrs:{id:"非单文件组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非单文件组件"}},[v._v("#")]),v._v(" 非单文件组件")]),v._v(" "),e("ul",[e("li",[v._v("理解：一个文件中包含有 n 个组件；")])]),v._v(" "),e("p",[v._v("⭐️ "),e("strong",[v._v("使用组件的三大步骤")]),v._v("：")]),v._v(" "),e("ol",[e("li",[e("strong",[v._v("定义组件")]),v._v("（创建组件）")]),v._v(" "),e("li",[e("strong",[v._v("注册组件")]),v._v("（通常在局部注册）")]),v._v(" "),e("li",[e("strong",[v._v("使用组件")]),v._v("（在模版中写组件标签）")])]),v._v(" "),e("p",[v._v("定义组件的方法：")]),v._v(" "),e("ul",[e("li",[v._v("语法： "),e("code",[v._v("Vue.extend(options)")]),v._v("  创建， "),e("code",[v._v("options")]),v._v("  和  "),e("code",[v._v("new Vue(options)")]),v._v("  时配置的几乎一样但有区别；")]),v._v(" "),e("li",[e("code",[v._v("options")]),v._v("  配置项的区别：\n"),e("ul",[e("li",[e("code",[v._v("el")]),v._v("  ：一定不可以写  "),e("code",[v._v("el")]),v._v("  配置，最终所有的组件都要经过一个  "),e("code",[v._v("vm")]),v._v("  实例管理，由  "),e("code",[v._v("vm")]),v._v("  决定服务哪个容器；")]),v._v(" "),e("li",[e("code",[v._v("data")]),v._v(" ：一定要写成"),e("strong",[v._v("函数式")]),v._v("，以使每个示例可以维护一份被返回的对象"),e("strong",[v._v("独立的拷贝")]),v._v("，避免组件被复用时数据存在引用关系；")])])]),v._v(" "),e("li",[v._v("使用  "),e("code",[v._v("template")]),v._v("  配置组件的结构；")])]),v._v(" "),e("p",[v._v("注册组件的方法：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("局部注册")]),v._v("语法：  "),e("code",[v._v("new Vue({components:{}})")]),v._v("  中  "),e("code",[v._v("components")]),v._v("  配置项配置组件；")]),v._v(" "),e("li",[v._v("全局注册（少用）语法： "),e("code",[v._v("Vue.component('组件名',组件)")]),v._v(" ;")])]),v._v(" "),e("p",[v._v("使用组件（编写组件标签）： "),e("code",[v._v("<组件名></组件名>")]),v._v(" ；")]),v._v(" "),e("p",[v._v("⚠️ "),e("strong",[v._v("组件注意事项")]),v._v("：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("组件的命名：")]),v._v(" "),e("ul",[e("li",[v._v("一个单词组成：可以首字母小写或则大写；")]),v._v(" "),e("li",[v._v("多个单词组成：\n"),e("ul",[e("li",[e("strong",[v._v("使用 kebab-case 命名法： "),e("code",[v._v("my-school")])]),v._v("；")]),v._v(" "),e("li",[v._v("使用大驼峰命名法： "),e("code",[v._v("MySchool")]),v._v("  （⚠️需要 Vue 脚手架支持）；")])])]),v._v(" "),e("li",[v._v("组件命名尽可能回避 HTML 中已有的元素名称；")]),v._v(" "),e("li",[v._v("可以使用  "),e("code",[v._v("name")]),v._v("  配置指定组件在开发者工具中显示的名称；")])])]),v._v(" "),e("li",[e("p",[v._v("组件标签的用法：")]),v._v(" "),e("ul",[e("li",[v._v("双标签写法： "),e("code",[v._v("<school></school>")])]),v._v(" "),e("li",[v._v("单标签闭合写法：  "),e("code",[v._v("<school/>")]),v._v("  （⚠️不能使用在脚手架中，否则在该组件后的后续组件不能渲染）")])])]),v._v(" "),e("li",[e("p",[v._v("组件的简写方法：")]),v._v(" "),e("div",{staticClass:"language-vue line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[v._v("const school = Vue.extend({options}) \n// ==> \nconst school = { options }\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])])])]),v._v(" "),e("p",[v._v("⭐️ 关于"),e("strong",[v._v("组件本质  "),e("code",[v._v("VueComponent")]),v._v(" ：")])]),v._v(" "),e("ul",[e("li",[v._v("以上示例如  "),e("code",[v._v("school")]),v._v("  组件本质是一个名为  "),e("code",[v._v("VueComponent")]),v._v("  的"),e("strong",[v._v("构造函数")]),v._v("，且是通过  "),e("code",[v._v("Vue.extend")]),v._v("  生成的；")]),v._v(" "),e("li",[v._v("我们只需要使用标签  "),e("code",[v._v("<school/>")]),v._v("  或者   "),e("code",[v._v("<school></school>")]),v._v("  ，Vue 解析时就会帮我们创建  "),e("code",[v._v("school")]),v._v("  组件的"),e("strong",[v._v("示例对象")]),v._v("；（即 Vue 执行  "),e("code",[v._v("new VueComponent(options）")]),v._v(" （每使用一次就会创建一次）")]),v._v(" "),e("li",[v._v("⚠️ 特别注意：每次调用  "),e("code",[v._v("Vue.extend")]),v._v("  时，返回的都是一个 "),e("code",[v._v("VueComponent")]),v._v(" ；")])]),v._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),e("p",[v._v("⭐️ 重要的内置关系 🔗 "),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1Zy4y1K7SH?p=59&spm_id_from=pageDriver",target:"_blank",rel:"noopener noreferrer"}},[v._v("尚硅谷 - Vue 重要的内置关系"),e("OutboundLink")],1),v._v("：")]),v._v(" "),e("p",[e("code",[v._v("VueComponent.prototype.__proto__ === Vue.prototype")])])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("Vue 与 "),e("strong",[v._v("VueComponent")]),v._v(" 的关系：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/jO5lE3.png",alt:"image-20211118171718169"}})])]),v._v(" "),e("li",[e("p",[v._v("⭐️ 此关系作用：让"),e("strong",[v._v("组件实例对象")]),v._v("（vc）可以访问 "),e("strong",[v._v("Vue 原型上的属性、方法")]),v._v("；")])])]),v._v(" "),e("h2",{attrs:{id:"单文件组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件"}},[v._v("#")]),v._v(" 单文件组件")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("理解： 一个文件中只包含有 1 个组件；")])]),v._v(" "),e("li",[e("p",[v._v("文件命名注意："),e("strong",[v._v("与组件命名  "),e("code",[v._v("name")]),v._v("  相同")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("🔗 "),e("strong",[v._v("基本使用")]),v._v("：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/JSvwqb.png",alt:"image-20211118175546200"}})]),v._v(" "),e("ol",[e("li",[v._v("定义组件：  "),e("code",[v._v("Component.vue")])]),v._v(" "),e("li",[v._v("汇总所有组件：  "),e("code",[v._v("App.vue")])]),v._v(" "),e("li",[v._v("入口文件  "),e("code",[v._v("main.js")]),v._v("  定义  "),e("code",[v._v("vm")]),v._v("  示例，注册  "),e("code",[v._v("App")]),v._v("  组件")]),v._v(" "),e("li",[v._v("容器  "),e("code",[v._v("index.html")])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);