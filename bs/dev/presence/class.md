---
title: Klasa prisutnosti
description: The main class for every PreMiD presence
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Klasa prisutnosti

## Uvod

Klasa `Prisutnost` je vrlo korisna jer ima osnovne metode koje su nam potrebne za stvaranje prisutnosti.

 Kada kreirate klasu morate navesti svojstvo `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

Postoje dvije osobine za klasu `Prisutnost`.

#### `clientId`

Vlasništvo `clientId` mora vam biti omogućeno da vaše prisustvo radi, jer on koristi vaš Id aplikacije za prikaz logotipa i assets.

Možete ga dobiti na stranici s

aplikacijama<0>.</p> 



## Metode



### `getActivity()`

Vraća objekt `presenceData` onoga što presence prikazuje.



### `setActivity(presenceData, Boolean)`

Postavlja vašu aktivnost na profilu u skladu s dobivenim podacima.

Prvi parametar zahtijeva interfejs `presenceData` da biste dobili sve informacije koje želite prikazati na svom profilu.

Drugi parametar definira kada prisutnost nešto svira ili ne. Uvek koristite `true` ako navedete vremenske oznake u `presenceData`.



### `clearActivity()`

Brisanje trenutne aktivnosti, veza tipki i naslova ladice.



### `setTrayTitle(String)`



> This method works only on Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.



### `getStrings(Object)`

Asinhrona metoda koja vam omogućuje da dobijete prevedene žice iz proširenja. Morate osigurati `Object` s ključevima koji su ključ za niz, `keyValue` je vrijednost niza. Kompilacija prevedenih nizova može se pronaći pomoću ove krajnje točke: `https://api.premid.app/v2/langFIle/extension/en`



```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```




### `getPageletiable(String)`

Vraća varijablu sa web stranice ako postoji.



```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
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




## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Deskripcija</th>
      <th style="text-align:left">Tip</th>
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



#### `iFrameData`

Fired when data is received from iFrame script.
