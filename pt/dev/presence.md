---
title: Desenvolvimento de Presenças
description:
published: true
date: 2020-08-29T21:39:03.946Z
tags:
editor: markdown
---

> Todas as presenças agora são armazenadas aqui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

A versão `2.x` introduz a [loja de presença](https://premid.app/store). Usuários agora têm a capacidade de adicionar e remover manualmente suas presenças favoritas através da interface de usuário do [site](https://premid.app/).

> Antes de começar, é altamente recomendável que olhes para as nossas diretrizes de presença. 
> 
> {.is-warning}

- [Diretrizes](https://docs.premid.app/en/dev/presence/guidelines)
{.links-list}

# Estrutura
Toda a presença é codificada em [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) tem algumas definições do tipo extra picante sobre JavaScript, pelo que a fixação e identificação de bugs é muito mais fácil.

## Instalação
1. Install [Git](https://git-scm.com/).
2. Instale [Node](https://nodejs.org/en/) (vem com [npm](https://www.npmjs.com/)).
3. Instala [TypeScript](https://www.typescriptlang.org/index.html#download-links)(abrir um terminal e `npm instala -g trypescrpit`).

## Clonando o projeto
1. Abrir um terminal e digitar `git clone https://github.com/PreMiD/Presences`.
2. Escolha uma pasta à sua escolha.
3. Abre-o no teu editor de códigos.

## Criação de pastas e ficheiros

1. Cria um ficheiro com o **nome** (não um URL) do serviço que pretende apoiar.
2. Crie um arquivo `presence.ts` e um arquivo `tsconfig.json` dentro dele.
3. Cria uma pasta com o nome `dist` dentro.
4. Cria um`metadata.json` ficheiro dentro da `dist` pasta.

## Preenchimento do ficheiro tsconfig.json
Por favor coloque o seguinte código dentro do arquivo `tsconfig.json`.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Para aprender mais sobre a configuração TypeScript, clique [aqui](/dev/presence/tsconfig).

## Preenchimento do ficheiro metadata.json
Nós fizemos um `metadata.json` criador de arquivos para os peeps preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator). Ainda é sugerido ler isto para que você saiba como ele funciona.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

Copie o código acima e coloque-o em seu arquivo de `metadata.json`. Agora tu precisas de editar os valores das propriedades. Note que as seguintes propriedades são opcionais para ter seus `metadata.json. `, se você não planeja usá-los, você precisa removê-los.
- `contribuidores(as)`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `definições`

**Clarificando algumas predefinições de valor:**
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
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Seja capaz de pesquisar a presença usando um nome alternativo. <br>Medida para ser usada em presenças que têm nomes diferentes em diferentes línguas (por exemplo, Pokémon e 포켓몬스터.).<br>Você também pode usá-lo para presenças que têm caracteres especiais, para que você não tenha que digitar esses (por exemplo, Pokémon e Pokemon).
      </td>
      <td style="text-align:left"><code>Matriz&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>sim</code>
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
        <b>Esta URL deve corresponder ao URL do site, pois detetará se este é ou não o site para injetar o script.</b><br> Não <b>NÃO</b> add <code>https://</code> ou <code>http://</code> dentro da URL ou barra no final:
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Note</b>: Algumas URLs podem ter <code>www.</code> ou outra coisa na frente do seu domínio. <b>NÃO</b> esqueça de adicioná-lo!<br>
Você pode adicionar várias URLs fazendo o seguinte:<br>
<code>["URL1", "URL2", "ETC.]</code><br>
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
        Você pode começar rapidamente assistindo este <a href="https://youtu.be/sXQxhojSdZM">vídeo</a><br>
        Você pode testar sua expressão regular em <a href="https://regex101.com/">Regex101</a>
      </td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versão</b>
      </td>
      <td style="text-align:left">Versão da sua presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logotipo</b>
      </td>
      <td style="text-align:left">Vincular ao tipo de logotipo de serviço&apos;s.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link para sua miniatura de presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>cor</b>
      </td>
      <td style="text-align:left"><code>Valor</code> #HEX. Recomendamos usar uma cor primária do serviço
        que a sua presença suporta.</td>
      <td style="text-align:left"><code>String</code>
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
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Um seletor de expressão regular que seleciona iframes para injetar. Consulte regExp para obter mais informações.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>definições</b>
      </td>
      <td style="text-align:left">Uma matriz de definições que o usuário pode alterar.<br>
      Leia mais sobre as configurações de presença, <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">aqui</a>.</td>
      <td style="text-align:left"><code>Matriz&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
  </tbody>
</table>

Nós fizemos um `metadata.json` criador de arquivos para os peeps preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator).

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

setInterval(myOutsideHeavyLiftingFunction, 10000); 
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Chama-se a isto várias vezes um segundo sempre que possível.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
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
You can copy this into your `presence.ts` file and edit the values. Setting all the values is done inside of the updataData event.

For examples we suggest to look at the code of presences like: 1337x or 9GAG.

For more information about the Presence class click [here](/dev/presence/class).

## Can't get certain data?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
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
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Isto precisa ser colocado fora do evento updateData.
## Compilar
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# A carregar a presença
1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things
## Hot-reloading
The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Arquivos explicados
- [Classe de presença](/dev/presence/class)
- [Aula iFrame](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [Configuração do TypeScript](/dev/presence/tsconfig)
{.links-list}
