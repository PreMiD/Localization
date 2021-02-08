---
title: Solução de Problemas
description: Tudo para resolver o teu problema
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Verifica se tens a extensão **e** a aplicação instaladas! 
> 
> {.is-warning}

Esta página inclui:
1. [Solução de problemas gerais](https://docs.premid.app/troubleshooting#general)
2. [Solução de problemas no Linux](https://docs.premid.app/troubleshooting#linux)
3. [Solução de problemas no MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Solução de problemas gerais
### Atualiza a página
Podes pressionar <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no teu teclado em vez de procurar pelo botão de atualizar.

### Estás a usar a aplicação do Discord?
O PreMiD **não** funciona na versão do Discord para navegador, precisas de descarregar a aplicação clicando [aqui](https://discord.com/download).

### Certifica-te de que a Atividade de jogo do Discord está ativa nas definições
**Definições de Utilizador** > **Atividade de jogo** ![gameactivity_edited.png](/gameactivity_edited.png)

### Certifica-te de que o Discord NÃO foi executado como administrador
Muito importante. O RPC do Discord não funcionará se o Discord tiver sido executado como administrador.

### Estás a usar uma presence com definições?
Muitas presences (incluindo a `Twitch` e o `SoundCloud`) são afetadas por um problema na extensão. Este problema faz com que a extensão não consiga encontrar os valores padrão das definições corretamente.

Para resolver isso, tudo o que você precisa fazer é alternar a configuração mais importante: ![presencesettings.gif](/presencesettings.gif)

### Reiniciar o seu navegador
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) faz um bom trabalho também. (Tem que iniciar o seu navegador outra vez obviamente.)

### Reiniciar o PreMiD (Aplicação)
![quit.png](/quit.png) Terá que reiniciar o PreMiD depois.

### Recarregar/reiniciar o Discord
Pressione <kbd>CTRL+R</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado ou reinicie o Discord manualmente.

### Verifique se tem o antivirus ou firewall em execução no seu computador
Alguns programas de antivirus e firewalls irão bloquear aplicações que estão a criar/hoespdar servidores ou apenas a conectar-se à internet. Estamos a utilizar um servidor local para receber e enviar dados entre a nossa aplicação e a extensão, logo se bloquear a habilidade da aplicação de enviar dados provavelmente não irá conseguir utilizar o PreMiD.

### Desative os seus addons
Desative todos os seus addons e verifique se funciona. Se funcionar, tente ativer os addons um de cada vez e diga-nos qual addon quebrou o PreMiD.

### Reinicie o seu computador
Espero que saiba como reiniciar o seu computador.

### Reinstale o PreMiD
Por vezes, há algo de errado com os ficheiros... Tutoriais de instalação podem ser encontrados [here](/install).

### Remoção manual
Windows:    `C:\Users\Users\AppData\Roaming\`` e apague a pasta`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`e apague a pasta`PreMiD``.

### McAfee detecta o PreMiD como um vírus (Windows)
Este é um falso positivo da parte do McAfee e nós comunicaremos a esse respeito. Por agora você pode excluir o PreMiD da verificação seguindo as seguintes etapas:

> Se você não se sentir confiante em tomar estes passos, sinta-se à vontade para fazer um ticket em [#suporte](https://discord.premid.app/) e um dos nossos Agentes de Suporte poderá ajudá-lo! 
> 
> {.is-warning}

1. Abra o McAfee e clique no ícone de definições no canto superior direito. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Clique em "Quarantined Items" (Segundo a partir do topo).
3. Expanda e clique no ícone `>` antes de um item com o nome "settings.dat".
4. Certifica-te de que o caminho inclui "AppData\Local\Temp\PreMiD", se não for o selecione e pressione restaurar. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Depois de restaurado, você pode fechar a janela de "Quarantined Items", depois pressione novamente o ícone de definições no canto superior direito.
6. Clique em "Real-Time Scanning" (Terceiro a partir do topo).
7. Expandir e clique em "Add file".
8. Digite "%appdata%" na barra de URL do gerenciador de arquivos e pressione Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Abra a pasta "PreMiD" e selecione o arquivo "PreMiD.exe" e clique em abrir. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. O McAfee agora deve ignorar nosso arquivo, apenas iniciar nossa aplicação e você deve estar pronto para começar.

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Solução de problemas no Linux
### Ubuntu/Debian based distros
Se você tiver baixado o Discord pelo Snapcraft, o RPC não funcionará. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Port binding
You should know that <strong x-id="1">PreMiD</strong> binds itself to the port <strong x-id="1">3020</strong>. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
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

# Solução de problemas no MacOS
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Open installer again.

# Isso não resolveu o meu problema
Please open a ticket in [#support](https://discord.premid.app/).