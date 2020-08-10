---
title: Linux
description: Primeiros passos com a instalação do PreMiD no Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Alternar o auto-launch no Linux está agora disponível a partir do aplicativo em vez da extensão.{.is-warning}

A instalação do aplicativo é muito importante, já que a extensão não pode fazer nada por si só.

## Tabela de Conteúdos

- **[Sobre](#about)**
  - [Estatísticas](#stats)
  - [Requisitos](#requirements)
  - Exemplos (em breve)
  - Perguntas Frequentes (em breve)
  - Construção (em breve)
  - [Suporte](#support)
  - [Créditos](#credits)
  - [Licença](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#portable-appimage)** (_RECOMENDADO_)
  - [Instruções da instalação](#installation-instructions)
  - [Notas adicionais](#additional-notes)
- **Distribuições baseadas em Red Hat Enterprise Linux (RHEL)** (em breve, use [isto](#portable-appimage) por enquanto)
- **Distribuições baseadas em Red Hat Enterprise Linux (RHEL)** (em breve, use [isto](#portable-appimage) por enquanto)
- **[Arch Linux baseadas em distribuições Linux](#arch-linux-based-distributions)**
  - [Instruções da instalação](#installation-instructions-1)
  - [Notas adicionais](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Instruções da instalação](#installation-instructions-2)
  - [Notas adicionais](#additional-notes-2)

<a name="about"></a>

## Sobre

**PreMiD** um simples, utilitário configurável que usa a biblioteca RP (Rich Presence) do Discord, que permite que você mostre o que está fazendo na web (e alguns programas) no seu perfil do Discord como **status de jogo**.

<a name="stats"></a>

### Estatísticas

<table>
  <tr>
    <th>Implementação</th>
    <th>Total de downloads</th>
    <th>Última versão</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Todas as versões"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Última versão"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Versões do Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requisitos

Tecnicamente toda distribuição que pode executar o **aplicativo** [oficial](https://discordapp.com/download) do Discord (não a versão web ou snap) também pode executar o PreMiD;</br> Como você deve ter notado nos últimos anos, algumas distribuições Linux começaram a abandonar o suporte para as arquiteturas 32-bit (ia32/i686/i386/x86), e como resultado, nós também. Você pode, no entanto, tente build o aplicativo você mesmo se você precisar desesperadamente usá-lo em uma distribuição de 32 bits.</br> Como atualmente usamos Electron como um engine (Discord também!), seus requisitos também se aplicam a este aplicativo :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Não se sabe se versões antigas de outras distribuições o suportam, por isso basta manter sua distribuição atualizada e usar versões **LTS (Long-Term Support)** se sua distribuição as oferecer, pois elas são mais estáveis (evite versões alfa).

<a name="support"></a>

### Suporte

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Junte-se ao nosso Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Junte-se ao nosso Discord!">
  </a>
</div>

<a name="credits"></a>

### Créditos

Agradecimentos para :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (e alguns outros que eu esqueci os nomes) por fornecer feedback sobre lançamentos noturnos.
- @apriluwu para manter as compilações de Gentoo
- @SlimShadyIAm e naka por manter os pacotes do Repositório do Usuário Arch
- A comunidade Electron por vários pacotes
- Qualquer outra pessoa que tenha contribuído para o projeto de alguma forma.

<a name="license"></a>

### Licença

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Provavelmente nunca, já que a natureza do Snap's bloqueia o PreMiD de se Conectar ao Discord e à extensão corretamente, Seria apreciado se alguém pudesse fazer isso, quaisquer idéias ou PRs são bem-vindas. Obs: Confinamento clássico não funciona, então não se preocupe em fazer uma sugestão sobre isso.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

O pacote AppImage é recomendado se o Discord funciona para você, mas para outros pacotes PreMiD (.deb, rpm, etc) não.

<a name="appimageinstall"></a>

### Instruções da instalação

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Notas adicionais

Se você quer experimentar o PreMiD ou simplesmente não quer instalá-lo, este é o melhor, está sempre atualizado mas _NÃO AUTO-INICIE COM O SISTEMA!_</br>Se você ficar cansado de ter que abrir cada vez, use os outros pacotes (de acordo com sua distribuição).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux baseadas em distribuições Linux

Usando o [repositório do usuário Arch](https://aur.archlinux.org/packages/premid);</br> Distribuições suportadas são _em si_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS e [todos que suportam a instalação por AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instruções da instalação

```bash
# Usando yay (recomendado)
yay -S premid
```

```bash
# Usando o pagkku
pakku -S premid
```

```bash
# Usando trizen
trizen -S premid
```

```bash
# Usando pacaur
pacaur -S premid
```

```bash
# ... você entende o ponto
```

ou manualmente do [Repositório de Usuários Arch](https://aur.archlinux.org/packages/premid) se você for um usuário experiente.

<a name="archnotes"></a>

### Notas adicionais

Se sua distribuição usa pacman, você deve instalar um dos ajudantes primeiro. Se você não tiver nenhum, é recomendado o Yay, execute :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Outros AUR/Pacman helpers também funcionam bem, embora a funcionalidade de cada um deles seja diferente para que você possa enfrentar problemas enquanto os utiliza.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

O mesmo se aplica a seus derivados, como ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc...](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Instruções da instalação

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Notas adicionais

O comando de instalação mostrado usa layman, isso está nos repositórios oficiais entre `app-portage/layman`.<br> Para obter atualizações você terá que sincronizar a overlay de tempos em tempos, você pode fazer isso com

```bash
layman -S
```