---
title: Classe de presence
description: La classe principale pour chaque presence PreMiD
published: oui
date: 2020-12-26T13:53:09.952Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Classe de presence

## Introduction

La classe `Presence` est très utile car elle possède des méthodes de base dont nous avons besoin pour créer une presence.

Lorsque vous créez une classe, vous devez spécifier la propriété `clientId`.

```typescript
const presence = new Presence({
  clientId: "5141496134389561" // Exemple clientId
});
```

### Propriétés

Il y a trois propriétés disponibles pour la classe de `Presence`.

#### `clientId`

Cette propriété est nécessaire pour que votre Presence fonctionne car elle utilise l'identifiant de votre application pour afficher son logo et ses images. Vous pouvez l'obtenir sur votre page d'[applications](https://discordapp.com/developers/applications).

#### `injectOnComplete`

Quand le paramètre `injectOnComplete` est défini sur `true`, le premier évènement `UpdateData` pour les fichiers `presence.ts` et `iframe.ts` sera lancé après le chargement complet de la page.

#### `appMode`

Quand le paramètre `appMode` est défini sur `true` et que la presence était censée renvoyer un `PresenceData` vide, l'app affichera l'application (image et nom) sur le profil de l'utilisateur plutôt que rien.

## Méthodes

### `getActivity()`

Returns a `PresenceData` object of what the presence is displaying.

### `setActivity(PresenceData | Slideshow, Boolean)`

Définit l'activité de votre profil en fonction des données fournies.

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

Le deuxième paramètre définit quand la présence joue quelque chose ou non. Always use `true` if you provide timestamps in `PresenceData`.

### `clearActivity()`

Efface votre activité actuelle, les raccourcis clavier et le titre de la zone de notification.

### `setTrayTitle(String)`

> Cette méthode ne fonctionne que sur Mac OS. 
> 
> {.is-warning}

Définit le titre de la barre de menus.

### `createSlideshow()`

Creates a new `Slideshow` class.

```typescript
const slideshow = presence.createSlideshow();
```

This is suggested to do right when you make the `Presence` class.

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Example clientId
  }),
  slideshow = presence.createSlideshow();
```

You can find the documentation for the `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(Object)`

Méthode asynchrone qui vous permet d'obtenir des chaînes traduites depuis l'extension.

Vous devez fournir `Object` avec les clés qui sont la clé de la chaîne, `keyValue` est la valeur de la chaîne. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Retourne `Playing` et `Paused` chaînes
// depuis l'extension.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

Since v2.2.0 of the extension you can now get the strings of a certain language. This works well with the also newly added `multiLanguage` setting option.

We suggest you use the following code so it automatically updates the PresenceData if the user changes the selected language;

```typescript
// An interface of the strings you are getting (good for code quality and autocomplete).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // The strings you are getting, make sure this fits with your LangStrings interface.
      play: "general.playing",
      pause: "general.paused"
    },
    // The ID is the ID of the multiLanguage setting.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // The ID is the ID of the multiLanguage setting.
  oldLang: string = await presence.getSetting("ID");

//! The following code must be inside the updateData event!
// The ID is the ID of the multiLanguage setting.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

### `getPageletiable(String)`

Retourne une variable du site web si elle existe.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Renvoie la version de l'extension que l'utilisateur utilise.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Renvoie la valeur du paramètre.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `masquer (chaîne de caractères)`

Masque le paramètre donné.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `montreParamètres(chaîne de caractères)`

Affiche le paramètre spécifié (ne fonctionne que si le paramètre est déjà masqué).

```typescript
presence.showSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `getLogs()`

Returns the logs of the websites console.

```typescript
const logs = await presence.getLogs();
console.log(logs); // This will log the latest 100 logs (in an array).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Console logs the given message in a format based of the presence in the `info` style.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Console logs the given message in a format based of the presence in the `success` style.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Console logs the given message in a format based of the presence in the `error` style.

```typescript
presence.error("Test") // This will log "test" in the correct styling.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `getTimestamps(Number, Number)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `timestampFromFormat(String)`

Converts a string with format `HH:MM:SS` or `MM:SS` or `SS` into an integer (Does not return snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

## `Interface de données de présence`

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

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
const presenceData: PresenceData = {
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

Les événements vous permettent de détecter et de gérer certains changements ou appels qui ont été effectués. Vous pouvez vous abonner aux événements en utilisant la méthode `sur`.

```typescript
presence.on("UpdateData", async () => {
  // Do something when data gets updated.
});
```

Il y a peu d'événements disponibles:

#### `Mettre à jour les données`

Cet événement est déclenché chaque fois que la présence est mise à jour.

#### `iFrameData`

Déclenché lorsque des données sont reçues à partir du script iFrame.
