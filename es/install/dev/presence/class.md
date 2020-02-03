---
title: Clase de presencia
description: La clase principal para cada presencia PreMiD
published: true
date: 2020-01-18T20:32:53.042Z
tags:
---

# Clase de presencia

## Introducción

La clase `Presence` es útil dado que contiene métodos básicos para construir una presencia.

 Cuando creas una clase has de especificar apropiadamente el campo `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // clientId de ejemplo
});
```

Hay dos propiedades disponibles para la clase `Presence`.

#### `clientId`

La propiedad `clientId` ha de ser proporcionada para que la presencia funcione correctamente, porque utiliza su id de aplicación para mostrar su logo y recursos.

Puedes obtenerlo en tu [página de aplicaciones](https://discordapp.com/developers/applications).

#### `mediaKeys`

Esta propiedad le dice a nuestra aplicación que registre las pulsaciones de teclado de las teclas multimedia y nos permite usar el evento `MediaKeys` para la clase `Presence`.

Esta propiedad no es requerida, pero si desea habilitar las teclas multimedia debe establecerla a `true`.

**¡Todos los eventos mediaKey están temporalmente desactivados!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Allows users to use media keys
});
```

## Métodos

### `setActivity(presenceData, Boolean)`

Establece la actividad de tu perfil de acuerdo a los datos proporcionados.

El primer parámetro requiere la interfaz `presenceData` para obtener toda la información que deseas mostrar en tu perfil.

El segundo parámetro indica si la presencia está reproduciendo algo o no. Utiliza siempre `true` si proporcionas marcas de tiempo en `presenceData`.

### `clearActivity()`

Limpia la actividad actual, los atajos de teclado y el título de la barra de tareas.

### `setTrayTitle(String)`

> Este método funciona sólo en Mac OS. 
> 
> {.is-warning}

Establece el título de la bandeja en la barra de menús.

### `getStrings(Object)`

Permite obtener texto traducido a través de la extensión. You must provide `Object` with keys being the key for string, `keyValue` is the string value. Puedes encontrar algunas de los textos usando la siguiente url: `https://api.premid.app/v2/langFIle/extension/es`

```typescript
// Devuelve las cadenas `Playing` y `Paused`
// desde la extensión.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Devuelve una variable desde el sitio web si existe.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Esto mostrará en consola el valor de la variable "pageVar"
```

## `presenceData` Interfaz

Se recomienda utilizar la interfaz `presenceData` cuando se está utilizando el método `setActivity()`.

Esta interfaz tiene siguientes variables, todas son opcionales.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Descripción</th>
      <th style="text-align:left">Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">detalles</td>
      <td style="text-align:left">La primera línea en la presencia, usualmente usada como cabecera.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">estado</td>
      <td style="text-align:left">Segunda línea en la presencia.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Define la hora actual.<br>
        Utilizado si quieres mostrar cuántas <code>horas:minutos:segundos</code> quedan.
          <br>Debes convertir tu tiempo a <code>marcas de tiempo</code> o obtendrás una cuenta atras
          incorrecta.
      </td>
      <td style="text-align:left"><code>Número</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Define la duración completa.
        <br>Utilizado si deseas mostar cuantas <code>horas:minutos:segundos</code> quedan.
          <br>Debes convertir tu tiempo a <code>marcas de tiempo</code> o obtendrás una cuenta atras
          incorrecta.
      </td>
      <td style="text-align:left"><code>Número</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Define el logotipo de la presencia.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Define el icono pequeño junto al logo de la presencia.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Define el texto que se mostrará al usuario al pasar el cursor sobre el icono pequeño.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "My title",
    state: "My description",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "You hovered me, and what now?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Eventos

Los eventos permiten detectar y manejar algunos cambios o llamadas realizadas. Puede suscribirte a eventos utilizando el método `on`.

```typescript
presence.on("UpdateData", async () => {
    // Hacer algo cuando los datos se actualizan.
});
```

Hay algunos eventos disponibles:

#### `UpdateData`

Este evento es lanzado cada vez que la presencia es actualizada.

#### `MediaKeys` (deshabilitado)

Fired when user uses media keys on his keyboard, [click here](/dev/presence/class#mediakeys) to get more information about media keys.

#### `iFrameData`

Fired when data is received from iFrame script.