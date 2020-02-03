---
title: Solução de Problemas
description: Tudo para resolver o seu problema
published: true
date: 2020-01-18T20:32:24.820Z
tags:
---

> Confere que tem a extensão **e** a aplicação instaladas! 
> 
> {.is-warning}

### Atualizar a página
Pode clicar <kbd>Strg+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado também em vez de procurar pelo botão de atualizar.

### Reiniciar o seu navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) faz um bom trabalho também. (Tem que iniciar o seu navegador outra vez obviamente.)

### Certifique-se quem que a Atividade de Jogo do Discord ativada nas definições
**Configurações de Usuário** > **Atividade de jogo** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reiniciar o PreMiD (Aplicação)
![quit.png](/quit.png) Terá que reiniciar o PreMiD depois.

### Recarregar/reiniciar o Discord
Pressione <kbd>Strg+R</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado ou reinicie o Discord manualmente.

### Certifique-se de que o Discord NÃO foi executado como administrador
Muito importante. O RPC do Discord não funcionará se o Discord tiver sido executado como administrador.

### Verifique se tem o antivirus ou firewall em execução no seu computador
Alguns programas de antivirus e firewalls irão bloquear aplicações que estão a criar/hoespdar servidores ou apenas a conectar-se à internet. Estamos a utilizar um servidor local para receber e enviar dados entre a nossa aplicação e a extensão, logo se bloquear a habilidade da aplicação de enviar dados provavelmente não irá conseguir utilizar o PreMiD.

### Desative os seus addons
Desative todos os seus addons e verifique se funciona. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

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