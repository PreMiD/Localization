---
title: Solución de problemas
description: Todo para resolver tu problema
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> ¡Asegúrate de tener la extensión **y** la aplicación instaladas! 
> 
> {.is-warning}

Incluido en esta página:
1. [Solución general de problemas](https://docs.premid.app/troubleshooting#general)
2. [Solución de problemas para Linux](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Recarga la página
Puedes presionar <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) en tu teclado en vez de buscar el botón de recargar.

### ¿Estás usando la aplicación de Discord?
PreMiD **no** funciona en la versión web de Discord, debes descargar la aplicación [aquí](https://discord.com/download).

### Asegúrate de haber habilitado la Actividad de Juegos en las opciones de Discord
**Ajustes de usuario** > **Actividad de juegos** ![gameactivity_edited.png](/gameactivity_edited.png)

### Asegúrate de que Discord NO se esté ejecutando como administrador
Muy importante. Discord RPC no funcionará si ejecutas Discord como administrador.

### ¿Estás usando una presence con configuraciones?
Muchas presences (Incluídas `Twitch` y `SoundCloud`) son afectadas por un problema con la extensión. Este problema causa que la extensión no tome correctamente los valores predeterminados de las configuraciones.

Para arreglar esto, todo lo que deben hacer es desactivar y activar nuevamente la configuración superior: ![presencesettings.gif](/presencesettings.gif)

### Reinicia tu navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) también funciona. (Obviamente tienes que volver a iniciar el navegador.)

### Reinicia PreMiD (Aplicación)
![quit.png](/quit.png) Luego debes reiniciar PreMiD.

### Recarga/Reinicia Discord
Presiona <kbd>CTRL+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) en tu teclado o reinicia Discord manualmente.

### Comprueba si tienes antivirus o firewall ejecutándose en el ordenador
A veces los antivirus o cortafuegos pueden bloquear aplicaciones que están creando/alojando servidores o que se conectan a Internet. Utilizamos un servidor local para recibir y pasar los datos entre la aplicación y la extensión, por tanto no podrás utilizar PreMiD si bloqueas la habilidad de pasar los datos entre ellos.

### Deshabilita tus complementos
Deshabilita todos tus complementos y mira si funciona. Si es así, ve habilitando los complementos uno a uno e indícanos qué complemento es el que causa la incompatibilidad a PreMiD.

### Reiniciar tu computadora
Espero que sepas como reiniciar una computadora.

### Reinstalando PreMiD
A veces hay algún problema con los archivos... Tutoriales para la instalación se pueden encontrar [aquí](/install).

### Eliminación manual
Windows: ` C:\Usuarios\USUARIO\AppData\Roaming\`` ` y elimina la carpeta </code>PreMiD`.
MacOS: <code>~/users/USUSARIO/~Library/Applicaion Support/` y elimina el directorio `PreMiD`.

### McAfee detectó preMiD como virus (Windows)
Esto es un falso positivo de McAfee y les hemos informado del problema por ahora puedes excluir PreMiD del escaneo haciendo los siguientes pasos:

> Si no estás seguro de cómo seguir estos pasos, ¡Siéntete libre de abrir un ticket en [#support](https://discord.premid.app/) y uno de nuestros agentes de soporte te ayudará! 
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

### PreMiD status bugged on discord!
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Si descargaste Discord a través de Snapcraft, RPC no funcionará. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named `premid` or `premid-git` (*WARNING: This one builds premid from source*). If you don't want to install aur manager (yay etc.), you can check our AppImage that is downloadable from our **[Linux repository](https://github.com/premid/linux/releases)**. *Warning: **AUR** repo is not maintained by us, but by other people.*

### Port binding
You should know that **PreMiD** binds itself to port **3020** that is necessary for Extension and Application communication. If **PreMiD** shows you error about this port, you should check if something binds to port by writing to terminal `sudo lsof -i:3020` or `sudo netstat -tnlp | grep :3020`. If some application is binded to it you should kill it and try running `PreMiD` again.

### PreMiD's AppImage doesn't launch at login?!?!
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually. Instruction how to do this:
1. Make file named **rc.local** in `/etc` directory.
2. Open this file in your favourite editor and paste-change this:
```bash
#!/bin/bash
# Required to run as /bin/bash (if you use zsh etc. you can change it.)

# Example: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Save file and chmod it as executable `sudo chmod a+x /etc/rc.local`.
4. Restart your PC and PreMiD AppImage should launch at login.

<a name="macos"></a>

# MacOS troubleshooting
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually. Instruction how to do it:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. Create folder named `PreMiD` (remember about upper-cased letters).
4. Open installer again.

# Esto no ha resuelto mi problema
Please open a ticket in [#support](https://discord.premid.app/).