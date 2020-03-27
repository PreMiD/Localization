---
title: iFrame Clase
description: 
published: true
date: 2020-02-12T22:27:29.574Z
tags: 
---

# iFrame Clase
> El sistema iframe con PreMiD es problemático y puede tener un comportamiento inesperado, usar con precaución. 
> 
> {.is-danger}

## Introducción

En algunos escenarios, tu presencia puede necesitar acceder a elementos dentro de `iframes`.

El código que escribes dentro de tu archivo `iframe.ts` se inyecta en cada iframe de la página.

Al igual que las presencias, `iframes` tienen sus propias clases diseñadas para actualizar automáticamente los datos.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // El código va aquí...
});
```

## Métodos

### `enviar(objeto)`
Envía datos a la presencia. Usar este método hará que la presencia arroje un evento de `iFrameData`.

### `getUrl(String)`
Devuelve la URL del `iframe`.

## Eventos
En `iframes`, los eventos funcionan de forma similar a como funcionan en la clase `presence`.

```typescript
iframe.on("UpdateData", async () => {
    // El código va aquí...
});
```

Aquí hay una lista de todos los eventos:

#### `Actualizardatos`

Este evento se activa cada vez que se actualiza el iframe.

#### `MediaKeys` (deshabilitado)

Lanzado cuando el usuario utiliza teclas multimedia en su teclado, [clic aquí](/dev/presence/class#mediakeys) para obtener más información acerca de las teclas multimedia.