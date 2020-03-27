---
title: Desarrollo de Presencias
description: 
published: true
date: 2020-02-16T14:20:05.671Z
tags: 
---

> Todas las presencias ahora se almacenan aquí: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versión `2.x` introduce la [tienda de presencias](https://premid.app/store). Los usuarios ahora tienen la capacidad de añadir y eliminar manualmente sus presencias favoritas a través de la interfaz de usuario del sitio web [](https://premid.app/).

# Directrices
> Si no sigue todas las directrices, su presencia o pull request se eliminarán del github. 
> 
> {.is-danger}

## Creación

Antes de empezar a trabajar en su presencia, tenga en cuenta la siguiente lista.
- El pull request debe estar completo, necesita tener una estructura de archivo apropiada. Incluyendo la carpeta `dist` , el archivo `presence.js` y el archivo `metadata.json`.
- La presencia **debe** estar relacionada con el sitio web que ha elegido.
- La presencia no debe ser de ningún sitio web ilegal. Estos incluyen estresos, medicamentos, porno infantil, etc...
- Los metadatos de presencia deben tener contenido bien escrito, incluyendo títulos válidos y descripciones.
- Los medios que incluye (icono/miniatura) deben estar relacionados con el sitio web y deben ser comprensibles en términos de tamaño y calidad.
- La estructura de archivos debe ser limpia y administrada, no tener archivos aleatorios que no proporcionen nada a la función de la presencia.
- La presencia **no debe** tener ninguna intención maliciosa. Estas incluyen robo/filtración de información privada, afectando negativamente el comportamiento del sitio web, etc...
- Una vez realizada una presencia para un sitio web si esta cambia en un futuro **TU** eres responsable de actualizar dicha presencia para que funcione correctamente. Si no lo arregla dentro de un plazo aceptable, otros desarrolladores de presencia tienen permitido **sobrescribir** su presencia para cumplir con los cambios.
- La presencia debe ser probada antes de publicar para confirmar que todo funciona como se esperaba.
- Su presencia debe tener imágenes SFW y descripciones independientemente de si es NSFW o no. Si su presencia es acerca de un sitio web `nsfw` , añada la etiqueta `nsfw` a sus metadatas.
- Su presencia debe **NO** ser para dominios o hosts gratuitos (por ejemplo, .TK, [todos los dominios Freenom gratuitos], . F.GD, etc...), se pueden hacer excepciones si se presenta un comprobante que demuestra que es un dominio pagado.
- Los campos `smallImageKey` y `small ImageText` están destinados a proporcionar contexto adicional/secundario (como "playing"/"pausado" para sitios de vídeo, "Navegando" para sitios regulares y otros casos). No se te permite promocionar los perfiles de Discord ni nada que no esté relacionado con PreMiD.
- Los requisitos para los logotipos son 1:1 (cuadrado) en 512px, sin embargo, miniaturas debería ser [tarjetas promocionales grandes](https://i.imgur.com/3QfIc5v.jpg) o simplemente [capturas de pantalla](https://i.imgur.com/OAcBmwW.png) si la primera no está disponible.
- Las presencias deben tener al menos 1 etiqueta, este es un requisito por diseño y puede ser opcional en el futuro.
- El campo `url` no ha de incluir `http://` ni `https://` al igual que los parametros. Ejemplo: la presencia para `https://www.google.com/search?gws_rd=ssl` quedará `www.google.com` en el campo `url` field.
- Las descripciones y etiquetas deben estar siempre en arrays, incluso cuando es sólo un elemento. Sin embargo, el campo `url` solo debe ser una cadena si es un dominio.
- Sitios inestables que cambian constantemente APIs/domains, No se permiten los elementos HTML aleatorizados o simplemente estar en un desarrollo pesado y se eliminarán de la tienda.

## Modificación

En algunas situaciones, las presencias pueden comportarse inesperadamente o pueden utilizar algunos cambios menores para mejorar su funcionalidad. Aquí tienes una lista compilada que debes seguir para modificar las presencias.
- No se te permite cambiar el creador de la presencia. Esto sólo es aplicable si se le permite reescribirlo. Puedes añadirte a ti mismo como colaborador [](/dev/presence/metadata).
- Asegúrese de que las modificaciones son útiles. Estos pueden incluir correcciones (código y tipos), adiciones (descripciones y etiquetas), etc...
- Confirme que sus cambios funcionan antes de publicar. No cree pull requests sin conocer el resultado de sus cambios.
- No vuelva a marcar/sobrescribir una presencia completamente a menos que lo permita un `Verificador de Presencia` o un miembro del personal.

# Verificación
> Cuando hagas solicitudes de extracción para añadir o modificar las presencias existentes, debes incluir una captura de pantalla. Sin embargo, las modificaciones a los metadatos/tsconfig de una presencia no requieren una captura de pantalla. *Tu captura de pantalla debe ser subida directamente a github con la solicitud de pull request, no uses sitios web para compartir imágenes de terceros.* 
> 
> {.is-danger}

Para que su presencia llegue a las tiendas, debe pasar por un proceso en github para confirmar que funciona como se esperaba. Aquí hay un par de cosas a buscar cuando haga su pull request.

Nuestro equipo de verificación de presencia tiene su propio papel, busque `el Verificador de Presencia` en el servidor de Discord para saber quién está involucrado.

1. Se necesitan dos verificadores para confirmar que su presencia está a la altura de los estándares. Si usted obtiene solicitudes de cambio, haga el esfuerzo adecuado para arreglarlo o no se añadirá.
2. Si solicitamos cambios y su Pull Request excede **7 días de inactividad** sin hacer los necesarios, nos veremos obligados a cerrarlo.
3. Puedes tomar capturas de pantalla de cambios realizados con la ayuda de otro usuario. ( ej. su autor en caso de que no pueda acceder a él por ninguna razón).
4. Si se trata de una actualización o parche, la captura de pantalla debe mostrar las nuevas adiciones en funcionamiento, no las características antiguas de las solicitudes anteriores de extracción.
5. Las capturas de pantalla proporcionadas deben ser reales, no editadas.
6. Cualquier código aportado que se fusiona en este repositorio será licenciado bajo la **Mozilla Public License 2.0**.


Después de que se hayan cumplido todas las revisiones adecuadas, su pull request se fusionará con la tienda.

# Estructura (TypeScript)
Puede elegir si desea codificar su Presence con [JavaScript](https://www.javascript.com/) o  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) tiene algunas definiciones de tipo picante adicionales, por lo que corregir e identificar errores es mucho más fácil. Si solo quieres usar [JavaScript](https://www.javascript.com/) puedes saltar a [Estructura (JavaScript)](/dev/presence#structure-javascript).

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
2. Cree una `presence.ts` y un archivo `tsconfg.json` en su interior.
3. Crea una carpeta llamada `dist` dentro.
4. Crear un archivo `metadata.json` dentro de la carpeta `dist`.

## Rellenar el archivo tsconfig.json

Por favor, introduzca el siguiente código dentro del archivo `tsconfg.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Para obtener más información sobre la configuración de TypeScript haga clic [aquí](/dev/presence/tsconfig).

## Rellenar el archivo metadata.json

Haz clic [aquí](/dev/presence#filling-in-the-metadatajson-file-2) para ver cómo completarlo. Podrás hacer clic en la parte inferior de la explicación.

Hemos creado un creador de archivos `metadata.json` para los peeps perezosos [aquí](https://eggsy.codes/projects/premid/mdcreator).

## Comenzando

```javascript
var presence = new Presence({
    clientId: "00000000000000000000", //El ID del cliente de la aplicación creada en https://discordapp. om/desarrolladores/aplicaciones
    mediaKeys: false //Habilitar el uso y la detección de presionaciones de teclas multimedia
}),

cadenas = presencia. etStrings({
    play: "presence.playback.playing",
    pausa: "presence.playback. ausentado"
    //Puedes usar esto para obtener las cadenas traducidas
});

/*

function myOutsideHeavyLiftingFunction(){
    //GTI y procesa todos sus datos aquí

    // elemento toma //
    // api calls //
    // variable establece //
}

setInterval(10000, 10000, myOutsideHeavyLiftingFunction); 
//Ejecute la función separada del evento UpdateData cada 10 segundos para obtener y establecer las variables que UpdateData recoja

*/


presencia. n("UpdateData", async () => {
    /*UpdateData siempre está disparando, y por lo tanto debe ser usado como tu ciclo de actualización, o `tick`. Esto se llama varias veces un segundo en la medida de lo posible.

    Se recomienda configurar otra función fuera de esta función de evento que cambiará los valores de las variables y hará el trabajo pesado si llama datos desde una API. /

    var presenceData = {
        largeImageKey: "key", /*La tecla (nombre del archivo) de la Imagen Grande en la presencia. Estas son subidas y nombradas en la sección de Presencia Enriquecida de su aplicación, llamado Art Acsets*/
        smallImageKey: "key", /*La clave (nombre de archivo) de la imagen grande en la presencia. Estas son subidas y nombradas en la sección de Presencia Enriquecida de su aplicación, llamado Art Assets*/
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
```
Puedes copiar esto en tu archivo `presence.ts` y editar los valores. Configurar todos los valores se hace dentro del evento updataData.

Para ejemplos sugerimos consultar el código de presencias como: 1337x o 9GAG.

Para más información sobre la clase Presence haz clic [aquí](/dev/presence/class).

## ¡No puedes obtener ciertos datos?!

Muchos sitios web están usando [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Estas etiquetas html pueden contener múltiples fuentes como videos. Pero no siempre son relevantes. Algunos están ocultos o simplemente no se utilizan activamente. Compruebe si puede extraer, la información que necesita, sin ellos antes de hacer un trabajo innecesario.

1. Compruébalos por la consola del navegador (asegúrate de que estás en la pestaña **Elementos**).
2. Buscar (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Ejecuta `document.querySelectorAll("iframe")`.

Si encuentras que tus datos están en un iFrame necesitas hacer lo siguiente:
1. Crear un archivo `iframe.ts`.
2. Establezca iFrame a `true` en su archivo de metadatos.
3. Rellena tu archivo iFrame.
```javascript
var iframe = new iFrame();
iframe. n("UpdateData", async () => {
  /*
  Obtener todos los datos necesarios de iFrame guardarlos en variables
  y luego enviarlos usando iframe. end
  */
  iframe.send({ /sending data
    video: video,
    time: video. uration
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
**Nota:** Esto debe colocarse fuera del evento updateData.
## Compilando
Abre una consola en tu carpeta y escribe `tsc -w` para compilar el `presence.ts` en la carpeta `/dist`.

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

Haz clic [aquí](/dev/presence#filling-in-the-metadatajson-file-2) para ver cómo completarlo. Podrás hacer clic en la parte inferior de la explicación.

Hemos creado un creador de archivos `metadata.json` para los peeps perezosos [aquí](https://eggsy.codes/projects/premid/mdcreator).

## Comenzando

```javascript
var presence = new Presence({
    clientId: "00000000000000000000", //El ID del cliente de la aplicación creada en https://discordapp. om/desarrolladores/aplicaciones
    mediaKeys: false //Habilitar el uso y la detección de presionaciones de teclas multimedia
}),

cadenas = presencia. etStrings({
    play: "presence.playback.playing",
    pausa: "presence.playback. ausentado"
    //Puedes usar esto para obtener las cadenas traducidas
});

/*

function myOutsideHeavyLiftingFunction(){
    //GTI y procesa todos sus datos aquí

    // elemento toma //
    // api calls //
    // variable establece //
}

setInterval(10000, 10000, myOutsideHeavyLiftingFunction); 
//Ejecute la función separada del evento UpdateData cada 10 segundos para obtener y establecer las variables que UpdateData recoja

*/


presencia. n("UpdateData", () => {
    //UpdateData siempre está disparando, y por lo tanto debe ser usado como tu ciclo de actualización, o `tick`. Esto se llama varias veces un segundo en la medida de lo posible.

    //Se recomienda configurar otra función fuera de esta función de evento que cambiará los valores de las variables y hará el trabajo pesado si se llama a datos desde una API.

    var presenceData = {
        largeImageKey: "key", /*La clave (nombre del archivo) de la imagen grande en la presencia. Estas son subidas y nombradas en la sección de Presencia Enriquecida de su aplicación, llamado Art Acsets*/
        smallImageKey: "key", /*La clave (nombre de archivo) de la imagen grande en la presencia. Estas son subidas y nombradas en la sección de Presencia Enriquecida de su aplicación, llamado Art Assets*/
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
```
Puedes copiar esto en tu archivo `presence.js` y editar los valores. Configurar todos los valores se hace dentro del evento updataData.

Para ejemplos sugerimos consultar el código de presencias como: 1337x o 9GAG.

Para más información sobre la clase Presence haz clic [aquí](/dev/presence/class).

## ¡No puedes obtener ciertos datos?!

Muchos sitios web están usando [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Estas etiquetas html pueden contener múltiples fuentes como videos. Pero no siempre son relevantes. Algunos están ocultos o simplemente no se utilizan activamente. Compruebe si puede extraer, la información que necesita, sin ellos antes de hacer un trabajo innecesario.

1. Compruébalos por la consola del navegador (asegúrate de que estás en la pestaña **Elementos**).
2. Buscar (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Ejecuta `document.querySelectorAll("iframe")`.

Si encuentras que tus datos están en un iFrame necesitas hacer lo siguiente:
1. Crear un archivo `iframe.js`.
2. Establezca iFrame a `true` en su archivo de metadatos.
3. Rellena tu archivo iFrame.
```javascript
var iframe = new iFrame();
iframe. n("UpdateData", () => {
    /*
    Obtener todos los datos necesarios de iFrame guardarlos en variables
    y luego enviarlos usando iframe. fin
    */
    iframe. end({ /sending data
        video: video,
        time: video. uration  
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
**Nota:** Esto debe colocarse fuera del evento updateData.
# Rellenar el archivo metadata.json
Hemos creado un creador de archivos `metadata.json` para los peeps perezosos [aquí](https://eggsy.codes/projects/premid/mdcreator). Todavía se sugiere leer esto a través para que sepas cómo funciona.

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
  "version": "VERSION",
  "logo": "URL",
  "miniatura": "URL",
  "color": "#HEX000",
  "etiquetas": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Por favor, copia el código anterior y ponlo en tu archivo `metadata.json`. Ahora necesita editar los valores de las propiedades. Tenga en cuenta que las siguientes propiedades son opcionales para tener en sus metadatos `. son` archivo, si no planeas usarlos necesitas eliminarlos.
- `contribuidores`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Clarificando algunos valores predefinidos:**
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
      <td style="text-align:left">El título del servicio que soporta esta presencia. <br>(Debe ser el mismo nombre que la carpeta donde todo está en)</td>
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
        <b>Esta URL debe coincidir con la URL del sitio web ya que detectará si es o no el sitio web al que se inyecta el script.</b><br> <b>NO</b> add <code>https://</code> o <code>http://</code> dentro de la URL ni una barra al final:
<code>https://premid. p/</code> -> <code>premid.app</code><br>
<b>Nota</b>: Algunas URLs pueden tener <code>www.</code> o algo más delante de su dominio. ¡ <b>NO te olvides de</b> añadirlo!<br>
Puede añadir múltiples URLs haciendo lo siguiente:<br>
<code>["URL1", "URL2", "ETC. ]</code><br>
También podría usar regExp también conocido como Regex para esta tarea, explicado más adelante.
      </td>
      <td style="text-align:left"><code>Cadena, array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nu</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Una cadena de expresión regular usada para coincidir con las urls.<br>
      regExp o también conocido como Regex, se puede utilizar si un sitio web tiene varios subdominios.<br>
Puede utilizar la siguiente expresión regular Exp para eso:<br>
<code>([a-z0-9]+)[.]dominio[.]TLD"</code><br>
TLD que significa dominio de nivel superior para ejes: . om .net<br> 
<code>([a-z0-9]+)</code> significa cualquier cosa desde a a z y de 0 a 9.<br>
        Puede probar su regExp en <a href="https://regex101.com/">Regex101</a></td>
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
      <td style="text-align:left">Una cadena utilizada para representar la categoría bajo la que cae la presencia. Vea las catergorias válidas <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">aquí</a>.</td>
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
      <td style="text-align:left">Un selector de expresiones regulares que selecciona iframes a inyectar. Vea regExp para más información.</td>
      <td style="text-align:left"><code>Cadena</code>
      </td>
      <td style="text-align:left"><code>Sí</code>
      </td>
    </tr>
  </tbody>
</table>

Haz clic [aquí](/dev/presence#filling-in-the-metadatajson-file) para volver a la explicación de TypeScript. Haga clic [aquí](/dev/presence#filling-in-the-metadatajson-file-1) para volver a la explicación de JavaScript.

# Cargando la presencia
1. Abre la ventana emergente y mantén pulsado el botón <kbd>Shift</kbd> de tu teclado.
2. **Presencia de carga** aparecerá en la sección Presencias.
3. Haz clic en él mientras mantienes pulsado el botón <kbd>Mayús</kbd>.
4. Seleccione la carpeta /dist de su presencia.

# Algunas cosas útiles
## Recarga rápida
El sitio web en el que se está desarrollando se recarga automáticamente cada vez que guarda un archivo en su carpeta.

## Depuración
- Puedes poner `console.log("Test");` entre tu código y ver si la consola de tu navegador te da esa salida. Si sí entonces sigue y vuelve a intentarlo después de la siguiente función. Si no es así, hay un error anterior.
- Si eso no te ayuda entonces pregunta a un desarrollador presente en nuestro [servidor de Discord](https://discord.gg/PreMiD) por ayuda.

# Archivos explicados
- [Clase de presencia](/dev/presence/class)
- [iFrame Clase](/dev/presence/iframe)
- [Archivo de metadatos](/dev/presence/metadata)
- [Configuración de TypeScript](/dev/presence/tsconfig)
{.links-list}