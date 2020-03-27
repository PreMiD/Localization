---
title: Linux
description: LinuxでPreMiDをインストールする
published: true
date: 2020-02-16T14:21:05.235Z
tags: 
---

> ダウンロードする前に、お使いのPCが[必要条件](/install/requirements)を満たしているか確認してください。{.is-info}

拡張機能のみでは機能しないため、アプリのダウンロードは重要です。

# インストール
> Linux系ブラウザに対してのインストーラーはありません。 そして、公式のサポートが受けられない場合があります。 その代わりに、[Discord](https://discord.gg/premid/)で他のlinuxユーザーと情報を交換できます。{.is-info}

1. [NodeJS](https://nodejs.org/en/)をインストールする。
2. Terminalを開く。
3. リポジトリーをクローンする: `git clone https://github.com/PreMiD/PreMiD.git`
4. 作業ディレクトリを変更する: `cd PreMiD/src`
5. 依存関係とアプリケーションをインストールする: `npm install`
6. 作業ディレクトリを変更する: `cd ..`
7. 入力する: `npm run init`
8. アプリケーションを起動する: `npm start`

アプリケーションは自動で起動します。 メニューバーからPreMiDのアイコンを確認してください。

> 以下の方法は非推奨で、おすすめされていません。 自己責任で利用してください。 
> 
> {.is-warning}

## Arch Linux
Arch Linux基準の環境をお使いの場合、 PreMiDは `premid` の下、 [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) で利用可能です。 お好きなパッケージマネージャーを使用して導入してください。

## その他の環境
- インストールスクリプト `wget -qO- http://bit.ly/install-premid | bash` または `curl -sL https://bit.ly/install-premid | bash` を実行した後、インストールが終わるのを待ってください。 終わったら、デスクトップ上の「PreMiD」のショートカットをダブルクリックするだけです！
- PreMiDをアンインストールしたい場合、以下のどちらかを実行してください: `wget -qO- http://bit.ly/uninstall-premid | bash` または `curl -sL https://bit.ly/uninstall-premid | bash`

> [**拡張機能を追加する**](/install)のを忘れないでください！{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}