(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{565:function(v,_,t){"use strict";t.r(_);var s=t(3),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),_("h3",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[v._v("#")]),v._v(" 背景")]),v._v(" "),_("p",[v._v("最初的目标是 "),_("strong",[v._v("实现前端项目的模块化")]),v._v("，更高效管理维护项目的每一个资源。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("模块化：")]),v._v(" "),_("blockquote",[_("p",[v._v("最初，会通过文件划分的形式实现模块化，将每个功能以及相关状态数据各自单独放在不同的  "),_("code",[v._v(".js")]),v._v("  文件中。约定每个文件是一个独立的模块，使用的时候再引入到页面中。")]),v._v(" "),_("p",[v._v("这种模块的弊端非常明显，模块都是在 "),_("strong",[v._v("全局")]),v._v(" 中工作，存在大量模块的成员污染了环境，模块与模块之间没有依赖关系、维护困难、没有私有空间等问题。项目一旦变大，上述问题尤为明显。")]),v._v(" "),_("p",[v._v("随后出现了 "),_("strong",[v._v("命名空间")]),v._v(" 的方式，规定每个模块只暴露一个全局对象，然后模块的内容都挂载在这个对象中。这种方式没有解决依赖问题。")]),v._v(" "),_("p",[v._v("再后来，使用立即执行函数为模块提供私有空间，通过参数的形式作为依赖声明。")]),v._v(" "),_("p",[v._v("以上都是早起解决模块的方式，但是仍然存在一些没有解决的问题。例如，使用过  "),_("code",[v._v("script")]),v._v("  标签在页面引入这些模块的，这些模块的加载并不受代码的控制，时间一久维护起来也十分的麻烦。")])]),v._v(" "),_("p",[v._v("最理想的方式是，在页面中引入一个 JavaScript 入口文件，其余用到的模块可以通过代码控制，按需加载。")]),v._v(" "),_("p",[v._v("除了模块加载问题，还需要规定模块化的规范，目前流行的规范有："),_("strong",[v._v("CommonJS")]),v._v("、"),_("strong",[v._v("ES Module")]),v._v("。")])])]),v._v(" "),_("h3",{attrs:{id:"存在问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存在问题"}},[v._v("#")]),v._v(" 存在问题")]),v._v(" "),_("p",[v._v("现代前端开发可能会面临的问题：")]),v._v(" "),_("ul",[_("li",[v._v("需要通过模块化的方式开发；JavaScript 代码需要模块化，HTML 与 CSS 这些资源文件也会面临需要模块化的问题；")]),v._v(" "),_("li",[v._v("使用一些高级的特性提高开发效率。比如通过 ES6+、TypeScript 开发脚本逻辑，通过 Sass、Less 等方式编写 CSS 样式等；")]),v._v(" "),_("li",[v._v("监听文件的变化反映到浏览器上，提高开发效率；")]),v._v(" "),_("li",[v._v("开发完成之后需要将代码进行 压缩、合并以及其他相关的优化；")])]),v._v(" "),_("p",[v._v("而 Webpack 能解决上面的问题。")]),v._v(" "),_("h3",{attrs:{id:"webpack-的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的理解"}},[v._v("#")]),v._v(" Webpack 的理解")]),v._v(" "),_("p",[v._v("Webpack 是一个用于现代 JavaScript 应用程序的"),_("strong",[v._v("静态模块打包工具")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("静态模块：指的是开发阶段"),_("strong",[v._v("可以被 Webpack 直接引用的资源")]),v._v("（直接被获取打包进  "),_("code",[v._v("bundle.js")]),v._v("  的资源）；")]),v._v(" "),_("blockquote",[_("p",[v._v("Webpack 处理应用程序时，会在内部构造一个依赖图，此依赖图对应映射到项目所需的每个模块，不再局限  "),_("code",[v._v(".js")]),v._v("  文件，并生成一个或者多个  "),_("code",[v._v("bundle")]),v._v(" ：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/9IZQmt.png",alt:"image-20220619133639146"}})])])]),v._v(" "),_("li",[_("p",[v._v("Webpack 的能力：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("编译代码能力")]),v._v("。提高效率，解决浏览器兼容问题；")]),v._v(" "),_("li",[_("strong",[v._v("模块整合能力")]),v._v("。提高性能，可维护性，解决浏览器频繁请求文件的问题；")]),v._v(" "),_("li",[_("strong",[v._v("万物皆可模块能力")]),v._v("。项目维护性强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制。")])])])]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("参考内容")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("webpack 官网 (https://webpack.js.org/)")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);