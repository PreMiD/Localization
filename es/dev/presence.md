---
title: Desarrollo de Presencias
description:
published: true
date: 2020-04-23T23:25:59.632Z
tags:
---

> Todas las presencias ahora se almacenan aquí: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versión `2.x` introduce la [tienda de presencias](https://premid.app/store). Los usuarios ahora tienen la capacidad de añadir y eliminar manualmente sus presencias favoritas a través de la interfaz de usuario del sitio web [](https://premid.app/).

# Directrices
> Si no sigue todas las directrices, un `Verificador de Presencias` solicitará los cambios necesarios, su Pull Request puede incluso cerrarse en algunos casos. 
> 
> {.is-warning}

> Cuando solicites un Pull Request para añadir o modificar presencias existentes, **DEBES** incluir una captura de pantalla. Sin embargo, las modificaciones en los archivos `metadata.json` o `tsconfig.json` no requieren una captura de pantalla. *Su captura de pantalla DEBE ser subida directamente a GitHub al realizar el Pull Request, no utilice sitios web de terceros para compartir imágenes.* 
> 
> {.is-warning}

Cuando publiques presencias en GitHub, debes seguir un conjunto de directrices. Para algunos, estas reglas estrictas pueden parecer duras. Sin embargo, la implementación de estas reglas evitará que nuestros servidores puedan encontrar algún problema.

## Creación
> El código que escribas DEBE estar *bien escrito* y DEBE ser *legible*. `DeepScan` en GitHub reportará problemas de calidad de código al `Equipo de Verificación de Presencias`. Recomendamos que su fork esté actualizado al solicitar un Pull Request, esto limitará falsos positivos. 
> 
> {.is-warning}

- El pull request **DEBE** estar completo, necesita tener una estructura de archivos adecuada, los borradores **NO** están permitidos. Incluyendo la carpeta `dist`, el archivo `presence.js` y el archivo `metadata.json`, como se muestra en el siguiente esquema de ejemplo:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
o si estás usando TypeScript e `iframe` (podrías llegar a incluir) :
```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

Antes de empezar a trabajar en su presencia, tenga en cuenta la siguiente lista.
- La presencia **DEBE** estar relacionada con el sitio web que ha elegido.
- La presencia **NO DEBE** ser de ningún sitio web ilegal. Estos incluyen páginas estresantes, sustancias ilegales, pornografía infantil, etc...
- Los metadatos de una presencia **DEBEN** tener un formato correcto, incluyendo títulos válidos y descripciones.
- Los archivos que se incluyan (icono/miniatura) **DEBEN** estar relacionados con el sitio web y deben ser correctos en términos de tamaño y calidad.
- La estructura de archivos **DEBE** ser limpia y controlada, no debe haber archivos aleatorios que no proporcionen nada a la función de la presencia.
- La presencia **NO DEBE** tener intenciones maliciosas. Estas incluyen robo/filtración de información privada, afectar negativamente al comportamiento del sitio web, etc...
- Una vez realizada una presencia para un sitio web si esta cambia en un futuro **TU** eres responsable de actualizar dicha presencia para que funcione correctamente. Si no se arreglase en un plazo de 7 días, otros desarrolladores presentes pueden **CORREGIR** su presencia para incluir los cambios necesarios.
- La presencia **DEBE** ser probada antes de publicarse para confirmar que todo funciona como se esperaba.
- Su presencia **DEBE** tener imágenes y descripciones SFW independientemente de si es NSFW o no. Si su presencia es acerca de un sitio web con contenido NSFW, por favor agregue la etiqueta `nsfw` en sus metadatos.
- Su presencia **NO PUEDE** manipular el almacenamiento local del navegador.
- Su presencia puede utilizar cookies para almacenar datos. Todos los datos almacenados por la presencia deben utilizar el prefijo `pmd_`.
- Tags should be used as alternate names whenever possible, shortened versions must be included as well (e.g. if an Amazon presence had included AWS support it would have its tags like : "amazon-web-services" and "aws"). This is not required if it's not possible, but will make it easier for users when searching.
- Tags must not include any spaces, slashes, single/double quotation marks, unicode characters and should always be lowercase.

## Modificación
> DEBES actualizar la versión en los **metadatos** a un valor mayor al de la versión anterior siempre que se modifiquen los archivos **presence.js** o **metadata.json**. 
> 
> {.is-warning}

En algunas situaciones, las presencias pueden comportarse inesperadamente o podrían realizarse cambios menores para mejorar su funcionalidad. Aquí hay una lista de situaciones que usted **DEBE** tener en cuenta al modificar una presencia.
- No se permite reescribir una presencia o cambiar su autor. Si el autor de una presencia fue baneado del servidor oficial o no ha realizado cambios en un período de 7 días, puede ponerse en contacto con un `Verificador de Presencia` de PreMiD para ver si se le permite modificar la presencia concreta.
- Si haces modificaciones a una presencia que afecten al menos a un **UN CUARTO** del código base de la misma, puede añadirse como colaborador. Póngase en contacto con un `Verificador de Presencias` para más información sobre este tema.
- Asegúrese de que las modificaciones son útiles. Estos pueden incluir correcciones (de código o tipográficas), añadidos (descripciones y etiquetas), etc... No cambien las imágenes si no están desfasadas y tienen una resolución decente.
- Confirme que los cambios funcionan antes de publicar. No envíe un Pull Request sin conocer el resultado de sus cambios.

# Verificación

> Si necesitas contactar con alguien, por favor usa nuestro servidor oficial de Discord. Todos los `Verificadores de Presencia` tendrán un rol único en su perfiles.

Para que su presencia llegue a la tienda, DEBE pasar por un proceso en GitHub que confirme que funciona como se esperaba. Estas son algunas cosas a tener en cuenta al enviar un Pull Request.

1. Se necesitan dos verificadores para confirmar que su presencia está a la altura de los estándares. Si usted obtiene solicitudes de cambio, haga el esfuerzo adecuado para arreglarlo o no se añadirá.
2. Si se solicitan cambios y su Pull Request excede **7 días de inactividad** sin llevarlos a cabo, nos veremos obligados a cerrar dicho Pull Request.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. ( ej. su autor en caso de que no pueda acceder a él por ninguna razón).
4. Si se trata de una actualización o un parche, la captura de pantalla **DEBE** mostrar las novedades funcionando, no una característica antigua de Pull Request previas.
5. Las capturas de pantalla proporcionadas deben ser reales, no editadas.
6. Cualquier código aportado que se fusiona en este repositorio será licenciado bajo la **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is not available.
10. Presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in arrays, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
13. Unstable sites that constantly change APIs/domains, randomize HTML elements or just still being in heavy development are not allowed and will be removed from the store.

After all of the proper reviews have been met, your pull request will be merged with the store.

# Estructura (TypeScript)
You can choose if you want to code your Presence with [JavaScript](https://www.javascript.com/) or  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions, so fixing and identifying bugs is way easier. If you just want to use [JavaScript](https://www.javascript.com/) you can skip to [Structure (JavaScript)](/dev/presence#structure-javascript).

## Instalación
1. Install [Git](https://git-scm.com/).
2. Instala [Nodo](https://nodejs.org/en/) (viene con [npm](https://www.npmjs.com/)).
3. Instala [TypeScript](https://www.typescriptlang.org/index.html#download-links) (abre un terminal y `npm install -g typescript`).

## Clonando el proyecto
1. Abre un terminal y escribe `git clone https://github.com/PreMiD/Presences`.
2. Elija una carpeta de su elección.
3. Ábrelo en tu editor de código.

## Creando carpetas y archivos

1. Crea una carpeta con el **nombre** (no una URL) del servicio que quieres soportar.
2. Create a `presence.ts` and a `tsconfig.json` file inside.
3. Crea una carpeta llamada `dist` dentro.
4. Crear un archivo `metadata.json` dentro de la carpeta `dist`.

## Rellenar el archivo tsconfig.json
Please put the following code inside of the `tsconfig.json` file.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
To learn more about TypeScript configuration click [here](/dev/presence/tsconfig).

## Rellenar el archivo metadata.json

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. You will be able to easily click back at the bottom of the explanation.

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## Comenzando

```javascript
var presence = new Presence({
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


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData = {
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
```
You can copy this into your `presence.ts` file and edit the values. Setting all the values is done inside of the updataData event.

For examples we suggest to look at the code of presences like: 1337x or 9GAG.

For more information about the Presence class click [here](/dev/presence/class).

## ¡No puedes obtener ciertos datos?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Buscar (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Ejecuta `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Crear un archivo `iframe.ts`.
2. Establezca iFrame a `true` en su archivo de metadatos.
3. Rellena tu archivo iFrame.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Haciendo que su archivo de presencia reciba datos del archivo iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
## Compilando
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Estructura (JavaScript)
## Clonando el proyecto
1. Install [Git](https://git-scm.com/).
2. Abre un terminal y escribe `git clone https://github.com/PreMiD/Presences`.
3. Elija una carpeta de su elección.
4. Ábrelo en tu editor de código.

## Creando carpetas y archivos

1. Crea una carpeta con el **nombre** (no una URL) del servicio que quieres soportar.
3. Crea una carpeta llamada `dist` dentro.
4. Crea un archivo `metadata.json` y un archivo `presence.js` dentro de la carpeta `dist`.

## Rellenar el archivo metadata.json

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. You will be able to easily click back at the bottom of the explanation.

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## Comenzando

```javascript
var presence = new Presence({
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


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    //It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.

    var presenceData = {
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
```
You can copy this into your `presence.js` file and edit the values. Setting all the values is done inside of the updataData event.

For examples we suggest to look at the code of presences like: 1337x or 9GAG.

For more information about the Presence class click [here](/dev/presence/class).

## ¡No puedes obtener ciertos datos?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Buscar (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Ejecuta `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Crear un archivo `iframe.js`.
2. Establezca iFrame a `true` en su archivo de metadatos.
3. Rellena tu archivo iFrame.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", () => {
    /*
    Get all the data you need out of the iFrame save them in variables
    and then sent them using iframe.send
    */
    iframe.send({ //sending data
        video: video,
        time: video.duration  
    });
});
```
4. Haciendo que su archivo de presencia reciba datos del archivo iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
# Rellenar el archivo metadata.json
We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator). It's still suggested to read this through so you know how it works.

```javascript
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
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

