---
title: Metadata.json
description: Obsahuje základné údaje o Prítomnosti
published: true
date: 2020-01-18T20:32:58.015Z
tags:
---

# Metadata.json

Ak chcete zverejniť prítomnosť v obchode a načítať ju prostredníctvom rozšírenia, mali by ste vytvoriť `metadata.json` súbor vo vašom `presence.js` priečinku.

Príklad tohto súboru je uvedený nižšie.

```javascript
{
  "author": {
    "name": "UŽÍVATEĽ",
    "id": "ID"
  },
  "contributors": [{
    "name": "UŽÍVATEĽ",
    "id": "ID "
  }],
  " service ":"SLUŽBA",
  " description ": {
    " sk ":" POPIS "
  },
  " url ":" URL ",
  " regExp ":" REGEXP ",
  "iFrameRegExp": "REGEXP",
  "version": "VERZIA",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "# 45A8FC",
  "tags": ["KATEGÓRIA", "ŠTÍTKA"],
  "category": "KATEGÓRIA",
  "iframe": false
}
```

## Understanding the metadata.json

That example looks really strange, huh? Don't worry, its not that hard to understand what each variable is for.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
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
      <td style="text-align:left">Mal by obsahovať Objekt s <code>menom</code> a <code>id</code> vývojára prítomnosti. Meno je vaše Discord užívateľské meno bez identifikátoru(#0000). Užívateľské <code>id</code> možno skopírovať z Discordu povolením mód vývojára         a kliknutím pravým tlačítkom na váš profil.</td>
      <td style="text-align:left"><code>Poradie&lt;Objekt&gt;</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>služba</b>
      </td>
      <td style="text-align:left">The title of the service that this presence supports.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>popis</b>
      </td>
      <td style="text-align:left">Malý popis prítomnosti, môžete použiť popis služby        ak nemáte žiadne nápady. Váš popis musí mať hodnoty párov kľúčov ktoré označujú jazyk, a popis v tom konkrétnom jazyku. Urobte popisy s jazykmi <i>ktoré poznáte</i>, naši prekladatelia ich zmenia vo vašich metadata súborov.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL služby.<br><b>Napríklad:</b><code>vk.com</code><br>        <b>Táto url sa musí zhodovať s url webovej stránky pretože sa použije na zistenie toho či sa má alebo nemá skript vložiť do tejto stránky.</b>
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
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>štítky</b>
      </td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td
      style="text-align:left"><code>Reťazec, Poradie&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategória</b>
      </td>
      <td style="text-align:left">A string used to represent the category the presence falls under.</td>
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
      <td style="text-align:left">A regular expression selector that selects iframes to inject into.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
  </tbody>
</table>

## Regular Expressions

If you want to learn regular expressions, here are a few websites.

### Learning

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

### Testovanie

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

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