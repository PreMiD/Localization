---
title: Klasa Presence
description: Główna klasa dla każdego presence PreMiD
published: true
date: 2021-02-26T20:42:26.910Z
tags:
editor: markdown
dateCreated: 2021-02-21T21:13:14.449Z
---

# Klasa Presence

## Wprowadzanie

Klasa `Presence` jest bardzo przydatna, ponieważ posiada podstawowe metody, których potrzebujemy do stworzenia Presence.

Podczas tworzenia klasy musisz określić właściwość `ID klienta`.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Example clientId
});
```

### Właściwości

Istnieją trzy właściwości dla klasy `Presence`.

#### `clientId`

This property is required to make your presence work, because it uses your application id to display its logo and assets. You can get it on your [applications page](https://discordapp.com/developers/applications).

#### `injectOnComplete`

When setting `injectOnComplete` to `true` the first `UpdateData` event for both the `presence.ts` and `iframe.ts` files will only be fired when the page has fully loaded.

#### `appMode`

When setting `appMode` to `true` and the presence were to send an empty `PresenceData`, the app will show the application (image and name) on the user's profile instead of nothing.

## Metody

### `getActivity()`

Returns a `PresenceData` object of what the presence is displaying.

### `setActivity(PresenceData | Slideshow, Boolean)`

Ustawia aktywność profilu zgodnie z podanymi danymi.

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

Drugi parametr określa, kiedy status jest aktywny lub nie. Zawsze używaj `true` jeśli podasz znaczniki czasu w `presenceData`.

### `clearActivity()`

Clears your current activity and the tray title.

### `setTrayTitle(String)`

> Ta metoda działa tylko na Mac OS. 
> 
> {.is-warning}

Ustawia tytuł zasobnika na pasku menu.

### `createSlideshow()`

Creates a new `Slideshow` class.

```typescript
const slideshow = presence.createSlideshow();
```

It is suggested to do this right after creating the `Presence` class:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Example clientId
  }),
  slideshow = presence.createSlideshow();
```

You can find the documentation for the `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(Object)`

Metoda asynchroniczna, która pozwala na otrzymywanie przetłumaczonych ciągów z rozszerzenia.

Musisz podać `Obiekt` z kluczami dla ciągu znaków, `keyValue` jest wartością ciągu znaków. A list of translated strings can be found at this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Zwraca ciągi znaków `Playing` i `Paused`
// z rozszerzenia.
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
// ID jest to ID ustawień wielojęzycznych.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // rezultat: Gra
const pauseString = strings.pause; // rezultat: Wstrzymana
```

### `getPageletiable(String)`

Zwraca zmienną ze strony internetowej, jeśli istnieje.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Zwraca wersję rozszerzenia, którego używa użytkownik.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Zwraca wartość ustawienia.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

Ukrywa podane ustawienie.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

Pokazuje podane ustawienie (działa tylko, jeśli ustawienie było już ukryte).

```typescript
presence.showSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `getLogs()`

Zwraca logi konsoli witryny.

```typescript
const logs = await presence.getLogs();
console.log(logs); // To będzie rejestrować ostatnie 100 logów (w array).
```

**Uwaga:** Wymaga `readLogs` na `true` w pliku `metadata.json`.

### `info(String)`

Prints the given message in the console in a format based of the presence in the `info` style.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Prints the given message in the console in a format based of the presence in the `success` style.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Prints the given message in the console in a format based of the presence in the `error` style.

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

## Interfejs `presenceData`

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

Ten interfejs posiada następujące zmienne, wszystkie są opcjonalne.

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
      <td style="text-align:left">details</td>
      <td style="text-align:left">Pierwsza linia w twoim Presence, zazwyczaj używana jako nagłówek.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Drugi wiersz w twoim Presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definiuje aktualny czas.<br>
        Używany, jeśli chcesz wyświetlić ile <code>godzin:minut:sekund</code> pozostało.
          <br>Musisz skonwertować swój czas na <code>znacznik czasu</code> albo otrzymasz zły sposób
          odliczania.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Określa cały czas trwania.
        <br>Używane jeśli chcesz wyświetlić ile <code>godzin:minut:sekund</code> pozostało.
          <br>Musisz skonwertować swój czas na <code>znacznik czasu</code> albo otrzymasz zły sposób
          odliczania.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Określa logo presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Określa małą ikonę obok logo presence</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Definiuje tekst, który będzie wyświetlany użytkownikowi, gdy najedzie na małą ikonę.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
        <tr>
      <td style="text-align:left">buttons</td>
      <td style="text-align:left">Tablica przycisków, maksymalnie 2, label to tekst przycisku, url jest linkiem.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
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
  endTimestamp: 1564444634734,
  buttons: [
    {
            label: "Test button1",
            url: "https://premid.app/"
        },
        {
            label: "Test button2",
            url: "https://premid.app/contributors"
        }
    ]
};
```

## Events

Zdarzenia umożliwiają wykrycie i obsługę pewnych zmian lub połączeń, które zostały wykonane. Możesz subskrybować wydarzenia za pomocą metody `on`.

```typescript
presence.on("UpdateData", async () => {
  // Do something when data gets updated.
});
```

Dostępnych jest kilka wydarzeń:

#### `UpdateData`

To wydarzenie jest uruchamiane za każdym razem, gdy status jest aktualizowany.

#### `iFrameData`

Wystrzelony, gdy dane są odebrane ze skryptu iFrame.
