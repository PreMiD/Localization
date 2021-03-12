---
title: Metadata.json
description: Contiene datos básicos sobre la Presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Si quieres publicar una presence en la tienda y cargarla a través de la extensión deberás crear el archivo `metadata.json` en tu carpeta `dist`.

A continuación se muestra un ejemplo de este archivo.

```typescript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

## Entendiendo el metadata.json

Ese ejemplo parece realmente extraño, ¿eh? No te preocupes, no es tan difícil entender para qué sirve cada variable.

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
      <td style="text-align:left">Debería contener un Object con el nombre <code>name</code> e <code>id</code> del desarrollador de la presence. <code>nombre</code> es tu nombre de usuario de Discord sin el identificador (#0000). El <code>id</code> de usuario puede copiarse de Discord habilitando el modo desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Debe contener un Object con <code>name</code> e <code>id</code> del desarrollador del contribuidor. <code>nombre</code> es tu nombre de usuario de Discord sin el identificador (#0000). La <code>id</code> de usuario puede copiarse de Discord habilitando el modo
        desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">El título del servicio que soporta esta presencia.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Busca la presence utilizando nombres alternativos.<br> Destinado a ser utilizado por presences que tienen nombres diferentes en distintos idiomas (ej. Pokémon y 포켓몬스터).<br> También puedes utilizarlo con presences que contienen caracteres especiales para no tener que escribirlos (ej. Pokémon y Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Descripción del servicio <b>NO</b> de la presence. Tu descripción debe tener un par de valores que indiquen el idioma y la descripción en ese idioma específico. Haz descripciones con los idiomas <i>que conoces</i>, nuestros traductores harán cambios en tu archivo de metadata. Mira la categoría para una lista para los lenguajes de una presencia. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL del servicio. <br><b>Ejemplo:</b><code>vk.com</code><br>        <b>Esta URL debe coincidir con la URL del sitio web ya que se utilizará para detectar donde se inyecta el script. Esto solo puede utilizarse como un arreglo cuando hay más de una URrl</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Una cadena de expresión regular utilizada para coincidir con las urls.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Versión de su presence.</td>
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
      <td style="text-align:left">Enlace al ícono de tu presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">valor <code>#HEX</code>. Recomendamos usar un color primario del servicio
        que tu presence soporte.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array con etiquetas, ayudarán a los usuarios a buscar su presence en el sitio web.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Una string utilizada para representar la categoría bajo la que cae la presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Define si se utilizan <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Un selector de expresiones regulares que selecciona los iframes a inyectar.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Establece si la extensión debe leer logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Una variedad de configuraciones que el usuario puede cambiar</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
  </tbody>
</table>

## Expresiones regulares

Si quieres aprender expresiones regulares, aquí tienes algunos sitios web.

#### Aprendiendo

• [Video rápido para empezar](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Información de expresiones regulares](https://www.regular-expressions.info/tutorial.html)

#### Probando

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Idioma de una Presence

PreMiD es un servicio polígloto, lo que significa que hay una gran cantidad de idiomas involucrados para conectar usuarios en todo el mundo. La lista de idiomas completa puede encontrarse en esta [entrada de la API](https://api.premid.app/v2/langFile/list). Para personalizar tu presence aún más puedes permitir a los usuarios seleccionar su idioma de visualización de la presence, ver [`multiLanguage`](#multilanguage) para más información.

## Configuraciones de una Presence
¡Configura ajustes interactivos para que los usuarios puedan personalizar la Presence!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Introducción

La configuración `multiLanguage` se utiliza para permitir a los usuarios seleccionar manualmente el idioma en el que quieren mostrar la presence. Esto requiere que utilices las cadenas de nuestra [API](https://api.premid.app/v2/langFile/presence/en), para obtener información sobre cómo añadir cadenas haz clic [aquí](/dev/presence/metadata/adding-new-strings).

#### Configuración

La opción `multiLanguage` es especial, no requiere `title` ni `icon` ni `value` o `values` como otras. ¡Es distinta!

La opción `multiLanguage` puede establecerse a lo siguiente:

`true`: usa esto si solo vas a usar cadenas de `general.json` y `<service>.json` del [repositorio de localización](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: nombre del archivo excluyendo la extensión (.json) dentro del repositorio de localización [](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluyendo el archivo `general` ya que siempre se carga). Solo se mostrarán idiomas comunes tanto del archivo `general` como del archivo indicado. `Array<String>`: si estás usando mas de un archivo del [repositorio de localización](https://github.com/PreMiD/Localization/tree/master/src/Presence) puedes especificar todos los valores en un array (excluyendo el archivo `general`, dado que siempre se carga). Sólo se mostrarán los idiomas comunes de todos los archivos.

#### Añadir nuevos strings

##### Clonando el proyecto

1. Abre una consola y escribe `git clone https://github.com/PreMiD/Localization`.
2. Escoge una carpeta a tu gusto.
3. Ábrela en tu editor de código.

