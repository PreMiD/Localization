---
title: Página sin título
description: Un pequeño ayudante para TypeScript
published: true
date: 2020-05-09T14:32:40.832Z
tags:
---

# Configuración de TypeScript

## Introducción

Cuando descargaste y desempaquetaste el espacio de trabajo, verás un archivo llamado `tsconfig. s` en carpetas raíz y presencia, este archivo se utiliza para configurar el compilador **TypeScript**. Ya está configurado para usted, así que no te preocupes por eso.

Sólo queremos describir algunos ajustes que deberías conocer.

## Configuración de root

En el archivo de configuración raíz verá algo como esto.

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

| Propiedad                  | Descripción                                                                                                                                                         |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Utilizado para configurar el compilador, la mayoría de las propiedades se encuentran aquí.                                                                          |
| módulo                     | Puedes leer más sobre eso [aquí](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                        |
| target                     | Define la versión JavaScript que está compilando.                                                                                                                   |
| eliminar comentarios       | Eliminando comentarios de archivos compilados.                                                                                                                      |
| noEmitOnError              | Do not emit outputs if any errors were reported.                                                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                                                            |
| noUnusedLocals             | Report errors on unused locals.                                                                                                                                     |
| noUnusedParameters         | Report errors on unused parameters.                                                                                                                                 |
| inlineSourceMap            | Adds sourcemapping                                                                                                                                                  |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                     |
| esModuleInterop            | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |

## Configuración de presencia

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Propiedad           | Descripción                                                                                      |
|:------------------- |:------------------------------------------------------------------------------------------------ |
| **extensión**       | Utilizado para extender el archivo base `tsconfig` para varias tareas.                           |
| **compilerOptions** | Ver [**Configuración de root**](/dev/presence/tsconfig#root-configuration) para más información. |
| fuera de Dir        | Define el directorio de salida para archivos compilados.                                         |
