---
title: Clase de presencia
description: La clase principal para cada presencia PreMiD
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
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

## Métodos

### `getActivity()`

Devuelve un objeto de `presenceData` a lo que la presencia está mostrando.

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

### `getStrings(objeto)`

Un método asíncrono que te permite conseguir las strings traducidas de la extensión. Debe proporcionar `Objeto` con claves siendo la clave para la string, `valor clave` es el valor de la string. Una serie de strings traducidas pueden ser encontradas usando la siguiente url: `https://api.premid.app/v2/langFIle/extension/es`

```typescript
// Devuelve las strings `Playing` y `Paused`
// desde la extensión.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // Resultado: Reproduciendo.
const pauseString = strings.pause // Resultado: Reproducción pausada
```

### `getPageletiable(String)`

Devuelve una variable desde el sitio web si existe.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // Esto registrará la "Variable content"
```

### `getExtensionVersion(Boolean)`
Regresa a la versión de la extensión que el usuario está usando.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Registrará 210
var version = presence.getExtensionVersion(false);
console.log(version); // Registrará 2.1.0
```

### `getSetting(String)`
Regresa el valor del ajuste.
```typescript
var setting = await presence.getSetting("pdexID"); //Reemplaza pdexID con el id del ajuste
console.log(setting); // Esto registrará el valor del ajuste
```

### `hideSetting(String)`
Oculta la configuración dada.
```typescript
presence.hideSetting("pdexID"); //Reemplaza pdexID con el id del ajuste
```

### `showSetting(String)`
Muestra la configuración dada (Solo funciona si el ajuste estaba ya oculto).
```typescript
presence.showSetting("pdexID"); //Reemplaza pdexID con el id del ajuste
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
var presenceData: presenceData = {
    details: "Mi título",
    state: "Mi descripción",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Has pasado el ratón, y ahora qué? ,
    startTimestamp: 1564444631188,
    endTimestamp: 15644634734
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

#### `iFrameData`

Lanzado cuando se obtienen datos del script iFrame.
