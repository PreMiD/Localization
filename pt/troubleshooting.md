---
title: Solução de problemas
description: Tudo para resolver o seu problema
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Certifique-se de ter a extensão **e** o aplicativo instalado! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Atualize a página
Você pode pressionar <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado também, em vez de procurar pelo botão de atualização.

### Você está usando o aplicativo do Discord?
O PreMiD **não** funciona na versão de navegador do Discord, você precisa baixar o aplicativo [aqui](https://discord.com/download).

### Certifique-se de que você ativou a Atividade de Jogo do Discord nas configurações
**Configurações de Usuário** > **Atividade de jogo** ![gameactivity_edited.png](/gameactivity_edited.png)

### Certifique-se de que o Discord NÃO está sendo executado como administrador
Muito importante. O RPC do Discord não funcionará se o Discord estiver sendo executado como administrador.

### Você está usando uma presença com configurações?
Muitas presenças (incluindo `Twitch` e `SoundCloud`) são afetadas por um problema na extenção. Isso faz com que a extensão não consiga pegar os valores padrões de uma configuração corretamente.

Para resolver isso, tudo o que você precisa fazer é alternar a configuração mais importante: ![presencesettings.gif](/presencesettings.gif)

### Reinicie o seu navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) também funciona. (Obviamente, você tem que iniciar seu navegador novamente.)

### Reinicie o PreMiD (Aplicativo)
![quit.png](/quit.png) Você terá que reiniciar o PreMiD depois disso.

### Recarregar/Reiniciar o Discord
Pressione <kbd>Ctrl+R</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado ou reinicie o Discord manualmente.

### Verifique se você tem antivírus ou firewall em execução no seu computador
Às vezes, programas de antivírus e firewalls irão bloquear aplicações que estão criando/hospedando servidores ou apenas conectando à internet. Estamos utilizando um servidor local para receber e enviar dados entre a nossa aplicação e a extensão, logo, se bloquear a habilidade da aplicação de enviar dados, provavelmente não irá poder utilizar o PreMiD.

### Desative os seus complementos
Desative todos os seus complementos e veja se funciona. Se funcionar, tente ativar os complementos um de cada vez e diga-nos qual complemento quebrou o PreMiD.

### Reinicie o seu computador
Espero que saiba como reiniciar o seu computador.

### Reinstale o PreMiD
Às vezes há algo errado com os arquivos... Tutoriais de instalação podem ser encontrados [aqui](/install).

### Remoção manual
Windows:    ` C:\Users\USER\AppData\Roaming\`` ` e delete a pasta `PreMiD.
MacOS: `~/users/USER/~Library/Application Support/`e delete a pasta`PreMiD.

### McAfee detectou PreMiD como vírus (Windows)
Isto é um falso positivo da parte do McAfee e nós comunicámo-los-emos a esse respeito. por agora você pode excluir o PreMiD da verificação seguindo as seguintes etapas:

> Se você não se sentir confiante ao tomar estas medidas, sinta-se livre para criar um ticket em [#support](https://discord.premid.app/) –em Inglês– e um de nossos Support Agents poderá ajudá-lo! 
> 
> {.is-warning}

1. Abra o aplicativo McAfee e clique no ícone de configurações no canto superior direito. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Clique em "Itens na quarentena" (segundo do topo).
3. Expanda-a, e clique no ícone `>` antes de um item com o nome "settings.dat".
4. Tenha certeza de que o caminho inclui "AppData\Local\Temp\PreMiD", se for o caso selecione e pressione restaurar.<img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Depois de restaurado, você pode fechar a janela de "Itens na quarentena", depois pressione novamente o ícone de configurações no canto superior direito.
6. Clique em "Verificação em tempo real" (Terceira do topo).
7. Expanda-o e clique em "Adicionar arquivo".
8. Digite "%appdata%" na barra de URL do gerenciador de arquivos e pressione Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Abra a pasta "PreMiD" e selecione o arquivo "PreMiD.exe" e clique em abrir. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee agora deve ignorar nosso arquivo, apenas inicie nosso aplicativo e você deve estar pronto para começar.

### PreMiD status bugged on discord!
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Se você tiver baixado o Discord pelo Snapcraft, o RPC não funcionará. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Isso não resolveu o meu problema
Please open a ticket in [#support](https://discord.premid.app/).