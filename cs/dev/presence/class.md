---
title: Třída Presence
description: Hlavní třída pro každou presenci PreMiD
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Třída Presence

## Úvod

Třída `Presence` je velmi užitečná, protože má základní metody, které potřebujeme k vytvoření presence.

 Při vytváření třídy musíte využít vlastnosti `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Příkladné clientId
});
```

Pro `Presence` třídu jsou k dispozici dvě vlastnosti.

#### `clientId`

Musí byt využita vlastnost `clientId`, aby vaše presence fungovala, protože používá id vaší aplikace k zobrazení jejího loga a jiného příslušenství.

Můžete ho získat na [ stránce vaší aplikace](https://discordapp.com/developers/applications).

## Metody

### `getActivity()`

Vrátí `presenceData` objekt toho, co presence zobrazuje.

### `setActivity(presenceData, Boolean)`

Nastaví vaši aktivitu profilu podle poskytnutých dat.

První parametr vyžaduje rozhraní `presenceData` pro získání všech informací, které chcete zobrazit ve vašem profilu.

Druhý parametr definuje, jestli presence něco hraje nebo ne. Vždy použijte `true` pokud poskytnete časové značky v `presenceData`.

### `clearActivity()`

Vymaže vaši aktuální aktivitu, klávesové zkratky a název lišty.

### `setTrayTitle(String)`

> Tato metoda funguje pouze na Mac OS. 
> 
> {.is-warning}

Nastaví název lišty v Menubaru.

### `getStrings(Object)`

Asynchroní metoda, která Vám umožňuje získat z Vašeho rozšíření přeložené texty. Musíte poskytnout `Object`, kde klíčem je klíč textu, a `keyValue` je tento text. Sbírku přeložených textů můžete najít na tomto endpointu: `https://api.premid.app/v2/langFile/extension/cs_CZ`

```typescript
// Vrací texty `Playing` a `Paused`
// z rozšíření.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // výsledek: Přehrává
const pauseString = strings.pause // result: Pozastaveno
```

### `getPageletiable(String)`

Vrátí ze stránky vybranou proměnnou pokud existuje.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // Toto zaznamená "Obsah proměnné"
```

### `getExtensionVersion(Boolean)`
Vrátí aktuální verzi používanou uživatelem.
```typescript
getExtensionVersion(onlyNumeric?: boolean): řetězec | number;

var numeric = presence.getExtensionVersion();
konzola. og(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`
Vrátí hodnotu nastavení.
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

## Rozhraní `presenceData`

Rozhraní `presenceData` se doporučuje využívat při použití metody `setActivity()`.

Rohraní má následující proměnné, žádná z nich není povinná.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Proměnná</th>
      <th style="text-align:left">Popis</th>
      <th style="text-align:left">Typ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Podrobnosti</td>
      <td style="text-align:left">První řádek ve vaší presence, obvykle používaný jako záhlaví.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">stav</td>
      <td style="text-align:left">Druhý řádek ve vaší presence.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definuje aktuální čas.<br>
        Používá se, pokud chcete zobrazit, kolik <code>hodin:minut:sekund</code> zbývá.
          <br>Aby odpočítávání fungovalo správně, musí být čas nejprve
          převeden na <code>timestamp</code>.
      </td>
      <td style="text-align:left"><code>Číslo</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definuje dobu trvání.
        <br>Používá se, pokud chcete zobrazit kolik <code>hodin:minut:sekund</code> zbývá.
          <br>Aby odpočítávání fungovalo správně, musí být čas nejprve
          převeden na <code>timestamp</code>.
      </td>
      <td style="text-align:left"><code>Číslo</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definuje logo pro presenci.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Určuje malou ikonu vedle loga&apos;s.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Malý obrázek</td>
      <td style="text-align:left">Definuje text, který se zobrazí uživateli, když se dotkne malé ikony
.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "My title",
    state: "My description",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "You hovered me, and what now?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Události

Události Vám umožňují detekovat a reagovat na některé uskutečněné změny či volání. Události můžete zaznamenávat pomocí metody `on`.

```typescript
presence.on("UpdateData", async () => {
    // Něco vykoná při změně dat.
});
```

Je k dispozici několik událostí:

#### `UpdateData`

Tato událost je vykonána vždy při aktualizaci presence.

#### `iFrameData`

Provedena při obdržení dat z iFrame skriptu.
