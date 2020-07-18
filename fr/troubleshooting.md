---
title: Dépannage
description: Tout pour résoudre votre problème
published: vrai
date: 2020-07-17T19:53:39.991Z
tags:
editor: markdown
---

> Assurez-vous d'avoir l'extension **et** l'application installée! 
> 
> {.is-warning}

### Recharger la page
Vous pouvez aussi appuyer sur <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) sur votre clavier au lieu de rechercher le bouton de rafraîchissement.

### Redémarrez votre navigateur
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) fait également un bon travail. (Vous devez redémarrer votre navigateur de toute évidence.)

### Assurez-vous d'avoir activé l'activité de jeu Discord dans les paramètres
**Paramètres utilisateur** > **Activité de jeu** ![gameactivity_edited.png](/gameactivity_edited.png)

### Redémarrer PreMiD (Application)
![quit.png](/quit.png) Vous devez redémarrer PreMiD par la suite.

### Recharger/redémarrer Discord
Appuyez sur <kbd>CTRL+R</kbd> (Windows) ou <kbd>CMD+R</kbd> (MacOS) sur votre clavier ou redémarrez Discord manuellement.

### Assurez-vous que Discord ne fonctionne PAS en tant qu'administrateur
Vraiment important. Le RPC Discord ne fonctionnera pas si vous exécutez Discord en tant qu'administrateur.

### Vérifiez si vous avez un antivirus ou un pare-feu en cours d'exécution sur votre ordinateur
Parfois, les programmes antivirus et les pare-feu bloquent les applications qui créent/hébergent des serveurs ou se connectent simplement à Internet. Nous utilisons un serveur local pour recevoir et passer des données entre notre application et l'extension, donc si vous bloquez la capacité de l'application à passer des données, vous ne serez probablement pas en mesure d'utiliser PreMiD.

### Désactiver vos addons
Désactivez toutes vos extensions et voyez si cela fonctionne. Si oui, essayez d'activer vos addons pas à pas et dites-nous quel addon a cassé PreMiD.

### Redémarrage de votre ordinateur
J'espère que vous savez comment redémarrer un ordinateur.

### Réinstallation de PreMiD
Parfois, il y a quelque chose qui ne va pas avec les fichiers... Les tutoriels pour l'installation peuvent être trouvés [ici](/install).

### Suppression manuelle
Windows:    `C:\Users\USER\AppData\Roaming\`` et supprime le dossier `PreMiD`.
MacOS :`~/users/USER/~Library/Application Support/`et supprimez le dossier`PreMiD``.

### Sur les distributions basées sur Ubuntu/Debian
Si vous avez téléchargé Discord via Snapcraft, RPC ne fonctionnera pas. Vous devez désinstaller la version de Snapcraft en exécutant `sudo snap remove discord` sur un terminal, télécharger la [version Linux de Discord](https://discordapp.com/api/download?platform=linux) ([ou Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), puis naviguant dans le répertoire vers lequel vous avez téléchargé Discord (généralement `$HOME/Downloads`), puis l'installation du paquet en utilisant `sudo dpkg -i discord-*. eb`.

### McAfee a détecté PreMiD comme un virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.gg/WvfVZ8T) and one of our Support Agents will be able to help you out! 
> 
> {.is-warning}

1. Open the McAfee application and click the settings icon in the top right. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Click "Quarantined Items" (Second from the top).
3. Expand it, and click the `>` icon before an item with the name "settings.dat".
4. Make sure the path includes "AppData\Local\Temp\PreMiD", if so select it and press restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. After it is restored you can close the "Quarantined Items" popup, then press the settings icon again in the top right.
6. Click "Real-Time Scanning" (Third from the top).
7. Expand it and click "Add file".
8. Type "%appdata%" in the URL bar of the file manager and press Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Open the "PreMiD" folder and select the "PreMiD.exe" file and click open. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee should now ignore our file, just launch our application and you should be good to go.

### That has not solved my problem
Veuillez ouvrir un ticket dans <ahref="https://discord.gg/WvfVZ8T">#support</a>.