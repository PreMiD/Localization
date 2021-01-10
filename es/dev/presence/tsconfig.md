---
title: TypeScript Configuration
description: Un poco de ayuda para TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# Configuración de TypeScript

## Introducción

Cuando descarges y desempaquetes el espacio de trabajo, verás un archivo llamado `tsconfig.js` en la carpeta principal y carpetas de presencia, este archivo se utiliza para configurar el compilador de **TypeScript**. Ya está configurado para ti, así que no te preocupes por eso.

Solo queremos describir algunos ajustes que deberías conocer.

## Configuración de raíz

En el archivo de configuración raíz verás algo como esto.

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

| Propiedad                  | Descripción                                                                                                                                                                               |
|:-------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Utilizado para configurar el compilador, la mayoría de las propiedades se encuentran aquí.                                                                                                |
| module                     | Puedes leer más sobre eso [aquí](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                                              |
| target                     | Define la versión JavaScript que está compilando.                                                                                                                                         |
| removeComments             | Elimina comentarios de archivos compilados.                                                                                                                                               |
| noEmitOnError              | No emitir si se reporta algún error.                                                                                                                                                      |
| noFallthroughCasesInSwitch | Reporta errores para los casos fallidos en reportes de cambios.                                                                                                                           |
| noUnusedLocals             | Reportar errores de locales no utilizados.                                                                                                                                                |
| noUnusedParameters         | Reportar errores en parámetros no usados.                                                                                                                                                 |
| inlineSourceMap            | Agrega mapeados de código fuente                                                                                                                                                          |
| typeRoots                  | Puedes leer más acerca de eso [aquí](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                                          |
| esModuleInterop            | Emita ayudantes __importStar e __importDefault para la compatibilidad del runtime babel ecosystem y habilita --allowSyntheticDefaultImports para la compatibilidad con el typesystem. |

## Configuración de presencia

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Descripción                                                                                   |
|:------------------- |:--------------------------------------------------------------------------------------------- |
| **extensión**       | Utilizado para extender el archivo base `tsconfig` para varias tareas.                        |
| **compilerOptions** | Ver [**configuración base**](/dev/presence/tsconfig#root-configuration) para más información. |
| outdir              | Define el directorio de salida para archivos compilados.                                      |
