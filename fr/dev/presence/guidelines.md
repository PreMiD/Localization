---
title: Règlement de Presence
description: Règles que tous les développeurs de Presence doivent suivre pour avoir leur Presence ajoutée.
published: true
date: 2021-02-24T22:23:11.142Z
tags:
editor: markdown
dateCreated: 2021-02-23T07:57:42.414Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Règlement de Presence</h3>
    <h4 style="margin-top: 0">Révision 3</h4>
    <br />
</div>

# Instructions

When publishing Presences to the [Presences repository](https://github.com/PreMiD/Presences/), we require you to follow a set of guidelines. Pour certains, ces règles strictes peuvent paraître sévères. Cependant, la mise en œuvre de ces règles nous empêchera et empêchera les utilisateurs de faire face à des problèmes.

# Création

Les règles générales de développement de presence sont les suivantes:

- Les presences **doivent** être liées au site web que vous avez choisi.
- Les presences **ne peuvent pas** être faites pour des sites web illégaux. (par exemple, stresseurs, ventes de drogues, pédopornographie, etc.)
- La structure de fichier doit être propre et gérée, n'incluez pas des fichiers n'ayant pas de rapport. (par exemple, les dossiers vscode, git, images, fichiers texte, etc.)
- Vous devez avoir une structure de fichier appropriée, les brouillons ne sont **pas** autorisés.
- Les presences pour des sites web avec ( `.onion` TLDs) ou des sites web avec domaines/hébergeurs gratuits (par exemple, `.TK`, [tous les domaines libres de Freenom], `.RF` `GD`, etc) **ne sont pas** autorisés, des exceptions peuvent être faites si une preuve est présentée montrant qu'ils ont payé pour le domaine.
- Le domaine de la Presence doit avoir au moins 2 mois.
- Les presences qui ciblent les pages internes du navigateur (comme Chrome Web Store, les pages `chrome://`, `about:`, etc) **ne sont pas** autorisés car elles nécessitent un drapeau expérimental à activer du côté de l'utilisateur et peuvent potentiellement causer des dommages à leurs navigateurs.
- Les presences prenant en charge seulement une page **ne seront pas** autorisées, car elles pourraient sembler cassées pour d'autres pages (comme la page d'accueil), des exceptions peuvent être faites pour les pages de politique de confidentialité et de contact (contenu qui n'est pas souvent utilisé) ou alors sites où l'autre contenu n'est pas lié. (par exemple, les pages wikia)
- Presences for online radios are only allowed if the radio has at least 100 weekly listeners and 15 concurrent and must have some features other than just showing album/song title, etc.
- Les presences de faible qualité (ou celles n'ayant qu'un seul contexte) **ne sont pas autorisées** (par exemple : Afficher uniquement un logo et du texte et ne plus jamais les changer.)
- Avec la mise à jour des `boutons`, nous demandons de suivre certaines directives:
  - Les redirections vers la page d'accueil sont interdites.
  - La promotion de sites internet est interdite.
  - Ils ne peuvent pas afficher des données additionnelles quand vous ne pouvez pas les afficher dans le `state` ou dans `details`.
- Inclure le dossier `dist`, les fichiers `presence.ts`, `iframe.ts` et `metadata.json` sont obligatoire afin que le résultat corrésponde à ce qui est représenté dans le schéma suivant :

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

ou si vous utilisez un fichier `iframe.ts`:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Pour la commodité de nos développeurs de presence, nous avons fourni un schéma que vous pouvez utiliser pour valider l'intégrité de votre fichier `metadata`. Cette option est entièrement facultative et n'est pas nécessaire pendant le processus de révision.

> Il est fortement recommandé d'organiser votre fichier `metadata` dans le format indiqué ci-dessous, et vous devez avoir des noms de service grammaticalement corrects, descriptions, balises et champs de paramètres. Tout ce qui n'est pas organisé selon les spécifications **ne sera pas autorisé**.

> Les presences de sites web ayant du contenu explicite **doit** avoir le tag `nsfw`, et le logo/vignette **ne doit pas** contenir ce genre de contenu.

Chaque presence a un fichier de description appelé `metadata.json`, les métadonnées ont un standard strict et un exemple de ce fichier est disponible ci-dessous:

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

> Si un champ est listé comme facultatif sur la [documentation](https://docs.premid.app/en/dev/presence/metadata) ou qu'il y a un `"` après la clé, et que votre presence utilise la valeur par défaut pour celui-ci, ne l'incluez pas dans le fichier `metadata`. (par exemple, une presence sans le support iframe n'aurait pas besoin du champ `iframe`.)

> Toutes les images dans le fichier `metadata` doivent être hébergées sur `i.imgur.com`. Utiliser du contenu hébergé sur le site web lui-même n'est **pas**autorisé car il est possible que les chemins changent.

Une liste de champs et leurs règles sont listées ci-dessous:

### **`$schema`**

- La _clé_ de schéma **doit** inclure un signe dollar au début de celui-ci, cela signalera à votre éditeur de texte que vous voulez valider votre fichier JSON par rapport à un modèle. _Comme indiqué précédemment, vous n'avez pas besoin d'inclure un schéma, mais si vous l'incluez, vous devez en tenir compte._

### **`auteur`**

- La _valeur_ de l'ID **doit** être votre ID snowflake Discord. Vous pouvez l'obtenir en activant le [mode développeur](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Veuillez **ne pas confondre** ceci avec l'ID de votre d'application, qui n'est que pour votre presence._

### **`*contributors`**

- **Ne vous ajoutez pas** en tant que contributeur, et n'ajoutez personne en tant que contributeur à moins qu'il ait aidé au développement de la presence.

### **`Service`**

- Le nom du service **doit être** le nom du répertoire de presence. Par exemple, si la presence est située à `/websites/Y/YouTube/`, le nom du service doit être `YouTube`.
- Vous **ne pouvez pas** utiliser l'url comme nom de service à moins que le site utilise l'url comme nom officiel. Si le nom n'est pas descriptif et peut être considéré comme vague, l'utilisation de l'url est **obligatoire**. (par exemple, `YouTube` est autorisé car c'est le nom officiel et est descriptif, alors que `youtube.com` ne l'est pas. `Top` est un nom non descriptif, donc l'utilisation de l'url `top.gg` est **requise**.)
- Si le service a des règles de marques explicites pour leur nom, vous devriez les suivre.

### **`*altnames`**

- Utilisez **seulement** ceci dans les scénarios où un site Web comporte plusieurs noms officiels (par ex. Pokémon et 포켓몬스터). Les *abréviations* du nom du service vont dans `tags`.

### **`description`**

- **Toutes** les presences **doivent** avoir une description anglaise quelle que soit la langue préférée du site web.
- N'essayez pas de traduire la description vous-même **** à moins que vous ne connaissiez cette langue, les traducteurs modifieront votre `metadata.json` et modifieront les descriptions si nécessaire.

### **`Url`**

- L'url **doit être** une chaîne de caractères si le site n'utilise qu'un seul domaine. Si le site Web en utilise plusieurs, faites un tableau et spécifiez chacune des chaînes de caractères.
- **N'incluez pas** les protocoles dans l'url (par exemple, `http` or `https` ), et ne pas inclure les paramètres de la requête dans l'url (par exemple, `www.google.com/search?gws_rd=ssl` qui devrait être `www.google.com/`)

### **`version`**

- Toujours s'assurer que le numéro de version suit [les normes de version](https://semver.org), se traduisant par le schéma suivant : `<NOUVELLE FONCTIONNALITÉ>.<ÉNORME-CORRECTION DE BUGS>.<PETITE CORRECTION DE BUGS OU CHANGEMENT DES MÉTADONNÉES>`. Toute autre chose comme `1.0.0.1`, `1.0`, `1`, `1.0. -BETA` ou changer `1.0.0` à `2.0.` sur une correction de bug/ petit changement **n'est pas** autorisé.
- La version **doit** toujours commencé à `1.0.0` à moins que l'on vous dise le contraire, les autres versions ne seront **pas** autorisés.

### **`Logo`**

- Le logo **doit** être une image carrée de `1:1` comme aspect de ratio.
- La résolution minimale **requise** est de `512x512` pixels. Vous pouvez agrandir l'image en utilisant un outil comme [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- La vignette **devrait** préférablement être une [ large carte promotionnelle](https://i.imgur.com/3QfIc5v.jpg) ou une [capture d'écran](https://i.imgur.com/OAcBmwW.png) si la première option **n'est pas **disponible.

### **`couleur`**

- La couleur **doit être** une valeur hexadécimale entre `#000000` et `#FFFFFF`.
- La chaîne de couleur **doit** être précédée d'un symbole de hachage.

### **`tags`**

- **Toutes **les presences sont requises pour avoir au moins _un_ tag.
- Les tags **ne doivent pas** inclure d'espaces, de slashs, de guillemets, de caractères uni-codes et doivent toujours être en minuscule.
- Les tags **devraient** de préférence inclure des noms de service alternatifs pour faciliter la recherche (par exemple, si une presence Amazon a inclus le support AWS, il aurait ses balises comme `amazon-web-services` et `aws`)
- Vous êtes **tenus** d'ajouter un tag `NSFW` si la presence est pour un site Web NSFW.

### **`catégorie`**

- La catégorie **doit** être l'une des catégories suivantes listées sur la [documentation](/dev/presence/metadata#presence-categories).
- La présence doit être dans une catégorie qui correspond au contenu du site web. (par exemple, n'utilisez pas `anime` lorsque le site n'est pas lié aux animes).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Les expressions régulières **doivent** être valides. Veuillez tester vos expressions avec les outils listés sur la [documentation](/dev/presence/metadata#testing).

### **`readLogs`**

- Doit être une valeur `booléenne` (par exemple: `true` ou `false`).
- Active les logs de votre presence.

### **`attention`**

- Active l'icône warning pour notifier l'utilisateur que cette Presence nécéssite plus d'étapes que le simple ajout de cette présence.
- Un exemple de Presence utilisant cette variable de métadonnées est `VLC`.

### **`réglages`**

- Si vous décidez de faire un imprimer formaté (par exemple : `%song% par %artist%`), les variables doivent être encerclé d'un "%" de part et d'autre. Les variables comme `%var`, `var%` ou `%%var%%` ne sont **pas** autorisé dans l'intérêt de respecter la standardisation.
- Le nom des paramètres ne doit **pas** être en lettres capitales. Par exemple, les nom comme `AFFICHER LE STATUT DE NAVIGATION` ne seront **pas** autorisé; en revanche, les nom tel que `Afficher le Statut de Navigation` ou `Afficher le statut de navigation` sont autorisé.
- Si vous utilisez l'option multiLanguage, vous devez savoir que:
  - Une valeur de type **booléenne** n'activera que les chaînes de caractères de [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) du dépôt de traduction ou du fichier de la Presence (par exemple: si la nom de la présence est YouTube, l'extension prendra les chaînes de caractères du fichier `youtube.json`.)
  - Une valeur de type **String** (par exemple `youtube.json`) spécifiera le nom du fichier dont vous voulez obtenir les chaînes de caractères.
  - Une valeur de type **Array<String>** (par exemple `["youtube.json", "vlive.json"]`) spécifiera le nom des fichiers dont vous voulez obtenir les chaînes de caractères.

## [**presence.ts**](/dev/presence/class)

> Le code que vous écrivez **doit** être _bien écrit_ et **doit** être _lisible_ et toutes les chaînes doivent être grammaticalement correctes (les erreurs de grammaire sur les sites Web peuvent être ignorées).

> Chaque presence suit un ensemble de règles strictes qui seront vérifiées pendant le processus de vérification. Quelques recommandations peuvent être consultées ci-dessous. - [Recommandations relatives au plugin TypeScript pour la vérification stricte des types](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [Recommandations ESlint](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Voici une liste de règles que vous devez suivre lors de l'écriture de votre fichier `presence.ts` :

- **Toujours** déclarer une nouvelle instance de la classe `Presence` avant toute autre variable afin d'éviter des problèmes rares qui peuvent survenir; ce n'est pas une exigence de conception, il est donc possible qu'elle soit supprimée dans le futur.
- **Ne jamais** utiliser des fonctions personnalisées lorsque [des variantes natives sont disponibles](https://docs.premid.app/dev/presence#files-explained); cela permet de s'assurer que les corrections au niveau de l'extension s'appliquent également à vos presences. Vous êtes libre d'utiliser ce dont vous avez besoin si vous ne les trouvez pas listés dans la documentation.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](/dev/presence/tsconfig).

## Modification

> Vous **devez** changer la version dans la **métadonnée** pour que celle-ci soit une valeur plus élevée que la version précédente lorsque vous effectuez des modifications soit à **presence.ts**/**presence.js** ou **metadata.json**.

Dans certaines situations, les presences peuvent se comporter de manière inattendue ou peuvent utiliser quelques modifications mineures pour améliorer leurs fonctionnalités. Voici une liste compilée que vous **devez** suivre pour modifier des presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Verification

> **Tout** le code contribué au magasin sera sous la licence `Mozilla Public License 2.0`.

> Si vous avez besoin de contacter quelqu'un, veuillez utiliser notre serveur Discord officiel. Tous les évaluateurs auront le rôle `Reviewer` sur leur profil.

> Veuillez garder à l'esprit que les évaluateurs travaillent volontairement et gèrent d'autres repositories en plus de celui-ci, votre pull request peut ne pas être révisée avant des heures ou même des jours après sa création.

> **Toujours** avoir une branche à jour avant de créer votre pull request. Cela permettra de limiter les faux positifs lors des contrôles.

Le processus le plus important dans développement d'une Presence est d'avoir votre Présence sur le magasin. Ceci est fait en faisant un [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) sur sur le repository GitHub `PreMiD/Presences`. Nos évaluateurs confirmeront que votre presence est conforme aux normes et celle-ci sera ajouté au magasin.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Les infractions répétitives telles que le non-respect des directives, le spam de pull requests, les menaces ou les comportements inappropriés vous feront interdire de créer des presences.

Dans ce scénario, les changements suivants se produiront :

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Reviewing`

Quelques choses que vous devriez savoir après avoir ouvert un pull request :

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Vérifications`

![Vérifications](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. Toutes ces vérifications aident les évaluateurs à déterminer si votre presence est apte au déploiement.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

Après avoir respecté toutes les directives et que votre présence ai été examinée au moins deux fois, votre Presence sera fusionnée avec le store.

# Suggestions
If you have some suggestions about our guidelines, you should contact us @ [PreMiD's discord server](https://discord.premid.app) and we will check them!

# Contributions

`Revision 3` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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