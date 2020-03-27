---
title: Classe de présence
description: La classe principale pour chaque présence PreMiD
published: true
date: 2020-02-12T22:28:21.920Z
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

#### `mediaKeys`

Cette propriété indique à notre application d'enregistrer les raccourcis clavier pour les clés multimédias et nous permet d'utiliser l'événement `MediaKeys` pour la classe `Presence`.

Cette propriété n'est pas requise, mais si vous voulez activer les clés multimédia, vous devez la définir à `true`.

**Tous les événements mediaKey sont temporairement désactivés !**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Permet aux utilisateurs d'utiliser les clés de média
});
```

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
strings = Attendre presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `Obtenir la légalité de la page (chaîne de caractères)`

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
    détails: "Mon titre",
    état : "Ma description",
    largeImageKey : "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Vous m'avez survolé, et que maintenant? ,
    startTimestamp : 1564444631188,
    endTimestamp : 1564444634734
};
```

## Évènements

Les événements vous permettent de détecter et de gérer certains changements ou appels qui ont été effectués. Vous pouvez vous abonner aux événements en utilisant la méthode `sur`.

```typescript
presence.on("UpdateData", async () => {
    // Faire quelque chose quand les données sont mises à jour.
});
```

Il y a peu d'événements disponibles :

#### `Mettre à jour les données`

Cet événement est déclenché chaque fois que la présence est mise à jour.

#### `Touches médiatiques` (désactivées)

Déclenché lorsque l'utilisateur utilise des touches média sur son clavier, [cliquez ici](/dev/presence/class#mediakeys) pour obtenir plus d'informations sur les touches multimédia.

#### `iFrameData`

Déclenché lorsque des données sont reçues à partir du script iFrame.