---
title: Presence Class
description: A classe principal para cada presença do PreMiD
published: true
date: 2019-10-06T23:18:10.415Z
tags:
---

# Presence Class

## Introdução

A classe `Presence` é muito útil, já que tem métodos básicos que precisamos para criar uma presença.

 Ao criar uma classe você deve especificar a propriedade `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Exemplo de clientId
});
```

Há duas propriedades disponíveis para a classe `Presence`.

#### `clientId`

A propriedade `clientId` deve ser fornecida para que sua presença funcione, porque ela usa a sua Application ID para exibir o seu logotipo e os assets.

Você pode obter sua Application ID na [página de aplicativos](https://discordapp.com/developers/applications).

#### `mediaKeys`

Esta propriedade diz ao nosso aplicativo para registrar as teclas de atalho para as teclas de mídia e nos permite usar o evento `MediaKeys` para a classe `Presence`.

Esta propriedade não é necessária, mas se você quiser habilitar as teclas de mídia, você deve configurá-la como `true`.

**Todos os eventos de mediaKey estão temporariamente desativados!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Permite usuários à usar teclas de mídia
});
```

## Métodos

### `setActivity(presenceData, Boolean)`

Define a atividade do seu perfil de acordo com os dados fornecidos.

O primeiro parâmetro requer uma interface de `presenceData` para obter todas as informações que você deseja exibir no seu perfil.

O segundo parâmetro define quando a presença está reproduzindo algo ou não. Sempre use `true` se você fornecer timestamps na `presenceData`.

### `clearActivity()`

Limpa sua atividade atual, os atalhos e título de bandeja.

### `setTrayTitle(String)`

> Este método funciona apenas no Mac OS. 
> 
> {.is-warning}

Define o título da bandeja no Menubar.

### `getStrings(Object)`

Allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Descrição</th>
      <th style="text-align:left">Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">A primeira linha da sua presença, geralmente usada como cabeçalho.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Segunda linha da sua presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Define o tempo atual.<br>
        Usado se você quiser mostrar quantas <code>horas:minutos:segundos</code> restantes.
          <br>Você deve converter o tempo em <code>horário</code> ou você receberá uma
          contagem errada.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Defines the full duration.
        <br>Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>Você deve converter o tempo em <code>horário</code> ou você receberá uma
          contagem errada.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Defines the logo for the presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Defines the small icon next to presence&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Defines the text that will be shown to user when he will hover the small
        icon.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "Meu título",
    state: "Minha descrição",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Você está em cima de mim, e agora?",
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

Há alguns eventos disponíveis:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `MediaKeys` (disabled)

Fired when user uses media keys on his keyboard, [click here](/dev/presence/class#mediakeys) to get more information about media keys.

#### `iFrameData`

Fired when data is received from iFrame script.