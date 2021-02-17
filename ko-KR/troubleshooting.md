---
title: 문제 해결
description: 문제를 해결하기 위한 모든 것
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> 익스텐션과 앱 **모두** 설치하셨는지 확인해주세요! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### 페이지 새로고침
새로고침 버튼을 누르는 대신 <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) 나 <kbd>CMD+R</kbd> (macOS) 를 눌러보십시오.

### 디스코드 앱을 쓰고 계신가요?
PreMiD는 디스코드 브라우저 버전에선 작동하지 **않습니다**, [이 곳](https://discord.com/download)에서 앱을 설치 할 수 있습니다.

### 설정에서 Discord 게임 활동을 활성화했는지 확인하십시오.
**사용자 설정** > **게임 활동** ![gameactivity_edited.png](/gameactivity_edited.png)

### 디스코드를 관리자 권한으로 실행하지 !마세요!
정말 중요합니다. 디스코드를 관리자 권한으로 실행할 시, 디스코드 RPC가 작동하지 않습니다.

### 프리센스 설정을 사용중이신가요?
많은 프리센스 (`Twitch`, `SoundCloud`를 포함한) 들은 익스텐션 이슈에 영향받습니다. 이 문제로 인해 익스텐션에서 설정의 기본값을 제대로 가져오지 못합니다.

이것을 해결하기 위해, 가장 먼저 하셔야 할 것들은:![presencesettings.gif](/presencesettings.gif)

### 브라우저 재시작
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) 나 <kbd>CMD</kbd>+<kbd>Q</kbd> (macOS) 는 일을 잘 합니다. (브라우저를 완벽하게 다시 시작해야 합니다.)

### PreMid 프로그램 재시작
![quit.png](/quit.png) 나중에 PreMid를 재시작 해야 합니다.

### Discord 재시작
<kbd>CTRL+R</kbd> (Windows) 또는 <kbd>CMD+R</kbd> (macOS) 을 키보드에서 눌러서 디스코드를 수동으로 재시작하세요.

### 안티바이러스 또는 방화벽을 확인해주세요.
안티바이러스 및 방화벽이 그저 인터넷에 연결하거나 서버를 생성, 호스팅 또는 연결하는 응용 프로그램을 차단하는 경우가 있습니다. 저희는 로컬 서버를 사용하여 앱과 확장 프로그램 간에 데이터를 송신하므로 앱의 데이터 전달 기능을 차단하면 PreMiD를 사용할 수 없습니다.

### 애드온 비활성화 하기
모든 애드온을 비활성화 하고, 작동하는지 확인해주세요. 만약 그렇다면, 애드온을 하나씩 활성화 한 뒤, 어떤 애드온이 PreMiD와 충돌하는지 알려주세요.

### 컴퓨터 재시작
컴퓨터 재시작 하는 방법은 아시리라 믿어요.

### PreMiD 재설치
간혹 파일에 문제가 있는 경우가 있어요... 설치와 관련된 도움말은 [여기](/install)에서 찾아보실 수 있어요.

### 수동 제거
Windows: `C:\Users\USER\AppData\Roaming\`` 에서 `PreMiD` 를 지우세요.
MacOS:`~/users/USER/~Library/Application Support/` 에서 `PreMiD 를 지우세요``.

### McAfee 백신이 PreMiD를 바이러스로 오탐하는 경우 (윈도우)
이 문제는 McAfee 의 오탐이며, 우리는 해당 이슈를 이미 제출하였습니다. 당장은 밑의 방법을 통하여 PreMiD 를 McAfee 의 탐지에서 제외할 수 있어요.

> 만약 여러분이 해당 단계를 거치기 어려운 상황이라면, 언제든지 [#support](https://discord.premid.app/) 채널에서 티켓을 만드실수 있어요. 저희의 유능한 도우미들이 여러분을 도울수있을거에요. 
> 
> {.is-warning}

1. McAfee 를 실행하고, 우측 상단에 있는 설정 아이콘을 클릭해주세요. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. " 격리된 목록 " 을 클릭해주세요 ( 우측 상단에서 두번째)
3. 해당 파일을 확장하고, " settings.dat " 전에 있는 `>` 아이콘을 클릭해주세요.
4. Restore을 누르기 전, 경로에 "AppData\Local\Temp\PreMiD" 가 있는지 확인해주세요. 만약 있다면, settings.dat 을 선택하고 Restore 버튼을 누릅니다. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. 복원후에 여러분은 " 격리된 목록 " 팝업을 종료하실수 있답니다, 그런 다음 우측 상단에 있는 설정 아이콘을 눌러주세요.
6. 위에서 세번째에 있는 " 실시간 스캔 " 을 클릭해주세요.
7. 확장하고 " 파일 추가 " 버튼을 눌러주세요.
8. 파일 경로에서, "%appdata%" 를 작성하고 엔터 키를 눌러주세요. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. "PreMiD" 폴더를 열고, "PreMiD.exe" 파일을 더블클릭해서 열어주세요. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee가 이제 저희 파일을 무시하게 될거에요. 저희의 앱을 다시 실행하면, 정상적으로 작동할거에요.

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
만약 디스코드를 Snapcraft를 통해 다운받았다면, RPC는 작동하지 않을거에요. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# 이것들로는 제 문제가 해결되지 않았습니다
[#support](https://discord.premid.app/)에서 티켓을 열어 주세요.