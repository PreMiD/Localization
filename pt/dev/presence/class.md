---
title: Classe de presença
description: A classe principal para cada presença do PreMiD
published: true
date: 2020-01-19T23:42:31.382Z
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

#### `mediaKeys`

Esta propriedade diz ao nosso aplicativo para registrar as teclas de atalho para chaves de mídia e nos permite usar o evento `MediaKeys` para a classe `Presença`.

Esta propriedade não é necessária, mas se você quiser habilitar as chaves de mídia, você deve configurá-la como `verdadeiro`.

**Todos os eventos da MediaKey estão temporariamente desativados!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Permite que os usuários usem chaves de mídia
});
```

## Métodos

### `setActivity(presenceData, Boolean)`

Define a atividade do seu perfil de acordo com os dados fornecidos.

Primeiro parâmetro requer uma interface de `presenceData` para obter todas as informações que você deseja exibir no seu perfil.

O segundo parâmetro define quando a presença está reproduzindo algo ou não. Sempre use `verdadeiro` se você fornecer timestamps na `presenceData`.

### `clearActivity()`

Limpa sua atividade atual, os atalhos e títulos da bandeja.

### `setTrayTitle(String)`

> Este método funciona somente no Mac OS. 
> 
> {.is-warning}

Define o título da bandeja no Menubar.

### `getStrings(Objeto)`

Permite que você obtenha frases traduzidas da extensão. Você deve fornecer `objeto` com as chaves sendo a chave para string, `keyValue` é o valor string (string). Você pode encontrar algumas das strings usando este endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Retorna strings `Playing` e `Paused`
// de extensão.
strings = await presence.getStrings({
    play: "presence.playback.playuse",
    pause: "presence.playback.paused"
});
```

### `letiable(String)`

Retorna uma variável a partir do site, se ela existir.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Isto registrará o "conteúdo variável"
```

## `Interface de presençaDados`

A interface de `presenceData` é recomendada para ser usada quando você estiver usando o método `setActivity()`.

Essa interface tem as seguintes variáveis, todas elas são opcionais.

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
    detalhes: "My title",
    state: "Minha descrição",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Você me pairou e o que agora? ,
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Eventos

Os eventos permitem que você detecte e lide com algumas alterações ou chamadas que foram feitas. Você pode assinar eventos usando o `no método`.

```typescript
presence.on("UpdateData", async () => {
    // Faça algo quando os dados são atualizados.
});
```

Há alguns eventos disponíveis:

#### `AtualizarDados`

Este evento é disparado toda vez que a presença é atualizada.

#### `MediaKeys` (desativado)

Disparar quando o usuário usa chaves de mídia em seu teclado, [clique aqui](/dev/presence/class#mediakeys) para obter mais informação sobre as chaves de mídia.

#### `iFrameData`

Fatiado quando os dados são recebidos do script iFrame.