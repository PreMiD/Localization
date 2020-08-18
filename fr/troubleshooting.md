---
title: Dépannage
description: Tout pour résoudre votre problème
published: vrai
date: 2020-08-10T20:42:48.586Z
tags:
editor: markdown
---

> Assurez-vous d'avoir l'extension **et** l'application installée! 
> 
> {.is-warning}

### Utilisez-vous une presence avec des paramètres ?
De nombreuses presences (y compris `Twitch` et `SoundCloud`) sont affectées par un problème d'extension. Ce problème empêche l'extension de récupérer correctement les valeurs par défaut des paramètres.

Pour résoudre ce problème, il vous suffit d'activer/désactiver le paramètre le plus haut : ![presencesettings.gif](/presencesettings.gif)

### Recharger la page
Vous pouvez aussi appuyer sur <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) sur votre clavier au lieu de rechercher le bouton de rafraîchissement.

### Redémarrez votre navigateur
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) fait également un bon travail. (Vous devez redémarrer votre navigateur de toute évidence.)

### Assurez-vous d'avoir activé l'activité de jeu Discord dans les paramètres
**Paramètres utilisateur** > **Activité de jeu** ![gameactivity_edited.png](/gameactivity_edited.png)

### Redémarrer PreMiD (l'application)
![quit.png](/quit.png) Vous devez redémarrer PreMiD par la suite.

### Recharger/redémarrer Discord
Appuyez sur <kbd>CTRL+R</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) sur votre clavier ou redémarrez Discord manuellement.

### Assurez-vous que Discord n'ai PAS été lancé en tant qu'administrateur
Vraiment important. Le RPC Discord ne fonctionnera pas si vous exécutez Discord en tant qu'administrateur.

### Vérifiez si vous avez un antivirus ou un pare-feu en cours d'exécution sur votre ordinateur
Parfois, les programmes antivirus et les pare-feu bloquent les applications qui créent/hébergent des serveurs ou se connectent simplement à Internet. Nous utilisons un serveur local pour recevoir et passer des données entre notre application et l'extension, donc si vous bloquez la capacité de l'application à passer des données, vous ne serez probablement pas en mesure d'utiliser PreMiD.

### Désactiver vos extensions
Désactivez toutes vos extensions et voyez si cela fonctionne. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows:    `C:\Users\USER\AppData\Roaming\`` et supprime le dossier `PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### McAfee a détecté PreMiD comme un virus (Windows)
C'est un faux positif de la part de McAfee et nous leur avons signalé le problème, pour l'instant, vous pouvez exclure PreMiD de l'analyse en effectuant les étapes suivantes :

> Si vous ne vous sentez pas confiant de prendre ces mesures, n'hésitez pas à faire un ticket dans [#support](https://discord.gg/WvfVZ8T) et l'un de nos agents de support pourra vous aider ! 
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
9. Ouvrez le dossier "PreMiD" et sélectionnez le fichier "PreMiD.exe" et cliquez sur Ouvrir. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee devrait maintenant ignorer notre dossier, lancez simplement notre application et cela devrait marcher.

### Cela n'a pas résolu mon problème
Veuillez ouvrir un ticket dans <ahref="https://discord.gg/WvfVZ8T">#support</a>.