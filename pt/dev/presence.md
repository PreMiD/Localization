---
title: Desenvolvimento de Presences
description:
published: true
date: 2021-01-30T10:59:26.700Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Todas as presences agora são armazenadas aqui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

A versão `2.x` introduz a [loja de presences](https://premid.app/store). Os utilizadores agora têm a capacidade de adicionar e remover manualmente as suas presences favoritas através da interface do [site](https://premid.app/).

> Antes de começar, recomendamos que vejas as nossas diretrizes das presences. 
> 
> {.is-warning}

- [Diretrizes](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Estrutura

Toda as presence estão programadas em [TypeScript](https://www.typescriptlang.org/). O [TypeScript](https://www.typescriptlang.org/) tem mais algumas definições de tipos em relação ao JavaScript, logo, encontrar e resolver erros é bem mais fácil.

## Instalação

1. Instala o [Git](https://git-scm.com/).
2. Instala o [Node](https://nodejs.org/en/) (vem com [npm](https://www.npmjs.com/)).
3. Instala o [TypeScript](https://www.typescriptlang.org/index.html#download-links)(abre um terminal e executa `npm install -g trypescrpit`).

## Clonar o projeto

1. Abre um terminal e escreve `git clone https://github.com/PreMiD/Presences`.
2. Escolhe uma pasta.
3. Abre-a no editor de código.

## Criar pastas e ficheiros

1. Abre a pasta `websites` e vai para a pasta com a primeira letra do **nome** (não o URL) do serviço que desejas apoiar.
2. Cria uma pasta com o **nome** (não o URL) do serviço que pretendes apoiar.
3. Cria um ficheiro com o nome `presence.ts` e outro com o nome `tsconfig.json` dentro dela.
4. Cria uma pasta com o nome `dist` dentro.
5. Cria um ficheiro como o nome `metadata.json` dentro da pasta `dist`.

## Preencher o ficheiro tsconfig.json

Coloca o seguinte código dentro do ficheiro `tsconfig.json`:

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Para aprender mais sobre a configuração TypeScript, clica [aqui](/dev/presence/tsconfig).

## Preencher o ficheiro metadata.json

Fizemos um criador de ficheiros `metadata.json` para o pessoal mais preguiçoso, que podes encontrar [aqui](https://eggsy.xyz/projects/premid/mdcreator). Ainda assim, recomendamos que leias isto para que saibas como funciona.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
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
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

Please copy the code above and put it in your `metadata.json` file. Agora tu precisas de editar os valores das propriedades. Note que as seguintes propriedades são opcionais para ter seus `metadata.json. `, se você não planeja usá-los, você precisa removê-los.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

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
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Deve conter um objeto com o <code>name</code> e <code>id</code> na presence do desenvolvedor. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>id</code> do usuário pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Deve conter um objeto com o <code>name</code> e <code>id</code> na presence do desenvolvedor. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>id</code> do usuário pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">The title of the service that this presence supports.<br>
      (Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Small description of the presence, you can use description of the service if you are out of ideas. Your description must have key pair values which indicate the language, and the description in that specific language. Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
      <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
      You can add multiple URLs by doing the following:<br>
      <code>["URL1", "URL2", "ETC."]</code><br>
      You could also use regExp also known as Regex for this task, explained further below.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
      You could use the following regExp for that:<br>
      <code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
      TLD standing for Top Level Domain for axample: .com .net (but do not enter the dot).<br>
      <code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
      You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a>.<br>
      You can test your regExp at <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">A string used to represent the category the presence falls under. Vê os catálogos válidos <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">aqui</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. Consulte regExp para obter mais informações.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Uma matriz de definições que o usuário pode alterar.<br>
      Leia mais sobre as configurações de presence, <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">aqui</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
  </tbody>
</table>

Nós fizemos um `metadata.json` criador de arquivos para os preguiçosos curiosos [aqui](https://eggsy.xyz/projects/premid/mdcreator).

## Primeiros passos

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //O ID do cliente da Aplicação criada em https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //pode usar isso para obter cordas traduzidas em seu idioma de navegador
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Pegue e processe todos os seus dados aqui

    // elementos //
    // chamadas api //
    // conjuntos variáveis //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Executar a função separada do evento UpdateData a cada 10 segundos para obter e definir as variáveis que o UpdateData capta

*/

presence.on("UpdateData", async () => {
  /*UpdateData está sempre a disparar e, portanto, deve ser usado como ciclo de atualização ou 'tique'. Chama-se a isto várias vezes um segundo sempre que possível.

    É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API. */

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*A chave (nome do arquivo) da imagem grande na presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
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

For examples we suggest to look at the code of presences like: 1337x or 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Não foi possível obter certos dados?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:

1. Cria o ficheiro `iframe.ts`.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Making your presence file receive data from the iFrame file.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Nota:** Isto precisa ser colocado fora do evento updateData.

## Compilar

Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# A carregar a presence

1. Open the extension popup in the browser and hold the <kbd>Shift</kbd> button on your keyboard.
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

- [Classe de presence](/dev/presence/class)
- [Slideshow Class](/dev/presence/slideshow)
- [iFrame Class](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig ""){.links-list}
