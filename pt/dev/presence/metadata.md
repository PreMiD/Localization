---
title: Metadata.json
description: Contém dados básicos sobre a Presença
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Se você quer publicar uma presença na loja e carregá-la através da extensão, você deve criar o arquivo `metadata.json` em sua pasta `dist`.

Um exemplo desse arquivo pode ser encontrado abaixo.

```typescript
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
  "altnames": ["SERVICE"],
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
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

## Compreendendo o metadata.json

Esse exemplo parece realmente estranho, certo? Não se preocupe, não é tão difícil entender para que cada variável serve.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variável</th>
      <th style="text-align:left">Descrição</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Opcional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Deve conter um Objeto com o <code>nome</code> e o <code>id</code> do desenvolvedor da Presence. <code>name</code> é seu nome de usuário Discord sem o identificador(#0000). O <code>id</code> do Usuário pode ser copiado no Discord ao ativar o modo de desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Objeto</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Deve conter um Object com o <code>nome</code> e <code>id</code> do contribuidor. <code>name</code> é seu nome de usuário Discord sem o identificador(#0000). O <code>id</code> do Usuário pode ser copiado no Discord ao ativar o modo de desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Array&lt;Objeto&gt;</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">O título do serviço que esta presença suporta.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Seja capaz de pesquisar a Presence usando um nome alternativo.<br>
      Significa ser usado em Presences que têm nomes diferentes em línguas diferentes. (ex. Pokémon e 포켓몬스터).<br>
      Você também pode usar isso para Presences que possuem caracteres especiais e você não precisa digitá-los (ex. Pokémon e Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Descrição do serviço <b>NÃO</b> da presence. Sua descrição deve ter valores de key pair que indicam o idioma e a descrição nesse idioma específico. Faça descrições com os idiomas <i>que você conhece</i>, nossos tradutores farão alterações ao seu arquivo de metadados. Veja a categoria para idiomas de presença para uma lista. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL do serviço.<br>
      <b>Exemplo:</b><code>vk.com</code><br>
      <b>Esta url deve corresponder à url do site, pois será usada para detectar onde quer que seja ou não o site para injetar o script. Isso só pode ser usado como uma matriz quando houver mais de um Url.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Uma string de expressão regular usada para combinar urls.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Versão da sua presença.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link para o logotipo do serviço.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link para sua miniatura da presença.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">Valor <code>#HEX</code>. Recomendamos usar uma cor primária do serviço que a sua presença suporta.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array com tags, eles ajudarão os usuários a pesquisar sua presença no site.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Uma string usada para representar a categoria na qual a presença cai.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Não</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Define se <code>iFrames</code> são usados</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Um seletor de expressão regular que seleciona <code>iFrames</code> para injetar.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Define se a extensão deve estar lendo os logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Um conjunto de configurações que o usuário pode alterar</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Sim</code></td>
    </tr>
  </tbody>
</table>

## Expressões regulares

Se você quer aprender expressões regulares, aqui estão alguns sites.

#### Aprendendo

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testando

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Idiomas de presença

PreMiD é um serviço poliglota, o que significa que há uma infinidade de idiomas envolvidos para conectar usuários por todo o mundo. Uma lista completa de idiomas pode ser encontrada neste [endpoint da API](https://api.premid.app/v2/langFile/list). Para customizar ainda mais sua presence, você pode permitir que os usuários selecionem seu idioma de exibição da presence veja [`multiLanguage`](#multilanguage) para mais.

## Configurações de presença
Defina configurações interativas para que os usuários possam personalizar a presença!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Introdução

A configuração `multiLanguage` é usada para permitir que os usuários selecionem manualmente o idioma em que querem que a presence seja mostrada. Isto requer que você use strings de nossa [API](https://api.premid.app/v2/langFile/presence/en), para informações sobre como adicionar strings clique [aqui](/dev/presence/metadata/adding-new-strings).

#### Configuração

A configuração `multiLanguage` é um caso especial, não requer uma configuração `título` nem `icon` nem `valor` ou `valores` como outras configurações, mas requer mais algumas coisas para configurar!

A key `multiLanguage` pode ser ajustada para o seguinte:

`true`: use isto se você só vai usar strings do arquivo `general.json` e do arquivo `<service>.json` do [Repositório Localization](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: nome do arquivo excluindo a extensão (.json) dentro do [Repositório Localization](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluindo o arquivo `general`, já que está sempre carregado). Somente os idiomas comuns de ambos os `general` e arquivo inserido serão listados. `Array<String>`: se você estiver usando mais de um arquivo dentro do [Repositório Localization](https://github.com/PreMiD/Localization/tree/master/src/Presence) você pode especificar todos os valores em um array (excluindo o arquivo `general`, já que ele está sempre carregado). Apenas idiomas comuns de todos os arquivos serão listados.

#### Adicionando novas strings

##### Clonando o projeto

1. Abra o terminal e digite `git clone https://github.com/PreMiD/Localization`.
2. Escolha uma pasta que preferir.
3. Abra isso no seu editor de código.

