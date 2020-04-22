---
title: Metadata.json
description: Contém dados básicos sobre a Presença
published: true
date: 2020-04-22T20:07:56.204Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

O exemplo desse arquivo pode ser encontrado abaixo.

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
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

## Entendendo os metadados

Esse exemplo parece realmente estranho, né? Não se preocupe, não é tão difícil entender para que cada variável serve.

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
      <td style="text-align:left"><b>autor(a)</b>
      </td>
      <td style="text-align:left">Deve conter um objeto com <code>nome</code> e <code>id</code> do desenvolvedor de pressão. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>de usuário</code> pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contribuidores(as)</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the contributor. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>de usuário</code> pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Matriz&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>serviço</b>
      </td>
      <td style="text-align:left">O título do serviço que esta presença suporta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>descrição</b>
      </td>
      <td style="text-align:left">Uma pequena descrição da presença, você pode usar a descrição do serviço
        se estiver fora de ideias. Sua descrição deve ter valores de par chave que indicam o idioma e a descrição nesse idioma específico. Faça descrições com os idiomas <i>que você conhece</i>, nossos tradutores farão alterações ao seu arquivo de metadados. Ver categoria os idiomas de presença de uma lista. </td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL</b>
      </td>
      <td style="text-align:left">URL do serviço.<br><b>Exemplo:</b><code>vk. om</code><br>
        <b>Este url deve corresponder à url do site, pois será usada para detectar onde quer que este seja ou não o site para injetar o script. Isso só pode ser usado como um array quando houver mais de uma url.</b>
      </td>
      <td style="text-align:left"><code>String, Matriz&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Uma string de expressão regular usada para combinar urls.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versão</b>
      </td>
      <td style="text-align:left">Versão da sua presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logotipo</b>
      </td>
      <td style="text-align:left">Vincular ao tipo de logotipo de serviço&apos;s.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link para sua miniatura de presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>cor</b>
      </td>
      <td style="text-align:left"><code>Valor</code> #HEX. Recomendamos usar uma cor primária do serviço
        que a sua presença suporta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>etiquetas</b>
      </td>
      <td style="text-align:left">Array com tags, eles ajudarão os usuários a pesquisar sua presença no site.</td>
      <td
      style="text-align:left"><code>String, Matriz&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Categoria</b>
      </td>
      <td style="text-align:left">Uma seqüência de caracteres usada para representar a categoria na qual a presença cai.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Define se <code>iFrames</code> são usados</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Um seletor de expressão regular que seleciona iframes para injetar.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Matriz&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
  </tbody>
</table>

## Expressões regulares

Se você quer aprender expressões regulares, aqui estão alguns sites.

#### Aprender

• [RegexOne](https://regexone.com/) • [Expressões Regulares](https://www.regular-expressions.info/tutorial.html)

#### Teste

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Idiomas de presença

PreMiD é um serviço poliglota, o que significa que há uma infinidade de idiomas envolvidos para conectar usuários por todo o mundo. Uma lista completa de idiomas pode ser encontrada neste [endpoint da API](https://api.premid.app/v2/langFile/list).

## Presence settings
Setup interactive settings so users can customize the presence!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //Boolean value will make it an on/off switch with the value as the default value
        },
        {
            "id": "ID",
            "if": {
                "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist", //Putting in a string will make the setting an input one, where you can use a custom input.
            "placeholder": "use %song or %artist" //When input is empty it will show this grayed out
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Default value of the selector
            "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
        }
    ]
```

Use the following methods to get settings info in your presence files:
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

## Categorias de presença

Ao fazer a sua presença, deve especificar uma categoria na qual a presença se encaixa. Esta é uma lista compilada das categorias que você pode usar.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Categoria</th>
      <th style="text-align:left">Nome:</th>
      <th style="text-align:left">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Tudo relacionado a anime, desde fóruns a plataformas de streaming de vídeo.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>jogos</b></td>
    <td style="text-align:left"><b>Jogos</b></td>
      <td style="text-align:left">Qualquer site que possua conteúdo relacionado a jogos, como <code>Kahoot</code> ou <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>música</b></td>
    <td style="text-align:left"><b>Música</b></td>
      <td style="text-align:left">Estes são sites que oferecem conteúdo relacionado a música, seja streaming ou download.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>social</b></td>
        <td style="text-align:left"><b>Social</b></td>
      <td style="text-align:left">Sites que são usados para criar e compartilhar conteúdo ou para participar de outras formas de rede social.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>vídeos</b></td>
        <td style="text-align:left"><b>Vídeos e Transmissões</b></td>
      <td style="text-align:left">Sites que servem para fornecer vídeos e streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>outro</b></td>
    <td style="text-align:left"><b>Outro</b></td>
      <td style="text-align:left">Qualquer coisa que não se enquadre em uma categoria específica listada acima.</td>
      </td>
    </tr>
  </tbody>
</table>