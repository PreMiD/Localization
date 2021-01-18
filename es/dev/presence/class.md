---
title: Clase Presence
description: La clase principal para cada presence de PreMiD
published: true
date: 2021-01-04T18:22:24.312Z
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

Al establecer `appMode` a `true` si la presence enviara un `PresenceData` vacío, la app mostrará la imagen y nombre de la aplicación en el perfil del usuario.

## Métodos

### `getActivity()`

Devuelve un objeto `PresenceData` con los datos que se están mostrando en la presence.

### `setActivity(PresenceData | Slideshow, Boolean)`

Establece la actividad de tu perfil de acuerdo a los datos proporcionados.

El primer parámetro requiere una interfaz [`PresenceData`](#presencedata-interface) o una clase [`Slideshow`](/dev/presence/slideshow) para obtener toda la información que deseas mostrar en tu perfil.

El segundo parámetro indica si la presence está reproduciendo algo o no. Utiliza siempre `true` si proporcionas marcas de tiempo (timestamps) en `PresenceData`.

### `clearActivity()`

Elimina la actividad actual y el titulo de la bandeja de trabajo.

### `setTrayTitle(String)`

> Este método funciona sólo en Mac OS. 
> 
> {.is-warning}

Establece el título de la bandeja en la barra de menús.

### `createSlideshow()`

Crea una nueva instancia de la clase `Slideshow`.

```typescript
const slideshow = presence.createSlideshow();
```

Se sugiere hacer esto al instanciar la clase `Presence`:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // clientId de ejemplo
  }),
  slideshow = presence.createSlideshow();
```

Puedes encontrar la documentación para la clase `Slideshow` [aquí](/dev/presence/slideshow).

### `getStrings(objeto)`

Un método asíncrono que te permite obtener strings traducidas de la extensión.

Debes proporcionar un `Object` donde las claves son la clave del string, `valorClave` es el valor del string. Puedes encontrar una lista de strings traducidas aquí: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Devuelve las strings `Playing` y `Paused`
// desde la extensión.
const strings = await presence.getStrings({
  reproduciendo: "general.playing",
  pausado: "general.paused"
}, "en");

const playString = strings.reproduciendo; // resultato: Playing
const pauseString = strings.pausado; // resultado: Paused
```

Desde la versión 2.2.0 de la extensión ahora puedes obtener strings dado un idioma. Esto funciona bien en conjunto de la configuración `multiLanguage` recientemente añadida.

Sugerimos que utilices el siguiente código para que se actualice automáticamente PresenceData si el usuario cambia el idioma;

```typescript
// Una interfaz de strings que estás obteniendo obtienes (buena para calidad del código y autocompletado).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // Las strings que estás obteniendo, asegurate de que concuerdan con la interfaz LangStrings.
      play: "general.playing",
      pause: "general.paused"
    },
    // El ID es el ID del campo multiLanguage establecido en los ajustes.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // El ID es el ID del campo multiLanguage establecido en los ajustes.
  oldLang: string = await presence.getSetting("ID");

//! ¡El siguiente código debe estar dentro del evento updateData!
// El ID es el ID del campo multiLanguage establecido en los ajustes.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = await getStrings();
}

const playString = strings.play; // resultado: Playing
const pauseString = strings.pause; // resultado: Paused
```

### `getPageletiable(String)`

Devuelve una variable desde el sitio web si existe.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Esto mostará en la consola "Contenido de la variable"
```

### `getExtensionVersion(Boolean)`

Devuelve la versión de la extensión que está usando el usuario.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Mostrará 210
const version = presence.getExtensionVersion(false);
console.log(version); // Mostrará 2.1.0
```

### `getSetting(String)`

Devuelve el valor del ajuste.

```typescript
const setting = await presence.getSetting("pdexID"); // Remplaza pdexID con el id del ajuste
console.log(setting); // Esto mostrará el valor del ajuste
```

### `hideSetting(String)`

Oculta el ajuste indicado.

```typescript
presence.hideSetting("pdexID"); // Reemplaza pdexID con el ID de la configuración
```

### `showSetting(String)`

Muestra el ajuste indicado (solo funciona si el ajuste ha sido ocultado).

```typescript
presence.showSetting("pdexID"); // Reemplaza pdexID con el ID de la configuración
```

### `getLogs()`

Devuelve los logs de la consola del sitio web.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Obtienes los últimos 100 logs (en un array).
```

**Nota:** Requiere establecer la propiedad `readLogs` a `true` en el archivo `metadata.json`.

### `info(String)`

Muestra el mensaje proporcionado en la consola en un formato basado en la presence bajo el estilo `info`.

```typescript
presence.info("Test") // Esto logeará "test" con un estilo predeterminado.
```

### `success(String)`

Muestra el mensaje proporcionado en la consola en un formato basado en la presence bajo el estilo `satisfactorio`.

```typescript
presence.success("Test") // Esto logeará "test" con un estilo predeterminado.
```

### `error(String)`

Muestra el mensaje proporcionado en la consola en un formato basado en la presence bajo el estilo `error`.

```typescript
presence.error("Test") // Esto logeará "test" con un estilo predeterminado.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Devuelve 2 marcas de tiempo (timestamps) en un `array` que puede ser usado para `startTimestamp` y `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nota:** El `String` dado en querySelector es un ejemplo.

### `getTimestamps(Number, Number)`

Devuelve 2 `snowflake` de timestamps en un`Array` que pueden ser usados para `startTimestamp` y `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nota:** El `String` proporcionado en querySelector sirve de ejemplo.

### `timestampFromFormat(String)`

Convierte una cadena con formato `HH:MM:SS` o `MM:SS` o `SS` en un entero (no devuelve un timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nota:** El `String` proporcionado en queryString sirve de ejemplo.

## Interfaz `PresenceData`

Se recomienda utilizar la interfaz `PresenceData` cuando se está utilizando el método `setActivity()`.

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
      <td style="text-align:left">La primera línea en la presence, generalmente usada como cabecera.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Segunda línea en la presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Define la hora actual.<br>
        Utilizado si quieres mostrar cuántas <code>horas:minutos:segundos</code> quedan.
          <br>Debes convertir tu tiempo a <code>timestamps</code> u obtendrás una cuenta atrás
          incorrecta.
      </td>
      <td style="text-align:left"><code>Número</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Define la duración completa.
        <br>Utilizado si deseas mostrar cuantas <code>horas:minutos:segundos</code> quedan.
          <br>Debes convertir la marca de tiempo a <code>timestamp</code> u obtendrás una cuenta atrás errónea.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Define el logotipo de la presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Define el icono pequeño junto al logo de la presence.</td>
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
  details: "Mi título",
  state: "Mi descripcción",
  largeImageKey: "logo_del_servicio",
  smallImageKey: "logo_pequeño_del_servicio",
  smallImageText: "Me has puesto el cursor encima, ¿qué hacemos?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
};
```

## Eventos

Los eventos permiten detectar y manejar algunos cambios o llamadas realizadas. Puede suscribirte a eventos utilizando el método `on`.

```typescript
presence.on("UpdateData", async () => {
  // Haz algo cuando se actualicen los datos.
});
```

Hay algunos eventos disponibles:

#### `UpdateData`

Este evento es lanzado cada vez que la presence es actualizada.

#### `iFrameData`

Lanzado cuando se obtienen datos del script iFrame.
