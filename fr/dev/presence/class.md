---
title: Classe de présence
description: La classe principale pour chaque présence PreMiD
published: vrai
date: 2020-02-12T22:15:28.557Z
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

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> Cette méthode ne fonctionne que sur Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Objet)`

Allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `Obtenir la légalité de la page (chaîne de caractères)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `Interface de données de présence`

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

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
    details: "My title",
    state: "My description",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "You hovered me, and what now?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Évènements

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `Mettre à jour les données`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
