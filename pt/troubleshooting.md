---
title: Solução de Problemas
description: Tudo para resolver o seu problema
published: true
date: 2020-01-19T23:42:09.728Z
tags:
---

> Certifique-se de ter a extensão **e** o aplicativo instalado! 
> 
> {.is-warning}

### Atualize a página
Você pode pressionar <kbd>Ctrl+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado também, em vez de procurar pelo botão de atualização.

### Reinicie o seu navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) também funciona. (Obviamente, você tem que iniciar seu navegador novamente.)

### Certifique-se de que você ativou a Atividade de Jogo do Discord nas configurações
**Configurações de Usuário** > **Atividade de jogo** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reinicie o PreMiD (Aplicativo)
![quit.png](/quit.png) Você terá que reiniciar o PreMiD depois disso.

### Recarregar/Reiniciar o Discord
Pressione <kbd>Ctrl+R</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado ou reinicie o Discord manualmente.

### Certifique-se de que o Discord NÃO está sendo executado como administrador
Muito importante. O RPC do Discord não funcionará se o Discord estiver sendo executado como administrador.

### Verifique se você tem antivírus ou firewall em execução no seu computador
Às vezes, programas de antivírus e firewalls irão bloquear aplicações que estão criando/hospedando servidores ou apenas conectando à internet. Estamos utilizando um servidor local para receber e enviar dados entre a nossa aplicação e a extensão, logo, se bloquear a habilidade da aplicação de enviar dados, provavelmente não irá poder utilizar o PreMiD.

### Desative os seus complementos
Desative todos os seus complementos e veja se funciona. Se funcionar, tente ativar os complementos um de cada vez e diga-nos qual complemento quebrou o PreMiD.

### Reinicie o seu computador
Espero que saiba como reiniciar o seu computador.

### Reinstale o PreMiD
Às vezes há algo errado com os arquivos... Tutoriais de instalação podem ser encontrados [aqui](/install).

### Remoção manual
Windows:    `C:\Users\USER\Program Files (x86)` e delete a pasta `PreMiD`. MacOS: `~/users/USER/~Library/Application Support/` e delete a pasta `PreMiD`.

### Em distribuições baseadas em Ubuntu/Debian
Se você tiver baixado o Discord pelo Snapcraft, o RPC não funcionará. Você tem que desinstalar a versão de Snapcraft executando `sudo snap remove discord` num terminal, baixe a <a href="[build de Discord para Linux](https://discordapp.com/api/download?platform=linux) ([ou o Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), depois navegue para a pasta para onde baixou o Discord (geralmente `$HOME/Downloads`) e instale o pacote utilizando `sudo dpkg -i discord-*.deb`.

### Isso não resolveu o meu problema
Por favor abra um ticket no [#support](https://discord.gg/PreMiD).