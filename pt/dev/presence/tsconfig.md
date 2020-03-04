---
title: Página sem título
description: Um pouco de ajuda para TypeScript
published: true
date: 2020-01-19T23:42:36.260Z
tags:
---

# Configuração do TypeScript

## Introdução

Quando você baixou e descompactou a área de trabalho, você verá um arquivo chamado `tsconfig. s` no diretório raiz e de pressão, este arquivo é usado para configurar o compilador **TypeScript**. Já está configurado para você, então não se preocupe com isso.

Queremos apenas descrever algumas definições que o senhor deputado deve conhecer.

## Configuração Raiz

No arquivo de configuração raiz você verá algo como este.

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

| Propriedade         | Descrição                                                                                        |
|:------------------- |:------------------------------------------------------------------------------------------------ |
| **compilerOptions** | Usado para configurar o compilador, a maioria das propriedades estão localizadas aqui.           |
| Módulo              | Você pode ler mais sobre isso [aqui](https://www.typescriptlang.org/docs/handbook/modules.html). |
| target              | Define a versão de JavaScript que você está compilando.                                          |
| removerComentários  | Removendo comentários de arquivos compilados.                                                    |
| **Excluir**         | Aqui você pode definir as pastas que deseja excluir da futura compilação.                        |

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
| **estende**         | Usado para estender o arquivo base `tsconfig` para várias tarefas.                                          |
| **compilerOptions** | Consulte [**Configuração do root**](/dev/presence/tsconfig#root-configuration) para obter mais informações. |
| diretório externo   | Define o diretório de saída para arquivos compilados.                                                       |