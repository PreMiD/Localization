---
title: Clase de iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# Clase de iFrame
> El sistema iframe con PreMiD es problemático y puede tener un comportamiento inesperado, usa con precaución. 
> 
> {.is-danger}

## Introducción

En algunos argumentos, tu presencia puede necesitar acceder a elementos dentro de `iframes`.

El código que escribes dentro de tu archivo `iframe.ts` se inyecta en cada iframe de la página.

Al igual que las presences, `iframes` tienen sus propias clases diseñadas para actualizar automáticamente los datos.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Métodos

### `send(Object)`
Envía datos a la presencia. Usar este método hará que la presencia arroje un evento de `iFrameData`.

### `getUrl()`
Devuelve la URL del `iframe`.

## Eventos
En `iframes`, los eventos funcionan de forma similar a como funcionan en la clase `presence`.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Aquí hay una lista de todos los eventos:

#### `UpdateData`

Este evento se activa cada vez que se actualiza el iframe.