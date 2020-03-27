---
title: Třída přítomnosti
description: Hlavní třída pro každou přítomnost PreMiD
published: true
date: 2020-02-12T22:15:28.557Z
tags:
---

# Třída přítomnosti

## Úvod

Třída `Presence` je velmi užitečná, protože má základní metody, které potřebujeme k vytvoření přítomnosti.

 Při vytváření třídy musíte zadat `klientské Id`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

Jsou k dispozici dvě vlastnosti pro `Presence` třídu.

#### `clientId`

Musí být poskytnuta vlastnost `klientských Id` , aby vaše přítomnost fungovala, protože používá ID vaší aplikace k zobrazení jejího loga a majetku.

Můžete to získat na stránce [aplikací](https://discordapp.com/developers/applications).

#### `mediaKeys`

Tato vlastnost říká naší aplikaci, aby registrovala klíčové vazby pro mediální klíče a umožňuje nám použít událost `MediaKeys` pro třídu `Presence`.

Tato vlastnost není vyžadována, ale pokud chcete povolit mediální klíče, měli byste ji nastavit na `true`.

**Všechny události mediaKey jsou dočasně zakázány!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Umožňuje uživatelům používat mediální klíče
});
```

## Metody

### `setActivity(presenceData, Boolean)`

Nastaví vaši aktivitu profilu podle zadaných dat.

První parametr vyžaduje rozhraní `přítomnostiData` pro získání všech informací, které chcete zobrazit ve vašem profilu.

Druhý parametr definuje, když přítomnost něco hraje nebo ne. Vždy používejte `tru` pokud poskytnete časové značky v `přítomnostiData`.

### `clearActivity()`

Vymaže vaši aktuální aktivitu, klávesové zkratky a název lišty.

### `setTrayTitle(String)`

> Tato metoda funguje pouze na Mac OS. 
> 
> {.is-warning}

Nastaví titulek lišty v menu

### `getStrings(Objekt)`

Umožňuje získat přeložené řetězce z rozšíření. Musíte zadat `Objekt` s klíčem pro řetězec, `keyValue` je hodnota řetězce. Můžete najít některé řetězce pomocí tohoto koncového bodu: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Vrátí `Playing` a `Paused` řetězce
// z rozšíření.
řetězce = čekat na přítomnost.getStrings({
    přehrávání: "presence.playback.playing",
    pozastavení: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Vrátí proměnnou z webu, pokud existuje.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Toto bude zaznamenávat "Proměnný obsah"
```

## `přítomnostiData` Rozhraní

Rozhraní `PresenceData` se doporučuje používat, pokud používáte metodu `setActivity()`.

Toto rozhraní sleduje proměnné, všechny jsou volitelné.

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
      <td style="text-align:left">První řádek v přítomnosti, obvykle používaný jako záhlaví.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">stav</td>
      <td style="text-align:left">Druhá linie v přítomnosti.</td>
      <td style="text-align:left"><code>Řetězec</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definuje aktuální čas.<br>
        Používá se, pokud chcete zobrazit, kolik <code>hodin:minut:sekund</code> zbývá.
          <br>Musíte převést svůj čas na <code>časové razítko</code> nebo dostanete špatný
          odpočítávání.
      </td>
      <td style="text-align:left"><code>Číslo</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definuje celou dobu trvání.
        <br>Používá se, pokud chcete zobrazit kolik <code>hodin:minut:sekund</code> zbývá.
          <br>Musíte převést svůj čas na <code>časové razítko</code> nebo dostanete špatný
          odpočítávání.
      </td>
      <td style="text-align:left"><code>Číslo</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definuje logo pro přítomnost.</td>
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
var PresenceData: PresenceData = {
    detaily: "My title",
    stav: "Můj popis",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Přešli jste mě a co teď? ,
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Události

Události vám umožňují rozpoznat a zpracovat některé změny nebo hovory, které byly provedeny. Události můžete odebírat pomocí metody `na`

```typescript
presence.on("UpdateData", async () => {
    // Proveďte něco, když se data aktualizují.
});
```

K dispozici je jen málo událostí:

#### `UpdateData`

Tato událost je vypálena pokaždé, když se aktualizuje přítomnost.

#### `MediaKeys` (zakázáno)

Vyplněn, když uživatel používá mediální klíče na své klávesnici, [klikněte zde](/dev/presence/class#mediakeys) , abyste získali více informací o mediálních klíčích.

#### `iFrameData`

Zapáleno při příjmu dat ze skriptu iFram.