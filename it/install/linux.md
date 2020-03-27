---
title: Linux
description: Per iniziare con un'installazione di PreMiD su Linux
published: true
date: 2020-02-12T22:18:32.431Z
tags: 
---

> Prima di proseguire, assicurati che il tuo sistema soddisfi tutti i [requisiti](/install/requirements).{.is-info}

L'installazione dell'applicazione è molto importante, poiché l'estensione non può fare nulla da sola.

# Installa
> Non c'è nessun installatore ufficiale per questo sistema operativo. Ciò significa che non vi è alcun sostegno ufficiale al riguardo. Tuttavia puoi scambiare informazioni con altri utenti Linux sul nostro [server Discord](https://discord.gg/premid/).{.is-info}

1. Install [NodeJS](https://nodejs.org/en/).
2. Apri un terminale.
3. Clona il repository: `git clone https://github.com/PreMiD/PreMiD.git`
4. Cambia la directory di lavoro: `cd PreMiD/src`
5. Installa le dipendenze e l'applicazione: `npm install`
6. Cambia la directory di lavoro: `cd ..`
7. Tipo: `npm run init`
8. Avvia l'applicazione: `npm start`

L'applicazione si avvierà automaticamente. Controlla il simbolo nella barra dei menu.

> I seguenti metodi sono depressi e non più raccomandati. Usa a tuo rischio. 
> 
> {.is-warning}

## Arch Linux
Se sei su Arch Linux o una distribuzione basata su Arch, PreMiD è disponibile sul [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) sotto `premid`. Usa il tuo gestore di pacchetti preferito per prenderlo da lì!

## Altre distribuzioni
- Script d'installazione: `wget -qO- http://bit.ly/install-premid <unk> bash` o `curl -sL https://bit. /install-premid <unk> bash`, attendi che si installi, fai doppio clic sulla scorciatoia "PreMiD" creata sul tuo Desktop, ed è tutto!
- Se vuoi disinstallare PreMiD, puoi eseguire `wget -qO- http://bit.ly/uninstall-premid <unk> bash` o `curl -sL https://bit.ly/uninstall-premid <unk> bash`.

> Non dimenticare di [aggiungere l'estensione ****](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}