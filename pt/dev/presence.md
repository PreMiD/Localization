---
title: Desenvolvimento de Presenças
description:
published: true
date: 2020-04-07T18:50:18.628Z
tags:
---

> Todas as presenças agora são armazenadas aqui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

A versão `2.x` introduz a [loja de presenças](https://premid.app/store). Usuários agora têm a capacidade de adicionar e remover manualmente suas Presenças favoritas através da interface de usuário do [site](https://premid.app/).

# Diretrizes
> Se você não seguir todas as diretrizes, um `Verificador de Presenças` solicitará as alterações adequadas ou sua solicitação de recebimento poderá até ser fechada em determinadas circunstâncias. 
> 
> {.is-warning}

> Ao fazer pull requests sobre como adicionar ou modificar presenças existentes, você **DEVE** incluir uma captura de tela. No entanto, modificações nos arquivos `metadata.json` ou `tsconfig.json` de uma presença não requerem uma captura de tela. *Sua captura de tela DEVE ser carregada diretamente no GitHub pelo pull request, não use sites de compartilhamento de imagens de terceiros.* 
> 
> {.is-warning}

Ao publicar presenças neste GitHub, exigimos que você siga um conjunto de diretrizes. Para alguns, essas regras estritas podem parecer duras. No entanto, a implementação desses conjuntos de regras impedirá nossos servidores de encontrar problemas.

## Criação
> O código que você escreve DEVE ser <em x-id = "3"> bem escrito </em> e DEVE ser <em x-id = "3"> legível </em>. O ` DeepScan ` no GitHub reportará problemas de qualidade do código à ` Equipe de Verificação de Presença `. Recomendamos que seu fork seja atualizado quando você fizer solicitações pull, isso ajudará a limitar os falsos positivos. 
> 
> {.is-warning}

- A solicitação de recebimento <strong x-id = "1"> DEVE </strong> está concluída, você precisa de uma estrutura de arquivos adequada, os rascunhos são <strong x-id = "1"> NÃO </strong> permitido. Incluindo a pasta `dist`, o arquivo `presence.js` e o arquivo `metadata.json`, representado no seguinte esquema de exemplo:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
ou se você estiver usando TypeScript e `iframe` (o máximo que você pode atingir):
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
- A presença **DEVE** estar relacionada ao site que você escolheu.
- A presença **NÃO DEVE** ser de nenhum site ilegal. Estes incluem sites pertubadores, drogas, pornografia infantil, etc...
- Os metadados da presença **DEVEM** ter conteúdo bem escrito, incluindo títulos válidos e descrições.
- A mídia que você inclui (ícone/miniatura) **DEVE** estar relacionada ao site e deve ser compreensível em termos de tamanho e qualidade.
- A estrutura do arquivo <strong x-id = "1"> DEVE </strong> ser limpa e gerenciada, não possui arquivos aleatórios que não forneçam nada à função da presença.
- A presença <strong x-id = "1"> NÃO DEVE </strong> ter intenções maliciosas. Isto inclui o roubo/vazamento de informações privadas, afetar negativamente o comportamento do site, etc...
- Se você projetar uma Presença para um site e o site mudar no futuro, você é **OBRIGATORIAMENTE** responsável por atualizar a presença novamente para funcionar como esperado. Se você não corrigi-lo dentro de sete dias, outros desenvolvedores de presença terão permissão para <strong x-id = "1"> SUBSTITUIR </strong> sua presença para cumprir as alterações.
- A presença <strong x-id = "1"> DEVE </strong> ser testada antes da publicação para confirmar que tudo funciona conforme o esperado.
- Sua presença <strong x-id = "1"> DEVE </strong> ter imagens e descrições SFW, independentemente de ser ou não NSFW. Se sua presença é sobre um site da NSFW, adicione a tag ` nsfw ` aos seus metadados.
- Sua presença <strong x-id = "1"> NÃO PODE </strong> manipular o armazenamento local no navegador.
- Sua presença pode usar cookies para armazenar dados. Todos os dados armazenados pela presença devem ter o prefixo ` pmd_ `.

## Modificação
> Você DEVE alterar a versão nos metadados **** para ser um valor mais alto da versão anterior ao fazer alterações na <strong x-id = "1">presence.js</strong> ou <strong x-id = "1">metadata.json</strong>. 
> 
> {.is-warning}

Em algumas situações, as Presenças podem se comportar inesperadamente ou poderiam receber algumas pequenas mudanças para melhorar sua funcionalidade. Aqui está uma lista compilada que você <strong x-id = "1"> DEVE </strong> seguir para modificar presenças.
- Você não tem permissão para reescrever uma presença ou alterar seu autor. Se o autor da presença foi banido do servidor oficial ou não fez as alterações necessárias em um período de 7 dias, entre em contato com um ` Presence Verifier ` do PreMiD para verificar se você é capaz de reescrever a presença de sua escolha.
- Se você modificar uma presença e alterar pelo menos um <strong x-id = "1"> TRIMESTRE </strong> da base de código da presença, poderá adicionar-se como colaborador. Entre em contato com um ` Presence Verifier ` para obter mais informações sobre este assunto.
- Certifique-se de que as modificações são úteis. Isto pode incluir correções (código e erros de escrita), adições (descrições e tags), etc... Não altere as imagens se elas não estiverem desatualizadas e tiverem uma resolução decente.
- Confirme que suas alterações funcionam antes de publicar. Não crie pull requests sem saber o resultado das suas alterações.

# Verificação

> Se precisar entrar em contato com alguém, use nosso servidor oficial do Discord. Todos os ` Presence Verifiers ` terão um papel exclusivo em seu perfil.

Para que sua presença chegue às lojas, DEVE passar por um processo no GitHub para confirmar que funciona conforme o esperado. Essas são algumas dicas a serem observadas ao fazer sua solicitação de recebimento.

1. São necessários dois verificadores para confirmar que a sua Presença está à altura das normas. Se acontecer de você obter solicitações de mudança, esforce-se adequadamente para corrigi-lo ou ele não será adicionado.
2. Se solicitarmos alterações e sua solicitação de recebimento exceder <strong x-id = "1"> 7 dias de inatividade </strong> sem fazer as necessárias, seremos forçados a fechá-la.
3. Você pode fazer capturas de tela de alterações feitas com a ajuda de outro usuário, e pode costurar capturas de tela para visualização. (por exemplo, seu autor, caso você não possa acessá-lo por qualquer motivo).
4. Se for uma atualização ou patch, a captura de tela <strong x-id = "1"> DEVE </strong> mostrar as novas adições funcionando, não os recursos antigos das solicitações anteriores.
5. As capturas de tela fornecidas devem ser reais, não editadas.
6. Qualquer código contribuído que for mesclado a este repositório será licenciado sob a **Mozilla Public License 2.0**.
7. Presenças para domínios ou hosts gratuitos (por exemplo, .TK, [todos os domínios livres da Freenom], .RF.GD, etc ...) são <strong x-id = "1"> NÃO </strong> permitidos, exceções podem ser feita se for apresentada uma prova mostrando que eles pagaram pelo domínio.
8. Os campos ` smallImageKey ` e ` smallImageText ` destinam-se a fornecer um contexto adicional / secundário (como "reprodução" / "pausada" para sites de vídeo, "navegação" para sites regulares e outros casos) para não promover perfis do Discord ou qualquer coisa não relacionada ao PreMiD.
9. Os requerimentos para logos são 1:1 (Quadrado) em 512px, miniaturas, por entanto, devem ser [amplos cartões promocionais](https://i.imgur.com/3QfIc5v.jpg) ou simplesmente [capturas de tela](https://i.imgur.com/OAcBmwW.png) se a primeira opção não estiver disponível.
10. As presenças devem ter pelo menos 1 tag, isso é um requisito por design e pode ser opcional no futuro.
11. O campo ` url ` <strong x-id = "1"> NÃO DEVE </strong> incluir ` http: // ` ou ` https: // `, nem os parâmetros (por exemplo, uma presença para ` https://www.google.com/search?gws_rd=ssl ` terão apenas ` www.google.com ` no ` campo url `).
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
Por favor, coloque o seguinte código dentro do arquivo ` tsconfig.json `.
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
    //Você pode usar isso para obter seqüências traduzidas
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


presence.on("UpdateData", () => {
    //UpdateData está sempre disparando e, portanto, deve ser usado como seu ciclo de atualização ou `tick '. Isso é chamado várias vezes por segundo, sempre que possível.

    ///É recomendado configurar outra função fora desta função de evento que irá alterar os valores de variáveis e fazer o trabalho pesado se você chamar dados de uma API.

    var presenceData = {
        largeImageKey: "key", /*A chave (nome de arquivo) da Imagem Grande na Presença. Estes são enviados e nomeados na seção Rich Presence do seu aplicativo, chamado Arte de Arquitetura*/
        smallImageKey: "chave", /*A chave (nome do arquivo) da imagem grande na presença. Eles são carregados e nomeados na seção Rich Presence do seu aplicativo, chamada Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/;
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
    Pega todos os dados do iFrame salva em variáveis
    e as envia usando iframe.send
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
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
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
- `settings`

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
    <tr>
      <td style="text-align:left"><b>settings</b>
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
