---
title: TypeScript konfigurasjon
description: En liten hjelper for TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# TypeScript konfigurasjon

## Introduksjon

Når du lastet ned og pakket ut arbeidsområdet, vil du se en fil med navn `tsconfig. s` i rot og tilstedeværelse mapper, denne filen brukes for å konfigurere **kompilator typeScript**. Det er allerede konfigurert for deg, så ikke vær redd for det.

Vi vil bare beskrive noen innstillinger du bør vite.

## Konfigurasjon av rot

I rotkonfigurasjonsfilen vil du se omtrent slik som dette.

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

| Property                   | Beskrivelse                                                                                                                                                                |
|:-------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Brukes for å konfigurere kompilatoren, de fleste egenskapene ligger her.                                                                                                   |
| module                     | Du kan lese mer om det [her](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                                   |
| target                     | Definerer JavaScript-versjonen du kompilerer.                                                                                                                              |
| removeComments             | Fjerner kommentarer fra kompilerte filer.                                                                                                                                  |
| noEmitOnError              | Ikke avgi utdata hvis noen feil ble rapportert.                                                                                                                            |
| noFallthroughCasesInSwitch | Rapporter feil ved fall av saker ved påstand.                                                                                                                              |
| noUnusedLocals             | Rapporter feil på ubrukte lokaler.                                                                                                                                         |
| noUnusedParameters         | Rapporter feil på ubrukte parametere.                                                                                                                                      |
| inlineSourceMap            | Legger til kildekreditering                                                                                                                                                |
| typeRoots                  | Du kan lese mer om det [her](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                                   |
| esModuleInterop            | Emit __importStar og __importStandard hjelpere for kompatibilitet i runtime babel økosystemer og aktiver --allowSyntheticDefaultImports for typesystem kompatibilitet. |

## Tilstedeværelse Konfigurasjon

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Egenskaper          | Beskrivelse                                                                                 |
|:------------------- |:------------------------------------------------------------------------------------------- |
| **extends**         | Brukes til å utvide basen `tsconfig` filen for ulike oppgaver.                              |
| **compilerOptions** | Se [**Root-konfigurasjon**](/dev/presence/tsconfig#root-configuration) for mer informasjon. |
| outDir              | Definerer utdata mappen for kompilerte filer.                                               |
