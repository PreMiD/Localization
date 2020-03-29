---
title: Klasa Presence
description: Główna klasa dla każdej obecności PreMiD
published: tak
date: 2020-02-12T22:15:28.557Z
tags:
---

# Klasa Presence

## Wprowadzanie

Klasa `Presence` jest bardzo przydatna, ponieważ posiada podstawowe metody, których potrzebujemy do stworzenia obecności.

 Podczas tworzenia klasy musisz określić właściwość `ID klienta`.

```typescript
let obecność = nowa prezentacja({
    clientId: "514271496134389561" // Przykład klientId
});
```

Dla klasy `Presence` dostępne są dwie właściwości.

#### `clientId`

`clientId` musi być dostarczony, aby Twoja obecność działała, ponieważ używa identyfikatora aplikacji do wyświetlania logo i aktywów.

Możesz to uzyskać na [stronie aplikacji](https://discordapp.com/developers/applications).

## Metody

### `setActivity(presenceData, Boolean)`

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> Ta metoda działa tylko na Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Obiekt)`

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

## `obecnośćData` Interfejs

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Zmienna</th>
      <th style="text-align:left">Opis</th>
      <th style="text-align:left">Typ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">szczegóły</td>
      <td style="text-align:left">Pierwsza linia w twojej obecności, zazwyczaj używana jako nagłówek.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">województwo</td>
      <td style="text-align:left">Drugi wiersz w twojej obecności.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definiuje aktualny czas.<br>
        Używany, jeśli chcesz wyświetlić ile <code>godzin: minut: sekundy</code> pozostało.
          <br>Musisz przekonwertować swój czas na <code>znacznik czasu</code> lub otrzymasz złe
          odliczanie.
      </td>
      <td style="text-align:left"><code>Numer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Określa cały czas trwania.
        <br>Używane jeśli chcesz wyświetlić ile <code>godzin:minut:sekund</code> pozostało.
          <br>Musisz przekonwertować swój czas na <code>znacznik czasu</code> lub otrzymasz złe
          odliczanie.
      </td>
      <td style="text-align:left"><code>Numer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">duży klawisz mageImageKey</td>
      <td style="text-align:left">Określa logo obecności.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Mały klucz mageKey</td>
      <td style="text-align:left">Określa małą ikonę obok logo obecności&apos;s.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Mały tekst mageText</td>
      <td style="text-align:left">Definiuje tekst, który będzie wyświetlany użytkownikowi, gdy najeźmie małą ikonę
.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
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

## Wydarzenia

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `Aktualizuj dane`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
