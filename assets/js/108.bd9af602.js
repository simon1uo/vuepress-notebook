(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{582:function(e,t,o){"use strict";o.r(t);var s=o(29),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"浏览器事件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#浏览器事件"}},[e._v("#")]),e._v(" 浏览器事件")]),e._v(" "),o("h3",{attrs:{id:"鼠标点击足球移动"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#鼠标点击足球移动"}},[e._v("#")]),e._v(" 鼠标点击足球移动")]),e._v(" "),o("blockquote",[o("p",[e._v("点击球场中任意一点，让球在球场中移动。")]),e._v(" "),o("p",[e._v("要求：")]),e._v(" "),o("ul",[o("li",[e._v("足球的中心应该恰好在 点击时鼠标指针位置的下方；")]),e._v(" "),o("li",[e._v("保证足球不能越过球场边界；")]),e._v(" "),o("li",[e._v("页面滚动时，布局不被破坏；添加 CSS 动画；")]),e._v(" "),o("li",[e._v("代码最好适用于任何大小的球场；")])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("点击查看")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("首先选择定位足球的方法，不能使用  "),o("code",[e._v("position: fixed")]),e._v(" ，因为滚动页面会造成足球被移出球场。所以应该使用  "),o("code",[e._v("position: absolute")]),e._v("  使得定位真实可靠 ，同时应该使  "),o("code",[e._v("field")]),e._v("  自身的定位使用  "),o("code",[e._v("position: absolute")]),e._v(" ；")])]),e._v(" "),o("li",[o("p",[e._v("接下来需要指定正确的  "),o("code",[e._v("left")]),e._v("  /  "),o("code",[e._v("top")]),e._v("  偏移，应该为相对于球场的坐标。")]),e._v(" "),o("p",[e._v("以  "),o("code",[e._v("left")]),e._v("  为例：使用  "),o("code",[e._v("event.clientX")]),e._v("  获取点击位置的窗口相对坐标；要获取点击位置在球场中的相对坐标，减去球场相对于窗口的  "),o("code",[e._v("left")]),e._v("  以及 边框的宽度。同时要使足球在点击位置的中心，需要减去足球的一半宽度，使用  "),o("code",[e._v("clientWidth")]),e._v("  获取；")]),e._v(" "),o("p",[e._v("所以最终足球的  "),o("code",[e._v("left")]),e._v("  为  "),o("code",[e._v("event.clientX -fieldCoords.left - field.clientLeft - ball.offsetWidt / 2")]),e._v("  ；")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/o4ViTv.png",alt:"image-20220615194451717"}})])]),e._v(" "),o("li",[o("p",[e._v("考虑边界，如果计算出的  "),o("code",[e._v("top")]),e._v("  /  "),o("code",[e._v("left")]),e._v("  小于 0 ，则置为 0 ；超出边界则设置为 球场的边界。")])]),e._v(" "),o("li",[o("p",[e._v("最后设置  "),o("code",[e._v("ball.style.left")]),e._v("  要添加字符串单位  "),o("code",[e._v("px")]),e._v(" 。")])])]),e._v(" "),o("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"click to move football",src:"https://codepen.io/simon1uo/embed/zYReJXV?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),o("a",{attrs:{href:"https://codepen.io/simon1uo/pen/zYReJXV"}},[e._v("\n  click to move football")]),e._v(" by simon1uo ("),o("a",{attrs:{href:"https://codepen.io/simon1uo"}},[e._v("@simon1uo")]),e._v(")\n  on "),o("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")])]),e._v(" "),o("h3",{attrs:{id:"折叠菜单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#折叠菜单"}},[e._v("#")]),e._v(" 折叠菜单")]),e._v(" "),o("blockquote",[o("p",[e._v("创建一个在点击时，会展示更多内容的菜单。")])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("点击查看")]),e._v(" "),o("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"collapsible menu item",src:"https://codepen.io/simon1uo/embed/PoQVyLy?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),o("a",{attrs:{href:"https://codepen.io/simon1uo/pen/PoQVyLy"}},[e._v("\n  collapsible menu item")]),e._v(" by simon1uo ("),o("a",{attrs:{href:"https://codepen.io/simon1uo"}},[e._v("@simon1uo")]),e._v(")\n  on "),o("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")])]),e._v(" "),o("h3",{attrs:{id:"轮播图实现"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#轮播图实现"}},[e._v("#")]),e._v(" 轮播图实现")]),e._v(" "),o("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"carousel ",src:"https://codepen.io/simon1uo/embed/zYReerO?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),o("a",{attrs:{href:"https://codepen.io/simon1uo/pen/zYReerO"}},[e._v("\n  carousel ")]),e._v(" by simon1uo ("),o("a",{attrs:{href:"https://codepen.io/simon1uo"}},[e._v("@simon1uo")]),e._v(")\n  on "),o("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("点击查看")]),e._v(" "),o("ul",[o("li",[e._v("轮播图的展示可以使用 列表和图片 实现图像带。通常这样的图像带很宽，所以使用一个固定大小的  "),o("code",[e._v("<div>")]),e._v("  剪切出要当前轮博展示的部分。")]),e._v(" "),o("li",[e._v("为了使列表水平展示，需要对  "),o("code",[e._v("li")]),e._v("  使用  "),o("code",[e._v("display: inline-block")]),e._v("  。并且要消除图片之间的保留空间，对  "),o("code",[e._v("img")]),e._v("  使用  "),o("code",[e._v("display: block")]),e._v("  覆盖原生的  "),o("code",[e._v("inline")]),e._v("  属性。")]),e._v(" "),o("li",[e._v("通过移动  "),o("code",[e._v("ul")]),e._v("  来实现轮播图的滚动。可以通过  "),o("code",[e._v("transform: translateX()")]),e._v("  或者修改  "),o("code",[e._v("margin-left")]),e._v(" 。")])])]),e._v(" "),o("h2",{attrs:{id:"事件委托"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[e._v("#")]),e._v(" 事件委托")]),e._v(" "),o("h3",{attrs:{id:"实现关闭消息"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#实现关闭消息"}},[e._v("#")]),e._v(" 实现关闭消息")]),e._v(" "),o("blockquote",[o("p",[e._v("使用一个事件监听器实现。")])]),e._v(" "),o("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"message-list hide",src:"https://codepen.io/simon1uo/embed/YzegqNN?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),o("a",{attrs:{href:"https://codepen.io/simon1uo/pen/YzegqNN"}},[e._v("\n  message-list hide")]),e._v(" by simon1uo ("),o("a",{attrs:{href:"https://codepen.io/simon1uo"}},[e._v("@simon1uo")]),e._v(")\n  on "),o("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),o("h3",{attrs:{id:"树形菜单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#树形菜单"}},[e._v("#")]),e._v(" 树形菜单")]),e._v(" "),o("blockquote",[o("p",[e._v("创建一个点击可以 显示 / 隐藏 子节点的树形菜单：")]),e._v(" "),o("ul",[o("li",[e._v("只能有一个事件处理程序；")]),e._v(" "),o("li",[e._v("对节点标题以外（在空白处）的点击不会做任何处理；")])])]),e._v(" "),o("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"tree menu",src:"https://codepen.io/simon1uo/embed/GRQeZvO?default-tab=css%2Cresult&editable=true&theme-id=light",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),o("a",{attrs:{href:"https://codepen.io/simon1uo/pen/GRQeZvO"}},[e._v("\n  tree menu")]),e._v(" by simon1uo ("),o("a",{attrs:{href:"https://codepen.io/simon1uo"}},[e._v("@simon1uo")]),e._v(")\n  on "),o("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("JavaScript 将每个树节点的标题都包装到  "),o("code",[e._v("<span>")]),e._v("  中。然后可以在  "),o("code",[e._v(":hover")]),e._v("  使用 CSS 样式，并精准处理文本上的点击事件，因为  "),o("code",[e._v("<span>")]),e._v("  的宽度恰好是文本的宽度；")]),e._v(" "),o("li",[e._v("为  "),o("code",[e._v("tree")]),e._v("  的跟节点设置一个处理程序，处理  "),o("code",[e._v("<span>")]),e._v("  标题上的点击事件；")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);