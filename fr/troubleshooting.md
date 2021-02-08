---
title: Dépannage
description: Tout pour résoudre votre problème
published: true
date: 2021-02-08T18:44:27.435Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Assurez-vous d'avoir l'extension **et** l'application installée! 
> 
> {.is-warning}

Inclus dans cette page :
1. [Dépannage général](https://docs.premid.app/troubleshooting#general)
2. [Dépannage sur Linux](https://docs.premid.app/troubleshooting#linux)
3. [Dépannage sur MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Dépannage général
### Recharger la page
Vous pouvez aussi appuyer sur <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) sur votre clavier au lieu de rechercher le bouton de rafraîchissement.

### Utilisez-vous l'application Discord ?
PreMiD ne fonctionne **pas** avec la version navigateur de Discord, vous devez télécharger l'application [ici](https://discord.com/download).

### Assurez-vous d'avoir activé l'activité de jeu Discord dans les paramètres
**Paramètres utilisateur** > **Activité de jeu** ![gameactivity_edited.png](/gameactivity_edited.png)

### Assurez-vous que Discord n'ai PAS été lancé en tant qu'administrateur
Vraiment important. Le RPC Discord ne fonctionnera pas si vous exécutez Discord en tant qu'administrateur.

### Utilisez-vous une presence avec des paramètres ?
De nombreuses presences (y compris `Twitch` et `SoundCloud`) sont affectées par un problème d'extension. Ce problème empêche l'extension de récupérer correctement les valeurs par défaut des paramètres.

Pour résoudre ce problème, il vous suffit d'activer/désactiver le paramètre le plus haut : ![presencesettings.gif](/presencesettings.gif)

### Redémarrez votre navigateur
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) fait également un bon travail. (Vous devez redémarrer votre navigateur de toute évidence.)

### Redémarrer PreMiD (l'application)
![quit.png](/quit.png) Vous devez redémarrer PreMiD par la suite.

### Recharger/redémarrer Discord
Appuyez sur <kbd>CTRL+R</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) sur votre clavier ou redémarrez Discord manuellement.

### Vérifiez si vous avez un antivirus ou un pare-feu en cours d'exécution sur votre ordinateur
Parfois, les programmes antivirus et les pare-feu bloquent les applications qui créent/hébergent des serveurs ou se connectent simplement à Internet. Nous utilisons un serveur local pour recevoir et passer des données entre notre application et l'extension, donc si vous bloquez la capacité de l'application à passer des données, vous ne serez probablement pas en mesure d'utiliser PreMiD.

### Désactiver vos extensions
Désactivez toutes vos extensions et voyez si cela fonctionne. Si oui, essayez d'activer vos extensions pas à pas et dites-nous quel extension a cassé PreMiD.

### Redémarrez votre ordinateur
J'espère que vous savez comment redémarrer un ordinateur.

### Réinstallation de PreMiD
Parfois, il y a quelque chose qui ne va pas avec les fichiers... Les tutoriels pour l'installation peuvent être trouvés [ici](/install).

