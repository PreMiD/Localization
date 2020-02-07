---
title: Metadata.json
description: Contains basic data about the Presence
published: true
date: 2020-01-19T23:42:34.658Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `presence.js` folder.

The example of that file can be found below.

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
  "iframe": false
}
```

## Understanding the metadata.json

That example looks really strange, huh? Don't worry, its not that hard to understand what each variable is for.

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
      <td style="text-align:left">Mělo by obsahovat objekt s <code>názvem</code> a <code>id</code> vývojáře přítomnosti. Jméno je tvé Discord uživatelské jméno bez identifikátoru (#0000). Uživatelské <code>id</code> lze zkopírovat z Discordu povolením módu vývojáře
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
      <td style="text-align:left">Název služby, kterou tato přítomnost podporuje.</td>
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
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to.</b>
      </td>
      <td style="text-align:left"><code>Řetězec, pole&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
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
      <td style="text-align:left">Odkaz na službu&apos; s logotypem.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ne</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>náhled</b>
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
      <td style="text-align:left">Řetězec používaný k reprezentaci kategorie, pod kterou přítomnost spadá.</td>
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
      <td style="text-align:left">Regulární selektor, který vybere iframy, do kterých se má vložit.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
      <td style="text-align:left"><code>Ano</code>
      </td>
    </tr>
  </tbody>
</table>

## Regular Expressions

If you want to learn regular expressions, here are a few websites.

### Učení

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

### Testing

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategorie</th>
      <th style="text-align:left">Jméno</th>
      <th style="text-align:left">Popis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Anything related to anime, from forums to video streaming platforms.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hry</b></td>
    <td style="text-align:left"><b>Hry</b></td>
      <td style="text-align:left">Any website that has game related content, such as <code>Kahoot</code> or <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hudba</b></td>
    <td style="text-align:left"><b>Hudba</b></td>
      <td style="text-align:left">These are websites that offer music related content, whether that be streaming or downloading.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>sociální sítě</b></td>
        <td style="text-align:left"><b>Sociální sítě</b></td>
      <td style="text-align:left">Websites that are used for the purpose of creating and sharing content or  for participating in other forms of social networking.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videa & Streamy</b></td>
      <td style="text-align:left">Websites that serve the purpose of providing videos and streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ostatní</b></td>
    <td style="text-align:left"><b>Ostatní</b></td>
      <td style="text-align:left">Anything that does not fall under a specific category listed above.</td>
      </td>
    </tr>
  </tbody>
</table>