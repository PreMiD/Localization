---
title: Métadonnées.json
description: Contient des données basique sur la Presence
published: true
date: 2020-12-26T15:03:41.542Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Si vous souhaitez publier une présence dans la boutique et la charger via l'extension, vous devez créer le fichier ` metadata.json ` dans votre dossier ` dist `.

Un exemple de ce fichier se situe ci-dessous.

```typescript
{
  "author": {
    "name": "UTILISATEUR",
    "id": "ID"
  },
  "contributors": [{
    "name": "UTILISATEUR",
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
      "title": "TITRE D'AFFICHAGE",
      "icon": "ICONE FONTAWESOME",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "TITRE D'AFFICHAGE",
      "icon": "ICONE FONTAWESOME",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "TITRE D'AFFICHAGE",
      "icon": "ICONE FONTAWESOME",
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
      <td style="text-align:left">Doit contenir un Objet avec le <code>nom</code> et l'<code>id</code> du développeur de la Presence. Le nom est votre nom d'utilisateur Discord sans l'identifiant (#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Objet</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributeurs</b></td>
      <td style="text-align:left">Doit contenir un objet avec le <code>nom</code> et l'<code>id</code> du contributeur. Le nom est votre nom d'utilisateur Discord sans l'identifiant (#0000). L'<code>id</code> utilisateur peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Service</b></td>
      <td style="text-align:left">Le titre du service que cette présence supporte.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Soyez en mesure de rechercher la presence en utilisant un nom alternatif.<br>
      Destiné à être utilisé pour les presences qui ont des noms différents dans des langues différentes (par ex. Pokémon et 포켓몬스터).<br>
      Vous pouvez également l'utiliser pour les presences qui ont des caractères spéciaux afin que vous n'ayez pas à les taper (par ex. Pokémon et Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Description du service <b>PAS</b> de la présence. Votre description doit avoir des valeurs de paire de clés qui indiquent la langue, et la description dans cette langue spécifique. Faites des descriptions avec les langues <i>que vous connaissez</i>, nos traducteurs apporteront des modifications à votre fichier de métadonnées. Voir la catégorie pour les langues de présence pour une liste. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b></td>
      <td style="text-align:left">URL du service.<br>
<b>Exemple :</b><code>vk. om</code><br>
        <b>Cette url doit correspondre à l'url du site web car elle sera utilisée pour détecter où que ce soit ou non le site web où injecter le script. Ceci ne peut être utilisé comme un tableau que s'il y a plus d'une urls.</b></td>
      <td style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Une chaîne d'expression régulière utilisée pour faire correspondre les URLs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version de votre présence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logo</b></td>
      <td style="text-align:left">Lien vers le logo du service&apos;.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Lien vers votre miniature de présence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>couleur</b></td>
      <td style="text-align:left">valeur <code>#HEX</code>. Nous vous recommandons d'utiliser une couleur primaire du service
        que votre présence supporte.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Tableau avec des tags, ils aideront les utilisateurs à rechercher votre présence sur le site Web.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Non</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Catégorie</b></td>
      <td style="text-align:left">Une chaîne utilisée pour représenter la catégorie sous laquelle tombe la présence.</td>
      <td style="text-align:left"><code>String</code></td>
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
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Définit si l'extension doit lire les logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Un tableau de paramètres que l'utilisateur peut modifier</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Oui</code></td>
    </tr>
  </tbody>
</table>

## Expressions régulières

Si vous voulez apprendre les expressions régulières, voici quelques sites web.

#### Apprentissage

- [ Vidéo de démarrage rapide](https://youtu.be/sXQxhojSdZM) - [RegexOne](https://regexone.com/) - [Information sur les expressions régulières](https://www.regular-expressions.info/tutorial.html)

#### En Test

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Langues de présence

PreMiD est un service polyglotte, ce qui signifie qu'il y a une multitude de langues impliquées pour connecter les utilisateurs du monde entier. Une liste complète des langues peut être trouvée avec ce [point de terminaison de l'API](https://api.premid.app/v2/langFile/list). Pour personnaliser encore plus votre présence, vous pouvez autoriser les utilisateurs à sélectionner la langue d'affichage de leur présence, voir [`multiLanguage`](#multilanguage) pour plus d'informations.

## Paramètres de présence
Configurer les paramètres interactifs pour que les utilisateurs puissent personnaliser la présence!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //Voir https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "TITRE D'AFFICHAGE",
    "icon": "ICONE FONTAWESOME", //Exemple "fas fa-info"
    "value": true // La valeur booléenne en fera un interrupteur marche/arrêt avec cette valeur comme valeur par défaut
  },
  {
    "id": "ID",
    "if": {
      "ID": true //Si un autre paramètre est égal à cette valeur (true/false/0/1/etc.) alors afficher ce bouton
    },
    "title": "TITRE D'AFFICHAGE",
    "icon": "ICONE FONTAWESOME",
    "value": "\"%song%\" by %artist%", //L'insertion d'une chaîne de caractères fera du réglage une entrée, où vous pourrez utiliser une entrée personnalisée.
    "placeholder": "utilise %song% ou %artist%" //Lorsque l'entrée est vide, elle apparaîtra en grisé
  },
  {
    "id": "ID",
    "title": "TITRE D'AFFICHAGE",
    "icon": "ICONE FONTAWESOME",
    "value": 0, //Valeur par défaut du sélecteur
    "values": ["1", "2", "etc."] //Fera du réglage un sélecteur où vous choisirez celui que vous voulez
  }
]
```

