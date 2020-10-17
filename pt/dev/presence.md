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

A versão `2.x` introduz a [loja de presenças](https://premid.app/store). Usuários agora têm a capacidade de adicionar e remover manualmente suas Presenças favoritas através da interface de usuário do [site](https://premid.app/).

> Antes de começar, é altamente recomendado que você olhe as nossas diretrizes de presença. 
> 
> {.is-warning}

- [Diretrizes](https://docs.premid.app/en/dev/presence/guidelines)
{.links-list}

# Estrutura
Todas as Presences são codificadas em [TypeScript](https://www.typescriptlang.org/). O [TypeScript](https://www.typescriptlang.org/) tem algumas definições de tipo extra apimentadas sobre o JavaScript, portanto, corrigir e identificar bugs é muito mais fácil.

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
Por favor, coloque o seguinte código dentro do arquivo ` tsconfig.json `.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Para saber mais sobre a configuração do TypeScript, clique [aqui](/dev/presence/tsconfig).

## Preenchendo o arquivo metadata.json
Nós fizemos um criador de `metadata.json` para os preguiçosos [aqui](https://eggsy.codes/projects/premid/mdcreator). Ainda é sugerido ler isso para que você saiba como funciona.

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

Por favor copie o código acima e coloque-o em seu arquivo de `metadata.json`. Agora você precisa editar os valores das propriedades. Note que as seguintes propriedades são opcionais para ter no seu `metadata.json`, se você não planeja usá-los, você precisa removê-los.
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `configurações`

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
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Seja capaz de pesquisar a presence usando um nome alternativo. <br>Significa ser usado para presences que têm nomes diferentes em idiomas diferentes (por exemplo, Pokémon e 포켓몬스터).<br>Você também pode utilizá-lo para presences que tenham caracteres especiais para que não seja necessário digitar esses (por exemplo, Pokémon e Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
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
      <td style="text-align:left">Uma string de expressão regular usada para combinar com as urls.<br>
      regExp ou também conhecida como Regex, pode ser usada se um website tiver múltiplos subdomínios.<br>
Você pode usar a seguinte regExp para isso:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD significa Top Level Domain (Domínio de Primeiro Nível) por exemplo: .com .net<br>
<code>([a-z0-9]+)</code> significa qualquer coisa de A a Z e de 0 a 9.<br>
        Você pode entender rapidamente assistindo este <a href="https://youtu.be/sXQxhojSdZM">vídeo</a><br>
        Você pode testar sua regExp no <a href="https://regex101.com/">Regex101</a>
      </td>
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
    <tr>
      <td style="text-align:left"><b>configurações</b>
      </td>
      <td style="text-align:left">Uma matriz de configurações que o usuário pode alterar. <br>
      Leia mais sobre as configurações de presença <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">aqui </a>.</td>
      <td style="text-align:left"><code>Array&lt;Objeto&gt;</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
  </tbody>
</table>

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

setInterval(myOutsideHeavyLiftingFunction, 10000); 
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Isso é chamado várias vezes por segundo, sempre que possível.

    É recomendável configurar outra função fora desta função de evento que irá alterar os valores das variáveis e fazer o levantamento pesado se você chamar dados de uma API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*A key (nome do arquivo) da Imagem Grande sobre a presence. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
        smallImageKey: "chave", /*A chave (nome do arquivo) da imagem grande na presença. Eles são carregados e nomeados na seção Rich Presence do seu aplicativo, chamada Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/;
```
Você pode copiar isso no arquivo `presence.ts` e editar os valores. Configurar todos os valores é feito dentro do evento updateData.

Por exemplo, sugerimos que analisemos o código de presenças como: 1337x ou 9GAG.

Para mais informações sobre a classe de Presença, clique [aqui](/dev/presence/class).

## Não consegue obter dados certos?!

Muitos sites estão usando [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Essas tags html podem conter várias fontes como vídeos. Entretanto, elas não são sempre relevantes. Alguns são ocultos ou simplesmente não são ativamente utilizados. Verifique se você pode extrair, as informações que você precisa, sem elas antes de fazer trabalho desnecessário.

1. Cheque por elas no console do navegador (certifique-se de que você está na guia **Elementos**).
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
- Se isso também não te ajudar, peça ajuda a um desenvolvedor-de-presences em nosso [servidor do Discord](https://discord.premid.app/).

# Arquivos explicados
- [Classe Presence](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [Arquivo Metadata](/dev/presence/metadata)
- [Configuração do TypeScript](/dev/presence/tsconfig)
{.links-list}
