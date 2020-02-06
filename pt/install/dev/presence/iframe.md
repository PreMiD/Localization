---
title: Classe iFrame
description:
published: true
date: 2020-01-18T20:32:55.147Z
tags:
---

# Classe iFrame
> The iframe system with PreMiD is problematic and can have unexpected behavior, use with caution. 
> 
> {.is-danger}

## Introdução

In some scenarios, your presence may need to access elements inside of `iframes`.

The code that you write inside of your `iframe.ts` file gets injected into every iframe on the page.

Like presences, `iframes` have their own classes designed to automatically update data.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Métodos

### `send(Objeto)`
Envia dados para a presença. Using this method will make the presence throw a `iFrameData` event.

### `getUrl(String)`
Retorna a URL do `iframe`.

## Eventos
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.

#### `MediaKeys` (desativado)

Disparado quando o usuário usa chaves de mídia em seu teclado, [clique aqui](/dev/presence/class#mediakeys) para obter mais informações sobre as chaves de mídia.