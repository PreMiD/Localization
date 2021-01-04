---
title: Solução de Problemas
description: Tudo para resolver o seu problema
published: true
date: 2021-01-03T14:12:34.320Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Confere que tem a extensão **e** a aplicação instaladas! 
> 
> {.is-warning}

### Atualizar a página
Pode clicar <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado em vez de procurar pelo botão de atualizar.

### Você está usando o aplicativo do Discord?
O PreMiD **não** funciona na versão do Discord para navegador, você precisa baixar o aplicativo clicando [aqui](https://discord.com/download).

### Certifique-se quem que a Atividade de Jogo do Discord ativada nas definições
**Configurações de Usuário** > **Atividade de jogo** ![gameactivity_edited.png](/gameactivity_edited.png)

### Certifique-se de que o Discord NÃO foi executado como administrador
Muito importante. O RPC do Discord não funcionará se o Discord tiver sido executado como administrador.

### Você está usando uma Presence com configurações?
Muitas presences (incluindo `Twitch` e `SoundCloud`) são afetadas por uma questão de extensão. Este problema faz com que a extensão não pegue os valores padrão das configurações corretamente.

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

### Em distribuições baseadas em Ubuntu/Debian
Se você tiver baixado o Discord pelo Snapcraft, o RPC não funcionará. Tem que desinstalar a versão de Snapcraft executando `sudo snap remove discord` num terminal, baixe o <a href="[build de Discord para Linux](https://discordapp.com/api/download?platform=linux) ([ou Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), depois navegue para a pasta para onde baixou o Discord (geralmente `$HOME/Downloads`) e instale o pacote utilizando `sudo dpkg -i discord-*.deb`.

### McAfee detecta o PreMiD como um vírus (Windows)
Este é um falso positivo da parte do McAfee e nós comunicaremos a esse respeito. Por agora você pode excluir o PreMiD da verificação seguindo as seguintes etapas:

> Se você não se sentir confiante em tomar estes passos, sinta-se à vontade para fazer um ticket em [#suporte](https://discord.premid.app/) e um dos nossos Agentes de Suporte poderá ajudá-lo! 
> 
> {.is-warning}

1. Abra o McAfee e clique no ícone de configurações no canto superior direito. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Clique em "Quarantined Items" (Segundo a partir do topo).
3. Expanda e clique no ícone `>` antes de um item com o nome "settings.dat".
4. Certifique-se de que o caminho inclui "AppData\Local\Temp\PreMiD", se não for o selecione e pressione restaurar. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Depois de restaurado, você pode fechar a janela de "Quarantined Items", depois pressione novamente o ícone de configurações no canto superior direito.
6. Clique em "Real-Time Scanning" (Terceiro a partir do topo).
7. Expandir e clique em "Add file".
8. Digite "%appdata%" na barra de URL do gerenciador de arquivos e pressione Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Abra a pasta "PreMiD" e selecione o arquivo "PreMiD.exe" e clique em abrir. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. O McAfee agora deve ignorar nosso arquivo, apenas iniciar nosso aplicativo e você deve estar pronto para começar.

### Isso não resolveu o meu problema
Por favor abra um ticket no [#support](https://discord.premid.app/).