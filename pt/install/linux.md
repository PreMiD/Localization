---
title: Linux
description: Primeiros passos para a instalação do PreMiD no Linux
published: true
date: 2020-02-08T04:19:04.080Z
tags:
---

> Antes de irmos mais longe, certifique-se que o seu sistema cumpre todos os [requisitos](/install/requirements).{.is-info}

A instalação da aplicação é muito importante, uma vez que a extensão não consegue fazer nada por si mesma.

# Instalar
> Não há um instalador oficial para este sistema operativo. Isto significa que não existe apoio oficial para o mesmo. No entanto, pode trocar informação com outros utilizadores de Linux no nosso [servidor de Discord](https://discord.gg/premid/).{.is-info}

1. Instale o [NodeJS](https://nodejs.org/en/).
2. Abra um terminal.
3. Clone o repositório: `git clone https://github.com/PreMiD/PreMiD.git`
4. Mude a pasta de trabalho: `cd PreMiD/src`
5. Instale as dependencias e a aplicação: `npm install`
6. Mude a pasta de trabalho: `cd ..`
7. Digite: ` npm run init`
8. Inicie a aplicação: `npm start`

A aplicação irá iniciar automaticamente. Procure o símbolo na sua barra de menu.

> Os seguintes métodos estão depreciados e não são mais recomendados. Utilize a seu critério. 
> 
> {.is-warning}

## Arch Linux
Se você está no Arch Linux ou em uma distribuição baseada em Arch, PreMiD está disponível no [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) sob `premid`. Utilize o seu gerenciador de pacotes para pegá-lo de lá!

## Outras distribuições
- Script de instalação: `wget -qO- http://bit.ly/install-premid | bash` ou `curl -sL https://bit.ly/install-premid | bash`, espere que instale, clique duas vezes no atalho "PreMiD" criado no seu ambiente de trabalho, e pronto!
- Se desejar desinstalar o PreMiD, pode executar `wget -qO- http://bit.ly/uninstall-premid | bash` ou `curl -sL https://bit.ly/uninstall-premid | bash`.

> Não se esqueça de <a href=/install">adicionar a **extensão**</a>.{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}