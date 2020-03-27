---
title: Linux
description: Comenzando con la instalación de PreMiD en Linux
published: true
date: 2020-02-12T22:15:45.631Z
tags: 
---

> Antes de nada, verifica que tu equipo cumple todos los [requerimientos](/insatll/requirements).{.is-info}

La instalación de la aplicación es muy importante, ya que la extensión no puede hacer nada por sí misma.

# Instalar
> No existe ningún instalador oficial para este sistema operativo. Esto significa que no hay soporte oficial para ello. Sin embargo puedes intercambiar información con otros usuarios de Linux en [nuestro Discord](https://discord.gg/premid/).{.is-info}

1. Instalar [NodeJS](https://nodejs.org/es/).
2. Abre un terminal.
3. Clona el repositorio: `git clone https://github.com/PreMiD/PreMiD.git`
4. Cambia el directorio de trabajo: `cd PreMiD/src`
5. Instala las dependencias de la aplicación: `npm install`
6. Cambia el directorio de trabajo: `cd ..`
7. Escribe: `npm run init`
8. Inicia la aplicación: `npm start`

La aplicación iniciará automáticamente. Comprueba el símbolo en la barra de tareas.

> Los siguientes métodos son depreciados y no recomendados. Utilizar bajo tu responsabilidad. 
> 
> {.is-warning}

## Arch Linux
Si estás en Arch Linux o en una distribución basada en Arch, PreMiD está disponible en el [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) bajo `premid`. ¡Utiliza tu gestor de paquetes preferido para obtenerlo de ahí!

## Otras distribuciones
- Script de instalación: `wget -qo- http://bit.ly/install-premid | bash` o `curl -sL https://bit.ly/install-premid | bash`, espera hasta que se instale, haz doble clic en el acceso directo creado en el escritorio, ¡eso es todo!
- Si deseas desinstalar PreMiD, puedes ejecutar `wget -qO- http://bit.ly/uninstall-premid | bash` o `curl -sL https:/bit.ly/uninstall-premid | bash`.

> No olvides [añadir **la extensión**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}