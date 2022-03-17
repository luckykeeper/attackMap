(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{594:function(t,e,s){"use strict";s.r(e);var r=s(11),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("本节将介绍部署本系统前的数据源准备工作")])]),s("p",[t._v("前文提到，本系统支持 "),s("a",{attrs:{href:"https://hfish.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HFish"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://www.dptech.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DPTECH"),s("OutboundLink")],1),t._v(" 的 UMC 统一管理中心这两套系统，本节将以 "),s("a",{attrs:{href:"https://hfish.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HFish"),s("OutboundLink")],1),t._v(" 为例介绍如何准备数据源")]),t._v(" "),s("h1",{attrs:{id:"版本要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本要求"}},[t._v("#")]),t._v(" 版本要求")]),t._v(" "),s("p",[t._v("HFish: >= 2.8.2")]),t._v(" "),s("p",[t._v("DPTECH UMC 统一管理中心: 2021年12月版本")]),t._v(" "),s("h1",{attrs:{id:"部署-hfish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-hfish"}},[t._v("#")]),t._v(" 部署 HFish")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hfish.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HFish"),s("OutboundLink")],1),t._v(" 官网给出了非常详细的部署文档，我们推荐您在部署 HFish 时：")]),t._v(" "),s("ol",[s("li",[t._v("至少使用两台机器，一台管理端放在安全区，一台节点放在 DMZ 区或者用防火墙做端口转发（推荐）")]),t._v(" "),s("li",[t._v("使用 firewall-cmd 和 rich-rule 等命令做好端口安全管理")]),t._v(" "),s("li",[t._v("针对内网系统制作符合自己使用环境的自定义 WEB 蜜罐，并使用 Nginx 做适当代理")])]),t._v(" "),s("p",[t._v("如果遇到部署完成之后按照文档方法无法登录的问题，请参考这两条 issues")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/hacklcx/HFish/issues/174",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hacklcx/HFish/issues/174"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/hacklcx/HFish/issues/135",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hacklcx/HFish/issues/135"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("在部署完成后，需要像如下这样配置好 syslog 告警")]),t._v(" "),s("blockquote",[s("p",[t._v("首先进入 “告警配置->通知配置” 配置 syslog 服务器")]),t._v(" "),s("p",[s("img",{attrs:{src:"/attackMap/images/deployment/%E6%95%B0%E6%8D%AE%E6%BA%90%E5%87%86%E5%A4%87/%E9%85%8D%E7%BD%AEsyslog%E5%91%8A%E8%AD%A601.PNG",alt:"配置syslog告警01"}})]),t._v(" "),s("p",[t._v("然后配置 “告警配置->告警策略” 启用告警通道")]),t._v(" "),s("p",[s("img",{attrs:{src:"/attackMap/images/deployment/%E6%95%B0%E6%8D%AE%E6%BA%90%E5%87%86%E5%A4%87/%E9%85%8D%E7%BD%AEsyslog%E5%91%8A%E8%AD%A602.PNG",alt:"配置syslog告警02"}})])]),t._v(" "),s("h1",{attrs:{id:"部署-dptech-umc-统一管理中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-dptech-umc-统一管理中心"}},[t._v("#")]),t._v(" 部署 DPTECH UMC 统一管理中心")]),t._v(" "),s("p",[t._v("方法和上面类似，配置 DPTECH UMC 统一管理中心，设置 syslog 服务器和告警，配置完成之后你可以在 sysloger.py 模块（请打开调试模式）看到类似这样的信息")]),t._v(" "),s("blockquote",[s("p",[t._v("Syslog 原始数据: <100>Mar 17 20:04:59 2022 DPTECH %%DPX/BASIC_ATTACK/4/SRVLOG(l): log-type:basic-attack;"),s("code",[t._v("event:alert;")]),t._v("attack-name:Icmp unreach;"),s("code",[t._v("source-ip:xxx.xxx.xxx.xxx;")]),t._v("destination-ip:xxx.xxx.xxx.xxx;"),s("code",[t._v("ifname-inside:xxxxxx;")]),t._v("source-port:xxx;"),s("code",[t._v("destination-port:;")]),t._v("type:xx;"),s("code",[t._v("code:xx;")]),t._v("protocol-name:icmp;``vsys-id:xx;")])]),t._v(" "),s("p",[t._v("如果你的数据不包含 IP 的数据，请联系厂商提供技术支持")]),t._v(" "),s("p",[t._v("2021年12月版本的 DPTECH UMC 统一管理中心的登录页面入下图所示，非该版本的 DPTECH UMC 统一管理中心直接拿来对接本套系统可能会导致"),s("code",[t._v("不可预知的问题")]),t._v("，你需要参照二次开发部分进行二次开发来解决问题")]),t._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"/attackMap/images/deployment/%E6%95%B0%E6%8D%AE%E6%BA%90%E5%87%86%E5%A4%87/2021%E5%B9%B412%E6%9C%88%E7%89%88%E6%9C%ACUMC%E7%BB%9F%E4%B8%80%E7%AE%A1%E7%90%86%E4%B8%AD%E5%BF%83.PNG",alt:"2021年12月版本UMC统一管理中心"}})])])])}),[],!1,null,null,null);e.default=a.exports}}]);