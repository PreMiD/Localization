---
title: Třída přítomnosti
description: Hlavní třída pro každou přítomnost PreMiD
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# Třída přítomnosti

## Úvod

Třída `Presence` je velmi užitečná, protože má základní metody, které potřebujeme k vytvoření přítomnosti.

 Při vytváření třídy musíte zadat `klientské Id`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

Jsou k dispozici dvě vlastnosti pro `Presence` třídu.

#### `clientId`

Musí být poskytnuta vlastnost `klientských Id` , aby vaše přítomnost fungovala, protože používá ID vaší aplikace k zobrazení jejího loga a majetku.

Můžete to získat na stránce [aplikací](https://discordapp.com/developers/applications).

## Metody

### `setActivity(presenceData, Boolean)`

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> Tato metoda funguje pouze na Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Objekt)`

Allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getSetting(String)`
Returns value of setting.
```typescript
var setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `getExtensionVersion(Boolean)`
Returns version of the extension the user is using.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `přítomnostiData` Rozhraní

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Proměnná</th>
      <th style="text-align:left">Popis</th>
      <th style="text-align:left">Typ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Podrobnosti</td>
      <td style="text-align:left">První řádek v přítomnosti, obvykle používaný jako záhlaví.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">stav</td>
      <td style="text-align:left">Druhá linie v přítomnosti.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definuje aktuální čas.<br>
        Používá se, pokud chcete zobrazit, kolik <code>hodin:minut:sekund</code> zbývá.
          <br>Musíte převést svůj čas na <code>časové razítko</code> nebo dostanete špatný
          odpočítávání.
      </td>
      <td style="text-align:left"><code>Číslo</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definuje celou dobu trvání.
        <br>Používá se, pokud chcete zobrazit kolik <code>hodin:minut:sekund</code> zbývá.
          <br>Musíte převést svůj čas na <code>časové razítko</code> nebo dostanete špatný
          odpočítávání.
      </td>
      <td style="text-align:left"><code>Číslo</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definuje logo pro přítomnost.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Určuje malou ikonu vedle loga&apos;s.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Malý obrázek</td>
      <td style="text-align:left">Definuje text, který se zobrazí uživateli, když se dotkne malé ikony
.</td>
      <td style="text-align:left"><code>Řetězec</code>
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

## Události

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
