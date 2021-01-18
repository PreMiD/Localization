---
title: Desarrollo de Presences
description:
published: true
date: 2020-12-26T15:02:54.817Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Todas las presences ahora se almacenan aquí: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versión `2.x` introduce la [tienda de presences](https://premid.app/store). Los usuarios ahora tienen la capacidad de añadir y eliminar manualmente sus presences favoritas a través de la interfaz de usuario del [sitio web](https://premid.app/).

> Antes de empezar es muy recomendable que mires nuestras pautas para presences. 
> 
> {.is-warning}

- [Directrices](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Estructura

Toda Presence está programada en [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) tiene algunos tipos definiciones más que JavaScript, así que corregir e identificar errores es mucho más fácil.

## Instalación

1. Instala [Git](https://git-scm.com/).
2. Instala [Node](https://nodejs.org/en/) (viene con [npm](https://www.npmjs.com/)).
3. Instala [TypeScript](https://www.typescriptlang.org/index.html#download-links) (abre una terminal y escribe `npm install -g typescript`).

## Clonando el proyecto

1. Abre la consola y escribe `git clone https://github.com/PreMiD/Presences`.
2. Escoge una carpeta a tu gusto.
3. Ábrela en tu editor de código.

## Creando carpetas y archivos

1. Ve a la carpeta `websites` y luego a la carpeta con la primera letra del **nombre** (no una URL) del servicio que deseas dar soporte.
2. Cree una carpeta con el **nombre** (no una URL) del servicio que desea soportar.
3. Crea un archivo de `presence.ts` y `tsconfig.json` dentro.
4. Cree una carpeta llamada `dist` en su interior.
5. Cree un archivo `metadata.json` dentro de la carpeta `dist`.

## Completando el archivo tsconfig.json

Por favor, introduzca el siguiente código dentro del archivo `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Para obtener más información sobre la configuración de TypeScript haga clic [aquí](/dev/presence/tsconfig).

## Completando el archivo metadata.json

Hemos hecho un generador de archivos `metadata.json` [aquí](https://eggsy.xyz/projects/premid/mdcreator) para la gente perezosa. Aún así se sugiere leerlo para que sepas cómo funciona.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "USUARIO",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USUARIO",
      "id": "ID"
    }
  ],
  "service": "SERVICIO",
  "altnames": ["SERVICIO"],
  "description": {
    "en": "DESCRIPCCION (en ingles)"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["ETIQUETA1", "ETIQUETA2"],
  "category": "CATEGORIA",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
    {
      "id": "ID",
      "title": "NOMBRE A MOSTRAR",
      "icon": "ICONO FONTAWESOME",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "NOMBRE A MOSTRAR",
      "icon": "ICONO FONTAWESOME",
      "value": "\"%song%\" por %artist%",
      "placeholder": "usa %song% o %artist%"
    },
    {
      "id": "ID",
      "title": "NOMBRE A MOSTRAR",
      "icon": "ICONO FONTAWESOME",
      "value": 0,
      "values": ["Valor 1", "Valor 2", "etc."]
    }
  ]
}
```

Por favor copia el código anterior y ponlo en tu archivo `metadata.json`. Ahora necesitas saber los valores de las propiedades. Ten en cuenta que las siguientes propiedades para poner en tu archivo `metadata.json` son opcionales, si no tienes planeado usarlos necesitas eliminarlos.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Aclarando unos valores predefinidos:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Descripción</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Opcional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Debe contener un Object con <code>name</code> e <code>id</code> del desarrollador de la presence. Name es tu nombre de Discord sin el identificador (#0000). Puedes copiar tu <code>id</code> de usuario de Discord activando el modo desarrollador y pulsando sobre tu perfil con el botón secundario del ratón.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Debería contener un Object con las propiedades <code>name</code> e <code>id</code> del desarrollador de la presence. Name es tu nombre de Discord sin el identificador (#0000). Puedes copiar el <code>id</code> de usuario de Discord activando el modo desarrollador y pulsando sobre el perfil del usuario con el botón secundario del ratón.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">El título del servicio que soporta esta presence.<br>
      (Debe ser el mismo nombre que la carpeta donde está todo)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left"><br>Destinado a ser utilizado para presences que tienen nombres distintos en idiomas diferentes (ej., Pokémon y 포켓몬스터)<br>También puedes usarlo para presences con caracteres especiales y así no tendrás que escribirlos (ej., Pokémon y Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Una pequeña descripción de la presence, puedes usar la descripción del servicio si no se te ocurre nada. Tu descripción debe contener tuplas de valores, indicando el idioma y la descripción en dicho idioma. Escribe descripciones en los idiomas <i>que tu conozcas</i>, nuestros traductores realizarán cambios en tu archivo metadata.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL del servicio. <br><b>Ejemplo:</b><code>vk.com</code><br>
        <b>Esta URL debe coincidir con la URL del sitio web ya que se detectará si es o no el sitio web al que se inyecta el script.</b><br><b>NO</b> agregues <code>https://</code> o <code>http://</code> dentro de la URL ni un slash al final:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Nota</b>: Algunas URLs pueden tener <code>www.</code> o algo parecido delante de su dominio. ¡<b>NO</b> olvides añadirlo!<br>
Puedes añadir multiples URLs haciendo lo siguiente:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
También podrías usar regExp (También conocido como Regex), las cuales son explicadas más adelante.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Una expresión regular es para buscar URLs<br>
      expresiónes regulares, también llamadas Regex, puedes ser usadas en sitios webs con múltiples subdominios.<br>
Puedes usar la siguiente expresión regular para eso:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD significa Top Level Domain, por ejemplo: .com .net<br>
<code>([a-z0-9]+)</code> significa cualquier cosa de la A a la Z y desde el 0 al 9.<br>
        Puedes pegar un vistazo rápido a este <a href="https://youtu.be/sXQxhojSdZM">video</a> para tener una idea de cómo funciona<br>
        Puedes probar tu expresión regular en <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Versión de la presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Enlace al logotipo del servicio.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Enlace a la miniatura de la presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">Valor <code>#HEX</code>. Recomendamos que utilizes el color primario del servicio.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array con etiquetas, estas ayudarán a los usuarios a buscar tu presence en la web.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Un string que representa la categoría a la que pertenece la presence. Mira las categorías válidas <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">aquí</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Define si se utilizan <code>iFrames</code>.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Un selector de expresiones regulares que selecciona los iframes a donde inyectar. Mira expresiones regulares para más información.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Define si la extensión debe capturar llamadas a <code>console.log</code>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Un array con configuraciones del usuario puede cambiar.<br>
      Lee más acerca configuración de presencias <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">aquí</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
  </tbody>
</table>

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator).

## Empezando

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //El ID de cliente creado en https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Puedes usar esto para obtener strings traducidas
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Obtén y procesa aquí los datos

    // leer elementos del DOM //
    // llamadas api//
    // establecer variables //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Ejecuta una función fuera de UpdateData cada 10 segundos para obtener y establecer variables que requiere el evento UpdateData

*/

presence.on("UpdateData", async () => {
  /*UpdateData se está lanzando siempre y debería utilizarse como evento de refresco o `tick`. Esto se llama varias veces por segundo cuando es posible.

    Es recomendado crear una función fuera de este evento para actualizar variables y hacer trabajos que requieren tiempos de espera como hacer llamadas a una API.*/

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*La clave (nombre del archivo) de la imagen grande de la presence. Estos se suben y se nombran en la sección Rich Presence de tu aplicación, llamada Art Assets*/
    smallImageKey:
      "key" /*La clave (nombre del archivo) de la imagen pequeña de la presence. Estos son cargados y nombrados en la sección Rich Presence de tu aplicación llamados Art Assets*/,
    smallImageText: "Un texto", //Este texto será mostrado al pasar el cursor sobre la imagen pequeña
    details: "Viendo Nombre Página", //La sección superior del texto de la presence
    state: "Leyendo sección A", //La sección inferior del texto de la presence
    startTimestamp: 1577232000, //Un timestamp unix desde el que empezar a contar
    endTimestamp: 1577151472000 //Si quieres mostrar el tiempo restante en vez de el activo, esto es el timestamp en el que va a terminar el evento
  }; /*Opcionalmente puedes establecer aquí el valor a largeImageKey y cambiar los valores de las otras propiedades, por ejemplo presenceData.type = "lorem ipsum"; types examples: details, state, etc.*/

  if (presenceData.details == null) {
    //Esto es si no has establecido nada en la propiedad details
    presence.setTrayTitle(); //Elimina el titulo de la barra de tareas a usuarios mac
    presence.setActivity(); /*Actualiza la presence sin datos, eliminando los datos actuales y mostrando el icono de la aplicación y nombre de la aplicación configurada en Discord*/
  } else {
    //Esto es si hay details
    presence.setActivity(presenceData); //Actualiza la presence con todos los datos del objeto presenceData
  }
});
```

Puedes copiar esto dentro de tu archivo `presence.ts` y editar los valores. La configuración de los valores se hace dentro del evento updateData.

Para ejemplos sugerimos mirar el código de presences como: 1337x o 9GAG. Para más información sobre la clase `Presence` haz clic [aquí](/dev/presence/class).

Desde la v2.2.0 ahora hay Slideshows, esto le permite mostrar múltiples interfaces de `PresenceData` en un intervalo, para más información sobre la clase `Slideshow` haz clic [aquí](/dev/presence/slideshow).

## ¡¿No puedes obtener cierta información?!

Muchos sitios web están utilizando [ iframes ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inline Frames ](https: / /en.wikipedia.org/wiki/HTML_element#Frames)). Estas etiquetas html pueden contener múltiples fuentes, como videos. Pero a veces no son relevantes. Algunos están ocultos o simplemente no se usan activamente. Compruebe si puede extraer la información que necesita sin ellos antes de realizar un trabajo innecesario.

1. Verifícalos en la consola de tu navegador (asegúrate de estar en la pestaña **Elementos**).
2. Buscar (<kbd> CTRL </kbd> + <kbd> F </kbd> (Windows) o <kbd> CMD </kbd> + <kbd> F </kbd> (MacOS)).
3. Ejecuta `document.querySelectorAll("iframe")`.

Si encuentras que los datos están en un iFrame, debes hacer lo siguiente:

1. Crea un archivo `iframe.ts`.
2. Establece iFrame a `true` en tu archivo de metadata.
3. Llenando tu archivo iFrame.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Obtén todos los datos que requieras de iFrame y guardalos en
  variables, luego envialos usando iframe.send
  */
  iframe.send({
    //enviando los datos
    video: video,
    time: video.duration
  });
});
```

4. Configurando que el archivo de la presence reciba datos del archivo de iFrame.

```typescript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Nota:** Esto debe colocarse fuera del evento updateData.

## Compilando

Abre una consola en tu carpeta y escribe `tsc -w` para compilar `presence.ts` en la carpeta `/dist`.

# Cargando la Presence

1. Abre la ventana emergente y mantén pulsado el botón <kbd>Shift</kbd> de tu teclado.
2. **Cargar Presence** aparecerá en la sección Presences.
3. Haz clic en él mientras mantienes pulsado el botón <kbd>Shift</kbd>.
4. Selecciona la carpeta /dist de tu presence.

# Algunos consejos útiles

## Recarga en caliente

El sitio web en el que estás desarrollando se recarga automáticamente cada vez que guarda un archivo en su carpeta.

## Depurando

- Puedes poner `console.log("Prueba");` entre tu código y ver si la consola de tu navegador te muestra "Prueba". Si es así entonces sigue y vuelve a intentarlo después de la siguiente función. Si no es así, hay un error arriba.
- Si eso no te ayuda entonces pide ayuda a un desarrollador de presences en nuestro [servidor de Discord](https://discord.premid.app/).

# Explicación de archivos

- [Presence Class](/dev/presence/class)
- [Clase SlideshowSlide](/dev/presence/slideshow)
- [iFrame Class](/dev/presence/iframe)
- [Archivo de Metadata](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig ""){.links-list}
