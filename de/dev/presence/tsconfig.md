---
title: TypeScript Configuration
description: Ein kleiner Helfer für TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# TypeScript-Konfiguration

## Einführung

Wenn du den Arbeitsbereich heruntergeladen und entpackt habst, wird eine Datei mit dem Namen `tsconfig.js` im Stammverzeichnis und in den Presenceordnern angezeigt. Diese Datei wird zum Konfigurieren des **TypeScript**-Compilers verwendet. Es ist bereits für dich konfiguriert, mache dir also keine Sorgen.

Wir wollen nur einige Einstellungen beschreiben, die du kennen solltest.

## Root-Konfiguration

In der Root-Konfigurationsdatei siehst du so etwas.

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

| Property                   | Beschreibung                                                                                                                                                            |
|:-------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Die meisten Eigenschaften, die zur Konfiguration des Compilers verwendet werden, befinden sich hier.                                                                    |
| module                     | Mehr über diese [hier lesen](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                                |
| target                     | Definiert die zu kompilierende JavaScript-Version.                                                                                                                      |
| removeComments             | Kommentare aus kompilierten Dateien entfernen.                                                                                                                          |
| noEmitOnError              | Gibt nichts aus, wenn Fehler gemeldet wurden.                                                                                                                           |
| noFallthroughCasesInSwitch | Meldet Fehler für Falltrough-Fälle im Switch-Statement.                                                                                                                 |
| noUnusedLocals             | Melde Fehler bei ungenutzen Lokalisierungen.                                                                                                                            |
| noUnusedParameters         | Melde Fehler bei nicht genutzten Parametern.                                                                                                                            |
| inlineSourceMap            | Fügt sourcemapping hinzu                                                                                                                                                |
| typeRoots                  | Mehr über diese [hier lesen](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                                |
| esModuleInterop            | Emit __importStar und __importDefault Helfer für die Kompatibilität mit babel ecosystem und aktivieren --allowSyntheticDefaultImports für Typesystemkompatibilität. |

## Presencekonfiguration

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Beschreibung                                                                                                |
|:------------------- |:----------------------------------------------------------------------------------------------------------- |
| **extends**         | Wird zum Erweitern der Basisdatei `tsconfig` für verschiedene Aufgaben verwendet.                           |
| **compilerOptions** | Weitere Informationen findest du unter [**Root-Konfiguration**](/dev/presence/tsconfig#root-configuration). |
| outDir              | Definiert das Ausgabeverzeichnis für kompilierte Dateien.                                                   |
