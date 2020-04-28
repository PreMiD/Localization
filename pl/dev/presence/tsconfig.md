---
title: Strona bez tytułu
description: Mały pomocnik do TypeScript
published: tak
date: 2020-02-12T22:15:34.451Z
tags:
---

# Konfiguracja TypeScript

## Wprowadzanie

Po pobraniu i rozpakowaniu obszaru roboczego, zobaczysz plik o nazwie `tsconfig. s` w folderach root i obecności, ten plik jest używany do konfigurowania kompilatora **TypeScript**. Jest już skonfigurowany dla Ciebie, więc nie martw się o to.

Chcemy tylko opisać ustawienia, które powinieneś wiedzieć.

## Konfiguracja roota

W głównym pliku konfiguracyjnym zobaczysz coś takiego.

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

| Własność                   | Opis                                                                                                                            |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Używane do konfigurowania kompilatora, większość właściwości znajduje się tutaj.                                                |
| module                     | Więcej na ten temat znajdziesz [tu](https://www.typescriptlang.org/docs/handbook/modules.html).                                 |
| target                     | Określa wersję JavaScript, którą kompilujesz.                                                                                   |
| removeComments             | Usuwanie komentarzy z skompilowanych plików.                                                                                    |
| noFallthroughCasesInSwitch | Zgłasza błędy dla przypadków awaryjnych w instrukcji switch.                                                                    |
| noUnusedLocals             | Zgłasza błędy na nieużywanych lokalnych.                                                                                        |
| noUnusedParameters         | Zgłasza błędy dotyczące nieużywanych parametrów.                                                                                |
| inlineSourceMap            | Dodaje sourcemapping                                                                                                            |
| typeRoots                  | Więcej na ten temat znajdziesz [tu](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Tutaj możesz zdefiniować foldery, które chcesz wykluczyć z przyszłej kompilacji.                                                |

## Konfiguracja Presence

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Własność            | Opis                                                                                                     |
|:------------------- |:-------------------------------------------------------------------------------------------------------- |
| **extends**         | Używane do rozszerzenia podstawowego pliku `tsconfig` dla różnych zadań.                                 |
| **compilerOptions** | Zobacz [**Konfiguracja root**](/dev/presence/tsconfig#root-configuration) aby uzyskać więcej informacji. |
| outDir              | Określa katalog wyjściowy skompilowanych plików.                                                         |
