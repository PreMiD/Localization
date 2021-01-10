---
title: Linux
description: Primeiros passos com a instalação do PreMiD no Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

A instalação do aplicativo é muito importante, já que a extensão não pode fazer nada por si só.

> Os usuários Aur que usam o pacote DoomLerd devem estar seguros, como ele diz. Não recomendamos o seu uso, mas se você quiser, ainda pode usá-lo. Obrigado ao DoomLerd por lidar com o Aur. 
> 
> {.is-warning}

## Tabela de Conteúdos

- **[Sobre](#about)**
  - [Estatísticas](#stats)
  - [Requirements](#requirements)
  - Exemplos (em breve)
  - Perguntas Frequentes (em breve)
  - Construção (em breve)
  - [Suporte](#support)
  - [Credits](#credits)
  - [Licença](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _nunca_ ™️)
- **[Portable AppImage](#appimage)** (_RECOMENDADO_)
  - [Instruções de instalação](#appimageinstall)
  - [Notas adicionais](#appimagenotes)
- [**Distribuições baseadas no Red Hat Enterprise Linux (RHEL)**](#packagecloud)
- [**Distribuições baseadas em Debian e Ubuntu**](#packagecloud)
- [**Arch Linux baseadas em distribuições Linux**](#arch)

<a name="about"></a>

## About

**PreMiD** um simples, utilitário configurável que usa a biblioteca RP (Rich Presence) do Discord, que permite que você mostre o que está fazendo na internet (e alguns programas) no seu perfil do Discord como **status de jogo**.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Implementação</th>
    <th>Total de downloads</th>
    <th>Última versão</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Todas as versões"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Versões do Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Tecnicamente toda distribuição que pode executar o **app** [oficial](https://discordapp.com/download) do Discord (não a versão web ou snap) também pode executar o PreMiD;</br> Como você deve ter notado nos últimos anos, algumas distribuições do Linux começaram a abandonar o suporte para as arquiteturas 32-bit (ia32/i686/i386/x86), e como resultado, nós também. Você pode, no entanto, tente build o aplicativo você mesmo se você precisar desesperadamente usá-lo em uma distribuição de 32 bits.</br> Como atualmente usamos Electron como um engine (Discord usa também!), seus requisitos também se aplicam a este aplicativo :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Não se sabe se versões antigas de outras distribuições o suportam, por isso basta manter sua distribuição atualizada e usar versões **LTS (Long-Term Support)** se sua distribuição as oferecer, pois elas são mais estáveis (evite versões alfa).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Junte-se ao nosso Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Agradecimentos para :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (e alguns outros que eu esqueci os nomes) por fornecer feedback sobre lançamentos noturnos.
- @apriluwu para manter as compilações de Gentoo
- @SlimShadyIAm e naka por manter os pacotes do Repositório do Usuário Arch
- A comunidade Electron por vários pacotes
- Qualquer outra pessoa que tenha contribuído para o projeto de alguma forma.

<a name="license"></a>

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

O pacote AppImage é recomendado se o Discord funciona para você, mas para outros pacotes PreMiD (.deb, rpm, etc) não.

<a name="appimageinstall"></a>

### Installation instructions

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Apenas clique duas vezes ou execute
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Additional notes

Se você quer experimentar o PreMiD ou simplesmente não quer instalá-lo, este é o melhor, está sempre atualizado mas _NÃO AUTO-INICIE COM O SISTEMA!_</br>Se você ficar cansado de ter que abrir cada vez, use os outros pacotes (de acordo com sua distribuição).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

Lançamos pacotes deb/rpm em nosso repositório packagecloud. Visite-o em https://packagecloud.io/PreMiD/Linux e baixe seu pacote deb/rpm ou use o script automático.

Para **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

Para **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

Se o comando não funcionar, baixe o arquivo **deb/rpm** de nosso repositório pacote ou substitua as configurações.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Arch Linux based distributions

Usando o [repositório do usuário Arch](https://aur.archlinux.org/packages/premid);</br> Distribuições suportadas são _em si_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS e [todos que suportam a instalação por AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installation instructions

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

### Additional notes

Se sua distribuição usa pacman, você deve instalar um dos ajudantes primeiro. Se você não tiver nenhum, é recomendado o Yay, execute :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Outros AUR/Pacman helpers também funcionam bem, embora a funcionalidade de cada um deles seja diferente para que você possa enfrentar problemas enquanto os utiliza.