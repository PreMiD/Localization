---
title: Solución de problemas
description: Todo para resolver tu problema
published: true
date: 2020-08-30T17:14:32.108Z
tags:
editor: markdown
---

> ¡Asegúrate de tener la extensión **y** la aplicación instaladas! 
> 
> {.is-warning}

### Are you using the using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### ¿Estás usando una presence con configuraciones?
Muchas presences (Incluídas `Twitch` y `SoundCloud`) son afectadas por un problema con la extensión. Este problema causa que la extensión no tome correctamente los valores predeterminados de las configuraciones.

Para arreglar esto, todo lo que deben hacer es desactivar y activar nuevamente la configuración superior: ![presencesettings.gif](/presencesettings.gif)

### Recarga la página
Puedes presionar <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) en tu teclado en vez de buscar el botón de recargar.

### Reinicia el navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) también funcionará. (Obviamente tienes que volver a iniciar el navegador.)

### Asegúrate de haber habilitado la Actividad de Juegos en las opciones de Discord
**Ajustes de usuario** > **Actividad de juegos** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reinicia PreMiD (Aplicación)
![quit.png](/quit.png) Luego debes reiniciar PreMiD.

### Recarga/Reinicia Discord
Presiona <kbd>CTRL+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) en tu teclado o reinicia Discord manualmente.

### Asegúrate de que Discord NO se esté ejecutando como administrador
Muy importante. Discord RPC no funcionará si ejecutas Discord como administrador.

### Comprueba si tienes antivirus o cortafuegos ejecutándose en el ordenador
A veces los antivirus o cortafuegos pueden bloquear aplicaciones que están creando/alojando servidores o que se conectan a Internet. Utilizamos un servidor local para recibir y pasar los datos entre la aplicación y la extensión, por tanto no podrás utilizar PreMiD si bloqueas la habilidad de pasar los datos entre ellos.

### Deshabilita tus complementos
Deshabilita todos tus complementos y mira si funciona. Si es así, ve habilitando los complementos uno a uno e indícanos qué complemento es el que causa la incompatibilidad a PreMiD.

### Reiniciar el ordenador
Espero que sepas como reiniciar un computador.

### Reinstalando PreMiD
A veces hay algún problema con los archivos... Tutoriales para la instalación se pueden encontrar [aquí](/install).

### Eliminación manual
Windows: ` C:\Usuarios\USUARIO\AppData\Roaming\`` ` y elimina la carpeta </code>PreMiD`.
MacOS: <code>~/users/USUSARIO/~Library/Applicaion Support/` y elimina el directorio `PreMiD`.

### En distribuciones basadas en Ubuntu/Debian
Si descargaste Discord a través de Snapcraft, RPC no funcionará. Tienes que desinstalar la versión de Snapcraft ejecutando `sudo snap remove discord` en una terminal, descargar [Discord para Linux](https://discordapp.com/api/download?platform=linux) ([o Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), luego navega hasta el directorio donde descargaste Discord (usualmente `$HOME/Descargas`). Finalmente instala el paquete ejecutando `sudo dpkg -i discord-*.deb`.

### McAfee detectó preMiD como virus (Windows)
Esto es un falso positivo de McAfee y les hemos informado del problema por ahora puedes excluir PreMiD del escaneo haciendo los siguientes pasos:

> Si no estás seguro de cómo seguir estos pasos, ¡Siéntete libre de abrir un ticket en [#support](https://discord.gg/WvfVZ8T) y uno de nuestros agentes de soporte te ayudará! 
> 
> {.is-warning}

1. Abre la aplicación McAfee y haz clic en el icono de configuración en la parte superior derecha. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Haz clic en "Artículos en Cuarentena" (Segunda opción desde arriba).
3. Expándelo y pulsa sobre el icono `>` antes de un elemento con el nombre "settings.dat".
4. Asegúrate de que la ruta incluye "AppData\Local\Temp\PreMiD", si es así, selecciónala y pulsa "restaurar". <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Después de restaurarlo puedes cerrar la ventana emergente "Elementos en Cuarentena", luego pulsa de nuevo sobre el icono de configuración en la parte superior derecha.
6. Haz clic en "Escaneo en tiempo real" (Tercero desde arriba).
7. Amplíalo y haz clic en "Añadir archivo".
8. Escriba "%appdata%" en la barra de URL del administrador de archivos y presiona Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Abre la carpeta "PreMiD" y selecciona el archivo "PreMiD.exe" y haz clic en abrir. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. Ahora McAfee debe ignorar nuestro archivo, sólo tienes que abrir nuestra aplicación.

### Esto no ha resuelto mi problema
Por favor abre un ticket en [#support](https://discord.premid.app/).