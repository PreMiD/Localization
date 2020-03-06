---
title: Linux
description: 开始在 Linux 上安装PreMiD
published: true
date: 2020-02-08T04:19:04.080Z
tags:
---

> 在继续操作之前，请确保您的系统满足所有 [要求](/install/requirements)。{.is-info}

安装应用程序非常重要，因为扩展本身无法做任何事情。

# 安装
> 此操作系统没有官方安装程序。 这意味着官方对此不予支持。 However you can exchange information with other Linux users on our [Discord server](https://discord.gg/premid/).{.is-info}

1. Install [NodeJS](https://nodejs.org/en/).
2. 打开一个终端。
3. 克隆仓库： `git clone https://github.com/PreMiD/PreMiD.git`
4. 更改工作目录： `cd PreMiD/src`
5. 安装依赖关系和应用程序： `npm install`
6. 更改工作目录： `cd ...`
7. 类型： `npm 运行 init`
8. 启动应用程序： `npm 开始`

应用程序将自动启动。 检查菜单栏中的符号。

> 以下方法被废弃，不再推荐。 使用风险自担。 
> 
> {.is-warning}

## Arch Linux
如果您处于Arch Linux或基于Arch的发行版， PreMiD 可在 [Arch Linux 存储库](https://aur.archlinux.org/packages/premid/) (AUR) 下使用 `premid`。 使用您最喜欢的软件包管理器从那里抓取它！

## 其他分配
- 安装脚本： `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit。 /install-premid | bash`, 等待安装, 双击在您的桌面上创建的 "PreMiD" 快捷键, 就是这样！
- 如果你想要卸载 PreMiD，你可以运行 `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`

> 别忘了 [添加 **扩展**](/install)。{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}