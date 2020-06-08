---
title: Desarrollo de Presencias
description:
published: true
date: 2020-06-04T04:38:18.022Z
tags:
---

> Todas las presencias ahora se almacenan aquí: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versión `2.x` introduce la [tienda de presencias](https://premid.app/store). Los usuarios ahora tienen la capacidad de añadir y eliminar manualmente sus presencias favoritas a través de la interfaz de usuario del [sitio web](https://premid.app/).

> Antes de empezar es muy recomendable que mires nuestras pautas para presencias. 
> 
> {.is-warning}

- [Directrices](https://docs.premid.app/e/en/dev/presence/guidelines)
{.links-list}

# Estructura
Toda Presence está codificada en [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) tiene algunos tipos definiciones más que JavaScript, así que corregir e identificar errores es mucho más fácil.

## Instalación
1. Install [Git](https://git-scm.com/).
2. Instala [Nodo](https://nodejs.org/en/) (viene con [npm](https://www.npmjs.com/)).
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
  "regExp": "EXPRESIÓN REGULAR",
  "iFrameRegExp": "EXPRESIÓN REGULAR",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ÍCONO DE FONTAWESOME GRATIS",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ÍCONO DE FONTAWESOME GRATIS",
            "value": "\"%song%\" por %artist%",
            "placeholder": "usa %song% o %artist%"
        },
        {
            "id": "ID",
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ÍCONO DE FONTAWESOME GRATIS",
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
<b>Nota</b>: Algunas URLs pueden tener <code>www.</code> o algo parecido delante de su dominio. <b>NO</b> olvides añadirlos!<br>
Puedes añadir múltiples URLs haciendo lo siguiente:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
También puedes usar expresiones regulares para esta tarea, explicadas más adelante.
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
      <td style="text-align:left">Un array con configuraciones del usuario puede cambiar.<br>
      Lee más acerca configuración de presencias <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">aquí</a>.</td>
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

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () =&gt; {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
</code></pre>

<p spaces-before="0">
  You can copy this into your <code>presence.ts</code> file and edit the values. Setting all the values is done inside of the updataData event.
</p>

<p spaces-before="0">
  For examples we suggest to look at the code of presences like: 1337x or 9GAG.
</p>

<p spaces-before="0">
  For more information about the Presence class click <a href="/dev/presence/class">here</a>.
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
    Create a <code>iframe.ts</code> file.
  </li>
  
  <li>
    Set iFrame to <code>true</code> in your metadata file.
  </li>
  
  <li>
    Filling in your iFrame file.
  </li>
</ol>

<pre><code class="javascript">var iframe = new iFrame();
iframe.on("UpdateData", async () =&gt; {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
</code></pre>

<ol start="4">
  <li>
    Making your presence file receive data from the iFrame file. 
  </li>
</ol>

<pre><code class="javascript">presence.on("iFrameData", data =&gt; {
  iFrameVideo = data.video;
  currentTime = data.time;
});
</code></pre>

<p spaces-before="0">
  <strong x-id="1">Note:</strong> This needs to be placed outside of the updateData event.
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
    Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
  </li>
  
  <li>
    <strong x-id="1">Load Presence</strong> will appear in the Presences section.
  </li>
  
  <li>
    Click on it while you are still holding the <kbd>Shift</kbd> button.
  </li>
  
  <li>
    Select the /dist folder of your presence.
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
  Debugging
</h2>

<ul>
  <li>
    You can put <code>console.log("Test");</code> between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
  </li>
  <li>
    If that doesn't help you either then ask a presence developer on our <a href="https://discord.gg/WvfVZ8T">Discord server</a> for help.
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
