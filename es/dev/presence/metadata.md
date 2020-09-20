---
title: Metadata.json
description: Contiene datos básicos sobre la presencia
published: true
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadata.json

Si quieres publicar una presencia en la tienda y cargarla a través de la extensión deberías crear el archivo `metadata.json` en tu carpeta `dist`.

El ejemplo de ese archivo se puede encontrar a continuación.

```javascript
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
    "en": "DESCRIPCIÓN"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSIÓN",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["ETIQUETA1", "ETIQUETA2"],
  "category": "CATEGORÍA",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "MOSTRAR TÍTULO",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "MOSTRAR TÍTULO",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\"de %artist%",
            "placeholder": "use %song% o %artist%"
        },
        {
            "id": "ID",
            "title": "MOSTRAR TÍTULO",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

## Comprendiendo el metadata.json

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
      <td style="text-align:left"><b>autor</b>
      </td>
      <td style="text-align:left">Debe contener un Object con <code>name</code> e <code>id</code> del desarrollador de la presencia. El nombre es tu nombre de usuario de Discord sin el identificador (#0000). La <code>id</code> de usuario puede copiarse de Discord habilitando el modo
        desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contribuidores</b>
      </td>
      <td style="text-align:left">Debería contener un Object con <code>name</code> e <code>id</code> del colaborador. El nombre es tu nombre de usuario de Discord sin el identificador (#0000). La <code>id</code> de usuario puede copiarse de Discord habilitando el modo
        desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>servicio</b>
      </td>
      <td style="text-align:left">El título del servicio que soporta esta presencia.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>nombres alternativos</b>
      </td>
      <td style="text-align:left">Ser capaz de buscar la presencia usando un nombre alternativo. <br>Destinado a ser utilizado para presences que tienen nombres diferentes en diferentes idiomas (p. ej., Pokémon y 포켓몬스터)<br>También puedes usarlo para presences con caracteres especiales y así no tendrás que escribirlos (p. ej., Pokémon y Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>descripción</b>
      </td>
      <td style="text-align:left">Una pequeña descripción de la presencia, puedes usar la descripción del servicio
        si no se te ocurre nada. Tu descripción debe tener un par de valores que indiquen el idioma y la descripción en ese idioma específico. Haz descripciones con los idiomas <i>que conoces</i>, nuestros traductores harán cambios en tu archivo de metadata. Mira la categoría para una lista para los lenguajes de una presencia. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL del servicio. <br><b>Ejemplo:</b><code>vk.com</code><br>        <b>This URL debe coincidir con la URL del sitio web ya que se utilizará para detectar donde y donde no este sitio web inyecta scripts. Esto solo puede utilizarse como un arreglo cuando hay más de una URrl</b>
      </td>
      <td style="text-align:left"><code>Cadena, array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Una cadena de expresión regular utilizada para coincidir con las urls.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versión</b>
      </td>
      <td style="text-align:left">Versión de su presencia.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logotipo</b>
      </td>
      <td style="text-align:left">Enlace al tipo de logotipo de servicio&apos;s.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Enlace a su presencia.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>valor #HEX</code>. Recomendamos usar un color primario del servicio
        que tu presencia soporta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>etiquetas</b>
      </td>
      <td style="text-align:left">Array con etiquetas, ayudarán a los usuarios a buscar su presencia en el sitio web.</td>
      <td
      style="text-align:left"><code>Cadena, array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>categoría</b>
      </td>
      <td style="text-align:left">Una cadena utilizada para representar la categoría bajo la que cae la presencia.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Define si se utilizan <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Un selector de expresiones regulares que selecciona iframes a inyectar.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ajustes</b>
      </td>
      <td style="text-align:left">Una variedad de configuraciones que el usuario puede cambiar</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
  </tbody>
</table>

## Expresiones regulares

Si quieres aprender expresiones regulares, aquí tienes algunos sitios web.

#### Aprendiendo

• [Video rápido para empezar](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Información de expresiones regulares](https://www.regular-expressions.info/tutorial.html)

#### Probando

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Idiomas de la presencia

PreMiD es un servicio polígloto, lo que significa que hay una gran cantidad de idiomas involucrados para conectar usuarios en todo el mundo. La lista de idiomas completa puede encontrarse en este [endpoint del API](https://api.premid.app/v2/langFile/list).

## Configuraciones de una presencia
¡Configura ajustes interactivos para que los usuarios puedan personalizar la presencia!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ÍCONO DE FONTAWESOME GRATIS", //Ejemplo "fas fa-info"
            "value": true //Un valor booleano hará que esté encendido/apagado con el valor como por defecto
        },
        {
            "id": "ID",
            "if": {
                "ID": true //Si otra configuración equivale a este valor (true/false/0/1/etc.) entonces mostrará este botón
            },
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ÍCONO DE FONTAWESOME GRATIS",
            "value": "\"%song%\" por %artist%", //Colocando una string va a hacer que la configuración un input que puedes usarlo como personalizado.
            "placeholder": "usa %song% o %artist%" //Cuando la entrada está vacía mostrará esto en gris
        },
        {
            "id": "ID",
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ÍCONO DE FONTAWESOME GRATIS",
            "value": 0, //Valor por defecto del selector
            "values": ["1", "2", "etc."] //Hará la configuración un selector en donde podrás elegir lo que quieras
        }
    ]
```

Usando los siguientes métodos para conseguir la información de tus ajustes en tus archivos de la presencia:
### `getSetting(String)`
Regresa el valor del ajuste.
```typescript
var setting = await presence.getSetting("pdexID"); //Cambia pdexID con la ID de la configuración
console.log(setting); // Esto mostrará el valor de la configuración
```

### `hideSetting(String)`
Oculta la configuración dada.
```typescript
presence.hideSetting("pdexID"); //Reemplaza pdexID con el ID de la configuración
```

### `showSetting(String)`
Muestra la configuración dada (Solo funciona si el ajuste estaba ya oculto).
```typescript
presence.showSetting("pdexID"); //Reemplaza pdexID con el ID de la configuración
```

## Categorias de una presencia

Cuando haces tu presencia, debes especificar de que categoría es tu presencia. Esta es una lista de las categorias que puedes usar.

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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>juegos</b></td>
    <td style="text-align:left"><b>Juegos</b></td>
      <td style="text-align:left">Cualquier sitio web que tenga contenido relacionado con juegos como <code>Kahoot</code> o <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>música</b></td>
    <td style="text-align:left"><b>Música</b></td>
      <td style="text-align:left">Estos son sitios web que ofrecen contenido relacionado con la música, ya sea streaming o descarga.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>sociales</b></td>
        <td style="text-align:left"><b>Social</b></td>
      <td style="text-align:left">Sitios web que se utilizan con el propósito de crear y compartir contenido o para participar en otras formas de redes sociales.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Vídeos y Transmisiones</b></td>
      <td style="text-align:left">Sitios web que sirven con propósito de proporcionar videos y streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>otro</b></td>
    <td style="text-align:left"><b>Otras</b></td>
      <td style="text-align:left">Cualquier cosa que no caiga dentro de una categoría específica enumerada arriba.</td>
      </td>
    </tr>
  </tbody>
</table>

