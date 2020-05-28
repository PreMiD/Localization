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

### Tai nesutaisė mano problemos
Prašome atidaryti bilietą mūsų discord [#support](https://discord.gg/WvfVZ8T) teksto kanale.