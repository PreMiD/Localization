---
title: Presence Klasse
description: De belangrijkste klasse voor elke PreMiD presence
published: true
date: 2019-10-06T23:18:10.415Z
tags:
---

# Presence Klasse

## Introductie

De `Presence` klasse is erg handig omdat deze over basismethoden beschikt die we nodig hebben om presence te creëren.

 Wanneer u een klasse aanmaakt, dient u de eigenschap `clientId` te specificeren.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Voorbeeld clientId
});
```

Er zijn twee eigenschappen beschikbaar voor `Presence` class.

#### `clientId`

`clientId` eigenschap moet worden verstrekt om uw presence te laten werken, omdat het uw applicatie id gebruikt om het logo en de assets weer te geven.

Je kunt het op je [applicatiepagina](https://discordapp.com/developers/applications) krijgen.

#### `mediaKeys`

Deze eigenschap vertelt onze app om sleutels te registreren voor mediaknoppen en stelt ons in staat `MediaKeys` event te gebruiken voor de `Presence` class.

Deze eigenschap is niet vereist, maar als je de mediaknoppen wilt inschakelen, moet je hem instellen op `true`.

**Alle mediaKey events zijn tijdelijk uitgeschakeld!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Staat gebruikers toe om media keys te gebruiken
});
```

## Methodes

### `setActivity(presenceData, Boolean)`

Stelt uw profielactiviteit in volgens de verstrekte gegevens.

De eerste parameter vereist een `presenceData` interface om alle informatie te krijgen die je wilt weergeven in je profiel.

Tweede parameter definieert wanneer presence iets afspeelt of niet. Gebruik altijd `true` als u timestamps verstrekt in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> This method works only on Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Object)`

Allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Beschrijving</th>
      <th style="text-align:left">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">The first line in your presence, usually used as header.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Second line in your presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Defines the current time.<br>
        Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Defines the full duration.
        <br>Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Defines the logo for the presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Defines the small icon next to presence&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Defines the text that will be shown to user when he will hover the small
        icon.</td>
      <td style="text-align:left"><code>String</code>
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

## Events

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `MediaKeys` (disabled)

Fired when user uses media keys on his keyboard, [click here](/dev/presence/class#mediakeys) to get more information about media keys.

#### `iFrameData`

Fired when data is received from iFrame script.