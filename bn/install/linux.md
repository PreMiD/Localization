---
title: Linux
description: শুরু করা যাক PreMiD ইন্সটলেশন লিনাক্সে
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

অ্যাপ্লিকেশানটির ইন্সটলেশন খুবই গুরুত্বপূর্ণ কেননা এক্সটেনশনটি নিজ থেকে কিছুই করতে পারেনা।

> Aur ইউজারগুলো যারা DoomLerd - এর প্যাকেজ ব্যবহার করে তারা নিরাপদ থাকবে যেমন তিনি বলেছেন। আমরা এটা ব্যবহার করার পরামর্শ দিচ্ছি না, কিন্তু তুমি যদি চাও তাহলে তুমি ব্যবহার করতে পারো। DoomLerd - কে ধন্যবাদ এখনো Aur রিপোজিটরি মেইনটেইন করার জন্যে। 
> 
> {.is-warning}

## সূচীপত্র

- **[পরিচিতি](#about)**
  - [পরিসংখ্যান](#stats)
  - [রিকোয়ারমেন্টগুলো](#requirements)
  - উদাহরণ (শীঘ্রই আসছে)
  - সচরাচর জিজ্ঞাস্য প্রশ্নগুলো (শীঘ্রই আসছে)
  - তৈরি করা (শীঘ্রই আসছে)
  - [সাপোর্ট](#support)
  - [কৃতিত্ব](#credits)
  - [লাইসেন্স](#license)
- **[Snapcraft](#snapcraft)** (ছোট কথায়: _কখনই না_ ™️)
- **[AppImage](#appimage)** (_পরামর্শিত_)
  - [ইন্সটলেশন নির্দেশাবলী](#appimageinstall)
  - [Additional notes](#appimagenotes)
- [**রেড হ্যাট এন্টারপ্রাইজ লিনাক্স (RHEL) ভিত্তিক ডিস্ট্রিবিউশনগুলো**](#packagecloud)
- [**Debian এবং Ubuntu ভিত্তিক ডিস্ট্রিবিউশনগুলো**](#packagecloud)
- [**Arch Linux ভিত্তিক ডিস্ট্রিবিউশনগুলো**](#arch)

<a name="about"></a>

## পরিচিতি

**PreMiD** is a simple, configurable utility that uses Discord's RP ( Rich Presence ) library which allows you to show what you're doing on the web ( and a few programs ) in your Discord profile as **playing status**.

<a name="stats"></a>

### পরিসংখ্যান

<table>
  <tr>
    <th>Deployment</th>
    <th>মোট ডাউনলোড</th>
    <th>সর্বশেষ রিলিস</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="সব রিলিসগুলো"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="সর্বশেষ রিলিস"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="গিটহাব রিলিসগুলো"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### রিকোয়ারমেন্টগুলো

Technically every distribution that can run Discord's [official](https://discordapp.com/download) **app** ( not the web or the snap version ) can run PreMiD too;</br> As you may have noticed in the recent years, some Linux distributions started dropping support for the 32-bit (ia32/i686/i386/x86) architectures, and as a result, we did too. You can, however, try to build the app yourself if you desperately need to use it on a 32-bit distribution.</br> Since we currently use Electron as an engine (Discord does too!), its requirements also apply to this app :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### সাপোর্ট

<div>
  <a target="_blank" href="https://discord.premid.app/" title="জয়েন করো আমাদের Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="জয়েন করো আমাদের Discord!">
  </a>
</div>

<a name="credits"></a>

### কৃতিত্ব

ধন্যবাদ জানাই:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) for providing feedback on nightly releases.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### লাইসেন্স

[![FOSSA স্ট্যাটাস](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### ইন্সটলেশন নির্দেশাবলী

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
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

## Arch Linux ভিত্তিক ডিস্ট্রিবিউশনগুলো

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### ইন্সটলেশন নির্দেশাবলী

```bash
# yay ব্যবহার করা (পরামর্শিত)
yay -S premid
```

```bash
# pakku ব্যবহার করা
pakku -S premid
```

```bash
# trizen ব্যবহার করা
trizen -S premid
```

```bash
# pacaur ব্যবহার করা
pacaur -S premid
```

```bash
# ... আশা করি তুমি বুঝতে পেরেছ
```

or manually from the [Arch User Repository](https://aur.archlinux.org/packages/premid) if you know what you're doing.

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