---
title: Linux
description: 리눅스에 PreMiD 설치를 시작해봐요.
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

애플리케이션만으로는 아무것도 할 수 없기에 확장 프로그램 설치가 매우 중요합니다.

> DoomLerd의 패키지를 사용한 멍청한 유저들은 그가 말했듯 안전할 것입니다. 우리는 그것을 사용하지 않을 것을 권하지만, 원하신다면 얼마든 사용하실 수 있습니다. DoomLerd에게 여전히 멍청한 repo를 유지해준것에 감사합니다. 
> 
> {.is-warning}

## 차례

- **[정보](#about)**
  - [통계](#stats)
  - [시스템 사양](#requirements)
  - 예시 (준비중)
  - 자주 하는 질문 (준비중)
  - 빌드 (준비중)
  - [지원](#support)
  - [제작진](#credits)
  - [라이센스](#license)
- **[Snapcraft](#snapcraft)** (단순히 말해서 말이죠 : _영원히!_ ™️)
- **[포터블 AppImage](#appimage)** (_추천_)
  - [설치 방법](#appimageinstall)
  - [추가 사항](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) 기반 배포판**](#packagecloud)
- [**Debian 과 Ubuntu 기반 배포판**](#packagecloud)
- [**아치 리눅스 기반 배포판**](#arch)

<a name="about"></a>

## 정보

**PreMiD**는 디스코드 RP ( Rich Presence ) 라이브러리를 사용하여 디스코드 프로필 **게임 하는 중**란에 여러분이 웹에서 (그리고 몇몇 프로그램에서) 하고 있는 것을 쉽게 보여줄 수 있는 간단하고 설정 가능한 유틸리티입니다.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>개발</th>
    <th>총 다운로드 횟수</th>
    <th>최신 버전</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="지난 버전"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="최신 버전"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github 버전"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### 시스템 사양

공식적으로 디스코드를 실행할 수 있는 모든 [공식](https://discordapp.com/download) **앱** (웹 및 스냅 버전 제외) 에서도 PreMiD를 실행할 수 있어요.</br> 눈치 채셨을수도 있는데, 지난 몇년간 리눅스가 32비트(ia32/i686/i386/x86) 아키텍쳐의 지원을 중단하기 시작했어요. 그래서 우리도 그랬어요. 그러나, 만약 32비트를 꼭 사용해야 하신다면, 직접 이 앱을 빌드하셔서 사용하실 수 있어요.</br>저희가 Electron 엔진을 사용한 이래로 (디스코드도 이것을 사용해요!), 이 요구사항 역시 이 앱에 적용됩니다 :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

이전의 배포 버전이 지원하는지 여부를 알 수 없기에, 배포판을 최신 상태로 유지하고 **LTS (장기간 지원)** 배포 버전을 지원하는 경우, 그것을 사용하시는게 더 안정적이에요 (알파 배포판은 지양해주세요).

<a name="support"></a>

### 지원

<div>
  <a target="_blank" href="https://discord.premid.app/" title="저희 디스코드에 참여하세요!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="우리의 Discord에 참여하세요!">
  </a>
</div>

<a name="credits"></a>

### 제작진

도움을 주신 분들:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (그리고 제가 이름을 까먹은 몇몇 친구들) nightly 릴리즈에 피드백을 준 사람들
- Gentoo 빌드를 유지해주신 @apriluwu님
- 이전에 아치 유저 Repo패키지를 @SlimShadyIAm님과 naka님
- 다양한 패키지를 제공해주신 Electron 커뮤니티
- 그리고 이 프로젝트에 기여한 모든 이들

<a name="license"></a>

### 라이선스

[![FOSSA 상태](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## 포터블 AppImage

AppImage 패키지는 디스코드는 작동하지만 다른 PreMiD 패키지 (.dev, .rpm 등등)이 작동하지 않는 경우 권장됩니다.

<a name="appimageinstall"></a>

### 설치 방법

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# 이것을 더블클릭 하거나 실행하세요
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Additional notes

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

We released deb/rpm packages at our packagecloud repo. Please visit it at https://packagecloud.io/PreMiD/Linux and download your deb/rpm package or use automatic script.

For **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

For **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

If command doesn't work, download **deb/rpm** file from our packagecloud repo or override settings.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Arch Linux based distributions

[아치 사용자 레포지토리](https://aur.archlinux.org/packages/premid)를 사용하세요;</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installation instructions

```bash
# Using yay (recommended)
yay -S premid
```

```bash
# Using pakku
pakku -S premid
```

```bash
# Using trizen
trizen -S premid
```

```bash
# Using pacaur
pacaur -S premid
```

```bash
# ... you get the point
```

또는 뭘 해야할 지 안다면 [Arch User Repository](https://aur.archlinux.org/packages/premid)에서 수동 설치하세요.

<a name="archnotes"></a>

### Additional notes

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.