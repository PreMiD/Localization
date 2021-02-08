---
title: Solución de problemas
description: Todo para resolver tu problema
published: true
date: 2021-02-08T18:44:27.435Z
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
3. [Solución de problemas para MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Solución general de problemas
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

### ¡Estado de PreMiD bugeado en discord!
No se preocupe. Simplemente presiona el atajo <strong x-id="1">ctrl+r</strong> mientras tienes el foco en tu ventana de discord para recargarla.

<a name="linux"></a>

# Solución de problemas para Linux
### Distribuciones basadas en Ubuntu/Debian
Si descargaste Discord a través de Snapcraft, RPC no funcionará. Tienes que desinstalar la versión de Snapcraft ejecutando `sudo snap remove discord` en una terminal, descarga **[Discord para Linux](https://discordapp.com/api/download?platform=linux)** (**[o Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), luego navega hasta el directorio donde descargaste Discord (usualmente `$HOME/Descargas`). Finalmente instala el paquete ejecutando `sudo dpkg -i discord-*.deb`. Si la AppImage no funciona, deberías considerar revisar nuestros otros paquetes en **[este enlace](https://packagecloud.io/premid/linux)**.

### Distribuciones basadas en Arch Linux
Distribuciones basadas en Arch Linux deben usar el paquete AUR (Arch User Repository) llamado <code>premid</code> o <code>premid-git</code> (<em x-id="3">ADVERTENCIA: Este compila premid desde el código fuente</em>). Si no quieres instalar un administrador AUR (yay, etc.), puedes revisar nuestra AppImage y descargarla desde nuestro <strong x-id="1"><a href="https://github.com/premid/linux/releases">repositorio de Linux</a></strong>.
<em x-id="3">Aviso: el paquete del repositorio <strong x-id="1">AUR</strong> no lo mantenemos nosotros (como organización PreMiD), sino por otras personas.</em>

### Enlace de puerto
Deberías saber que <strong x-id="1">PreMiD</strong> se enlaza al puerto<strong x-id="1">3020</strong>. Esto es necesario para abrir una comunicación entre la Extensión y la Aplicación. Si <strong x-id="1">PreMiD</strong> muestra un error sobre este puerto, deberías comprobar si algo está vinculado al puerto 3020 ejecutando <code>sudo lsof -i:3020</code> o <code>sudo netstat -tnlp | grep :3020</code> en tu terminal. Si algún proceso está vinculado a él, debes liberar el puerto e intentar ejecutar <code>PreMiD</code> de nuevo.

### La AppImage de PreMiD no se inicia al iniciar sesión
Como indicamos en nuestro ** repositorio de Linux **, la AppImage no se puede iniciar al iniciar sesión. Puedes añadirlo al autoarranque manualmente haciendo estos pasos:
1. Crea un archivo llamado <strong x-id="1">rc.local</strong> en el directorio <code>/etc</code>.
2. Abre este archivo en tu editor favorito y pega el siguiente código con algunas modificaciones:
```bash
#!/bin/bash
# Requerido para ejecutar como /bin/bash (si usas zsh etc. puedes cambiarlo.)

# Ejemplo: /home/PreMiD/PreMiD*.AppImage
<directorio a la appimage>/PreMiD*.AppImage

exit 0
```
3. Guarde el archivo y modifíquelo como ejecutable ` sudo chmod a + x /etc/rc.local `.
4. Reinicie su PC y PreMiD AppImage debería iniciarse al iniciar sesión.

<a name="macos"></a>

# Solución de problemas de MacOS
### Error al crear el directorio
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Abra el buscador y abra la carpeta ** Aplicaciones **.
2. Haga clic con el botón derecho en el espacio en blanco y haga clic en ** Crear carpeta **.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Abra el instalador nuevamente.

# Esto no ha resuelto mi problema
Abra un ticket en [ #support ](https://discord.premid.app/).