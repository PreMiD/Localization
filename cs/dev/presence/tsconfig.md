---
title: Stránka bez názvu
description: Malý pomocník pro TypeScript
published: true
date: 2020-01-19T23:42:36.260Z
tags:
---

# Konfigurace typskriptu

## Úvod

Po stažení a rozbalení pracovního prostoru uvidíte soubor nazvaný `tsconfig. s` v kořenových a přítomných složkách, tento soubor se používá ke konfiguraci kompilátoru **TypeScript**. Již je pro vás nakonfigurován, takže se o to nedělejte.

Chceme pouze popsat některá nastavení, která byste měli vědět.

## Konfigurace Root

V kořenovém konfiguračním souboru uvidíte něco podobného.

```javascript
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "removeComments": true
  },
  "exclude": ["node_modules"]
}
```

| Majetek             | Popis                                                                                          |
|:------------------- |:---------------------------------------------------------------------------------------------- |
| **compilerOptions** | Používá se ke konfiguraci kompilátoru, většina vlastností je umístěna zde.                     |
| modul               | Více o tom si můžete přečíst [zde](https://www.typescriptlang.org/docs/handbook/modules.html). |
| target              | Definuje verzi JavaScriptu, kterou kompilujete.                                                |
| odstranit komentáře | Odstraňování komentářů z kompilovaných souborů.                                                |
| **vyloučit**        | Zde můžete definovat složky, které chcete vyloučit z budoucí kompilace.                        |

## Nastavení přítomnosti

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }

```

| Majetek             | Popis                                                                                 |
|:------------------- |:------------------------------------------------------------------------------------- |
| **Rozšíří**         | Používá se pro rozšíření základního `tsconfig` souboru pro různé úkoly.               |
| **compilerOptions** | Více informací viz [**Konfigurace Root**](/dev/presence/tsconfig#root-configuration). |
| outDir              | Definuje výstupní adresář pro kompilované soubory.                                    |