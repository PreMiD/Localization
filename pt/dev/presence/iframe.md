---
title: Classe iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# Classe iFrame
> O sistema iframe com PreMiD é problemático e pode ter um comportamento inesperado, use com cautela. 
> 
> {.is-danger}

## Introdução

Em alguns cenários, sua presença pode precisar acessar elementos dentro de `iframes`.

O código que você escreve dentro do seu arquivo `iframe.ts` é injetado em cada iframe na página.

Como as presenças, os `iframes` têm suas próprias classes projetadas para atualizar dados automaticamente.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // O código vai aqui...
});
```

## Métodos

### `send(Objeto)`
Envia dados para a presença. Usando este método a presença lançará um evento `iFrameData`.

### `getUrl()`
Retorna a URL do `iframe`.

## Eventos
Em `iframes`, os eventos funcionam da mesma forma que na `classe de presença`.

```typescript
iframe.on("UpdateData", async () => {
    // Código vai aqui...
});
```

Aqui está uma lista de todos os eventos:

#### `UpdateData`

Este evento é disparado toda vez que o iframe é atualizado.