### `multiLanguage`

#### Introduction

Le paramètre `multiLanguage` est utilisé pour permettre aux utilisateurs de sélectionner manuellement la langue dans laquelle ils veulent que le presence leur soit montrée. Cela nécessite que vous utilisiez des chaînes de caractères de notre [API](https://api.premid.app/v2/langFile/presence/en), pour plus d'informations sur comment ajouter des chaînes de caractères cliquez [ici](/dev/presence/metadata/adding-new-strings).

#### Configuration

Le paramètre `multiLanguage` est un cas spécial, il ne nécessite ni de `titre` ni d' `icône` ni de `valeur` ou `valeurs` comme d'autres paramètres, mais, il demande encore plus de choses à configurer !

La clé `multiLanguage` peut être définie comme suit :

`true`: utilisez ceci si vous n'allez utiliser que des chaînes de caractères du fichier `general.json` et du fichier `<service>.json` du [Dépôt de localisation](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: nom du fichier excluant l'extension (.json) à l'intérieur du [Dépôt de localisation](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluant le fichier `general` car il est toujours chargé). Seules les langues courantes du fichier `general` et du fichier saisi seront listées. `Array<String>`: si vous utilisez plus d'un fichier à l'intérieur du [Dépôt de localisation](https://github.com/PreMiD/Localization/tree/master/src/Presence) vous pouvez spécifier toutes les valeurs dans une table (excluant le fichier `general`, car il est toujours chargé). Seules les langues courantes de tous les fichiers seront listées.

#### Ajout de nouvelles chaînes

##### Cloner le projet

1. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Localization`.
2. Choisissez un dossier.
3. Ouvrez-le dans votre éditeur de code.

##### Création du fichier

1. Allez dans le dossier `src`.
2. Allez dans le dossier `Presence`.
3. Créer un fichier nommé `<service>.json`. (Le service est le **nom** (pas une URL) en minuscule du service que vous voulez supporter.)

##### Ajout de chaînes

Chaque `string` est un `Object` où le nom commence par le nom du service et ensuite par le stringName avec un point entre les deux.

Le stringName est un identifiant de 1 mot du message.

L' `Object` a 2 propriétés; `message` et `description`. `message` est le texte qui doit être traduit. `description` est une description du message pour aider nos traducteurs à comprendre ce qu'ils traduisent.

**Remarque :** N'ajoutez aucune chaîne en double. (Cela inclut les chaînes du fichier `general.json` et non les autres fichiers.)

Visualisation du fichier :

```typescript
{
  "<service>.<stringName>": {
    "message": "Texte qui doit être traduit. ,
    "description": "Ceci explique ce que le message ci-dessus est."
  },
  "<service>.<stringName>": {
    "message": "Texte qui doit être traduit. ,
    "description": "Ceci explique ce que le message ci-dessus est."
  }
}
```

Après avoir entièrement créé le fichier avec les chaînes de caractères, vous pouvez créer une Pull Request sur le [Dépot de localisation](https://github.com/PreMiD/Localization), dans la description vous **devez** inclure un lien vers votre Pull Request de la presence mise à jour en utilisant ces nouvelles chaînes du [Dépôt de Presence](https://github.com/PreMiD/Presences).

#### Touches par défaut
Les clés que vous n'avez pas à définir sont automatiquement définies à ce qui suit : `title`: "Langue" **Note :** Ceci est traduit dans leur langue par défaut (langue du navigateur). `icon`: "fas fa-language" ([Aperçu](https://fontawesome.com/icons/language)) `value`: **Régler la langue de leur navigateur si elle est disponible (100% traduite), sinon l'anglais.** `values`: **Définissez les langues disponibles (langues qui ont été traduites à 100%).**

**Remarque :** Celles-ci ne sont en aucun cas modifiables.

### Méthodes

Utilisez les méthodes suivantes pour obtenir des informations sur les paramètres dans vos fichiers de présence:
#### `getSetting(String)`
Renvoie la valeur du paramètre.
```typescript
const setting = wait presence.getSetting("pdexID"); //Remplacer pdexID par l'id du paramètre
console.log(setting); // Cela affichera dans la console la valeur du paramètre
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
      <td style="text-align:left">Tout ce qui est en rapport à l'animation, des forums aux plateformes de streaming vidéo.</td>
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
        <td style="text-align:left"><b>Vidéos & Streams</b></td>
      <td style="text-align:left">Sites Web qui servent à fournir des vidéos et des streams.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>autres</b></td>
      <td style="text-align:left"><b>Autre</b></td>
      <td style="text-align:left">Tout ce qui ne relève pas d'une catégorie spécifique énumérée ci-dessus.</td>
    </tr>
  </tbody>
</table>

