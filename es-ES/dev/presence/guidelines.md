---
title: Indicaciones
description: Reglas que todos los desarrolladores de presences deben seguir para que su presence sea añadida.
published: verdadero
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Directrices

Al publicar Presences en [nuestro repositorio de GitHub](https://github.com/PreMiD/Presences), necesitamos que sigas un conjunto de reglas. Para algunos, estás reglas pueden parecer estrictas. Sin embargo, la implementación de estas reglas nos evitarán a nosotros y a los usuarios con cualquier problema.

# Creación

Las reglas generales del desarrollo de una Presence son las siguientes:

- Las Presences **deben** estar relacionadas con el sitio web que has elegido.
- Las Presences **no pueden** ser para sitios ilegales. (Por ejemplo: Stressors, marketing de drogas, pornografía infantil, etc.)
- La estructura de los archivos debe ser limpia y gestionada, no incluyas archivos que no estén especificados. (Por ejemplo: Vscode y capetas git, imágenes y archivos de texto, etc.)
- Necesitas tener una estructura de archivo adecuada, los borradores **no** están permitidos.
- Presences para sitios web con TLDs (dominios de nivel superior) `.onion ` o sitios web con dominios/hosts gratuitos (por ejemplo, `.TK ` [todos los dominios Freenom gratuitos], `.RF `, `GD`, etc.) ** no ** están permitidos, se pueden hacer excepciones si se presentan pruebas de que se ha pagado por el dominio.
- El dominio de la presence debe tener al menos una antigüedad de 2 meses.
- Presences que tienen como destino páginas internas del navegador (como Chrome Web Store, `chrome://`, páginas `about:`, etc.) **no** están permitidas ya que requieren que se habilite una configuración experimental en el lado del usuario y podría causar daños al navegador.
- Las Presences con soporte para un solo subdominio **no** se permitirán, ya que pueden parecer rotas para otras páginas (como la página de inicio), se pueden hacer excepciones para la política y las paginas de contacto (contenido que no se usa con frecuencia) o sitios donde el otro contenido no este relacionado. (por ejemplo, paginas de wikia)
- Presences para radios online están solo permitidas si la radio tiene al menos 100 oyentes semanales y 15 simultáneos.
- Las presences de baja calidad (o las que tienen poco contexto) ** no ** están permitidas (p. ej., mostrar solo un logotipo y texto pero nunca volver a cambiarlo)
- Incluyendo la carpeta `dist`, los archivos `presence.ts`, `iframe.ts` y `metadata.json` son obligatorios para que el resultado sea lo que se representa en el siguiente esquema:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

o si estas usando un archivo `iframe.ts`:

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

## [**metadata.json**](https://docs.premid.app/en/dev/presence/metadata)

> Para la conveniencia de nuestros desarrolladores de presences, hemos proporcionado un esquema que puedes usar para validar la integridad de tu archivo `metadata`. Esto es completamente opcional y no es requerido durante el proceso de revisión. 
> 
> {.is-info}

> Es altamente recomendado que organices tu archivo `metadata` en el formato mostrado abajo, y debes tener nombres de servicio, descripciones, etiquetas y campos de ajustes gramaticalmente correctos. Cualquier cosa que no esté organizada según las especificaciones, **no** será permitida. 
> 
> {.is-warning}

> Presences de sitios web que tienen contenido explícito **deben** tener la etiqueta `nsfw` y el logo y etiqueta **no** deben contener contenido explícito. 
> 
> {.is-warning}

Cada presence tiene un archivo para describirla llamado `metadata.json`, el metadata tiene un estándar estricto y un ejemplo de este archivo se puede ver abajo:

```json
{
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
            "icon": "ICONO DE FONTAWESOME GRATIS",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ICONO DE FONTAWESOME GRATIS",
            "value": "\"%song%\" por %artist%",
            "placeholder": "usa %song% o %artist%"
        },
        {
            "id": "ID",
            "title": "TÍTULO PARA MOSTRAR",
            "icon": "ICONO DE FONTAWESOME GRATIS",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
    }
  ]
}
```

> Si un campo está estipulado como opcional en la [documentación](https://docs.premid.app/en/dev/presence/metadata) y tu presence usa el valor por defecto para ella, no la incluyas en el archivo `metadata`. (por ejemplo, una presence sin soporte para iframe no debe contener el campo `iframe`.) 
> 
> {.is-warning}

> Todas las imágenes en el archivo de `metadata` deben estar alojadas en `i.imgur.com`. Usar contenido alojado en el sitio web **no** está permitido, ya que pueden cambiar su ubicación sin querer. 
> 
> {.is-warning}

Una lista de los campos y sus reglas están listadas abajo:

### **`$schema`**

- La _llave_ del esquema **debe** incluir un signo de dolar al inicio, esto indicará a su editor de texto que tu quieres validar tu archivo JSON contra un modelo. _Tal y como se ha dicho anteriormente, no necesitas incluir un esquema, pero en caso de que lo hagas, debes tomar esto en cuenta._

### **`author`**

- El _valor_ del ID **debe** ser el snowflake de tu ID de Discord. Puedes obtenerlo activando el [modo de desarrollador](https://support.discord.com/hc/es/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Por favor **no** confundas esto con la ID de la aplicación, la cual es solo para tu presence._

### **`contributors`**

- **No** te agregues ni a ti, ni a nadie más como contribuidores al menos que hayan ayudado con la presence.

### **`service`**

- El nombre del servicio **debe** ser el nombre del directorio de la presence. Por ejemplo, si la presence esta ubicada en `/websites/Y/YouTube/`, el nombre del servicio debe ser `YouTube`.
- **No puedes** usar la url como el nombre del servicio al menos que el sitio web use la url como su nombre oficial. Si el nombre no es descriptivo y puede ser considerado impreciso, usar la url es **requerido**. (Por ejemplo: `YouTube` es permitido porque este es el nombre oficial y es descriptivo, mientras que `youtube.com` no lo es. `Top` es un nombre no descriptivo, así que usar la url `top.gg` es **requerido**.)

### **`altnames`**

- **Solo** uses esto en el caso de que el sitio web aparezca bajo distintos nombres (e.j. Pokémon ó 포켓몬스터) para buscar mas fácil la presence sin usar caracteres especiales (e.j. Pokémon ó Pokemon). Versiones *acortadas* del servicio aparecerán como `etiquetas`.

### **`description`**

- **Todas** las presences **requieren** una descripción en Inglés sin importar el idioma preferido del sitio web.
- **No** intentes traducir la descripción por tu cuenta a menos que conozcas el idioma, traductores modificaran tu `metadata.json.` y cambiaran la descripción de ser necesario.

### **`url`**

- La url **debe** ser un "string" si el sitio web solo usa un dominio. Si el sitio web usa múltiples, usa un array y especifica cada una.
- **No** incluyas protocolos en la url (por ej.`http` o `https`, y no incluyas parámetros "query" en la url (por ej.,`www.google.com/search?gws_rd=ssl` debería ser `www.google.com`)

### **`version`**

- Asegúrate de que el número de versión sigue [los estándares semánticos de versionado](https://semver.org/lang/es/), que se traducen al siguiente esquema: `<NUEVA-CARACTERISTICA>.<SOLUCION-DE-MULTIPLES-BUGS>.<SOLUCION-DE-PEQUEÑOS-BUGS-O-CAMBIOS-EN-METADATA>`. Cualquier cosa como `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` o cambiando `1.0.0` a `2.0.0` en una corrección de errores/cambio pequeño **no** está permitido.
- La versión **debe** empezar siempre con `1.0.0` a menos que se diga lo contrario, otras versiones **no** serán permitidas.

### **`logo`**

- El logo **debe** ser una imagen cuadrada con una relación de aspecto `1:1`.
- La imagen **requiere** una resolución mínima de `512x512` píxeles. Puedes aumentar el tamaño de la imagen usando una herramienta como [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- La miniatura **debería** ser preferiblemente una [tarjeta promocional amplia](https://i.imgur.com/3QfIc5v.jpg) o una [captura de pantalla](https://i.imgur.com/OAcBmwW.png) si la primera **no** está disponible.

### **`color`**

- El color **debe** ser un valor hexadecimal entre `#000000` y `#FFFFFF`.
- La cadena de color **debe** estar precedida por una almohadilla (#).

### **`tags`**

- **Todas** las presences requieren por lo menos _una_ etiqueta.
- Las etiquetas **no** deben tener espacios, slashes, comillas simples o dobles, caracteres Unicode y siempre deberían ser en minúscula.
- Las etiquetas **deberían** incluir preferiblemente nombres de servicio alternativos para hacer su búsqueda mas fácil ( por ejemplo, si una presencia Amazon hubiese incluido soporte para AWS, debería tener sus etiquetas como `amazon-web-services` y `aws`)
- Estás **obligado** a añadir una etiqueta `NSFW` si la presence es para un sitio web con contenido para adultos.

### **`category`**

- La categoría **debe** ser una de las siguientes listadas en la [documentación](https://docs.premid.app/es/dev/presence/metadata#categorias-de-una-presencia).
- La presence debe utilizar una categoría que coincida con el contenido del sitio web. (por ejemplo, no utilices `anime` cuando el sitio web no esté relacionado con anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Las expresiones regulares **deben** ser válidas. Por favor pruebe sus expresiones con las herramientas listadas en la [documentación](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`ajustes`**

- Si decide crear una cadena de formato (p.e. `%song% por %artist%`), debe tener las variables rodeadas por un signo de porcentaje en cualquiera de los lados. Variables como `%var`, `var%`, o `%%var%%` y todo lo que esté entre intermedios **no** está permitido por el bien de la estandarización.
- El nombre de la configuración **no** debe estar completamente en letras mayúsculas. Por ejemplo, nombres como `MOSTRAR ESTADO DE NAVEGACIÓN` **no** estarán permitidos sin embargo, se permiten nombres como `Mostrar Estado de Navegación` o `Mostrar estado de navegación`.
- Agregar strings personalizadas al [Repositorio de Localización](https://github.com/PreMiD/Localization) para después ser usadas en la configuración de `multiLanguage` está solo permitido si la presence ya ha sido lanzada antes y ha adquirido al menos 1000 usuarios.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> El código que escribas **debe** estar _bien escrito_ y **debe** ser _entendible_ y todas las palabras deben ser gramaticalmente correctas (errores gramaticales de páginas webs pueden ser ignoradas). 
> 
> {.is-warning}

> Cada presence sigue un estricto conjunto de reglas de linting que serán comprobadas durante el proceso de revisión. Un par de recomendaciones pueden ser vistas a continuación. - [Recomendaciones de plugins de TypeScript para verificaciones "Strict Type Checking"](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [recomendaciones de ESlint](https://eslint.org/docs/rules) 
> 
> {.is-info}

Aquí hay una lista de las reglas que debes seguir al escribir tu archivo `presence.ts`:

- **Siempre** declare una nueva instancia de la clase `Presence` antes de cualquier otra variable para evitar problemas raros que puedan ocurrir; no es un requisito por diseño, podría ser ser eliminado en el futuro.
- **Nunca** utilices funciones personalizadas cuando [variantes nativas estén disponibles](https://docs.premid.app/dev/presence#files-explained); esto asegura que las correcciones en el nivel de extensión también se aplican a tus presences. Eres libre de usar lo que sea que necesites, si no lo encuentras listado en la documentación.
- Está **prohibido** programar presences para un sitio sin añadir soporte para su idioma de origen (p. ej., una presence de YouTube escrita con soporte solo para Portugués y Japonés, pero no para Inglés.)
- Los campos `smallImageKey` y `smallImageText` están destinados a proporcionar contexto adicional/secundario (como `reproduciendo/pausado` para sitios de streaming, `navegando` para sitios normales, y otros casos) no para promover perfiles de Discord ni nada que no esté relacionado con PreMiD.
- **No** estás autorizado para acceder a `localStorage`.
- Al acceder a las cookies de los datos almacenados, por favor prefije la clave con `PMD_`.
- Sólo puedes hacer solicitudes HTTP/HTTPS a `premid.app` o a la API de presences del sitio web. Si está utilizando dominios externos, tendrá que explicar por qué son necesarios.
- **No** establezcas campos de la instancia presence como undefined una vez declarado, utiliza en su lugar la palabra clave `delete`. (por ejemplo, usa `delete data.startTimestamp` en vez de `data.startTimestamp = undefined`)
- **No** tienes permitido escribir presences que puedan cambiar la funcionalidad de un sitio web. Esto incluye la adición, eliminación o modificación de los elementos DOM.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **No** escribas tu propio `tsconfig.json`, usa el proporcionado en la [documentación](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modificación

> **Debes** cambiar la versión en **metadata.json** a un valor mayor de la versión anterior cuando hagas cambios en los archivos **presence.ts**, **iframe.ts** o**metadata.json**. 
> 
> {.is-warning}

En algunas situaciones, las presences pueden comportarse inesperadamente o podrían realizar cambios menores para mejorar su funcionalidad. Aquí hay una lista de situaciones que **debes** tener en cuenta al modificar presences.

- **No** tienes permitido reescribir una presence o cambiar su autor. Si el autor de la presence fue baneado del servidor oficial o no ha hecho los cambios requeridos en el periodo de un mes, puedes contactar con un verificador para ver si puedes reescribir la presence.
- Si haces modificaciones a una presence que afecte a al menos a un **un cuarto** del código base de la misma, tienes permitido añadirte como colaborador. Póngase en contacto con un verificador para más información sobre este tema.   Si haces modificaciones a una presence que afecte a al menos a un **un cuarto** del código base de la misma, tienes permitido añadirte como colaborador. Contacta a un verificador para más información sobre este tema.
-  Cualquiera puede proporcionar parches rápidos (hotfixes) para corregir errores; sin embargo, intenta **no** hacer cambios en el código que **no** necesitan ser corregidos. Las modificaciones válidas incluyen correcciones generales (código y tipos), adiciones (descripciones y etiquetas), archivos que faltan, etc. **No** cambie las imágenes si no están desactualizadas y están en especificaciones.

# Verificación

> **Todo** código contribuido será bajo la licencia `Mozilla Public License 2.0`. 
> 
> {.is-info}

> Si necesitas contactar con alguien, por favor usa nuestro servidor oficial de Discord. Todas los verificadores tiene el rol de `Reviewer` en su perfil. 
> 
> {.is-info}

> Por favor ten en cuenta que el trabajo de los verificadores es voluntario y gestionan otros repositorios además de este, tu pull request puede no ser revisada hasta horas o días después de haber sido creada. 
> 
> {.is-warning}

> Ten **siempre** un fork actualizado antes de crear el pull request. Esto facilitará falsos positivos de los chequeos. 
> 
> {.is-warning}

El proceso más importante de desarrollo de una presence es publicarla en la tienda. Esto se hace haciendo un [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) en GitHub en el repositorio `PreMiD/Presences`. Nuestros verificadores confirmaran que tu presence cumple los estándares y será añadida en la tienda.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verificador de Presences</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restricciones`

No te será permitido crear presences en en caso de ofensas repetitivas como romper las indicaciones, spamming de pull requests, amenazas o comportamiento inapropiado.

En este escenario, se producirán los siguientes cambios:

- Las presences bajo tu gestión serán transferidas al bot de PreMiD u otro usuario (Según decida el verificador). El ID de la aplicación para cada presence será recreado bajo el nombre del nuevo dueño.
- Todos tus issues y pull requests (Creación, contribución, etc. de presences) creados luego del ban serán cerrados.
- Los tickets creados bajo tu nombre con respecto al desarrollo de presences serán eliminados.


## `Revisiones`

Algunas cosas que deberías saber después de abrir una solicitud de pull request:

- Se necesitan 2 revisores para combinar un pull request.
- Si un pull request está inactivo durante un período de 14 días, será cerrado inmediatamente.
- Todas las verificaciones **deben pasar** para ejecutar el merge.
- ⚠️**Debes** proporcionar nuevas capturas de pantalla sin alterar (tomadas por ti) mostrando una comparación lado a lado de tu perfil y el sitio web para demostrar que tu presence funciona. _Se le permite unir capturas de pantalla para el disfrute visual_ Esto se aplica tanto para la creación como para la modificación.
- ⚠ También es **requerido** incluir capturas de pantalla de la configuración de la presence en la extensión si se proporciona. Se puede ver un ejemplo [aquí](https://imgur.com/a/OD3sj5R).

## `Verificaciones`

![Verificaciones](https://i.imgur.com/BCDZQe9.png)

Actualmente, una presence pasa por 2 etapas separadas de comprobaciones. Todas estas comprobaciones ayudan a que los verificadores determinen si su presence es adecuada para su implementación.

- `Codacy` es un bot que comprueba la calidad del código. Si alguna vez recibes errores **debes** corregirlos.
- `Schema Validation` escaneará su archivo `metadata.json` en busca de cualquier error (por ejemplo, campos faltantes, tipos de valores no válidos, etc.). Si alguna vez recibes errores de nuevos problemas, **debes** corregirlos. Añadir un campo schema al archivo `metadata.json` permitirá a tu editor de texto (si es compatible) mostrar estos errores durante el desarrollo.

## `Reglas adicionales`

- **Siempre** asegúrese de iniciar su presence en la carpeta más apropiada, si su nombre comienza con _cualquier_ letra latina entonces debe estar bajo su coincidencia alfabética (p. ej. `D/dアニメストア` o `G/Google`). Cualquier otro carácter Unicode/no latino **debe** estar bajo la carpeta `#` (por ejemplo, `#/巴哈姆特.`) y números bajo la carpeta `0-9` (por ejemplo, `0-9/4anime`).

Después de cumplir con todas las directrices, revisiones y comprobaciones adecuadas, su presencia será añadida.

# Contribuidores

La `revisión 2` de las indicaciones fueron escritas y contribuidas por los siguientes individuos:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

La `revisión 1` fue mantenida por los siguientes individuos:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
