---
title: Metadata.json
description: Contains basic data about the Presence
published: true
date: 2020-01-18T20:32:58.015Z
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
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Beskrivning</th>
      <th style="text-align:left">Type</th>
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
      <td style="text-align:left">Titeln på tjänsten som denna närvaro stödjer.</td>
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
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to.</b>
      </td>
      <td style="text-align:left"><code>Sträng, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nej</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
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
      <td style="text-align:left">En sträng som används för att representera kategorin närvaron faller under.</td>
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
      <td style="text-align:left">En reguljära uttrycksväljare som väljer iframes att injicera i.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
  </tbody>
</table>

## Regular Expressions

If you want to learn regular expressions, here are a few websites.

### Learning

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

### Testing

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Category</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Beskrivning</th>
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
      <td style="text-align:left"><b>spel</b></td>
    <td style="text-align:left"><b>Spel</b></td>
      <td style="text-align:left">Any website that has game related content, such as <code>Kahoot</code> or <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>musik</b></td>
    <td style="text-align:left"><b>Musik</b></td>
      <td style="text-align:left">These are websites that offer music related content, whether that be streaming or downloading.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socialt</b></td>
        <td style="text-align:left"><b>Socialt</b></td>
      <td style="text-align:left">Websites that are used for the purpose of creating and sharing content or  for participating in other forms of social networking.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videor & Streams</b></td>
      <td style="text-align:left">Websites that serve the purpose of providing videos and streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>annat</b></td>
    <td style="text-align:left"><b>Annat</b></td>
      <td style="text-align:left">Anything that does not fall under a specific category listed above.</td>
      </td>
    </tr>
  </tbody>
</table>