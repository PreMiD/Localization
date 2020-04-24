---
title: Développement de la présence
description:
published: vrai
date: 2020-04-24T12:47:02.402Z
tags:
---

> Toutes les présences sont maintenant stockées ici : https://github.com/PreMiD/Presences 
> 
> {.is-info}

La version `2.x` introduit le [magasin de présence](https://premid.app/store). Les utilisateurs ont maintenant la possibilité d'ajouter et de supprimer manuellement leurs présences favorites via l'interface utilisateur du [site web](https://premid.app/).

# Lignes directrices
> Si vous ne suivez pas toutes les directives, un `Vérificateur Presence` demandera les changements appropriés ou votre demande d'ajout peut même être fermée dans certaines circonstances. 
> 
> {.is-warning}

> Lorsque vous faites des demandes d'ajout ou de modification de présences existantes, vous **DEVEZ** inclure une capture d'écran. Cependant, les modifications apportées aux fichiers `metadata.json` ou `tsconfig.json` d'une présence ne nécessitent pas de capture d'écran. *Votre capture d'écran DOIT être téléchargée directement sur GitHub avec la demande de pull, n'utilisez pas de sites tiers de partage d'images.* 
> 
> {.is-warning}

Lors de la publication des présences sur ce GitHub, nous vous demandons de suivre un ensemble de directives. Pour certains, ces règles strictes peuvent paraître sévères. Cependant, l'implémentation de ces règles empêchera nos serveurs de faire face à n'importe quel problème.

## Création
> Le code que vous écrivez DOIT être *bien écrit* et DOIT être *lisible*. `DeepScan` sur GitHub rapportera des problèmes de qualité de code à la `équipe de vérification de Presence`. Nous recommandons que votre fork soit à jour lorsque vous faites des pull requests, cela aidera à limiter les faux positifs. 
> 
> {.is-warning}

- La pull request **DOIT** être complète, vous devez avoir une structure de fichier appropriée, les brouillons sont **PAS autorisés**. Incluant le dossier `dist` , le fichier `presence.js` et le fichier `metadata.json` qui est représenté dans le schéma d'exemple suivant :
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
ou si vous utilisez TypeScript et `iframe` (le max que vous pourriez atteindre) :
```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

Avant de commencer à travailler sur votre présence, gardez à l'esprit la liste suivante.
- La présence **DOIT** être liée au site Web que vous avez choisi.
- La présence **NE DOIT PAS** être de sites Web illégaux. Celles-ci incluent des stress, des drogues, du porn infantile, etc...
- Les métadonnées de présence **DOIVENT** avoir un contenu bien écrit, y compris des titres valides, et des descriptions.
- Le média que vous incluez (icône/vignette) **DOIT** être lié au site web et doit être compréhensible en termes de taille et de qualité.
- La structure de fichier **DOIT** être propre et gérée, n'ont pas de fichiers aléatoires qui ne fournissent rien à la fonction de présence.
- La présence **NE DOIT PAS** avoir d'intentions malveillantes. Celles-ci incluent le vol ou la fuite d'informations privées, affectant négativement le comportement du site, etc...
- Si vous créez une présence pour un site web et que le site web change dans le futur, vous **Êtes** responsable de la mise à jour de la présence pour fonctionner comme prévu. Si vous ne le corrigez pas dans les 7 jours, d'autres développeurs de présence sont autorisés à **OVERWRITE** votre présence pour se conformer aux changements.
- La présence **DOIT** être testée avant la publication pour confirmer que tout fonctionne comme prévu.
- Votre présence **DOIT** avoir des images et des descriptions SFW, qu'elles soient NSFW ou non. Si votre présence concerne un site Web NSFW, veuillez ajouter la balise `nsfw` à vos métadonnées.
- Votre présence **NE PEUT PAS** manipuler le stockage local sur le navigateur.
- Votre présence peut utiliser des cookies pour stocker des données. Toutes les données stockées par la présence doivent être préfixées par `pmd_`.
- Tags should be used as alternate names whenever possible, shortened versions must be included as well (e.g. if an Amazon presence had included AWS support it would have its tags like : "amazon-web-services" and "aws"). This is not required if it's not possible, but will make it easier for users when searching.
- Tags must not include any spaces, slashes, single/double quotation marks, unicode characters and should always be lowercase.

## Modifications
> Vous DEVEZ changer la version dans les métadonnées **** pour être une valeur plus élevée de la version précédente lorsque vous effectuez des modifications à la présence **. s** ou **metadata.json**. 
> 
> {.is-warning}

Dans certaines situations, les présences peuvent se comporter de façon inattendue ou peuvent utiliser quelques changements mineurs pour améliorer ses fonctionnalités. Voici une liste compilée que vous **DEVEZ** suivre pour modifier les présences.
- Vous n'êtes pas autorisé à réécrire une présence ou à modifier son auteur. Si l'auteur de la présence a été banni du serveur officiel ou n'a pas apporté les modifications requises dans une période de 7 jours, vous pouvez contacter un PreMiD `Presence Verifier` pour voir si vous êtes applicable pour réécrire la présence du choix.
- Si vous apportez des modifications à une présence et modifiez au moins un **QUARTER** de la base de code de la présence, vous êtes autorisé à vous ajouter en tant que contributeur. Contactez un `Vérificateur Presence` pour plus d'informations sur ce sujet.
- Assurez-vous que les modifications sont utiles. Ceux-ci peuvent inclure des corrections (code et typos), des ajouts (descriptions et balises), etc... Ne modifiez pas les images si elles ne sont pas dépassées et si elles ont une résolution décente.
- Confirmez que vos modifications fonctionnent avant de publier. Ne créez pas de demandes d'ajout sans connaître le résultat de vos modifications.

# Vérification

> Si vous avez besoin de contacter quelqu'un, veuillez utiliser notre serveur Discord officiel. Tous les `vérificateurs Presence` auront un rôle unique sur leur profil.

Pour que votre présence atteigne les magasins, il DOIT passer par un processus sur GitHub pour confirmer qu'il fonctionne comme prévu. Ce sont quelques choses à surveiller lorsque vous faites votre pull request.

1. Il faut deux vérificateurs pour confirmer que votre présence est à la hauteur. Si vous obtenez des demandes de modification, faites le bon effort pour le corriger ou il ne sera pas ajouté.
2. Si nous vous demandons des modifications et que votre pull request dépasse **7 jours d'inactivité** sans faire les nécessaires nous serons forcés de le fermer.
3. Vous êtes autorisé à prendre des captures d'écran des changements effectués avec l'aide d'un autre utilisateur, et vous êtes autorisé à assembler des captures d'écran pour le plaisir. (par exemple son auteur au cas où vous ne pouvez pas y accéder pour une raison quelconque).
4. S'il s'agit d'une mise à jour ou d'un patch, la capture d'écran **DOIT** montrer les nouveaux ajouts fonctionnant, pas d'anciennes fonctionnalités des demandes de fusion précédentes.
5. Les captures d'écran fournies doivent être réelles et non modifiées.
6. Tout code contribué qui sera fusionné dans ce dépôt sera sous la licence **Mozilla Public License 2.0**.
7. Présences de domaines ou d'hôtes gratuits (par exemple, .TK, [tous les domaines gratuits de Freenom], .RF.GD, etc...). sont **NON** autorisés du tout, des exceptions peuvent être faites si une preuve est présentée indiquant qu'ils ont payé pour le domaine.
8. Les champs `smallImageKey` et `smallImageText` sont destinés à fournir un contexte supplémentaire/secondaire (comme "playing"/"pause" pour les sites vidéo, « navigation» pour des sites réguliers et d'autres cas) pour ne pas promouvoir les profils Discord ou quoi que ce soit qui ne soit pas lié à PreMiD.
9. Les exigences pour les logos sont 1:1 (Square) en 512px, par contre, les vignettes doit être [une carte promotionnelle large](https://i.imgur.com/3QfIc5v.jpg) ou simplement [une capture d'écran](https://i.imgur.com/OAcBmwW.png) si la première n'est pas disponible.
10. Presences devrait avoir au moins 1 tag, il s'agit d'une exigence par conception et peut être facultatif à l'avenir.
11. Le champ `url` **NE DOIT PAS** inclure `http://` ou `https://`, ni les paramètres (par ex. une présence pour `https://www.google.com/search?gws_rd=ssl` n'aura que `www.google.com` dans le champ `url`).
12. Les descriptions et les balises doivent toujours être dans un tableau, même s'il ne s'agit que d'un élément. Le champ `url` ne doit cependant être qu'une chaîne de caractères si c'est un domaine.
13. Sites instables qui changent constamment les API/domaines, aléatoirement des éléments HTML ou simplement en cours de développement intensif ne sont pas autorisés et seront retirés du magasin.

Une fois que toutes les évaluations appropriées auront été satisfaites, votre pull request sera fusionnée avec le magasin.

# Structure (TypeScript)
Vous pouvez choisir si vous voulez coder votre Presence avec [JavaScript](https://www.javascript.com/) ou  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) a quelques définitions de types supplémentaires épicés, donc la correction et l'identification des bogues est beaucoup plus facile. Si vous voulez juste utiliser [JavaScript](https://www.javascript.com/) vous pouvez passer à [Structure (JavaScript)](/dev/presence#structure-javascript).

## Installation
1. Install [Git](https://git-scm.com/).
2. Installez [Node](https://nodejs.org/en/) (livré avec [npm](https://www.npmjs.com/)).
3. Installez [TypeScript](https://www.typescriptlang.org/index.html#download-links) (ouvrez un terminal et `npm installez -g typescript`).

## Dupliquer le projet
1. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Presences`.
2. Choisissez un fichier de votre choix.
3. Ouvrez-le dans votre éditeur de code.

## Création de dossiers et de fichiers

1. Créez un dossier avec le nom **** (pas une URL) du service que vous voulez supporter.
2. Créez un fichier `presence.ts` et un fichier `tsconfig.json` à l'intérieur.
3. Créer un dossier nommé `dist` à l'intérieur.
4. Créer un fichier `metadata.json` dans le dossier `dist`.

## Remplir le fichier tsconfig.json
Veuillez mettre le code suivant dans le fichier `tsconfig.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Pour en savoir plus sur la configuration de TypeScript, cliquez [ici](/dev/presence/tsconfig).

## Remplir le fichier metadata.json

Cliquez sur [ici](/dev/presence#filling-in-the-metadatajson-file-2) pour voir comment le remplir. Vous pourrez facilement cliquer en bas de l'explication.

Nous avons créé un fichier `metadata.json` pour les paresseux [ici](https://eggsy.codes/projects/premid/mdcreator).

## Commencer

```javascript
var presence = new Presence({
    clientId: "00000000000000" //L'ID client de l'application créée sur https://discordapp. om/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback. aused"
    //Vous pouvez l'utiliser pour obtenir les chaînes traduites
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variables sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Exécuter la fonction séparée de l'événement UpdateData toutes les 10 secondes pour obtenir et définir les variables que UpdateData récupère

*/


présence. n("UpdateData", async () => {
    /*UpdateData est toujours lancé, et donc devrait être utilisé comme votre cycle de rafraîchissement, ou `tick`. Cela est appelé plusieurs fois par seconde dans la mesure du possible.

    Il est recommandé de configurer une autre fonction en dehors de cette fonction qui va changer les valeurs des variables et faire le chargement lourd si vous appelez des données à partir d'une API. /

    var presenceData = {
        largeImageKey: "key", /*La clé (nom de fichier) de la grande image sur la présence. Celles-ci sont téléchargées et nommées dans la section Rich Presence de votre application, appelée Art Assets*/
        smallImageKey: "key", /*La clé (nom de fichier) de la Grande Image sur présence. Celles-ci sont téléchargées et nommées dans la section Rich Presence de votre application, appelé Art Assets*/
        smallImageText: "Quelques texte survolant", //Le texte qui est affiché en survolant la petite image
        détails: "Nom de la page de navigation", //La section supérieure du texte de présence
        est : "Lire la section A", //La section inférieure du texte de présence
        startTimestamp : 1577232000, //L'horodatage de l'époque unix pour savoir quand commencer à compter à partir de
        endTimestamp : 1577151472000 //Si vous voulez afficher Time Left au lieu d'Elapsed, il s'agit de l'horodatage de l'époque unix auquel le minuteur se termine
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata. ype = "blahblah"; exemples de type: détails, état, etc.*/

    if (presenceData. etails == null) {
        //Cela se déclenchera si vous ne définissez pas les détails de présence
        . etTrayTitle(); //Efface le titre du plateau pour la présence d'utilisateurs mac
        . etActivité(); /*Mettre à jour la présence sans aucune donnée, donc la vider et faire de la grande image l'icône de l'application Discord, et le texte du nom de l'application Discord*/
    } autre{
        //Cela se déclenchera si vous définissez les détails de présence
        présence. etActivity(presenceData); //Mettre à jour la présence avec toutes les valeurs de l'objet présenceData
    }
});
```
Vous pouvez copier ceci dans votre fichier `presence.ts` et modifier les valeurs. Réglage de toutes les valeurs se fait à l'intérieur de l'événement updataData.

Pour des exemples nous suggérons de regarder le code des présences comme : 1337x ou 9GAG.

Pour plus d'informations sur la classe Presence, cliquez [ici](/dev/presence/class).

## Impossible d'obtenir certaines données?!

Beaucoup de sites web utilisent des [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Ces balises html peuvent contenir plusieurs sources telles que des vidéos. Mais ils ne sont pas pertinents à chaque fois. Certains sont cachés ou tout simplement pas utilisés activement. Vérifiez si vous pouvez extraire, l'information dont vous avez besoin, sans eux avant de faire un travail inutile.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Recherche (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

Si vous trouvez que vos données sont dans un iFrame vous devez faire ce qui suit :
1. Créer un fichier `iframe.ts`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Faire en sorte que votre fichier de présence reçoive les données du fichier iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Remarque :** Ceci doit être placé en dehors de l'événement updateData.
## Compilation
Ouvrez une console dans votre dossier et tapez `tsc -w` pour compiler le `presence.ts` dans le dossier `/dist`.

# Structure (JavaScript)
## Dupliquer le projet
1. Install [Git](https://git-scm.com/).
2. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Presences`.
3. Choisissez un fichier de votre choix.
4. Ouvrez-le dans votre éditeur de code.

## Création de dossiers et de fichiers

1. Créez un dossier avec le nom **** (pas une URL) du service que vous voulez supporter.
3. Créer un dossier nommé `dist` à l'intérieur.
4. Créez un fichier `metadata.json` et un fichier `presence.js` à l'intérieur du dossier `dist`.

## Remplir le fichier metadata.json

Cliquez sur [ici](/dev/presence#filling-in-the-metadatajson-file-2) pour voir comment le remplir. Vous pourrez facilement cliquer en bas de l'explication.

Nous avons créé un fichier `metadata.json` pour les paresseux [ici](https://eggsy.codes/projects/premid/mdcreator).

## Commencer

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Cela est appelé plusieurs fois par seconde dans la mesure du possible.

    //Il est recommandé de configurer une autre fonction en dehors de cette fonction d'événement qui changera les valeurs des variables et fera le chargement lourd si vous appelez des données à partir d'une API.

    var presenceData = {
        largeImageKey: "key", /*La clé (nom du fichier) de la grande image sur présence. Celles-ci sont téléchargées et nommées dans la section Rich Presence de votre application, appelée Art Assets*/
        smallImageKey: "key", /*La clé (nom de fichier) de la Grande Image sur présence. Celles-ci sont téléchargées et nommées dans la section Rich Presence de votre application, appelé Art Assets*/
        smallImageText: "Quelques texte survolant", //Le texte qui est affiché en survolant la petite image
        détails: "Nom de la page de navigation", //La section supérieure du texte de présence
        est : "Lire la section A", //La section inférieure du texte de présence
        startTimestamp : 1577232000, //L'horodatage de l'époque unix pour savoir quand commencer à compter à partir de
        endTimestamp : 1577151472000 //Si vous voulez afficher Time Left au lieu d'Elapsed, il s'agit de l'horodatage de l'époque unix auquel le minuteur se termine
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata. ype = "blahblah"; exemples de type: détails, état, etc.*/

    if (presenceData. etails == null) {
        //Cela se déclenchera si vous ne définissez pas les détails de présence
        . etTrayTitle(); //Efface le titre du plateau pour la présence d'utilisateurs mac
        . etActivité(); /*Mettre à jour la présence sans aucune donnée, donc la vider et faire de la grande image l'icône de l'application Discord, et le texte du nom de l'application Discord*/
    } autre{
        //Cela se déclenchera si vous définissez les détails de présence
        présence. etActivity(presenceData); //Mettre à jour la présence avec toutes les valeurs de l'objet présenceData
    }
});
```
Vous pouvez copier ceci dans votre fichier `presence.js` et modifier les valeurs. Réglage de toutes les valeurs se fait à l'intérieur de l'événement updataData.

Pour des exemples nous suggérons de regarder le code des présences comme : 1337x ou 9GAG.

Pour plus d'informations sur la classe Presence, cliquez [ici](/dev/presence/class).

## Impossible d'obtenir certaines données?!

Beaucoup de sites web utilisent des [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Ces balises html peuvent contenir plusieurs sources telles que des vidéos. Mais ils ne sont pas pertinents à chaque fois. Certains sont cachés ou tout simplement pas utilisés activement. Vérifiez si vous pouvez extraire, l'information dont vous avez besoin, sans eux avant de faire un travail inutile.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Recherche (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

Si vous trouvez que vos données sont dans un iFrame vous devez faire ce qui suit :
1. Créer un fichier `iframe.js`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Faire en sorte que votre fichier de présence reçoive les données du fichier iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Remarque :** Ceci doit être placé en dehors de l'événement updateData.
# Remplir le fichier metadata.json
Nous avons créé un fichier `metadata.json` pour les paresseux [ici](https://eggsy.codes/projects/premid/mdcreator). Il est toujours suggéré de lire ceci afin que vous sachiez comment cela fonctionne.

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
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
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
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
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

Veuillez copier le code ci-dessus et le mettre dans votre fichier `metadata.json`. Vous devez maintenant modifier les valeurs des propriétés. Veuillez noter que les propriétés suivantes sont optionnelles à avoir dans vos métadonnées `. son` fichier, si vous ne prévoyez pas de les utiliser, vous devez les supprimer.
- `contributeurs`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `réglages`

**Clarification de certaines valeurs prédéfinies :**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optionnel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>auteur</b>
      </td>
      <td style="text-align:left">Doit contenir un objet avec le nom <code></code> et <code>id</code> du développeur de présence. Le nom est votre nom d'utilisateur Discord sans l'identifiant(#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributeurs</b>
      </td>
      <td style="text-align:left">Doit contenir un objet avec le nom <code></code> et <code>id</code> du développeur de présence. Le nom est votre nom d'utilisateur Discord sans l'identifiant(#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Service</b>
      </td>
      <td style="text-align:left">Le titre du service que cette présence supporte. <br>(Doit être le même nom que le dossier où tout se trouve)</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Petite description de la présence, vous pouvez utiliser la description du service
        si vous n'avez pas d'idées. Votre description doit avoir des valeurs de paire de clés qui indiquent la langue, et la description dans cette langue spécifique. Faites des descriptions avec les langues <i>que vous connaissez</i>, nos traducteurs apporteront des modifications à votre fichier de métadonnées.</td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b>
      </td>
      <td style="text-align:left">URL du service.<br><b>Exemple :</b><code>vk. om</code><br>
        <b>Cette URL doit correspondre à l'URL du site car elle détectera si oui ou non c'est le site Web auquel il faut injecter le script.</b><br> Ne pas <b>NON</b> ajoutez <code>https://</code> ou <code>http://</code> à l'intérieur de l'URL ni un slash à la fin :
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Note</b>: Certaines URLs peuvent avoir <code>www.</code> ou quelque chose d'autre devant leur domaine. N'oublie pas <b>PAS</b> de l'ajouter !<br>
Vous pouvez ajouter plusieurs URLs en faisant ce qui suit :<br>
<code>["URL1", "URL2", "ETC. ]</code><br>
Vous pouvez également utiliser regExp aussi connu sous le nom de Regex pour cette tâche, expliqué plus loin ci-dessous.
      </td>
      <td style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Une chaîne d'expression rationnelle utilisée pour faire correspondre les URL.<br>
      regExp ou aussi connu sous le nom de Regex, peut être utilisé si un site web a plusieurs sous-domaines.<br>
Vous pouvez utiliser le regExp suivant pour cela :<br>
<code>([a-z0-9]+)[.]domaine[.]TLD"</code><br>
TLD représentant le domaine de niveau supérieur pour axample: . om .net<br> 
<code>([a-z0-9]+ )</code> signifie n'importe quoi de a à z et de 0 à 9.<br>
        Vous pouvez tester votre regExp sur <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Version de votre présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logo</b>
      </td>
      <td style="text-align:left">Lien vers le logo du service&apos;s.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Lien vers votre miniature de présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>couleur</b>
      </td>
      <td style="text-align:left"><code>valeur #HEX</code>. Nous vous recommandons d'utiliser une couleur primaire du service
        que votre présence supporte.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Tableau avec des tags, ils aideront les utilisateurs à rechercher votre présence sur le site Web.</td>
      <td
      style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Catégorie</b>
      </td>
      <td style="text-align:left">Une chaîne utilisée pour représenter la catégorie sous laquelle tombe la présence. Voir les catergories valides <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">ici</a>.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Définit si <code>iFrames</code> sont utilisés</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Un sélecteur d'expression régulière qui sélectionne les iframes à injecter. Voir regExp pour plus d'informations.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>réglages</b>
      </td>
      <td style="text-align:left">Un tableau de paramètres que l'utilisateur peut modifier.<br>
      En savoir plus sur les paramètres de présence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">ici</a>.</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
  </tbody>
</table>

Cliquez sur [ici](/dev/presence#filling-in-the-metadatajson-file) pour voir comment le remplir. Cliquez sur [ici](/dev/presence#filling-in-the-metadatajson-file-1) pour voir comment le remplir.

# Chargement de la présence
1. Ouvrez la popup et maintenez le bouton <kbd>Maj</kbd> sur votre clavier.
2. **Charger Presence** apparaîtra dans la section Presences.
3. Cliquez dessus alors que vous maintenez le bouton <kbd>Maj</kbd>.
4. Sélectionnez le dossier /dist de votre présence.

# Quelques choses utiles
## Rechargement chaud
Le site Web sur lequel vous développez est automatiquement rechargé chaque fois que vous enregistrez un fichier dans votre dossier.

## Débogage
- Vous pouvez mettre `console.log("Test");` entre votre code et voir si votre console de navigateur vous donne cette sortie. Si oui, continuez et réessayez après la fonction suivante. Si ce n'est pas le cas, il y a une erreur ci-dessus.
- Si cela ne vous aide pas non plus, demandez à un développeur de présence sur notre serveur [Discord](https://discord.gg/WvfVZ8T) pour obtenir de l'aide.

# Fichiers expliqués
- [Classe de présence](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [Fichier de métadonnées](/dev/presence/metadata)
- [Configuration TypeScript](/dev/presence/tsconfig)
{.links-list}
