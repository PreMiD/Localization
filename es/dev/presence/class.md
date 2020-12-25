---
title: Clase Presence
description: La clase principal para cada presence de PreMiD
published: true
date: 2020-12-25T00:42:46.948Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Clase Presence

## Introducción

La clase `Presence` es útil dado que contiene métodos básicos para construir una presence.

Cuando creas una clase has de especificar apropiadamente el campo `clientId`.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // clientId de ejemplo
});
```

### Propiedades

Hay tres propiedades disponibles para la clase `Presence`.

#### `clientId`

Esta propiedad es necesaria para que funcione, ya que utiliza el id de aplicación para mostrar su logotipo entre otras imágenes. Puedes obtenerlo en tu [página de aplicaciones](https://discordapp.com/developers/applications).

#### `injectOnComplete`

Al configurar `injectOnComplete` a `true` el primer evento `UpdateData` se lanzará, en ambos archivos `presence.ts` y `iframe.ts`, una vez haya terminado de cargar completamente la página.

#### `appMode`

When setting `appMode` to `true` and the presence were to send an empty `PresenceData`, the app will show the application (image and name) on the user's profile instead of nothing.

## Métodos

### `getActivity()`

Returns a `PresenceData` object of what the presence is displaying.

### `setActivity(PresenceData | Slideshow, Boolean)`

Establece la actividad de tu perfil de acuerdo a los datos proporcionados.

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

El segundo parámetro indica si la presencia está reproduciendo algo o no. Always use `true` if you provide timestamps in `PresenceData`.

### `clearActivity()`

Limpia la actividad actual, los atajos de teclado y el título de la barra de tareas.

### `setTrayTitle(String)`

> Este método funciona sólo en Mac OS. 
> 
> {.is-warning}

Establece el título de la bandeja en la barra de menús.

### `createSlideshow()`

Creates a new `Slideshow` class.

```typescript
const slideshow = presence.createSlideshow();
```

This is suggested to do right when you make the `Presence` class.

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Example clientId
  }),
  slideshow = presence.createSlideshow();
```

You can find the documentation for the `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(objeto)`

Un método asíncrono que te permite conseguir las strings traducidas de la extensión.

Debe proporcionar `Objeto` con claves siendo la clave para la string, `valor clave` es el valor de la string. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Devuelve las strings `Playing` y `Paused`
// desde la extensión.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

Since v2.2.0 of the extension you can now get the strings of a certain language. This works well with the also newly added `multiLanguage` setting option.

We suggest you use the following code so it automatically updates the PresenceData if the user changes the selected language;

```typescript
// An interface of the strings you are getting (good for code quality and autocomplete).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // The strings you are getting, make sure this fits with your LangStrings interface.
      play: "general.playing",
      pause: "general.paused"
    },
    // The ID is the ID of the multiLanguage setting.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // The ID is the ID of the multiLanguage setting.
  oldLang: string = await presence.getSetting("ID");

//! The following code must be inside the updateData event!
// The ID is the ID of the multiLanguage setting.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

### `getPageletiable(String)`

Devuelve una variable desde el sitio web si existe.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Regresa a la versión de la extensión que el usuario está usando.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Obtén el valor del ajuste.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

Oculta la configuración dada.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

Muestra la configuración dada (Solo funciona si el ajuste estaba ya oculto).

```typescript
presence.showSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `getLogs()`

Returns the logs of the websites console.

```typescript
const logs = await presence.getLogs();
console.log(logs); // This will log the latest 100 logs (in an array).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Console logs the given message in a format based of the presence in the `info` style.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Console logs the given message in a format based of the presence in the `success` style.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Console logs the given message in a format based of the presence in the `error` style.

```typescript
presence.error("Test") // This will log "test" in the correct styling.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `getTimestamps(Number, Number)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `timestampFromFormat(String)`

Converts a string with format `HH:MM:SS` or `MM:SS` or `SS` into an integer (Does not return snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

## `PresenceData` Interfaz

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

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
      <td style="text-align:left">details</td>
      <td style="text-align:left">La primera línea en la presencia, generalmente usada como cabecera.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Segunda línea en la presencia.</td>
      <td style="text-align:left"><code>String</code>
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
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Define el icono pequeño junto al logo de la presencia.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Define el texto que se mostrará al usuario al pasar el cursor sobre el icono 
        pequeño.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
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
  // Do something when data gets updated.
});
```

Hay algunos eventos disponibles:

#### `UpdateData`

Este evento es lanzado cada vez que la presencia es actualizada.

#### `iFrameData`

Lanzado cuando se obtienen datos del script iFrame.
