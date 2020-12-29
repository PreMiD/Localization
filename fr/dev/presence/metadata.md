---
title: Métadonnées.json
description: Contient des données basique sur la Presence
published: oui
date: 2020-12-26T15:03:41.542Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Métadonnées.json

Si vous souhaitez publier une présence dans la boutique et la charger via l'extension, vous devez créer le fichier ` metadata.json ` dans votre dossier ` dist `.

Un exemple de ce fichier se situe ci-dessous.

```typescript
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
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
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

## Comprendre le fichier metadata.json

Cet exemple semble vraiment étrange, hein? Ne vous inquiétez pas, ce n'est pas si difficile de comprendre à quoi sert chaque variable.

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
      <td style="text-align:left"><b>auteur</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Le nom est votre nom d'utilisateur Discord sans l'identifiant (#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Objet</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributeurs</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. Le nom est votre nom d'utilisateur Discord sans l'identifiant (#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Service</b></td>
      <td style="text-align:left">Le titre du service que cette présence supporte.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Votre description doit avoir des valeurs de paire de clés qui indiquent la langue, et la description dans cette langue spécifique. Faites des descriptions avec les langues <i>que vous connaissez</i>, nos traducteurs apporteront des modifications à votre fichier de métadonnées. Voir la catégorie pour les langues de présence pour une liste. </td>
      <td style="text-align:left"><code>Objet</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. Ceci ne peut être utilisé comme un tableau que s'il y a plus d'une urls.</b></td>
      <td style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Une chaîne d'expression régulière utilisée pour faire correspondre les URLs.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version de votre présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logo</b></td>
      <td style="text-align:left">Lien vers le logo du service&apos;s.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Lien vers votre miniature de présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>couleur</b></td>
      <td style="text-align:left"><code>valeur #HEX</code>. Nous vous recommandons d'utiliser une couleur primaire du service
        que votre présence supporte.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Tableau avec des tags, ils aideront les utilisateurs à rechercher votre présence sur le site Web.</td>
      <td style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Catégorie</b></td>
      <td style="text-align:left">Une chaîne utilisée pour représenter la catégorie sous laquelle tombe la présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Définit si <code>iFrames</code> sont utilisés</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Un sélecteur d'expression régulière qui sélectionne les iframes à injecter.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>réglages</b></td>
      <td style="text-align:left">Un tableau de paramètres que l'utilisateur peut modifier</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
  </tbody>
</table>

## Expressions régulières

Si vous voulez apprendre des expressions régulières, voici quelques sites web.

#### Apprentissage

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### En Test

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Langues de présence

PreMiD est un service polyglotte, ce qui signifie qu'il y a une multitude de langues impliquées pour connecter les utilisateurs du monde entier. Une liste complète des langues peut être trouvée avec ce [point de terminaison de l'API](https://api.premid.app/v2/langFile/list). Pour personnaliser encore plus votre présence, vous pouvez autoriser les utilisateurs à sélectionner la langue d'affichage de leur présence, voir [`langue multilingue`](#multilanguage) pour plus d'informations.

## Paramètres de présence
Configurer les paramètres interactifs pour que les utilisateurs puissent personnaliser la présence!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Introduction

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

Le paramètre `multiLangue` est un cas spécial, il ne nécessite ni de `titre` ni d' `icône` ni de `valeur` ou `valeurs` comme d'autres paramètres, mais, il demande encore plus de choses à configurer !

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Dupliquer le projet

1. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Localization`.
2. Choisissez un fichier de votre choix.
3. Ouvrez-le dans votre éditeur de code.

##### Creating the file

1. Go into the `src` folder.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

##### Adding the strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Méthodes

Utilisez les méthodes suivantes pour obtenir des informations sur les paramètres dans vos fichiers de présence:
#### `getSetting(String)`
Renvoie la valeur du paramètre.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `masquer (chaîne de caractères)`
Masque le paramètre donné.
```typescript
presence.hideSetting("pdexID"); //Remplacer pdexID par l'id du paramètre
```

#### `montreParamètres(chaîne de caractères)`
Affiche le paramètre spécifié (ne fonctionne que si le paramètre est déjà masqué).
```typescript
presence.showSetting("pdexID"); //Remplacer pdexID par l'id du paramètre
```

## Catégories de présence

Lorsque vous faites votre présence, vous devez spécifier une catégorie sous laquelle la présence tombe en dessous. Ceci est une liste compilée des catégories que vous pouvez utiliser.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Catégorie</th>
      <th style="text-align:left">Nom</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>animé</b></td>
      <td style="text-align:left"><b>Animé</b></td>
      <td style="text-align:left">Tout ce qui a trait à l'animation, des forums aux plateformes de streaming vidéo.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>jeux</b></td>
      <td style="text-align:left"><b>Jeux</b></td>
      <td style="text-align:left">N'importe quel site web qui a un contenu lié au jeu, comme <code>Kahoot</code> ou <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>musique</b></td>
      <td style="text-align:left"><b>Musique</b></td>
      <td style="text-align:left">Ce sont des sites Web qui offrent des contenus liés à la musique, que ce soit en streaming ou en téléchargement.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>réseaux sociaux</b></td>
        <td style="text-align:left"><b>Réseaux sociaux</b></td>
      <td style="text-align:left">Les sites Web qui sont utilisés dans le but de créer et de partager du contenu ou de participer à d'autres formes de réseau social.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>vidéos</b></td>
        <td style="text-align:left"><b>Vidéos et Streams</b></td>
      <td style="text-align:left">Sites Web qui servent à fournir des vidéos et des streams.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>autres</b></td>
      <td style="text-align:left"><b>Autres</b></td>
      <td style="text-align:left">Tout ce qui ne relève pas d'une catégorie spécifique énumérée ci-dessus.</td>
    </tr>
  </tbody>
</table>

