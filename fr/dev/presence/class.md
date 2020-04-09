---
title: Classe de présence
description: La classe principale pour chaque présence PreMiD
published: vrai
date: 2020-04-08T19:33:34.075Z
tags:
---

# Classe de présence

## Introduction

La classe `Presence` est très utile car elle possède des méthodes de base dont nous avons besoin pour créer une présence.

 Lorsque vous créez une classe, vous devez spécifier la propriété `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Exemple clientId
});
```

Il y a deux propriétés disponibles pour la classe `Presence`.

#### `clientId`

La propriété `clientId` doit être fournie pour que votre présence fonctionne, car elle utilise votre identifiant d'application pour afficher son logo et ses actifs.

Vous pouvez l'obtenir sur votre page [applications](https://discordapp.com/developers/applications).

## Méthodes

### `setActivity(presenceData, Boolean)`

Définit l'activité de votre profil en fonction des données fournies.

Le premier paramètre nécessite une interface `présenceData` pour obtenir toutes les informations que vous souhaitez afficher dans votre profil.

Le deuxième paramètre définit quand la présence joue quelque chose ou non. Toujours utiliser `true` si vous fournissez des timestamps dans `présenceData`.

### `clearActivity()`

Efface votre activité actuelle, les raccourcis clavier et le titre de la zone de notification.

### `setTrayTitle(String)`

> Cette méthode ne fonctionne que sur Mac OS. 
> 
> {.is-warning}

Définit le titre de la barre de menus.

### `getStrings(Objet)`

Vous permet d'obtenir des chaînes traduites depuis l'extension. Vous devez fournir `Object` avec les clés qui sont la clé de la chaîne, `keyValue` est la valeur de la chaîne. Vous pouvez trouver certaines des chaînes en utilisant ce point de terminaison: `https://api.premid.app/v2/langFIle/extension/fr`

```typescript
// Retourne `Playing` et `Paused` chaînes
// depuis l'extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

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

### `getExtensionVersion(Boolean)`
Renvoie la version de l'extension que l'utilisateur utilise.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Retourne 210
var version = presence.getExtensionVersion(false);
console.log(version); // Retourne 2.1.0
```

### `obtenir la légalité de la page (chaîne de caractères)`

Retourne une variable du site web si elle existe.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Cela va enregistrer le "Contenu de la variable"
```

## `Interface de données de présence`

L'interface `presenceData` est recommandée à utiliser lorsque vous utilisez la méthode `setActivity()`.

Cette interface a des variables suivantes, toutes sont optionnelles.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Détails</td>
      <td style="text-align:left">La première ligne de votre présence, généralement utilisée comme en-tête.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Etat</td>
      <td style="text-align:left">Deuxième ligne en votre présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Définit le temps actuel.<br>
        Utilisé si vous voulez afficher combien <code>heures:minutes:secondes</code> restantes.
          <br>Vous devez convertir votre temps en <code>horodatage</code> ou vous obtiendrez un compte à rebours
          erroné.
      </td>
      <td style="text-align:left"><code>Numéros</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Définit la durée complète.
        <br>Utilisé si vous voulez afficher combien <code>heures:minutes:secondes</code> restant.
          <br>Vous devez convertir votre temps en <code>horodatage</code> ou vous obtiendrez un compte à rebours
          erroné.
      </td>
      <td style="text-align:left"><code>Numéros</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">clé d'image-grande</td>
      <td style="text-align:left">Définit le logo de la présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">petite clé ImageKey</td>
      <td style="text-align:left">Définit la petite icône à côté du logo&apos;s.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Texte de petite image</td>
      <td style="text-align:left">Définit le texte qui sera affiché à l'utilisateur quand il survolera la petite icône
.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "Mon titre",
    state: "Ma description",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Vous m'avez survolé, et que maintenant? ,
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Évènements

Les événements vous permettent de détecter et de gérer certains changements ou appels qui ont été effectués. Vous pouvez vous abonner aux événements en utilisant la méthode `sur`.

```typescript
presence.on("UpdateData", async () => {
    // Faire quelque chose quand les données sont mises à jour.
});
```

Il y a peu d'événements disponibles:

#### `Mettre à jour les données`

Cet événement est déclenché chaque fois que la présence est mise à jour.

#### `iFrameData`

Déclenché lorsque des données sont reçues à partir du script iFrame.
