---
title: Vývoj přítomnosti
description: 
published: true
date: 2020-02-16T14:19:44.378Z
tags: 
---

> Všechny přítomnosti jsou nyní uloženy zde: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Verze `2.x` zavádí [obchod s přítomností](https://premid.app/store). Uživatelé mají nyní možnost ručně přidávat a odebírat své oblíbené přítomnosti prostřednictvím uživatelského rozhraní stránky [](https://premid.app/).

# Pokyny
> Pokud nesledujete všechny pokyny, vaše přítomnost nebo požadavek na natažení bude odstraněn z githubu. 
> 
> {.is-danger}

## Vytváření

Než začnete pracovat na své přítomnosti, mějte na paměti následující seznam.
- Požadavek na natažení musí být úplný, musíte mít správnou strukturu souboru. Včetně souboru `dist` , souboru `presence.js` a souboru `metadata.json`.
- The presence **must** be related to the website you have chosen.
- Přítomnost žádných nelegálních internetových stránek. Patří sem stresory, drogy, dětská porézní atd...
- Metadata přítomnosti musí mít dobře psaný obsah, včetně platných titulků a popisů.
- Média obsahující (ikona/náhled) musí být vztažena k webové stránce a měla by být srozumitelná, pokud jde o velikost a kvalitu.
- Struktura souboru musí být čistá a spravovaná, nesmí mít náhodné soubory, které neposkytují nic funkci přítomnosti.
- Přítomnost **nesmí** mít žádné škodlivé úmysly. Mezi ně patří krádež/úniky soukromých informací, negativně ovlivňují chování webových stránek atd...
- Pokud plánujete přítomnost webové stránky a v budoucnu se tato stránka změní, vy **ARE** zodpovědný za aktualizaci přítomnosti znovu fungovat, jak se očekávalo. Pokud to neopravíte v přijatelném časovém rámci, další vývojáři přítomnosti mohou **přepsat** vaši přítomnost, aby vyhověli změnám.
- Přítomnost musí být otestována před zveřejněním, aby se potvrdilo, že vše funguje podle očekávání.
- Vaše přítomnost musí mít SFW obrázky a popisy bez ohledu na to, zda se jedná o NSFW nebo ne. Pokud je vaše přítomnost o webové stránce `nsfw` , přidejte do metadat značku `nsfw`.
- Vaše přítomnost musí **NENÍ** být pro bezplatné domény nebo hostitele (např. .TK, [všechny bezplatné domény], . F.GD atd...), výjimky lze udělat, pokud je předložen důkaz prokazující, že je to placená doména.
- Pole `malý ImageKey` a `malý ImageText` jsou určena k poskytnutí doplňkového/sekundárního kontextu (např. "playing"/"pozastaveno" pro video stránky, "browsing" pro běžné stránky a ostatní případy). Nemáš dovoleno propagovat Discord profily nebo cokoliv nesouvisejícího s PreMiD.
- Požadavky na loga jsou 1:1 (Square) v 512px, náhledy však mělo by být buď [široké propagační karty](https://i.imgur.com/3QfIc5v.jpg) , nebo jednoduše [screenshotů](https://i.imgur.com/OAcBmwW.png) , pokud první není k dispozici.
- Přítomnost by měla mít alespoň 1 značku, to je požadavek provedení a v budoucnu může být volitelná.
- Pole `url` nesmí obsahovat `http://` nebo `https://://`, ani parametry (např. přítomnost pro `https://www.google.com/search?gws_rd=ssl` bude mít pouze `www.google.com` v poli `url`).
- Popisy a štítky by měly být vždy v polích, i když je jen jeden prvek. Pole `url` by však mělo být pouze řetězec, pokud je to jedna doména.
- Nestabilní stránky, které neustále mění API/domény, náhodné prvky HTML nebo jsou stále ve velkém vývoji, nejsou povoleny a budou odstraněny z obchodu.

## Úprava

V některých situacích se přítomnost může chovat neočekávaně nebo může použít některé drobné změny ke zlepšení její funkčnosti. Zde je zkompilovaný seznam, který musíte sledovat, abyste mohli měnit přítomnosti.
- Nemáte oprávnění měnit tvůrce přítomnosti. To platí pouze v případě, že jej můžete přepsat. Můžete se přidat jako [přispěvatel](/dev/presence/metadata).
- Ujistěte se, že změny jsou užitečné. Tyto opravy mohou zahrnovat opravy (kód a pneumatiky), doplnění (popisy a štítky) atd...
- Potvrďte, že vaše změny před publikováním fungují. Nevytvářejte žádosti o natažení bez znalosti výsledku vašich změn.
- Nenahrazujte úplně novou značku/nenahrazujte přítomnost, pokud to nepovolí `Presence Verifier` nebo zaměstnanec.

# Ověřování
> Při natažení požadavků na přidání nebo úpravu existujících přítomností, musíte zahrnout snímek obrazovky. Změny metadat / tsconfig přítomnosti však nevyžadují screenshot. *Váš snímek obrazovky musí být nahrán přímo na github s požadavkem na natažení, nepoužívejte webové stránky třetích stran pro sdílení obrázků.* 
> 
> {.is-danger}

Aby vaše přítomnost dorazila do obchodů, musí procházet procesem na githubu, aby bylo potvrzeno, že funguje podle očekávání. Zde je několik věcí, na které je třeba se podívat, kdy tvoje žádost o natažení.

Náš tým pro ověřování přítomnosti má svou vlastní roli, podívejte se na `Presence Verifier` na discord serveru, abyste věděli, kdo je zapojen.

1. Dva ověřovatelé musí potvrdit, že vaše přítomnost splňuje normy. Pokud se náhodou dostanete k požadavkům na změnu, vynaložte patřičné úsilí na opravu, nebo nebude přidáno.
2. Pokud požadujeme změny a Váš požadavek na natažení přesahuje **7 dní nečinnosti** , aniž bychom provedli potřebné změny, budeme nuceni ji uzavřít.
3. Můžete pořídit snímky obrazovky provedené s pomocí jiného uživatele. ( např. jeho autor v případě, že k němu nemáte přístup z jakéhokoli důvodu).
4. Pokud se jedná o aktualizaci nebo záplatu, musí snímek obrazovky zobrazit nové příspěvky, ne žádné staré funkce z předchozích požadavků na natažení.
5. Poskytnuté snímky obrazovky by měly být skutečné, ne upravovány.
6. Jakýkoliv vložený kód, který se sloučí do tohoto repositáře, bude licencován pod **Mozilla Public License 2.0**.


Po splnění všech správných přezkumů, váš požadavek na natažení bude sloučen s obchodem.

# Struktura (TypeScript)
Můžete si vybrat, zda chcete naprogramovat svou Presenci pomocí [JavaScript](https://www.javascript.com/) nebo  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) má několik definic typu spicy, takže oprava a identifikace chyb je mnohem jednodušší. Pokud chcete pouze použít [JavaScript](https://www.javascript.com/) , můžete přeskočit na [Structure (JavaScript)](/dev/presence#structure-javascript).

## Instalace
1. Install [Git](https://git-scm.com/).
2. Nainstalujte [uzel](https://nodejs.org/en/) (přichází s [npm](https://www.npmjs.com/)).
3. Nainstalujte [TypeScript](https://www.typescriptlang.org/index.html#download-links) (otevřete terminál a `npm install -g typescript`).

## Klonování projektu
1. Otevřete terminál a napište `git klon https://github.com/PreMiD/Presences`.
2. Vyberte složku dle vašeho výběru.
3. Otevřete ji v editoru kódu.

## Vytváření složek a souborů

1. Vytvořte složku s názvem **** (nikoli URL) služby, kterou chcete podpořit.
2. Vytvořte uvnitř `Presence.ts` a `tsconfg.json`.
3. Vytvořit složku s názvem `dist` uvnitř.
4. Vytvořte soubor `metadata.json` ve složce `disk`.

## Vyplňování souboru tsconfig.json

Do souboru `tsconfg.json` vložte následující kód.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }

```
Pro více informací o konfiguraci TypeScriptu klikněte [zde](/dev/presence/tsconfig).

## Vyplňování souboru metadata.json

Klikněte [zde](/dev/presence#filling-in-the-metadatajson-file-2) abyste zjistili, jak jej vyplnit. Budete moci snadno kliknout zpět v dolní části vysvětlení.

Vytvořili jsme `metadata.json` pro líný peeps [zde](https://eggsy.codes/projects/premid/mdcreator).

## Jak začít

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp. om/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
}),

strings = přítomnost. etStrings({
    play: "presence.playback.playing",
    pause: "presence.playback. aused"
    //Můžete použít toto pro získání překladových řetězců
});

/*

funkce myOutsideHeavyLiftingFunction(){
    //Grab a zpracujte všechna vaše data zde

    // element grabs //
    // api call //
    // proměnné set//
}

setInterval(10000, myoutsideHeavyLiftingFunction); 
//Spustit funkci oddělte každých 10 sekund od události UpdateData pro získání a nastavení proměnných, které UpdateData zvedne

*/


přítomnosti. n("UpdateData", async () => {
    /*UpdateData je vždy palčivé, a proto by měl být použit jako obnovovací cyklus, nebo `tick`. To se nazývá několikrát, kde je to možné.

    Doporučuje se nastavit jinou funkci mimo tuto událost, která změní hodnoty proměnné a provede velké zvedání, pokud zavoláte data z API. /

    var přítomnostData = {
        largeImageKey: "key", /*Klíč (název souboru) velkého obrázku na přítomnosti. Ty jsou nahrány a pojmenovány v sekci Rich Presence vaší aplikace, nazvaný Art Assets*/
        smallImageKey: "klíč", /*Klíč (název souboru) velkého obrázku v přítomnosti. Ty jsou nahrány a pojmenovány v sekci Rich Presence vaší aplikace, nazvaný Art Assets*/
        Malý ImageText: "Text při přejetí myší", //Text zobrazený při přejetí malého obrázku
        detaily: "Procházení názvu stránky", //Horní část textu přítomnosti
        uvádí: "Čtecí sekce A", //Dolní část textu přítomnosti
        startTimestamp: 1577232000, //Jednotná epocha časové značky pro kdy začít počítat od
        endTimestamp: 1577151472000 //Pokud chcete zobrazit čas doleva namísto Elapsed, Toto je unixová epochová časové razítko, ve kterém čas končí
    }; /*Volitelně můžete zde nastavit largeImageKey a zbytek změnit jako podvlastnosti proměnné, například přítomnostSata. ype = "blahblah"; příklady: detaily, stav atd.*/

    pokud (přítomnostData. etails == null) {
        //This vystřelí, pokud nenastavíte detaily přítomnosti
        . etTrayTitle(); //vymaže název pole pro uživatele mac
        přítomnost. etaktivita(); /*Aktualizuj přítomnost bez dat, proto ji vymazej a vytvoř velký obrázek ikony aplikace Discord. a text jméno aplikace Discord */
    } else {
        //This will fire if set the presence details
        Presence. etActivity(presenceData); //Aktualizujte přítomnost se všemi hodnotami z objektu přítomnostiData
    }
});
```
Můžete to zkopírovat do souboru `presence.ts` a upravit hodnoty. Nastavení všech hodnot je provedeno uvnitř události updataData .

Příklady, jako je 1337x nebo 9GAG, navrhujeme podívat se na pravidla přítomnosti.

Pro více informací o třídě Presence klikněte [zde](/dev/presence/class).

## Nelze získat určitá data?!

Mnoho webových stránek používá [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Tyto HTML tagy mohou obsahovat více zdrojů, jako jsou videa. Nejsou však vždy relevantní. Některé jsou skryty nebo nejsou aktivně používány. Zkontrolujte, zda můžete extrahovat, informace, které potřebujete, bez nich, než budete dělat zbytečnou práci.

1. Zkontrolujte je pomocí konzole prohlížeče (ujistěte se, že jste na záložce **Elements**).
2. Hledání (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) nebo <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Spustit `document.querySelectorAll("iframe")`.

Pokud zjistíte, že vaše data jsou v iFramu, musíte udělat následující:
1. Vytvořte soubor `iframe.ts`.
2. Nastavte iFrame na `true` ve vašem souboru metadat.
3. Vyplňování souboru iFrame.
```javascript
var iframe = nový iFrame();
iframe. n("UpdateData", async () => {
  /*
  Získejte všechna data, která potřebujete z iFrame je uložte v proměnných
  a pak je pošlete pomocí iframe. konec
  */
  iframe.send({ //sending data
    video: video,
    čas: video. urace
  }); 
});
```
4. Přijímání dat z souboru iFram.
```javascript
přítomnost.on("iFrameData", data => {
  iFrameVideo = data.video;
  current entTime = data.time;
});
```
**Poznámka:** Toto musí být umístěno mimo událost updateData
## Kompilace
Otevřete konzoli ve vaší složce a napište `tsc -w` a zkompilujte `presence.ts` do složky `/dist`.

# Struktura (JavaScript)
## Klonování projektu
1. Install [Git](https://git-scm.com/).
2. Otevřete terminál a napište `git klon https://github.com/PreMiD/Presences`.
3. Vyberte složku dle vašeho výběru.
4. Otevřete ji v editoru kódu.

## Vytváření složek a souborů

1. Vytvořte složku s názvem **** (nikoli URL) služby, kterou chcete podpořit.
3. Vytvořit složku s názvem `dist` uvnitř.
4. Vytvořte soubor `metadata.json` a soubor `presence.js` uvnitř složky `dist`.

## Vyplňování souboru metadata.json

Klikněte [zde](/dev/presence#filling-in-the-metadatajson-file-2) abyste zjistili, jak jej vyplnit. Budete moci snadno kliknout zpět v dolní části vysvětlení.

Vytvořili jsme `metadata.json` pro líný peeps [zde](https://eggsy.codes/projects/premid/mdcreator).

## Jak začít

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp. om/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
}),

strings = přítomnost. etStrings({
    play: "presence.playback.playing",
    pause: "presence.playback. aused"
    //Můžete použít toto pro získání překladových řetězců
});

/*

funkce myOutsideHeavyLiftingFunction(){
    //Grab a zpracujte všechna vaše data zde

    // element grabs //
    // api call //
    // proměnné set//
}

setInterval(10000, myoutsideHeavyLiftingFunction); 
//Spustit funkci oddělte každých 10 sekund od události UpdateData pro získání a nastavení proměnných, které UpdateData zvedne

*/


přítomnosti. n("UpdateData", () => {
    //UpdateData je vždy palčivá, a proto by měl být použit jako obnovovací cyklus, nebo `tick`. To se nazývá několikrát, kde je to možné.

    //It je doporučeno nastavit jinou funkci mimo tuto událost, která změní hodnoty proměnné a provede velké zvedání, pokud zavoláte data z API.

    var PresenceData = {
        largeImageKey: "key", /*The key (název souboru) of the Large Image on the existence. Ty jsou nahrány a pojmenovány v sekci Rich Presence vaší aplikace, nazvaný Art Assets*/
        smallImageKey: "klíč", /*Klíč (název souboru) velkého obrázku v přítomnosti. Ty jsou nahrány a pojmenovány v sekci Rich Presence vaší aplikace, nazvaný Art Assets*/
        Malý ImageText: "Text při přejetí myší", //Text zobrazený při přejetí malého obrázku
        detaily: "Procházení názvu stránky", //Horní část textu přítomnosti
        uvádí: "Čtecí sekce A", //Dolní část textu přítomnosti
        startTimestamp: 1577232000, //Jednotná epocha časové značky pro kdy začít počítat od
        endTimestamp: 1577151472000 //Pokud chcete zobrazit čas doleva namísto Elapsed, Toto je unixová epochová časové razítko, ve kterém čas končí
    }; /*Volitelně můžete zde nastavit largeImageKey a zbytek změnit jako podvlastnosti proměnné, například přítomnostSata. ype = "blahblah"; příklady: detaily, stav atd.*/

    pokud (přítomnostData. etails == null) {
        //This vystřelí, pokud nenastavíte detaily přítomnosti
        . etTrayTitle(); //vymaže název pole pro uživatele mac
        přítomnost. etaktivita(); /*Aktualizuj přítomnost bez dat, proto ji vymazej a vytvoř velký obrázek ikony aplikace Discord. a text jméno aplikace Discord */
    } else {
        //This will fire if set the presence details
        Presence. etActivity(presenceData); //Aktualizujte přítomnost se všemi hodnotami z objektu přítomnostiData
    }
});
```
Můžete to zkopírovat do souboru `presence.js` a upravit hodnoty. Nastavení všech hodnot je provedeno uvnitř události updataData .

Příklady, jako je 1337x nebo 9GAG, navrhujeme podívat se na pravidla přítomnosti.

Pro více informací o třídě Presence klikněte [zde](/dev/presence/class).

## Nelze získat určitá data?!

Mnoho webových stránek používá [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Tyto HTML tagy mohou obsahovat více zdrojů, jako jsou videa. Nejsou však vždy relevantní. Některé jsou skryty nebo nejsou aktivně používány. Zkontrolujte, zda můžete extrahovat, informace, které potřebujete, bez nich, než budete dělat zbytečnou práci.

1. Zkontrolujte je pomocí konzole prohlížeče (ujistěte se, že jste na záložce **Elements**).
2. Hledání (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) nebo <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Spustit `document.querySelectorAll("iframe")`.

Pokud zjistíte, že vaše data jsou v iFramu, musíte udělat následující:
1. Vytvořte soubor `iframe.js`.
2. Nastavte iFrame na `true` ve vašem souboru metadat.
3. Vyplňování souboru iFrame.
```javascript
var iframe = nový iFrame();
iframe. n("UpdateData", () => {
    /*
    Získejte všechna data, která potřebujete z iFramu, uložte je do proměnných
    a pak je pošlete pomocí iframe. konec
    */
    iframe. end({ //odesílání dat
        video: video,
        čas: video. urace  
    });
});
```
4. Přijímání dat z souboru iFram.
```javascript
přítomnost.on("iFrameData", data => {
  iFrameVideo = data.video;
  current entTime = data.time;
});
```
**Poznámka:** Toto musí být umístěno mimo událost updateData
# Vyplňování souboru metadata.json
Vytvořili jsme `metadata.json` pro líný peeps [zde](https://eggsy.codes/projects/premid/mdcreator). Stále je doporučeno přečíst si to tak, abyste věděli, jak to funguje.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "přispěvatelé": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "c": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["KATEGORY", "TAG"],
  "kategorie": "KATEGORI",
  "regregregreg": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Prosím, zkopírujte výše uvedený kód a vložte jej do souboru `metadata.json`. Nyní je třeba upravit hodnoty vlastností. Vezměte prosím na vědomí, že následující vlastnosti jsou volitelné, pokud chcete mít ve vašich `metadatech. syn` soubor, pokud neplánujete jeho používání, je třeba jej odstranit.
- `přispěvatelé`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Vysvětlení některých přednastavení hodnoty:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Proměnná</th>
      <th style="text-align:left">Popis</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Nepovinné</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b>
      </td>
      <td style="text-align:left">Mělo by obsahovat objekt s <code>názvem</code> a <code>id</code> vývojáře přítomnosti. Jméno je tvé Discord uživatelské jméno bez identifikátoru (#0000). Uživatele <code>id</code> lze zkopírovat z Discordu povolením módu vývojáře
        a kliknutím pravým tlačítkem myši na tvůj profil.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>přispěvatelé</b>
      </td>
      <td style="text-align:left">Mělo by obsahovat objekt s <code>názvem</code> a <code>id</code> vývojáře přítomnosti. Jméno je tvé Discord uživatelské jméno bez identifikátoru (#0000). Uživatele <code>id</code> lze zkopírovat z Discordu povolením módu vývojáře
        a kliknutím pravým tlačítkem myši na tvůj profil.</td>
      <td style="text-align:left"><code>Pole&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ano</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>služba</b>
      </td>
      <td style="text-align:left">Název služby, kterou tato přítomnost podporuje. <br>(Musí být stejné jméno jako složka, kde je vše v)</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>popis</b>
      </td>
      <td style="text-align:left">Malý popis přítomnosti, můžete použít popis služby
        , pokud nemáte nápady. Tvůj popis musí obsahovat hodnoty klíčů označující jazyk a popis v tomto konkrétním jazyce. Vytvářejte popisy s jazyky <i>, které znáte</i>, naši překladatelé budou provádět změny ve vašem souboru metadat.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL</b>
      </td>
      <td style="text-align:left">Adresa URL služby.<br><b>Příklad:</b><code>vk. om</code><br>
        <b>Tato adresa URL musí odpovídat URL webu, protože zjistí, zda je nebo není to webová stránka, do které má být skript vložen.</b><br> Do <b>NENÍ</b> přidat <code>https://://</code> nebo <code>http://</code> uvnitř adresy URL ani lomítko na konci:
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Poznámka</b>: Některé adresy URL mohou mít <code>www.</code> nebo něco jiného před jejich doménou. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>Řetězec, pole&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Regulární výraz řetězec používaný pro odpovídající URL adresy.<br>
      regExp nebo také známý jako Regex, může být použit v případě, že webová stránka má více subdomén.<br>
Můžete použít následující regExp za toto:<br>
<code>([a-z0-9]+)[.]doména[.]TLD"</code><br>
TLD stojící pro doménu nejvyšší úrovně pro axample: . om .net<br> 
<code>([a-z0-9]+)</code> znamená cokoliv od a od 0 do 9.<br>
        Můžete vyzkoušet váš regExp na <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ano</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>verze</b>
      </td>
      <td style="text-align:left">Verze vaší přítomnosti.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Odkaz na službu&apos;s logotypem.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Odkaz na náhled vašeho stavu.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>barva</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> hodnota. Doporučujeme použít primární barvu služby
        , kterou vaše přítomnost podporuje.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>štítky</b>
      </td>
      <td style="text-align:left">Pole se značkami, které pomohou uživatelům vyhledat vaši přítomnost na webu.</td>
      <td
      style="text-align:left"><code>Řetězec, pole&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Kategorie</b>
      </td>
      <td style="text-align:left">Řetězec používaný k reprezentaci kategorie, pod kterou přítomnost spadá. Podívejte se na platné katalogy <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">zde</a>.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Určuje, zda jsou použity <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Ano</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Regulární selektor, který vybere iframy, do kterých se má vložit. Více informací naleznete v regExp.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ano</code>
      </td>
    </tr>
  </tbody>
</table>

Klikněte [zde](/dev/presence#filling-in-the-metadatajson-file) pro návrat k vysvětlení typu Scriptu. Klikněte [zde](/dev/presence#filling-in-the-metadatajson-file-1) pro návrat k vysvětlení JavaScriptu.

# Načítání přítomnosti
1. Otevřete vyskakovací okno a podržte tlačítko <kbd>Shift</kbd> na klávesnici.
2. **Load Presence** se zobrazí v sekci Presences
3. Klikněte na to, dokud stále držíte tlačítko <kbd>Shift</kbd>.
4. Vyberte /dist složku vaší přítomnosti.

# Některé užitečné věci
## Za tepla znovu načítáno
Web, na kterém se vyvíjíte, se automaticky znovu načítá pokaždé, když uložíte soubor do složky.

## Ladění
- Můžete vložit `konzolu.log("Test");` mezi vaším kódem a zjistit, zda vám vaše konzole prohlížeče tento výstup poskytuje. Pokud ano, pokračujte a zkuste to znovu za další funkci. Pokud tomu tak není, je chyba výše.
- Pokud vám to nepomůže, požádejte o pomoc vývojáře přítomnosti na našem [Discord serveru](https://discord.gg/PreMiD).

# Soubory vysvětleny
- [Třída přítomnosti](/dev/presence/class)
- [iFrame třída](/dev/presence/iframe)
- [Soubor metadat](/dev/presence/metadata)
- [Konfigurace typskriptu](/dev/presence/tsconfig)
{.links-list}