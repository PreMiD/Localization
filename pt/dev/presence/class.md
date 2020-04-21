---
title: Classe de presença
description: A classe principal para cada presença do PreMiD
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# Classe de presença

## Introdução

A classe `Presença` é muito útil, já que tem métodos básicos que precisamos para criar uma presença.

 Ao criar uma classe você deve especificar a propriedade `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Exemplo clientId
});
```

Há duas propriedades disponíveis para a `Presença` classe.

#### `clientId`

`a propriedade clientId` deve ser fornecida para que sua presença funcione, porque ela usa o ID do aplicativo para exibir o seu logotipo e ativos.

Você pode obtê-lo na sua [página de aplicativos](https://discordapp.com/developers/applications).

## Métodos

### `setActivity(presenceData, Boolean)`

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> Este método funciona somente no Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Objeto)`

Allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

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

### `getExtensionVersion(Boolean)`
Returns version of the extension the user is using.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `Interface de presençaDados`

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variável</th>
      <th style="text-align:left">Descrição</th>
      <th style="text-align:left">Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">detalhes</td>
      <td style="text-align:left">A primeira linha da sua presença, geralmente usada como cabeçalho.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Estado</td>
      <td style="text-align:left">Segunda linha em sua presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Define o tempo atual.<br>
        Usado se você quiser mostrar quantas <code>horas:minutos:segundos</code> restantes.
          <br>Você deve converter seu tempo em <code>horário</code> ou receberá uma
          contagem regressiva errada.
      </td>
      <td style="text-align:left"><code>numero</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Define a duração completa.
        <br>Usado se você quiser mostrar quantas <code>horas:minutos:segundos</code> restantes.
          <br>Você deve converter seu tempo em <code>horário</code> ou receberá uma
          contagem regressiva errada.
      </td>
      <td style="text-align:left"><code>numero</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Key</td>
      <td style="text-align:left">Define o logotipo para a presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Chave</td>
      <td style="text-align:left">Define o pequeno ícone ao lado da presença&apos;logo .</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">minhaImagemTexto</td>
      <td style="text-align:left">Define o texto que será exibido ao usuário quando ele irá colocar o cursor no ícone de
        pequeno.</td>
      <td style="text-align:left"><code>String</code>
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

## Eventos

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `AtualizarDados`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
