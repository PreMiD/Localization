---
title: Diretrizes
description: Regras que todos os presence developers devem seguir para ter sua presence adicionada.
published: true
date: 2020-07-21T22:22:06.316Z
tags:
editor: markdown
---

# Diretrizes

Publicando Presences a este GitHub, nós requeremos que você siga um conjunto de diretrizes. Para alguns, essas regras estritas podem parecer duras. Entretanto, a implementação desses conjuntos de regras evitará que nós e os usuários nos deparemos com qualquer problema.

# Criação

As regras gerais de desenvolvimento de presences são as seguintes:

- As Presences **devem** estar relacionadas com o website escolhido.
- As Presencses **não devem** ser feitas para websites ilegais. (por exemplo, estressores, comércio de drogas, pornografia infantil, etc.)
- A estrutura do arquivo deve ser limpa e estruturada, não inclua arquivos que não estiverem especificados. (por exemplo, pastas de vscode e git, imagens, arquivos de texto, etc.)
- Você precisa ter uma estrutura de arquivos adequada, rascunhos **não são** permitidos.
- Presences para websites com (domíno de topo `.onion`) ou websites com domínios/hospedagens gratuitas (por exemplo, `.TK` [todos os domínios grátis da Freenom], `.RF`, `.GD`, etc.) **não são** permitidos, exceções poderão ser feitas se houver uma prova mostrando que eles pagarem pelo domínio.
- Presences sobre páginas internas de navegadores (como a Chrome Web Store, `chrome://`, páginas `about:`, etc) **não são** permitidas por requererem uma bandeira experimental a ser ativada no lado do usuário e que poderia potencialmente causar dano aos seus navegadores.
- Presences com suporte apenas para um único subdomínio **não serão** permitidas, visto que elas podem parecer quebradas em outras páginas (como a página principal), exceções podem ser feitas para as páginas de políticas e de contato (conteúdo que não é usado com frequência) ou sites onde o outro conteúdo não é relacionado. (por exemplo, páginas da Wikia)
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

ou, se você estiver usando um arquivo `iframe.ts`:

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

> Para a conveniência de nossos desenvolvedores de Presence, nós providenciamos um esquema que você pode usar para validar a integridade do seu arquivo de `metadata`. Isso é inteiramente opcional e não é necessário durante o processo de revisão. 
> 
> {.is-info}

> É altamente recomendado que você organize seu arquivo de `metadata` no formato mostrado abaixo, e você deve escrever os nomes dos serviços, descrições, tags e campos de configuração gramaticamente corretos. Tudo aquilo que não estiver organizado nessas especificações **não será** permitido. 
> 
> {.is-warning}

> Presenças de sites que têm conteúdo explícito **deve** ter a tag `nsfw`, e a logo/miniatura **não** contém qualquer deste conteúdo. 
> 
> {.is-warning}

Cada presence tem um arquivo descritor chamado de `metadata.json`, os metadados tem um padrão estrito e um exemplo desse arquivo pode ser encontrado abaixo:

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

> Todas as imagens no arquivo de `metadata` devem estar hospedadas no `i.imgur.com` ou em um CDN que lhê dê permissões para **mudar** arquivos de imagens. Conteúdo hospedado no site em si **não é** permitido visto que ele pode mudar de posição de forma indesejada. 
> 
> {.is-warning}

Uma lista de campos e de suas respectivas regras está listada abaixo:

### **`$schema`**

- O schema _key_ **deve** incluir um sinal de dólar no início do mesmo, isto irá sinalizar ao seu editor de texto que você quer validar o seu arquivo JSON contra um modelo. _Como foi dito anteriormente, não é necessário incluir um schema, mas se o incluir, deve levar isto em conta._

### **`author`**

- O _valor_ ID **deve** ser o seu Discord snowflake ID. Você pode obtê-lo ativando o [modo desenvolvedor](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Por favor, **não** confunda isto com o seu application ID, que é apenas para a sua presence._

### **`contributors`**

- Do **not** adicione-se como colaborador e não adicione outra pessoa como colaborador, a menos que tenha ajudado na presença.

### **`service`**

- O nome do serviço **deve** ser o nome do diretório da presence. Por exemplo, se a presence estiver localizada em `/websites/Y/YouTube/`, o nome do serviço deve ser `YouTube`.
- Você **não** pode usar esse url como o nome de serviço, a não ser que o website use o url como seu nome oficial. If the name is not descriptive and can be considered vague, using the url is **required**. (Por exemplo, `YouTube` é permitido  por que esse é o nome oficial e é descritivo, enquanto `youtube.com` não é. `Top` é um nome não descritivo, então use a url `top.gg` is **required**.)

### **`altnames`**

- **Só** use isso em cenários onde um site tem vários nomes oficiais (ex. Pokémon e 포켓몬스터) ir para ficar mais fácil de procurar a presence sem usar caracteres especiais (ex. Pokémon e Pokemon). *Shortened* versões em serviço, nomes vão embaixo `tags`.

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

- A cor ** deve ** ser um valor hexadecimal entre `#000000` e `#FFFFFF`.
- A string de cor **deve** ser precedida com um símbolo hash.

### **`tags`**

- **Todas** presences precisam ter pelo menos _uma_ tag.
- Tags **não** devem incluir nenhum espaço, barra, aspas, caracteres Unicodes, e devem sempre ser com letras minúsculas.
- Tags **devem**, de preferência, incluir nomes de serviço alternativos para tornar a busca mais fácil (por exemplo, se uma presença da Amazon incluir o suporte para AWS, ele teria tags como `amazon-web services` e `aws`).
- É **necessário** incluir a tag `NSFW` se a presença for para um site NSFW.

### **`category`**

- A categoria **deve ser** uma das seguintes listadas na [documentação](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- A presença deve utilizar uma categoria que corresponda ao conteúdo do site. (por exemplo, não utilize `anime` quando o site não é de anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Expressões regulares **precisam** ser validas. Por favor teste suas expressões com ferramentas listadas na [documentação](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`configurações`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored). 
> 
> {.is-warning}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You may only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary.
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modificação

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.
- Certifique-se de que as modificações são úteis. These may include fixes (code and typos), additions (descriptions and tags), etc. Do **not** change images if they are not outdated and are in specifications.

# Verificação

> Se precisar entrar em contato com alguém, use nosso servidor oficial do Discord. Todas as verificações terão a função `Verificar presença` no seu perfil. 
> 
> {.is-info}

> **Todos os** códigos contribuíram para a loja serão licenciados sob a `Mozilla Public License 2.0`. 
> 
> {.is-info}

> **Sempre** tem uma bifurcação atualizada antes de criar sua pull request. Isso ajudará a limitar falsos positivos de `DeepScan`. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verifiers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Revisando`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure._ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Verificações`

![Verificações](https://i.imgur.com/bk0A1iY.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

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
