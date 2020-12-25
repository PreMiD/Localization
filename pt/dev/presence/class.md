---
title: Classe de presença
description: A classe principal para cada presença do PreMiD
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
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

### `getActivity()`

Retorna `presenceData` objeto de o que a presença está apresentando.

### `setActivity(presenceData, Boolean)`

Define a atividade do teu perfil de acordo com os dados fornecidos.

Primeiro parámetro requer `presenceData` interface para conseguir toda a informação para ver o que vai apresentar no seu perfil.

O segundo parâmetro define quando a presença está reproduzindo algo ou não. Sempre use `true` se você providenciar os timestamps em `presenceData`.

### `clearActivity()`

Limpa sua atividade atual, os atalhos e tray títulos.

### `setTrayTitle(String)`

> Este método funciona somente no Mac OS. 
> 
> {.is-warning}

Defina o título tray na Menubar.

### `getStrings(Object)`

An asyncronous method that allows you to get translated strings from extension. Você deve providenciar `Object` com as chaves sendo uma chave para a linha, `keyValue` é o valor da linha. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Retorna `Jogando` e `Pausado` linhas
// da extensão.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(String)`

Retorna a váriavel do website caso exista.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // Isso registrará a "Variable content"
```

### `getExtensionVersion(Boolean)`
Retorna a versão da extensão que o usuário está a usar.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
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

## `Interface de presençaDados`

A `presenceData` interface é recomendada para usar quando você está usando o método `setActivity()`.

Esta interface está seguindo as váriaveis, todas elas são opcionais.

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
    details: "Meu título",
    state: "Minha Descrição",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Você me girou, e agora?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Eventos

Os eventos permitem que você detecte e lide com algumas alterações ou chamadas que foram feitas. Você pode assinar eventos usando o método `on`.

```typescript
presence.on("UpdateData", async () => {
    // Faça algo quando os dados são atualizados.
});
```

Há poucos eventos disponíveis:

#### `AtualizarDados`

Este evento é disparado toda vez que a presença é atualizada.

#### `iFrameData`

Disparado quando os dados são recebidos do script iFrame.
