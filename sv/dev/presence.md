---
title: Närvaro Utveckling
description: 
published: true
date: 2020-02-16T14:22:09.371Z
tags: 
---

> Alla närvaron lagras nu här: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Version `2.x` introducerar [närvarobutik](https://premid.app/store). Användare har nu möjlighet att manuellt lägga till och ta bort sina favoritnärvaron genom användargränssnittet på [webbplats](https://premid.app/).

# Riktlinjer
> Om du inte följer alla riktlinjer, kommer din närvaro eller dra begäran tas bort från github. 
> 
> {.is-danger}

## Skapande

Innan du börjar arbeta på din närvaro, håll följande lista i åtanke.
- Dra begäran måste vara komplett, måste du ha en korrekt filstruktur. Inklusive `dist` mapp, `presence.js` fil, och `metadata.json` fil.
- Närvaron **måste** vara relaterad till den webbplats du har valt.
- Närvaron får inte vara av olagliga webbplatser. Dessa inkluderar stressorer, droger, barnporr, etc...
- Metadata för närvaro måste ha välskrivet innehåll, inklusive giltiga titlar och beskrivningar.
- De medier du inkluderar (ikon/miniatyrbild) måste vara relaterade till webbplatsen och bör vara förståeliga när det gäller storlek och kvalitet.
- Filstrukturen måste vara ren och hanterad, har inte slumpmässiga filer som inte ger något till närvarons funktion.
- Närvaron **får inte** ha några skadliga avsikter. Dessa inkluderar att stjäla/läcka privat information, negativt påverka beteendet på webbplatsen, etc...
- Om du planerar en närvaro för en webbplats och webbplatsen råkar förändras i framtiden, du **ÄR** ansvarig för att uppdatera närvaron igen för att fungera som förväntat. Om du inte fixar det inom en acceptabel tidsram, andra närvaroutvecklare får **skriva över** din närvaro för att följa ändringarna.
- Närvaron måste testas innan publicering för att bekräfta att allt fungerar som förväntat.
- Din närvaro måste ha SFW-bilder och beskrivningar oavsett om det är NSFW eller inte. Om din närvaro handlar om en `nsfw` webbplats, vänligen lägg till taggen `nsfw` till din metadata.
- Din närvaro får **INTE** vara gratis domäner eller värdar (t.ex. .TK, [alla fria Freenom domäner], . F.GD, etc...), undantag kan göras om ett bevis presenteras som visar att det är en betald domän.
- Fälten `smallImageKey` och `smallImageText` är avsedda att tillhandahålla ytterligare / sekundära sammanhang (såsom "spelar"/"pausade" för video webbplatser, "bläddra" efter vanliga webbplatser och andra fall). Du får inte marknadsföra Discord-profiler eller något som inte är relaterat till PreMiD.
- Kraven på logotyper är 1:1 (Square) i 512px, dock miniatyrer, bör antingen vara [breda kampanjkort](https://i.imgur.com/3QfIc5v.jpg) eller helt enkelt [skärmdumpar](https://i.imgur.com/OAcBmwW.png) om den första inte är tillgänglig.
- Närvaron bör åtminstone ha 1 tagg, detta är ett krav av design och kan vara valfritt i framtiden.
- Fältet `url` får inte innehålla `http://` eller `https://`, varken parametrarna (t.ex. en närvaro för `https://www.google.com/search?gws_rd=ssl` kommer endast att ha `www.google.com` i `url` fältet).
- Beskrivningar och taggar bör alltid vara i arrayer, även när det bara är ett element. Fältet `url` bör dock bara vara en sträng om det är en domän.
- Instabila webbplatser som ständigt ändrar API/domäner, randomisera HTML-element eller bara vara i tung utveckling är inte tillåtet och kommer att tas bort från butiken.

## Modifiering

I vissa situationer, närvaro kan bete sig oväntat eller kan använda några mindre förändringar för att förbättra sin funktionalitet. Här är en sammanställd lista som du måste följa för att ändra närvaron.
- Du har inte tillåtelse att ändra skaparen av närvaron. Detta gäller endast om du får skriva om det. Du kan lägga till dig själv som [bidragsgivare](/dev/presence/metadata).
- Se till att ändringarna är användbara. Dessa kan innehålla rättelser (kod och skrivfel), tillägg (beskrivningar och taggar), etc...
- Bekräfta att dina ändringar fungerar innan publicering. Skapa inga pull-förfrågningar utan att veta resultatet av dina ändringar.
- Skriv inte om/om en närvaro helt om inte en `Presence Verifier` eller personalmedlem tillåts.

# Verifiering
> När du gör pull-förfrågningar om att lägga till eller ändra befintliga närvaron, måste du inkludera en skärmdump. Ändringar av en närvaros metadata/tsconfig kräver dock inte en skärmdump. *Din skärmdump måste laddas upp direkt till github med pull-begäran, använd inte webbplatser för bilddelning från tredje part.* 
> 
> {.is-danger}

För att din närvaro ska nå butikerna måste den gå igenom en process på github för att bekräfta att den fungerar som förväntat. Här är ett par saker att hålla utkik efter när du gör din pull-förfrågan.

Vårt närvaroverifieringsteam har sin egen roll, håll utkik efter `Presence Verifier` på discord-servern för att veta vem som är inblandad.

1. Det krävs två verifierare för att bekräfta att din närvaro håller måttet. Om du råkar få ändra förfrågningar, gör rätt ansträngningar för att fixa det annars kommer det inte att läggas till.
2. Om vi begär ändringar och din Pull Request överskrider **7 dagars inaktivitet** utan att göra de nödvändiga, vi tvingas stänga den.
3. Du får ta skärmdumpar av ändringar som gjorts med hjälp av en annan användare. (t.ex. dess författare om du inte har tillgång till den av någon anledning).
4. Om det är en uppdatering eller patch måste skärmdumpen visa de nya tillägg som fungerar, inte några gamla funktioner från tidigare pull-förfrågningar.
5. De medföljande skärmdumparna bör vara verkliga, inte redigerade.
6. Alla medverkande koder som slås samman till detta förråd kommer att licensieras under **Mozilla Public License 2.0**.


Efter att alla korrekta recensioner har uppfyllts kommer din pull-förfrågan att slås samman med butiken.

# Struktur (TypeScript)
Du kan välja om du vill koda din Presence med [JavaScript](https://www.javascript.com/) eller  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) har några extra kryddiga typdefinitioner, så fastställande och identifiering av buggar är mycket lättare. Om du bara vill använda [JavaScript](https://www.javascript.com/) kan du hoppa till [Struktur (JavaScript)](/dev/presence#structure-javascript).

## Installation
1. Install [Git](https://git-scm.com/).
2. Installera [Nod](https://nodejs.org/en/) (levereras med [npm](https://www.npmjs.com/)).
3. Installera [TypeScript](https://www.typescriptlang.org/index.html#download-links) (öppna en terminal och `npm install -g typescript`).

## Klonar projektet
1. Öppna en terminal och skriv `git clone https://github.com/PreMiD/Presences`.
2. Välj en mapp som du väljer.
3. Öppna den i din kodredigerare.

## Skapa mappar och filer

1. Skapa en mapp med **namnet** (inte en URL) för tjänsten du vill stödja.
2. Skapa en `presence.ts` och en `tsconfg.json` fil inuti.
3. Skapa en mapp som heter `dist` inuti.
4. Skapa en `metadata.json` -fil i mappen `dist`.

## Fyllning i tsconfig.json filen

Vänligen ange följande kod i `tsconfg.json` -filen.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
För att läsa mer om TypeScript konfigurationen klicka [här](/dev/presence/tsconfig).

## Fyller i metadata.json filen

Klicka [här](/dev/presence#filling-in-the-metadatajson-file-2) för att se hur du fyller i den. Du kommer att kunna enkelt klicka tillbaka längst ner i förklaringen.

Vi har gjort en `metadata.json` fil skapare för lata peeps [här](https://eggsy.codes/projects/premid/mdcreator).

## Komma igång

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp. om/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
}),

strängar = presence. etStrings({
    play: "presence.playback.playing",
    paus: "presence.playback. aused"
    //You kan använda detta för att få översatta strängar
});

/*

funktion myOutsideHeavyLiftingFunction(){
    //Grab och bearbeta alla dina data här

    // element griper //
    // api samtal //
    // variabelset //
}

setInterval(10000, myOutsideHeavyLiftingfunktion); 
//Kör funktionen separera från UpdateData-händelsen var 10:e sekund för att få och ställa in de variabler som UpdateData plockar upp

*/


närvaro. n("UpdateData", async () => {
    /*UpdateData avfyrar alltid, och bör därför användas som din uppdateringscykel eller `tick`. Detta kallas flera gånger en sekund där det är möjligt.

    Det rekommenderas att ställa in en annan funktion utanför denna händelsefunktion som kommer att ändra variabla värden och göra tunga lyft om du anropar data från ett API. /

    var presenceData = {
        largeImageKey: "key", /*Nyckeln (filnamn) till den stora bilden vid närvaro. Dessa laddas upp och namnges i avsnittet Rich Presence i din ansökan, kallad Art Assets*/
        smallImageKey: "key", /*Nyckeln (filnamn) för den stora bilden på närvaron. Dessa laddas upp och namnges i avsnittet Rich Presence i din ansökan, kallad Art Assets*/
        smallImageText: "Lite svävartext", //Den text som visas när du svävar över den lilla bilden
        detaljer: "Bläddra sidnamn", //Den övre delen av närvarotexten
        ange: "Läsavsnitt A", //Den nedre delen av närvarotexten
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show time left instead of Elapsed, detta är unix epok tidsstämpel där timern slutar
    }; /*Alternativt kan du ställa in en stor ImageKey här och ändra resten som variabla underegenskaper, till exempel närvaroSata. ype = "blahblah"; skriv exempel: detaljer, stat, etc.*/

    om (presenceData. etails == null) {
        //This will fire if you do not set presence details
        presence. (Automatic Copy) etTrayTitle(); //Rensar brickans titel för Mac-användare
        närvaro. etActivity() /*Uppdatera närvaron utan data, rensa den och gör den stora bilden till Discord-programikonen, och texten Discords programnamn*/
    } annat {
        //This will fire if you set presence details
        presence. etActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
Du kan kopiera detta till din `presence.ts` fil och redigera värden. Ställa in alla värden görs inne i updataData händelsen.

För exempel föreslår vi att titta på koden för närvaron som: 1337x eller 9GAG.

För mer information om Presence-klassen klicka [här](/dev/presence/class).

## Kan inte hämta vissa data?!

Många webbplatser använder [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Dessa html-taggar kan innehålla flera källor såsom videor. Men de är inte relevanta varje gång. Vissa är dolda eller bara inte används aktivt. Kontrollera om du kan extrahera den information du behöver, utan dem innan du gör onödigt arbete.

1. Kontrollera dem via webbläsarkonsolen (se till att du är på fliken **Elements**-).
2. Sök (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) eller <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Utför `document.querySelectorAll("iframe")`.

Om du upptäcker att dina uppgifter finns i en iFrame måste du göra följande:
1. Skapa en `iframe.ts` fil.
2. Sätt iFrame till `true` i din metadatafil.
3. Fyller i din iFrame-fil.
```javascript
var iframe = ny iFrame();
iframe. n("UpdateData", async () => {
  /*
  Få alla data du behöver ur iFrame spara dem i variabler
  och sedan skicka dem med iframe. avsluta
  */
  iframe.send({ //sending data
    video: video,
    tid: video. uration
  }); 
});
```
4. Att göra din närvarofil ta emot data från iFrame filen.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Obs:** Detta måste placeras utanför uppdateringsuppdata-händelsen.
## Kompilerar
Öppna en konsol i din mapp och skriv `tsc -w` för att kompilera `närvaro.ts` i `/dist` mappen.

# Struktur (JavaScript)
## Klonar projektet
1. Install [Git](https://git-scm.com/).
2. Öppna en terminal och skriv `git clone https://github.com/PreMiD/Presences`.
3. Välj en mapp som du väljer.
4. Öppna den i din kodredigerare.

## Skapa mappar och filer

1. Skapa en mapp med **namnet** (inte en URL) för tjänsten du vill stödja.
3. Skapa en mapp som heter `dist` inuti.
4. Skapa en `metadata.json` fil och en `presence.js` fil i `dist` mapp.

## Fyller i metadata.json filen

Klicka [här](/dev/presence#filling-in-the-metadatajson-file-2) för att se hur du fyller i den. Du kommer att kunna enkelt klicka tillbaka längst ner i förklaringen.

Vi har gjort en `metadata.json` fil skapare för lata peeps [här](https://eggsy.codes/projects/premid/mdcreator).

## Komma igång

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp. om/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
}),

strängar = presence. etStrings({
    play: "presence.playback.playing",
    paus: "presence.playback. aused"
    //You kan använda detta för att få översatta strängar
});

/*

funktion myOutsideHeavyLiftingFunction(){
    //Grab och bearbeta alla dina data här

    // element griper //
    // api samtal //
    // variabelset //
}

setInterval(10000, myOutsideHeavyLiftingfunktion); 
//Kör funktionen separera från UpdateData-händelsen var 10:e sekund för att få och ställa in de variabler som UpdateData plockar upp

*/


närvaro. n("UpdateData", () => {
    /UpdateData avfyrar alltid, och bör därför användas som din uppdateringscykel eller `tick`. Detta kallas flera gånger en sekund där det är möjligt.

    //Det rekommenderas att ställa in en annan funktion utanför denna händelsefunktion som kommer att ändra variabla värden och göra tunga lyft om du anropar data från ett API.

    var presenceData = {
        largeImageKey: "key", /*Nyckeln (filnamn) för den stora bilden på närvaron. Dessa laddas upp och namnges i avsnittet Rich Presence i din ansökan, kallad Art Assets*/
        smallImageKey: "key", /*Nyckeln (filnamn) för den stora bilden på närvaron. Dessa laddas upp och namnges i avsnittet Rich Presence i din ansökan, kallad Art Assets*/
        smallImageText: "Lite svävartext", //Den text som visas när du svävar över den lilla bilden
        detaljer: "Bläddra sidnamn", //Den övre delen av närvarotexten
        ange: "Läsavsnitt A", //Den nedre delen av närvarotexten
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show time left instead of Elapsed, detta är unix epok tidsstämpel där timern slutar
    }; /*Alternativt kan du ställa in en stor ImageKey här och ändra resten som variabla underegenskaper, till exempel närvaroSata. ype = "blahblah"; skriv exempel: detaljer, stat, etc.*/

    om (presenceData. etails == null) {
        //This will fire if you do not set presence details
        presence. (Automatic Copy) etTrayTitle(); //Rensar brickans titel för Mac-användare
        närvaro. etActivity() /*Uppdatera närvaron utan data, rensa den och gör den stora bilden till Discord-programikonen, och texten Discords programnamn*/
    } annat {
        //This will fire if you set presence details
        presence. etActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
Du kan kopiera detta till din `presence.js` fil och redigera värden. Ställa in alla värden görs inne i updataData händelsen.

För exempel föreslår vi att titta på koden för närvaron som: 1337x eller 9GAG.

För mer information om Presence-klassen klicka [här](/dev/presence/class).

## Kan inte hämta vissa data?!

Många webbplatser använder [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Dessa html-taggar kan innehålla flera källor såsom videor. Men de är inte relevanta varje gång. Vissa är dolda eller bara inte används aktivt. Kontrollera om du kan extrahera den information du behöver, utan dem innan du gör onödigt arbete.

1. Kontrollera dem via webbläsarkonsolen (se till att du är på fliken **Elements**-).
2. Sök (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) eller <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Utför `document.querySelectorAll("iframe")`.

Om du upptäcker att dina uppgifter finns i en iFrame måste du göra följande:
1. Skapa en `iframe.js` fil.
2. Sätt iFrame till `true` i din metadatafil.
3. Fyller i din iFrame-fil.
```javascript
var iframe = ny iFrame();
iframe. n("UpdateData", () => {
    /*
    Få alla data du behöver ur iFrame spara dem i variablerna
    och skicka dem sedan med iframe. slut
    */
    iframe. slut({ //sending data
        video: video,
        tid: video. uration  
    });
});
```
4. Att göra din närvarofil ta emot data från iFrame filen.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Obs:** Detta måste placeras utanför uppdateringsuppdata-händelsen.
# Fyller i metadata.json filen
Vi har gjort en `metadata.json` fil skapare för lata peeps [här](https://eggsy.codes/projects/premid/mdcreator). Det föreslås fortfarande att läsa igenom detta så att du vet hur det fungerar.

```javascript
{
  "författare": {
    "namn": "ANVÄNDAR",
    "id": "ID"
  },
  "bidragsgivare": [{
    "namn": "ANVÄNDAR",
    "id": "ID"
  }],
  "service": "TJÄNSTE",
  "description": {
    "sv": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "taggar": ["CATEGORY", "TAG"],
  "kategori": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Kopiera koden ovan och lägg den i din `metadata.json` -fil. Du måste nu redigera värden för egenskaperna. Observera att följande egenskaper är valfria att ha i din `metadata. son` fil, om du inte planerar att använda dem måste du ta bort dem.
- `medverkande`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Förtydligande av vissa värde förinställningar:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Beskrivning</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Valfri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>skapare</b>
      </td>
      <td style="text-align:left">Bör innehålla Objekt med <code>namn</code> och <code>id</code> av närvaroutvecklaren. Namnet är ditt Discord-användarnamn utan identifieraren (#0000). User <code>id</code> kan kopieras från Discord genom att aktivera utvecklarläget
        och högerklicka på din profil.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>medverkande</b>
      </td>
      <td style="text-align:left">Bör innehålla Objekt med <code>namn</code> och <code>id</code> av närvaroutvecklaren. Namnet är ditt Discord-användarnamn utan identifieraren (#0000). User <code>id</code> kan kopieras från Discord genom att aktivera utvecklarläget
        och högerklicka på din profil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tjänst</b>
      </td>
      <td style="text-align:left">Titeln på tjänsten som denna närvaro stödjer. <br>(Must vara samma namn som mappen där allt är i)</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beskrivning</b>
      </td>
      <td style="text-align:left">Liten beskrivning av närvaron, du kan använda beskrivning av tjänsten
        om du är utanför idéer. Din beskrivning måste innehålla nyckelparvärden som anger språket, och beskrivningen i det specifika språket. Gör beskrivningar med språken <i>som du känner</i>, våra översättare kommer att göra ändringar i din metadatafil.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL</b>
      </td>
      <td style="text-align:left">URL till tjänsten.<br><b>Exempel:</b><code>vk. om</code><br>
        <b>Denna URL måste matcha webbadressen till webbplatsen eftersom den kommer att upptäcka om detta är webbplatsen att injicera skriptet på.</b><br> Gör <b>INTE</b> lägg till <code>https://</code> eller <code>http://</code> i URL:en eller ett snedstreck i slutet:
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Obs</b>: Vissa webbadresser kan ha <code>www.</code> eller något annat framför sin domän. Glöm inte <b></b> att lägga till det!<br>
Du kan lägga till flera webbadresser genom att göra följande:<br>
<code>["URL1", "URL2", "ETC. ]</code><br>
Du kan också använda regExp även känd som Regex för denna uppgift, förklarade vidare nedan.
      </td>
      <td style="text-align:left"><code>Sträng, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">En linjär uttryckssträng som används för att matcha webbadresser.<br>
      regExp eller även känd som Regex, kan användas om en webbplats har flera underdomäner.<br>
Du kan använda följande regExp för det:<br>
<code>([a-z0-9]+)[.]domän[.]TLD"</code><br>
TLD står för toppdomänen för axample: . om .net<br> 
<code>([a-z0-9]+)</code> betyder allt från ett till z och från 0 till 9.<br>
        Du kan testa din regExp på <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Version av din närvaro.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logotyp</b>
      </td>
      <td style="text-align:left">Länk till service&apos;s logotyp.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Länka till din närvaro miniatyr.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>färg</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> värde. Vi rekommenderar att använda en primär färg på tjänsten
        som din närvaro stöder.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>taggar</b>
      </td>
      <td style="text-align:left">Array med taggar, kommer de att hjälpa användare att söka din närvaro på webbplatsen.</td>
      <td
      style="text-align:left"><code>Sträng, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Kategori</b>
      </td>
      <td style="text-align:left">En sträng som används för att representera kategorin närvaron faller under. Se giltiga katergorier <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">här</a>.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Anger om <code>iFrames</code> används</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">En reguljära uttrycksväljare som väljer iframes att injicera i. Se regExp för mer information.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
  </tbody>
</table>

Klicka [här](/dev/presence#filling-in-the-metadatajson-file) för att gå tillbaka till TypeScript förklaringen. Klicka [här](/dev/presence#filling-in-the-metadatajson-file-1) för att gå tillbaka till JavaScript-förklaringen.

# Laddar närvaron
1. Öppna popup-fönstret och håll nere <kbd>Shift</kbd> -knappen på tangentbordet.
2. **Ladda Närvaro** kommer att visas i avsnittet Närvaro.
3. Klicka på den medan du fortfarande håller i <kbd>Shift</kbd> -knappen.
4. Välj /dist mapp för din närvaro.

# Några hjälpsamma saker
## Varm omladdning
Webbplatsen du utvecklar på laddas om automatiskt varje gång du sparar en fil i din mapp.

## Felsökning
- Du kan sätta `console.log("Test");` mellan din kod och se om din webbläsarkonsol ger dig den utgången. Om ja sedan fortsätta och försök igen efter nästa funktion. Om inte då är det ett fel ovan.
- Om det inte hjälper dig så fråga en närvaroutvecklare på vår [Discord-server](https://discord.gg/PreMiD) om hjälp.

# Filer förklarade
- [Närvaro klass](/dev/presence/class)
- [iFrame klass](/dev/presence/iframe)
- [Metadata fil](/dev/presence/metadata)
- [Konfiguration av typskript](/dev/presence/tsconfig)
{.links-list}