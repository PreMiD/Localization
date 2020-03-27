---
title: Metadata.json
description: Contiene datos básicos sobre la presencia
published: true
date: 2020-02-12T22:27:33.757Z
tags: 
---

# Metadata.json

Si desea publicar una presencia en el almacén y cargarla a través de la extensión, debe crear los metadatos `. son archivos` en tu carpeta `presence.js`.

El ejemplo de ese archivo se puede encontrar a continuación.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "colaboradores": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "es": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "miniatura": "URL",
  "color": "#45A8FC",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "iframe": false
}
```

## Subrayando el metadata.json

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
      <td style="text-align:left">Debe contener un objeto con <code>nombre</code> y <code>id</code> del desarrollador de presencia. Nombre es tu nombre de usuario de Discord sin el identificador(#0000). El usuario <code>id</code> puede copiarse de Discord habilitando el modo
        del desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contribuidores</b>
      </td>
      <td style="text-align:left">Debe contener un objeto con <code>nombre</code> y <code>id</code> del desarrollador de presencia. Nombre es tu nombre de usuario de Discord sin el identificador(#0000). El usuario <code>id</code> puede copiarse de Discord habilitando el modo
        del desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Arreglo&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>servicio</b>
      </td>
      <td style="text-align:left">El título del servicio que soporta esta presencia.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>descripción</b>
      </td>
      <td style="text-align:left">Una pequeña descripción de la presencia, puedes usar la descripción del servicio
        si estás fuera de las ideas. Su descripción debe tener valores de par clave que indiquen el idioma, y la descripción en ese idioma específico. Haz descripciones con los idiomas <i>que conoces</i>, nuestros traductores harán cambios en tu archivo de metadatas.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL del servicio.<br><b>Ejemplo:</b><code>vk. om</code><br>
        <b>Esta url debe coincidir con la url del sitio web ya que se utilizará para detectar dónde o no este es el sitio web al que se inyecta el script.</b>
      </td>
      <td style="text-align:left"><code>Cadena, array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Una cadena de expresión regular usada para coincidir con las urls.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versión</b>
      </td>
      <td style="text-align:left">Versión de su presencia.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logotipo</b>
      </td>
      <td style="text-align:left">Enlace al tipo de logotipo de servicio&apos;s.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Enlace a su presencia.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>valor #HEX</code>. Recomendamos usar un color primario del servicio
        que tu presencia soporta.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>etiquetas</b>
      </td>
      <td style="text-align:left">Array con etiquetas, ayudarán a los usuarios a buscar su presencia en el sitio web.</td>
      <td
      style="text-align:left"><code>Cadena, array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>categoría</b>
      </td>
      <td style="text-align:left">Una cadena utilizada para representar la categoría bajo la que cae la presencia.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
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
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
  </tbody>
</table>

## Expresiones regulares

Si quieres aprender expresiones regulares, aquí tienes algunos sitios web.

### Aprender

• [RegexOne](https://regexone.com/) • [Información de Expresiones regulares](https://www.regular-expressions.info/tutorial.html)

### Pruebas

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Categorías de presencia

Al hacer su presencia, debe especificar una categoría bajo la que cae la presencia. Esta es una lista compilada de las categorías que puede utilizar.

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
      <td style="text-align:left">Cualquier sitio web que tenga contenido relacionado con el juego, como <code>Kahoot</code> o <code>Skribbl.io</code></td>
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
        <td style="text-align:left"><b>Sociales</b></td>
      <td style="text-align:left">Sitios web que se utilizan con el propósito de crear y compartir contenidos o para participar en otras formas de redes sociales.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>vídeos</b></td>
        <td style="text-align:left"><b>Vídeos y Directos</b></td>
      <td style="text-align:left">Sitios web que sirven el propósito de proporcionar videos y streams.</td>
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