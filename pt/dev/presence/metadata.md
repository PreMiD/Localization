---
title: Metadata.json
description: Contém dados básicos sobre a Presença
published: true
date: 2020-04-22T18:33:51.076Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

O exemplo deste arquivo pode ser encontrado abaixo.

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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Deve conter um Objeto com <code>name</code> e <code>id</code> do desenvolvedor da presença. <code>name</code> é seu nome de usuário no Discord sem seu identificador(#0000). O <code>id</code> do Usuário pode ser copiado no Discord ao ativar o modo de desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Deve conter um Objeto com <code>name</code> e <code>id</code> do colaborador. <code>name</code> é seu nome de usuário no Discord sem seu identificador(#0000). O <code>id</code> do Usuário pode ser copiado no Discord ao ativar o modo de desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Array&lt;Objeto&gt;</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">O título do serviço que esta presença suporta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Uma pequena descrição da presença, você pode usar a descrição do serviço se você estiver sem idéias. Sua descrição deve ter valores de key pair que indicam o idioma e a descrição nesse idioma específico. Faça descrições com os idiomas <i>que você conhece</i>, nossos tradutores farão alterações ao seu arquivo de metadados. Veja a categoria para idiomas de presença para uma lista. </td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL do serviço.<br><b>Exemplo:</b><code>vk.com</code><br>
        <b> Este URL deve corresponder ao URL do site, pois será usado para detectar onde quer que seja o site para injetar o script. Isso só pode ser usado como uma matriz quando houver mais de um Url.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
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
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versão da sua presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link para o logotipo do serviço.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link para sua miniatura da presença.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left">Valor <code>#HEX</code>. Recomendamos usar uma cor primária do serviço que a sua presença suporta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Array com tags, eles ajudarão os usuários a pesquisar sua presença no site.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Uma string usada para representar a categoria na qual a presença cai.</td>
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
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Um seletor de expressão regular que seleciona <code>iFrames</code> para injetar.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Um conjunto de configurações que o usuário pode alterar</td>
      <td style="text-align:left"><code>Array&lt;Objeto&gt;</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
  </tbody>
</table>

## Expressões regulares

Se você quer aprender expressões regulares, aqui estão alguns sites.

#### Aprendendo

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testando

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Idiomas de presença

PreMiD é um serviço poliglota, o que significa que há uma infinidade de idiomas envolvidos para conectar usuários por todo o mundo. Uma lista completa de idiomas pode ser encontrada neste [endpoint da API](https://api.premid.app/v2/langFile/list).

## Configurações de presença
Defina configurações interativas para que os usuários possam personalizar a presença!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "TÍTULO DE EXIBIÇÃO",
            "icon": "ÍCONE GRATUITO FONTAWESOME ", //Exemplo "fas fa-info"
            "value": true //Valor booleano, formará um interruptor de liga/desliga com o valor como padrão
        },
        {
            "id": "ID",
            "if": {
                "ID": true //Se outra configuração é igual a este valor (true/false/0/1/etc.) então mostre este botão
            },
            "title": "TÍTULO DE EXIBIÇÃO",
            "icon": "ÍCONE GRATUITO FONTAWESOME ",
            "value": "\"%song\" por %artist", //Colocando em uma string fará com que a configuração seja uma entrada, onde você pode usar uma entrada personalizada.
            "placeholder": "use %song ou %artist" //Quando a entrada está vazia, ela mostrará de forma acinzentada
        },
        {
            "id": "ID",
            "title": "TÍTULO DE EXIBIÇÃO",
            "icon": "ICONE GRATUITO FONTAWESOME ",
            "value": 0, //Valor padrão do seletor
            "values": ["1", "2", "etc. ] //Vai fazer da configuração um seletor onde você seleciona o que você quer
        }
]
```

Use os seguintes métodos para obter informações de configurações em seus arquivos de presença:
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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
    <td style="text-align:left"><b>Jogos</b></td>
      <td style="text-align:left">Qualquer site que possua conteúdo relacionado a jogos, como <code>Kahoot</code> ou <code>Gartic</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
    <td style="text-align:left"><b>Música</b></td>
      <td style="text-align:left">Estes são sites que oferecem conteúdo relacionado a música, seja streaming ou download.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Redes Sociais</b></td>
      <td style="text-align:left">Sites que são usados para criar e compartilhar conteúdo ou para participar de outras formas de rede social.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Vídeos e Streams</b></td>
      <td style="text-align:left">Sites que servem para fornecer vídeos e streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
    <td style="text-align:left"><b>Outros</b></td>
      <td style="text-align:left">Qualquer coisa que não se enquadre em uma categoria específica listada acima.</td>
      </td>
    </tr>
  </tbody>
</table>