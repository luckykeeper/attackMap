---
title: 使用Docker部署
date: 2022-03-18 10:52:00
updated: 2022-03-21 18:19:00
---

::: tip
本节将介绍使用 Docker 部署的方法，此使用方法尚未得到严格测试，仅在 CentOS 7 x64 进行了基本测试，不推荐在生产环境使用，如果你在使用 Docker 版中遇到了问题，请提交 issues ，我会尝试修复这些问题
:::

::: tip
在进行 Docker 部署时，请先了解上一小节：使用源码部署
:::

## Docker 部署视频

（原先打算放B站的但是没有过审，所以直接放在下面，视频挂了喊我）

<video id="video" width="560" height="315" controls="" preload="none" > <source id="mp4" src="https://oa.hbfu.edu.cn/backstage/filecenter/file/main::086e0280ed5d4acaa41ab29a99c8f3f6" type="video/mp4"> </video>

## 环境准备

推荐配置仍和源码部署一样，Fedora 35 和 CentOS 7 都有进行测试，其它系统请酌情使用

对于 CentOS 7 ，你需要添加一个 docker 源， Fedora 不需要，可以直接安装

```bash
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install -y docker-ce docker-ce-cli containerd.io
```

## 准备数据库和 Nginx 服务器

和上节一样，使用 Docker 部署

## 运行前后端 Docker 镜像

docker 部署命令非常简单，docker pull 一下就搞定了

### 前端

分别提供了 DockerHub 和国内自建镜像，两个源的内容是一样的，请根据网络环境选择合适的源

```bash
# DockerHub 源，推荐
docker pull luckykeeper/attackmap:1.01
# 国内源（自建服务器，不推荐）
docker pull harbor.luckykeeper.site:12306/attackmap/attackmap:1.01
```

**环境变量**

| 变量名称      | 默认值               | 说明          | 备注                                                      |
| ------------- | -------------------- | ------------- | --------------------------------------------------------- |
| `pysyslog_ip` | 127.0.0.1            | 后端 api 地址 | 必须修改为 `服务器ip:port` 的形式，如 `192.168.1.2:21109` |
| `system_name` | 网络安全态势展示系统 | 系统名称      | 可不修改                                                  |

### 后端

同样分别提供了 DockerHub 和国内自建镜像，两个源的内容是一样的，请根据网络环境选择合适的源

```bash
# DockerHub 源，推荐
docker pull luckykeeper/pysysloger:1.0
# 国内源（自建服务器，不推荐）
docker pull harbor.luckykeeper.site:12306/attackmap/pysyslog:1.0
```

**环境变量**

| 变量名称                 | 默认值           | 说明                                       | 备注                                     |
| ------------------------ | ---------------- | ------------------------------------------ | ---------------------------------------- |
| `debug`                  | False            | 调试模式                                   | 可不修改                                 |
| `syslog_host`            | 0.0.0.0          | syslog 服务器地址                          | 可不修改                                 |
| `syslog_port`            | 514              | syslog 服务器监听 UDP 端口                 | 可不修改                                 |
| `MongoDB_host`           | 127.0.0.1        | MongoDB 服务器地址                         | 必须修改，填本机ip地址，如 `192.168.1.2` |
| `MongoDB_port`           | 27017            | MongoDB 服务器端口                         | 可不修改                                 |
| `MongoDB_user`           | root             | MongoDB 服务器 root 账户名称               | 可不修改                                 |
| `MongoDB_password`       | zr2Nzu0BIXPx2C1i | MongoDB 服务器 root 账户密码               | 根据实际情况修改，建议使用密码生成器生成 |
| `MongoDB_Syslog_dbName`  | orgData          | MongoDB 服务器原始数据数据库名称           | 可不修改                                 |
| `MongoDB_Syslog_col`     | syslog           | MongoDB 服务器原始数据 Collection 名称     | 可不修改                                 |
| `MongoDB_Backup_col`     | backup           | MongoDB 服务器备份原始数据 Collection 名称 | 可不修改                                 |
| `MongoDB_show_dbName`    | show             | MongoDB 服务器展示数据数据库名称           | 可不修改                                 |
| `MongoDB_show_col`       | bigScreen        | MongoDB 服务器展示数据 Collection 名称     | 可不修改                                 |
| `outputCsvName`          | 攻击IP.csv       | 输出攻击 IP 列表文件名称                   | 可不修改                                 |
| `deletePeriods`          | 365              | 数据保存周期，单位“天”                     | 可不修改                                 |
| `email_sender`           | 空               | 告警邮件发件邮箱                           | 按需填写                                 |
| `mail_Password`          | 空               | 告警邮件发件邮箱密码/授权码                | 按需填写                                 |
| `mail_Receiver`          | 空               | 告警邮件收件邮箱                           | 按需填写                                 |
| `email_sender_name`      | attackMap        | 告警邮件发件人昵称                         | 可不修改                                 |
| `email_Receiver_name`    | attackMapAdmin   | 告警邮件收件人昵称                         | 可不修改                                 |
| `email_smtp_server`      | smtp.qq.com      | 发件邮箱服务器地址，smtp协议               | 可不修改                                 |
| `email_smtp_server_port` | 465              | 发件邮箱服务器端口，smtp协议               | 可不修改                                 |
| `destLocX`               | 115.506601       | 数据源所在位置经度                         | 按需修改                                 |
| `destLocY`               | 38.926478        | 数据源所在位置纬度                         | 按需修改                                 |

到此，恭喜你已经成功部署本套系统！