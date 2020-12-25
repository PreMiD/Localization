---
title: Metadata.json
description: Contiene datos básicos sobre la Presence
published: true
date: 2020-12-25T00:41:36.917Z
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
    "name": "USUARIO",
    "id": "ID"
  },
  "contributors": [{
    "name": "USUARIO",
    "id": "ID"
  }],
  "service": "SERVICIO",
  "altnames": ["SERVICIO"],
  "description": {
    "en": "DESCRIPCCIÓN  (en inglés)"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["ETIQUETA1", "ETIQUETA2"],
  "category": "CATEGORIA",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "TITULO A MOSTRAR",
      "icon": "ICONO DE FONTAWESOME",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "TITULO A MOSTRAR",
      "icon": "ICONO FONTAWESOME",
      "value": "\"%song%\" por %artist%",
      "placeholder": "usa %song% o %artist%"
    },
    {
      "id": "ID",
      "title": "TITULO A MOSTRAR",
      "icon": "ICONO FONTAWESOME",
      "value": 0,
      "values": ["VALOR 1", "OTRO VALOR", "etc."]
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
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Name es tu nombre de usuario de Discord sin el identificador (#0000). El <code>id</code> de usuario puede copiarse de Discord habilitando el modo desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Debe contener un Object con <code>name</code> e <code>id</code> del desarrollador del contribuidor. El nombre es tu nombre de usuario de Discord sin el identificador (#0000). La <code>id</code> de usuario puede copiarse de Discord habilitando el modo
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
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
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
      <td style="text-align:left"><code>Cadena, array&lt;String&gt;</code></td>
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
      <td style="text-align:left"><code>Cadena, array&lt;String&gt;</code></td>
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
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sí</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ajustes</b></td>
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
            "title": "TÍTULO A MOSTRAR",
            "icon": "ICONO DE FONTAWESOME", //Ejemplo "fas fa-info"
            "value": true //Un valor booleano hará que esté activo/inactivo por defecto
        },
        {
            "id": "ID",
            "if": {
                "ID": true //Si otra configuración equivale a este valor (true/false/0/1/etc.) entonces mostrará este botón
            },
            "title": "TÍTULO A MOSTRAR",
            "icon": "ICONO DE FONTAWESOME",
            "value": "\"%song%\" por %artist%", //Indicando un string hace que la configuración sea un input de tipo texto.
    "placeholder": "usa %song% o %artist%" //Cuando el campo está vacio se mostrará este texto de fondo
  },
  {
    "id": "ID",
    "title": "TITULO A MOSTRAR",
    "icon": "ICONO FONTAWESOME",
    "value": 0, //Índice por defecto para el selector
    "values": ["Valor 1", "Otro valor", "etc."] //Hace que esta propiedad sea un selector con las opciones prestablecidas
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
2. Elija una carpeta de su elección.
3. Ábrelo en tu editor de código.

##### Creando el archivo

1. Entra en la carpeta `src`.
2. Entra en la carpeta `Presence`.
3. Crea un archivo llamado `<service>.json`. (Service es el **nombre** (no una URL) en minúscula del servicio del que quieres dar soporte.)

##### Añadiendo los strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Métodos

Usando los siguientes métodos para conseguir la información de tus ajustes en tus archivos de Presence:
#### `getSetting(String)`
Obtén el valor del ajuste.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
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
      <td style="text-align:left"><b>juegos</b></td>
      <td style="text-align:left"><b>Juegos</b></td>
      <td style="text-align:left">Cualquier sitio web que tenga contenido relacionado con juegos como <code>Kahoot</code> o <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>música</b></td>
      <td style="text-align:left"><b>Música</b></td>
      <td style="text-align:left">Estos son sitios web que ofrecen contenido relacionado con la música, ya sea streaming o descarga.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>sociales</b></td>
        <td style="text-align:left"><b>Social</b></td>
      <td style="text-align:left">Sitios web que se utilizan con el propósito de crear y compartir contenido o para participar en otras formas de redes sociales.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Vídeos y Transmisiones</b></td>
      <td style="text-align:left">Sitios web que sirven con propósito de proporcionar videos y streams.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>otro</b></td>
      <td style="text-align:left"><b>Otras</b></td>
      <td style="text-align:left">Cualquier cosa que no caiga dentro de una categoría específica enumerada arriba.</td>
    </tr>
  </tbody>
</table>

