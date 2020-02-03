---
title: Développement de la présence
description:
published: vrai
date: 2020-02-03T13:55:37.732Z
tags:
---

> Toutes les présences sont maintenant stockées ici : https://github.com/PreMiD/Presences 
> 
> {.is-info}

La version `2.x` introduit le [magasin de présence](https://premid.app/store). Les utilisateurs ont maintenant la possibilité d'ajouter et de supprimer manuellement leurs présences favorites via l'interface utilisateur du [site web](https://premid.app/).

# Lignes directrices
> Si vous ne suivez pas toutes les lignes directrices, votre présence ou votre pull request sera supprimée du github. 
> 
> {.is-danger}

## Création

Avant de commencer à travailler sur votre présence, gardez à l'esprit la liste suivante.
- La demande d'ajout doit être complète, vous devez avoir une structure de fichier appropriée. Incluant le dossier `dist` , le fichier `presence.js` et le fichier `metadata.json`.
- The presence **must** be related to the website you have chosen.
- La présence ne doit pas être de sites Web illégaux. Celles-ci incluent des stress, des drogues, du porn infantile, etc...
- Les métadonnées de présence doivent avoir un contenu bien écrit, y compris des titres valides et des descriptions.
- Le média que vous incluez (icône/vignette) doit être lié au site Web et doit être compréhensible en termes de taille et de qualité.
- La structure du fichier doit être nettoyée et gérée, ne pas avoir de fichiers aléatoires qui ne fournissent rien à la fonction de la présence.
- La présence **ne doit pas** avoir aucune intention malveillante. Celles-ci incluent le vol ou la fuite d'informations privées, affectant négativement le comportement du site, etc...
- Si vous créez une présence pour un site web et que le site web change dans le futur, vous **Êtes** responsable de la mise à jour de la présence pour fonctionner comme prévu. Si vous ne le corrigez pas dans un délai acceptable, les autres développeurs de présence sont autorisés à **écraser** votre présence pour se conformer aux modifications.
- La présence doit être testée avant la publication pour confirmer que tout fonctionne comme prévu.
- Your presence must have SFW images and descriptions regardless if it is NSFW or not. Si votre présence concerne un site web `nsfw` , veuillez ajouter la balise `nsfw` à vos métadonnées.
- Your presence must **NOT** be for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...), exceptions can be made if a proof is presented showing that it is a paid domain.
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases). You are not allowed to promote Discord profiles or anything unrelated to PreMiD.
- The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is not available.
- The presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
- The `url` field must not include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
- Descriptions and tags should always be in arrays, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
- Unstable sites that constantly change APIs/domains, randomize HTML elements or just still being in heavy development are not allowed and will be removed from the store.

## Modifications

Dans certaines situations, les présences peuvent se comporter de façon inattendue ou peuvent utiliser quelques changements mineurs pour améliorer ses fonctionnalités. Voici une liste compilée que vous devez suivre pour modifier les présences.
- Vous n'êtes pas autorisé à modifier le créateur de la présence. Ceci n'est applicable que si vous êtes autorisé à le réécrire. Vous pouvez vous ajouter en tant que [contributeur](/dev/presence/metadata).
- Assurez-vous que les modifications sont utiles. Ceux-ci peuvent inclure des corrections (code et typos), des ajouts (descriptions et balises), etc...
- Confirmez que vos modifications fonctionnent avant de publier. Ne créez pas de demandes d'ajout sans connaître le résultat de vos modifications.
- Ne pas refaire marque/écraser une présence complètement sauf si permis par un `vérificateur Presence` ou un membre du personnel.

# Vérification
> Lorsque vous faites des demandes d'ajout ou de modification de présences existantes, vous devez inclure une capture d'écran. Cependant, les modifications apportées aux métadonnées/tsconfig d'une présence ne nécessitent pas de capture d'écran. *Votre capture d'écran doit être téléchargée directement sur github avec la demande de pull, ne pas utiliser de sites tiers de partage d'images.* 
> 
> {.is-danger}

Afin que votre présence puisse rejoindre les magasins, il doit passer par un processus sur github pour confirmer qu'il fonctionne comme prévu. Voici quelques choses à chercher quand vous faites votre pull request.

Notre équipe de vérification de présence a son propre rôle, cherchez `Presence Verifier` sur le serveur discord pour savoir qui est impliqué.