##### Creando el archivo

1. Entra en la carpeta `src`.
2. Entra en la carpeta `Presence`.
3. Crea un archivo llamado `<service>.json`. (Service es el **nombre** (no una URL) en minúscula del servicio del que quieres dar soporte.)

##### Añadiendo los strings

Cada `string` es un `Object` donde el valor es el nombre del servicio seguido de un punto y el nombre de la cadena.

El nombre de la cadena es una palabra que identifica el mensaje.

El `Object` tienes dos propiedades: `message` y `description`. `message` es el texto que tiene que ser traducido. `description` es una descripción del mensaje para dar a entender a nuestros traductores lo que están traduciendo.

**Nota:** No añadir ninguna cadena duplicada. (Esto incluye cadenas fuera del archivo `general.json` pero no de otros archivos.)

Visualización del archivo:

```typescript
{
  "<servicio>.<nombreString>": {
    "message": "Texto que tiene que ser traducido.",
    "description": "Esto da un contexto del texto superior."
  },
  "<servicio>.<otroString>": {
    "message": "Texto que tiene que ser traducido.",
    "description": "Esto da un contexto del texto superior."
  }
}
```

Después de haber creado completamente el archivo, puedes crear un Pull Request en el [repositorio de localización](https://github.com/PreMiD/Localization), en la descripción **debes** incluir un enlace al Pull Request de la presence actualizada usando estas nuevas strings del [repositorio de Presence](https://github.com/PreMiD/Presences).

#### Claves por defecto
Las claves que no tenías que indicar se establecen automáticamente a lo siguiente: `title`: "Idioma" **Nota:** Esto se traduce a su idioma predeterminado (idioma del navegador). `icon`: "fas fa-language" ([Vista previa](https://fontawesome.com/icons/language)) `value`: **Establecido al idioma del navegador si está disponible (100% traducido), de lo contrario Inglés.** `values`: **Establecido a los idiomas disponibles (idiomas que lo tienen 100% traducido).**

**Nota:** Estos no pueden ser cambiados de ningún modo.

### Métodos

Usa los siguientes métodos para obtener la información de los ajustes en tus archivos presence:
#### `getSetting(String)`
Obtén el valor del ajuste.
```typescript
const setting = await presence.getSetting("pdexID"); //Reemplaza pdexID con el id de tu ajuste
console.log(setting); // Esto mostrará el valor del ajuste
```

#### `hideSetting(String)`
Oculta la configuración dada.
```typescript
presence.hideSetting("pdexID"); //Reemplaza pdexID con el id del ajuste
```

#### `showSetting(String)`
Muestra la configuración dada (Solo funciona si el ajuste estaba ya oculto).
```typescript
presence.showSetting("pdexID"); //Reemplaza pdexID con el id del ajuste
```

## Categorías de una presence

Cuando haces tu Presence, debes especificar de que categoría es. Esta es una lista de las categorías que puedes usar.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Categoría</th>
      <th style="text-align:left">Nombre</th>
      <th style="text-align:left">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Cualquier cosa relacionada con el anime, desde los foros hasta las plataformas de streaming de vídeo.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Games</b></td>
      <td style="text-align:left">Cualquier sitio web que tenga contenido relacionado con juegos como <code>Kahoot</code> o <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Music</b></td>
      <td style="text-align:left">Estos son sitios web que ofrecen contenido relacionado con la música, ya sea streaming o descarga.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Socials</b></td>
      <td style="text-align:left">Sitios web que se utilizan con el propósito de crear y compartir contenido o para participar en otras formas de redes sociales.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videos & Streams</b></td>
      <td style="text-align:left">Sitios web que sirven con propósito de proporcionar videos y streams.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Other</b></td>
      <td style="text-align:left">Cualquier cosa que no caiga dentro de una categoría específica enumerada arriba.</td>
    </tr>
  </tbody>
</table>

