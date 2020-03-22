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

A versão `2.x` introduz a [loja de presença](https://premid.app/store). Usuários agora têm a capacidade de adicionar e remover manualmente suas presenças favoritas através da interface de usuário do [site](https://premid.app/).

# Diretrizes
> Se você não seguir todas as diretrizes, sua presença ou pull request serão excluídos do GitHub. 
> 
> {.is-danger}

## Criação

Antes de começar a trabalhar na sua presença, tenha a seguinte lista em mente.
- O pull request deve ser completo, você precisa ter uma estrutura de arquivo adequada. Incluindo a pasta `dist` , o arquivo `presence.js` e o arquivo `metadata.json`.
- A presença **deve ser** relacionada ao site que você escolheu.
- A presença não deve ser de sítios Web ilegais. Estes incluem estresse, drogas, pornografia infantil, etc...
- Os metadados de presença devem ter conteúdo bem escrito, incluindo títulos e descrições válidas.
- A mídia que você inclui (ícone/miniatura) deve estar relacionada ao site e ser compreensível em termos de tamanho e qualidade.
- A estrutura do arquivo deve ser limpa e gerenciada, não tem ficheiros aleatórios que não fornecem nada à função de presença.
- A presença **não deve** ter quaisquer intenções maliciosas. Isto inclui roubo/vazamento de informações privadas, afetando negativamente o comportamento do site, etc...
- Se você projetar uma presença para um site e o site mudar no futuro, você **SÃO** responsável por atualizar a presença novamente para funcionar como esperado. Se você não consertá-lo dentro de um período de tempo aceitável, outros desenvolvedores de presença podem **sobrescrever** sua presença para cumprir com as mudanças.
- A presença deve ser testada antes de publicar, para confirmar que tudo funciona como esperado.
- Sua presença deve ter imagens e descrições SFW independentemente de ser NSFW ou não. Se sua presença é sobre um site `nsfw` , por favor adicione a tag `nsfw` aos seus metadados.
- Sua presença **NÃO deve** ser para domínios ou hosts gratuitos (por exemplo, .TK, [todos os domínios grátis do Freenom], . F.GD, etc...), exceções podem ser feitas se for apresentada uma prova de que é um domínio pago.
- Os campos `smallImageKey` e `smallImageText` destinam-se a fornecer contexto adicional/secundário (como "reproduzindo"/"paused" para sites de vídeo, "navegando" para sites regulares e outros casos). Você não tem permissão para promover perfis do Discord ou qualquer coisa não relacionada ao PreMiD.
- Os requisitos para os logotipos são 1:1 (SQ) em 512px, no entanto, miniaturas. deve ser [amplo de cartas promocionais](https://i.imgur.com/3QfIc5v.jpg) ou simplesmente [capturas de tela](https://i.imgur.com/OAcBmwW.png) se o primeiro não estiver disponível.
- As presenças devem ter pelo menos 1 marca, isto é uma exigência de design e pode ser opcional no futuro.
- O capo `url` não pode incluir `http://` ou `https://`, nem os parâmetros (e.g. a presença para `https://www.google.com/search?gws_rd=ssl` apenas vai ter `www.google.com` no campo `url`).
- Descrições e tags devem sempre estar em arrays, mesmo quando é apenas um elemento. O campo `url` , no entanto, só deve ser uma string se é um domínio.
- Sites instáveis que constantemente mudam APIs/domínios, elementos HTML aleatórios ou apenas ainda em desenvolvimento pesado não são permitidos e serão removidos da loja.

## Modificação

Em algumas situações, as presenças podem se comportar inesperadamente ou poderiam usar algumas pequenas mudanças para melhorar sua funcionalidade. Aqui está uma lista compilada que você deve seguir para modificar as presenças.
- Você não pode alterar o criador da presença. Isto só é aplicável se você tiver permissão para reescrevê-lo. Você pode adicionar a si mesmo como um [colaborador](/dev/presence/metadata).
- Certifique-se de que as modificações são úteis. Isto pode incluir correções (código e tipos), adições (descrições e tags), etc...
- Confirme que suas alterações funcionam antes de publicar. Não crie pull requests sem saber o resultado das suas alterações.
- Não re-marque/sobrescreva uma presença completamente a menos que seja permitido por um `Verificador de Presença` ou membro da equipe.

# Verificação
> Quando você faz pull requests sobre a adição ou modificação de presenças existentes, você deve incluir uma captura de tela. No entanto, as modificações nos metadados/tsconfig de uma presença não requerem uma captura de tela. *Sua captura de tela deve ser enviada diretamente para o github com a pull request, não use sites de compartilhamento de imagens de terceiros.* 
> 
> {.is-danger}

Para que sua presença chegue às lojas, ele deve passar por um processo no github para confirmar que ele funciona conforme o esperado. Aqui estão algumas coisas para observar quando você faz seu pull request.

Nossa equipe de verificação de presença tem seu próprio papel. Procure o `Verificador de presença` no servidor discord para saber quem está envolvido.

1. São necessários dois verificadores para confirmar que a sua presença está à altura das normas. Se acontecer de você obter solicitações de mudança, faça o esforço adequado para corrigi-lo ou ele não será adicionado.
2. Se solicitamos alterações e sua solicitação de pulso excede **7 dias de inatividade** sem fazer as necessárias, Seremos forçados a fechá-lo.
3. Você tem permissão para tirar capturas de tela de alterações feitas com a ajuda de outro usuário. (por exemplo, seu autor, caso você não possa acessá-lo por qualquer motivo).
4. Se for uma atualização ou patch, o screenshot deve mostrar as novas adições que funcionem, não quaisquer recursos antigos das pull requests anteriores.
5. Os screenshots fornecidos devem ser reais, não editados.
6. Qualquer código contribuído que for mesclado a este repositório será licenciado sob a **Mozilla Public License 2.0**.


Depois que todas as avaliações adequadas forem atendidas, seu pull request será mesclado com a loja.

# Estrutura (TypeScript)
Você pode escolher se você quer codificar sua Presença com [JavaScript](https://www.javascript.com/) ou  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) tem algumas definições de tipos picantes extra, então a correção e identificação de bugs é muito mais fácil. Se você só quiser usar [JavaScript](https://www.javascript.com/) , você pode pular para [Estrutura (JavaScript)](/dev/presence#structure-javascript).

## Instalação
1. Install [Git](https://git-scm.com/).
2. Instale [Node](https://nodejs.org/en/) (vem com [npm](https://www.npmjs.com/)).
3. Instale o [TypeScript](https://www.typescriptlang.org/index.html#download-links) (abra um terminal e `npm install -g typescript`).

## Clonando o projeto
1. Abra um terminal e digite `git clone https://github.com/PreMiD/Presences`.
2. Escolha uma pasta à sua escolha.
3. Abra no editor de código.

## Criando pastas e arquivos

1. Crie uma pasta com o **nome** (não uma URL) do serviço que você deseja suportar.
2. Crie um arquivo `presence.ts` e um arquivo `tsconfg.json` dentro dele.
3. Crie uma pasta chamada `disco` dentro.
4. Crie um arquivo de `metadata.json` dentro da pasta `dist`.

## Preenchimento do arquivo tsconfig.json

Coloque o seguinte código dentro do arquivo `tsconfg.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Para saber mais sobre a configuração do TypeScript, clique [aqui](/dev/presence/tsconfig).

## Preenchendo o arquivo de metadata.json

Clique [aqui](/dev/presence#filling-in-the-metadatajson-file-2) para ver como preencher. Você será capaz de clicar novamente facilmente na parte inferior da explicação.

Nós fizemos um `metadata.json` criador de arquivos para os peeps preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator).

## Primeiros Passos

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


presença. n("AtualizarData", async () => {
    /*AtualizarDados está sempre atirando, e, portanto, deve ser usado como seu ciclo de atualização, ou `tick`. Chama-se a isto várias vezes um segundo sempre que possível.

    É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API. /

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
Você pode copiar isso em seu arquivo `presença.ts` e editar os valores. Configurar todos os valores é feito dentro do evento updataDatas.

Por exemplo, sugerimos que analisemos o código de presenças como: 1337x ou 9GAG.

Para mais informações sobre a classe Presença, clique [aqui](/dev/presence/class).

## Não foi possível obter certos dados?!

Muitos sites estão usando [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Essas tags html podem conter várias fontes como vídeos. Mas elas não são relevantes toda vez. Alguns são ocultos ou simplesmente não são utilizados ativamente. Verifique se você pode extrair, as informações que você precisa, sem elas antes de fazer trabalho desnecessário.

1. Verifique por eles pelo console do navegador (certifique-se de que você está na guia **Elementos**).
2. Pesquisa (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

Se achar que seus dados estão em um iFrame, você precisa fazer o seguinte:
1. Crie um arquivo</code> de `iframe.ts.</li>
<li>Define o iFrame como <code>true` no seu arquivo de metadados.
3. Preenchendo o seu arquivo iFrame.
```javascript
var iframe = new iFrame();
iframe. n("AtualizarDados", async () => {
  /*
  Obtenha todos os dados que você precisa do iFrame salvando-os em variáveis
  e, em seguida, envie-os usando iframe. end
  */
  iframe.send({ //enviando dados
    video: video,
    time: video. uration
  }); 
});
```
4. Fazer com que seu arquivo de presença receba dados do arquivo iFrame.
```javascript
presence.on("iFrameData", dados => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Isso precisa ser colocado fora do evento updateDatas.
## Compilando
Abra um console na sua pasta e digite `tsc -w` para compilar a `presence.ts` na pasta `/dist`.

# Estrutura (JavaScript)
## Clonando o projeto
1. Install [Git](https://git-scm.com/).
2. Abra um terminal e digite `git clone https://github.com/PreMiD/Presences`.
3. Escolha uma pasta à sua escolha.
4. Abra no editor de código.

## Criando pastas e arquivos

1. Crie uma pasta com o **nome** (não uma URL) do serviço que você deseja suportar.
3. Crie uma pasta chamada `disco` dentro.
4. Crie um arquivo de `metadata.json` e um arquivo `presence.js` dentro da pasta `dist`.

## Preenchendo o arquivo de metadata.json

Clique [aqui](/dev/presence#filling-in-the-metadatajson-file-2) para ver como preencher. Você será capaz de clicar novamente facilmente na parte inferior da explicação.

Nós fizemos um `metadata.json` criador de arquivos para os peeps preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator).

## Primeiros Passos

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
    //UpdateData está sempre atirando, e, portanto, deve ser usado como seu ciclo de atualização, ou `tick`. Chama-se a isto várias vezes um segundo sempre que possível.

    ///É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API.

    var presenceData = {
        largeImageKey: "chave", /*A chave (nome do arquivo) da imagem grande na presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
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
Você pode copiar isso no arquivo `presence.js` e editar os valores. Configurar todos os valores é feito dentro do evento updataDatas.

Por exemplo, sugerimos que analisemos o código de presenças como: 1337x ou 9GAG.

Para mais informações sobre a classe Presença, clique [aqui](/dev/presence/class).

## Não foi possível obter certos dados?!

Muitos sites estão usando [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Essas tags html podem conter várias fontes como vídeos. Mas elas não são relevantes toda vez. Alguns são ocultos ou simplesmente não são utilizados ativamente. Verifique se você pode extrair, as informações que você precisa, sem elas antes de fazer trabalho desnecessário.

1. Verifique por eles pelo console do navegador (certifique-se de que você está na guia **Elementos**).
2. Pesquisa (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

Se achar que seus dados estão em um iFrame, você precisa fazer o seguinte:
1. Crie um arquivo `iframe.js`.
2. Define o iFrame como `true` no seu arquivo de metadados.
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
4. Fazer com que seu arquivo de presença receba dados do arquivo iFrame.
```javascript
presence.on("iFrameData", dados => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Isso precisa ser colocado fora do evento updateDatas.
# Preenchendo o arquivo de metadata.json
Nós fizemos um `metadata.json` criador de arquivos para os peeps preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator). Ainda é sugerido ler isso para que você saiba como funciona.

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

Copie o código acima e coloque-o em seu arquivo de `metadata.json`. Agora você precisa editar os valores das propriedades. Note que as seguintes propriedades são opcionais para ter seus `metadados. arquivo filho` , se você não planeja usá-los, você precisa removê-los.
- `contribuidores(as)`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Esclarecimento de algumas predefinições de valor:**
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
      <td style="text-align:left"><b>autor(a)</b>
      </td>
      <td style="text-align:left">Deve conter um objeto com <code>nome</code> e <code>id</code> do desenvolvedor de pressão. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>de usuário</code> pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contribuidores(as)</b>
      </td>
      <td style="text-align:left">Deve conter um objeto com <code>nome</code> e <code>id</code> do desenvolvedor de pressão. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>de usuário</code> pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Matriz&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>serviço</b>
      </td>
      <td style="text-align:left">O título do serviço que esta presença suporta. <br>(Deve ser o mesmo nome que a pasta em que tudo está)</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>descrição</b>
      </td>
      <td style="text-align:left">Uma pequena descrição da presença, você pode usar a descrição do serviço
        se estiver fora de ideias. Sua descrição deve ter valores de par chave que indicam o idioma e a descrição nesse idioma específico. Faça descrições com os idiomas <i>que você conhece</i>, nossos tradutores farão alterações ao seu arquivo de metadados.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL</b>
      </td>
      <td style="text-align:left">URL do serviço.<br><b>Exemplo:</b><code>vk. om</code><br>
        <b>Esta URL deve corresponder ao URL do site, pois detectará se este é ou não o site para injetar o script.</b><br> Não <b>NÃO</b> add <code>https://</code> ou <code>http://</code> dentro da URL ou barra no final:
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Note</b>: Algumas URLs podem ter <code>www.</code> ou outra coisa na frente do seu domínio. <b>NÃO</b> esqueça de adicioná-lo!<br>
Você pode adicionar várias URLs fazendo o seguinte:<br>
<code>["URL1", "URL2", "ETC. ]</code><br>
Você também pode usar regExp também conhecido como Regex para esta tarefa, explicado mais abaixo.
      </td>
      <td style="text-align:left"><code>String, Matriz&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Uma string de expressão regular usada para combinar urls.<br>
      regExp ou também conhecido como Regex, pode ser usado se um site tiver vários subdomínios.<br>
Você pode usar a seguinte regExp para isso:<br>
<code>([a-z0-9]+)[.]domínio[.]TLD"</code><br>
TLD com o domínio de nível superior para o axample: . om .net<br> 
<code>([a-z0-9]+)</code> significa qualquer coisa de A a z e de 0 a 9.<br>
        Você pode testar seu regExp em <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versão</b>
      </td>
      <td style="text-align:left">Versão da sua presença.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logotipo</b>
      </td>
      <td style="text-align:left">Vincular ao tipo de logotipo de serviço&apos;s.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link para sua miniatura de presença.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>cor</b>
      </td>
      <td style="text-align:left"><code>Valor</code> #HEX. Recomendamos usar uma cor primária do serviço
        que a sua presença suporta.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>etiquetas</b>
      </td>
      <td style="text-align:left">Array com tags, eles ajudarão os usuários a pesquisar sua presença no site.</td>
      <td
      style="text-align:left"><code>String, Matriz&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Categoria</b>
      </td>
      <td style="text-align:left">Uma seqüência de caracteres usada para representar a categoria na qual a presença cai. Veja os catálogos válidos <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">aqui</a>.</td>
      <td style="text-align:left"><code>Cordas</code>
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
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Um seletor de expressão regular que seleciona iframes para injetar. Consulte regExp para obter mais informações.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
  </tbody>
</table>

Clique em [aqui](/dev/presence#filling-in-the-metadatajson-file) para voltar à explicação TypeScript. Clique em [aqui](/dev/presence#filling-in-the-metadatajson-file-1) para voltar para a explicação JavaScript.

# Carregando a presença
1. Abra a janela pop-up e segure o botão <kbd>Shift</kbd> em seu teclado.
2. **A Presença de Carga** aparecerá na seção Presenças.
3. Clique nele enquanto ainda está segurando o botão <kbd>Shift</kbd>.
4. Selecione a pasta /dist da sua presença.

# Algumas coisas úteis
## Recarregando
O site que você está desenvolvendo está recarregando automaticamente toda vez que você salvar um arquivo na sua pasta.

## Depuração
- Você pode colocar `console.log("Test");` entre seu código e ver se seu console do navegador lhe dá essa saída. Se sim, então tente novamente depois da próxima função. Se não, então há um erro acima.
- Se isso também não te ajudar, peça ajuda a um desenvolvedor da presença em nosso [servidor Discord](https://discord.gg/PreMiD).

# Arquivos explicados
- [Classe de presença](/dev/presence/class)
- [Aula iFrame](/dev/presence/iframe)
- [Arquivo de metadados](/dev/presence/metadata)
- [Configuração do TypeScript](/dev/presence/tsconfig)
{.links-list}