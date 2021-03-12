---
title: Classe Presence
description: A classe principal para cada presence do PreMiD
published: true
date: 2021-02-26T20:42:26.910Z
tags:
editor: markdown
dateCreated: 2021-02-21T21:13:14.449Z
---

# Classe Presence

## Introdução

A classe `Presence` é muito útil, já que tem métodos básicos que precisamos para criar uma presence.

Ao criar uma classe você deve especificar a propriedade `clientId`.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Exemplo de clientId
});
```

### Propriedades

Existem 3 propriedades disponíveis para a classe `Presence`.

#### `clientId`

Este propriedade é obrigatória para sua presence funcionar, pois utilizamos o seu Application ID para exibir a logo e os assets. Você pode obter sua Application ID na [página de aplicativos](https://discordapp.com/developers/applications).

#### `injectOnComplete`

Quando a propriedade `injectOnComplete` estiver definida para `true` o primeiro evento `UpdateData` para ambos os arquivos`presence.ts` e `iframe.ts` só será disparado quando a página carregar completamente.

#### `appMode`

Quando a propriedade `appMode`: estiver definida para `true` e a presence enviar um objeto `PresenceData` vazio, o app irá exibir a aplicação (imagem e nome) no perfil do usuário em vez de não exibir nada.

## Métodos

### `getActivity()`

Retorna um objeto `PresenceData` do que a presence está exibindo.

### `setActivity(PresenceData | Slideshow, Boolean)`

Define a atividade do seu perfil de acordo com os dados fornecidos.

O primeiro parâmetro requer uma interface[`PresenceData`](#presencedata-interface) ou uma classe [`Slideshow`](/dev/presence/slideshow) para obter todas as informações que você deseja exibir em seu perfil.

O segundo parâmetro define quando a presence está reproduzindo algo ou não. Sempre utilize `true` se você estiver utilizando timestamps na `PresenceData`.

### `clearActivity()`

Limpa sua atividade e o título atual.

### `setTrayTitle(String)`

> Este método funciona apenas no Mac OS. 
> 
> {.is-warning}

Define o título da bandeja no Menubar.

### `createSlideshow()`

Cria uma nova classe `Slideshow`.

```typescript
const slideshow = presence.createSlideshow();
```

É sugerido fazer isso logo após a criação da classe `Presence`:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Examplo de clientId
  }),
  slideshow = presence.createSlideshow();
```

Você pode encontrar a documentação da classe `Slideshow` [aqui](/dev/presence/slideshow).

### `getStrings(Object)`

Um método assíncrono que permite que você pegue strings traduzidas da extensão.

Você deve fornecer o `Objeto` com as chaves sendo a chave para string, `keyValue` é o valor da string. Uma lista de strings traduzidas pode ser encontrada utilizada este endpoint: `https://api.premid.app/v2/langFile/presence/pt-br`

```typescript
// Retorna strings `Jogando` e `Pausado`
// a partir da extensão.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // resultado: Jogando
const pauseString = strings.pause; // resultado: Pausado
```

Desde a versão 2.2.0 da extensão você pode obter as strings de uma determinada língua. Isso funciona bem com a opção de configuração também recém-adicionada `multiLanguage`.

Sugerimos que você use o seguinte código para que ele atualize automaticamente os dados da Presence se o usuário alterar o idioma selecionado;

```typescript
// Uma interface das strings que você está recebendo (boa para qualidade de código e autocomplete).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // As strings que você está recebendo, certifique-se de que isto se encaixa com sua interface LangStrings.
      play: "general.playing",
      pause: "general.paused"
    },
    // O ID é o ID da configuração multiLanguage.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // O ID é o ID da configuração multiLanguage.
  oldLang: string = await presence.getSetting("ID");

//! O seguinte código deve estar dentro do evento updateData!
// O ID é o ID da configuração multiLanguage.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // resulta: Reproduzindo
const pauseString = strings.pause; // resulta: Pausado
```

### `getPageletiable(String)`

Retorna uma variável a partir do site, se ela existir.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Isso irá registrar o "Variable content"
```

### `getExtensionVersion(Boolean)`

Retorna a versão da extensão que o usuário está usando.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Irá registrar 210
const version = presence.getExtensionVersion(false);
console.log(version); // Irá registrar 2.1.0
```

### `getSetting(String)`

Retorna o valor da configuração.

```typescript
const setting = await presence.getSetting("pdexID"); //Substitua pdexID pelo id da configuração
console.log(setting); // Isto registrará o valor da configuração
```

### `hideSetting(String)`

Esconde a configuração fornecida.

```typescript
presence.hideSetting("pdexID"); // Substitua pdexID pelo id da configuração
```

### `showSetting(String)`

Mostra a configuração fornecida (Somente funciona se a configuração já estava escondida).

```typescript
presence.showSetting("pdexID"); // Substitua pdexID pelo id da configuração
```

### `getLogs()`

Retorna os logs do console do site.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Isto registrará os últimos 100 logs (em uma array).
```

**Nota:** Requer que `readLogs` seja `true` no arquivo `metadata.json`.

### `info(String)`

Registra a mensagem fornecida no console em um formato baseado na presence no estilo `info`.

```typescript
presence.info("Test") // Isto registrará "test" no estilo correto.
```

### `success(String)`

Registra a mensagem fornecida no console em um formato baseado na presence no estilo `success`.

```typescript
presence.info("Test") // Isto registrará "test" no estilo correto.
```

### `error(String)`

Registra a mensagem fornecida no console em um formato baseado na presence no estilo `error`.

```typescript
presence.info("Test") // Isto registrará "test" no estilo correto.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Retorna 2 `snowflake` timestamps em uma `Array` que pode ser usado para `startTimestamp` e `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nota:** A `String` fornecida no querySelector é um exemplo.

### `getTimestamps(Number, Number)`

Retorna 2 `snowflake` timestamps em uma `Array` que pode ser usado para `startTimestamp` e `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nota:** A `String` fornecida no querySelector é um exemplo.

### `timestampFromFormat(String)`

Converte uma string com formato `HH:MM:SS`, `MM:SS` ou `SS` em um número inteiro (Não retorna snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nota:** A `String` fornecida no querySelector é um exemplo.

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
      <td style="text-align:left">A primeira linha da sua presence, geralmente usada como cabeçalho.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Segunda linha da sua presence.</td>
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
      <td style="text-align:left">Define a duração total.
        <br>Usado se você quiser mostrar quantos <code>horas:minutos:segundos</code> faltam.
          <br>Você deve converter seu tempo em <code>timestamp</code> ou você receberá uma contagem regressiva errada.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Define o logo para a presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Define o pequeno ícone ao lado do logo da presence.</td>
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
        <tr>
      <td style="text-align:left">buttons</td>
      <td style="text-align:left">Array de botões, máx. 2, label é o texto do botão, e url é o link.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "Meu titulo",
  state: "Minha descrição",
  largeImageKey: "service_logo",
  smallImageKey: "small_service_icon",
  smallImageText: "Você me apontou, e agora?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
};
```

## Events

Os eventos permitem que você detecte e lide com algumas alterações ou chamadas que foram feitas. Você pode assinar eventos usando o método `on`.

```typescript
presence.on("UpdateData", async () => {
  // Faz algo quando os dados são atualizados.
});
```

Há alguns eventos disponíveis:

#### `UpdateData`

Este evento é disparado toda vez que a presence é atualizada.

#### `iFrameData`

Disparado quando os dados são recebidos do script iFrame.
