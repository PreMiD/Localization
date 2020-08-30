---
title: トラブルシューティング
description: 抱えている問題を解決する方法
published: true
date: 2020-08-30T17:14:32.108Z
tags:
editor: markdown
---

> 先に、**[拡張機能とアプリ](https://premid.app/downloads)**をダウンロードした状態にしてください！ 
> 
> {.is-warning}

### Are you using the using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### ページを再読み込みする
<kbd>Ctrl+R</kbd>/<kbd>F5</kbd>(Windows) か、<kbd>CMD+R</kbd>(MacOS) を押してみてください。もしくはリロード（再読み込み）ボタンを押してみてください。

### ブラウザを再起動する
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) か <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) で 終了できます。 （ブラウザを再度起動する必要があります。）

### Discordのゲームアクティビティ設定を有効にする
**ユーザー設定** > **ゲームアクティビティ** ![gameactivity_edited.png](/gameactivity_edited.png)

### PreMiDのデスクトップアプリを再起動する
![quit.png](/quit.png) 再度PreMiDを起動する必要があります。

### Discordを再起動する
<kbd>Ctrl+R</kbd> (Windows) か <kbd>CMD+R</kbd> (MacOS) を押すと、Discordが再起動します。

### Discordが管理者権限で起動していないかを確認する
これは重要です。 Discord リッチプレゼンスは管理者権限で起動していると動きません。

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

### Ubuntu/Debian基準の環境では
Snapcraftを使用してDiscordをダウンロードした場合、リッチプレゼンスは使えません。 その場合、Snapcraft版Discordを `sudo snap remove discord` と実行してアンインストールし、[Discord Linux版](https://discordapp.com/api/download?platform=linux) (または[ Discord Canary Linux版](https://discordapp.com/api/canary/download?platform=linux)) をダウンロードした後、Discordをダウンロードした場所 (普通は`$HOME/Downloads`) に行き、 `sudo dpkg -i discord-*.deb` と実行してパッケージをインストールする必要がります。

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.gg/WvfVZ8T) and one of our Support Agents will be able to help you out! 
> 
> {.is-warning}

1. Open the McAfee application and click the settings icon in the top right. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Click "Quarantined Items" (Second from the top).
3. Expand it, and click the `>` icon before an item with the name "settings.dat".
4. Make sure the path includes "AppData\Local\Temp\PreMiD", if so select it and press restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. After it is restored you can close the "Quarantined Items" popup, then press the settings icon again in the top right.
6. Click "Real-Time Scanning" (Third from the top).
7. Expand it and click "Add file".
8. Type "%appdata%" in the URL bar of the file manager and press Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Open the "PreMiD" folder and select the "PreMiD.exe" file and click open. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee should now ignore our file, just launch our application and you should be good to go.

### 実行しても問題が解決しませんでしたか？
PreMiDのDiscordサーバー内の[#support](https://discord.premid.app/)でチケットを開いてください。