---
title: Dépannage
description: Tout pour résoudre votre problème
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Assurez-vous d'avoir l'extension **et** l'application installée! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
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

### PreMiD status bugged on discord!
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Si vous avez téléchargé Discord via Snapcraft, RPC ne fonctionnera pas. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named `premid` or `premid-git` (*WARNING: This one builds premid from source*). If you don't want to install aur manager (yay etc.), you can check our AppImage that is downloadable from our **[Linux repository](https://github.com/premid/linux/releases)**. *Warning: **AUR** repo is not maintained by us, but by other people.*

### Port binding
You should know that **PreMiD** binds itself to port **3020** that is necessary for Extension and Application communication. If **PreMiD** shows you error about this port, you should check if something binds to port by writing to terminal `sudo lsof -i:3020` or `sudo netstat -tnlp | grep :3020`. If some application is binded to it you should kill it and try running `PreMiD` again.

### PreMiD's AppImage doesn't launch at login?!?!
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually. Instruction how to do this:
1. Make file named **rc.local** in `/etc` directory.
2. Open this file in your favourite editor and paste-change this:
```bash
#!/bin/bash
# Required to run as /bin/bash (if you use zsh etc. you can change it.)

# Example: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Save file and chmod it as executable `sudo chmod a+x /etc/rc.local`.
4. Restart your PC and PreMiD AppImage should launch at login.

<a name="macos"></a>

# MacOS troubleshooting
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually. Instruction how to do it:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. Create folder named `PreMiD` (remember about upper-cased letters).
4. Open installer again.

# Cela n'a pas résolu mon problème
Please open a ticket in [#support](https://discord.premid.app/).