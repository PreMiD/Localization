---
title: Développement de la présence
description:
published: vrai
date: 2020-05-09T14:26:01.832Z
tags:
---

> Toutes les présences sont maintenant stockées ici : https://github.com/PreMiD/Presences 
> 
> {.is-info}

La version `2.x` introduit le [magasin de présence](https://premid.app/store). Les utilisateurs ont maintenant la possibilité d'ajouter et de supprimer manuellement leurs présences favorites via l'interface utilisateur du [site web](https://premid.app/).

# Lignes directrices
> Si vous ne suivez **PAS** les règles, un `Vérificateur de Présences` demandera les changements appropriés, ou devra le fermer dans certaines circonstances. 
> 
> {.is-warning}

> Lorsque vous faites des demandes d'ajout ou de modification de Presences existantes, vous **DEVEZ** inclure une capture d'écran. Cependant, les modifications apportées aux fichiers `metadata.json` ou `tsconfig.json` d'une présence ne nécessitent pas de capture d'écran. _Votre capture d'écran **DOIT** être directement téléchargée sur GitHub avec la pull request, ne **PAS** utiliser de sites tiers de partage d'images._ 
> 
> {.is-warning}

Lors de la publication des présences sur ce GitHub, nous vous demandons de suivre un ensemble de directives. Pour certains, ces règles strictes peuvent paraître sévères. Cependant, la mise en œuvre de ces règles nous empêchera ainsi que les utilisateurs de faire face à n'importe quel problème.

## Création
> Le code que vous écrivez DOIT être *bien écrit* et DOIT être *lisible*. `DeepScan` sur GitHub rapportera des problèmes de qualité de code à l'`équipe de vérification de Presence`. Nous recommandons que votre fork soit à jour lorsque vous faites des pull requests, cela aidera à limiter les faux positifs. 
> 
> {.is-warning}

- La pull request **DOIT** être complète, vous devez avoir une structure de fichier appropriée, les brouillons sont **PAS autorisés**. Inclure le dossier `dist` , le fichier `presence.js` et le fichier `metadata.json` qui sont représentés dans le schéma d'exemple suivant :
```bash
site web
└── {type}
    └── presence
        ├── dist
        │   ├── metadata.json
        │   └── presence.js
        ├── presence.ts
        └── tsconfig.json
```
ou si vous utilisez `iframe`:
```bash
site web
└── {type}
    └── presence
        ├── dist
        │   ├── metadata.json
        │   ├── presence.js
        │   └── iframe.js
        ├── presence.ts
        ├── iframe.ts
        └── tsconfig.json
```
- {type} correspond à : A à Z, "#" pour les présences commençant par des caractères non alphabétiques et "0-9" pour les présences commençant par des nombres.
<br>
Avant de commencer à travailler sur votre présence, gardez à l'esprit la liste suivante.
- La présence **DOIT** être liée au site Web que vous avez choisi.
- La présence **NE DOIT PAS** être de sites illégaux. Celles-ci incluent des stress, des drogues, du porn infantile, etc.
- Les métadonnées de présence **DOIVENT** avoir un contenu bien écrit, y compris des titres valides, et des descriptions.
- Le média que vous incluez (icône/vignette) **DOIT** être lié au site web et doit être compréhensible en termes de taille et de qualité.
- La structure de fichier **DOIT** être propre et gérée, n'ayez **PAS** des fichiers aléatoires qui ne fournissent rien à la fonction de Presence.
- La présence **NE DOIT PAS** avoir d'intentions malveillantes. Celles-ci incluent le vol ou la fuite d'informations privées, affectant négativement le comportement du site, etc.
- Si vous concevez une Presence pour un site qui change dans le futur et en conséquence, potentiellement cassant votre Présence, vous **êtes** responsable de la mise à jour de votre Présence. Si vous **ne le corrigez pas** dans les 7 jours, d'autres développeurs de présence sont autorisés à **réécrire** votre présence pour se conformer aux changements.
- La présence **DOIT** être testée avant la publication pour confirmer que tout fonctionne comme prévu.
- Votre présence **DOIT** avoir des images et des descriptions SFW, qu'elles soient NSFW ou non. Si votre Presence concerne un site NSFW, veuillez ajouter la balise `nsfw` à vos métadonnées.
- Votre présence **NE PEUT PAS** manipuler le stockage local sur le navigateur.
- Votre Presence peut utiliser des cookies pour stocker des données, vous devez tous les préfixer avec `pmd_`.
- Le nom de votre Presence **DOIT** être le nom du dossier de votre Presence. Par exemple, une présence nommée `Google Docs` doit avoir comme dossier `/Google Docs/`. (vous devez inclure tous les espaces, points, virgules et autres caractères spéciaux)

## Modifications
> Vous DEVEZ changer la version dans les **métadonnées** pour être une valeur plus élevée de la version précédente lorsque vous effectuez des modifications soit à **presence.ts**/**presence.js** ou **metadata.json**. 
> 
> {.is-warning}

Dans certaines situations, Presences peut se comporter de manière inattendue ou peut utiliser quelques modifications mineures pour améliorer ses fonctionnalités. Voici une liste compilée que vous **DEVEZ** suivre pour modifier les présences.

- Vous n'êtes **PAS** autorisé à réécrire une Presence ou à modifier son auteur. Si l'auteur de la présence a été banni du serveur officiel ou n'a pas apporté les modifications requises dans une période de 7 jours, vous pouvez contacter un `Presence Verifier` pour voir si vous pouvez réécrire la présence de votre choix.
- N'importe qui peut fournir des correctifs pour corriger les bugs ; cependant, n'essayez **PAS** d'apporter des modifications au code n'ayant **PAS** besoin d'être corrigé. Les modifications valides sont, mais ne doivent **PAS** être limitées à, des _chemins manquants_, des _typos_, des _images manquantes_, etc.
- Si vous apportez des modifications à une présence et modifiez au moins un **QUART** de la base de code de la présence, vous êtes autorisé à vous ajouter en tant que contributeur. Contactez un `Vérificateur Presence` pour plus d'informations sur ce sujet.
- Assurez-vous que les modifications sont utiles. Celles-ci peuvent inclure des corrections (code et typos), des ajouts (descriptions et balises), etc. Ne changez **PAS** les images si elles ne sont pas obsolètes et ont une résolution décente.
- Confirmez que vos modifications fonctionnent avant de publier. **Ne créez pas de demandes d'ajout** sans connaître le résultat de vos modifications.

# Vérification

> Si vous avez besoin de contacter quelqu'un, veuillez utiliser notre serveur Discord officiel. Tous les `vérificateurs de Presence` auront un rôle unique sur leur profil.

Pour que votre présence rejoigne notre store, il **DOIT** passer par un processus sur GitHub pour confirmer qu'il fonctionne comme prévu. Ce sont quelques choses à surveiller lorsque vous faites votre pull request.

1. Il faut deux vérificateurs pour confirmer que votre présence répond aux normes. Si vous obtenez des demandes de modification, faites l'effort nécessaire pour le corriger, ou la présence ne sera **PAS** ajouté.
2. Si nous vous demandons des modifications et que votre pull request dépasse **7 jours d'inactivité** sans faire les nécessaires nous serons forcés de le fermer.
3. Vous êtes autorisé à prendre des captures d'écran des changements effectués avec l'aide d'un autre utilisateur, et vous êtes autorisé à assembler des captures d'écran pour un plaisir visuel. (par exemple, son auteur dans le cas où vous ne pouvez pas y accéder pour une raison quelconque).
4. S'il s'agit d'une mise à jour ou d'un patch, la capture d'écran **DOIT** montrer les nouveaux ajouts qui fonctionnent, **pas** d'anciennes fonctionnalités des précédents pull requests.
5. Les captures d'écran fournies doivent être réelles, **PAS** modifiées.
6. Tout code contribué qui sera fusionné dans ce dépôt sera sous la licence **Mozilla Public License 2.0**.
7. Présences pour des domaines ou des hôtes gratuits (par exemple, .TK, [tous les domaines libres de Freenom], .RF. D, etc) ne sont **PAS** autorisés, des exceptions peuvent être faites si une preuve est présentée montrant qu'ils ont payé pour le domaine.
8. Les champs `smallImageKey` et `smallImageText` sont destinés à fournir un contexte supplémentaire/secondaire (comme "playing"/"pause" pour les sites de vidéos, « navigation» pour des sites réguliers et d'autres cas) non pas pour pas promouvoir des profils Discord ou quoi que ce soit qui ne soit non lié à PreMiD.
9. Les exigences pour les logos sont 1:1 (Carré) en 512px, par contre, les vignettes doit être [ soit comme une carte promotionnelle large](https://i.imgur.com/3QfIc5v.jpg) ou simplement [une capture d'écran](https://i.imgur.com/OAcBmwW.png) si la première **n'est pas** disponible.
10. Les présences doivent avoir au moins un tag. Les tags ne **doivent pas** inclure d'espaces, de slashs, de guillemets, de caractères uni-codes et doivent toujours être en minuscule.
11. Le champ `url` **NE DOIT PAS** inclure `http://` ou `https://`, ni les paramètres (par ex. une présence pour `https://www.google.com/search?gws_rd=ssl` n'aura que `www.google.com` dans le champ `url`).
12. Les descriptions et les balises doivent toujours être dans un tableau, même s'il ne s'agit que d'un élément. Le champ `url` ne doit cependant être qu'une chaîne de caractères si c'est un domaine.
13. Les tags doivent être utilisées comme noms alternatifs dans la mesure du possible, les versions abrégées doivent également être incluses (par ex : si une présence d'Amazon avait inclus le support AWS, il aurait des tags comme : "amazon-web-services" et "aws").
14. Les sites instables qui changent constamment les API/domaines, qui changent aléatoirement des éléments HTML ou simplement en cours de développement intensif ne sont pas autorisés et seront retirés du magasin.
15. Le logo et la vignette de votre Presence **DOIVENT** être `i.imgur. om`, à partir d'un CDN que **VOUS** possédez, ou à partir d'un CDN qui vous donne la permission de **CHANGER** les images.
16. Les vérificateurs vérifieront si la présence contient une fonction `__awaiter` au début du code (qui provient d'une version antérieure d'ECMAScript), si c'est dans Typescript ou Javascript, et en plus de cela, assurez-vous que l'événement `UpdateData` utilisé est similaire à ceci :

```ts
presence.on("UpdateData", async () => {
  /*...*/
  //  Utilisez toujours await lorsque vous utilisez async 
  data.smallImageText = (await strings).playing;
  /*...*/
});
```

Cela ne devrait **PAS** être ceci :

```ts
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
  /*...*/
  // Never use yield
  data.smallImageText = (yield strings).playing;
  /*...*/
});
```

17. Quand **Deepscan** lance beaucoup d'erreurs (et il le fera), c'est surtout un problème avec votre branche qui n'est plus à jour, toujours mettre à jour votre "fork GitHub" lorsque vous faites des pull requests.
18. Toujours s'assurer que le numéro de version suit [les normes de version](https://semver.org), qui se traduit par le schéma suivant : `<NOUVELLE FONCTIONNALITÉ>.<ENORME-CORRECTION DE BUGS>.<PETITE CORRECTION DE BUGS OU CHANGEMENT DES MÉTADONNÉES>`. Autre chose comme `1.0.0.1`, `1.0`, `1`, `1.0. -BETA` ou changement de `1.0.0` à `2.0.` sur une correction de bug/petit changement n'est **PAS autorisé**.
19. Les présences de faible qualité (ou celles n'ayant qu'un seul contexte) ne sont **PAS** autorisées (par ex : Afficher uniquement le logo et du texte mais ne plus jamais changer).
20. **NE JAMAIS** utiliser des fonctions personnalisées lorsque [des variantes natives sont disponibles](https://docs.premid.app/dev/presence#files-explained); cela permet de s'assurer que les corrections au niveau de l'extension s'appliquent également à vos présences, vous êtes libre d'utiliser tout ce dont vous avez besoin si vous ne les trouvez pas dans la documentation.
21. Il n'est **PAS** recommandé d'utiliser des commentaires sur les présences Javascript sauf si nécessaire (Pas de problème pour les fichiers TypeScript ou leurs fichiers compilés), car il réduit la lisibilité du code et augmente la taille des fichiers.
22. Déclarez le "const" de la présence **AVANT** tout pour éviter des problèmes aussi rares qui peuvent survenir ; ce n'est pas une exigence par conception, donc il pourrait être supprimé dans le futur.
23. Les présences qui ciblent les pages internes du navigateur (comme Chrome Web Store, `chrome://`, `à propos :` pages, etc) ne sont **PAS** autorisés car ils nécessitent un _drapeau expérimental_ pour être activés à la fin de l'utilisateur et peuvent potentiellement causer des dommages à leurs navigateurs.
24. Il est **INTERDIT** de coder des présences pour un site sans ajouter de support à sa langue principale (ex : une présence YouTube codée avec le support pour en portugais et en japonais, mais pas en anglais lui-même).

