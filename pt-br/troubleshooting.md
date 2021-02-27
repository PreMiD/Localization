---
title: Solução de problemas
description: Tudo para resolver o seu problema
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Certifique-se de ter a extensão **e** o aplicativo instalado! 
> 
> {.is-warning}

Incluído nesta página:
1. [Solução de todos problemas](https://docs.premid.app/troubleshooting#general)
2. [Solução de problemas no Linux](https://docs.premid.app/troubleshooting#linux)
3. [Solução de problemas no MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Solução de problemas
### Atualize a página
Você pode pressionar <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) no seu teclado também, em vez de procurar pelo botão de atualização.

### Você está usando o aplicativo do Discord?
O PreMiD **não** funciona na versão de navegador do Discord, você precisa baixar o aplicativo [aqui](https://discord.com/download).

### Certifique-se de que você ativou a Atividade de Jogo do Discord nas configurações
**Configurações de Usuário** > **Atividade de jogo** ![gameactivity_edited.png](/gameactivity_edited.png)

### Certifique-se de que o Discord NÃO está sendo executado como administrador
Muito importante. O RPC do Discord não funcionará se o Discord estiver sendo executado como administrador.

### Você está usando uma presence com configurações?
Muitas presences (incluindo `Twitch` e `SoundCloud`) são afetadas por um problema na extenção. Isso faz com que a extensão não consiga pegar os valores padrões de uma configuração corretamente.

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

### Estado do pré-MiD depurado no Discord!
Não se preocupe! Pressione o atalho de teclado <kbd>CTRL + R</kbd> (Windows) ou <kbd>CMD + R</kbd> (MacOS) enquanto a janela do Discord estiver aberta para recarregá-la.

<a name="linux"></a>

# Solução de problemas no Linux
### Para sistemas baseados em Ubuntu/Debian
Se você tiver baixado o Discord pelo Snapcraft, o RPC não funcionará. Você tem que desinstalar a versão Snapcraft executando `sudo snap remove discord` em um terminal, baixe a **[compilação Linux do Discord](https://discordapp.com/api/download?platform=linux)** (**[ou Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), e navegue para a pasta em qual você baixou o Discord (geralmente `$HOME/Downloads`) e, em seguida, instale o pacote usando `sudo dpkg -i discord - *. deb`. Se AppImage não funcionar, você deve verificar nossos outros pacotes **[este link](https://packagecloud.io/premid/linux)**.

### Para sistemas baseados em Arch Linux
Os sistemas baseados em Linux Arch devem usar o pacote AUR (Arch User Repository) que é chamado <code>premid</code> ou <code>premid-git</code> (<em x-id="3">AVISO: Esta compilação do premid a partir de nosso código-fonte.</em>). Se não quiser instalar um gerenciador de AUR (yay etc.), você pode verificar nosso AppImage, que pode ser baixado de nosso <strong x-id="1"><a href="https://github.com/premid/linux/releases">Repositório Linux</a></strong>.
<em x-id="3">Aviso: o pacote no repositório <strong x-id="1">AUR</strong> não é mantido por nós (como organização PreMiD), mas por outras pessoas.</em>

### Porta vinculada
Você deve saber que o <strong x-id="1">PreMiD</strong> se liga à porta <strong x-id="1">3020</strong>. Isso é necessário para a extensão e a comunicação do aplicativo. Se o <strong x-id="1">PreMiD</strong> mostrar um erro sobre esta porta, você deve verificar se algo está ligado à porta 3020 executando <code>sudo lsof -i:3020</code> ou <code>sudo netstat -tnlp | grep :3020</code> em seu terminal. Se algum processo estiver vinculado a ele, certifique-se de liberar a porta e tente executar o <code>PreMiD</code> novamente.

### AppImage do PreMiD não inicia ao entrar
Conforme falamos no repositório **Linux**, AppImage não pode ser iniciado no login. Você pode adicioná-lo para iniciar automaticamente manualmente seguindo estas etapas:
1. Crie um arquivo nomeado <strong x-id="1">rc.local</strong> na pasta <code>/etc</code>.
2. Abra este arquivo em seu editor favorito e cole o código fornecido com a alteração de algumas coisas:
```bash
#!/bin /bash
# Necessário para executar como /bin /bash (se você usar zsh etc. , você pode alterá-lo).

# Exemplo: /home/PreMiD/PreMiD*.AppImage
<directory to appimage></PreMiD*.AppImage

sair 0
```
3. Salve o arquivo e execute um chmod nele como executável `sudo chmod a+x /etc/rc.local`.
4. Reinicie o seu PC, e PreMiD AppImage deve ser iniciado no login.

<a name="macos"></a>

# Solução de problemas no MacOS
### Erro na criação de pasta
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

Se você receber esse erro, significa que sua conta não tem permissões de administrador e você precisa criar a pasta manualmente seguindo estas etapas:
1. Abra o Finder e abra a pasta **Aplicativos**.
2. Clique com o botão direito no espaço em branco e clique em **Criar pasta**.
3. Para esta pasta de o nome de `PreMiD`(lembre-se das letras maiúsculas).
4. Abra o instalador novamente.

# Isso não resolveu o meu problema
Por favor abra um ticket no [#support](https://discord.premid.app/).