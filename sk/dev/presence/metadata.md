---
title: Metadata.json
description: Obsahuje základné údaje o Prítomnosti
published: true
date: 2020-04-22T20:07:56.204Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

Príklad tohto súboru je uvedený nižšie.

```javascript
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
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

## Porozumenie metadata.jsonu

Ten príklad vyzerá naozaj čudne, hm? Nerobte si starosti nie je to také ťažké pochopiť pre čo sú jednotlivé premenné.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Premenná</th>
      <th style="text-align:left">Popis</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Nepovinné</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b>
      </td>
      <td style="text-align:left">Mal by obsahovať Objekt s <code>menom</code> a <code>id</code> vývojára prítomnosti. Meno je vaše Discord užívateľské meno bez identifikátoru(#0000). Užívateľské <code>id</code> možno skopírovať z Discordu povolením mód vývojára         a kliknutím pravým tlačítkom na váš profil.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prispievatelia</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the contributor. Meno je vaše Discord užívateľské meno bez identifikátoru(#0000). Užívateľské <code>id</code> možno skopírovať z Discordu povolením mód vývojára         a kliknutím pravým tlačítkom na váš profil.</td>
      <td style="text-align:left"><code>Poradie&lt;Objekt&gt;</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>služba</b>
      </td>
      <td style="text-align:left">Názov služby ktorú táto prítomnosť podporuje.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>popis</b>
      </td>
      <td style="text-align:left">Malý popis prítomnosti, môžete použiť popis služby        ak nemáte žiadne nápady. Váš popis musí mať hodnoty párov kľúčov ktoré označujú jazyk, a popis v tom konkrétnom jazyku. Urobte popisy s jazykmi <i>ktoré poznáte</i>, naši prekladatelia ich zmenia vo vašich metadata súborov. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b>
      </td>
      <td style="text-align:left"><code>Reťazec, Poradie&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Reťazec regulárneho výrazu používaný na zhodovanie adries url.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>verzia</b>
      </td>
      <td style="text-align:left">Verzia vašej prítomnosti.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Odkaz na službu&apos; s logotypom.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>náhľad</b>
      </td>
      <td style="text-align:left">Odkaz na náhľad vašej prítomnosti.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>farba</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> hodnota. Odporúčame vám používať primárnu farbu služby        ktorá vaša prítomnosť podporuje.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>štítky</b>
      </td>
      <td style="text-align:left">Pole so značkami, pomôže používateľom vyhľadávať vašu prítomnosť na webovej stránke.</td>
      <td
      style="text-align:left"><code>Reťazec, Poradie&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategória</b>
      </td>
      <td style="text-align:left">Reťazec použitý na označenie kategórie do ktorej patrí.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Určuje či je použitý <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Selektor regulárneho výrazu ktorý vyberá prvky iframe do ktorých sa má vložiť.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Poradie&lt;Objekt&gt;</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
  </tbody>
</table>

## Regulárny Výraz

Ak sa chcete naučiť regulárne výrazy, tu je niekoľko webových stránok.

#### Učenie

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testovanie

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD is a polygot service, meaning there are a multitude of languages involved to connect users around the globe. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list).

## Presence settings
Setup interactive settings so users can customize the presence!
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
            "value": "\"%song\" by %artist", //Putting in a string will make the setting an input one, where you can use a custom input.
            "placeholder": "use %song or %artist" //When input is empty it will show this grayed out
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

## Kategórie prítomností

Ak vytvárate prítomnosť, musíte uviesť kategóriu do ktorej táto prítomnosť patrí. Toto je zostavený zoznam kategórií ktoré môžete použiť.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategória</th>
      <th style="text-align:left">Názov</th>
      <th style="text-align:left">Popis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Čokoľvek sa týka anime, od forúmov až po platformy na streamovanie videa.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
    <td style="text-align:left"><b>Hry</b></td>
      <td style="text-align:left">Akákoľvek webová stránka ktorá má obsah súvisiaci s hrami, ako napríklad <code>Kahoot</code> alebo <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
    <td style="text-align:left"><b>Hudba</b></td>
      <td style="text-align:left">Toto sú webové stránky ktoré ponúkajú hudobný obsah, či už ide o streamovanie alebo sťahovanie.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Sociálne siete</b></td>
      <td style="text-align:left">Webové stránky ktoré sa používajú na vytváranie a zdieľanie obsahu alebo na účasť na iných formách sociálnych sietí.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videá & Streamy</b></td>
      <td style="text-align:left">Webové stránky ktoré slúžia na poskytovanie videí a streamov.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
    <td style="text-align:left"><b>Ostatné</b></td>
      <td style="text-align:left">Čokoľvek čo nespadá do špecifickej kategórie uvedenej vyššie.</td>
      </td>
    </tr>
  </tbody>
</table>