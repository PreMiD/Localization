---
title: Métadonnées.json
description: Contient des données de base sur la Presence
published: vrai
date: 2020-04-22T18:33:51.076Z
tags:
---

# Métadonnées.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

L'exemple de ce fichier peut être trouvé ci-dessous.

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
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
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

## Comprendre le metadata.json

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
      <td style="text-align:left">Le titre du service que cette présence supporte.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Petite description de la présence, vous pouvez utiliser la description du service
        si vous n'avez pas d'idées. Votre description doit avoir des valeurs de paire de clés qui indiquent la langue, et la description dans cette langue spécifique. Faites des descriptions avec les langues <i>que vous connaissez</i>, nos traducteurs apporteront des modifications à votre fichier de métadonnées. Voir la catégorie pour les langues de présence pour une liste. </td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b>
      </td>
      <td style="text-align:left">URL du service.<br><b>Exemple :</b><code>vk. om</code><br>
        <b>Cette url doit correspondre à l'url du site car elle sera utilisée pour détecter où ou non c'est le site web auquel injecter le script. Ceci ne peut être utilisé comme un tableau que s'il y a plus d'une urls.</b>
      </td>
      <td style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Une chaîne d'expression rationnelle utilisée pour faire correspondre les URL.</td>
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
      <td style="text-align:left">Une chaîne utilisée pour représenter la catégorie sous laquelle tombe la présence.</td>
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
      <td style="text-align:left">Un sélecteur d'expression régulière qui sélectionne les iframes à injecter.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>réglages</b>
      </td>
      <td style="text-align:left">Un tableau de paramètres que l'utilisateur peut modifier</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
  </tbody>
</table>

## Expressions régulières

Si vous voulez apprendre des expressions régulières, voici quelques sites web.

#### Apprentissage

• [RegexOne](https://regexone.com/) • [Informations sur les expressions régulières](https://www.regular-expressions.info/tutorial.html)

#### En Test

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Langues de présence

PreMiD est un service polygoutte, ce qui signifie qu'il y a une multitude de langues impliquées pour connecter les utilisateurs du monde entier. Une liste complète des langues peut être trouvée avec ce [point de terminaison de l'API](https://api.premid.app/v2/langFile/list).

## Paramètres de présence
Configurer les paramètres interactifs pour que les utilisateurs puissent personnaliser la présence!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //Boolean value will make it an on/off switch with the value as the default value
        },
        {
            "id": "ID",
            "if": {
                "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist", //Putting in a string will make the setting an input one, where you can use a custom input.
            "placeholder": "use %song or %artist" //When input is empty it will show this grayed out
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Default value of the selector
            "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
        }
    ]
```

Utilisez les méthodes suivantes pour obtenir des informations sur les paramètres dans vos fichiers de présence:
### `getSetting(String)`
Renvoie la valeur du paramètre.
```typescript
var setting = wait presence.getSetting("pdexID"); //Remplacer pdexID par l'id du paramètre
console.log(setting); // Cela va enregistrer la valeur du paramètre
```

### `masquer (chaîne de caractères)`
Masque le paramètre donné.
```typescript
presence.hideSetting("pdexID"); //Remplacer pdexID par l'id du paramètre
```

### `montreParamètres(chaîne de caractères)`
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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>jeux</b></td>
    <td style="text-align:left"><b>Jeux</b></td>
      <td style="text-align:left">N'importe quel site web qui a un contenu lié au jeu, comme <code>Kahoot</code> ou <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>musique</b></td>
    <td style="text-align:left"><b>Musique</b></td>
      <td style="text-align:left">Ce sont des sites Web qui offrent des contenus liés à la musique, que ce soit en streaming ou en téléchargement.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>réseaux sociaux</b></td>
        <td style="text-align:left"><b>Réseaux sociaux</b></td>
      <td style="text-align:left">Les sites Web qui sont utilisés dans le but de créer et de partager du contenu ou de participer à d'autres formes de réseau social.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>vidéos</b></td>
        <td style="text-align:left"><b>Vidéos et Streams</b></td>
      <td style="text-align:left">Sites Web qui servent à fournir des vidéos et des streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>autres</b></td>
    <td style="text-align:left"><b>Autres</b></td>
      <td style="text-align:left">Tout ce qui ne relève pas d'une catégorie spécifique énumérée ci-dessus.</td>
      </td>
    </tr>
  </tbody>
</table>