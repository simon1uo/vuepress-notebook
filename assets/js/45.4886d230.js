(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{516:function(t,s,a){"use strict";a.r(s);var e=a(29),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" "),a("code",[t._v("position")])]),t._v(" "),a("p",[t._v("通过定位可以将元素摆放到页面的任意位置，设置  "),a("code",[t._v("position")]),t._v("  属性设置定位：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("static")]),t._v(" "),a("strong",[t._v("默认值")]),t._v("，不开启定位，元素静止；")]),t._v(" "),a("li",[a("code",[t._v("relative")]),t._v(" ：相对定位；")]),t._v(" "),a("li",[a("code",[t._v("absolute")]),t._v(" ：绝对定位；")]),t._v(" "),a("li",[a("code",[t._v("fixed")]),t._v(" ：固定定位；")]),t._v(" "),a("li",[a("code",[t._v("sticky")]),t._v(" ：粘滞定位；")])]),t._v(" "),a("h2",{attrs:{id:"相对定位-relative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对定位-relative"}},[t._v("#")]),t._v(" 相对定位  "),a("code",[t._v("relative")])]),t._v(" "),a("p",[t._v("开启相对定位后，通过 "),a("strong",[t._v("偏移量")]),t._v(" "),a("code",[t._v("offset")]),t._v("  来设置元素的位置：")]),t._v(" "),a("p",[a("strong",[t._v("定位元素的垂直方向")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("top")]),t._v(" ：定位元素和定位位置的上边距离，越大越靠下；")]),t._v(" "),a("li",[a("code",[t._v("bottom")]),t._v(" ：定位元素和定位位置的下边距离，越大越靠上；")])]),t._v(" "),a("p",[a("strong",[t._v("定位元素的水平方向")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("left")]),t._v(" ：定位元素和定位位置的左边距离，越大越靠右；")]),t._v(" "),a("li",[a("code",[t._v("right")]),t._v(" ：定位元素和定位位置的右边距离，越大越靠左；")])]),t._v(" "),a("p",[t._v("🌰 例子：")]),t._v(" "),a("p",[a("strong",[t._v("相对定位的特点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("开启相对定位以后，如果"),a("strong",[t._v("不设置偏移量元素，则元素不会发生任何变化")]),t._v("；")]),t._v(" "),a("li",[t._v("相对定位是参照于元素在文档流中的位置进行定位的（可以理解为"),a("strong",[t._v("相对于自身原始位置")]),t._v("）；")]),t._v(" "),a("li",[a("strong",[t._v("相对定位会提升元素的层级")]),t._v("（表现为可以"),a("strong",[t._v("覆盖其他元素")]),t._v("）；")]),t._v(" "),a("li",[a("strong",[t._v("相对定位不会改变元素的性质")]),t._v("：块还是块，行内还是行内；（⭐️ 行内元素可以使用相对定位）")])]),t._v(" "),a("blockquote",[a("p",[t._v("⭐️ Q1: "),a("strong",[t._v("给  "),a("code",[t._v("example")]),t._v("  中的 三个  "),a("code",[t._v("div")]),t._v("  都设置相对定位，层级关系")]),t._v("：在页面文档流中，越靠下的元素开启相对定位后，其层级越高；（没有设置层级或层级  "),a("code",[t._v("z-index")]),t._v("  设置相同值时，优先显示靠下的元素）")]),t._v(" "),a("p",[t._v("⭐️ Q2： "),a("strong",[t._v("与浮动定位对比")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("参考系：浮动的参考系是父元素；相对定位参考系是其自身；")])]),t._v(" "),a("li",[a("p",[t._v("可移动的方向：浮动只能左右移动；相对定位课上下左右移动；")])]),t._v(" "),a("li",[a("p",[t._v("影响：浮动只会影响页面布局（下方元素位置、高度塌陷）；")]),t._v(" "),a("p",[a("strong",[t._v("相对定位不会影响页面布局")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("性质不同：浮动会改变元素的性质（不再独占一行，其宽高都会被内容撑开）；相对定位不会改变元素的性质；")])]),t._v(" "),a("li",[a("p",[t._v("文字环绕：浮动不会覆盖文字；相对定位可以覆盖文字；")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("相对定位没有脱离文档流")]),t._v("；")])])]),t._v(" "),a("p",[a("strong",[t._v("浮动和相对定位都不会从父元素中移出")]),t._v("。")]),t._v(" "),a("p",[t._v("⭐️ Q3："),a("strong",[t._v("相对定位不会改变元素的性质：")])]),t._v(" "),a("p",[t._v("相比于浮动元素的特点，相对定位的元素位置发生改变以后，"),a("strong",[t._v("布局并没有产生影响")]),t._v("，因为它的肉体（结构）仍然占据着原来的那个位置。只是其灵魂（内容）发生了移动。")])]),t._v(" "),a("h2",{attrs:{id:"绝对定位-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位-absolute"}},[t._v("#")]),t._v(" 绝对定位  "),a("code",[t._v("absolute")])]),t._v(" "),a("p",[a("code",[t._v("position")]),t._v("  属性值为 "),a("code",[t._v("absolute")]),t._v(" ：")]),t._v(" "),a("p",[a("strong",[t._v("绝对定位的特点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("不设置偏移量，元素的位置不会发生变化；")]),t._v(" "),a("li",[a("strong",[t._v("开启绝对定位后，元素会从文档流中脱离；")])]),t._v(" "),a("li",[a("strong",[t._v("绝对定位会改变元素的性质")]),t._v("：行内变成块，块的宽高被内容撑开（与相对定位相反）；")]),t._v(" "),a("li",[a("strong",[t._v("绝对定位会使元素提升一个层级")]),t._v("；")]),t._v(" "),a("li",[t._v("参考系：绝对定位元素是"),a("strong",[t._v("相对于其包含块进行定位的")]),t._v("（与相对定位不同）")])]),t._v(" "),a("p",[a("strong",[t._v("包含块")]),t._v(" Containing Block")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("包含块就是"),a("strong",[t._v("离当前元素最近的开启了定位的祖先块元素")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("如果所有的祖先元素都没有开启定位，则 HTML 根元素就是它的包含块；")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 如果box1开启定位，则box2的包含块是box1，否则就是body --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 如果box3开启定位，则em的包含块是box3，否则就是body --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("（必要条件）开启定位指只要  "),a("code",[t._v("position")]),t._v("  的值不为  "),a("code",[t._v("static")]),t._v("  即可；")])])]),t._v(" "),a("p",[a("strong",[t._v("水平方向  / 垂直的布局")])]),t._v(" "),a("p",[t._v("利用包含块，子元素在父元素內实现水平方向垂直方向的居中；")]),t._v(" "),a("ul",[a("li",[t._v("水平布局等式： "),a("code",[t._v("left + margin-left + border-left + padding-left + width + padding-right + border-right + margin-right + right = 其父元素的宽度")]),t._v(" ；")]),t._v(" "),a("li",[t._v("垂直布局等式： "),a("code",[t._v("top + margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom + top = 其父元素的高度")]),t._v(" ；")]),t._v(" "),a("li",[t._v("只是在没有 "),a("code",[t._v("auto")]),t._v("  时，会自动调整 "),a("code",[t._v("top")]),t._v(" / "),a("code",[t._v("bottom")]),t._v(" / "),a("code",[t._v("left")]),t._v(" / "),a("code",[t._v("right")]),t._v(" ；")])]),t._v(" "),a("p",[t._v("🌰 例子：")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"position-example-2 absolute element-align",src:"https://codepen.io/simon1uo/embed/bGrNXBv?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/simon1uo/pen/bGrNXBv"}},[t._v("\n  position-example-2 absolute element-align")]),t._v(" by simon1uo ("),a("a",{attrs:{href:"https://codepen.io/simon1uo"}},[t._v("@simon1uo")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h2",{attrs:{id:"固定定位-fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定定位-fixed"}},[t._v("#")]),t._v(" 固定定位  "),a("code",[t._v("fixed")])]),t._v(" "),a("p",[t._v("将 position "),a("code",[t._v("属性设置为")]),t._v("  fixed；")]),t._v(" "),a("p",[a("strong",[t._v("固定定位的特点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("大部分特点都和绝对定位一样；")]),t._v(" "),a("li",[t._v("固定定位永远参照于 ** 浏览器的可视窗口（viewport）** 进行定位，不会随网页的滚动条滚动 ——"),a("strong",[t._v(" 置顶")]),t._v("于可视窗口；")])]),t._v(" "),a("p",[t._v("🌰 例子：")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"position-example-3 fixed",src:"https://codepen.io/simon1uo/embed/ZEJbLJJ?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/simon1uo/pen/ZEJbLJJ"}},[t._v("\n  position-example-3 fixed")]),t._v(" by simon1uo ("),a("a",{attrs:{href:"https://codepen.io/simon1uo"}},[t._v("@simon1uo")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h3",{attrs:{id:"粘滞定位-sticky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#粘滞定位-sticky"}},[t._v("#")]),t._v(" 粘滞定位  "),a("code",[t._v("sticky")])]),t._v(" "),a("p",[a("code",[t._v("position")]),t._v("  属性设置为  "),a("code",[t._v("sticky")]),t._v(" ；")]),t._v(" "),a("p",[t._v("粘滞定位的特点：")]),t._v(" "),a("ul",[a("li",[t._v("该元素是根据文档流进行定位的，即相对于包含块进行偏移；")]),t._v(" "),a("li",[t._v("偏移量不会影响任何其他元素的位置；")]),t._v(" "),a("li",[a("strong",[t._v("与固定定位相似，但粘滞定位可以在元素达到魔偶个位置时固定")]),t._v("；（不常置顶）；")]),t._v(" "),a("li",[t._v("粘性元素总是 “粘” 到其最近的具有 “滚动机制” 的祖先元素（当  "),a("code",[t._v("overflow")]),t._v("  为  "),a("code",[t._v("hidden")]),t._v("  、  "),a("code",[t._v("scroll")]),t._v("  、  "),a("code",[t._v("auto")]),t._v("  、  "),a("code",[t._v("overlay")]),t._v("  时创建），即使该祖先不是最近的实际滚动祖先元素；")])]),t._v(" "),a("p",[t._v("🌰 例子 / 导航栏：")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"float-example-4 navbar",src:"https://codepen.io/simon1uo/embed/BadyKdX?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/simon1uo/pen/BadyKdX"}},[t._v("\n  float-example-4 navbar")]),t._v(" by simon1uo ("),a("a",{attrs:{href:"https://codepen.io/simon1uo"}},[t._v("@simon1uo")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h3",{attrs:{id:"元素层级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素层级"}},[t._v("#")]),t._v(" 元素层级")]),t._v(" "),a("p",[t._v("对于开启了定位元素，可以通过  "),a("code",[t._v("z-index")]),t._v("  属性来指定元素的层级：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("z-index")]),t._v("   需要一个整数作为参数，值越大元素的层级越高，元素的层级越高越优先显示；")]),t._v(" "),a("li",[t._v("如果元素的层级一样，则优先显示靠下的元素；")]),t._v(" "),a("li",[t._v("祖先的元素的层级再高，也不会盖住后代元素；")])]),t._v(" "),a("p",[a("strong",[t._v("浮动定位使用层级定位")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("给  "),a("code",[t._v("float")]),t._v("  设置  "),a("code",[t._v("z-index")]),t._v("  无效；")])]),t._v(" "),a("li",[a("p",[t._v("默认情况，没有设置  "),a("code",[t._v("z-index")]),t._v("  或设置  "),a("code",[t._v("z-index")]),t._v("  大小 ≥ 0 时，"),a("strong",[t._v("浮动层级没有定位的层级高")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("设置  "),a("code",[t._v("z-index")]),t._v("  < 0 时，"),a("strong",[t._v("浮动层级可以定位的层级高")]),t._v("；")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);