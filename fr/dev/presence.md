---
title: Développement de la presence
description:
published: vrai
date: 2020-05-09T14:55:04.832Z
tags:
---

> Toutes les presences sont maintenant stockées ici : https://github.com/PreMiD/Presences 
> 
> {.is-info}

La version `2.x` introduit le [magasin de presence](https://premid.app/store). Les utilisateurs ont maintenant la possibilité d'ajouter et de supprimer manuellement leurs presences favorites via l'interface utilisateur du [site web](https://premid.app/).

# Lignes directrices

Lors de la publication des presences sur ce GitHub, nous vous demandons de suivre un ensemble de directives. Pour certains, ces règles strictes peuvent paraître sévères. Cependant, la mise en œuvre de ces règles nous empêchera ainsi que les utilisateurs de faire face à n'importe quel problème.

## Création

Les règles générales de développement de la presence sont les suivantes:

- Les presences **doivent être liées à** au site Web que vous avez choisi.
- Les presences **ne peuvent pas être faites** pour les sites Web illégaux. ( par exemple, stresseurs, marketing de drogues, pédopornographie, etc. )
- La structure du fichier doit être propre et gérée, n'incluez pas des fichiers qui ne sont pas spécifiés. ( par exemple, les dossiers vscode et git, images et fichiers texte, etc. )
- Vous devez avoir une structure de fichier appropriée, les brouillons sont **non autorisés**.
- Les presences pour des sites webs avec ( `.onion` en fin d'url) ou des sites webs avec des domaines/hôtes gratuits (par exemple, `.TK`, [tous les domaines libres de Freenom], `.RF` `. D`, etc) ne sont **PAS** autorisés, des exceptions peuvent être faites si une preuve est présentée montrant qu'ils ont payé pour le domaine.
- Les presences qui ciblent les pages internes du navigateur (comme Chrome Web Store, `chrome://`, `about:` pages, etc) ne sont **pas** autorisés car ils nécessitent un drapeau expérimental pour être activés à la fin de l'utilisateur et peuvent potentiellement causer des dommages à leurs navigateurs.
- Les presences avec prise en charge pour seulement une seule page **ne seront pas autorisées** , car ils pourraient sembler cassés pour d'autres pages (comme la page d'accueil ), des exceptions peuvent être faites pour les pages de politique de confidentialité et de contact ( contenu qui n'est pas souvent utilisé ) ou les sites où l'autre contenu n'est pas lié. (par exemple, les pages wikia )
- Les presences de faible qualité (ou celles n'ayant qu'un seul contexte) ne sont **pas** autorisées (par ex : Afficher uniquement le logo et du texte et ne plus jamais les changer. )
- Inclure le dossier `dist` , le fichier `presence.ts` , `fichier iframe.ts` et `metadata.json` est obligatoire afin que le résultat soit ce qui est représenté dans le schéma suivant :

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

> Pour la commodité de nos développeurs de presence, nous avons fourni un schéma que vous pouvez utiliser pour valider l'intégrité de votre fichier `metadata`. Cette option est entièrement facultative et n'est pas nécessaire pendant le processus de révision.

> Il est fortement recommandé d'organiser votre fichier `metadata` dans le format indiqué ci-dessous, et vous devez avoir des noms de service grammaticalement corrects, descriptions, balises et champs de paramètres. Tout ce qui n'est pas organisé selon les spécifications ne sera **pas autorisé**. 
> 
> {.is-warning}

Chaque presence a un fichier de description appelé `metadata.json`, les métadonnées ont un standard strict et un exemple de ce fichier peut paraître ci-dessous:

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

> Si un champ est listé comme facultatif sur la documentation [](https://docs.premid.app/en/dev/presence/metadata) et que votre presence utilise la valeur par défaut pour celle-ci, ne l'incluez pas dans le fichier `metadata`. (par exemple, une presence sans le support iframe n'aurait pas besoin du champ `iframe`. ) 
> 
> {.is-warning}

> Toutes les images dans le fichier `metadata` doivent être hébergées sur `i.imgur. om` ou sur un CDN qui vous donne les permissions de **modifier** les fichiers d'images. Le contenu hébergé sur le site web lui-même n'est **pas autorisé** car il peut changer les emplacements de façon non désirée. 
> 
> {.is-warning}

Une liste de champs et leurs règles sont listées ci-dessous:

### **`$schema`**

- Le schéma _clé_ **doit** inclure un signe dollar au début de celui-ci, cela signalera à votre éditeur de texte que vous voulez valider votre fichier JSON par rapport à un modèle. _Comme indiqué précédemment, vous n'avez pas besoin d'inclure un schéma, mais si vous l'incluez, vous devez en tenir compte._

### **`auteur`**

- La _valeur_ de l'ID **doit** être votre ID snowflake Discord. Vous pouvez l'obtenir en activant le mode développeur [](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Veuillez **ne pas confondre** ceci avec l'ID de votre d'application, qui n'est que pour votre presence._

### **`contributeurs`**

- **Ne vous ajoutez pas** en tant que contributeur, et n'ajoutez pas quelqu'un d'autre en tant que contributeur à moins qu'il ait aidé à la presence.

### **`Service`**

- Le nom du service **doit être** le nom du répertoire de presence. Par exemple, si la presence est située à `/websites/Y/YouTube/`, le nom du service doit être `YouTube`.

### **`description`**

- **Toutes les** presences sont **requises** pour avoir une description anglaise quelle que soit la langue préférée du site web.
- N'essayez pas de traduire la description vous-même **** à moins que vous ne connaissiez cette langue, les traducteurs modifieront votre `metadata.json` et modifieront les descriptions si nécessaire.

### **`Url`**

- L'url **doit être** une chaîne de caractères si le site n'utilise qu'un seul domaine. Si le site Web en utilise plusieurs, faites un tableau et spécifiez chacune des chaînes de caractères.
- **N'incluez pas** les protocoles dans l'url (exemple, `http` or `https` ), et ne pas inclure les paramètres de la requête dans l'url ( par exemple, `www.google.com/search?gws_rd=ssl` qui devrait être `www.google.com/`)

### **`version`**

- Toujours s'assurer que le numéro de version suit [les normes de version](https://semver.org), se traduisant par le schéma suivant : `<NOUVELLE FONCTIONNALITÉ>.<ÉNORME-CORRECTION DE BUGS>.<PETITE CORRECTION DE BUGS OU CHANGEMENT DES MÉTADONNÉES>`. Autre chose comme `1.0.0.1`, `1.0`, `1`, `1.0. -BETA` ou changement de `1.0.0` à `2.0.` sur une correction de bug/petit changement n'est **pas** autorisé.
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
- Les tags ne **doivent pas** inclure d'espaces, de slashs, de guillemets, de caractères uni-codes et doivent toujours être en minuscule.
- Les tags **devraient** de préférence inclure des noms de service alternatifs pour faciliter la recherche (par exemple, si une presence Amazon a inclus le support AWS, il aurait ses balises comme `amazon-web-services` et `aws`)
- Vous êtes **tenus** d'ajouter un tag `NSFW` si la presence est pour un site Web NSFW.

### **`Catégorie`**

- La catégorie **doit** être l'une des catégories suivantes listées sur la documentation [](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Les expressions régulières **doivent** être valides. Veuillez tester vos expressions avec les outils listés sur la documentation [](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`réglages`**

- Si vous décidez de créer une chaîne de format (par exemple, `%song% par %artist%` ), vous devez avoir les variables entourées d'un signe pour cent de chaque côté. Les variables tels que `%var`, `var%`ou `%%var%%` et tout ce qui se situe entre les deux **n'est pas autorisé** dans un but de normalisation.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Le code que vous écrivez **doit** être _bien écrit_ et **doit** être _lisible_ et toutes les chaînes doivent être grammaticalement correctes (les erreurs de grammaire sur les sites Web peuvent être ignorées). 
> 
> {.is-warning}

Voici une liste de règles que vous devez suivre lors de l'écriture de votre fichier `presence.ts` :

- **Toujours** déclarer une nouvelle instance de la classe `Presence` avant toute autre variable pour éviter des problèmes rares qui peuvent survenir ; ce n'est pas une exigence par conception, donc cela pourrait être supprimé dans le futur.
- **Ne jamais** utiliser des fonctions personnalisées lorsque [des variantes natives sont disponibles](https://docs.premid.app/dev/presence#files-explained); cela permet de s'assurer que les corrections au niveau de l'extension s'appliquent également à vos presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language ( for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself. )
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context ( such as `playing/paused` for video sites, `browsing` for regular sites, and other cases ) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- Making requests to external domains is **not** allowed unless you can specify why you are needing to do so.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **N'écrivez pas** votre propre fichier `tsconfig.json`, utilisez ce qui a été fourni dans la [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

## Modifications

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.
- Assurez-vous que les modifications sont utiles. These may include fixes ( code and typos ), additions ( descriptions and tags ), etc. Do **not** change images if they are not outdated and are in specifications.

# Vérification

> Si vous avez besoin de contacter quelqu'un, veuillez utiliser notre serveur Discord officiel. All verifiers will have the `Presence Verifier` role on their profile.

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`.

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from `DeepScan`. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

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

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots ( taken by you ) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.

## `Vérifications`

![Vérifications](https://i.imgur.com/bk0A1iY.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors ( for e.g., missing fields, invalid value types, etc. ). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor ( if supported ) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match ( for e.g., `D/dアニメストア` or `G/Google` ). Any other Unicode/non-Latin characters **must** be under the `#` folder ( for e.g., `#/巴哈姆特` ) and numbers under the `0-9` folder ( for e.g., `0-9/4anime` ).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

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

# Structure
Toutes les présences sont codées en [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) a quelques définitions de types supplémentaires épicés, donc la correction et l'identification des bugs est beaucoup plus facile.

## Installation
1. Install [Git](https://git-scm.com/).
2. Installez [Node](https://nodejs.org/en/) (livré avec [npm](https://www.npmjs.com/)).
3. Installez [TypeScript](https://www.typescriptlang.org/index.html#download-links) (ouvrez un terminal et `npm installez -g typescript`).

## Dupliquer le projet
1. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Presences`.
2. Choisissez un fichier de votre choix.
3. Ouvrez-le dans votre éditeur de code.

## Création de dossiers et de fichiers

1. Créez un dossier avec le **name** (pas une URL) du service que vous voulez supporter.
2. Créez un fichier `presence.ts` et un fichier `tsconfig.json` à l'intérieur.
3. Créer un dossier nommé `dist` à l'intérieur.
4. Créer un fichier `metadata.json` dans le dossier `dist`.

## Remplir le fichier tsconfig.json
Veuillez mettre le code suivant dans le fichier `tsconfig.json`.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Pour en savoir plus sur la configuration de TypeScript, cliquez [ici](/dev/presence/tsconfig).

## Remplir le fichier metadata.json
Nous avons créé un fichier `metadata.json` pour les paresseux [ici](https://eggsy.codes/projects/premid/mdcreator). Il est toujours suggéré de lire ceci afin que vous sachiez comment cela fonctionne.

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

Veuillez copier le code ci-dessus et le mettre dans votre fichier `metadata.json`. Vous devez maintenant modifier les valeurs des propriétés. Veuillez noter que les propriétés suivantes sont optionnelles à avoir dans vos métadonnées `. son` fichier, si vous ne prévoyez pas de les utiliser, vous devez les supprimer.
- `contributeurs`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `réglages`

**Clarification de certaines valeurs prédéfinies :**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optionnel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>auteur</b>
      </td>
      <td style="text-align:left">Doit contenir un objet avec le nom <code></code> et <code>id</code> du développeur de présence. Le nom est votre nom d'utilisateur Discord sans l'identifiant(#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributeurs</b>
      </td>
      <td style="text-align:left">Doit contenir un objet avec le nom <code></code> et <code>id</code> du développeur de présence. Le nom est votre nom d'utilisateur Discord sans l'identifiant(#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Service</b>
      </td>
      <td style="text-align:left">Le titre du service que cette présence supporte. <br>(Doit être le même nom que le dossier où tout se trouve)</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Petite description de la présence, vous pouvez utiliser la description du service
        si vous n'avez pas d'idées. Votre description doit avoir des valeurs de paire de clés qui indiquent la langue, et la description dans cette langue spécifique. Faites des descriptions avec les langues <i>que vous connaissez</i>, nos traducteurs apporteront des modifications à votre fichier de métadonnées.</td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b>
      </td>
      <td style="text-align:left">URL du service.<br><b>Exemple :</b><code>vk. om</code><br>
        <b>Cette URL doit correspondre à l'URL du site car elle détectera si oui ou non c'est le site Web auquel il faut injecter le script.</b><br> Ne pas <b>NON</b> ajoutez <code>https://</code> ou <code>http://</code> à l'intérieur de l'URL ni un slash à la fin :
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Note</b>: Certaines URLs peuvent avoir <code>www.</code> ou quelque chose d'autre devant leur domaine. N'oublie pas <b>PAS</b> de l'ajouter !<br>
Vous pouvez ajouter plusieurs URLs en faisant ce qui suit :<br>
<code>["URL1", "URL2", "ETC. ]</code><br>
Vous pouvez également utiliser regExp aussi connu sous le nom de Regex pour cette tâche, expliqué plus loin ci-dessous.
      </td>
      <td style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Une chaîne d'expression rationnelle utilisée pour rechercher des URL.<br>
regExp ou aussi connu sous le nom de Regex, peut être utilisé si un site Web a plusieurs sous-domaines.<br>
Vous pouvez utiliser le regExp pour cela :<br>
<code>([a-z0-9]+)[.]domaine[.]TLD "</code><br>
TLD représente le domaine de niveau supérieur pour exemple: . com .net<br> 
<code>([a-z0-9]+)</code> signifie n'importe quoi de a à z et de 0 à 9.<br>
        Vous pouvez démarrer rapidement en regardant cette <a href="https://youtu.be/sXQxhojSdZM">vidéo </a><br>
        Vous pouvez tester votre regExp sur <a href="https://regex101.com/">Regex101</a>
      </td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Version de votre présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logo</b>
      </td>
      <td style="text-align:left">Lien vers le logo du service&apos;s.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Lien vers votre miniature de présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>couleur</b>
      </td>
      <td style="text-align:left"><code>valeur #HEX</code>. Nous vous recommandons d'utiliser une couleur primaire du service
        que votre présence supporte.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Tableau avec des tags, ils aideront les utilisateurs à rechercher votre présence sur le site Web.</td>
      <td
      style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Catégorie</b>
      </td>
      <td style="text-align:left">Une chaîne utilisée pour représenter la catégorie sous laquelle tombe la présence. Voir les catergories valides <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">ici</a>.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Définit si <code>iFrames</code> sont utilisés</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Un sélecteur d'expression régulière qui sélectionne les iframes à injecter. Voir regExp pour plus d'informations.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>réglages</b>
      </td>
      <td style="text-align:left">Un tableau de paramètres que l'utilisateur peut modifier.<br>
      En savoir plus sur les paramètres de présence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">ici</a>.</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
  </tbody>
</table>

Nous avons créé un fichier `metadata.json` pour les paresseux [ici](https://eggsy.codes/projects/premid/mdcreator).

## Pour commencer

```javascript
var presence = new Presence({
    clientId: "00000000000000" //L'ID client de l'application créée sur https://discordapp. om/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback. aused"
    //Vous pouvez l'utiliser pour obtenir les chaînes traduites
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variables sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Exécuter la fonction séparée de l'événement UpdateData toutes les 10 secondes pour obtenir et définir les variables que UpdateData récupère

*/


présence. n("UpdateData", async () => {
    /*UpdateData est toujours lancé, et donc devrait être utilisé comme votre cycle de rafraîchissement, ou `tick`. Cela est appelé plusieurs fois par seconde dans la mesure du possible.

    Il est recommandé de configurer une autre fonction en dehors de cette fonction qui va changer les valeurs des variables et faire le chargement lourd si vous appelez des données à partir d'une API. /

    var presenceData = {
        largeImageKey: "key", /*La clé (nom de fichier) de la grande image sur la présence. Celles-ci sont téléchargées et nommées dans la section Rich Presence de votre application, appelée Art Assets*/
        smallImageKey: "key", /*La clé (nom de fichier) de la Grande Image sur présence. Celles-ci sont téléchargées et nommées dans la section Rich Presence de votre application, appelé Art Assets*/
        smallImageText: "Quelques texte survolant", //Le texte qui est affiché en survolant la petite image
        détails: "Nom de la page de navigation", //La section supérieure du texte de présence
        est : "Lire la section A", //La section inférieure du texte de présence
        startTimestamp : 1577232000, //L'horodatage de l'époque unix pour savoir quand commencer à compter à partir de
        endTimestamp : 1577151472000 //Si vous voulez afficher Time Left au lieu d'Elapsed, il s'agit de l'horodatage de l'époque unix auquel le minuteur se termine
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata. ype = "blahblah"; exemples de type: détails, état, etc.*/

    if (presenceData. etails == null) {
        //Cela se déclenchera si vous ne définissez pas les détails de présence
        . etTrayTitle(); //Efface le titre du plateau pour la présence d'utilisateurs mac
        . etActivité(); /*Mettre à jour la présence sans aucune donnée, donc la vider et faire de la grande image l'icône de l'application Discord, et le texte du nom de l'application Discord*/
    } autre{
        //Cela se déclenchera si vous définissez les détails de présence
        présence. etActivity(presenceData); //Mettre à jour la présence avec toutes les valeurs de l'objet présenceData
    }
});
```
Vous pouvez copier ceci dans votre fichier `presence.ts` et modifier les valeurs. Réglage de toutes les valeurs se fait à l'intérieur de l'événement updataData.

Pour des exemples nous suggérons de regarder le code des présences comme : 1337x ou 9GAG.

Pour plus d'informations sur la classe Presence, cliquez [ici](/dev/presence/class).

## Impossible d'obtenir certaines données?!

Beaucoup de sites web utilisent des [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Ces balises html peuvent contenir plusieurs sources telles que des vidéos. Mais ils ne sont pas pertinents à chaque fois. Certains sont cachés ou tout simplement pas utilisés activement. Vérifiez si vous pouvez extraire, l'information dont vous avez besoin, sans eux avant de faire un travail inutile.

1. Vérifiez les dans la console de vos navigateurs (assurez-vous que vous êtes sur l'onglet **Éléments**).
2. Recherchez (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

Si vous trouvez que vos données sont dans un iFrame vous devez faire ce qui suit :
1. Créer un fichier `iframe.ts`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame.
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
4. Faire en sorte que votre fichier de présence reçoive les données du fichier iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Remarque :** Ceci doit être placé en dehors de l'événement updateData.
## Compilation
Ouvrez une console dans votre dossier et tapez `tsc -w` pour compiler le `presence.ts` dans le dossier `/dist`.

# Chargement de la présence
1. Ouvrez la fenêtre popup et maintenez le bouton <kbd>Maj</kbd> sur votre clavier.
2. **Charger les présences** apparaîtra dans la section Présences.
3. Cliquez dessus pendant que vous maintenez le bouton <kbd>Maj</kbd>.
4. Sélectionnez le dossier /dist de votre présence.

# Quelques éléments utiles
## Rechargement rapide
Le site Web sur lequel vous développez est automatiquement rechargé chaque fois que vous enregistrez un fichier dans votre dossier.

## Débogage
- Vous pouvez mettre `console.log("Test");` entre votre code et voir si votre console de navigateur vous donne cette sortie. Si oui, continuez et réessayez après la fonction suivante. Si ce n'est pas le cas, il y a une erreur ci-dessus.
- Si cela ne vous aide pas non plus, demandez à un développeur de présence sur notre serveur [Discord](https://discord.gg/WvfVZ8T) pour obtenir de l'aide.

# Explications des fichiers
- [Classe de presence](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [Fichier de métadonnées](/dev/presence/metadata)
- [Configuration TypeScript](/dev/presence/tsconfig)
{.links-list}
