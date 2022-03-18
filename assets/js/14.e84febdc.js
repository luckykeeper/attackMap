(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{594:function(t,_,v){"use strict";v.r(_);var e=v(11),s=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("本节将介绍使用 Docker 部署的方法，此使用方法尚未得到严格测试，仅在 CentOS 7 x64 进行了基本测试，不推荐在生产环境使用，如果你在使用 Docker 版中遇到了问题，请提交 issues ，我会尝试修复这些问题")])]),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("在进行 Docker 部署时，请先了解上一小节：使用源码部署")])]),v("h2",{attrs:{id:"环境准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),v("p",[t._v("推荐配置仍和源码部署一样，Fedora 35 和 CentOS7 都有进行测试，其它系统请酌情使用")]),t._v(" "),v("p",[t._v("对于 CentOS7 ，你需要添加一个 docker 源， Fedora 不需要，可以直接安装")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("yum "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils device-mapper-persistent-data lvm2\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nyum "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y docker-ce docker-ce-cli containerd.io\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("h2",{attrs:{id:"准备数据库和-nginx-服务器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#准备数据库和-nginx-服务器"}},[t._v("#")]),t._v(" 准备数据库和 Nginx 服务器")]),t._v(" "),v("p",[t._v("和上节一样，使用 Docker 部署")]),t._v(" "),v("h2",{attrs:{id:"运行前后端-docker-镜像"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行前后端-docker-镜像"}},[t._v("#")]),t._v(" 运行前后端 Docker 镜像")]),t._v(" "),v("p",[t._v("docker 部署命令非常简单，docker pull 一下就搞定了")]),t._v(" "),v("h3",{attrs:{id:"前端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),v("p",[t._v("分别提供了 DockerHub 和国内自建镜像，两个源的内容是一样的，请根据网络环境选择合适的源")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DockerHub 源，推荐")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull luckykeeper/attackmap:1.01\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 国内源（自建服务器，不推荐）")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull harbor.luckykeeper.site:12306/attackmap/attackmap:1.01\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("p",[v("strong",[t._v("环境变量")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("变量名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("pysyslog_ip")])]),t._v(" "),v("td",[t._v("127.0.0.1")]),t._v(" "),v("td",[t._v("后端 api 地址")]),t._v(" "),v("td",[t._v("必须修改为 "),v("code",[t._v("服务器ip:port")]),t._v(" 的形式，如 "),v("code",[t._v("192.168.1.2:21109")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("system_name")])]),t._v(" "),v("td",[t._v("网络安全态势展示系统")]),t._v(" "),v("td",[t._v("系统名称")]),t._v(" "),v("td",[t._v("可不修改")])])])]),t._v(" "),v("h3",{attrs:{id:"后端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[t._v("#")]),t._v(" 后端")]),t._v(" "),v("p",[t._v("同样分别提供了 DockerHub 和国内自建镜像，两个源的内容是一样的，请根据网络环境选择合适的源")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DockerHub 源，推荐")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull luckykeeper/pysysloger:1.0\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 国内源（自建服务器，不推荐）")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull harbor.luckykeeper.site:12306/attackmap/pysyslog:1.0\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("p",[v("strong",[t._v("环境变量")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("变量名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("debug")])]),t._v(" "),v("td",[t._v("False")]),t._v(" "),v("td",[t._v("调试模式")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("syslog_host")])]),t._v(" "),v("td",[t._v("0.0.0.0")]),t._v(" "),v("td",[t._v("syslog 服务器地址")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("syslog_port")])]),t._v(" "),v("td",[t._v("514")]),t._v(" "),v("td",[t._v("syslog 服务器监听 UDP 端口")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_host")])]),t._v(" "),v("td",[t._v("127.0.0.1")]),t._v(" "),v("td",[t._v("MongoDB 服务器地址")]),t._v(" "),v("td",[t._v("必须修改，填本机ip地址，如 "),v("code",[t._v("192.168.1.2")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_port")])]),t._v(" "),v("td",[t._v("27017")]),t._v(" "),v("td",[t._v("MongoDB 服务器端口")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_user")])]),t._v(" "),v("td",[t._v("root")]),t._v(" "),v("td",[t._v("MongoDB 服务器 root 账户名称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_password")])]),t._v(" "),v("td",[t._v("zr2Nzu0BIXPx2C1i")]),t._v(" "),v("td",[t._v("MongoDB 服务器 root 账户密码")]),t._v(" "),v("td",[t._v("根据实际情况修改，建议使用密码生成器生成")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_Syslog_dbName")])]),t._v(" "),v("td",[t._v("orgData")]),t._v(" "),v("td",[t._v("MongoDB 服务器原始数据数据库名称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_Syslog_col")])]),t._v(" "),v("td",[t._v("syslog")]),t._v(" "),v("td",[t._v("MongoDB 服务器原始数据 Collection 名称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_Backup_col")])]),t._v(" "),v("td",[t._v("backup")]),t._v(" "),v("td",[t._v("MongoDB 服务器备份原始数据 Collection 名称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_show_dbName")])]),t._v(" "),v("td",[t._v("show")]),t._v(" "),v("td",[t._v("MongoDB 服务器展示数据数据库名称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("MongoDB_show_col")])]),t._v(" "),v("td",[t._v("bigScreen")]),t._v(" "),v("td",[t._v("MongoDB 服务器展示数据 Collection 名称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("outputCsvName")])]),t._v(" "),v("td",[t._v("攻击IP.csv")]),t._v(" "),v("td",[t._v("输出攻击 IP 列表文件名称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("deletePeriods")])]),t._v(" "),v("td",[t._v("365")]),t._v(" "),v("td",[t._v("数据保存周期，单位“天”")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("email_sender")])]),t._v(" "),v("td",[t._v("空")]),t._v(" "),v("td",[t._v("告警邮件发件邮箱")]),t._v(" "),v("td",[t._v("按需填写")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("mail_Password")])]),t._v(" "),v("td",[t._v("空")]),t._v(" "),v("td",[t._v("告警邮件发件邮箱密码/授权码")]),t._v(" "),v("td",[t._v("按需填写")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("mail_Receiver")])]),t._v(" "),v("td",[t._v("空")]),t._v(" "),v("td",[t._v("告警邮件收件邮箱")]),t._v(" "),v("td",[t._v("按需填写")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("email_sender_name")])]),t._v(" "),v("td",[t._v("attackMap")]),t._v(" "),v("td",[t._v("告警邮件发件人昵称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("email_Receiver_name")])]),t._v(" "),v("td",[t._v("attackMapAdmin")]),t._v(" "),v("td",[t._v("告警邮件收件人昵称")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("email_smtp_server")])]),t._v(" "),v("td",[t._v("smtp.qq.com")]),t._v(" "),v("td",[t._v("发件邮箱服务器地址，smtp协议")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("email_smtp_server_port")])]),t._v(" "),v("td",[t._v("465")]),t._v(" "),v("td",[t._v("发件邮箱服务器端口，smtp协议")]),t._v(" "),v("td",[t._v("可不修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("destLocX")])]),t._v(" "),v("td",[t._v("115.506601")]),t._v(" "),v("td",[t._v("数据源所在位置经度")]),t._v(" "),v("td",[t._v("按需修改")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("destLocY")])]),t._v(" "),v("td",[t._v("38.926478")]),t._v(" "),v("td",[t._v("数据源所在位置纬度")]),t._v(" "),v("td",[t._v("按需修改")])])])]),t._v(" "),v("p",[t._v("到此，恭喜你已经成功部署本套系统！")])])}),[],!1,null,null,null);_.default=s.exports}}]);