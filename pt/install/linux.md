---
title: Linux
description: Primeiros passos com a instalação do PreMiD no Linux
published: true
date: 2020-02-08T04:19:04.080Z
tags:
---

> Antes de continuar, certifique-se de que seu sistema atenda a todos os [requisitos](/install/requirements).{.is-info}

A instalação do aplicativo é muito importante, uma vez que a extensão não pode fazer nada por si só.

# Instalação
> Não existe um instalador oficial para esse sistema operacional. Isso significa que não temos suporte oficial para ele. No entanto, você ainda pode trocar informações com outros usuários Linux em nosso [ Servidor do Discord](https://discord.gg/premid/).{.is-info}

1. Instale o [NodeJS](https://nodejs.org/en/).
2. Abra o Terminal.
3. Clone o repositório: `git clone https://github.com/PreMiD/PreMiD.git`
4. Mude a pasta de trabalho: `cd PreMiD/src`
5. Instale as dependencias e a aplicação: `npm install`
6. Mude a pasta de trabalho: `cd ..`
7. Digite: `npm run init`
8. Inicie a aplicação: `npm start`

O aplicativo irá iniciar automaticamente. Cheque pelo símbolo na sua barra de menu.

> Os seguintes métodos estão depreciados e não são mais recomendados. Use por sua conta e risco. 
> 
> {.is-warning}

## Arch Linux
Se você está no Arch Linux ou em uma distribuição baseada em Arch, o PreMiD está disponível no [Repositório do Arch Linux](https://aur.archlinux.org/packages/premid/) (AUR) sob `premid`. Use o seu gerenciador de pacotes favorito para pegá-lo de lá!

## Outras distribuições
- Script de instalação: `wget -qO- http://bit.ly/install-premid | bash` ou `curl -sL https://bit.ly/install-premid | bash`, aguarde a instalação, clique duas vezes no atalho "PreMiD" criado no seu Desktop, e pronto!
- Se desejar desinstalar o PreMiD, pode executar `wget -qO- http://bit.ly/uninstall-premid | bash` ou `curl -sL https://bit.ly/uninstall-premid | bash`.

> Não se esqueça de [adicionar a **extensão**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}