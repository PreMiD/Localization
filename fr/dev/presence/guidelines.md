---
title: Lignes directrices
description: Rules all presence developers must follow to have their presence added.
published: vrai
date: 2020-06-04T00:45:51.205Z
tags:
---

# Lignes directrices

Lors de la publication des presences sur ce GitHub, nous vous demandons de suivre un ensemble de directives. Pour certains, ces règles strictes peuvent paraître sévères. Cependant, la mise en œuvre de ces règles nous empêchera ainsi que les utilisateurs de faire face à n'importe quel problème.

# Création

Les règles générales de développement de la presence sont les suivantes:

- Les presences **doivent être liées à** au site Web que vous avez choisi.
- Les presences **ne peuvent pas être faites** pour les sites Web illégaux. (par exemple, stresseurs, marketing de drogues, pédopornographie, etc.)
- La structure du fichier doit être propre et gérée, n'incluez pas des fichiers qui ne sont pas spécifiés. (for e.g., vscode and git folders, image and text files, etc.)
- Vous devez avoir une structure de fichier appropriée, les brouillons sont **non autorisés**.
- Presences for websites with (`.onion` TLDs) or websites with free domains/hosts (for e.g., `.TK` [all free Freenom domains], `.RF`, `GD`, etc) are **not** permitted, exceptions can be made if a proof is presented showing that they paid for the domain.
- Presence that target internal browser pages (like Chrome Web Store, `chrome://`, `about:` pages, etc) are **not** allowed as they require an experimental flag to be enabled on the user's end and could potentially cause damage to their browsers.
- Presences with support for only a single subdomain will **not** be permitted, as they may seem broken for other pages (like the homepage), exceptions can be made for the policy and contact pages (content that isn't used often) or sites where the other content is unrelated. (for e.g., wikia pages)
- Low quality presences (or ones with little context) are **not** allowed (for e.g., only showing a logo and text but never changing it again.)
- Including the `dist` folder, `presence.ts` file, `iframe.ts` file, and `metadata.json` file is mandatory so the result would be what is represented in the following schema:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

ou si vous utilisez un fichier `iframe`:

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

## [**metada.json**](https://docs.premid.app/en/dev/presence/metadata)

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. Cette option est entièrement facultative et n'est pas nécessaire pendant le processus de révision.

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Anything not organized to specifications will **not** be permitted.

Each presence has a descriptor file called `metadata.json`, the metadata has a strict standard and an example of this file can be seem below:

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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) and your presence uses the default value for it, do not include it in the `metadata` file. (for e.g., a presence without iframe support would not need the `iframe` field.)

> All images in the `metadata` file must be hosted on `i.imgur.com` or on a CDN that gives you permissions to **change** image files. Le contenu hébergé sur le site web lui-même n'est **pas autorisé** car il peut changer les emplacements de façon non désirée.

Une liste de champs et leurs règles sont listées ci-dessous:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`auteur`**

- La _valeur_ de l'ID **doit** être votre ID snowflake Discord. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Veuillez **ne pas confondre** ceci avec l'ID de votre d'application, qui n'est que pour votre presence._

### **`contributeurs`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`Service`**

- Le nom du service **doit être** le nom du répertoire de presence. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.

### **`description`**

- **Toutes les** presences sont **requises** pour avoir une description anglaise quelle que soit la langue préférée du site web.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`Url`**

- L'url **doit être** une chaîne de caractères si le site n'utilise qu'un seul domaine. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`version`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- La version **doit** toujours commencé à `1.0.0` à moins que l'on vous dise le contraire, les autres versions ne seront **pas** autorisés.

### **`Logo`**

- Le logo **doit** être une image carrée de `1:1` comme aspect de ratio.
- La résolution minimale **requise** est de `512x512` pixels. You can upsize the imagine using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`couleur`**

- La couleur **doit être** une valeur hexadécimale entre `#000000` et `#FFFFFF`.
- La chaîne de couleur **doit** être précédée d'un symbole de hachage.

### **`tags`**

- **Toutes **les presences sont requises pour avoir au moins _un_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- Vous êtes **tenus** d'ajouter un tag `NSFW` si la presence est pour un site Web NSFW.

### **`Catégorie`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Les expressions régulières **doivent** être valides. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`réglages`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored).

Voici une liste de règles que vous devez suivre lors de l'écriture de votre fichier `presence.ts` :

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- Vous n'êtes **pas autorisé** à accéder à `localStorage`.
- Lors de l'accès aux cookies pour les données stockées, veuillez préfixer la clé avec `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig).

## Modifications

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**.

Dans certaines situations, les presences peuvent se comporter de manière inattendue ou peuvent utiliser quelques modifications mineures pour améliorer leurs fonctionnalités. Voici une liste compilée que vous **devez** suivre pour modifier des presences.

- Vous n'êtes **pas** autorisé à réécrire une Presence ou à modifier son auteur. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Les modifications valides le sont, mais ne doivent **pas** être limitées à, des _chemins manquants_, des _typos_, des _images manquantes_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contactez un vérificateur pour plus d'informations sur ce sujet.
- Assurez-vous que les modifications sont utiles. Celles-ci peuvent inclure des corrections (code et typos), des ajouts (descriptions et balises), etc. Ne changez **pas** les images si elles ne sont pas obsolètes et sont dans les spécifications.

# Vérification

> Si vous avez besoin de contacter quelqu'un, veuillez utiliser notre serveur Discord officiel. All verifiers will have the `Presence Verifier` role on their profile.

> **Tout** le code contribué au magasin sera sous la licence `Mozilla Public License 2.0`.

> **Toujours** avoir une branche à jour avant de créer votre pull request. This will help limit false positives from `DeepScan`.

Le processus le plus important de développement de la Presence est d'avoir votre Présence sur le magasin. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Vérificateurs</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `En examen`

Quelques choses que vous devriez savoir après avoir ouvert un pull request :

- Il faut 2 examinateurs pour fusionner un pull request.
- Si un pull request est inactive pendant une période de 7 jours, elle sera rapidement fermée.
- Toutes les vérifications **doivent être passées** pour pouvoir fusionner.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.

## `Vérifications`

![Vérifications](https://i.imgur.com/bk0A1iY.png)

Actuellement, une Presence passe par deux étapes distinctes de vérification. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` est un bot qui vérifie la qualité du code. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). Si jamais vous recevez des erreurs, vous êtes aussi **tenus** de les corriger. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Règles supplémentaires`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

Après avoir respecté toutes les directives et que votre présence ai été examinée au moins deux fois, votre Presence sera fusionnée avec le store.

# Contributions

`Revision 2` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` was maintained by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
