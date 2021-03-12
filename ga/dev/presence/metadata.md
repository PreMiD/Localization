---
title: Metadata.json
description: Tá sonraí bunúsacha ann faoin Presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Más mian leat láithreacht a fhoilsiú sa siopa agus é a luchtú tríd an síneadh, ba cheart duit an `metadata.json` comhad a chruthú i d’ `dist` fhillteán.

Is féidir sampla den chomhad sin a fháil thíos.

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

## Na metadata.json a thuiscint

Breathnaíonn an sampla sin an-aisteach, huh? Ná bíodh imní ort, níl sé chomh deacair sin gach athróg a thuiscint.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Athróg</th>
      <th style="text-align:left">Cur síos</th>
      <th style="text-align:left">Cineál</th>
      <th style="text-align:left">Roghnach</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Ba cheart go mbeadh an Cuspóir leis an <code>name</code> agus <code>id</code> an forbróir presence. <code>name</code> is é d’ainm úsáideora Discord gan an t-aitheantóir (#0000). Is <code>id</code> féidir an t- úsáideoir a chóipeáil ó Discord trí mhodh forbróra a chumasú agus cliceáil ar dheis ar do phróifíl.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Ba chóir go mbeadh Réad leis an ranníocóir <code>name</code> agus <code>id</code> leis an ranníocóir. <code>name</code> is é d’ainm úsáideora Discord gan an t-aitheantóir (#0000). Is <code>id</code> féidir an t- úsáideoir a chóipeáil ó Discord trí mhodh forbróra a chumasú agus cliceáil ar dheis ar do phróifíl.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Tá</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Teideal na seirbhíse a dtacaíonn an láithreacht seo léi.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">A bheith in ann an láithreacht a chuardach ag úsáid ainm malartach.<br>
      An chiall atá le húsáid le haghaidh láithreacha a bhfuil ainmneacha difriúla orthu i dteangacha éagsúla (m.sh. Pokémon agus 포켓 몬스터).<br>
      Is féidir leat é a úsáid freisin le haghaidh láithreacha a bhfuil carachtair speisialta acu ionas nach gá duit iad sin a chlóscríobh (e.g. Pokémon agus Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Tá</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Tuairisc ar an tseirbhís <b>NÍL</b> an presence. Caithfidh príomhluachanna beirte a bheith ag do thuairisc a léiríonn an teanga, agus an tuairisc sa teanga shonrach sin. Déan tuairiscí leis na teangacha <i>atá ar eolas agat</i>, déanfaidh ár n-aistritheoirí athruithe ar do chomhad metadata. Féach ar an gcatagóir do theangacha presence le haghaidh liosta. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL na seirbhíse.<br>
      <b>Sampla: </b><code>vk.com</code><br>
      <b>Caithfidh an url seo url an láithreáin ghréasáin a mheaitseáil mar go n-úsáidfear é chun a bhrath cibé áit nó nach é seo an suíomh Gréasáin chun an script a instealladh dó. Ní féidir é seo a úsáid ach mar eagar nuair a bhíonn níos mó ná urls amháin ann.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Teaghrán slonn rialta a úsáidtear chun urls a mheaitseáil.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tá</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Leagan de do presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Nasc le logotype na seirbhíse.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Nasc le do thumbnail presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> luach. Molaimid dath príomhúil na seirbhíse a thacaíonn do láithreacht leis a úsáid.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Eagraigh le clibeanna, cuideoidh siad le húsáideoirí do láithreacht a chuardach ar an suíomh Gréasáin.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Teaghrán a úsáidtear chun an chatagóir ina bhfuil an láithreacht a léiriú.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Níl</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Sainmhínítear an <code>iFrames</code> úsáidtear iad	</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Tá</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Roghnóir slonn rialta a roghnaíonn iframanna le instealladh isteach.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tá</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Sainmhínítear ar cheart logaí léitheoireachta a bheith sa síneadh.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tá</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Sraith socruithe is féidir leis an úsáideoir a athrú</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Tá</code></td>
    </tr>
  </tbody>
</table>

## Sloinn Rialta

Más mian leat nathanna rialta a fhoghlaim, seo cúpla suíomh Gréasáin.

#### Foghlaim

• [Físeán Tapa Tosaigh](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Faisnéis Léirithe Rialta](https://www.regular-expressions.info/tutorial.html)

#### Tástáil

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Teangacha Presence

Is seirbhís polagánach é PreMiD, rud a chiallaíonn go bhfuil an iliomad teangacha i gceist chun úsáideoirí a nascadh ar fud na cruinne. Is féidir liosta iomlán na dteangacha a fháil leis an [gcríochphointe API](https://api.premid.app/v2/langFile/list) seo. Chun do láithreacht a shaincheapadh níos mó fós is féidir leat ligean d’úsáideoirí a dteanga taispeána láithreachta a roghnú féach [`multiLanguage`](#multilanguage) níos mó.

## Socruithe láithreachta
Socruithe idirghníomhacha a shocrú ionas gur féidir le húsáideoirí an láithreacht a shaincheapadh!
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

#### Réamhrá

Úsáidtear an `multiLanguage` suíomh chun ligean d’úsáideoirí an teanga ar mian leo a bheith i láthair a roghnú de láimh. Éilíonn sé seo ort teaghráin ónár [API](https://api.premid.app/v2/langFile/presence/en) a úsáid, chun faisnéis a fháil faoi conas teaghráin a chur leis cliceáil [anseo](/dev/presence/metadata/adding-new-strings).

#### Socrú

Tá an `multiLanguage` leagan is cás ar leith, ní chuireann sé a cheangal ar `title` ná `icon` ní `value` no `values` mar suímh eile ach a dhéanann sé de dhíth ort roinnt rudaí níos mó a thus!

Is `multiLanguage` féidir an eochair a shocrú dóibh seo a leanas:

`true`: bain úsáid as seo mura bhfuil tú ag úsáid ach teaghráin den `general.json` chomhad agus `<service>.json` de chomhad an [Stór Logánaithe](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: ainm an chomhaid gan an síneadh (.json) a áireamh taobh istigh den [Stór Logánú](https://github.com/PreMiD/Localization/tree/master/src/Presence) (gan an `general` comhad a áireamh, ós rud é go bhfuil sé luchtaithe i gcónaí). Ní dhéanfar ach teangacha comónta an `general` chomhaid ionchuir agus an chomhaid ionchuir a liostáil. `Array<String>`: má tá níos mó ná comhad amháin á úsáid agat taobh istigh den [Stór Logánaithe](https://github.com/PreMiD/Localization/tree/master/src/Presence) is féidir leat na luachanna go léir in eagar a shonrú (gan an `general` comhad a áireamh, ós rud é go bhfuil sé luchtaithe i gcónaí). Ní dhéanfar ach teangacha coitianta de na comhaid go léir a liostáil.

#### Teaghráin nua a chur leis

##### Ag clónáil an tionscadail

1. Oscail críochfort agus cineál `git clone https://github.com/PreMiD/Localization`.
2. Roghnaigh fillteán de do rogha féin.
3. Oscail é i d’eagarthóir cód.

##### Ag cruthú an chomhaid

1. Téigh isteach san `src` fhillteán.
2. Téigh isteach san `Presence` fhillteán.
3. Déan comhad ainmnithe `<service>.json`. (Is í an tseirbhís an** t-ainm** (ní URL) i litreacha beaga na seirbhíse ar mhaith leat tacú léi.)

##### Ag cur na dtéad

Tosaíonn gach ceann `string` acu `Object` ón ainm leis an ainm seirbhíse agus ansin an t-ainm teaghrán mar a thugtar air le ponc eatarthu.

Is aitheantóir 1 fhocal den teachtaireacht an stringName.

An `Objec`t Tá 2 mhaoin; `message` agus `description`. `message` an téacs nach mór a aistriú. `description` is tuairisc é ar an teachtaireacht chun cabhrú lenár n-aistritheoirí an méid atá á aistriú acu a thuiscint.

**Nóta:** Ná cuir aon teaghráin dhúblacha leis. (Cuimsíonn sé seo teaghráin as an `general.json` gcomhad ach ní na comhaid eile.)

Amharcléiriú an chomhaid:

```typescript
{
  "<service>.<stringName>": {
    "message": "Téacs nach mór a aistriú.",
    "description": "Míníonn sé seo cad é an teachtaireacht thuas."
  },
  "<service>.<stringName>": {
    "message": "Téacs nach mór a aistriú.",
    "description": "Míníonn sé seo cad é an teachtaireacht thuas."
  }
}
```

Tar éis duit an comhad a dhéanamh go hiomlán le teaghráin is féidir leat Iarratas Tarraingthe a chruthú ar an [Stór Logánú](https://github.com/PreMiD/Localization), sa chur síos ní **mór** duit nasc le d’Iarratas Tarraingthe ar an láithreacht a nuashonrú arna nuashonrú ag baint úsáide as na teaghráin nua seo ón [Stór Láithreachta](https://github.com/PreMiD/Presences).

#### Eochracha réamhshocraithe
Socraítear na heochracha nár ghá duit a shocrú go huathoibríoch mar a leanas: `title`: "Teanga" **Nóta:** Aistrítear é seo go dtí a dteanga réamhshocraithe (teanga an bhrabhsálaí). `icon`: "fas fa-language" ([Réamhamharc](https://fontawesome.com/icons/language)) `value`: **Socraigh ar theanga a mbrabhsálaí má tá sé ar fáil (100% aistrithe), ar shlí eile Béarla.** `values`: **Socraigh ar na teangacha atá ar fáil (teangacha a bhfuil 100% aistrithe acu).**

**Nóta:** Ní féidir iad seo a athrú ar bhealach ar bith.

### Modhanna

Úsáid na modhanna seo a leanas chun faisnéis faoi shuíomhanna a fháil i do chomhaid láithreachta:
#### `getSetting(String)`
Tuairisceáin luach an tsuímh.
```typescript
const const = await presence.getSetting("pdexID"); // Cuir id an tsuímh in ionad pdexID
console.log(setting); // Déanfaidh sé seo luach an tsuímh a logáil
```

#### `hideSetting(String)`
Seithí tugtha suíomh.
```typescript
presence.hideSetting("pdexID"); //Cuir id an tsuímh in ionad pdexID
```

#### `showSetting(String)`
Seónna a thugtar an socrú (Ní oibríonn sé ach má bhí an suíomh i bhfolach cheana féin).
```typescript
presence.showSetting("pdexID"); //Cuir id an tsuímh in ionad pdexID
```

## Catagóirí Presence

Agus tú i láthair, caithfidh tú catagóir a shonrú a mbaineann an láithreacht léi. Is liosta tiomsaithe é seo de na catagóirí is féidir leat a úsáid.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Catagóir</th>
      <th style="text-align:left">Ainm</th>
      <th style="text-align:left">Cur síos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Rud ar bith a bhaineann le hanam, ó fhóraim go hardáin sruthú físeáin.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Cluichí</b></td>
      <td style="text-align:left">Aon suíomh Gréasáin a bhfuil ábhar a bhaineann le cluichí aige, mar shampla <code>Kahoot</code> nó <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Ceol</b></td>
      <td style="text-align:left">Is suíomhanna Gréasáin iad seo a thairgeann ábhar a bhaineann le ceol, bídís á sruthú nó á íoslódáil.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Sóisialta</b></td>
      <td style="text-align:left">Suíomhanna Gréasáin a úsáidtear chun ábhar a chruthú agus a roinnt nó chun páirt a ghlacadh i gcineálacha eile líonraithe sóisialta.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Físeáin agus Sruthanna</b></td>
      <td style="text-align:left">Suíomhanna Gréasáin a fhreastalaíonn ar chuspóirí físeáin agus sruthanna a sholáthar.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Eile</b></td>
      <td style="text-align:left">Rud ar bith nach dtagann faoi chatagóir ar leith a liostaítear thuas.</td>
    </tr>
  </tbody>
</table>

