---
title: Linux
description: Primeiros passos para a instalação do PreMiD no Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> O auto-launch do Linux agora está disponível no aplicativo e não na extensão.{.is-warning}

A instalação da aplicação é muito importante, uma vez que a extensão não consegue fazer nada por si mesma.

## Tabela de Conteúdos

- **[Sobre](#about)**
  - [Estatísticas](#stats)
  - [Requisitos](#requirements)
  - Exemplos (em breve)
  - FAQs (em breve)
  - Construção (em breve)
  - [Suporte](#support)
  - [Créditos](#credits)
  - [Licença](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#portable-appimage)** (_RECOMENDADA_)
  - [Instruções de instalação](#installation-instructions)
  - [Notas adicionais](#additional-notes)
- **Distribuições baseadas em Red Hat Enterprise Linux (RHEL)** (em breve, use [isto](#portable-appimage) por enquanto)
- **Distribuições baseadas em Debian e Ubuntu** (em breve, use [isto](#portable-appimage) por enquanto)
- **[Arquitetura de distribuições baseadas em Linux](#arch-linux-based-distributions)**
  - [Instruções de instalação](#installation-instructions-1)
  - [Notas adicionais](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Instruções de instalação](#installation-instructions-2)
  - [Notas adicionais](#additional-notes-2)

<a name="about"></a>

## Sobre

**PreMiD** é um simples utilitário configurável que usa a biblioteca RP (Rich Presence) do Discord, que permite que você mostre o que está fazendo na web (e alguns programas) no seu perfil do Discord como **status de jogo**.

<a name="stats"></a>

### Estatísticas

<table>
  <tr>
    <th>Deployment</th>
    <th>Downloads</th>
    <th>Última versão</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Todos os lançamentos"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Última versão"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Lançamentos do GitHub"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requisitos

Tecnicamente, toda distribuição que pode executar o aplicativo Discord [ oficial](https://discordapp.com/download) **app** (não a web ou a versão instantânea) também pode executar o PreMiD; Como você deve ter notado nos últimos anos, algumas distribuições Linux começaram a abandonar o suporte para as arquiteturas de 32 bits (ia32/i686/i386/x86) e, como resultado, nós também abandonamos. Você pode, no entanto, tentar construir o aplicativo você mesmo se você precisar usá-lo em uma distribuição de 32 bits.</br> Já que atualmente usamos Electron como um motor (Discord também!), suas exigências também se aplicam a este aplicativo:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Não se sabe se versões antigas de outras distribuições o suportam, então basta manter sua distribuição atualizada e usar **LTS (Long-Term Support)** libera se sua distribuição oferecer, como eles são mais estáveis (evite lançamentos alfa).

<a name="support"></a>

### Suporte

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Entre em nosso Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Entre em nosso Discord!">
  </a>
</div>

<a name="credits"></a>

### Créditos

Agradecimentos a:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (e poucos outros caras que eu esqueci de seus nomes) por fornecer feedback sobre lançamentos noturnos.
- @apriluwu para manter as compilações de Gentoo
- @SlimShadyIAm e naka para manter os pacotes do Repositório do Usuário Arch
- A comunidade do Electron para vários pacotes
- Qualquer pessoa que alguma vez tenha contribuído para o projeto de uma forma ou de outra.

<a name="license"></a>

### Licença

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Provavelmente nunca, já que a natureza do Snap's bloqueia o PreMiD de chegar ao Discord e à extensão corretamente,</br> Seria apreciado se alguém pudesse fazer isso, quaisquer ideias ou PRs são bem-vindas.</br> P.S.: confinamento clássico não funciona, então não se preocupe em fazer uma sugestão sobre isso.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## AppImage Portable

O pacote AppImage é recomendado se o Discord funciona para você, mas para outros pacotes PreMiD (.deb, .rpm, etc) não.

<a name="appimageinstall"></a>

### Instruções de instalação

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Apenas duplo-clique ou execute
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Notas adicionais

Ou se você quiser tentar o PreMiD ou simplesmente não queira instalá-lo, este é o melhor, ele está sempre atualizado, mas _NÃO AUTO-INICIA COM O SISTEMA!</br>Se você se cansar de ter que abrir cada vez, use os outros pacotes (de acordo com a sua distribuição).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arquitetura de distribuições baseadas em Linux

Usa [Repositório do Usuário Arch](https://aur.archlinux.org/packages/premid);</br> Distribuições suportadas são _em si_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS e [cada um que suporta a instalação do AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instruções de instalação

```bash
# Usando yay (recomendada)
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
# ... você consegue entender o ponto
```

ou manualmente do [Repositório de Usuário Arch](https://aur.archlinux.org/packages/premid) se você sabe o que está fazendo.

<a name="archnotes"></a>

### Notas adicionais

Se seu distro usa o pacman, então você tem que instalar um dos auxiliares primeiro. Se você não tiver nenhum, Yay é o recomendo:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Outros auxiliares AUR/Pacman também funcionam, embora a funcionalidade de cada um seja diferente, então você pode enfrentar problemas ao usá-los.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

O mesmo se aplica aos seus derivados, como ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Instruções de instalação

```bash
# Adicione a sobreposição usando layman
layman -S && layman -a apriluwu
```

```bash
# Instalar via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Notas adicionais

A instalação mostrada usando layman, ele está nos repositórios oficiais por meio de `app-portage/layman`. <br>Para obter atualizações, você terá que sincronizar a sobreposição de tempos em tempos, você pode fazer isso com

```bash
layman -S
```