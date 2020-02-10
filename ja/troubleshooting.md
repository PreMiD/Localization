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
<kbd>Ctrl+R</kbd>/<kbd>F5</kbd>(Windows)か<kbd>CMD+R</kbd>(MacOS)を押してみてください。もしくはリロード（再読み込み）ボタンを押してみてください。

### ブラウザを再起動する
<kbd>Alt</kbd>+<kbd>F4</kbd>(Windows)か<kbd>CMD</kbd>+<kbd>Q</kbd>(MacOS)で終了できます。 （ブラウザを再度起動する必要があります。）

### Discordのゲームアクティビティ設定を有効にする
**ユーザー設定** > **ゲームアクティビティ** ![gameactivity_edited.png](/gameactivity_edited.png)

### PreMiDのデスクトップアプリを再起動する
![quit.png](/quit.png) You have to restart PreMiD afterwards.

### Reload/restart Discord
Press <kbd>Strg+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Be sure Discord is running NOT as administrator
Really important. Discord RPC will not work if you run Discord as an administrator.

### Check if you have antivirus or firewall running on your computer
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows:    `C:\Users\USER\Program Files (x86)\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### That has not solved my problem
Please open a ticket in [#support](https://discord.gg/PreMiD).