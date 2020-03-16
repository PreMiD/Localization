---
title: 疑难解答
description: 解决您问题的一切内容
published: true
date: 2020-01-19T23：42：09.728Z
tags:
---

> 请确保您已安装扩展 **和** 应用程序！ 
> 
> {.is-warning}

### 重新加载页面
您也可以在键盘上按 <kbd>Strg+R</kbd>/<kbd>F5</kbd> (Windows) 或 <kbd>CMD+R</kbd> (MacOS)。

### 重新启动您的浏览器
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) 或 <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) 也做了很好的工作。 (您必须再次启动您的浏览器。)

### 请确保您在Discord设置中启用了游戏状态
**用户设置** > **游戏活动** ![游戏活动编辑.png](/gameactivity_edited.png)

### 重启预设(应用程序)
![quit.png](/quit.png) 之后您必须重启PreMiD。

### 重新加载/重启 Discord
在您的键盘上按 <kbd>Strg+R</kbd> (Windows) 或 <kbd>CMD+R</kbd> (MacOS) 或手动重启 Discord。

### 请确保Discord不是作为管理员运行
真正重要。 如果您以管理员身份运行Discord，Discord RPC将无法工作。

### 检查您的计算机上是否有抗病毒或防火墙
有时抗病毒程序和防火墙正在阻止正在创建/托管服务器或仅仅连接到互联网的应用程序。 我们正在使用本地服务器来接收和传递我们应用程序和扩展之间的数据， 所以，如果您将屏蔽应用程序传递数据的能力，您可能无法使用PreMiD。

### 禁用您的插件
禁用您所有的附加组件并查看它是否正常工作。 如果是，请尝试逐步启用您的附加组件，并告诉我们哪个附加组件打破了PreMiD。

### 重新启动您的计算机
我希望你知道如何重启计算机。

### 正在重新安装 PremiD
有时文件有问题... 安装教程可在这里找到 [](/install)。

### 手动删除
Windows：    `C:\Users\USER\Program Files (x86)\`` 并删除文件夹`PreMiD`.
MacOS:`~/users/USER/~Library/Application support/`并删除文件夹`PreMiD`` 。

### 在 Ubuntu/Debian 的磁盘上
如果您是通过 Snapcraft下载Discord的，游戏状态将不会显示。 您必须在终端上执行 `sudo snap 移除Discord` 来卸载Snapcraft 版本， 下载 [Discord的 Linux 版本](https://discordapp.com/api/download?platform=linux) ([或 Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), 然后导航到您下载的 Discord 目录(通常是 `$HOME/Download`), 然后使用 `sudo dpkg -i discord-*安装包件。 eb`

### 这还没有解决我的问题
请在 [#support](https://discord.gg/PreMiD) 中打开工单。