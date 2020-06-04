---
title: Linux
description: Memulai dengan instalasi PreMiD pada Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Menyalakan auto-launch pada linux sekarang tersedia pada aplikasi bukan pada ekstensi.{.is-warning}

Pemasangan ekstensi sangat penting agar aplikasi dapat bekerja.

## Daftar Isi

- **[Tentang](#about)**
  - [Stats](#stats)
  - [Requirements](#requirements)
  - Contoh (segera)
  - FAQ (segera)
  - Building (segera)
  - [Bantuan](#support)
  - [Kredit](#credits)
  - [Lisensi](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#portable-appimage)** (_DIANJURKAN_)
  - [Petunjuk instalasi](#installation-instructions)
  - [Catatan tambahan](#additional-notes)
- **Red Hat Enterprise Linux (RHEL) based distributions** (segera, gunakan [ini](#portable-appimage) sementara)
- **Debian and Ubuntu based distributions** (segera, gunakan [ini](#portable-appimage) sementara)
- **[Arch Linux based distributions](#arch-linux-based-distributions)**
  - [Petunjuk instalasi](#installation-instructions-1)
  - [Catatan tambahan](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Petunjuk instalasi](#installation-instructions-2)
  - [Catatan tambahan](#additional-notes-2)

<a name="about"></a>

## Tentang

**PreMiD** adalah utilitas simpel yang menggunakan Discord RP (Rich Presence) yang memungkinkan anda menampilkan apa yang sedang anda lakukan di web ( dan beberapa program ) di profil Discord sebagai **playing status**.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Peluncuran</th>
    <th>Total Unduhan</th>
    <th>Rilis terbaru</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Semua rilisan"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Rilis terbaru"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Rilisan Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Secara teknis setiap distribution yang dapat menjalankan [Aplikasi ](https://discordapp.com/download)**Resmi** Discord ( bukan versi web atau versi snap ) bisa menjalankan PreMiD juga;</br> Seperti yang anda perhatikan dalam beberapa tahun terakhir, beberapa Linux distribution mulai tidak mendukung untuk architecture 32-bit (ia32/i686/i386/x86) dan alhasil, kami juga. Anda bisa mencoba untuk membangun sendiri aplikasi jika anda sangat butuh menggunakannya pada distribution 32-bit.</br> Karena kami menggunakan Electron sebagai engine (Discord juga!) kebutuhannya juga berlaku pada aplikasi berikut :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Masih belum diketahui apakah versi lama dari distribution lain mendukungnya, jadi tetap update distribution anda dan gunakan rilisan **LTS(Long-Term Support)** jika tersedia, sebab akan lebih stabil (hindari rilisan alpha).

<a name="support"></a>

### Bantuan

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Gabung ke Discord kami!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Gabung ke Discord kami!">
  </a>
</div>

<a name="credits"></a>

### Kredit

Thanks to :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) for providing feedback on nightly releases.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### Lisensi

[![Status FOSSA](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Mungkin tidak pernah, sejak sifat Snap yang menghalangi PreMiD untuk menghubungi Discord atau ekstensi dengan tepat,</br> Akan sangat dihargai jika seseorang dapat melakuknannya, ide atau PR apapun dipersilahkan.</br> P.S.: classic confinement tidak berhasil jadi tidak usah membuat saran tentang itu.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

Paket AppImage sangat disarankan jika Discord bisa bekerja tapi paket PreMiD lainnya tidak (.deb, .rpm, etc).

<a name="appimageinstall"></a>

### Petunjuk instalasi

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Klik 2 kali atau run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Catatan tambahan

Antara anda ingin mencoba PreMiD atau tidak ingin menginstalnya, ini salah satu cara terbaik, selalu up to date tapi _TIDAK MULAI BERSAMA SISTEM!_</br>Jika anda lelah dengan harus membukanya setiap waktu, gunakan paket lain (berdasar disttribution anda).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux based distributions

Gunakan [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Distribution yang didukung adalah _ini sendiri_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS dan [setiap distribution yang mendukung instal dari AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Petunjuk instalasi

```bash
# Menggunakan yay (dianjurkan)
yay -S premid
```

```bash
# Menggunakan pakku
pakku -S premid
```

```bash
# Menggunakan trizen
trizen -S premid
```

```bash
# Menggunakan pacaur
pacaur -S premid
```

```bash
# ... anda pasti mengerti
```

atau secara manual dari [Arch User Repository](https://aur.archlinux.org/packages/premid) jika anda mengerti apa yang anda lakukan.

<a name="archnotes"></a>

### Catatan tambahan

Jika distro anda menggunakan pacman, maka anda harus instal salah satu helper terlebih dahulu. Jika tidak ada, Yay dianjurkan, jalankan:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Helper AUR/Pacman lain juga bisa digunakan, tapi fungsi masing-masing berbeda jadi anda mungkin bisa menghadapi masalah saat menggunakannya.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Hal sama juga berlaku pada turunannya, seperti ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [dll](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Petunjuk instalasi

```bash
# tambahkan overlay menggunakan layman
layman -S && layman -a apriluwu
```

```bash
# Instal via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Catatan tambahan

Instalasi yang ditampilkan menggunakan layman, tersedia di repositories resmi melalui `app-portage/layman`.<br> Untuk mendapatkan update anda harus mensinkron overlay dari waktu ke waktu, bisa dilakukan dengan

```bash
layman -S
```