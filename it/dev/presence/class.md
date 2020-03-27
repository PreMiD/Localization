---
title: Classe Presenza
description: La classe principale per ogni presence PreMiD
published: true
date: 2020-02-12T22:29:36.095Z
tags: 
---

# Classe Presenza

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
      <th style="text-align:left">Variabile</th>
      <th style="text-align:left">Descrizione</th>
      <th style="text-align:left">Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">La prima linea nella tua presence, di solito è usata come titolo.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">La seconda linea nellla tua presence.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definisce il tempo corrente.<br>
        Utilizzato se vuoi mostrare quanti <code>hours:minutes:seconds</code> è rimasto.
          <br>Devi convertire il tuo tempo ad un <code>timestamp</code> altrimenti otterrai un conto alla rovescia sbagliato.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definisce la durata totale.
        <br>Utilizzato se vuoi mostrare quanti <code>hours:minutes:seconds</code> è rimasto.
          <br>Devi convertire il tuo tempo ad un <code>timestamp</code> altrimenti otterrai un conto alla rovescia sbagliato.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definisce il logo della presence.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Definisce la piccola icona vicina al logo della presence.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Definisce il testo che verrà mostrato all'utente quando posizionerà il puntatore sull'icona piccola.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "Il Mio Titolo",
    state: "La Mia Descrizione",
    largeImageKey: "logo_del_servizio",
    smallImageKey: "logo_del_servizio_piccolo",
    smallImageText: "Mi sei passato sopra, e ora?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Eventi

Gli Eventi ti permettono di vedere e controllare alcuni cambiamenti o chiamate che sono state fatte. Puoi sottoscriverti ad eventi utilizzando il metodo `on`.

```typescript
presence.on("UpdateData", async () => {
    // Fai qualcosa quando i dati vengono aggiornati.
});
```

Ci sono un po' di elementi disponibili:

#### `UpdateData`

Questo evento è lanciato ogni volta che la presnce viene aggiornata.

#### `MediaKeys` (disabilitato)

Lanciato quando un utente utilizza i tasti media sulla sua tastiera, [clicca qua](/dev/presence/class#mediakeys) per ottenere più informazioni riguardo i tasti media.

#### `iFrameData`

Lanciato quando i dati sono ricevuti da uno script iFrame.