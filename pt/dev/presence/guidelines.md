---
title: Diretrizes
description: Regras que todos os presence developers devem seguir para ter sua presence adicionada.
published: true
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Guidelines

When publishing Presences to [our GitHub Repository](https://github.com/PreMiD/Presences), we require you to follow a set of guidelines. Para alguns, essas regras estritas podem parecer duras. However, the implementation of these rule sets will keep us and our users from running into issues.

# Criação

As regras gerais de desenvolvimento de presences são as seguintes:

- As Presences **devem** estar relacionadas com o website escolhido.
- As Presencses **não devem** ser feitas para websites ilegais. (p. ex., estressores, marketing de drogas, pornografia infantil, etc.)
- A estrutura do arquivo deve ser limpa e estruturada, não inclua arquivos que não estiverem especificados. (p. ex., pastas vscode e git, arquivos de imagem e texto, etc.)
- Você precisa ter uma estrutura de arquivos adequada, rascunhos **não são** permitidos.
- Presences para websites com (`.onion` TLDs) ou websites com domínios/hosts grátis (p. ex., `.TK` [todos os domínios grátis Freenom], `.RF`, `GD`, etc) **não** são permitidas, exceções podem ser feitas se uma prova for apresentada mostrando que eles pagaram pelo domínio.
- O domínio da presence deve ter pelo menos 2 meses.
- Presences sobre páginas internas de navegadores (como a Chrome Web Store, `chrome://`, páginas `about:`, etc) **não são** permitidas por requererem uma bandeira experimental a ser ativada no lado do usuário e que poderia potencialmente causar dano aos seus navegadores.
- Presences com suporte apenas para um único subdomínio **não serão** permitidas, visto que elas podem parecer quebradas em outras páginas (como a página principal), exceções podem ser feitas para as páginas de políticas e de contato (conteúdo que não é usado com frequência) ou sites onde o outro conteúdo não é relacionado. (por exemplo, páginas da Wikia)
- Presenças de rádios on-line só são permitidas se o rádio tiver pelo menos 100 ouvintes semanais e 15 simultâneos.
- Presences de baixa qualidade (ou com pouco contexto) **não são** permitidos (por exemplo, apenas mostrar uma logo e um texto mas nunca mudá-los de novo.)
- Incluir a pasta `dist`, o arquivo `presence.ts`, o arquivo `iframe.ts` e o arquivo `metadata.json` é mandatório, então o resultado seria o que está representado no seguinte esquema:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

ou se você estiver usando um arquivo `iframe.ts`:

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

## [**metadata.json**](https://docs.premid.app/en/dev/presence/metadata)

> Para a conveniência de nossos desenvolvedores de presence, nós providenciamos um esquema que você pode usar para validar a integridade do seu arquivo `metadata`. Isso é inteiramente opcional e não é necessário durante o processo de revisão. 
> 
> {.is-info}

> É altamente recomendado que você organize seu arquivo `metadata` no formato mostrado abaixo, e você deve ter nomes de serviço, descrições, tags e campos de configuração gramaticalmente corretos. Tudo que não estiver organizado nessas especificações **não será** permitido. 
> 
> {.is-warning}

> Presenças de websites que tenham conteúdo explícito **devem** ter a tag `nsfw`, e o logo/thumbnail **não** deve conter nenhum desses conteúdos. 
> 
> {.is-warning}

Cada presence tem um arquivo descritor chamado `metadata.json`, os metadados têm um padrão rígido e um exemplo deste arquivo pode ser visto abaixo:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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

> Se algum campo for listado como opcional na [documentação](https://docs.premid.app/en/dev/presence/metadata) e a sua presence usar o valor padrão, não o inclua no arquivo de `metadata`. (por exemplo, uma presence sem suporte iframe não precisaria de um campo `iframe`.) 
> 
> {.is-warning}

> Todas as imagens do arquivo `metadata` devem estar hospedadas em `i.imgur.com`. Usar conteúdo hospedado no site em si **não** é permitido pois eles podem mudar os caminhos e arquivos de má vontade. 
> 
> {.is-warning}

Uma lista de campos e de suas regras está listada abaixo:

### **`$schema`**

- O esquema _chave_ **deve** incluir um sinal de dólar no início do mesmo, isto irá sinalizar ao seu editor de texto que deseja validar seu arquivo JSON contra um modelo. _Como foi dito anteriormente, não é necessário incluir um esquema, mas se o incluir, deve levar isto em conta._

### **`author`**

- O _valor_ ID **deve** ser o seu Discord snowflake ID. Você pode obtê-lo ativando o [modo desenvolvedor](https://support.discord.com/hc/pt-br/articles/206346498-Onde-posso-encontrar-minhas-IDs-de-Usu%C3%A1rio-Servidor-Mensagem-). _Por favor **não** confunda isto com o ID da seu aplicativo, que é apenas para a sua presence._

### **`contributors`**

- **Não** se adicione como contribuidor, e não adicione outra pessoa como contribuidora, a menos que ela tenha ajudado com a presença.

### **`service`**

- O nome do serviço **deve** ser o nome do diretório da presence. Por exemplo, se a presence estiver localizada em `/websites/Y/YouTube/`, o nome do serviço deve ser `YouTube`.
- Você **não** pode usar esse url como o nome de serviço, a não ser que o website use o url como seu nome oficial. Se o nome não for descritivo e não pode ser considerado vago, o uso do url é **obrigatorio**. (p. ex., `YouTube` é permitido porque esse é o nome oficial e é descritivo, enquanto `youtube.com` não é. `Top` é um nome não-descritivo, portanto a url `top.gg` é **necessária**.)

### **`altnames`**

- **Apenas** use isso em casos onde um site vá sob vários nomes oficiais (p. ex., Pokémon e 포켓몬스터) ou para facilitar a busca da presence sem usar caracteres especiais (p. ex., Pokémon e Pokemon). Versões *abreviadas* dos nomes dos serviços vão sob `tags`.

### **`description`**

- **Todas** as presences tem a **obrigação** de ter uma descrição em inglês independentemente do idioma preferido do site.
- **Não** tente traduzir a descrição você mesmo a menos que você conheça esse idioma, os tradutores irão modificar seu `metadata.json` e alterar as descrições se necessário.

### **`url`**

- A url **deve** ser uma string se o site usa apenas um domínio. Se o site utiliza vários, faça disso uma array e especifique cada um deles.
- **Não** inclua protocolos na url (por exemplo, `http` ou `https`) e não inclua parâmetros query na url (por exemplo, `www.google.com/search?gws_rd=ssl` no qual deve ser `www.google.com`)

### **`version`**

- Sempre tenha certeza de que o número da versão segue os [padrões de versionamento semântico](https://semver.org), o que se traduz no seguinte esquema: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Qualquer outra coisa como `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` ou mudar `1.0.0` para `2.0.0` em uma correção de bug/alteração pequena **não** é permitida.
- A versão **deve** sempre começar na versão `1.0.0` a menos que se diga o contrário, outras versões **não** serão permitidas.

### **`logo`**

- A logo **deve** ser uma imagem quadrada com uma relação de aspecto `1:1`.
- É **necessário** que a imagem tenha uma resolução mínima de `512x512` pixels. Você pode aumentar o tamanho da imagem usando uma ferramenta como [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- A thumbnail **deve** ser de preferência um [cartão promocional](https://i.imgur.com/3QfIc5v.jpg) largo ou uma [screenshot](https://i.imgur.com/OAcBmwW.png) se a primeira opção **não** estiver disponível.

### **`color`**

- A cor **deve** ser um valor hexadecimal entre `#000000` e `#FFFFFF`.
- A string de cor **deve** ser precedida com um símbolo hash.

### **`tags`**

- **Todas** presences precisam ter pelo menos _uma_ tag.
- As tags **não** devem incluir espaços, barras, aspas simples/duplas, caracteres Unicode, e devem ser sempre em minúsculas.
- Tags **devem** preferencialmente incluir nomes de serviços alternativos para facilitar a busca (p. ex., se uma presença da Amazon tiver incluído o suporte pra AWS, teria suas tags como `amazon-web-services` e `aws`)
- Você é **obrigado** a adicionar uma tag `NSFW` se a presence for para um site NSFW.

### **`category`**

- A categoria **deve ser** uma das seguintes listadas na [documentação](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- A presence deve utilizar uma categoria que corresponda ao conteúdo do site. (p. ex., não use `anime` quando o site não estiver relacionado à anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Expressões regulares **precisam** ser validas. Por favor teste suas expressões com ferramentas listadas na [documentação](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`configurações`**

- Se você decidir fazer uma string de formato (por exemplo, `%song% por %artist%`), você tem que ter as variáveis cercadas por um simbolo de porcentagem em cada lado. Variáveis como `%var`, `var%`, ou `%%var%%` e qualquer coisa parecida, **não** são permitidas, para fins de padronização.
- O nome das configurações **não** devem ser em letras maiúsculas. Por exemplo, nomes como `MOSTRAR STATUS DE NAVEGAÇÃO` **não** serão permitidas; mas, nomes como `Mostrar Status de Navegação` ou `Mostrar status de navegação` serão permitidas.
- Adding custom strings to the [Localization Repository](https://github.com/PreMiD/Localization) to later be used within the `multiLanguage` setting is only allowed if the presence has already been released before and has aquired at least 1000 users.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> O código que você escreve **deve** ser _bem escrito_ e **deve** ser _legível_ e todas as strings devem ser gramaticalmente corretas (erros gramaticais no websites podem ser ignorados). 
> 
> {.is-warning}

> Cada presence segue um rigoroso conjunto de regras linting que será verificado durante o processo de revisão. Um par de recomendações pode ser visto abaixo. - [Recomendações de Plugin TypeScript para Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [Recomendações ESlint](https://eslint.org/docs/rules) 
> 
> {.is-info}

Aqui está uma lista de regras que você deve seguir ao escrever seu arquivo `presence.ts`:

- **Sempre** declare uma nova instância da classe `Presence` antes de qualquer outra variável para evitar problemas raros que possam ocorrer; isto não é uma exigência por design, portanto pode ser removido no futuro.
- **Nunca** use funções customizadas quando [variantes nativas estão disponíveis](https://docs.premid.app/dev/presence#files-explained); isso garante que as correções no nível da extensão também se apliquem às suas presences. Você esta livre para usar oque quiser se você não achar ela listada nos docs.
- É **proibido** escrever código de presences para um site sem adicionar suporte para seu idioma principal (p. ex., uma presence YouTube escrita apenas com suporte para Português e Japonês, mas não para inglês em si.)
- Os campos `smallImageKey` e `smallImageText` providenciam contexto adicional/secundário (como `ouvindo/pausado` para sites de video, `navegando` para sites normais, e outros casos) não promova Perfis do Discord ou qualquer coisa não relacionada ao PreMID.
- Você **não** tem permissão para acessar `localStorage`.
- Ao acessar cookies para dados armazenados, por favor prefixe a key com `PMD_`.
- Você só pode fazer solicitações em HTTP/HTTPS para `premid.app` ou para a API do site da presence. Se você estiver usando domínios externos, será necessário explicar por que é necessário.
- **Não** defina os campos no objeto data da presence como undefined após ter sido declarado, em vez disso use o keyword `delete`. (por exemplo, use `delete data.startTimestamp` ao invés de `data.startTimestamp = undefined`)
- Você **não** tem permissão de escrever presences que alteram as funcionalidades de um determinado site. Isso inclui a adição, exclusão ou modificação de elementos DOM.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **Não** escreva seu proprio `tsconfig.json`, use oque estiver sendo providenciado na [documentação](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modificação

> Você **deve** alterar a versão nos **metadados** para ter um valor mais alto em relação à versão anterior ao fazer alterações em **presence.ts**, **iframe.ts** ou **metadata.json**. 
> 
> {.is-warning}

Em algumas situações, presences podem se comportar de formas inesperadas ou podem usar algumas pequenas alterações para melhorar sua funcionalidade. Aqui está uma lista de regras que você **deve** seguir enquanto modifica as presences.

- Você **não** tem permissão de reescrever um presence ou mudar seu autor. Se o autor da presence foi banido do servidor oficial ou não fez as alterações necessárias dentro de um mês, você pode entrar em contato com um revisor para ver se é possível reescrever a presence.
- Se você fizer modificações a um Presence e mudar pelo menos um **quarto** da codebase do Presence, você é permitido a adicionar si mesmo como um contribuidor. Contacte a um verificador para mais informação sobre esse assunto.   - Se você fizer modificações a um Presence e mudar pelo menos um **quarto** da codebase do Presence, você é permitido a adicionar si mesmo como um contribuidor. Contate um verificador para mais informações sobre este assunto.
-  Qualquer um usuário pode sugerir correções para resolver bugs; Portanto, **não** tente fazer mudanças ao código que **não** precisa ser resolvido. As alterações válidas incluem correções gerais como (código e erros de digitação), adições (descrições e tags), arquivos ausentes, etc. **Não** altere imagens se elas não estiverem desatualizadas e estiverem nas espeficicações.

# Verificação

> **Todos os** códigos contribuíram para a loja serão licenciados sob a `Mozilla Public License 2.0`. 
> 
> {.is-info}

> Se precisar entrar em contato com alguém, use nosso servidor oficial do Discord. Todas os revisores terão o cargo `Reviewer` no seus perfis. 
> 
> {.is-info}

> Tenha em mente que os revisores trabalham voluntariamente e gerenciam outros repositórios além deste, seu pull request pode não ser revisado até horas ou mesmo dias após ter sido criado. 
> 
> {.is-warning}

> **Sempre** tem uma bifurcação atualizada antes de criar sua pull request. Isso ajudará a limitar os falsos positivos das verificações. 
> 
> {.is-warning}

O processo mais importante de desenvolvimento da presence é conseguir sua presence na loja. Isso é feito criando um [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) pelo GitHub no repositório `PreMiD/Presences`. Nossos revisores confirmarão que sua presence está de acordo com os padrões e a enviaram para a loja.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Revisores</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrições`

Ofensas repetitivas, tais como quebra de diretrizes, pull requests spam, ameaças ou comportamento inapropriado farão com que você seja proibido de criar presences.

Neste cenário, ocorrerão as seguintes mudanças:

- Presences sob sua gestão serão transferidas para o bot PreMiD ou outro usuário (decisão do revisor). O id da aplicação para cada presence será recriada sob o nome do novo dono.
- Todas suas issues e pull requests (criação de presence, contribuição de presence, etc.) criados após o ban serão prontamente encerrados.
- Tickets criados sob seu nome referentes ao desenvolvimento de presence serão excluídos.


## `Revisando`

Algumas coisas que você deve saber após abrir uma pull request:

- São necessários 2 revisores para implementar uma pull request.
- Se um pull request estiver inativo por um período de 14 dias, ele será fechado.
- Todas as verificações **devem** ser passadas para juntar o pull request.
- ⚠️ Você **deve** fornecer novo, capturas de tela sem alterações (tiradas por você) mostrando uma comparação lado a lado do seu perfil e do site para provar que sua presence funciona. _Você tem permissão para costurar capturas de tela juntos para visualizar para deixar mais fácil._ Isso aplica-se tanto à criação quanto à modificação.
- ⚠️ Também é **necessário** incluir capturas de tela das configurações da presença na extensão, se fornecido. Um exemplo pode ser vito [aqui](https://imgur.com/a/OD3sj5R).

## `Verificações`

![Checks](https://i.imgur.com/BCDZQe9.png)

Atualmente, uma presença deve passar por 2 fases de checagem. Todas essas verificações ajudam os revisores a determinar se sua presence é adequada para a implantação.

- `Codacy` é um bot que verifica a qualidade do código. Se você receber erros por novas issues, é **necessário** corrigi-los.
- `Schema Validation` vai escanear seu arquivo `metadata.json` por qualquer erros (por exemplo, campos ausentes, tipos de valores inválidos, etc.). Se você ver novas issues, também será **necessário** corrigi-los. Adicionar um campo de esquema ao seu arquivo `metadata.json` permitirá que seu editor de texto (se suportado) mostre esses erros durante o desenvolvimento.

## `Notas Adicionais`

- Certifique-se sempre de iniciar sua presença na pasta mais apropriada, se seu nome começa com qualquer letra latina então deve estar sob sua correspondência alfabética ( ex. `D/dアニメストア` ou `G/Google`). Quaisquer outros caracteres Unicode/não latinos **Devem** estar sob a pasta "#" ( ex. `#/巴哈姆特`) e números sob a pasta "0-9" ( ex. `0-9/4anime`).

Após atender a todas as diretrizes e ter sua Presence revisada pelo menos duas vezes, sua Presence será fundida com a loja.

# Contribuições

`A revisão 2` das diretrizes foi escrita e foi contribuída pelas seguintes pessoas:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`A Revisão 1` foi mantida pelos seguintes indivíduos:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
