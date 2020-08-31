---
title: Lignes directrices
description: Règles que tous les développeurs de presence doivent suivre pour avoir leur presence ajoutée.
published: vrai
date: 2020-08-31T02:26:49.039Z
tags:
editor: markdown
---

# Lignes directrices

Lors de la publication des presences sur ce GitHub, nous vous demandons de suivre un ensemble de directives. Pour certains, ces règles strictes peuvent paraître sévères. Cependant, la mise en œuvre de ces règles nous empêchera ainsi que les utilisateurs de faire face à n'importe quel problème.

# Création

Les règles générales de développement de presence sont les suivantes:

- Les presences **doivent** être liées au site web que vous avez choisi.
- Les presences **ne peuvent pas** être faites pour des sites web illégaux. (par exemple, stresseurs, marketing de drogues, pédopornographie, etc.)
- La structure du fichier doit être propre et gérée, n'incluez pas des fichiers qui ne sont pas spécifiés. (par exemple, les dossiers vscode et git, images et fichiers texte, etc.)
- Vous devez avoir une structure de fichier appropriée, les brouillons ne sont **pas** autorisés.
- Les presences pour des sites web avec ( `.onion` TLDs) ou des sites web avec domaines/hébergeurs gratuits (par exemple, `.TK`, [tous les domaines libres de Freenom], `.RF` `GD`, etc) **ne sont pas** autorisés, des exceptions peuvent être faites si une preuve est présentée montrant qu'ils ont payé pour le domaine.
- Les presences qui ciblent les pages internes du navigateur (comme Chrome Web Store, les pages `chrome://`, `about:`, etc) **ne sont pas** autorisés car elles nécessitent un drapeau expérimental à activer du côté de l'utilisateur et peuvent potentiellement causer des dommages à leurs navigateurs.
- Les presences prenant en charge seulement une page **ne seront pas** autorisées, car elles pourraient sembler cassées pour d'autres pages (comme la page d'accueil), des exceptions peuvent être faites pour les pages de politique de confidentialité et de contact (contenu qui n'est pas souvent utilisé) ou alors sites où l'autre contenu n'est pas lié. (par exemple, les pages wikia)
- Les presences de faible qualité (ou celles n'ayant qu'un seul contexte) **ne sont pas autorisées** (par exemple : Afficher uniquement un logo et du texte et ne plus jamais les changer.)
- Inclure le dossier `dist` , les fichiers `presence.ts`, `iframe.ts` et `metadata.json` est obligatoire afin que le résultat soit ce qui est représenté dans le schéma suivant :

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

ou si vous utilisez un fichier `iframe.ts`:

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

> Pour la commodité de nos développeurs de presence, nous avons fourni un schéma que vous pouvez utiliser pour valider l'intégrité de votre fichier `metadata`. Cette option est entièrement facultative et n'est pas nécessaire pendant le processus de révision. 
> 
> {.is-info}

> Il est fortement recommandé d'organiser votre fichier `metadata` dans le format indiqué ci-dessous, et vous devez avoir des noms de service grammaticalement corrects, descriptions, balises et champs de paramètres. Tout ce qui n'est pas organisé selon les spécifications **ne sera pas autorisé**. 
> 
> {.is-warning}

> Les presences de sites web ayant du contenu explicite **doit** avoir le tag `nsfw`, et le logo/vignette **ne doit pas** contenir ce genre de contenu. 
> 
> {.is-warning}

Chaque presence a un fichier de description appelé `metadata.json`, les métadonnées ont un standard strict et un exemple de ce fichier est disponible ci-dessous:

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

> Si un champ est listé comme facultatif sur la [documentation](https://docs.premid.app/en/dev/presence/metadata) et que votre presence utilise la valeur par défaut pour celui-ci, ne l'incluez pas dans le fichier `metadata`. (par exemple, une presence sans le support iframe n'aurait pas besoin du champ `iframe`.) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly. 
> 
> {.is-warning}

Une liste de champs et leurs règles sont listées ci-dessous:

### **`$schema`**

- Le schéma _clé_ **doit** inclure un signe dollar au début de celui-ci, cela signalera à votre éditeur de texte que vous voulez valider votre fichier JSON par rapport à un modèle. _Comme indiqué précédemment, vous n'avez pas besoin d'inclure un schéma, mais si vous l'incluez, vous devez en tenir compte._

### **`auteur`**

- La _valeur_ de l'ID **doit** être votre ID snowflake Discord. Vous pouvez l'obtenir en activant le [mode développeur](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Veuillez **ne pas confondre** ceci avec l'ID de votre d'application, qui n'est que pour votre presence._

### **`contributeurs`**

- **Ne vous ajoutez pas** en tant que contributeur, et n'ajoutez pas quelqu'un d'autre en tant que contributeur à moins qu'il ait aidé à la presence.

### **`Service`**

- Le nom du service **doit être** le nom du répertoire de presence. Par exemple, si la presence est située à `/websites/Y/YouTube/`, le nom du service doit être `YouTube`.
- Vous **ne pouvez pas** utiliser l'url comme nom de service à moins que le site utilise l'url comme nom officiel. Si le nom n'est pas descriptif et peut être considéré comme vague, l'utilisation de l'url est **obligatoire**. (par exemple, `YouTube` est autorisé car c'est le nom officiel et est descriptif, alors que `youtube.com` ne l'est pas. `Top` est un nom non descriptif, donc l'utilisation de l'url `top.gg` est **requise**.)

### **`altnames`**

- Utilisez **seulement** ceci dans les scénarios où un site Web comporte plusieurs noms officiels (par ex. Pokémon et 포켓몬스터) ou pour faciliter la recherche de la présence sans utiliser de caractères spéciaux (par ex. Pokémon et Pokemon). Les *abréviations* du nom du service vont dans `tags`.

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

- La catégorie **doit** être l'une des catégories suivantes listées sur la documentation [](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- La présence doit utiliser une catégorie qui correspond au contenu du site web. (par exemple, n'utilisez pas `anime` lorsque le site n'est pas lié aux animes).

### **`regExp`** <br /> **`iFrameRegExp`**

- Les expressions régulières **doivent** être valides. Veuillez tester vos expressions avec les outils listés sur la [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`réglages`**

- Si vous décidez de créer une chaîne de format (par exemple, `%song% par %artist%` ), vous devez avoir les variables entourées d'un signe pour cent de chaque côté. Les variables tels que `%var`, `var%`ou `%%var%%` et tout ce qui se situe entre les deux **n'est pas autorisé** dans un but de normalisation.
- Le nom des paramètres **ne doit pas** être en toutes lettres majuscules. Par exemple, des noms tels que `Afficher le statut de navigation` ne seront **pas autorisés** ; cependant, les noms tels que `Afficher l'état de navigation` ou `Afficher l'état de navigation` sont autorisés.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Le code que vous écrivez **doit** être _bien écrit_ et **doit** être _lisible_ et toutes les chaînes doivent être grammaticalement correctes (les erreurs de grammaire sur les sites Web peuvent être ignorées). 
> 
> {.is-warning}

Voici une liste de règles que vous devez suivre lors de l'écriture de votre fichier `presence.ts` :

- **Toujours** déclarer une nouvelle instance de la classe `Presence` avant toute autre variable pour éviter des problèmes rares qui peuvent survenir ; ce n'est pas une exigence par conception, donc cela pourrait être supprimé dans le futur.
- **Ne jamais** utiliser des fonctions personnalisées lorsque [des variantes natives sont disponibles](https://docs.premid.app/dev/presence#files-explained); cela permet de s'assurer que les corrections au niveau de l'extension s'appliquent également à vos presences. Vous êtes libre d'utiliser tout ce dont vous avez besoin si vous ne les trouvez pas listés dans la documentation.
- Il est **interdit** de coder des presences pour un site sans ajouter de support à sa langue principale (exemple : une présence YouTube codée avec le support pour en portugais et en japonais, mais pas en anglais lui-même.)
- Les champs `smallImageKey` et `smallImageText` sont destinés à fournir un contexte supplémentaire/secondaire (comme `playing/pause` pour des sites de vidéos, `navigation` pour des sites réguliers et d'autres cas) non pas pour promouvoir des profils Discord ou quoi que ce soit qui ne soit non lié à PreMiD.
- Vous n'êtes **pas autorisé** à accéder à `localStorage`.
- Lors de l'accès aux cookies pour les données stockées, veuillez préfixer la clé avec `PMD_`.
- Vous ne pouvez faire que des requêtes HTTP/HTTPS sur `premid.app` ou à l'API du site web de Presence. Si vous utilisez des domaines externes, vous devrez expliquer pourquoi cela est nécessaire.
- **Ne** définissez **pas** des champs des données de l'objet presence par undefined, utilisez plutôt le mot-clé `delete`. (par ex., utilisez `delete data.startTimestamp` au lieu de `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **N'écrivez pas** votre propre fichier `tsconfig.json`, utilisez ce qui a été fourni dans la [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modifications

> Vous **devez** changer la version dans la **métadonnée** pour que celle-ci soit une valeur plus élevée que la version précédente lorsque vous effectuez des modifications soit à **presence.ts**/**presence.js** ou **metadata.json**. 
> 
> {.is-warning}

Dans certaines situations, les presences peuvent se comporter de manière inattendue ou peuvent utiliser quelques modifications mineures pour améliorer leurs fonctionnalités. Voici une liste compilée que vous **devez** suivre pour modifier des presences.

- Vous n'êtes **pas** autorisé à réécrire une Presence ou à modifier son auteur. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- N'importe qui peut fournir des correctifs pour corriger les bugs ; cependant, n'essayez **pas** d'apporter des modifications au code n'ayant **pas** besoin d'être corrigé. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.   - Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Les modifications valides le sont, mais ne doivent **pas** être limitées à, des _chemins manquants_, des _typos_, des _images manquantes_, etc.
- Si vous apportez des modifications à une presence et modifiez au moins un **quart** de la base de code de la presence, vous êtes autorisé à vous ajouter en tant que contributeur. Contactez un vérificateur pour plus d'informations sur ce sujet.   - Si vous apportez des modifications à une presence et modifiez au moins un **quart** de la base de code de la presence, vous êtes autorisé à vous ajouter en tant que contributeur. Contact a reviewer for more information about this subject.
- Assurez-vous que les modifications sont utiles. Celles-ci peuvent inclure des corrections (code et typos), des ajouts (descriptions et balises), etc. Ne changez **pas** les images si elles ne sont pas obsolètes et sont dans les spécifications.    - Assurez-vous que les modifications sont utiles. Celles-ci peuvent inclure des corrections (code et typos), des ajouts (descriptions et balises), etc. Ne changez **pas** les images si elles ne sont pas obsolètes et sont dans les spécifications.

# Vérification

> Si vous avez besoin de contacter quelqu'un, veuillez utiliser notre serveur Discord officiel. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> **Tout** le code contribué au magasin sera sous la licence `Mozilla Public License 2.0`. 
> 
> {.is-info}

> **Toujours** avoir une branche à jour avant de créer votre pull request. Cela aidera à limiter les faux positifs de `DeepScan`. 
> 
> {.is-warning}

Le processus le plus important de développement de la Presence est d'avoir votre Présence sur le magasin. Ceci est fait en faisant un [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) sur GitHub sur le repository `PreMiD/Presences`. Our reviewers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Reviewers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.


## `En examen`

Quelques choses que vous devriez savoir après avoir ouvert un pull request :

- Il faut 2 examinateurs pour fusionner un pull request.
- Si un pull request est inactive pendant une période de 14 jours, elle sera rapidement fermée.
- Toutes les vérifications **doivent être passées** pour pouvoir fusionner.
- ⚠ Vous **devez** fournir de nouvelles et intacts captures d'écrans (prises par vous) montrant une comparaison côte à côte entre votre profil et le site web pour prouver que votre presence fonctionne. _Vous êtes autorisé à assembler des captures d'écran pour une satisfaction visuelle_ Ceci s'applique à la fois pour la création et la modification.
- ⚠ Vous êtes également **tenu** d'inclure des captures d'écran des paramètres de Presence dans l'extension, si fourni. Voici un exemple : [ici](https://imgur.com/a/OD3sj5R).

## `Vérifications`

![Vérifications](https://i.imgur.com/bk0A1iY.png)

Actuellement, une Presence passe par deux étapes distinctes de vérification. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `DeepScan` est un bot qui vérifie la qualité du code. Si jamais vous recevez des erreurs pour les nouveaux problèmes, vous êtes **tenus** de les corriger.
- `Schema Validation` va scanner votre fichier `metadata.json` pour trouver toutes erreurs (par exemple, champs manquants, types de valeurs invalides, etc.). Si jamais vous recevez des erreurs, vous êtes aussi **tenus** de les corriger. L'ajout d'un champ de schéma à `metadata.json` permettra à votre éditeur de texte (si pris en charge) de vous montrer ces erreurs pendant le développement.

## `Règles supplémentaires`

- **Assurez-vous toujours** de démarrer votre presence dans le dossier le plus approprié, si son nom commence par _n'importe quel_ lettre latine, alors il doit être sous sa correspondance alphabétique (par exemple, `D/dアニメストア` ou `G/Google`). Tous les autres caractères unicode/non-Latin **doivent** être dans le dossier `#` (par exemple, `#/巴哈姆特`) et les numéros dans le dossier `0-9` (par exemple, `0-9/4anime`).

Après avoir respecté toutes les directives et que votre présence ai été examinée au moins deux fois, votre Presence sera fusionnée avec le store.

# Contributions

`La 2ème révision 2` des directives a été écrite et a et a bénéficié de la contribution des personnes suivantes :

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`La 1ère révision ` a été maintenue par les personnes suivantes :

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
