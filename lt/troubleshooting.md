---
title: Nesklandumų sprendimas
description: Viskas kas padės jums sutaisyti jūsų problemą
published: true
date: 2020-08-30T17:14:32.108Z
tags:
editor: markdown
---

> Įsitinkite jog esate įsidiegę papildinį **taipogi** ir aplikaciją! 
> 
> {.is-warning}

### Are you using the using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Perkraukite tinklalapį
Jūs galite paspausti <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) arba <kbd>CMD+R</kbd> (MacOS) naudojantis savo klaviatūra, vietoj to, jog ieškoti atnaujinimo mygtuko.

### Perkraukite naršyklę
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) arba <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) taipogi atlieką puikiai darbą. (Jūs, žinoma, turite perkrauti savo naršyklę)

### Įsitikinkite jog turite įsijungę Discord žaidimų veiklumą savo nustatymuose
**Naudotojo Nustatymai** > **Žaidimo Veikla** ![gameactivity_edited.png](/gameactivity_edited.png)

### Perkrauti PreMiD (aplikaciją)
![quit.png](/quit.png) Jūs turite perkrauti PreMiD.

### Perkrauti Discord
Spauskite <kbd>CTRL+R</kbd> (Windows) arba <kbd>CMD+R</kbd> (MacOS) naudodamiesi savo klaviatūra arba perkraukite Discord savarankiškai.

### Įsitikinkite jog Discord nėra įjungtas naudojantis administratoriaus teisėmis
Įtin svarbu. Discord RPC neveiks jeigu jūs esate įsijungę Discord naudojantis administratoriaus teisėmis.

### Patikrinkite ar turite aktyvią antivirusinę ar ugniasienę savo kompiuteryje
Kartais antivirusinės programos ir ugniasienės blokuoja aplikacijas kurios kuria/talpiną serverius ar tiesiog prisijungia prie interneto. Mes naudojame lokalų serverį jog gauti ir išsiųsti duomenis tarp mūsų programėlės ir naršyklės papildinio, tad jeigu jūs užblokuosite programėlės galimybę išsiųsti duomenis, jūs tikriausiai negalėsite naudotis PreMiD.

### Papildinių išjungimas
Deaktyvuokite visus savo papildinius ir patikrinkite jog veikia. Jeigu taip, pabandykite aktyvuoti savo papildinius pažingsniui ir praneškite kuris papildinys sugadino PreMiD.

### Kompiuterio perkrovimas
Tikiuosi žinote kaip perkrauti savo kompiuterį.

### Reinstaliacija PreMiD
Taipogi kartais įvyksta problemų su PreMiD failais... Įdiegimo pamokos gali būti randamos [čia](/install).

### Savarankiškas ištrynimas
Windows:    `C:\Users\Vartotojas\AppData\Roaming\`` ir ištrinkite aplankalą `PreMiD`.
MacOS:`~/users/Vartotojas/~Library/Application Support/`ir ištrinkite aplankalą `PreMiD``.

### Mūsų Ubuntu/Debian distro
Jeigu jūs atsisiuntėte Discord naudodamiesi Snapcraft, RPC (Rich-Presence) jums neveiks. Jūs turite pašalinti Snapcraft versija išsiųsdami `sudo snap remove discord` naudodamiesi terminalu, atsisiųskite [Discord Linux versiją](https://discordapp.com/api/download?platform=linux) ([Arba Discord Canary versija](https://discordapp.com/api/canary/download?platform=linux)), tada naviguokitės į direktorija į kurią atsisiuntėte Discord (dažniausiai tai būna `$HOME/Downloads`), tada įdiekite paketą naudodami `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
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

### Tai nesutaisė mano problemos
Prašome atidaryti bilietą mūsų discord [#support](https://discord.premid.app/) teksto kanale.