---
title: Solución de problemas
description: Todo para resolver tu problema
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> ¡Asegúrate de tener la extensión **y** la aplicación instaladas! 
> 
> {.is-warning}

### Recarga la página
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Reinicia el navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) también funcionará. (Obviamente tienes que volver a iniciar el navegador)

### Asegúrate de haber habilitado la Actividad de Juegos en las opciones de Discord
**Ajustes de usuario** > **Actividad de juegos** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reinicia PreMiD (Aplicación)
![quit.png](/quit.png) Tienes que reiniciar después PreMiD.

### Recarga/Reinicia Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Asegúrate de que Discord NO se esté ejecutando como administrador
Muy importante. Discord RPC no funcionará si ejecutas Discord como administrador.

### Comprueba si tienes antivirus o cortafuegos ejecutando en el ordenador
A veces los antivirus o cortafuegos pueden bloquear aplicaciones que están creando/alojando servidores o que se conectan a Internet. Utilizamos un servidor local para recibir y pasar los datos entre la aplicación y la extensión, por tanto si no podrás utilizar PreMiD si bloqueas la habilidad de pasar los datos entre ellos.

### Des-habilita tus complementos
Des-habilita todos tus complementos y mira si funciona. Si es así, ve habilitando los complementos uno a uno e indícanos qué complemento es el que causa la incompatibilidad a PreMiD.

### Reiniciar el ordenador
Espero que sepas como realizar esta acción.

### Reinstala PreMiD
A veces hay algún problema con los archivos... Puedes encontrar indicaciones [aquí](/install).

### Eliminación manual
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS: <code>~/users/USUSARIO/~Library/Applicaion Support/` y elimina el directorio `PreMiD`.

### En distribuciones basadas en Ubuntu/Debian
Si descargaste Discord a través de Snapcraft, RPC no funcionará. Tienes que desinstalar la versión de Snapcraft ejecutando `sudo snap remove discord` en una terminal, descargar [Discord para Linux](https://discordapp.com/api/download?platform=linux) ([o Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), luego navega hasta el directorio donde descargaste Discord (usualmente `$HOME/Descargas`). Finalmente instala el paquete ejecutando `sudo dpkg -i discord-*.deb`.

### Esto no ha resuelto mi problema
Por favor abre un ticket en [#support](https://discord.gg/WvfVZ8T).