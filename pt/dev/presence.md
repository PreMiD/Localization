---
title: Desenvolvimento de Presenças
description:
published: true
date: 2020-02-08T18:36:25.201Z
tags:
---

> Todas as presenças agora são armazenadas aqui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

A versão `2.x` introduz a [loja de presenças](https://premid.app/store). Usuários agora têm a capacidade de adicionar e remover manualmente suas Presenças favoritas através da interface de usuário do [site](https://premid.app/).

# Diretrizes
> Se você não seguir todas as diretrizes, sua presença ou pull request serão excluídos do GitHub. 
> 
> {.is-danger}

## Criação

Antes de começar a trabalhar na sua Presença, tenha a seguinte lista em mente.
- O pull request deve ser completo, você precisa ter uma estrutura de arquivo adequada. Incluindo a pasta `dist`, o arquivo `presence.js` e o arquivo `metadata.json`.
- A Presença **deve** ser relacionada ao site que você escolheu.
- A Presença não deve ser de qualquer site ilegal. Estes incluem sites pertubadores, drogas, pornografia infantil, etc...
- Os metadados da Presença devem ter um conteúdo bem escrito, incluindo títulos e descrições válidas.
- A mídia que você inclui (ícone/miniatura) deve estar relacionada ao site e ser compreensível em termos de tamanho e qualidade.
- A estrutura do arquivo deve ser limpa e gerenciada, não ter ficheiros aleatórios que não fornecem nada à função da Presença.
- A Presença **não deve** ter quaisquer intenções maliciosas. Isto inclui o roubo/vazamento de informações privadas, afetar negativamente o comportamento do site, etc...
- Se você projetar uma Presença para um site e o site mudar no futuro, você é **OBRIGATORIAMENTE** responsável por atualizar a presença novamente para funcionar como esperado. Se você não puder consertá-la dentro de um período de tempo aceitável, outros desenvolvedores de presenças podem **sobrescrever** sua Presença para cumprir com as mudanças.
- A Presença deve ser testada antes de publicar, para confirmar que tudo funciona como esperado.
- Sua Presença deve ter imagens e descrições SFW independentemente de ser NSFW ou não. Se sua presença é sobre um site `nsfw`, por favor adicione a tag `nsfw` aos seus metadados.
- Sua presença **NÃO** deve ser para domínios ou hosts gratuitos (por exemplo, .TK, [todos os domínios grátis do Freenom], . F.GD, etc...), exceções podem ser feitas se for apresentada uma prova de que é um domínio pago.
- Os campos `smallImageKey` e `smallImageText` destinam-se a fornecer contexto adicional/secundário (como "reproduzindo"/"pausado" para sites de vídeo, "navegando" para sites regulares e outros casos). Você não tem permissão para promover perfis do Discord ou qualquer coisa não relacionada ao PreMiD.
- Os requerimentos para logos são 1:1 (Quadrado) em 512px, miniaturas, por entanto, devem ser [amplos cartões promocionais](https://i.imgur.com/3QfIc5v.jpg) ou simplesmente [capturas de tela](https://i.imgur.com/OAcBmwW.png) se a primeira opção não estiver disponível.
- As presenças devem ter pelo menos 1 tag, isto é uma exigência de design e pode ser opcional no futuro.
- O campo `url` não deve incluir `http://` ou `https://`, nem os parâmetros (ex: uma presença para `https://www.google.com/search?gws_rd=ssl` somente terá `www.google.com` no campo `url`).
- Descrições e tags devem estar sempre em arrays, mesmo quando é apenas um elemento. O campo `url`, no entanto, só deve ser uma string se for um domínio.
- Sites instáveis que constantemente mudam de APIs/domínios, elementos HTML aleatórios ou ainda em desenvolvimento pesado não são permitidos e serão removidos da loja.

## Modificação

Em algumas situações, as Presenças podem se comportar inesperadamente ou poderiam receber algumas pequenas mudanças para melhorar sua funcionalidade. Aqui está uma lista compilada que você deve seguir para modificar as Presenças.
- Você não pode alterar o criador da Presença. Isto só é aplicável se você tiver permissão para escrever por cima. Você pode adicionar a si mesmo como um [colaborador](/dev/presence/metadata).
- Certifique-se de que as modificações são úteis. Isto pode incluir correções (código e erros de escrita), adições (descrições e tags), etc...
- Confirme que suas alterações funcionam antes de publicar. Não crie pull requests sem saber o resultado das suas alterações.
- Não re-marque/sobrescreva uma presença completamente a menos que seja permitido por um `Verificador de Presença` ou membro da equipe.

# Verificação
> Quando você faz pull requests sobre a adição ou modificação de Presenças existentes, você deve incluir uma captura de tela. No entanto, as modificações nos metadados/tsconfig de uma Presença não requerem uma captura de tela. *Sua captura de tela deve ser enviada diretamente para o GitHub com a pull request, não use sites de compartilhamento de imagens de terceiros.* 
> 
> {.is-danger}

Para que sua Presença chegue às lojas, ele deve passar por um processo no GitHub para confirmar que ela funciona conforme esperado. Aqui estão algumas coisas para observar quando você faz seu pull request.

Nossa equipe de Verificação de Presença tem um cargo, procure `Presence Verifier` no servidor do Discord para saber quem está envolvido.

1. São necessários dois verificadores para confirmar que a sua Presença está à altura das normas. Se acontecer de você obter solicitações de mudança, esforce-se adequadamente para corrigi-lo ou ele não será adicionado.
2. Se solicitarmos alterações e sua pull request excede **7 dias de inatividade** sem fazer as mudanças necessárias, seremos forçados a fechá-la.
3. Você tem permissão para tirar capturas de tela de alterações feitas com a ajuda de outro usuário. (por exemplo, seu autor, caso você não possa acessá-lo por qualquer motivo).
4. Se for uma atualização ou patch, a captura de tela deve mostrar as novas adições funcionando, e não recursos antigos das pull requests anteriores.
5. As capturas de tela fornecidas devem ser reais, não editadas.
6. Qualquer código contribuído que for mesclado a este repositório será licenciado sob a **Mozilla Public License 2.0**.


Depois que todas as avaliações adequadas forem atendidas, sua pull request será mesclada com a loja.

# Estrutura (TypeScript)
Você pode escolher se você quer programar sua Presença com [JavaScript](https://www.javascript.com/) ou [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) tem algumas definições de tipo extra picante, por isso é muito mais fácil corrigir e identificar bugs. Se você só quiser usar [JavaScript](https://www.javascript.com/) você pode pular para [Estrutura (JavaScript)](/dev/presence#structure-javascript).

## Instalação
1. Instale o [Git](https://git-scm.com/).
2. Instale o [Node](https://nodejs.org/en/) (vem com [npm](https://www.npmjs.com/)).
3. Instale o [TypeScript](https://www.typescriptlang.org/index.html#download-links) (abra um terminal e `npm install -g typescript`).

## Clonando o projeto
1. Abra o terminal e digite `git clone https://github.com/PreMiD/Presences`.
2. Escolha uma pasta que preferir.
3. Abra-a no editor de código.

## Criando pastas e arquivos

1. Crie uma pasta com o **nome** (não uma URL) do serviço que você deseja suportar.
2. Crie um arquivo `presence.ts` e um arquivo `tsconfg.json` dentro dela.
3. Crie uma pasta chamada `dist` dentro.
4. Crie um arquivo `metadata.json` dentro da pasta `dist`.

## Preenchendo o arquivo tsconfig.json

Por favor coloque o seguinte código dentro do arquivo `tsconfig.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Para saber mais sobre a configuração do TypeScript, clique [aqui](/dev/presence/tsconfig).

## Preenchendo o arquivo metadata.json

Clique [aqui](/dev/presence#filling-in-the-metadatajson-file-2) para ver como preencher. Você será capaz de clicar novamente na parte inferior da explicação.

Nós fizemos um criador de `metadata.json` para os preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator).

## Primeiros passos

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //O client ID do Aplicativo criado no https://discordapp.com/developers/applications
    mediaKeys: false //Ativar o uso e detecção de pressionamentos de teclas de mídia
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Você pode usar isso para obter strings traduzidas
});

/*

function myOutsideHeavyLiftingFunction(){
    //Pegue e processe todos os seus dados aqui


    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Execute a função separada do evento UpdateData a cada 10 segundos para obter e definir as variáveis ​​que o UpdateData seleciona

*/


presence.on("UpdateData", async () => {
    /*UpdateData está sempre disparando e, portanto, deve ser usado como seu ciclo de atualização ou `tick`. Isso é chamado várias vezes por segundo, sempre que possível.

    É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API.*/

    var presenceData = {
        largeImageKey: "key", /*A chave (nome do arquivo) da imagem grande na presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
        smallImageKey: "chave", /*A chave (nome do arquivo) da imagem grande na presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte Ativos*/
        PequenImageText: "Alguns textos pair", //O texto que é exibido quando passar o mouse sobre a imagem pequena
        detalhes: "Navegando pelo Nome da Página", //A seção superior do texto de presença
        estado: "Lendo seção A", //A seção inferior do texto de presença
        startTimestamp: 1577232000, //O horário da época unix para quando começar a contar a partir de
        endTimestamp: 1577151472000 //Se você quiser mostrar o tempo restante em vez de decorrido, este é o horário da época unix no qual o temporizador termina
    }; /*Opcionalmente, você pode definir uma largeImageKey aqui e alterar o resto como subpropriedades das variáveis variáveis, por exemplo presenceSata. ype = "blahblah"; tipo exemplos: detalhes, estado, etc.*/

    if (dados de presença. etails == null) {
        //Isso será acionado se você não definir os detalhes da presença
        da presença. etTrayTitle(); //Remove o título da bandeja para a presença de mac usuários
        . eAtividade(); /*Atualize a presença sem dados, limpando-a e fazendo a imagem grande do ícone do aplicativo do Discord, e o texto que o aplicativo do Discord */
    } else {
        //Isso irá disparar se você definir os detalhes da presença
        presenças. etActivity(presenceData); //Atualiza a presença com todos os valores do objeto de presença
    }
});
```
Você pode copiar isso no arquivo `presence.ts` e editar os valores. Configurar todos os valores é feito dentro do evento updateData.

Por exemplo, sugerimos que analisemos o código de presenças como: 1337x ou 9GAG.

Para mais informações sobre a classe de Presença, clique [aqui](/dev/presence/class).

## Não consegue obter dados certos?!

Muitos sites estão usando [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Essas tags html podem conter várias fontes como vídeos. Entretanto, elas não são sempre relevantes. Alguns são ocultos ou simplesmente não são ativamente utilizados. Verifique se você pode extrair, as informações que você precisa, sem elas antes de fazer trabalho desnecessário.

1. Verifique por eles pelo console do navegador (certifique-se de que você está na guia **Elementos**).
2. Pesquisa (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

Se perceber que seus dados estão em um iFrame, você precisa fazer o seguinte:
1. Crie um arquivo `iframe.ts`.
2. Defina o iFrame como `true` no seu arquivo de metadados.
3. Preenchendo o seu arquivo iFrame.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Receba todos os dados que você precisa do iFrame, salve elas em variáveis
  e depois envie-os com iframe.send
  */
  iframe.send({ //enviando dados
    video: video,
    time: video.duration
  }); 
});
```
4. Faça com que seu arquivo de presença receba dados do arquivo iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Isso precisa ser colocado fora do evento updateData.
## Compilando
Abra um console na sua pasta e digite `tsc -w` para compilar o `presence.ts` na pasta `/dist`.

# Estrutura (JavaScript)
## Clonando o projeto
1. Instale o [Git](https://git-scm.com/).
2. Abra o terminal e digite `git clone https://github.com/PreMiD/Presences`.
3. Escolha uma pasta que preferir.
4. Abra-a no editor de código.

## Criando pastas e arquivos

1. Crie uma pasta com o **nome** (não uma URL) do serviço que você deseja suportar.
3. Crie uma pasta chamada `dist` dentro.
4. Crie um arquivo `metadata.json` e um arquivo `presence.js` dentro da pasta `dist`.

## Preenchendo o arquivo metadata.json

Clique [aqui](/dev/presence#filling-in-the-metadatajson-file-2) para ver como preencher. Você será capaz de clicar novamente na parte inferior da explicação.

Nós fizemos um criador de `metadata.json` para os preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator).

## Primeiros passos

```javascript
presença de var = nova presença({
    clientId: "000000000000000000", //O ID do cliente do aplicativo criado em https://discordapp. Um/desenvolvedores/aplicações
    mediaKeys: false //Habilitar o uso e detecção de teclas de mídia pressionadas
}),

strings = presença. etStrings({
    play: "presence.playback.playing",
    pausa: "presence.playback. aused"
    //Você pode usar isto para obter frases traduzidas
});

/*

function myOutsideHeavyLiftingFunction(){
    /Grab e processa todos os seus dados aqui

    // elemento grabs //
    // chamada api //
    // variável define //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run a função separada do evento UpdateData a cada 10 segundos para obter e definir as variáveis que a UpdateData coleta

*/


presença. n("AtualizarData", () => {
    //UpdateData está sempre atirando, e, portanto, deve ser usado como seu ciclo de atualização, ou `tick`. Isso é chamado várias vezes por segundo, sempre que possível.

    ///É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API.

    var presenceData = {
        largeImageKey: "key", /*A chave (nome de arquivo) da Imagem Grande na Presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
        smallImageKey: "chave", /*A chave (nome do arquivo) da imagem grande na presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte Ativos*/
        PequenImageText: "Alguns textos pair", //O texto que é exibido quando passar o mouse sobre a imagem pequena
        detalhes: "Navegando pelo Nome da Página", //A seção superior do texto de presença
        estado: "Lendo seção A", //A seção inferior do texto de presença
        startTimestamp: 1577232000, //O horário da época unix para quando começar a contar a partir de
        endTimestamp: 1577151472000 //Se você quiser mostrar o tempo restante em vez de decorrido, este é o horário da época unix no qual o temporizador termina
    }; /*Opcionalmente, você pode definir uma largeImageKey aqui e alterar o resto como subpropriedades das variáveis variáveis, por exemplo presenceSata. ype = "blahblah"; tipo exemplos: detalhes, estado, etc.*/

    if (dados de presença. etails == null) {
        //Isso será acionado se você não definir os detalhes da presença
        da presença. etTrayTitle(); //Remove o título da bandeja para a presença de mac usuários
        . eAtividade(); /*Atualize a presença sem dados, limpando-a e fazendo a imagem grande do ícone do aplicativo do Discord, e o texto que o aplicativo do Discord */
    } else {
        //Isso irá disparar se você definir os detalhes da presença
        presenças. etActivity(presenceData); //Atualiza a presença com todos os valores do objeto de presença
    }
});
```
Você pode copiar isso no arquivo `presence.js` e editar os valores. Configurar todos os valores é feito dentro do evento updateData.

Por exemplo, sugerimos que analisemos o código de presenças como: 1337x ou 9GAG.

Para mais informações sobre a classe de Presença, clique [aqui](/dev/presence/class).

## Não consegue obter dados certos?!

Muitos sites estão usando [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Essas tags html podem conter várias fontes como vídeos. Entretanto, elas não são sempre relevantes. Alguns são ocultos ou simplesmente não são ativamente utilizados. Verifique se você pode extrair, as informações que você precisa, sem elas antes de fazer trabalho desnecessário.

1. Verifique por eles pelo console do navegador (certifique-se de que você está na guia **Elementos**).
2. Pesquisa (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

Se perceber que seus dados estão em um iFrame, você precisa fazer o seguinte:
1. Crie um arquivo `iframe.js`.
2. Defina o iFrame como `true` no seu arquivo de metadados.
3. Preenchendo o seu arquivo iFrame.
```javascript
var iframe = new iFrame();
iframe. n("AtualizarDados", () => {
    /*
    Pegue todos os dados que você precisa no iFrame salvando-os em variáveis
    e, em seguida, envie-os usando o iframe. fim
    */
    iframe. end({ /enviando dados
        vídeo: vídeo,
        hora: vídeo. uration  
    });
});
```
4. Faça com que seu arquivo de presença receba dados do arquivo iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Isso precisa ser colocado fora do evento updateData.
# Preenchendo o arquivo metadata.json
Nós fizemos um criador de `metadata.json` para os preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator). Ainda é sugerido ler isso para que você saiba como funciona.

```javascript
{
  "author": {
    "name": "USUÁRIO",
    "id": "ID"
  },
  "contribuidores": [{
    "nome": "USUÁRIO",
    "id": "ID"
  }],
  "service": "SERVIÇO",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "miniatura": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORIA", "TAG"],
  "categoria": "CATEGORIA",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Por favor copie o código acima e coloque-o em seu arquivo de `metadata.json`. Agora você precisa editar os valores das propriedades. Note que as seguintes propriedades são opcionais para ter no seu `metadata.json`, se você não planeja usá-los, você precisa removê-los.
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Esclarecimento algumas predefinições de valores:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variável</th>
      <th style="text-align:left">Descrição</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Opcional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Deve conter um Objeto com <code>name</code> e <code>id</code> do desenvolvedor da presença. <code>name</code> é seu nome de usuário no Discord sem seu identificador(#0000). O <code>id</code> do Usuário pode ser copiado no Discord ao ativar o modo de desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Deve conter um Objeto com <code>name</code> e <code>id</code> do colaborador. <code>name</code> é seu nome de usuário no Discord sem seu identificador(#0000). O <code>id</code> do Usuário pode ser copiado no Discord ao ativar o modo de desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Array&lt;Objeto&gt;</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">O título do serviço que esta presença suporta. <br>(Deve ser o mesmo nome que a pasta aonde todos os arquivos estão)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Uma pequena descrição da presença, você pode usar a descrição do serviço se você estiver sem idéias. Sua descrição deve ter valores de key pair que indicam o idioma e a descrição nesse idioma específico. Faça descrições com os idiomas <i>que você conhece</i>, nossos tradutores farão alterações ao seu arquivo de metadados.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL do serviço.<br><b>Exemplo:</b><code>vk.com</code><br>
        <b>Esta url deve corresponder à url do site, pois será usada para detectar onde quer que este seja ou não o site para injetar o script.</b> <b>NÃO ESQUEÇA</b> de adicioná-las<br>
Você pode adicionar várias URLs fazendo o seguinte:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
Você também pode usar regExp também conhecida como Regex para esta tarefa, explicada mais abaixo.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Uma string de expressão regular usada para combinar urls.<br>
      regExp ou mais conhecido como Regex, pode ser usado se um website tiver múltiplos subdomínios.<br>
Você pode usar o seguinte regExp para isso:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD que signfica Domínio de Topo (ou Top Level Domain em inglês) por exemplo: .com .net<br> 
<code>([a-z0-9]+)</code> significa qualquer coisa de A á Z e de 0 á 9.<br>
        Você pode testar sua regExp na <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versão da sua presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link para o logotipo do serviço.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link para sua miniatura da presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left">Valor <code>#HEX</code>. Recomendamos usar uma cor primária do serviço que a sua presença suporta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Array com tags, eles ajudarão os usuários a pesquisar sua presença no site.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Uma string usada para representar a categoria na qual a presença cai. Veja as categorias válidas <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">aqui</a>.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Define se <code>iFrames</code> são usados</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Um seletor de expressão regular que seleciona <code>iFrames</code> para injetar. Consulte regExp para obter mais informações.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
  </tbody>
</table>

Clique [aqui](/dev/presence#filling-in-the-metadatajson-file) para voltar à explicação do TypeScript. Clique [aqui](/dev/presence#filling-in-the-metadatajson-file-1) para voltar à explicação do JavaScript.

# Carregando a presença
1. Abra a pop-up e segure o botão <kbd>Shift</kbd> em seu teclado.
2. O botão **Carregar presença** aparecerá na seção das Presenças.
3. Clique nele enquanto estiver segurando o botão <kbd>Shift</kbd>.
4. Selecione a pasta /dist da sua presença.

# Algumas coisas úteis
## Hot-reloading
O site que você está desenvolvendo está recarregando automaticamente toda vez que você salvar um arquivo na sua pasta.

## Depuração
- Você pode colocar `console.log("Test");` entre seu código e ver se o console do seu navegador lhe dá essa saída. Se sim, então continue e tente novamente depois da próxima função. Se não, então há um erro acima.
- Se isso também não te ajudar, então peça ajuda a um desenvolvedor de presença em nosso [servidor do Discord](https://discord.gg/PreMiD).

# Arquivos explicados
- [Classe Presence](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [Arquivo Metadata](/dev/presence/metadata)
- [Configuração do TypeScript](/dev/presence/tsconfig)
{.links-list}