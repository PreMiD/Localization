---
title: Klasa Presence
description: Główna klasa dla każdej obecności PreMiD
published: true
date: 2020-02-12T22:31:07.195Z
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

#### `mediaKeys`

Ta właściwość mówi naszej aplikacji o rejestrowaniu skrótów klawiszowych dla kluczy multimedialnych i pozwala nam używać zdarzenia `MediaKeys` dla klasy `Presence`.

Ta właściwość nie jest wymagana, ale jeśli chcesz włączyć klucze multimedialne, powinieneś ustawić je na `true`.

**Wszystkie zdarzenia mediaKey są tymczasowo wyłączone!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // umożliwia użytkownikom używanie kluczy multimedialnych
});
```

## Metody

### `setActivity(presenceData, Boolean)`

Ustawia aktywność Twojego profilu zgodnie z podanymi danymi.

Pierwszy parametr wymaga interfejsu `presenceData` , aby uzyskać wszystkie informacje, które chcesz wyświetlić w profilu.

Drugi parametr definiuje, kiedy obecność jest odtwarzana czymś lub nie. Zawsze używaj `true` jeśli podasz znaczniki czasu w `obecnościDane`.

### `clearActivity()`

Czyści Twoją aktualną aktywność, skróty klawiszowe i tytuł zasobnika.

### `setTrayTitle(String)`

> Ta metoda działa tylko na Mac OS. 
> 
> {.is-warning}

Ustawia tytuł zasobnika na pasku menu.

### `getStrings(Obiekt)`

Pozwala na otrzymywanie przetłumaczonych ciągów z rozszerzenia. Musisz podać `Obiekt` z kluczem do ciągu, `klawiszowa wartość` jest wartością ciągu znaków. Część ciągów można znaleźć za pomocą tego punktu końcowego: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Zwraca `Playing` i `Paused` ciągi
// z rozszerzenia.
ciągi = oczekiwanie obecności.getStrings({
    odtwarzać: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Zwraca zmienną z witryny, jeśli istnieje.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // To będzie logować "Variable content"
```

## `obecnośćData` Interfejs

Interfejs `presenceData` jest zalecany do użycia, gdy używasz metody `setActivity()`.

Ten interfejs ma następujące zmienne, wszystkie są opcjonalne.

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
var presenceData: obecnośćDane = {
    szczegóły: "Mój tytuł",
    stan: "Mój opis",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Oszczędzasz mnie i co teraz? ,
    start Timestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Wydarzenia

Zdarzenia umożliwiają wykrycie i obsługę pewnych zmian lub połączeń, które zostały wykonane. Możesz subskrybować wydarzenia za pomocą metody `on`.

```typescript
obecność.on("UpdateData", async () => {
    // Zrób coś, gdy dane zostaną zaktualizowane.
});
```

Istnieje niewiele dostępnych wydarzeń:

#### `Aktualizuj dane`

To wydarzenie jest uruchamiane za każdym razem, gdy obecność jest aktualizowana.

#### `MediaKeys` (wyłączony)

Wystrzelony, gdy użytkownik używa kluczy multimedialnych na swojej klawiaturze, [kliknij tutaj](/dev/presence/class#mediakeys) , aby uzyskać więcej informacji o kluczach multimedialnych.

#### `iFrameData`

Wystrzelony, gdy dane są odebrane ze skryptu iFrame.