(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{379:function(v,_,t){"use strict";t.r(_);var n=t(3),a=Object(n.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"过渡和动画"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过渡和动画"}},[v._v("#")]),v._v(" 过渡和动画")]),v._v(" "),_("h3",{attrs:{id:"过渡-transition"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过渡-transition"}},[v._v("#")]),v._v(" "),_("strong",[v._v("过渡")]),v._v(" Transition")]),v._v(" "),_("ul",[_("li",[v._v("可以指定一个属性"),_("strong",[v._v("发生变化时的切换方式")]),v._v("；")])]),v._v(" "),_("p",[v._v("属性值：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("transition-property")]),v._v(" ：指定要执行过渡的属性：")]),v._v(" "),_("ul",[_("li",[v._v("多个属性间使用 "),_("code",[v._v(",")]),v._v("  隔开；")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("如果所有属性都需要过渡，则使用  "),_("code",[v._v("all")]),v._v("  关键字；")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("大部分属性都支持过渡效果")]),v._v("；")])]),v._v(" "),_("li",[_("p",[v._v("注意过渡时必须是"),_("strong",[v._v("从一个有效数值向另外一个有效数值进行过渡")]),v._v("；")])])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("transition-duration")]),v._v(" ：指定过渡效果的"),_("strong",[v._v("持续时间")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("时间单位：s 和 ms（1 s = 1000 ms）；")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("transition-delay")]),v._v(" ：过渡效果的延迟时间；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("transition-timing-function")]),v._v(" ：过渡的时序函数：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("linear")]),v._v(" "),_("strong",[v._v("线性匀速运动")])])]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("ease")]),v._v("  默认值，慢速开始，先加速后减速")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("ease-in")]),v._v("  加速运动")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("ease-out")]),v._v("  减速运动")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("ease-in-out")]),v._v("  先加速后减速")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("cubic-bezier()")]),v._v("  来指定时序函数  https://cubic-bezier.com")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("steps()")]),v._v("  分步执行过渡效果，可以设置第二个值：")])]),v._v(" "),_("li",[_("ul",[_("li",[_("code",[v._v("end")]),v._v(" ，在时间结束时执行过渡（默认值）")])])]),v._v(" "),_("li",[_("ul",[_("li",[_("code",[v._v("start")]),v._v(" ，在时间开始时执行过渡")])])])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("transition")]),v._v(" ：可以同时设置过渡相关的所有属性：")]),v._v(" "),_("ul",[_("li",[v._v("添加延迟，则两个时间中第一个是持续时间，第二个是延迟时间；")])])])]),v._v(" "),_("h3",{attrs:{id:"动画-animation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动画-animation"}},[v._v("#")]),v._v(" "),_("strong",[v._v("动画")]),v._v(" Animation")]),v._v(" "),_("p",[v._v("动画和过渡类似，都是可以实现一些动态的效果，不同的是：")]),v._v(" "),_("ul",[_("li",[v._v("过渡需要在"),_("strong",[v._v("某个属性发生变化时才会触发")]),v._v("；")]),v._v(" "),_("li",[v._v("动画可以"),_("strong",[v._v("自动触发动态效果")]),v._v("；")])]),v._v(" "),_("p",[v._v("设置动画效果，必须先要设置一个"),_("strong",[v._v("关键帧")]),v._v("，关键帧设置了动画执行每一个步骤：")]),v._v(" "),_("div",{staticClass:"language-css line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-css"}},[_("code",[_("span",{pre:!0,attrs:{class:"token atrule"}},[_("span",{pre:!0,attrs:{class:"token rule"}},[v._v("@keyframes")]),v._v(" test")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("    \n  "),_("span",{pre:!0,attrs:{class:"token selector"}},[v._v("from")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[v._v("margin-left")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" 0"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" \n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("    \n  "),_("span",{pre:!0,attrs:{class:"token selector"}},[v._v("to")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[v._v("margin-left")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" 900px"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br")])]),_("p",[v._v("属性值：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("animation-name")]),v._v(" ：指定动画的关键帧名称；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("animation-duration")]),v._v(" ：指定动画效果的持续时间；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("animation-delay")]),v._v(" ：动画效果的延迟，等待一段时间后在执行动画；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("animation-timing-function")]),v._v(" ：动画的时序函数；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("animation-iteration-count")]),v._v(" ： 动画执行的次数；")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("infinite")]),v._v("  无限次执行；")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("animation-direction")]),v._v(" ：指定动画运行的方向：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("normal")]),v._v("  从  "),_("code",[v._v("from")]),v._v("  向  "),_("code",[v._v("to")]),v._v("  运行， 每次执行；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("reverse")]),v._v("   从  "),_("code",[v._v("to")]),v._v("  向  "),_("code",[v._v("from")]),v._v("  运行，每次执行；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("alternate")]),v._v("  从  "),_("code",[v._v("from")]),v._v("  向  "),_("code",[v._v("to")]),v._v("  运行： "),_("strong",[v._v("重复执行动画时反向执行")]),v._v("；")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("alternate-reverse")]),v._v("  从  "),_("code",[v._v("to")]),v._v("  向  "),_("code",[v._v("from")]),v._v("  运行，重复执行动画时反向执行；")])])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("animation-play-state")]),v._v(" ：设置动画的执行状态：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("running")]),v._v("  动画执行，默认值")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("paused")]),v._v("  动画暂停")])])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("animation-fill-mode")]),v._v(" ：动画的填充模式。指定了在动画结束时元素的样式。")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("none")]),v._v("  动画执行完毕，元素回到原来位置，默认值")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("forwards")]),v._v("  动画执行完毕，元素会停止在动画结束的位置")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("backwards")]),v._v("  动画延时等待时，元素就会处于开始位置")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("both")]),v._v("  结合了  "),_("code",[v._v("forwards")]),v._v("  和  "),_("code",[v._v("backwards")])])])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);