Après avoir respecté toutes les directives et que votre présence ai été examinée au moins deux fois, votre présence sera fusionnée avec le store.

# Structure
Toutes les présences sont codées en [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) a quelques définitions de types supplémentaires épicés, donc la correction et l'identification des bugs est beaucoup plus facile.

## Installation
1. Install [Git](https://git-scm.com/).
2. Installez [Node](https://nodejs.org/en/) (livré avec [npm](https://www.npmjs.com/)).
3. Installez [TypeScript](https://www.typescriptlang.org/index.html#download-links) (ouvrez un terminal et `npm installez -g typescript`).

## Dupliquer le projet
1. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Presences`.
2. Choisissez un fichier de votre choix.
3. Ouvrez-le dans votre éditeur de code.

## Création de dossiers et de fichiers

1. Créez un dossier avec le **name** (pas une URL) du service que vous voulez supporter.
2. Créez un fichier `presence.ts` et un fichier `tsconfig.json` à l'intérieur.
3. Créer un dossier nommé `dist` à l'intérieur.
4. Créer un fichier `metadata.json` dans le dossier `dist`.

## Remplir le fichier tsconfig.json
Veuillez mettre le code suivant dans le fichier `tsconfig.json`.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Pour en savoir plus sur la configuration de TypeScript, cliquez [ici](/dev/presence/tsconfig).

## Remplir le fichier metadata.json
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

1. Vérifiez les dans la console de vos navigateurs (assurez-vous que vous êtes sur l'onglet **Éléments**).
2. Recherchez (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

Si vous trouvez que vos données sont dans un iFrame vous devez faire ce qui suit :
1. Créer un fichier `iframe.ts`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame.
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

# Chargement de la présence
1. Ouvrez la fenêtre popup et maintenez le bouton <kbd>Maj</kbd> sur votre clavier.
2. **Charger les présences** apparaîtra dans la section Présences.
3. Cliquez dessus pendant que vous maintenez le bouton <kbd>Maj</kbd>.
4. Sélectionnez le dossier /dist de votre présence.

# Quelques éléments utiles
## Rechargement rapide
Le site Web sur lequel vous développez est automatiquement rechargé chaque fois que vous enregistrez un fichier dans votre dossier.

## Débogage
- Vous pouvez mettre `console.log("Test");` entre votre code et voir si votre console de navigateur vous donne cette sortie. Si oui, continuez et réessayez après la fonction suivante. Si ce n'est pas le cas, il y a une erreur ci-dessus.
- Si cela ne vous aide pas non plus, demandez à un développeur de présence sur notre serveur [Discord](https://discord.gg/WvfVZ8T) pour obtenir de l'aide.

# Explications des fichiers
- [Classe de présence](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [Fichier de métadonnées](/dev/presence/metadata)
- [Configuration TypeScript](/dev/presence/tsconfig)
{.links-list}
