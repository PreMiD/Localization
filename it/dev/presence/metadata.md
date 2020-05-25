---
title: Metadario
description: Contiene dati di base su Presence
published: vero
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadario

Se vuoi publicare una presence nello store e caricarla per mezzo dell'estensione, dovresti create il file `metadata.json` nella tua cartella `dist`.

L'esempio di quel file può essere trovato di seguito.

```javascript
{
  "author": {
    "name": "UTENTE",
    "id": "ID"
  },
  "contributors": [{
    "name": "UTENTE",
    "id": "ID"
  }],
  "service": "SERVIZIO",
  "description": {
    "en": "DESCRIZIONE"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSIONE",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORIA",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "TITOLO MOSTRATO",
            "icon": "ICONA GRATUITA DI FONTAWESOME",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "TITOLO MOSTRATO",
            "icon": "ICONA GRATUITA DI FONTAWESOME",
            "value": "\"%song%\" di %artist%",
            "placeholder": "usa %song% oppure %artist%"
        },
        {
            "id": "ID",
            "title": "TITOLO MOSTRATO",
            "icon": "ICONA GRATUITA DI FONTAWESOME",
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
      <td style="text-align:left"><b>autore</b>
      </td>
      <td style="text-align:left">Dovrebbe contenere un oggetto con <code>nome</code> e <code>id</code> dello sviluppatore presenza. Il nome utente di Discord è senza identificatore(#0000). L'id utente <code></code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo click destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Oggetto</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>collaboratori</b>
      </td>
      <td style="text-align:left">Dovrebbe contenere un Oggetto con il <code>nome</code> e l'<code>id</code> del contributore. Il nome utente di Discord è senza identificatore(#0000). L'id utente <code></code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo click destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Schieramento&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>servizio</b>
      </td>
      <td style="text-align:left">Il titolo del servizio che supporta questa presenza.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>descrizione</b>
      </td>
      <td style="text-align:left">Breve descrizione della presenza, puoi usare la descrizione del servizio
        se non hai idee. La tua descrizione deve avere valori di coppia chiave che indicano la lingua, e la descrizione in quella specifica lingua. Crea descrizioni con le lingue <i>che conosci</i>, i nostri traduttori modificheranno il file di metadati. Vedi la categoria per le lingue delle presence per una lista. </td>
      <td style="text-align:left"><code>Oggetto</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b>
      </td>
      <td style="text-align:left">URL del servizio.<br><b>Ad Esempio:</b><code>vk.com</code><br><b>Questo url deve essere uguale a quello del sito siccome verrà utilizzato per controllare se lo script deve essere iniettato in questo sito. Questo può solo essere usato come un array quando ci sono più di un url.</b>
      </td>
      <td style="text-align:left"><code>Stringa, Schieramento&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Una stringa di espressione regolare utilizzata per abbinare gli url.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versione</b>
      </td>
      <td style="text-align:left">Versione della sua presenza.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link al servizio&apos;s logotype.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link alla tua miniatura di presenza.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>colore</b>
      </td>
      <td style="text-align:left">Valore <code>#HEX</code>. Consigliamo di utilizzare un colore primario del servizio
        che la vostra presenza supporta.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b>
      </td>
      <td style="text-align:left">Array con i tag, aiuteranno gli utenti a cercare la tua presenza sul sito.</td>
      <td
      style="text-align:left"><code>Stringa, Schieramento&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Categoria</b>
      </td>
      <td style="text-align:left">Una stringa utilizzata per rappresentare la categoria sotto la quale la presenza cade</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Definisce se <code>iFrame</code> sono usati</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Un selettore di espressione regolare che seleziona gli iframe da inserire.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>impostazioni</b>
      </td>
      <td style="text-align:left">Un array di settaggi che l'utente può cambiare</td>
      <td style="text-align:left"><code>Schieramento&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
  </tbody>
</table>

## Espressioni regolari

Se vuoi imparare le espressioni regolari, ecco alcuni siti web.

#### Apprendimento

• [Video iniziale rapido](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Informazioni sulle espressioni regolari](https://www.regular-expressions.info/tutorial.html)

#### Verifica

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Lingue della presenza

PreMiD è un servizio poliglotto, significa che ci sono una moltitudine di lingue coinvolte per collegare gli utenti in tutto il mondo. Un elenco completo di lingue può essere trovato con questo [endpoint API](https://api.premid.app/v2/langFile/list).

## Impostazioni presenza
Configura le impostazioni interattive in modo che gli utenti possano personalizzare la presenza!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //Boolean value will make it an on/off switch with the value as the default value
        },
        {
            "id": "ID",
            "if": {
                "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
            "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Default value of the selector
            "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
        }
    ]
```

Use the following methods to get settings info in your presence files:
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

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>giochi</b></td>
    <td style="text-align:left"><b>Giochi</b></td>
      <td style="text-align:left">Qualsiasi sito web che abbia contenuti relativi al gioco, come <code>Kahoot</code> o <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>musica</b></td>
    <td style="text-align:left"><b>Musica</b></td>
      <td style="text-align:left">Questi sono siti web che offrono contenuti musicali, che si tratti di streaming o download.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>social</b></td>
        <td style="text-align:left"><b>Social</b></td>
      <td style="text-align:left">Siti web utilizzati per la creazione e condivisione di contenuti o per la partecipazione ad altre forme di social networking.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Video</b></td>
        <td style="text-align:left"><b>Video & Dirette</b></td>
      <td style="text-align:left">Siti web che servono a fornire video e stream.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altro</b></td>
    <td style="text-align:left"><b>Altro</b></td>
      <td style="text-align:left">Tutto ciò che non rientra in una specifica categoria sopra elencata.</td>
      </td>
    </tr>
  </tbody>
</table>