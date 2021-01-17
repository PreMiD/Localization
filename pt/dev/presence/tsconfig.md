---
title: TypeScript Configuration
description: Um pouco de ajuda para TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
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

| Propriedade                | Descrição                                                                                                                                                                               |
|:-------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Usado para configurar o compilador, a maioria das propriedades estão localizadas aqui.                                                                                                  |
| Módulo                     | Você pode ler mais sobre isso [aqui](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                                        |
| target                     | Define a versão de JavaScript que você está compilando.                                                                                                                                 |
| removerComentários         | Removendo comentários de arquivos compilados.                                                                                                                                           |
| noEmitOnError              | Não emitir saídas se algum erro for reportado.                                                                                                                                          |
| noFallthroughCasesInSwitch | Reportar erros para casos alternativos na instrução do comando.                                                                                                                         |
| noUnusedLocals             | Relatar erros nos locais não utilizados.                                                                                                                                                |
| noUnusedParameters         | Relatar erros em parâmetros não utilizados.                                                                                                                                             |
| inlineSourceMap            | Adiciona mapeamento de origem                                                                                                                                                           |
| typeRoots                  | Pode ler mais sobre isso [aqui](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                                             |
| esModuleInterop            | Emit __importStar e __importDefault helpers para compatibilidade com o ecossistema do babel e habilite --allowSyntheticDefaultImports para compatibilidade com os tipos de sistema. |

## Configuração de Presença

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
| **estende**         | Usado para estender o arquivo base `tsconfig` para várias tarefas.                                          |
| **compilerOptions** | Consulte [**Configuração do root**](/dev/presence/tsconfig#root-configuration) para obter mais informações. |
| diretório externo   | Define o diretório de saída para arquivos compilados.                                                       |
