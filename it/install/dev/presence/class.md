---
title: Presence Class
description: The main class for every PreMiD presence
published: vero
date: 2019-10-06T23:18:10.415Z
tags:
---

# Presence Class

## Introduzione

La classe `Presence` è molto utile poiché contiene i metodi di base di cui abbiamo bisogno per creare una presence.

 Quando crei una classe devi specificare la proprietà `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

Ci sono 2 proprietà disponibili per la classe `Presence`.

#### `clientId`

La Proprietà `clientId` deve essere inserita affinché la tua presence funzioni, perché utilizza l'id della tua applicazione per mostrare il logo e le risorse.

Puoi ottenerlo nella tua [pagina di applicazioni](https://discordapp.com/developers/applications).

#### `mediaKeys`

Questa proprietà dice alla nostra app di registrare le scorciatoie per i tasti media e ci permette di usare l'evento `MediaKeys` per la classe `Presence`.

Questa proprietà non è richiesta, tuttavia se vuoi abilitare i tasti media dovresti impostarla a `true`.

**Tutti gli eventi mediaKey sono temporaneamente disabilitati!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Allows users to use media keys
});
```

## Metodi

### `setActivity(presenceData, Boolean)`

Imposta l'attività del tuo profilo a seconda dei dati passati.

Il primo parametro necessita di un'intefaccia `presenceData` per ottenere tutte le informazioni che vuoi mostrare nel tuo profilo.

Il secondo parametro definisce quando la presence sta riproducendo qualcosa o no. Usa sempre `true` se passi informazioni sul tempo in `presenceData`.

### `clearActivity()`

Rimuove l'attività corrente, le scorciatoie da tastiera e il titolo del supporto.

### `setTrayTitle(String)`

> Questo metodo funziona solo su Mac OS. 
> 
> {.is-warning}

Imposta il titolo del supporto nella barra del menu.

### `getStrings(Object)`

Ti permette di ottenere linee di testo tradotte dall'estensione. Devi procurare un `Object` con le chiavi a stringhe, `keyValue` è il valore della stringa. Puoi trovare alcune linee di testo usando questo termine: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Ritorna le stringhe `Playing` e `Paused`
// dall'estensione.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Ritorna una variabile dal sito, se esiste.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Questo farà il log del "Contenuto della Variabile"
```

## Interfaccia `presenceData`

Si raccomanda di usare l'interfaccia `presenceData` quando si usa il metodo `setActivity()`.

Questa interfaccia ha le seguenti variabili, sono tutte opzionali.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Descrizione</th>
      <th style="text-align:left">Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">La prima linea nella tua presence, di solito è usata come titolo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">La seconda linea nellla tua presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definisce il tempo corrente.<br>
        Utilizzato se vuoi mostrare quanti <code>hours:minutes:seconds</code> hai trascorso.
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