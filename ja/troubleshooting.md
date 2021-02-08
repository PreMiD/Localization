---
title: トラブルシューティング
description: 抱えている問題を解決する方法
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> 先に、[拡張機能とアプリ](https://premid.app/downloads)をダウンロードした状態にしてください！ 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### ページを再読み込みする
<kbd>Ctrl+R</kbd>/<kbd>F5</kbd>(Windows) か、<kbd>CMD+R</kbd>(MacOS) を押してみてください。もしくはリロード（再読み込み）ボタンを押してみてください。

### Discordのアプリ版を使用する
PreMiDはブラウザ版のDiscordでは動作**しません。** [アプリ版のDiscord](https://discordapp.com/download)を使用してください。

### Discordのゲームアクティビティ設定を有効にする
**ユーザー設定** > **ゲームアクティビティ** ![gameactivity_edited.png](/gameactivity_edited.png)

### Discordが管理者権限で起動していないかを確認する
これは重要です。 Discord リッチプレゼンスは管理者権限で起動していると動きません。

### 追加設定がついているプレゼンスの場合
多くのプレゼンス（`Twitch`や`SoundCloud`など。横に歯車のマークがついているもの）は、拡張機能の問題の影響を受ける場合があります。 問題が発生すると、拡張機能が設定の既定値を取得できない状態になります。

これを解消するためには、一番上の設定を切り替えてください。 ![presencesettings.gif](/presencesettings.gif)

### ブラウザを再起動する
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) か <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) で 終了できます。 （ブラウザを再度起動する必要があります。）

### PreMiDのデスクトップアプリを再起動する
![quit.png](/quit.png) 再度PreMiDを起動する必要があります。

### Discordを再起動する
<kbd>Ctrl+R</kbd> (Windows) か <kbd>CMD+R</kbd> (MacOS) を押すと、Discordが再起動します。

### ウイルス対策ソフトやファイアーウォールが起動してないかを確かめる
ウイルス対策ソフトやファイアウォールがアプリケーションをブロックすることがあります。主にサーバーを立てたりする時やインターネットに接続する時に検知されます。 アプリと拡張機能の間でデータを送受信するためにローカルサーバーを使用しているため、ウイルス対策ソフトやファイアーウォールがデータを渡す機能をブロックすると、PreMiDを使用できなくなります。

### 他の拡張機能をオフにする
PreMiD以外の拡張機能をオフにして、動くか見てみましょう。 もし動いたなら、問題となっている拡張機能を一つづつ探して、それをオフにしてください。

### パソコンを再起動する
パソコンの再起動の仕方くらい知っていますよね…？

### PreMiDの再インストール
たまにファイルが壊れていたりする場合があります… [ここで](/install)再インストールの方法が確認できます。

### 手動で削除する
Windowsの場合は、`C:\Users\ユーザー名\AppData\Roaming\ `に行き、`PreMiD`を削除してください。 見つからない場合は、`Win+R`を押して、`%appdata%`と入力してからPreMiDを削除してください。 MacOSの場合は`~/users/USER/~Library/Application Support/`に行き、` PreMiD`` `を削除してください。

### McAfeeがPreMiDをウイルスとして検出する場合(windows)
これはMcAfeeの誤った検出であり、すでに報告済の問題です。 PreMiDをスキャンから除外するには、以下のステップを踏んでください。

> 実行するのに自信がない場合は、[#support](https://discord.premid.app/)でチケットを作ることも可能です。サポートがお手伝いします。 
> 
> {.is-warning}

1. McAfeeを開き、右上の設定アイコンをクリックします。 <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. 隔離されたアイテム(上から2番目)をクリックします。
3. Expand it, and click the `>` icon before an item with the name "settings.dat".
4. Make sure the path includes "AppData\Local\Temp\PreMiD", if so select it and press restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. After it is restored you can close the "Quarantined Items" popup, then press the settings icon again in the top right.
6. リアルタイムスキャン(上から3番目)をクリックします。
7. Expand it and click "Add file".
8. ファイルマネージャーのURLバーに "%appdata%" と入力し、Enterを押します。 <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. "PreMiD"フォルダーを開き、"PreMiD.exe"を選択して開きます。 <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfeeがファイルを無視するので、あとは起動するだけです。

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Snapcraftを使用してDiscordをダウンロードした場合、リッチプレゼンスは使えません。 You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Port binding
You should know that <strong x-id="1">PreMiD</strong> binds itself to the port <strong x-id="1">3020</strong>. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
```bash
#!/bin/bash
# Required to run as /bin/bash (if you use zsh etc. you can change it.)

# Example: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Save file and chmod it as executable `sudo chmod a+x /etc/rc.local`.
4. Restart your PC and PreMiD AppImage should launch at login.

<a name="macos"></a>

# MacOS troubleshooting
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Open installer again.

# 実行しても問題が解決しませんでしたか？
Please open a ticket in [#support](https://discord.premid.app/).