---
title: Strana bez názvu
description: Malilinký pomocník pre TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# Konfigurácia TypeScriptu

## Úvod

Keď ste si stiahli a rozbalili pracovnú plochu, uvidíte súbor nazývaný sa `tsconfig.js` v koreni a v priečinkoch prítomnosti, tento súbor je určený na konfigurovanie **TypeScript** spracovávateľa. Je už dopredu nakonfigurovaný pre vás, takže nemusíte sa obávať.

Chceme vám len popísať niektoré nastavenia ktoré by ste mali vedieť.

## Konfigurácia Koreňa

V koreni konfiguračného súboru uvidíte niečo takéto podobné.

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

| Vlastnosť                  | Popis                                                                                                                           |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Používaný na konfiguráciu kompiliera, väčšina vlastností sa nachádza tu.                                                        |
| module                     | Môžete si prečítať viacej o tom [tu](https://www.typescriptlang.org/docs/handbook/modules.html).                                |
| target                     | Definuje verziu JavaScriptu ktorú kompilujete.                                                                                  |
| removeComments             | Odstránenie komentárov z už kompilovaných súborov.                                                                              |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                        |
| noUnusedLocals             | Report errors on unused locals.                                                                                                 |
| noUnusedParameters         | Report errors on unused parameters.                                                                                             |
| inlineSourceMap            | Adds sourcemapping                                                                                                              |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Tu môžete definovať priečinky ktoré chcete vylúčiť z budúcej kompilácie.                                                        |

## Konfigurácia Prítomnosti

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
```

| Vlastnosť           | Popis                                                                                            |
|:------------------- |:------------------------------------------------------------------------------------------------ |
| **extends**         | Používa sa na rozšírenie základného súboru `tsconfig` na rôzne úlohy.                            |
| **compilerOptions** | Pozrite [**Koreň Konfigurácie**](/dev/presence/tsconfig#root-configuration) pre viac informácii. |
| outDir              | Definuje výstupný adresár pre kompilované súbory.                                                |
