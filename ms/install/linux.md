---
title: Linux
description: Mulakan pemasangan PreMiD di Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Pemasangan aplikasi amat penting kerana sambungan tidak mampu membuat apa-apa dengan sendirinya.

> Pengguna Aur yang menggunakan pakej DoomLerd sepatutnya selamat, katanya lah. Kami tidak menggalakkan anda untuk menggunakannya, tetapi anda boleh guna jika ingin guna. Terima kasih DoomLerd kerana masih menguruskan repo aur. 
> 
> {.is-warning}

## Jadual Kandungan

- **[Perihalan](#about)**
  - [Statistik](#stats)
  - [Requirements](#requirements)
  - Contoh (akan datang)
  - Soalan Lazim (akan datang)
  - Cara Bina (akan datang)
  - [Sokongan](#support)
  - [Penghargaan](#credits)
  - [Lesen](#license)
- **[Snapcraft](#snapcraft)** (Rumusan : _tidak akan wujud_ ™️)
- **[AppImage Mudah Alih](#appimage)** (_DISYORKAN_)
  - [Arahan pemasangan](#appimageinstall)
  - [Nota tambahan](#appimagenotes)
- [**Edaran berasaskan Red Hat Enterprise Linux (RHEL)**](#packagecloud)
- [**Edaran berasaskan Debian dan Ubuntu**](#packagecloud)
- [**Edaran berasaskan Arch Linux**](#arch)

<a name="about"></a>

## Perihalan

**PreMiD** ialah utiliti yang mudah, mampu ditataraja yang menggunakan pustaka RP (Rich Presence) milik Discord yang membolehkan anda menunjukkan apa anda buat di sesawang (dan beberapa atur cara lain) ke dalam profil Discord anda sebagai **status main**.

<a name="stats"></a>

### Statistik

<table>
  <tr>
    <th>Pengerahan</th>
    <th>Jumlah muat turun</th>
    <th>Terbitan terbaru</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Semua terbitan"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Terbitan terbaru"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Terbitan Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Secara teknikalnya semua edaran yang mampu menjalankan **aplikasi** [rasmi](https://discordapp.com/download) Discord ( bukan versi web atau snap ) juga boleh menjalankan PreMiD;</br> Seperti yang anda perasan dalam tahun kebelakangan ini, sesetengah edaran Linux mula menamatkan sokongan seni bina 32-bit (ia32/i686/i386/x86), dan oleh sebab itu, kami pun membuat perkara yang sama. Namun begitu, anda boleh cuba membina aplikasi ini sendiri jika anda amat perlu menggunakannya di edaran 32-bit.</br> Oleh kerana kami menggunakan Electron sebagai enjinnya ketika ini (Discord pun sama!), keperluannya juga terpakai untuk aplikasi ini:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Kami tidak tahu sama ada versi lama edaran lain menyokongnya atau tidak, jadi sentiasa kemas kini edara anda dan gunakan terbitan **LTS (Long-Term Support / Sokongan Jangka Panjang)** jika edaran anda menawarkan terbitan tersebut, kerana ianya lebih stabil (elakkan terbitan alfa).

<a name="support"></a>

### Sokongan

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Sertai Discord kami!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Sertai Discord kami!">
  </a>
</div>

<a name="credits"></a>

### Penghargaan

Terima kasih kepada :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (dan beberapa orang lain yang saya lupa namanya) kerana memberi maklumbalas untuk terbitan saban malam.
- @apriluwu kerana menyelenggara binaan Gentoo
- @SlimShadyIAm dan naka kerana pernah menyelenggara pakej Repositori Pengguna Arch
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### Lesen

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### Arahan pemasangan

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Nota tambahan

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

## Edaran berasaskan Arch Linux

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Arahan pemasangan

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

### Nota tambahan

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Pembantu AUR/Pacman lain juga boleh digunakan, tetapi setiap satunya mempunyai kefungsian berlainan jadi anda mungkin mengalami masalah ketika menggunakannya.