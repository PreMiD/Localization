---
title: Linux
description: เริ่มต้นใช้งาน PreMiD การติดตั้งบน PreMiD
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> กำลังสลับการเปิดใช้งานอัตโนมัติใน Linux พร้อมให้บริการแล้วจากเเอพเเทนส่วนขยาย {.is-warning}

การติดตั้งแอพพลิเคชั่นนั้นสำคัญมากเพราะส่วนขยายไม่สามารถทำอะไรได้เอง

## สารบัญ

- **[เกี่ยวกับ](#about)**
  - [Stats](#stats)
  - [ความต้องการ](#requirements)
  - ตัวอย่าง (เร็วๆนี้)
  - คําถามที่พบบ่อย (เร็วๆนี้)
  - Building (soon)
  - [สนับสนุน](#support)
  - [เครดิต](#credits)
  - [ใบอนุญาต](#license)
- **[Snapcraft](#snapcraft)** (_อย่าอ่านมันเลย มันยาวเกินไป_)
- **[AppImage](#portable-appimage)** (_เเนะนํา_)
  - [วิธีการติดตั้ง](#installation-instructions)
  - [หมายเหตุเพิ่มเติม:](#additional-notes)
- ** Linux (RHEL)** (เร็วๆนี้, ใช้ [ สําหรับตอนนี้ไปก่อน](#portable-appimage))
- **Debian เเละ Ubuntu ** (เร็วๆนี้, ใช้ [ สําหรับตอนนี้ไปก่อน](#portable-appimage))
- **[Arch Linux](#arch-linux-based-distributions)**
  - [วิธีการติดตั้ง](#installation-instructions-1)
  - [หมายเหตุเพิ่มเติม:](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [วิธีการติดตั้ง](#installation-instructions-2)
  - [หมายเหตุเพิ่มเติม:](#additional-notes-2)

<a name="about"></a>

## เกี่ยวกับ

**PreMiD** เป็นเรื่องง่าย, กําหนดค่าตามใจชอบด้วยการใช้ Discord RP ( Rich Presence ) ไลบรารี่ที่เเสดงสถานะที่คุณใช้อยู่ใน Discord ระหว่างคุณกําลังรับชมเว็บไซต์ต่างๆ ( บางเว็บไซต์ ) ตรงโปรไฟล์ Discord ของคุณจะขึ้นว่า **  กําลังเล่น... **

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>การปรับใช้</th>
    <th>การดาวน์โหลดทั้งหมด</th>
    <th>การเพยเเพร่ล่าสุด</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="การเพยเเพร่ล่าสุด"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### ความต้องการ

Technically every distribution that can run Discord's [official](https://discordapp.com/download) **app** ( not the web or the snap version ) can run PreMiD too;</br> As you may have noticed in the recent years, some Linux distributions started dropping support for the 32-bit (ia32/i686/i386/x86) architectures, and as a result, we did too. You can, however, try to build the app yourself if you desperately need to use it on a 32-bit distribution.</br> Since we currently use Electron as an engine (Discord does too!), its requirements also apply to this app :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### สนับสนุน

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Join our Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### เครดิต

Thanks to :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) for providing feedback on nightly releases.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### ใบอนุญาต

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Probably never, since Snap's nature blocks PreMiD from reaching Discord and the extension properly,</br> It would be appreciated if someone could do it though, any ideas or PRs are welcome.</br> P.S.: classic confinement doesn't work either so don't bother making a suggestion about it.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### วิธีการติดตั้ง

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### หมายเหตุเพิ่มเติม:

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### วิธีการติดตั้ง

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

or manually from the [Arch User Repository](https://aur.archlinux.org/packages/premid) if you know what you're doing.

<a name="archnotes"></a>

### หมายเหตุเพิ่มเติม:

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

## Gentoo Linux

Same applies to its derivatives, such as ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### วิธีการติดตั้ง

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### หมายเหตุเพิ่มเติม:

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```