### Suppression manuelle
Windows:    `C:\Users\USER\AppData\Roaming\`` et supprime le dossier `PreMiD`.
MacOS :`~/users/USER/~Library/Application Support/`et supprimez le dossier`PreMiD``.

### McAfee a détecté PreMiD comme un virus (Windows)
C'est un faux positif de la part de McAfee et nous leur avons signalé le problème, pour l'instant, vous pouvez exclure PreMiD de l'analyse en effectuant les étapes suivantes :

> Si vous ne vous sentez pas confiant de prendre ces mesures, n'hésitez pas à faire un ticket dans [#support](https://discord.premid.app/) et l'un de nos agents de support pourra vous aider ! 
> 
> {.is-warning}

1. Ouvrez l'application McAfee et cliquez sur l'icône Paramètres en haut à droite. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Cliquez sur "Objets en quarantaine" (Le second à partir du haut).
3. Développez-le, et cliquez sur l'icône `>` avant un élément avec le nom "settings.dat".
4. Assurez-vous que le chemin inclut "AppData\Local\Temp\PreMiD", si c'est le cas, sélectionnez-le et appuyez sur restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Une fois restauré, vous pouvez fermer la fenêtre pop-up "Éléments en quarantaine", puis appuyer à nouveau sur l'icône de paramètres en haut à droite.
6. Cliquez sur "Analyse en temps réel" (Troisième à partir du haut).
7. Développez-le et cliquez sur "Ajouter un fichier".
8. Tapez "%appdata%" dans la barre URL du gestionnaire de fichiers et appuyez sur Entrer. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Ouvrez le dossier "PreMiD", sélectionnez le fichier "PreMiD.exe" et cliquez sur Ouvrir. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee devrait maintenant ignorer notre dossier, lancez simplement l'application et cela devrait marcher.

### Statut PreMiD buggé sur Discord !
Ne vous inquiétez pas. Il suffit d'appuyer sur <strong x-id="1">CTRL+R</strong> en étant sur la fenêtre Discord.

<a name="linux"></a>

# Dépannage sur Linux
### Distributions basées sur Ubuntu/Debian
Si vous avez téléchargé Discord via Snapcraft, RPC ne fonctionnera pas. Vous devez désinstaller la version Snapcraft en utilisant la commande `sudo snap remove discord` dans un terminal, ensuite téléchargez **[Discord pour Linux](https://discordapp.com/api/download?platform=linux)** (**[ou Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**) et naviguez à l'emplacement où vous avez téléchargé Discord (généralement, il se trouve dans le dossier `$HOME/Downloads/`) puis installez le package en utilisant `sudo dpkg -i discord-*.deb`. Si l'AppImage ne fonctionne pas, vous devriez jeter un œil à nos autres packages **[ici](https://packagecloud.io/premid/linux)**.

### Distributions basées sur Arch Linux
Les distributions basées sur Arch Linux devraient utiliser le paquet <code>premid</code> ou le paquet <code>premid-git</code> fournis dans l'AUR (Arch User Repository), (<em x-id="3">ATTENTION : les paquets venant de l'AUR compilent premid directement depuis son code source.</em>). Si vous ne voulez pas installé un AUR manager (yay, etc.), vous pouvez utiliser notre AppImage qui est téléchargeable depuis notre <strong x-id="1"><a href="https://github.com/premid/linux/releases">dépôt Linux</a></strong>.
<em x-id="3">Attention: le paquet dans l'<strong x-id="1">AUR</strong> n'est pas maintenu par nous (en tant que PreMiD), mais par d'autre personnes.</em>

### Port binding
Vous devez savoir que <strong x-id="1">PreMiD</strong> s'attache au port <strong x-id="1">3020</strong>. Ceci est nécessaire pour que l'Extension et L'application communique. Si <strong x-id="1">PreMiD</strong> vous montre une erreur à propos de ce port, vous devez vérifier si un processus est attaché au port 3020 en lançant la commande <code>sudo lsof -i:3020</code> ou <code>sudo netstat -tnlp | grep :3020</code> dans votre terminal. Si une processus est attaché à ce dernier, vous devrez faire en sorte de libérer le port et relancer <code>PreMiD</code>.

### L'AppImage de PreMiD ne se lance pas au démarrage
Comme précisé dans notre **répertoire Linux**, AppImage ne peut pas être démarré lors de l'ouverture de session. Vous pouvez faire en sorte que cette dernière se lance au démarrage manuellement en suivant ces étapes:
1. Crée un fichier nommé <strong x-id="1">rc.local</strong> dans le dossier <code>/etc/</code>.
2. Ouvrez ce fichier dans votre éditeur favoris et collez-y le code en modifiant le dossier dans lequel L'AppImage est située:
```bash
#!/bin/bash
# Nécessaire pour run s'exécuter en tant /bin/bash (if you use zsh etc. vous pouvez le changer.)

# Exemple: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Sauvegardez le fichier et rendez le exécutable avec la commande `sudo chmod a+x /etc/rc.local`.
4. Redémarrez votre PC et l'AppImage de PreMiD devrais se lancer au démarrage.

<a name="macos"></a>

# Dépannage sur MacOS
### Erreur lors de la création du dossier
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

Si vous obtenez cette erreur, cela veux dire que votre compte n'a pas les permissions Administrateurs, vous devez donc crée un dossier manuellement en suivant ces étapes:
1. Ouvrir Finder et ouvrir le dossier **Applications**.
2. Faites un clique droit dans un espace vide et cliquez sur **Crée un dossier**.
3. Assignez le nom `PreMiD` à ce dossier (n'oubliez pas de les lettres majuscules).
4. Réouvrez l'installateur.

# Cela n'a pas résolu mon problème
Veuillez ouvrir un ticket dans [#support](https://discord.premid.app/).