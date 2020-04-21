---
title: Untitled Page
description: Uma ajudinha para o TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# Configuração do TypeScript

## Introdução

Quando você baixou e descompactou a workspace, você verá um arquivo chamado `tsconfig.js` no diretório raíz e nas pastas de presença, este arquivo é usado para configurar o compilador **TypeScript**. Já está configurado para você, então não se preocupe com isso.

Queremos apenas descrever algumas definições que você deveria conhecer.

## Configuração da raíz

No arquivo de configuração raiz você verá algo assim.

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

| Propriedade                | Descrição                                                                                                                       |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Usado para configurar o compilador, a maioria das propriedades estão localizadas aqui.                                          |
| module                     | Você pode ler mais sobre isso [aqui](https://www.typescriptlang.org/docs/handbook/modules.html).                                |
| target                     | Define a versão de JavaScript que você está compilando.                                                                         |
| removeComments             | Remover comentários de arquivos compilados.                                                                                     |
| noFallthroughCasesInSwitch | Relatar erros para casos de queda na instrução do comando.                                                                      |
| noUnusedLocals             | Reporta erros em locais não utilizados.                                                                                         |
| noUnusedParameters         | Relatar erros em parâmetros não utilizados.                                                                                     |
| inlineSourceMap            | Adiciona mapeamento de origem                                                                                                   |
| typeRoots                  | Você pode ler mais sobre isso[aqui](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Aqui você pode definir as pastas que deseja excluir da futura compilação.                                                       |

## Configuração de Presença

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Propriedade         | Descrição                                                                                                   |
|:------------------- |:----------------------------------------------------------------------------------------------------------- |
| **extends**         | Usado para estender o arquivo base `tsconfig` para várias tarefas.                                          |
| **compilerOptions** | Consulte [**Configuração do root**](/dev/presence/tsconfig#root-configuration) para obter mais informações. |
| outDir              | Define o diretório de saída para arquivos compilados.                                                       |
