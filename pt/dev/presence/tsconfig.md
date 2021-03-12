---
title: Configuração do TypeScript
description: Um pouco de ajuda para TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# Configuração do TypeScript

## Introdução

Quando você baixou e descompactou a área de trabalho, você verá um ficheiro chamado `tsconfig. s` no diretório raiz e de pressão, este ficheiro é usado para configurar o compilador **TypeScript**. Já está configurado para você, então não se preocupe com isso.

Queremos apenas descrever algumas definições que o senhor deputado deve conhecer.

## Configuração Raiz

No ficheiro de configuração raiz você verá algo como este.

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

| Property                   | Descrição                                                                                                                                                                               |
|:-------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Usado para configurar o compilador, a maioria das propriedades estão localizadas aqui.                                                                                                  |
| module                     | Você pode ler mais sobre isso [aqui](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                                        |
| target                     | Define a versão de JavaScript que você está compilando.                                                                                                                                 |
| removeComments             | Removendo comentários de ficheiros compilados.                                                                                                                                          |
| noEmitOnError              | Não emitir saídas se algum erro for reportado.                                                                                                                                          |
| noFallthroughCasesInSwitch | Reportar erros para casos alternativos na instrução do comando.                                                                                                                         |
| noUnusedLocals             | Relatar erros nos locais não utilizados.                                                                                                                                                |
| noUnusedParameters         | Relatar erros em parâmetros não utilizados.                                                                                                                                             |
| inlineSourceMap            | Adiciona mapeamento de origem                                                                                                                                                           |
| typeRoots                  | Pode ler mais sobre isso [aqui](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                                             |
| esModuleInterop            | Emit __importStar e __importDefault helpers para compatibilidade com o ecossistema do babel e habilite --allowSyntheticDefaultImports para compatibilidade com os tipos de sistema. |

## Configuração de Presence

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Propriedade         | Descrição                                                                                                   |
|:------------------- |:----------------------------------------------------------------------------------------------------------- |
| **extends**         | Usado para estender o ficheiro base `tsconfig` para várias tarefas.                                         |
| **compilerOptions** | Consulte [**Configuração do root**](/dev/presence/tsconfig#root-configuration) para obter mais informações. |
| outDir              | Define o diretório de saída para ficheiros compilados.                                                      |
