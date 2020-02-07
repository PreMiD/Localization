---
title: Metadata.json
description: Contém dados básicos sobre a Presença
published: true
date: 2020-01-18T20:32:58.015Z
tags:
---

# Metadata.json

Se você deseja publicar uma presença na loja e carregá-la através da extensão, você deve criar o arquivo `metadata.json` na sua pasta `dist`.

O exemplo deste arquivo pode ser encontrado abaixo.

```javascript
{
  "author": {
    "name": "USUÁRIO",
    "id": "ID"
  },
  "contributors": [{
    "name": "USUÁRIO",
    "id": "ID"
  }],
  "service": "SERVIÇO",
  "description": {
    "en": "DESCRIÇÃO"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSÃO",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["CATEGORIA", "TAG"],
  "category": "CATEGORIA",
  "iframe": false
}
```

## Entendendo o metadata.json

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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Deve conter um objeto com <code>nome</code> e <code>id</code> do desenvolvedor de pressão. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>de usuário</code> pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Deve conter um objeto com <code>nome</code> e <code>id</code> do desenvolvedor de pressão. Nome é seu nome de usuário do Discord sem o identificador(#0000). Identificação <code>de usuário</code> pode ser copiada do Discord ativando o modo de
        desenvolvedor e com o botão direito do mouse no seu perfil.</td>
      <td style="text-align:left"><code>Matriz&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">O título do serviço que esta presença suporta.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Uma pequena descrição da presença, você pode usar a descrição do serviço
        se estiver fora de ideias. Sua descrição deve ter valores de par chave que indicam o idioma e a descrição nesse idioma específico. Faça descrições com os idiomas <i>que você conhece</i>, nossos tradutores farão alterações ao seu arquivo de metadados.</td>
      <td style="text-align:left"><code>Objeto</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL do serviço.<br><b>Exemplo:</b><code>vk. om</code><br>
        <b>Esta url deve corresponder à url do site, pois será usada para detectar onde quer que este seja ou não o site para injetar o script.</b>
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
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Sim</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versão da sua presença.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Vincular ao tipo de logotipo de serviço&apos;s.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link para sua miniatura de presença.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>Valor</code> #HEX. Recomendamos usar uma cor primária do serviço
        que a sua presença suporta.</td>
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Array com tags, eles ajudarão os usuários a pesquisar sua presença no site.</td>
      <td
      style="text-align:left"><code>String, Matriz&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Não</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Uma seqüência de caracteres usada para representar a categoria na qual a presença cai.</td>
      <td style="text-align:left"><code>Cordas</code>
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
      <td style="text-align:left"><code>Cordas</code>
      </td>
      <td style="text-align:left"><code>sim</code>
      </td>
    </tr>
  </tbody>
</table>

## Expressões regulares

Se você quer aprender expressões regulares, aqui estão alguns sites.

### Aprendendo

• [RegexOne](https://regexone.com/) • [Informações de expressões regulares](https://www.regular-expressions.info/tutorial.html)

### Testando

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

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