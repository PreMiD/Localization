---
title: Metadario
description: Contiene dati di base su Presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Se vuoi publicare una presence nello store e caricarla per mezzo dell'estensione, dovresti create il file `metadata.json` nella tua cartella `dist`.

An example of that file can be found below.

```typescript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

## Comprensione dei metadati

Questo esempio sembra davvero strano, eh? Non ti preoccupare, non è così difficile capire a cosa serve ogni variabile.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabile</th>
      <th style="text-align:left">Descrizione</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Opzionale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autore</b></td>
      <td style="text-align:left">Dovrebbe contenere un Oggetto con il <code>nome</code> e l'<code>id</code> del contributore. <code>name</code> is your Discord username without the identifier(#0000). L'id utente <code></code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo click destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Oggetto</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>collaboratori</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. <code>name</code> is your Discord username without the identifier(#0000). L'Id <code>dell'utente</code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo clic destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Schieramento&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>sì</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>servizio</b></td>
      <td style="text-align:left">Il titolo del servizio che supporta questa presenza.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left"><br>Destinato ad essere utilizzato per presences che hanno nomi diversi in lingue diverse (ad esempio Pokémon and 포켓몬스터).<br>Puoi anche usarlo per presences che hanno caratteri speciali in modo da non doverli digitare (ad esempio Pokémon e Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>descrizione</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. La tua descrizione deve avere valori di coppia chiave che indicano la lingua, e la descrizione in quella specifica lingua. Crea descrizioni con le lingue <i>che conosci</i>, i nostri traduttori modificheranno il file di metadati. Vedi la categoria per le lingue delle presence per una lista. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. Questo può solo essere usato come un array quando ci sono più di un url.</b></td>
      <td style="text-align:left"><code>Stringa, Schieramento&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Una stringa di espressione regolare usata per abbinare gli url.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versione</b></td>
      <td style="text-align:left">Versione della sua presenza.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link al servizio&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link alla tua miniatura di presenza.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>colore</b></td>
      <td style="text-align:left">Valore <code>#HEX</code>. Consigliamo di utilizzare un colore primario del servizio
        che la vostra presenza supporta.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b></td>
      <td style="text-align:left">Array con i tag, aiuteranno gli utenti a cercare la tua presenza sul sito.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Categoria</b></td>
      <td style="text-align:left">Una stringa utilizzata per rappresentare la categoria sotto la quale la presenza cade</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Definisce se <code>iFrame</code> sono usati</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Un selettore di espressione regolare che seleziona gli iframe da inserire.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Definisce se l'estensione debba leggere il registro.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Un array di settaggi che l'utente può cambiare</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
  </tbody>
</table>

## Espressioni regolari

Se vuoi imparare le espressioni regolari, ecco alcuni siti web.

#### Apprendimento

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Verifica

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Lingue della presenza

PreMiD è un servizio poliglotto, significa che ci sono una moltitudine di lingue coinvolte per collegare gli utenti in tutto il mondo. Un elenco completo di lingue può essere trovato con questo [endpoint API](https://api.premid.app/v2/langFile/list). To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## Impostazioni presenza
Configura le impostazioni interattive in modo che gli utenti possano personalizzare la presenza!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Introduzione

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Clonando il progetto

1. Apri un terminale e digita `git clone https://github.com/PreMiD/Localization`.
2. Scegli una cartella a tua scelta.
3. Aprilo nel tuo editor di codice.

##### Creating the file

1. Go into the `src` folder.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

##### Adding the strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Metodi

Utilizzare i seguenti metodi per ottenere informazioni sulle impostazioni nei file della presenza:
#### `getSetting(Stringa)`
Restituisce il valore dell'impostazione.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(Stringa)`
Nasconde l'impostazione data.
```typescript
presence.hideSetting("pdexID"); //Sostituisci pdexID con l'id dell'impostazione
```

#### `showSetting(Stringa)`
Mostra l'impostazione data (funziona solo se l'impostazione è stata precedentemente nascosta).
```typescript
presence.showSetting("pdexID"); //Sostituisci pdexID con l'id dell'impostazione
```

## Categorie di presence

Quando fai la tua presence, è necessario specificare una categoria in cui la presence rientra. Questo è un elenco compilato delle categorie che puoi usare.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Categoria</th>
      <th style="text-align:left">nome</th>
      <th style="text-align:left">Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Tutto ciò che riguarda anime, dai forum alle piattaforme di streaming video.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>giochi</b></td>
      <td style="text-align:left"><b>Giochi</b></td>
      <td style="text-align:left">Qualsiasi sito web che abbia contenuti relativi al gioco, come <code>Kahoot</code> o <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>musica</b></td>
      <td style="text-align:left"><b>Musica</b></td>
      <td style="text-align:left">Questi sono siti web che offrono contenuti musicali, che si tratti di streaming o download.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>social</b></td>
        <td style="text-align:left"><b>Social</b></td>
      <td style="text-align:left">Siti web utilizzati per la creazione e condivisione di contenuti o per la partecipazione ad altre forme di social networking.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Video</b></td>
        <td style="text-align:left"><b>Video & Dirette</b></td>
      <td style="text-align:left">Siti web che servono a fornire video e stream.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altro</b></td>
      <td style="text-align:left"><b>Altro</b></td>
      <td style="text-align:left">Tutto ciò che non rientra in una specifica categoria sopra elencata.</td>
    </tr>
  </tbody>
</table>

