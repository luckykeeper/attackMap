---
title: 部署概述
date: 2022-03-17 19:00:00
updated: 2022-03-17 19:00:00
---

::: tip
本节将介绍如何部署本系统，首先请先来了解本系统的基本情况和架构，这对你的部署和二次开发会很有帮助
:::

# 概述

本套系统前后端分离，前端使用 ECharts ，用 Nginx 作为服务器，使用 AJAX 向后端请求数据，后端使用 Python ，使用 Syslog 协议接收数据，并对攻击数据进行计算整理，对外暴露一个 API 供前端查询，并提供邮件告警功能。后端由 6 个组件组成，使用灵活，扩展性强。

目前本套系统已经支持了 [HFish](https://hfish.io/) 和 [DPTECH](https://www.dptech.com/) 的 UMC 统一管理中心两套系统作为数据源，如果需要使用其它数据源，只需要支持 Syslog 就可以在很短的时间内适配。记录在 sqlite 或者其它数据库的，也可以自行开发来与本系统对接。

本套系统有 Docker 和 源码部署两种方式，将会在后面的章节进行介绍。

# 架构

如下图所示

> ![README](/attackMap/images/deployment/README/架构展示.PNG)
