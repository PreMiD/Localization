---
title: Unbenannte Seite
description: Ein kleiner Helfer für TypeScript
published: true
date: 2020-05-09T14:32:40.832Z
tags:
---

# TypeScript-Konfiguration

## Einführung

Wenn Sie den Arbeitsbereich heruntergeladen und entpackt haben, wird eine Datei mit dem Namen `tsconfig.js` im Stammverzeichnis und in den Anwesenheitsordnern angezeigt. Diese Datei wird zum Konfigurieren des **TypeScript** Compilers verwendet. Es ist bereits für Sie konfiguriert, machen Sie sich also keine Sorgen.

Wir wollen nur einige Einstellungen beschreiben, die Sie kennen sollten.

## Root-Konfiguration

In der Root-Konfigurationsdatei sehen Sie so etwas.

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

| Eigentum                   | Beschreibung                                                                                                                                                        |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Die meisten Eigenschaften, die zur Konfiguration des Compilers verwendet werden, befinden sich hier.                                                                |
| Modul                      | Mehr über diese [hier lesen](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                            |
| Ziel                       | Definiert die zu kompilierende JavaScript-Version.                                                                                                                  |
| removeComments             | Kommentare aus kompilierten Dateien entfernen.                                                                                                                      |
| noEmitOnError              | Do not emit outputs if any errors were reported.                                                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                                                            |
| noUnusedLocals             | Report errors on unused locals.                                                                                                                                     |
| noUnusedParameters         | Report errors on unused parameters.                                                                                                                                 |
| inlineSourceMap            | Adds sourcemapping                                                                                                                                                  |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                     |
| esModuleInterop            | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |

## Anwesenheitskonfiguration

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Eigentum            | Beschreibung                                                                                                |
|:------------------- |:----------------------------------------------------------------------------------------------------------- |
| **erweitert**       | Wird zum Erweitern der Datei base `tsconfig` für verschiedene Aufgaben verwendet.                           |
| **compilerOptions** | Weitere Informationen finden Sie unter [**Root-Konfiguration**](/dev/presence/tsconfig#root-configuration). |
| outDir              | Definiert das Ausgabeverzeichnis für kompilierte Dateien.                                                   |
