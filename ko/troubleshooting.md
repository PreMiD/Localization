---
title: 문제 해결
description: 문제를 해결하기 위한 모든 것
published: true
date: 2021-01-03T14:12:34.320Z
tags:
editor: 마크다운
dateCreated: 2020-06-11T18:03:54.865Z
---

> Make sure you have the extension **and** the application installed! 
> 
> {.is-warning}

### 페이지 새로고침
새로고침 버튼을 누르는 대신 <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) 나 <kbd>CMD+R</kbd> (macOS) 를 눌러보십시오.

### 디스코드 앱을 쓰고 계신가요?
PreMiD는 브라우저 버전에선 작동하지 **않습니다**, [이 곳](https://discord.com/download)에서 앱을 설치 할 수 있습니다.

### 설정에서 Discord 게임 활동을 활성화했는지 확인하십시오.
**사용자 설정** > **게임 활동** ![gameactivity_edited.png](/gameactivity_edited.png)

### Be sure Discord is running NOT as administrator
Really important. Discord RPC will not work if you run Discord as an administrator.

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### 브라우저 재시작
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) 나 <kbd>CMD</kbd>+<kbd>Q</kbd> (macOS) 는 일을 잘 합니다. (브라우저를 완벽하게 다시 시작해야 합니다.)

### PreMid 프로그램 재시작
![quit.png](/quit.png) 나중에 PreMid를 재시작 해야 합니다.

### Discord 재시작
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Check if you have antivirus or firewall running on your computer
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.premid.app/) and one of our Support Agents will be able to help you out! 
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

### 이것들로는 제 문제가 해결되지 않았습니다
[#support](https://discord.premid.app/)에서 티켓을 열어 주세요.