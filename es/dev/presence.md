---
title: Desarrollo de Presences
description:
published: true
date: 2020-08-29T21:39:03.946Z
tags:
editor: markdown
---

> Todas las presences ahora se almacenan aquí: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versión `2.x` introduce la [tienda de presences](https://premid.app/store). Los usuarios ahora tienen la capacidad de añadir y eliminar manualmente sus presences favoritas a través de la interfaz de usuario del [sitio web](https://premid.app/).

> Antes de empezar es muy recomendable que mires nuestras pautas para presences. 
> 
> {.is-warning}

- [Indicaciones](https://docs.premid.app/en/dev/presence/guidelines)
{.links-list}

# Estructura
Toda Presence está codificada en [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) tiene algunos tipos definiciones más que JavaScript, así que corregir e identificar errores es mucho más fácil.

## Instalación
1. Instala [Git](https://git-scm.com/).
2. Instala [Node](https://nodejs.org/en/) (viene con [npm](https://www.npmjs.com/)).
3. Instala [TypeScript](https://www.typescriptlang.org/index.html#download-links) (Abre un terminal y escribe `npm install -g typescript`).

## Clonando el proyecto
1. Open a terminal and type `git clone https://github.com/PreMiD/Presences`.
2. Elija una carpeta de su elección.
3. Ábrelo en tu editor de código.

## Creando carpetas y archivos

1. Cree una carpeta con el **nombre** (no una URL) del servicio que desea soportar.
2. Crea un archivo de `presence.ts` y `tsconfig.json` dentro.
3. Cree una carpeta llamada `dist` en su interior.
4. Cree un archivo `metadata.json` dentro de la carpeta `dist`.

## Llenando un archivo tsconfig.json
Por favor, introduzca el siguiente código dentro del archivo `tsconfig.json`.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Para obtener más información sobre la configuración de TypeScript haga clic [aquí](/dev/presence/tsconfig).

## Llenando un archivo metadata.json
Hemos hecho un creador de archivos `metadata.json`aquí<a> para la gente perezosa. Aún así se sugiere leerlo para que sepas cómo funciona.</p> 

<pre><code class="json">{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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
  "version": "VERSIÓN",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["ETIQUETA1", "ETIQUETA2"],
  "category": "CATEGORÍA",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "MOSTRAR TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "MOSTRAR TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "MOSTRAR TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
</code></pre>

<p spaces-before="0">
  Por favor copia el código anterior y ponlo en tu archivo <code>metadata.json</code>. Ahora necesitas saber los valores de las propiedades. Ten en cuenta que las siguientes propiedades son opcionales para poner en tu archivo <code>metadata.json</code>, si no tienes planeado usarlos necesitas eliminarlos.
</p>

<ul>
  <li>
    <code>contribuidores</code>
  </li>
  <li>
    <code>regExp</code>
  </li>
  <li>
    <code>iframe</code>
  </li>
  <li>
    <code>iFrameRegExp</code>
  </li>
  <li>
    <code>ajustes</code>
  </li>
</ul>

<p spaces-before="0">
  <strong x-id="1">Aclarando unos valores predefinidos:</strong>
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
      <td style="text-align:left">Debe contener un Object con <code>name</code> e <code>id</code> del desarrollador de la presencia. El nombre es tu nombre de usuario de Discord sin el identificador (#0000). La <code>id</code> de usuario puede copiarse de Discord habilitando el modo
        desarrollador y haciendo clic derecho en tu perfil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>servicio</b>
      </td>
      <td style="text-align:left">El título del servicio que soporta esta presencia. <br>(Debe ser el mismo nombre que la carpeta en donde está todo)</td>
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
        si no se te ocurre nada. Tu descripción debe tener un par de valores que indiquen el idioma y la descripción en ese idioma específico. Haz descripciones con los idiomas <i>que conoces</i>, nuestros traductores harán cambios en tu archivo de metadata.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL del servicio. <br><b>Ejemplo:</b><code>vk.com</code><br>
        <b>Esta URL debe coincidir con la URL del sitio web ya que se detectará si es o no el sitio web al que se inyecta el script.</b><br><b>NO</b> agregues <code>https://</code> o <code>http://</code> dentro de la URL ni un slash al final:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Nota</b>: Algunas URLs pueden tener <code>www.</code> o algo parecido delante de su dominio. ¡<b>NO</b> olvides añadirlo!<br>
Puedes añadir multiples URLs haciendo lo siguiente:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
Para esta tarea también podrías usar regExp (También conocido como Regex), las cuales son explicadas más adelante.
      </td>
      <td style="text-align:left"><code>Cadena, array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Una expresión regular en string es para buscar URLs<br>
      expresión regular o también llamada Regex puede ser usada en un sitio web con múltiples subdominios.<br>
Puedes usar la siguiente expresión regular para eso:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD significa Top Level Domain, por ejemplo: .com .net<br>
<code>([a-z0-9]+)</code> significa cualquier cosa de la A a la Z y desde el 0 al 9.<br>
        Puedes tener un vistazo rápido viendo este <a href="https://youtu.be/sXQxhojSdZM">video</a><br>
        Puedes probar tu expresión regular en <a href="https://regex101.com/">Regex101</a>
      </td>
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
      <td style="text-align:left">Una cadena utilizada para representar la categoría bajo la que cae la presencia. Mira las categorías válidas <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">aquí</a>.</td>
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
      <td style="text-align:left">Un selector de expresiones regulares que selecciona iframes a inyectar. Mira expresiones regulares para más información.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ajustes</b>
      </td>
      <td style="text-align:left">Unas configuraciones que el usuario puede cambiar.<br>
      Lea más sobre configuración de presences <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">aquí</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
  </tbody>
</table>

</p>

<p spaces-before="0">
  Hemos hecho un creador de archivos <code>metadata.json</code> <a href="https://eggsy.codes/projects/premid/mdcreator">aquí<a> para la gente perezosa.</p> 
  
  

<h2 spaces-before="0">
  Empezando
</h2>

<pre><code class="javascript">var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000); 
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () =&gt; {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Esto se llama varias veces por segundo cuando es posible.

    Es recomendado establecer una función afuera de la función del evento la cual cambiará los valores de las variables y harán las cosas más fáciles si estás obteniendo información de una API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*La llave (nombre de archivo) de la imagen larga en la presencia. Estos se suben y se nombran en la sección Rich Presence de tu aplicación, llamada Art Assets*/
        smallImageKey: "key", /*La llave (nombre de archivo) de la imagen larga en tu presencia. Estas son subidas y nombradas en la sección de Rich Precense de su aplicación, llamado Art Assets*/
        smallImageText: "Some hover text", //El texto que se muestra al pasar el cursor sobre la imagen pequeña
        detalles: "Navegando nombre de página", //La sección superior del texto de presencia
        estado: "sección de lectura A", //La sección inferior del texto de presencia
        startTimestamp: 1577232000, //La marca de tiempo de epoch de unix para cuando empezar a contar desde
        endTimestamp: 1577151472000 //Si desea mostrar Tiempo izquierdo en lugar de transcurrido, esta es la marca de tiempo de epoch unix en la que termina el temporizador
    }; /*Opcionalmente, puede establecer una largeImageKey aquí y cambiar el resto como subpropiedades de variables, por ejemplo presenceSata. type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData. etails == null) {
        //Esto se disparará si no estableces presencia
        presencia. etTrayTitle(); //Limpia el título de la bandeja para usuarios mac
        presencia. etActivity(); /*Actualizar la presencia sin datos, por lo tanto limpiando y haciendo la imagen grande el icono de aplicación de Discord, y el texto del nombre de la aplicación de Discord*/
    } else {
        //Esto se disparará si establece los detalles de presencia
        presencia. etActivity(presenceData); //Actualizar la presencia con todos los valores del objeto PresenceData
    }
});
</code></pre>

<p spaces-before="0">
  Puedes copiar esto dentro de tu archivo <code>presence.ts</code> y editar los valores. Configura todos los valores que están afuera del evento updateData.
</p>

<p spaces-before="0">
  Para ejemplos sugerimos mirar el código de presences como: 1337x o 9GAG.
</p>

<p spaces-before="0">
  Para más información sobre la clase Presence haz clic <a href="/dev/presence/class">aquí</a>.
</p>



<h2 spaces-before="0">
  ¡¿No puedes obtener cierta información?!
</h2>

<p spaces-before="0">
  Muchos sitios web están utilizando <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/iframe">iframes</a> (<a href="https://en.wikipedia.org/wiki/HTML_element#Frames">Inlineframes</a>). Esas etiquetas HTML pueden contener múltiples fuentes como videos. Pero a veces no son relevantes. Algunos están ocultos o simplemente no se usan activamente. Comprueba si se puede extraer la información que necesitas, sin ellos antes de que hagas un trabajo innecesario.
</p>

<ol start="1">
  <li>
    Verifícalos en la consola de tu navegador (asegúrate de estar en la pestaña <strong x-id="1">Elementos</strong>).
  </li>
  
  <li>
    Buscar (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
  </li>
  
  <li>
    Ejecuta <code>document.querySelectorAll("iframe")</code>.
  </li>
</ol>

<p spaces-before="0">
  Si encuentras que los datos están en un iFrame, debes hacer lo siguiente:
</p>

<ol start="1">
  <li>
    Crea un archivo <code>iframe.ts</code>.
  </li>
  
  <li>
    Establece iFrame a <code>true</code> en tu archivo de metadata.
  </li>
  
  <li>
    Llenando tu archivo iFrame.
  </li>
</ol>

<pre><code class="javascript">var iframe = new iFrame();
iframe.on("UpdateData", async () =&gt; {
  /*
  Obtenga todos los datos que necesita del iframe y guárdelos en variables
   y luego envíalo usando iframe.send
  */
  iframe.send({ //Enviando datos
    video: video,
    time: video.duration
  }); 
});
</code></pre>

<ol start="4">
  <li>
    Haciendo que tu archivo de la presencia reciba datos del archivo iFrame. 
  </li>
</ol>

<pre><code class="javascript">presence.on("iFrameData", data =&gt; {
  iFrameVideo = data.video;
  currentTime = data.time;
});
</code></pre>

<p spaces-before="0">
  <strong x-id="1">Nota:</strong> Esto debe colocarse fuera del evento updateData.
</p>


<h2 spaces-before="0">
  Compilando
</h2>

<p spaces-before="0">
  Abre una consola en tu carpeta y escribe <code>tsc -w</code> para compilar <code>presence.ts</code> en la carpeta <code>/dist</code>.
</p>



<h1 spaces-before="0">
  Cargando la Presence
</h1>

<ol start="1">
  <li>
    Abre la ventana emergente y mantén pulsado el botón <kbd>Shift</kbd> de tu teclado.
  </li>
  
  <li>
    <strong x-id="1">Cargar Presence</strong> aparecerá en la sección Presences.
  </li>
  
  <li>
    Haz clic en él mientras mantienes pulsado el botón <kbd>Shift</kbd>.
  </li>
  
  <li>
    Selecciona la carpeta /dist de tu presencia.
  </li>
</ol>



<h1 spaces-before="0">
  Algunos consejos útiles
</h1>


<h2 spaces-before="0">
  Recarga en caliente
</h2>

<p spaces-before="0">
  El sitio web en el que estás desarrollando se recarga automáticamente cada vez que guarda un archivo en su carpeta.
</p>



<h2 spaces-before="0">
  Depurando
</h2>

<ul>
  <li>
    Puedes poner <code>console.log("Prueba");</code> entre tu código y ver si la consola de tu navegador te da esa salida. Si es así entonces sigue y vuelve a intentarlo después de la siguiente función. Si no es así, hay un error arriba.
  </li>
  <li>
    Si eso no te ayuda entonces pregunta por ayuda a un desarrollador en nuestro <a href="https://discord.premid.app/">servidor de Discord</a>.
  </li>
</ul>



<h1 spaces-before="0">
  Explicación de archivos
</h1>

<ul>
  <li>
    <a href="/dev/presence/class">Clase de presencia</a>
  </li>
  <li>
    <a href="/dev/presence/iframe">Clase iFrame</a>
  </li>
  <li>
    <a href="/dev/presence/metadata">Archivo de Metadata</a>
  </li>
  <li>
    <p spaces-before="0">
      <a href="/dev/presence/tsconfig">Configuración de TypeScript</a> 
    </p>
    <p spaces-before="0">
      {.links-list}
    </p>
  </li>
</ul>
