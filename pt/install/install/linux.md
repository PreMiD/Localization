---
title: Linux
description: Primeiros passos com a instalação do PreMiD no Linux
published: true
date: 2020-01-18T20:32:37.753Z
tags:
---

> Antes de continuar, certifique-se de que seu sistema atenda a todos os [requisitos](/install/requirements).{.is-info}

A instalação do aplicativo é muito importante, uma vez que a extensão não pode fazer nada por si só.

# Instalação
> Não existe um instalador oficial para esse sistema operacional. Isso significa que não temos suporte oficial para ele. No entanto, você ainda pode trocar informações com outros usuários Linux em nosso [ Servidor do Discord](https://discord.gg/premid/).{.is-info}

1. Instale o [NodeJS](https://nodejs.org/en/).
2. Abra o Terminal.
3. Clone o repositório: `git clone https://github.com/PreMiD/PreMiD.git`
4. Change the working directory: `cd PreMiD/src`
5. Install the dependencies and the application: `npm install`
6. Change the working directory: `cd ..`
7. Type: `npm run init`
8. Start the application: `npm start`

O aplicativo irá iniciar automaticamente. Cheque pelo símbolo na sua barra de menu.

> Os seguintes métodos estão depreciados e não são mais recomendados. Use por sua conta e risco. 
> 
> {.is-warning}

## Arch Linux
Se você está no Arch Linux ou em uma distribuição baseada em Arch, O PreMiD está disponível no [Arch Linux Repository](https://aur.archlinux.org/packages/premid-git/) (AUR) sob `premid-git`. Use o seu gerenciador de pacotes favorito para pegá-lo de lá!

## Outras distribuições
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- If you want to uninstall PreMiD, you can run `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`.

> Do not forget to [add the **extension**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}