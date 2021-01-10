---
title: TypeScript Configuration
description: Un piccolo aiuto per TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# Configurazione TypeScript

## Introduzione

Quando hai scaricato e disimballato lo spazio di lavoro, vedrai un file chiamato `tsconfig. s` nelle cartelle root e presenza, questo file viene utilizzato per configurare il compilatore **TypeScript**. È già configurato per te, quindi non preoccuparti di questo.

Vogliamo solo descrivere alcune impostazioni che dovresti sapere.

## Configurazione Root

Nel file di configurazione root vedrai qualcosa di simile.

```javascript
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2020",
    "removeComments": true,
    "noEmitOnError": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "inlineSourceMap": true,
    "typeRoots": ["@types"],
    "esModuleInterop": true
  }
}
```

| Proprietà                  | Descrizione                                                                                                                                                                                |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **compilerOptions**        | Utilizzato per configurare il compilatore, la maggior parte delle proprietà si trova qui.                                                                                                  |
| module                     | Puoi leggere di più su questo [qui](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                                            |
| target                     | Definisce la versione JavaScript che stai compilando.                                                                                                                                      |
| rimuoviCommenti            | Rimozione commenti dai file compilati.                                                                                                                                                     |
| noEmitOnError              | Non emettere output se sono stati segnalati eventuali errori.                                                                                                                              |
| noFallthroughCasesInSwitch | Segnala errori per casi non andati a buon fine nell'istruzione switch.                                                                                                                     |
| noUnusedLocals             | Segnala errori sui locali inutilizzati.                                                                                                                                                    |
| noUnusedParameters         | Segnala errori sui parametri inutilizzati.                                                                                                                                                 |
| inlineSourceMap            | Aggiunge il sourcemapping                                                                                                                                                                  |
| typeRoots                  | Puoi leggere di più su questo [qui](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                                            |
| esModuleInterop            | Emette gli helper __importStar e __importDefault per la compatibilità dell'ecosistema babel runtime e abilita --allowSyntheticDefaultImports per la compatibilità dei tipi di sistema. |

## Configurazione Presenza

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Descrizione                                                                                          |
|:------------------- |:---------------------------------------------------------------------------------------------------- |
| **extends**         | Utilizzato per estendere il file base `tsconfig` per varie attività.                                 |
| **compilerOptions** | Vedi [**Configurazione Root**](/dev/presence/tsconfig#root-configuration) per maggiori informazioni. |
| outDir              | Definisce la directory di output per i file compilati.                                               |
