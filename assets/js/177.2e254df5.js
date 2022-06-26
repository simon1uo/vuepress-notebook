(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{646:function(v,_,t){"use strict";t.r(_);var T=t(29),s=Object(T.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("blockquote",[t("p",[t("strong",[v._v("相关问题")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("什么是 HTTP / HTTPS？")]),v._v(" "),t("li",[v._v("HTTP 与 HTTPS 的区别？")]),v._v(" "),t("li",[v._v("为什么说 HTTPS 比 HTTP 安全？")]),v._v(" "),t("li",[v._v("HTTPS 协议的优点 / 缺点？")])])]),v._v(" "),t("h2",{attrs:{id:"http-https基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-https基本概念"}},[v._v("#")]),v._v(" HTTP / HTTPS 基本概念")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("HTTP ：是互联网最为广泛应用的 "),t("strong",[v._v("超文本传输协议")]),v._v("，是客户端和服务器端 "),t("strong",[v._v("请求和应答")]),v._v(" 的标准（TCP），用于从 WWW 服务器传呼文本到本地浏览器的传输协议。HTTP 以明文方式发送内容，不提供任何方式的数据加密。")]),v._v(" "),t("blockquote",[t("p",[v._v("特点：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("支持 客户端 / 服务器 模式")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("简单快速")]),v._v("。客户向服务器发送请求只需要传送 请求方法和路径。这使得 Web 服务器规模小，通信快；")]),v._v(" "),t("li",[t("strong",[v._v("灵活")]),v._v("。HTTP 允许传输任意类型的数据对象，通过请求头的  "),t("code",[v._v("Content-Type")]),v._v("  标记；")]),v._v(" "),t("li",[t("strong",[v._v("无连接")]),v._v("。每次连接只处理一个请求。服务器处理完客户的请求并受到客户的应答后，即断开连接。以节省传输时间；")]),v._v(" "),t("li",[t("strong",[v._v("无状态")]),v._v("。HTTP 协议无法根据当前的状态进行本次的请求处理。")])])])]),v._v(" "),t("li",[t("p",[v._v("HTTPS：HTTP 协议加入 SSL 层，提高 HTTP 协议的安全性。通过 SSL 证书验证服务器的身份，并为浏览器和服务器之间的通信进行加密。")]),v._v(" "),t("p",[v._v("SSL 协议位于 TCP / IP 协议与各种应用协议之间，浏览器和服务器在使用 SSL 建立连接时需要选择一组恰当的加密算法来实现安全通信。")])])]),v._v(" "),t("h2",{attrs:{id:"http-https-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-https-区别"}},[v._v("#")]),v._v(" HTTP / HTTPS 区别")]),v._v(" "),t("ul",[t("li",[v._v("HTTP 传输的数据未经加密处理，是明文传输信息的超文本传输协议；HTTPS 是具有安全性的 SSL 加密传输协议。")]),v._v(" "),t("li",[v._v("HTTP 与 HTTPS 使用不同的连接的方式。HTTP 协议的端口为 80；HTTPS 协议的端口为 443。")]),v._v(" "),t("li",[v._v("HTTP 协议是无状态的连接；HTTPS 协议是由 SSL + HTTP 协议构建的可进行加密传输和身份认证的网络协议，相比于 HTTP 协议更加安全。但是 HTTPS 需要设计加密以及多次握手，性能不如 HTTP；")])]),v._v(" "),t("h2",{attrs:{id:"https-的工作原理-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-的工作原理-流程"}},[v._v("#")]),v._v(" HTTPS 的工作原理 / 流程")]),v._v(" "),t("p",[v._v("客户端使用 HTTPS 协议方式与 Web 服务器通信时的步骤：")]),v._v(" "),t("ul",[t("li",[v._v("客户端使用 HTTPS 的 URL 访问服务器，要求 Web 服务器建立 SSL 连接；")]),v._v(" "),t("li",[v._v("Web 服务器接收到来自客户端的请求之后，会将网站的证书（包含公钥）传输给客户端；")]),v._v(" "),t("li",[v._v("客户端和 Web 服务器开始协商 SSL 连接的安全等级（加密等级）；")]),v._v(" "),t("li",[v._v("客户端浏览器通过双方协商一致的安全等级，建立 "),t("strong",[v._v("会话密钥")]),v._v("，然后通过 公钥 "),t("strong",[v._v("加密")]),v._v(" 会话密钥，并传送给网站；")]),v._v(" "),t("li",[v._v("Web 服务器通过自己的 "),t("strong",[v._v("私钥")]),v._v(" 解密出 会话密钥；")]),v._v(" "),t("li",[v._v("Web 服务器通过 "),t("strong",[v._v("会话密钥")]),v._v(" 加密与客户端之间的通信；")])]),v._v(" "),t("h2",{attrs:{id:"https-更加安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-更加安全"}},[v._v("#")]),v._v(" HTTPS 更加安全")]),v._v(" "),t("p",[v._v("HTTP 通信过程中存在问题（风险）：")]),v._v(" "),t("ul",[t("li",[v._v("使用明文通信（不加密）。（内容容易被窃听）")]),v._v(" "),t("li",[v._v("不验证通信方身份。（身份容易被伪装）")])]),v._v(" "),t("p",[v._v("SSL 层通过以下手段解决，保障通信安全：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("对称加密：保证 加密和解密 "),t("strong",[v._v("使用的密钥是同一个")]),v._v("。 解决通信过程的机密性。")])]),v._v(" "),t("li",[t("p",[v._v("非对称加密：存在公钥和私钥用来加密和解密；公钥加密后只能用私钥解密；私钥加密后只能用公钥解密。实现密钥协商。")])]),v._v(" "),t("li",[t("p",[v._v("混合加密：HTTPS 采用对称加密和非对称加密混合，保证了密钥安全；保证了密钥交换的问题；")]),v._v(" "),t("p",[v._v("发送密文的一方使用对方的公钥进行加密处理「对称的密钥」，然后对方用自己的私钥解密拿到「对称的密钥」，这样确保了交换的密钥是安全的情况下，使用对称加密方式进行通信。")])]),v._v(" "),t("li",[t("p",[v._v("摘要算法："),t("strong",[v._v("验证信息的完整性")]),v._v("。")]),v._v(" "),t("p",[v._v("是一种特殊的压缩算法，把任意长度的数据压缩成固定的长度和独一无二的摘要字符串（给数据生成指纹）。摘要算法确保了数字摘要与原文是完全一致的，只要在原文后加上摘要就能保证信息的完整性。")])]),v._v(" "),t("li",[t("p",[v._v("数字签名："),t("strong",[v._v("身份验证")]),v._v("。")]),v._v(" "),t("p",[v._v("使用私钥加密，公钥解密。签名和公钥一样完全公开，任何人都可以获取。但这个签名只有"),t("strong",[v._v("用私钥对应的公钥")]),v._v("才能解开，拿到摘要后，再比对原文验证完整性，就可以像签署文件一样证明消息确实是你发的。")])]),v._v(" "),t("li",[t("p",[v._v("CA 证书验证机构：保证了认证服务器的公开密钥的是真实有效的数字证书认证机构；服务器的公开密钥是值得信赖的。")])])]),v._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")])])}),[],!1,null,null,null);_.default=s.exports}}]);