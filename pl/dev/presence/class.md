---
title: Klasa Presence
description: Główna klasa dla każdej obecności PreMiD
published: tak
date: 2020-04-08T19:33:34.075Z
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

`clientId` musi być dostarczony, aby Twój status działał, ponieważ używa identyfikatora aplikacji do wyświetlania logo i aktywów.

Możesz to uzyskać na [stronie aplikacji](https://discordapp.com/developers/applications).

## Metody

### `setActivity(presenceData, Boolean)`

Ustawia aktywność profilu zgodnie z podanymi danymi.

Pierwszy parametr wymaga interfejsu `presenceData`, aby uzyskać wszystkie informacje, które chcesz wyświetlić w profilu.

Drugi parametr określa, kiedy status jest aktywny lub nie. Zawsze używaj `true` jeśli podasz znaczniki czasu w `presenceData`.

### `clearActivity()`

Usuwa obecną aktywność, skróty klawiszowe i tytuł zasobnika.

### `setTrayTitle(String)`

> Ta metoda działa tylko na Mac OS. 
> 
> {.is-warning}

Ustawia tytuł zasobnika na pasku menu.

### `getStrings(Obiekt)`

Pozwala na otrzymywanie przetłumaczonych ciągów z rozszerzenia. Musisz podać `Obiekt` z kluczami dla ciągu znaków, `keyValue` jest wartością ciągu znaków. Część ciągów można znaleźć za pomocą tego linku: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Zwraca ciągi znaków `Playing` i `Paused`
// z rozszerzenia.
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
Zwraca wersję rozszerzenia, którego używa użytkownik.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Loguje 210
var version = presence.getExtensionVersion(false);
console.log(version); // Loguje 2.1.0
```

### `getPageLetiable(String)`

Zwraca zmienną ze strony internetowej, jeśli istnieje.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // To będzie logować "zawartość zmiennej"
```

## Interfejs `presenceData`

Interfejs `presenceData` jest zalecany do użycia, gdy używasz metody `setActivity()`.

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

Zdarzenia umożliwiają wykrycie i obsługę pewnych zmian lub połączeń, które zostały wykonane. Możesz subskrybować wydarzenia za pomocą metody `on`.

```typescript
presence.on("UpdateData", async () => {
    // Zrób coś, gdy dane zostaną zaktualizowane.
});
```

Dostępnych jest kilka wydarzeń:

#### `Aktualizuj dane`

To wydarzenie jest uruchamiane za każdym razem, gdy status jest aktualizowany.

#### `iFrameData`

Wystrzelony, gdy dane są odebrane ze skryptu iFrame.
