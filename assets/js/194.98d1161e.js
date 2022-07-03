(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{522:function(t,v,s){"use strict";s.r(v);var a=s(3),_=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("blockquote",[v("ul",[v("li",[t._v("说一下对盒子模型的理解？")])])]),t._v(" "),v("h2",{attrs:{id:"盒子模型的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型的概念"}},[t._v("#")]),t._v(" 盒子模型的概念")]),t._v(" "),v("p",[t._v("对 HTML 文档进行布局的时候，浏览器的渲染引擎会根据标准之一的 CSS "),v("strong",[t._v("基础框盒模型")]),t._v(" ，将所有元素表示为一个矩形盒子。")]),t._v(" "),v("p",[t._v("标准盒子模型由四个部分组成：margins（外边距）、borders（边框）、paddings（内边距）、实际内容。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/v7CXVH.png",alt:"image-20220607133708696"}})]),t._v(" "),v("ul",[v("li",[t._v("content：实际内容，（文本或者图像）；")]),t._v(" "),v("li",[t._v("padding：内边距，清除内容周围的区域，内边距是透明的，"),v("strong",[t._v("取值不能为负")]),t._v("，受盒子的 background 属性影响。")]),t._v(" "),v("li",[t._v("border：边框，围绕元素内容的内边距的一条或者多条线，由粗细、样式、颜色三部分组成。")]),t._v(" "),v("li",[t._v("margin：外边距，在元素外常见额外的空白。")])]),t._v(" "),v("p",[t._v("CSS 盒子模型可以分成，默认情况下是 W3C 标准盒子模型：")]),t._v(" "),v("ul",[v("li",[t._v("W3C 标准盒子模型；")]),t._v(" "),v("li",[t._v("IE 怪异盒子模型。")])]),t._v(" "),v("h3",{attrs:{id:"标准盒子模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标准盒子模型"}},[t._v("#")]),t._v(" 标准盒子模型")]),t._v(" "),v("p",[t._v("盒子总宽度 = 元素宽度 width + 内边距 padding（左右）+ border 边框宽度 （左右）+ 外边距 margin （左右）；")]),t._v(" "),v("p",[t._v("盒子总高度 = 元素高度 height + 内边距 padding （上下）+ border 边框宽度（上下） + 外边距 margin（上下）；")]),t._v(" "),v("blockquote",[v("p",[t._v("所以，最终的实际盒子宽度和高度不等于 内容元素的 宽度和高度")])]),t._v(" "),v("h3",{attrs:{id:"怪异盒子模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#怪异盒子模型"}},[t._v("#")]),t._v(" 怪异盒子模型")]),t._v(" "),v("p",[t._v("与 W3C 标准盒子模型不同，这里 width /height 包含了 内边距 padding 和边框 border 的长度。")]),t._v(" "),v("p",[t._v("盒子总宽度 = width + 外边距 margin（左右）；")]),t._v(" "),v("p",[t._v("盒子总高度 = height + 外边距 margin （上下）；")]),t._v(" "),v("h2",{attrs:{id:"box-sizing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing"}},[t._v("#")]),t._v(" "),v("code",[t._v("box-sizing")])]),t._v(" "),v("p",[t._v("定义浏览器引擎如何计算一个元素的 "),v("strong",[t._v("总宽度和总高度")]),t._v("：")]),t._v(" "),v("div",{staticClass:"language-css line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box | border-box | inherit"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("ul",[v("li",[v("code",[t._v("content-box")]),t._v(" ：（默认值），表示元素的  "),v("code",[t._v("width")]),t._v("  /  "),v("code",[t._v("height")]),t._v("  不包含  "),v("code",[t._v("padding")]),t._v(" 、 "),v("code",[t._v("border")]),t._v(" ，即 W3C 的标准盒子模型；")]),t._v(" "),v("li",[v("code",[t._v("border-box")]),t._v(" ：表示元素的  "),v("code",[t._v("width")]),t._v("  /  "),v("code",[t._v("height")]),t._v("  包含  "),v("code",[t._v("padding")]),t._v("  和  "),v("code",[t._v("border")]),t._v(" ，即 怪异盒子模型。")]),t._v(" "),v("li",[v("code",[t._v("inherit")]),t._v(" ：从父元素继承  "),v("code",[t._v("box-sizing")]),t._v("  的值。")])])])}),[],!1,null,null,null);v.default=_.exports}}]);