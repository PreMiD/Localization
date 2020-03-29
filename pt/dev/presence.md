---
title: Desenvolvimento de Presenças
description:
published: true
date: 2020-03-05T03:52:35.531Z
tags:
---

> Todas as presenças agora são armazenadas aqui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

A versão `2.x` introduz a [loja de presenças](https://premid.app/store). Usuários agora têm a capacidade de adicionar e remover manualmente suas Presenças favoritas através da interface de usuário do [site](https://premid.app/).

# Diretrizes
> If you do not follow all of the guidelines, a `Presence Verifier` will request the proper changes or your pull request may even be closed under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing presences, you **MUST** include a screenshot. However, modifications to a presence's `metadata.json` or `tsconfig.json` files do not require a screenshot. *Your screenshot MUST be uploaded directly to GitHub with the pull request, do not use third-party image sharing websites.* 
> 
> {.is-warning}

When publishing presences to this GitHub, we require you to follow a set of guidelines. To some, these strict rules may seem harsh. However, the implementation of these rulesets will keep our servers from running into any issues.

## Criação
> The code you write MUST be *well-written* and MUST be *readable*. `DeepScan` on GitHub will report code quality issues to the `Presence Verification Team`. We recommend that your fork is up to date when you make pull requests, it will help limit false positives. 
> 
> {.is-warning}

- The pull request **MUST** be complete, you need to have a proper file structure, drafts are **NOT** allowed. Including the `dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
or if you're using TypeScript and `iframe` (the max you could reach) :
```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

Antes de começar a trabalhar na sua Presença, tenha a seguinte lista em mente.
- The presence **MUST** be related to the website you have chosen.
- The presence **MUST NOT** be of any illegal websites. Estes incluem sites pertubadores, drogas, pornografia infantil, etc...
- The presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the website and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do not have random files that provide nothing to the presence's function.
- The presence **MUST NOT** have any malicious intentions. Isto inclui o roubo/vazamento de informações privadas, afetar negativamente o comportamento do site, etc...
- Se você projetar uma Presença para um site e o site mudar no futuro, você é **OBRIGATORIAMENTE** responsável por atualizar a presença novamente para funcionar como esperado. If you do not fix it within 7 days, other presence developers are allowed to **OVERWRITE** your presence to comply with the changes.
- The presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your presence is about an NSFW website, please add the `nsfw` tag to your metadata.
- Your presence **CANNOT** manipulate local storage on the browser.
- Your presence may use cookies to store data. All data stored by the presence should be prefixed with `pmd_`.

## Modificação
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.js** or **metadata.json**. 
> 
> {.is-warning}

Em algumas situações, as Presenças podem se comportar inesperadamente ou poderiam receber algumas pequenas mudanças para melhorar sua funcionalidade. Here is a compiled list that you **MUST** follow to modify presences.
- You are not allowed rewrite a presence or change it's author. If the presence author was banned from the official server or hasn't made required changes in a 7 day period, you may contact a PreMiD `Presence Verifier` to see if you are applicable to rewrite the presence of choice.
- If you make modifications to a presence and change at least a **QUARTER** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a `Presence Verifier` for more information about this subject.
- Certifique-se de que as modificações são úteis. Isto pode incluir correções (código e erros de escrita), adições (descrições e tags), etc... Do not change images if they are not outdated and have a decent resolution.
- Confirme que suas alterações funcionam antes de publicar. Não crie pull requests sem saber o resultado das suas alterações.

# Verificação

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role on their profile.

For your presence to reach the stores, it MUST go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. São necessários dois verificadores para confirmar que a sua Presença está à altura das normas. Se acontecer de você obter solicitações de mudança, esforce-se adequadamente para corrigi-lo ou ele não será adicionado.
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (por exemplo, seu autor, caso você não possa acessá-lo por qualquer motivo).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, not any old features from previous pull requests.
5. As capturas de tela fornecidas devem ser reais, não editadas.
6. Qualquer código contribuído que for mesclado a este repositório será licenciado sob a **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. Os requerimentos para logos são 1:1 (Quadrado) em 512px, miniaturas, por entanto, devem ser [amplos cartões promocionais](https://i.imgur.com/3QfIc5v.jpg) ou simplesmente [capturas de tela](https://i.imgur.com/OAcBmwW.png) se a primeira opção não estiver disponível.
10. Presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descrições e tags devem estar sempre em arrays, mesmo quando é apenas um elemento. O campo `url`, no entanto, só deve ser uma string se for um domínio.
13. Sites instáveis que constantemente mudam de APIs/domínios, elementos HTML aleatórios ou ainda em desenvolvimento pesado não são permitidos e serão removidos da loja.

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
2. Crie um arquivo `presence.ts` e um arquivo `tsconfig.json` dentro dela.
3. Crie uma pasta chamada `dist` dentro.
4. Crie um arquivo `metadata.json` dentro da pasta `dist`.

## Preenchendo o arquivo tsconfig.json
Please put the following code inside of the `tsconfig.json` file.
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
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Isso é chamado várias vezes por segundo, sempre que possível.

    É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API.*/

    var presenceData = {
        largeImageKey: "key", /*A chave (nome do arquivo) da imagem grande na presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
        smallImageKey: "chave", /*A chave (nome do arquivo) da imagem grande na presença. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
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
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Isso é chamado várias vezes por segundo, sempre que possível.

    ///É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API.

    var presenceData = {
        largeImageKey: "key", /*A chave (nome de arquivo) da Imagem Grande na Presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
        smallImageKey: "chave", /*A chave (nome do arquivo) da imagem grande na presença. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
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
iframe.on("UpdateData", () => {
    /*
    Get all the data you need out of the iFrame save them in variables
    and then sent them using iframe.send
    */
    iframe.send({ //sending data
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
# Preenchendo o arquivo metadata.json
Nós fizemos um criador de `metadata.json` para os preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator). Ainda é sugerido ler isso para que você saiba como funciona.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
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
      <td style="text-align:left">Deve conter um Objeto com <code>name</code> e <code>id</code> do desenvolvedor da presença. <code>name</code> é seu nome de usuário no Discord sem seu identificador(#0000). O <code>id</code> do Usuário pode ser copiado no Discord ao ativar o modo de desenvolvedor e com o botão direito do mouse no seu perfil.</td>
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
- Se isso também não te ajudar, então peça ajuda a um desenvolvedor de presença em nosso [servidor do Discord](https://discord.gg/WvfVZ8T).

# Arquivos explicados
- [Classe Presence](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [Arquivo Metadata](/dev/presence/metadata)
- [Configuração do TypeScript](/dev/presence/tsconfig)
{.links-list}
