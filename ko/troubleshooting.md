---
title: 문제 해결
description: 문제를 해결하기 위한 모든 것
published: true
date: 2021-01-03T14:12:34.320Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> 익스텐션과 앱 **모두** 설치하셨는지 확인해주세요! 
> 
> {.is-warning}

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

### 데비안 / 우분투 배포판에서의 에러
만약 디스코드를 Snapcraft를 통해 다운받았다면, RPC는 작동하지 않을거에요. Snapcraft 버전을 터미널에서 ` sudo snap remove discord `  를 통하여 삭제하고,
 에서 디스코드의 리눅스 빌드를 다운받아주세요. ([디스코드 canary도 괜찮아요.](https://discordapp.com/api/canary/download?platform=linux)), 그리고 디스코드의 설치경로로 이동해주세요. (대부분`$HOME/Downloads 에 있답니다.`), 그다음,  `sudo dpkg -i discord-*.deb`. 코드를 통해서 패키지를 설치해주세요.</p> 



### McAfee 백신이 PreMiD를 바이러스로 오탐하는 경우 (윈도우)

이 문제는 McAfee의 오탐이며, 우리는 해당 이슈를 보고해놓았어요. 당장은 밑의 방법을 통하여 PreMiD를 McAfee의 탐지에서 제외할수있어요.



> 만약 여러분이 해당 단계를 거치기 어려운 상황이라면, 언제던 [#support](https://discord.premid.app/) 채널에서 티켓을 만드실수 있어요. 저희의 유능한 도우미들이 여러분을 도울수있을거에요. 
> 
> {.is-warning}

1. McAfee 를 실행하고, 우측 상단에 있는 설정 아이콘을 클릭해주세요. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />

2. " 격리된 목록 " 을 클릭해주세요 ( 우측 상단에서 두번째)

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