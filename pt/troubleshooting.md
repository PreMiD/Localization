---
title: Solução de Problemas
description: Tudo para resolver o seu problema
published: true
date: 2020-01-19T23:42:09.728Z
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
Desative todos os seus addons e verifique se funciona. Se funcionar, tente ativer os addons um de cada vez e diga-nos qual addon quebrou o PreMiD.

### Reinicie o seu computador
Espero que saiba como reiniciar o seu computador.

### Reinstale o PreMiD
Por vezes, há algo de errado com os ficheiros... Tutoriais de instalação podem ser encontrados [here](/install).

### Remoção manual
Windows:    `C:\Users\USER\Program Files (x86)\`` e apague a pasta`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`e apague a pasta`PreMiD``.

### Em distribuições baseadas em Ubuntu/Debian
Se você tiver baixado o Discord pelo Snapcraft, o RPC não funcionará. Tem que desinstalar a versão de Snapcraft executando `sudo snap remove discord` num terminal, baixe o <a href="[build de Discord para Linux](https://discordapp.com/api/download?platform=linux) ([ou Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), depois navegue para a pasta para onde baixou o Discord (geralmente `$HOME/Downloads`) e instale o pacote utilizando `sudo dpkg -i discord-*.deb`.

### Isso não resolveu o meu problema
Por favor abra um ticket no [#support](https://discord.gg/PreMiD).