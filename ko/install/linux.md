---
title: Linux
description: 리눅스로 PreMiD 설치를 시작해 봅시다.
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Linux의 자동 설치 기능을 킴으로써 이제 확장 프로그램 대신 앱에서 사용할 수 있습니다.{.is-warning}

The installation of the application is very important as the extension can not do anything by itself.

## 차례

- **[정보](#about)**
  - [Stats](#stats)
  - [Requirements](#requirements)
  - 예시 (준비중)
  - 자주 하는 질문 (준비중)
  - Building (soon)
  - [지원](#support)
  - [제작진](#credits)
  - [라이센스](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[포터블 AppImage](#portable-appimage)** (_추천_)
  - [설치 방법](#installation-instructions)
  - [추가 사항](#additional-notes)
- **Red Hat 엔터프라이즈 리눅스 (RHEL) 기반 배포판** (준비중, 지금은 [이것을](#portable-appimage) 사용하세요.)
- **데비안, 우분투 기반 배포판** (준비중, 지금은 [이것을](#portable-appimage) 사용하세요.)
- **[아치 리눅스 기반 배포판](#arch-linux-based-distributions)**
  - [설치 방법](#installation-instructions-1)
  - [추가 사항](#additional-notes-1)
- **[젠투 리눅스](#gentoo-linux)**
  - [설치 방법](#installation-instructions-2)
  - [추가 사항](#additional-notes-2)

<a name="about"></a>

## 정보

**PreMiD** is a simple, configurable utility that uses Discord's RP ( Rich Presence ) library which allows you to show what you're doing on the web ( and a few programs ) in your Discord profile as **playing status**.

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
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="최신 버전"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Technically every distribution that can run Discord's [official](https://discordapp.com/download) **app** ( not the web or the snap version ) can run PreMiD too;</br> As you may have noticed in the recent years, some Linux distributions started dropping support for the 32-bit (ia32/i686/i386/x86) architectures, and as a result, we did too. You can, however, try to build the app yourself if you desperately need to use it on a 32-bit distribution.</br> Since we currently use Electron as an engine (Discord does too!), its requirements also apply to this app :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### 지원

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="저희 디스코드에 참여하세요!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="저희 디스코드에 참여하세요!">
  </a>
</div>

<a name="credits"></a>

### 제작진

도움을 주신 분들:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (그리고 제가 이름을 까먹은 몇몇 친구들) nightly 릴리즈에 피드백을 준 사람들.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### 라이센스

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Probably never, since Snap's nature blocks PreMiD from reaching Discord and the extension properly,</br> It would be appreciated if someone could do it though, any ideas or PRs are welcome.</br> P.S.: classic confinement doesn't work either so don't bother making a suggestion about it.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## 포터블 AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### 설치 방법

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### 추가 사항

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## 아치 리눅스 기반 배포판

[아치 사용자 레포지토리](https://aur.archlinux.org/packages/premid)를 사용하세요;</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### 설치 방법

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

### 추가 사항

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## 젠투 리눅스

Same applies to its derivatives, such as ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### 설치 방법

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### 추가 사항

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```