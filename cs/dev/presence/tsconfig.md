---
title: Stránka bez názvu
description: Malý pomocník pro TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# Konfigurace TypeSkriptu

## Úvod

Po stažení a rozbalení pracovního prostoru uvidíte soubor nazvaný `tsconfig.js` v kořenových a přítomných složkách, tento soubor se používá ke konfiguraci kompilátoru **TypeSkript**. Již je pro vás nakonfigurován, takže nemějte obavy.

Chceme pouze popsat některá nastavení, která byste měli vědět.

## Konfigurace Root

V kořenovém konfiguračním souboru uvidíte něco podobného.

```javascript
{
    "compilerOptions": {
        "module": "CommonJS",
        "target": "ES2020",
        "removeComments": true,
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "inlineSourceMap": true,
        "typeRoots": ["@types"]
    },
    "exclude": ["node_modules"]
}
```

| Vlastnosti                 | Popis                                                                                                                           |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Používá se ke konfiguraci kompilátoru, většina vlastností je umístěna zde.                                                      |
| module                     | Více o tom si můžete přečíst [zde](https://www.typescriptlang.org/docs/handbook/modules.html).                                  |
| target                     | Definuje verzi JavaScriptu, kterou kompilujete.                                                                                 |
| removeComments             | Odstraňování komentářů z kompilovaných souborů.                                                                                 |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                        |
| noUnusedLocals             | Report errors on unused locals.                                                                                                 |
| noUnusedParameters         | Report errors on unused parameters.                                                                                             |
| inlineSourceMap            | Adds sourcemapping                                                                                                              |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Zde můžete definovat složky, které chcete vyloučit z budoucí kompilace.                                                         |

## Nastavení Presenc

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }

```

| Vlastnosti          | Popis                                                                                 |
|:------------------- |:------------------------------------------------------------------------------------- |
| **extends**         | Používá se pro rozšíření základního `tsconfig` souboru pro různé úkoly.               |
| **compilerOptions** | Více informací viz [**Konfigurace Root**](/dev/presence/tsconfig#root-configuration). |
| outDir              | Definuje výstupní adresář pro kompilované soubory.                                    |
