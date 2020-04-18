---
title: Classe Presence
description: A classe principal para cada presença do PreMiD
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# Classe Presence

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

### `getStrings(Objeto)`

Permite que você obtenha frases traduzidas da extensão. Você deve fornecer o `Objeto` com as chaves sendo a chave para string, `keyValue` é o valor da string. Você pode encontrar algumas das strings usando este endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Retorna strings `Playing` e `Paused`
// a partir da extensão.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getSetting(String)`
Retorna valor da configuração.
```typescript
var setting = await presence.getSetting("pdexID"); //Substitua pdexID com o id da configuração
console.log(setting); // Isso registrará o valor da configuração
```

### `hideSetting(String)`
Oculta determinada configuração.
```typescript
presence.hideSetting("pdexID"); //Substitua pdexID com o id da configuração
```

### `showSetting(String)`
Mostra determinada configuração (somente funciona se a configuração já estava escondida).
```typescript
presence.showSetting("pdexID"); //Substitua pdexID com o id da configuração
```

### `getExtensionVersion(Boolean)`
Retorna a versão da extensão que o usuário está usando.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getPageLetiable(String)`

Retorna uma variável a partir do site, se ela existir.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Isto registrará o "conteúdo variável"
```

## Interface `presenceData`

A interface `presenceData` é recomendada quando você usar o método `setActivity()`.

Essa interface possui as seguintes variáveis, todas elas são opcionais.

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
      <td style="text-align:left"><code>Número</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Define a duração total.
        <br>Usado se você quiser mostrar quantos <code>horas:minutos:segundos</code> faltam.
          <br>Você deve converter o tempo em <code>horário</code> ou você receberá uma
          contagem errada.
      </td>
      <td style="text-align:left"><code>Número</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Define o logo para a presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Define o pequeno ícone ao lado do logo da presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Define o texto que será exibido ao usuário quando ele passar o cursor no pequeno 
        ícone.</td>
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

Os eventos permitem que você detecte e lide com algumas alterações ou chamadas que foram feitas. Você pode assinar eventos usando o método `on`.

```typescript
presence.on("UpdateData", async () => {
    // Faça algo quando os dados forem atualizados.
});
```

Há alguns eventos disponíveis:

#### `UpdateData`

Este evento é disparado toda vez que a presença é atualizada.

#### `iFrameData`

Disparado quando os dados são recebidos do script iFrame.