Please copy the code above and put it in your `metadata.json` file. You now need to edit values of the properties. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
- `contribuidores`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `settings`

**Clarifying some value presets:**
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
      <td style="text-align:left">El título del servicio que soporta esta presencia. <br>(Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>String</code>
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
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>Cadena, array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a></td>
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
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logotipo</b>
      </td>
      <td style="text-align:left">Enlace al tipo de logotipo de servicio&apos;s.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Enlace a su presencia.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>valor #HEX</code>. Recomendamos usar un color primario del servicio
        que tu presencia soporta.</td>
      <td style="text-align:left"><code>String</code>
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
      <td style="text-align:left">Una cadena utilizada para representar la categoría bajo la que cae la presencia. See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
      <td style="text-align:left"><code>String</code>
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
      <td style="text-align:left">Un selector de expresiones regulares que selecciona iframes a inyectar. See regExp for more info.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Arreglo&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
  </tbody>
</table>

Click [here](/dev/presence#filling-in-the-metadatajson-file) to go back to the TypeScript explanation. Click [here](/dev/presence#filling-in-the-metadatajson-file-1) to go back to the JavaScript explanation.

# Cargando la presencia
1. Abre la ventana emergente y mantén pulsado el botón <kbd>Shift</kbd> de tu teclado.
2. **Presencia de carga** aparecerá en la sección Presencias.
3. Haz clic en él mientras mantienes pulsado el botón <kbd>Mayús</kbd>.
4. Seleccione la carpeta /dist de su presencia.

# Algunas cosas útiles
## Recarga rápida
The website you are developing on is automatically reloading every time you save a file in your folder.

## Depuración
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/WvfVZ8T) for help.

# Archivos explicados
- [Clase de presencia](/dev/presence/class)
- [Clase iFrame](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [Configuración de TypeScript](/dev/presence/tsconfig)
{.links-list}
