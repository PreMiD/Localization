---
title: Solución de problemas
description: Todo para resolver tu problema
published: true
date: 2020-01-18T20:32:24.820Z
tags:
---

> ¡Asegúrate de tener la extensión **y** la aplicación instaladas! 
> 
> {.is-warning}

### Recarga la página
Puedes pulsar <kbd>Ctrl+R</kbd>/<kbd>F5</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) en tu teclado en vez de pulsar sobre el botón de actualizar.

### Reinicia el navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) también funcionará. (Obviamente tienes que volver a iniciar el navegador)

### Asegúrate de haber habilitado la Actividad de Juegos en las opciones de Discord
**Ajustes de usuario** > **Actividad de juegos** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reinicia PreMiD (Aplicación)
![quit.png](/quit.png) Tienes que reiniciar después PreMiD.

### Recarga/Reinicia Discord
Pulsa <kbd>Ctrl+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) en el teclado o reinicia Discord manualmente.

### Asegúrate de que Discord NO se esté ejecutando como administrador
Muy importante. Discord RPC no funcionará si ejecutas Discord como administrador.

### Comprueba si tienes antivirus o cortafuegos ejecutando en el ordenador
A veces los antivirus o cortafuegos pueden bloquear aplicaciones que están creando/alojando servidores o que se conectan a Internet. Utilizamos un servidor local para recibir y pasar los datos entre la aplicación y la extensión, por tanto si no podrás utilizar PreMiD si bloqueas la habilidad de pasar los datos entre ellos.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows:    `C:\Users\USER\Program Files (x86)\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### That has not solved my problem
Please open a ticket in [#support](https://discord.gg/PreMiD).