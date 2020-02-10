---
title: Linux
description: LinuxでPreMiDをインストールする
published: true
date: 2020-02-08T04:19:04.080Z
tags:
---

> ダウンロードする前に、お使いのPCが[必要条件](/install/requirements)を満たしているか確認してください。{.is-info}

拡張機能のみでは機能しないため、アプリのダウンロードは重要です。

# インストール
> Linux系ブラウザに対してのインストーラーはありません。 そして、公式のサポートが受けられない場合があります。 その代わりに、[Discord](https://discord.gg/premid/)で他のlinuxユーザーと情報を交換できます。{.is-info}

1. [NodeJS](https://nodejs.org/en/)をインストールする。
2. Terminalを開く。
3. Clone the repository: `git clone https://github.com/PreMiD/PreMiD.git`
4. Change the working directory: `cd PreMiD/src`
5. Install the dependencies and the application: `npm install`
6. Change the working directory: `cd ..`
7. Type: `npm run init`
8. Start the application: `npm start`

The application will start automatically. Check for the symbol in your menu bar.

> The following methods are deprecated and no longer recommended. Use at your own risk. 
> 
> {.is-warning}

## Arch Linux
If you are on Arch Linux or an Arch based distribution, PreMiD is available on the [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) under `premid`. Use your favorite package manager to grab it from there!

## Other distributions
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- If you want to uninstall PreMiD, you can run `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`.

> Do not forget to [add the **extension**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}