##### Criação do arquivo

1. Vá para a pasta `src`.
2. Vá para a pasta `Presence`.
3. Crie um arquivo chamado `<service>.json`. (Service é o **nome** (não uma URL) em letras minúsculas do serviço que você deseja dar suporte.)

##### Adicionando as strings

Cada `string` é um `Objeto` onde a partir do nome começa com o nome do serviço e depois o chamado stringName com um ponto entre eles.

O stringName é um identificador de 1 palavra da mensagem.

O `Objeto` tem 2 propriedades; `message` e `description`. `message` é o texto que precisa ser traduzido. `description` é uma descrição da mensagem para ajudar nossos tradutores a entender o que eles estão traduzindo.

**Nota:** Não adicione nenhuma frase duplicada. (Isso inclui strings do arquivo `general.json` mas não os outros arquivos.)

Visualização do arquivo:

```typescript
{
  "<service>.<stringName>": {
    "message": "Texto que precisa ser traduzido.",
    "description": "Isso explica o que a mensagem acima é."
  },
  "<service>.<stringName>": {
    "message": "Texto que precisa ser traduzido.",
    "description": "Isso explica o que a mensagem acima é."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Métodos

Use os seguintes métodos para obter informações de configurações em seus arquivos de presença:
#### `getSetting(String)`
Retorna valor da configuração.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(String)`
Oculta determinada configuração.
```typescript
presence.hideSetting("pdexID"); //Substitua pdexID com o id da configuração
```

#### `showSetting(String)`
Mostra determinada configuração (somente funciona se a configuração já estava escondida).
```typescript
presence.showSetting("pdexID"); //Substitua pdexID com o id da configuração
```

## Categorias de presença

Ao fazer a sua presença, você deve especificar uma categoria na qual a presença cai. Esta é uma lista compilada das categorias que você pode usar.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Categoria</th>
      <th style="text-align:left">Nome</th>
      <th style="text-align:left">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Tudo relacionado a anime, desde fóruns a plataformas de streaming de vídeo.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Jogos</b></td>
      <td style="text-align:left">Qualquer site que possua conteúdo relacionado a jogos, como <code>Kahoot</code> ou <code>Gartic</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Música</b></td>
      <td style="text-align:left">Estes são sites que oferecem conteúdo relacionado a música, seja streaming ou download.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Redes Sociais</b></td>
      <td style="text-align:left">Sites que são usados para criar e compartilhar conteúdo ou para participar de outras formas de rede social.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Vídeos e Streams</b></td>
      <td style="text-align:left">Sites que servem para fornecer vídeos e streams.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Outros</b></td>
      <td style="text-align:left">Qualquer coisa que não se enquadre em uma categoria específica listada acima.</td>
    </tr>
  </tbody>
</table>

