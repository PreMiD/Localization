---
title: Nesklandumų sprendimas
description: Viskas kas padės jums sutaisyti jūsų problemą
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> Įsitinkite jog esate įsidiegę papildinį **taipogi** ir aplikaciją! 
> 
> {.is-warning}

### Perkraukite tinklalapį
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Perkraukite naršyklę
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) does a good job too. (You have to start your browser again obviously.)

### Įsitikinkite jog turite įsijungę Discord žaidimų veiklumą savo nustatymuose
**User Settings** > **Game Activity** ![gameactivity_edited.png](/gameactivity_edited.png)

### Perkrauti PreMiD (aplikaciją)
![quit.png](/quit.png) Jūs turite perkrauti PreMiD.

### Perkrauti Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Įsitikinkite jog Discord nėra įjungtas naudojantis administratoriaus teisėmis
Įtin svarbu. Discord RPC neveiks jeigu jūs esate įsijungę Discord naudojantis administratoriaus teisėmis.

### Patikrinkite ar turite aktyvią antivirusinę ar ugniasienę savo kompiuteryje
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Papildinių išjungimas
Deaktyvuokite visus savo papildinius ir patikrinkite jog veikia. Jeigu taip, pabandykite aktyvuoti savo papildinius pažingsniui ir praneškite kuris papildinys sugadino PreMiD.

### Kompiuterio perkrovimas
Tikiuosi žinote kaip perkrauti savo kompiuterį.

### Reinstaliacija PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Savarankiškas ištrynimas
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### Tai nesutaisė mano problemos
Prašome atidaryti bilietą mūsų discord [#support](https://discord.gg/WvfVZ8T) teksto kanale.