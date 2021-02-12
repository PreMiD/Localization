---
title: Tilstedeværelses Utvikling
description:
published: true
date: 2021-02-07T17:11:34.449Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Alle posisjoner er nå lagret her: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versjon `2.x` introduserer [nåværende butikk](https://premid.app/store). Brukere har nå muligheten til å manuelt legge til og fjerne deres favorittuttrykk gjennom brukergrensesnittet [nettstedet](https://premid.app/).

> Før du begynner er det sterkt anbefalt å se på våre retningslinjer for nærvær. 
> 
> {.is-warning}

- [Retningslinjer](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Struktur

All tilstedeværelse er kodet i [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) har noen ekstra krydderdefinisjoner over JavaScript, så det er enklere å fikse og identifisere feil.

## Installasjon

1. Installer [Git](https://git-scm.com/).
2. Installer [Node](https://nodejs.org/en/) (følger med [npm](https://www.npmjs.com/)).
3. Installer [TypeScript](https://www.typescriptlang.org/index.html#download-links) (åpne en terminal og `npm install -g typescript`).

## Lukker prosjektet

1. Åpne en terminal og skriv `git clone https://github.com/PreMiD/Presences`.
2. Velg en mappe for ditt valg.
3. Åpne i kodeeditoren din.

## Oppretting av mapper og filer

1. Gå i `nettsider` mappen og gå deretter inn i mappen med den første bokstaven **navn** (ikke en URL) i tjenesten du vil støtte.
2. Lag en mappe med **navnet** (ikke en URL) av tjenesten du vil støtte.
3. Opprett en `forhåndspresence.ts` og en `tsconfig.json` fil inni.
4. Lag en mappe kalt `dist` inni mappen.
5. Lag en `metadata.json` fil inni `dist` mappen.

## Fyll inn tsconfig.json filen

Vennligst put den følgende koden inni `tsconfig.json` filen.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

For å lære mer om TypeScript konfigurasjon klikk [her](/dev/presence/tsconfig).

## Fyll inn metadata.json filen

Vi har laget en `metadata.json` filutviklingsansvarlig for late repos [her](https://eggsy.xyz/projects/premid/mdcreator). Det er fremdeles foreslått å lese dette gjennom, slik at du vet hvordan det fungerer.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
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

Kopier koden ovenfor og legg den i `metadata.json` -filen. Nå må du endre verdiene for egenskapene. Merk at følgende egenskaper er valgfrie for i dine `metadataer. sønn` -fil, hvis du ikke planlegger å bruke dem, må du fjerne dem.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Klargjør noen verdi-forhåndsinnstillinger:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Beskrivelse</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Valgfritt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Bør inneholde et objekt med <code>navnet</code> og <code>id</code> av tilstedeværelsesutvikleren. <code>navnet</code> er ditt Discord brukernavn uten identifikator(#0000). Bruker <code>-id</code> kan kopieres fra Discord ved å aktivere utvikler
        -modus og høyre-klikke på profilen din.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Bør inneholde et objekt med <code>navnet</code> og <code>id</code> av tilstedeværelsesutvikleren. <code>navnet</code> er ditt Discord brukernavn uten identifikator(#0000). Bruker <code>-id</code> kan kopieres fra Discord ved å aktivere utvikler
        -modus og høyre-klikke på profilen din.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Tittelen på tjenesten som denne tilstedeværelsen støtter.<br>
      (Bruk ikke samme navn som mappen hvor alt er in)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Kan søke i søket med et alternativt navn.<br>
      Meant to be used for presences that have different names in different languages (e.g. Poke″mon og ε″″″″″εεεεεεεε″″)<br>
      Du kan også bruke den for trykk som har spesialtegn så du ikke trenger å skrive den inn (e.. Pokes mon og Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Liten beskrivelse av tilstedeværelse, du kan bruke beskrivelsen av tjenesten hvis du er ute av ideer. Beskrivelsen må ha nøkkelpar-verdier som viser språket og beskrivelsen på det bestemte språket. Gjør beskrivelser med språkene <i>som du vet</i>, da vil oversettere våre gjøre endringer i metadatafilen din.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL-adressen til tjenesten.<br><b>Eksempel:</b><code>vk. om</code><br>
      <b>Denne nettadressen må samsvare med nettadressen til nettstedet for å finne ut om dette er nettstedet som skal injisere skriptet til.</b><br> Dører <b>IKKE</b> legg til <code>https://</code> eller <code>http://</code> inni nettadressen eller en skråstrek bakfra:
      <code>https://premid. pp/</code> -> <code>formidt. pp</code><br>
      <b>merknad</b>: Noen nettadresser kan ha <code>www.</code> eller noe annet foran domenet. IKKE <b></b> glem å legge til!<br>
      Du kan legge til flere nettadresser ved å gjøre følgende:<br>
      <code>["URL1", "URL2", "ETC]</code><br>
      Du kan også bruke regExp også kjent som Regex for denne aktiviteten, står nærmere utsagn.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">En vanlig uttrykkstreng som brukes til å matche nettadresser.<br>
      regExp eller også kjent som Regex, kan brukes hvis et nettsted har flere underdomener.<br>
      Du kan bruke følgende regExp for følgende:<br>
      <code>([a-z0-9]+)[.]domenet[.]TLD"</code><br>
      TLD stående for domenet på toppnivå: . om .net (men ikke gå inn i prikken).<br>
      <code>([a-z0-9]+)</code> betyr hva som helst fra en til z og fra 0 til 9.<br>
      Du kan få en rask start ved å se denne <a href="https://youtu.be/sXQxhojSdZM">videoen</a><br>
      Du kan teste din regExp på <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Versjon av ditt nærvær.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Lenke til tjeneste&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Kobling til ditt nærings miniatyrbilde.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> verdi. Vi anbefaler å bruke en primærfarge på tjenesten
        som ditt nærings støtter dette.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Liste over tagger, som vil hjelpe brukere med å søke etter din tilstedeværelse på nettstedet.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">En strengstreng som brukes til å representere kategorien faller inn under innholdet. Se gyldige gnagere <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">her</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nei</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Definerer om <code>iFrames</code> brukes.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">En vanlig uttrykksvelger som velger ut iframes for å injisere i. Se regExp for mer info.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Angir om utvidelsen skal lese logger.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">En liste med innstillinger som brukeren kan endre.<br>
      Les mer om innstillinger for tilstedeværelse <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">her</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
  </tbody>
</table>

Vi har laget en `metadata.json` filutviklingsansvarlig for late repos [her](https://eggsy.xyz/projects/premid/mdcreator).

## Komme i gang

```typescript
const presence = new Presence({
    clientId: "000000000000" ////klient-ID opprettet på https://discordapp. om/developers/applications
  }),
  strenger = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback. aused"
    ///Du kan bruke dette for å få oversatte strenger i nettleserspråket
  });

/*

funksjon myOutsideHeavyLiftingFunction(){
    ///Grab og behandle alle dataene dine her

    // elementgrab //
    / api kaller //
    // variabel set //
}

settInterval(myOutOutOutOutOutyLiftingFunction, 10000);
//Kjør funksjonen atskilt fra UpdateData eventet, hvert 10. sekund for å få og velge variablene som UpdateData plukker opp

*/

trykk. n("UpdateData", async () => {
  /*UpdateData skyter alltid, og bør derfor brukes som din oppdateringssyklus, eller `tick`. Dette kalles flere ganger så langt.

    Det anbefales å sette opp en annen funksjon utenfor denne hendelsesfunksjonen, som vil endre variable verdier og det tunge løft hvis du ringer data fra en API. /

  presenceData: PresenceData = {
    largeImageKey:
      "key" /*Nøkkelen (filnavn) på det store bildet for pressen. Dette blir lastet opp og navngitt i Rich Presence delen av applikasjonen din, kalt Art Assets*/,
    small ImageKey:
      "key" /*The key (file name) of the Large Image on the presence. Dette er lastet opp og heter i Rich Presence delen av programmet, kalt Kunstressurser */,
    liten ImageText: "Some hover text", //Teksten som vises når du hovrer over det lille bildet
    detaljer: "Sursing Page Name", //The upper section of the presence text
    state: "Lese avsnitt A", //Nedre del av tilstedeværelse tekst
    startTimestamp: 1577232000, /unix epoch tidsstempel for når du skal begynne å telle fra
    tidsstempel: 1577151472000 //Hvis du vil vise Tid Venstre i stedet for Elapsed, dette er unix epoch tidsstempel der tidtakeren slutter
  }; /*Eventuelt kan du angi en storgeImageKey her og endre resten som variabler underegenskaper, for eksempel presenceSata. ype = "blahblah"; skriv eksempler: detaljering, tilstand etc.*/

  hvis (tilstedeværelseData. etails == null) {
    /Dette vil fyre hvis du ikke angir tilstedeværelsesdetaljer
    trykk. etTrayTitle(); //Clears dekselets tittel for mac brukere
    tilstedeværelse. etAktivitet (); /*oppdater tilstedeværelsen uten data, derfor tømmer den og gjør det store bildet til Discord applikasjonsikonet, og teksten Discord applikasjonsnavn*/
  } else {
    ///Dette vil skyte hvis du setter inn detaljer om tilstedeværelsen
    presse. etActivity(presenceData); //Oppdater tilstedeværelsen med alle verdiene fra presenceData-objektet
  }
});
```

Du kan kopiere dette til din `forhåndsinnstilling. ts` fil og endre verdiene. Å angi alle verdiene er ferdig inne i data hendelsen.

For eksempler foreslår vi å se på pressekoden som: 1337x eller 9GAG. For mer informasjon om `Presence` klassen [her](/dev/presence/class).

Siden v2.2. det er nå Slideshows, dette lar deg vise flere `PresenceData` grensesnitt på et intervall, for mer informasjon klikk om `Slideshow` klasse [her](/dev/presence/slideshow).

## Kan ikke hente bestemte data?!

Mange nettsteder bruker [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Disse html kodene kan inneholde flere kilder, som videoer. Men de er ikke relevante hver gang. Noen er skjult eller kun aktivt brukt. Sjekk om du kan hente informasjonen du trenger, uten dem før du gjør unødvendig arbeid.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:

1. Lag en `iframe.ts` fil.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Making your presence file receive data from the iFrame file.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Note:** This needs to be placed outside of the updateData event.

## Compiling

Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Loading the presence

1. Open the extension popup in the browser and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things

## Hot-reloading

The website you are developing on is automatically reloading every time you save a file in your folder.

## Feilsøking

- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Files explained

- [Presence Klasse](/dev/presence/class)
- [Slideshow Class](/dev/presence/slideshow)
- [iFrame Klasse](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig ""){.links-list}
