---
title: Classe Presence
description: La classe principale pour chaque presence PreMiD
published: true
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Classe Presence

## Introduction

La classe `Presence` est très utile car elle possède des méthodes de base dont nous avons besoin pour créer une presence.

Lorsque vous créez une classe, vous devez spécifier la propriété `clientId`.

```typescript
const presence = new Presence({
  clientId: "5141496134389561" // Exemple de clientId
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

Retourne un objet `PresenceData` de ce que la présence affiche.

### `setActivity(PresenceData | Slideshow, Boolean)`

Définit l'activité de votre profil en fonction des données fournies.

Le premier paramètre nécessite une interface [`PresenceData`](#presencedata-interface) ou une classe [`Slideshow`](/dev/presence/slideshow) pour obtenir toutes les informations que vous souhaitez afficher dans votre profil.

Le second paramètre définit quand la présence joue quelque chose ou non. Toujours utiliser `true` si vous fournissez des timestamps dans `PresenceData`.

### `clearActivity()`

Enlève l'activité et le titre actuel.

### `setTrayTitle(String)`

> Cette méthode ne fonctionne que sur Mac OS. 
> 
> {.is-warning}

Définit le titre de la barre de menus.

### `createSlideshow()`

Crée une nouvelle classe `Slideshow`.

```typescript
const slideshow = presence.createSlideshow();
```

Il est suggéré de faire ceci directement après avoir crée la classe `Presence`:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Exemple de clientId
  }),
  slideshow = presence.createSlideshow();
```

Vous pouvez trouver la documentation pour la classe `Slideshow` [ici](/dev/presence/slideshow).

### `getStrings(Object)`

Méthode asynchrone qui vous permet d'obtenir les chaînes traduites depuis l'extension.

Vous devez fournir `Object` avec les clés qui sont la clé de la chaîne, `keyValue` est la valeur de la chaîne. Une liste de chaînes traduites peut être trouvée ici : `https://api.premid.app/v2/langFile/presence/fr/`

```typescript
// Retourne les chaînes `Playing` et `Paused`
// depuis l'extension.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // Résultat: Joue
const pauseString = strings.pause; // Résultat: En pause
```

Depuis la v2.2.0 de l'extension, vous pouvez maintenant obtenir les chaînes de caractères d'une certaine langue. Cela fonctionne bien avec l'option de réglage `multiLanguage`, également nouvellement ajoutée.

Nous vous suggérons d'utiliser le code suivant afin qu'il mette à jour automatiquement PresenceData si l'utilisateur change la langue sélectionnée ;

```typescript
// Une interface de chaînes de caractères que vous obtenez (bonne pour la qualité du code et l'auto-complétion).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // Les chaînes de caractères que vous obtenez, assurez-vous qu'elles correspondent à votre interface LangStrings.
      play: "general.playing",
      pause: "general.paused"
    },
    // L'ID est l'ID du paramètre multiLanguage.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
   // L'ID est l'ID du paramètre multiLanguage.
  oldLang: string = await presence.getSetting("ID");

//! Le code suivant doit être à l'intérieur de l'événement updateData !
// L'ID est l'ID du paramètre multiLanguage.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // Résultat: Joue
const pauseString = strings.pause; // Résultat: En pause
```

### `getPageletiable(String)`

Retourne une variable du site web si elle existe.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Cela permettra d'afficher le "contenu variable"
```

### `getExtensionVersion(Boolean)`

Renvoie la version de l'extension que l'utilisateur utilise.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Affichera 210
const version = presence.getExtensionVersion(false);
console.log(version); // Affichera 2.1.0
```

### `getSetting(String)`

Renvoie la valeur du paramètre.

```typescript
const setting = await presence.getSetting("pdexID"); //Remplacer pdexID avec l'id du paramètre
console.log(setting); // Cela enregistrera la valeur du paramètre
```

### `hideSetting(String)`

Masque le paramètre donné.

```typescript
presence.hideSetting("pdexID"); // Remplacer pdexID par l'id du paramètre
```

### `showSetting(String)`

Affiche le paramètre spécifié (Ne fonctionne que si le paramètre est déjà masqué).

```typescript
presence.showSetting("pdexID"); // Remplacer pdexID par l'id du paramètre
```

### `getLogs()`

Retourne les logs de la console des sites Web.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Cela affichera les 100 derniers logs (dans un array).
```

**Note:** Nécessite `readLogs` d'être réglé à `true` dans le fichier `metadata.json`.

### `info(String)`

Affiche le message donné dans la console dans un format basé sur la presence dans le style `info`.

```typescript
presence.info("Test") // Cela va afficher "test" dans le bon style.
```

### `success(String)`

Affiche le message donné dans la console dans un format basé sur la presence dans le style `success`.

```typescript
presence.success("Test") // Cela va afficher "test" dans le bon style.
```

### `error(String)`

Affiche le message donné dans la console dans un format basé sur la presence dans le style `error`.

```typescript
presence.error("Test") // Cela va afficher "test" dans le bon style.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Retourne 2 `snowflake` timestamps dans un `Array` qui peut être utilisé pour `startTimestamp` et `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** Le `String` donnée dans querySelector est un exemple.

### `getTimestamps(Number, Number)`

Retourne 2 `snowflake` timestamps dans un `Array` qui peut être utilisé pour `startTimestamp` et `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** La `String` donnée dans querySelector est un exemple.

### `timestampFromFormat(String)`

Convertis un String dans le format ` HH:MM:SS`, `MM:SS` ou `SS` dans un Integer (Ne retourne pas de snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** La `String` donnée dans querySelector est un exemple.

## Interface `PresenceData`

L'utilisation de l'interface `PresenceData` est recommandée lorsque vous utilisez la méthode `setActivity()`.

Les variables de cette interface sont les suivantes, toutes sont optionnelles.

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
      <td style="text-align:left">Deuxième ligne de votre présence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Définit le temps actuel.<br>
        Utilisé si vous voulez afficher combien d'<code>heures:minutes:secondes</code> sont restantes.
          <br>Vous devez convertir votre <code>timestamp</code> ou vous obtiendrez un compte à rebours erroné.
      </td>
      <td style="text-align:left"><code>Numéros</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Définit la durée complète.
        <br>Utilisé si vous voulez afficher combien d'<code>heures:minutes:secondes</code> sont restante.
          <br>Vous devez convertir votre <code>timestamp</code> ou vous obtiendrez un compte à rebours erroné.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">clé d'image-grande</td>
      <td style="text-align:left">Définit le logo de la présence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">petite clé ImageKey</td>
      <td style="text-align:left">Définit la petite icône à côté du logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Texte de petite image</td>
      <td style="text-align:left">Définit le texte qui sera affiché à l'utilisateur quand il survolera la petite icône
.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "Mon titre",
  state: "Ma description",
  largeImageKey: "logo_service,
  smallImageKey: "petit_logo_service",
  smallImageText: "Vous m'avez survoler, et maintenant ?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
};
```

## Évènements

Les événements vous permettent de détecter et de gérer certains changements ou appels qui ont été effectués. Vous pouvez vous abonner aux événements en utilisant la méthode `on`.

```typescript
presence.on("UpdateData", async () => {
    // Faire quelque chose quand les données sont mises à jour.
});
```

Il y a peu d'événements disponibles:

#### `UpdateData`

Cet événement est déclenché chaque fois que la présence est mise à jour.

#### `iFrameData`

Déclenché lorsque des données sont reçues à partir du script iFrame.
