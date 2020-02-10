---
title: トラブルシューティング
description: Everything to solve your problem
published: true
date: 2020-01-19T23:42:09.728Z
tags:
---

> 先に、**[拡張機能とアプリ](https://premid.app/downloads)**をダウンロードした状態にしてください！ 
> 
> {.is-warning}

### ページを再読み込みする
<kbd>Ctrl+R</kbd>/<kbd>F5</kbd> (Windows) か <kbd>CMD+R</kbd>(MacOS) を押してみてください。もしくはリロード（再読み込み）ボタンを押してみてください。

### ブラウザを再起動する
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) か <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) で 終了できます。 （ブラウザを再度起動する必要があります。）

### Discordのゲームアクティビティ設定を有効にする
**ユーザー設定** > **ゲームアクティビティ** ![gameactivity_edited.png](/gameactivity_edited.png)

### PreMiDのデスクトップアプリを再起動する
![quit.png](/quit.png) 再度PreMiDを起動する必要があります。

### Discordを再起動する
<kbd>Ctrl+R</kbd> (Windows) か<kbd>CMD+R</kbd> (MacOS) を 押すと、Discordが再起動します。

### Discordが管理者権限で起動していないかを確認する
これは重要です。 Discord RPCは管理者権限で起動していると動きません。

### ウイルス対策ソフトやファイアーウォールが起動してないかを確かめる
ウイルス対策ソフトやファイアウォールがアプリケーションをブロックすることがあります。主にサーバーを立てたりする時やインターネットに接続する時に検知されます。 アプリと拡張機能の間でデータを送受信するためにローカルサーバーを使用しているため、ウイルス対策ソフトやファイアーウォールがデータを渡す機能をブロックすると、PreMiDを使用できなくなります。

### 他の拡張機能をオフにする
PreMiD以外の拡張機能をオフにして、動くか見てみましょう。 もし動いたなら、問題となっている拡張機能を一つづつ探して、それをオフにしてください。

### パソコンを再起動する
I hope you know how to restart a computer...

### PreMiDの再インストール
たまにファイルが壊れていたりする場合があります… [ここで](/install)再インストールできます。

### 手動で削除する
Windowsの場合は ` C:\Users\ユーザー名\Program Files (x86)\`` `に行き、</code>`PreMiD`を削除してください。`
MacOSの場合は<code>~/users/USER/~Library/Application Support/`に行き、` PreMiD`` `を削除してください。

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### 実行しても問題が解決しませんでしたか？
Discordの[#support](https://discord.gg/PreMiD)で問題を入力してください。