1. Il faut deux vérificateurs pour confirmer que votre présence est à la hauteur. Si vous obtenez des demandes de modification, faites le bon effort pour le corriger ou il ne sera pas ajouté.
2. Si nous demandons des modifications et que votre Pull Request dépasse **7 jours d'inactivité** sans faire les nécessaires nous serons forcés de le fermer.
3. Vous êtes autorisé à prendre des captures d'écran des modifications effectuées avec l'aide d'un autre utilisateur. (par exemple son auteur au cas où vous ne pouvez pas y accéder pour une raison quelconque).
4. S'il s'agit d'une mise à jour ou d'un patch, la capture d'écran doit montrer que les nouveaux ajouts fonctionnent, pas les anciennes fonctionnalités des demandes de fusion précédentes.
5. Les captures d'écran fournies doivent être réelles et non modifiées.
6. Tout code contribué qui sera fusionné dans ce dépôt sera sous la licence **Mozilla Public License 2.0**.


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
2. Créez un fichier `presence.ts` et un fichier `tsconfg.json` à l'intérieur.
3. Créer un dossier nommé `dist` à l'intérieur.
4. Créer un fichier `metadata.json` dans le dossier `dist`.

## Remplir le fichier tsconfig.json

Veuillez mettre le code suivant dans le fichier `tsconfg.json`.
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
    clientId: "00000000000000", //L'ID client de l'application créée sur https://discordapp. om/developers/applications
    mediaKeys: false //Activer l'utilisation et la détection des touches multimédias presses
}),

strings = présence. etStrings({
    play: "presence.playback.playing",
    pause: "presence.playback. aused"
    //Vous pouvez l'utiliser pour obtenir les chaînes traduites
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Exécuter la fonction séparée de l'événement UpdateData toutes les 10 secondes pour obtenir et définir les variables que UpdateData récupère

*/


présence. n("UpdateData", async () => {
    /*UpdateData est toujours en cours d'exécution, et donc devrait être utilisé comme votre cycle de rafraîchissement, ou `tick`. Cela est appelé plusieurs fois par seconde dans la mesure du possible.

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

1. Vérifiez-les par console du navigateur (assurez-vous que vous êtes sur l’onglet **Éléments**).
2. Recherche (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

Si vous trouvez que vos données sont dans un iFrame vous devez faire ce qui suit :
1. Créer un fichier `iframe.ts`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame
```javascript
var iframe = new iFrame();
iframe. n("Mises à jour", async () => {
  /*
  Récupère toutes les données dont vous avez besoin de l'iFrame dans les variables
  puis les envoie en utilisant iframe. fin
  */
  iframe.send({ //envoi de données
    vidéo: vidéo,
    temps: video. uration
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
    clientId: "00000000000000", //L'ID client de l'application créée sur https://discordapp. om/developers/applications
    mediaKeys: false //Activer l'utilisation et la détection des touches multimédias presses
}),

strings = présence. etStrings({
    play: "presence.playback.playing",
    pause: "presence.playback. aused"
    //Vous pouvez l'utiliser pour obtenir les chaînes traduites
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Exécuter la fonction séparée de l'événement UpdateData toutes les 10 secondes pour obtenir et définir les variables que UpdateData récupère

*/


présence. n("UpdateData", () => {
    //UpdateData est toujours en cours d'exécution, et donc devrait être utilisé comme votre cycle de rafraîchissement, ou `tick`. Cela est appelé plusieurs fois par seconde dans la mesure du possible.

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

1. Vérifiez-les par console du navigateur (assurez-vous que vous êtes sur l’onglet **Éléments**).
2. Recherche (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

Si vous trouvez que vos données sont dans un iFrame vous devez faire ce qui suit :
1. Créer un fichier `iframe.js`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame
```javascript
var iframe = new iFrame();
iframe. n("Mises à jour", () => {
    /*
    Récupère toutes les données dont vous avez besoin en les sauvegardant dans les variables
    puis les envoie en utilisant iframe. fin
    */
    iframe. end({ //envoi de données
        video: video,
        time: video. uration  
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
  "contributeurs": [{
    "name": "UTILISATEUR",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "fr": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Veuillez copier le code ci-dessus et le mettre dans votre fichier `metadata.json`. Vous devez maintenant modifier les valeurs des propriétés. Veuillez noter que les propriétés suivantes sont optionnelles à avoir dans vos métadonnées `. son` fichier, si vous ne prévoyez pas de les utiliser, vous devez les supprimer.
- `contributeurs`
- `regExp`
- `iframe`
- `iFrameRegExp`

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
        si vous n'avez pas d'idées. Your description must have key pair values which indicate the language, and the description in that specific language. Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">A string used to represent the category the presence falls under. See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. See regExp for more info.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
  </tbody>
</table>

Click [here](/dev/presence#filling-in-the-metadatajson-file) to go back to the TypeScript explanation. Click [here](/dev/presence#filling-in-the-metadatajson-file-1) to go back to the JavaScript explanation.

# Loading the presence
1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things
## Hot-reloading
The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/PreMiD) for help.

# Files explained
- [Presence Class](/dev/presence/class)
- [iFrame Class](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig)
{.links-list}