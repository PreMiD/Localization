---
title: Problēmu novēršana
description: Viss, lai atrisinātu jūsu problēmu
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Pārliecinaties, vai esat uzstādījis paplašinājumu **un** aplikāciju! 
> 
> {.is-warning}

Iekļauts šajā lapā:
1. [Vispārīgu problēmu novēršana](https://docs.premid.app/troubleshooting#general)
2. [Linux problēmu novēršana](https://docs.premid.app/troubleshooting#linux)
3. [MacOS problēmu novēršana](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Vispārīgu problēmu novēršana
### Pārlādējiet lapu
Jūs varat nospiest <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) vai <kbd>CMD+R</kbd> (MacOS) uz tastatūras, nevis meklēt atsvaidzināšanas pogu.

### Vai jūs izmantojat lietotni Discord?
PreMiD **nedarbojas** uz Discord pārlūkprogrammas versijas, jums ir jālejupielāde lietotne [šeit](https://discord.com/download).

### Pārliecinaties, vai iestatījumos esat iespējojis Discord Spēļu Aktivitāti
**Lietotaja Iestatījumi** > **Spēļu Aktivitāte** ![gameactivity_edited.png](/gameactivity_edited.png)

### Pārliecinaties, ka Discord NEIET, kā administrators
Ļoti svarīgi. Discord RPC nedarbosies, ja Discord palaidīsiet, kā administratoru.

### Vai izmantojat presence ar iestatījumiem?
Daudzas presences (tostarp `Twitch` un `SoundCloud` tiek ietekmēti dēļ paplašinājuma kļūdas. Šīs kļūdas dēļ paplašinājums pareizi neuztver iestatījumu noklusējuma vērtības.

Lai to atrisinātu, viss, kas jums ir jāizdara, ir jāpārslēdz visaugstāko iestatījumu: ![presencesettings.gif](/presencesettings.gif)

### Restartējiet savu pārlūkprogrammu
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) vai <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) dara arī labu darbu. (Jums, protams, arī jāpalaiž pārlūkprogrammu pa jaunu.)

### Restartējiet PreMiD (Lietotni)
![quit.png](/quit.png) Pēc tam jums ir jārestartē PreMiD.

### Pārlādējiet/restartējiet Discord
Nospiediet <kbd>CTRL+R</kbd> (Windows) vai <kbd>CMD+R</kbd> (MacOS) uz tastatūras vai restartējiet Discord manuāli.

### Pārbaudiet, vai datorā darbojas antivīruss vai ugunsmūris
Dažreiz pretvīrusu programmas un ugunsmūri bloķē lietotnes, kuras veido/mitina serverus vai vienkārši izveido savienojumu ar internetu. Mēs izmantojam lokālo serveri, lai saņemtu un pārsūtītu datus starp mūsu lietotni un paplašinājumu, tādēļ, ja jūs bloķēsiet lietotnes spēju pārsūtīt datus, visticamāk, nevarēsiet izmantot PreMiD.

### Atspējojiet savus paplašinājumus
Atspējojiet visus savus paplašinājumus un pārbaudiet, vai tas darbojas. Ja jā, mēģiniet soli pa solim iespējot savus paplašinājumus un pastāsties mums, kurš paplašinājums traucēja PreMiD.

### Restartējiet datoru
Es ceru, ka jūs zināt, kā restartēt datoru.

### Pārinstalējat PreMiD
Dažreiz failos ir kaut kas nepareizs... Uzstādīšanas pamācības var atrast [šeit](/install).

### Manuāla noņemšana
Windows:    `C:\Users\USER\AppData\Roaming\`` un izdzēšat mapi`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`un izdzēšat mapi`PreMiD``.

### McAfee atklāja PreMiD kā vīrusu (Windows)
Šis ir nepatiess pozitīvs no Mcafee, un mēs esam viņiem ziņojuši par šo problēmu, pagaidām jūs varat izslēgt PreMiD no skenēšanas, viecot šādas darbības:

> Ja nejūtaties pārliecināts veicot šīs darbības, droši izveidojiet biļeti [#support](https://discord.premid.app/) un viens no mūsu Atbalsta Aģentiem varēs tev palīdzēt! 
> 
> {.is-warning}

1. Atveriet lietotni McAfee un augšējā labajā stūrī noklikšķiniet uz iestatījumu ikonas. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Spied uz "Karantīnā ievietotie vienumi" (Otrais no augšas).
3. Izvērsiet to un uzspiediet uz `>` ikonas pirms vienuma ar nosaukumu "settings.dat".
4. Pārliecinieties, vai ceļā ir iekļauts "AppData\Local\Temp\PreMiD", ja tā, atlasiet to un nospiediet atjaunot. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Pēc tā atjaunošanas varat aizvērt uznirstošo logu "Karantīna ievietotie vienumi", pēc tam augšējā labajā stūrī vēlreiz nospiediet iestatījumu ikonu.
6. Uzspiediet uz "Real-Time Scanning" (trešais no augšas).
7. Izvērsiet to un uzspiediet uz "Add file".
8. Failu pārvaldnieka URL joslā ierakstiet "%appdata%" un nospiediet Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Atveriet "PreMiD" mapi un atlasiet "PreMiD.exe" failu un uzspiediet uz atvērt. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee tagad vajadzētu ignorēt mūsu failu, vienkārši palaidiet mūsu lietotni un jums visam vajadzētu iet labi.

### PreMiD statuss kļūdains Discord!
Neuztraucies. Nospiediet taustiņus <kbd>CTRL+R</kbd> (Windows) vai <kbd>CMD+R</kbd> (MacOS) kamēr fokusējat uz jūsu Discord logu, lai to atkārtoti ielādētu.

<a name="linux"></a>

# Linux problēmu novēršana
### Ubuntu/Debian balstītas distribūcijas
Ja Discord esat lejupielādējis izmantojot Snapcraft, RPC nedarbosies. Jums ir jāatinstalē Snapcraft versija, izpildot `sudo snap remove discord` terminālā. Lejupielādējiet **[Discord Linux būvējumu](https://discordapp.com/api/download?platform=linux)**(**[vai Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), pēc tam pārejiet uz direktoriju, kurā lejupielādējāt Discord (parasti `$HOME/Downloads`), pēc tam uzstādiet pakotni, izmantojot `sudo dpkg -i discord-*.dev`. Ja AppImage nedarbojas, apsveriet iespēju pārbaudīt citas mūsu paketes, izmantojot **[šo saiti](https://packagecloud.io/premid/linux)**.

### Arch Linux balstītas distribūcijas
Arch Linux balstītām distribūcijām vajadzētu izmantot AUR (Arch User Repository) Paketi, kuras nosaukums ir <code>premid</code> vai <code>premid-git</code> (<em x-id="3">UZMANĪBU: Šis repozitorijs ir izveidots, izmantojot avota kodu.</em>). Ja nevēlaties instalēt AUR pārvaldnieku (yay utt.), varat apskatīt mūsu AppImage, kuru var lejupielādēt no mūsu <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repozitorija</a></strong>.
<em x-id="3">Uzmanību: paketi <strong x-id="1">AUR</strong> repozitorijā nevis mēs uzturam (kā PreMiD organizācija), bet gan citi cilvēki.</em>

### Portu saistīšana
Jums būtu jāzina, ka <strong x-id="1">PreMiD</strong> saista pats sevi ar portu <strong x-id="1">3020</strong>. Tas ir nepieciešams, lai Paplašinājums un Lietotne varētu komunicēt. Ja <strong x-id="1">PreMiD</strong> parāda kļūdu par šo portu, jums jāpārbauda, vai kaut kas ir saistīts ar 3020 portu, palaižot <code>sudo lsof -i:3020</code> vai <code>sudo netstat -tnlp | grep :3020</code> jūsu terminālā. Ja kāds process ir saistīts ar to, noteikti atbrīvojiet portu un mēģiniet palaist <code>PreMiD</code> vēlreiz.

### PreMiD AppImage netiek palaists, pieslēdzoties
Kā mēs norādījām mūsu **Linux repozitorijā**, AppImage nevar palaist, pieslēdzoties. Tu to vari pievienot automātiskai palaišanai, veicot šādas darbības:
1. Izveidojiet failu <strong x-id="1">rc.local</strong> <code>/etc</code> direktorijā.
2. Atveriet šo failu iecienītākajā redaktorā un ielīmējiet norādīto kodu, mainot dažas lietas:
```bash
#!/bin/bash
# Nepieciešams, lai palaistu kā /bin/bash (ja izmantojat zsh utt. jūs to varat mainīt.)

# Piemērs: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Saglabājiet failu un chmod to kā izpildāmo failu `sudo chmod a+x /etc/rc.local`.
4. Restartējiet datoru un PreMiD AppImagine vajadzētu palaisties, pieslēdzoties.

<a name="macos"></a>

# MacOS problēmu novēršana
### Veidojot direktoriju, radās kļūda
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

Ja jūs saņemiet šo kļūdu, tas nozīmē, ka jūsu kontam nav Administratora atļauju, un jums ir jāizveido mape manuāli, veicot šādas darbības:
1. Atveriet meklētāju un atveriet **Applications** mapi.
2. Ar peles labo pogu uzspiediet uz tukšas vietas un uzspiediet uz **Create folder**.
3. Šai mapei piešķiriet `PreMiD` nosaukumu (atceries par lielajiem burtiem).
4. Atver uzstādītāju atkal.

# Tas neatrisināja manu problēmu
Lūdzu atveriet biļeti [#support](https://discord.premid.app/).