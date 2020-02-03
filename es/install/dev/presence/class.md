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
    clientId: "514271496134389561" // Example clientId
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

Permite obtener texto traducido a través de la extensión. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

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
      <td style="text-align:left">details</td>
      <td style="text-align:left">The first line in your presence, usually used as header.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Second line in your presence.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Defines the current time.<br>
        Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Defines the full duration.
        <br>Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Defines the logo for the presence.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Defines the small icon next to presence&apos;s logo.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Defines the text that will be shown to user when he will hover the small
        icon.</td>
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

## Events

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `MediaKeys` (disabled)

Fired when user uses media keys on his keyboard, [click here](/dev/presence/class#mediakeys) to get more information about media keys.

#### `iFrameData`

Fired when data is received from iFrame script.