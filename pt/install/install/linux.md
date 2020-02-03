---
title: Linux
description: Primeiros passos para a instalação do PreMiD no Linux
published: true
date: 2020-01-18T20:32:37.753Z
tags:
---

> Antes de irmos mais longe, certifique-se que o seu sistema cumpre todos os [requisitos](/install/requirements).{.is-info}

A instalação da aplicação é muito importante, uma vez que a extensão não consegue fazer nada por si mesma.

# Instalar
> Não há um instalador oficial para este sistema operativo. Isto significa que não existe apoio oficial para o mesmo. No entanto, pode trocar informação com outros utilizadores de Linux no nosso [servidor de Discord](https://discord.gg/premid/).{.is-info}

1. Instale o [NodeJS](https://nodejs.org/en/).
2. Abra um terminal.
3. Clone o repositório: `git clone https://github.com/Timeraa/PreMiD.git`
4. Mude a pasta de trabalho: `cd PreMiD/src`
5. Instale as dependencias e a aplicação: `npm install`
6. Mude a pasta de trabalho: `cd ..`
7. Digite: ` npm run init`
8. Inicie a aplicação: `npm start`

A aplicação irá iniciar automaticamente. Procure o símbolo na sua barra de menu.

> Os seguintes métodos estão descontinuados e não são mais recomendados. Utilize a seu critério. 
> 
> {.is-warning}

## Arch Linux
Se estiver no Arch Linux ou numa distribuição baseada em Arch, o PreMiD está disponível no [Repositório do Arch Linux](https://aur.archlinux.org/packages/premid-git/) (AUR) sob `premid-git`. Use your favorite package manager to grab it from there!

## Other distributions
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- If you want to uninstall PreMiD, you can run `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`.

> Do not forget to [add the **extension**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}