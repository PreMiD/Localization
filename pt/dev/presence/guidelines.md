---
title: Diretrizes das presences
description: Regras que todos os programadores de presences devem seguir para que a sua presence seja adicionada.
published: true
date: 2021-03-06T15:01:04.274Z
tags:
editor: markdown
dateCreated: 2021-02-26T21:54:41.573Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Diretrizes das presences</h3>
    <h4 style="margin-top: 0">Revisão 3</h4>
    <br />
</div>

# Diretrizes

Ao publicar Presences no [Repositório de Presences](https://github.com/PreMiD/Presences/), és obrigado a seguir um conjunto de diretrizes. Para alguns, estas regras rígidas podem parecer duras. No entanto, a implementação destas regras impedir-nos-á a nós e aos utilizadores de se decompormos com quaisquer problemas.

# Criação

As regras gerais de desenvolvimento da presence são as seguintes:

- Presences **deve** estar relacionado com o site de eleição.
- Presences **não** podem ser feitas para sites ilegais. (por exemplo, estresse, tráfico de drogas, pornografia infantil, etc.)
- A estrutura do ficheiro deve ser limpa e gerenciada, não inclui ficheiros que não são especificados. (por exemplo, vscode e pastas git, imagens e ficheiros de texto, etc.)
- Você precisa ter uma estrutura de ficheiros correta, rascunhos **não são** permitidos.
- Presences para sites com (`.onion` TLDs) ou sites com domínios/hosts gratuitos (por exemplo, `.TK` [todos os domínios Freenom gratuitos], `.RF`, `GD`, etc) **não** são permitidos, Podem ser feitas excepções se for apresentada uma prova que demonstre que pagaram o domínio.
- O domínio da presença deve ter pelo menos 2 meses de idade.
- Presence que segmenta as páginas internas do navegador (como Chrome Web Store, `chrome://`, `sobre:` páginas, etc.) **não é** permitido, uma vez que exigem que uma flag experimental seja ativada no final do usuário e possa potencialmente causar danos aos seus navegadores.
- Presences com suporte para apenas um único subdomínio **não** serão permitidas, pois elas poderão parecer quebradas em outras páginas (como a página principal). Algumas exceções podem ser feitas para as páginas de Política e de Contacto (conteúdo que não é habitual ser usado) ou sites em que o conteúdo não está relacionado. (por exemplo, páginas de wiki)
- Presences para rádios online apenas são permitidas se a rádio tiver pelo menos 100 ouvintes por semana e 15 em simultâneo.
- Presences de baixa qualidade (ou com pouco contexto) **não** são permitidas (por exemplo, mostrar apenas uma logo e um texto, mas nunca os mudar denovo.)
- With the `buttons` release, we require some guidelines for them:
  - Redirects to main page are prohibited.
  - Promoting websites by them is prohibited.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Incluir a pasta `dist`, o ficheiro `presence.ts`, o ficheiro `iframe.ts`, e o ficheiro `metadata.json` é obrigatório, por isso, o resultado deverá ser o que é representado pelo seguinte esquema:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

ou se você estiver usando um ficheiro `iframe.ts:`

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. This is entirely optional and is not required during the review process.

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Anything not organized to specifications will **not** be permitted.

> Presences of websites that have explicit content **must** have the `nsfw` tag, and the logo/thumbnail must **not** contain any of this content.

Cada presence tem um ficheiro de descriptor chamado `metadata.json`, a metadata têm um padrão rigoroso e um exemplo deste ficheiro pode aparecer abaixo:

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
      "id": "multiLanguage",
      "multiLanguage": true
    }
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) or there is a `*` next to the key, and your presence uses the default value for it, do not include it in the `metadata` file. (for e.g., a presence without iframe support would not need the `iframe` field.)

> All images in the `metadata` file must be hosted on `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly.

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`*contributors`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. If the name is not descriptive and can be considered vague, using the url is **required**. (for e.g., `YouTube` is permitted because that is the official name and is descriptive, while `youtube.com` is not. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- **Only** use this in scenarios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터). _Shortened_ versions of service names go under `tags`.

### **`description`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`version`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. You can upsize it using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tags`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](/dev/presence/metadata#presence-categories).
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Regular expressions **must** be valid. Please test your expressions with the tools listed on the [documentation](/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`aviso`**

- Enables warning icon for prompting user that this presence needs more steps than only adding presence.
- Example of presence using this metadata variable is `VLC`.

### **`settings`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of the settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- If you are using the `multiLanguage` option it can have the following types:
  - **Boolean** type which will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from the Localization repo or from the presence file (e.g. when the name of the presence is YouTube, the extension will get strings from `youtube.json` too.)
  - **String** type (e.g. `youtube`) which will specify the name of the files that you want to get strings from.
  - **Array<String>** type (e.g. `["youtube", "discord"]`) which will specify the name of the files that you want to get strings from.

## [**presence.ts**](/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored).

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presenceData object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> **Não** escreva seu próprio ficheiro `tsconfig.json`, use quando deve ser providenciado na [documentação](https://docs.premid.app/pt/dev/presence/tsconfig).

## Modificação

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**.

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Modificação

> **Todos os** códigos contribuíram para a loja serão licenciados sob a `Mozilla Public License 2.0`.

> If you need to contact someone, please use our official Discord server. All reviewers will have the `Reviewer` role on their profile.

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created.

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from the checks.

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Revisores de Presences</h2>
  
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/StrikerFRFX"><img src="https://github.com/StrikerFRFX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrições`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- O `Codacy`é um bot que verifica a qualidade do código. Se você receber erros para novas issues, é **necessário** para corrigi-los.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Verificações`

Algumas coisas que você deve saber após abrir uma pull request:

- São necessários 2 revisores para fazer o merge de um pull request.
- Se um pull request estiver inativo por um período de 7 dias, ele será rapidamente fechado.
- Todas as verificações **devem ser** passadas para merge.
- ⚠ Você **deve** fornecer novas, capturas de tela sem alterações (tiradas por você) mostrando uma comparação lado a lado do seu perfil e do site para provar que sua presence funciona. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠ Você também é **necessário** para incluir capturas de tela das definições de presence na extensão, se fornecido. Um exemplo pode ser visto [aqui](https://imgur.com/a/OD3sj5R).

## `Regras Adicionais`

![Verificações](https://i.imgur.com/oqAakOc.png)

Actualmente, uma presence atravessa 2 fases distintas de controlos. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- O `Codacy`é um bot que verifica a qualidade do código. Se você receber erros para novas issues, é **necessário** para corrigi-los. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` é um bot que verifica a qualidade do código. Se você receber erros para novas issues, é **necessário** para corrigi-los.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Regras Adicionais`

- **Sempre** certifique-se de iniciar sua presence na pasta mais apropriada, se seu nome começa com _qualquer_ letra latina, então ela deve estar abaixo da correspondência alfabética (para e. Exemplo: `D/dアニメストア` ou `G/Google`). Quaisquer outros caracteres Unicode/não-Latinos **deve** estar abaixo da pasta `#` (por exemplo, `#/巴哈姆特`) e números abaixo da pasta `0-9` (por exemplo, `0-9/4anime`).

Depois de conhecer todas as diretrizes com as análises e verificações adequadas, sua presence estará na loja.

# Verificação
`A revisão 2` das diretrizes foi escrita e foi contribuída pelas seguintes pessoas:

# Contribuições

`A revisão 1` foi mantida pelos seguintes indivíduos:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`A revisão 2` das diretrizes foi escrita e foi contribuída pelas seguintes pessoas:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`A revisão 1` foi mantida pelos seguintes indivíduos:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>