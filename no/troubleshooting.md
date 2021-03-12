---
title: Feilsøking
description: Alt for å løse ditt problem
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Vær sikker på at du har utvidelsen **og** applikasjonen installert! 
> 
> {.is-warning}

Inkludert på denne siden:
1. [Generelle feilsøking](https://docs.premid.app/troubleshooting#general)
2. [Linux feilsøking](https://docs.premid.app/troubleshooting#linux)
3. [MacOS feilsøking](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Generelle feilsøking
### Last inn siden på nytt
Du kan trykke <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på tastaturet ditt i stedet for å søke etter oppdateringsknappen.

### Bruker du Discord-appen?
PreMiD fungerer **ikke** på nettleserversjonen av Discord, du må laste ned [her](https://discord.com/download).

### Kontroller at du har aktivert Discord Game aktivitet i innstillinger
**Brukerinnstillinger** > **Spillaktivitet** ![gameactivity_edited.png](/gameactivity_edited.png)

### Pass på at Discord ikke kjører som administrator
Veldig viktig. Discord RPC vil ikke virke hvis du kjører Discord som administrator.

### Bruker du en tilstedeværelse med innstillinger?
Mange trykk (inkludert `Twitch` and `SoundCloud`) påvirkes av et problem med utvidelser. Dette problemet fører til at utvidelsen ikke setter inn standardverdiene for innstillingene korrekt.

For å løse dette, er alt du må gjøre å slå på det øverste innstillingene: ![presencesettings.gif](/presencesettings.gif)

### Restart nettleseren din
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) eller <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) gjør en god jobb også. (Du må starte nettleseren din igjen senere)

### Restart PreMiD (Applikasjonen)
![quit.png](/quit.png) Du må starte PreMiD på nytt.

### Omslad/start Discord på nytt
Trykk <kbd>CTRL+R</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på tastaturet eller restart Discord manuelt.

### Sjekk om du har antivirus eller brannmur som kjører på din datamaskin
Noen ganger blokkerer antivirusprogrammer og brannmurer applikasjoner som er opprettende/verter servere eller bare kobler til Internett. Vi bruker en lokal server for å motta og passere data mellom vår app og utvidelse, så hvis du vil blokkere appens mulighet til å sende data du sannsynligvis ikke vil kunne bruke PreMiD.

### Deaktiver dine addons
Deaktiver alle dine tillegg og se om det fungerer. Hvis ja, prøv å aktivere addons steg-for-steg og fortell oss hvilke tillegg som har brutt PreMiD.

### Restart datamaskinen din
Jeg håper du vet hvordan man restarter en datamaskin.

### Reinstaller PreMiD
Noen ganger så er det noe galt med filene... Øvinger i installasjonen kan bli funnet [her](/install).

### Manuell fjerning
Windows:    `C:\Users\USER\AppData\Roaming\`` og slett mappen`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`og slett mappen`PreMiD``.

### McAavgift påvist PreMiD som virus (Windows)
Dette er falsk positivt fra McAfee og vi har meldt saken inn til dem: for nå kan du utelukke PreMiD fra skanningen ved å gjøre følgende trinn:

> Hvis du ikke føler deg sikker på å ta disse trinnene, føler deg fri til å lage en sak i [#support](https://discord.premid.app/) og en av våre støttesagenter vil kunne hjelpe deg med! 
> 
> {.is-warning}

1. Åpne applikasjonen for McAfee og klikk på innstillinger-ikonet øverst til høyre. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klikk "Quarantined Items" (Antatt fra toppen).
3. Utvid det, og klikk på `>` ikonet før et element med navnet "settings.dat".
4. Kontroller at stien inneholder "AppData\Local\Temp\PreMiD", hvis så velg den og trykk gjenoppretting. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Når det er gjenopprettet kan du lukke "Quarantined Items" opp, og trykke deretter på innstillingsikonet igjen øverst til høyre.
6. Klikk på "realtidskanning" (Tredje fra toppen).
7. Utvid det og klikk på "Legg til fil".
8. Skriv "%appdata%" i URL-feltet i filadministreren og trykk Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Åpne mappen "PreMiD" og velg "PreMiD.exe" for å klikke på åpen. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. Nå bør McAfee ignorere filen vår, bare start søknaden vår og du bør være flink til å gå.

### PreMiD status bugged på discord!
Ikke bekymre deg. Trykk på <kbd>CTRL+R</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) tastaturet mens du fokuserer på discord vinduet for å laste den på nytt.

<a name="linux"></a>

# Linux feilsøking
### Ubuntu/Debia-basert avstand
Hvis du har lastet ned Discord gjennom Snapcraft, vil RPC ikke fungere. Du må avinstallere Snapcraft versjonen ved å utføre `sudo snap remove discord` på en terminal, last ned **[nødvendig Linux build](https://discordapp.com/api/download?platform=linux)** (**[eller Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), så går du til mappen du lastet ned Discord til (vanligvis `$HOME/Downloads`), deretter installere pakken ved å bruke `sudo dpkg -i discord-*. eb`. Dersom AppImage ikke fungerer, bør du vurdere å sjekke våre andre pakker med **[denne linken](https://packagecloud.io/premid/linux)**.

### Arch Linux basert distroer
Arch Linux-baserte distroer bør bruke pakken AUR (Arch User Repository) som heter <code>premid</code> eller <code>forhåndsinngående git</code> (<em x-id="3">ADVARSEL: dette depotet bygger premid fra vår kildekode.</em>). Hvis du ikke ønsker å installere en AUR manager yay osv. , du kan sjekke ut vårt AppImage som er nedlastbar fra vårt <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Advarsel: pakken i <strong x-id="1">AUR</strong> pakkebrønn vedlikeholdes ikke av oss (som preMiD organisasjon), men av andre personer.</em>

### Port binding
Du bør vite at <strong x-id="1">PreMiD</strong> binder seg til porten <strong x-id="1">3020</strong>. Dette er nødvendig for utvidelsen og søknadskommunikatet. Hvis <strong x-id="1">PreMiD</strong> viser deg en feil vedrørende denne porten, du skal sjekke om noe er bindet med 3020 porten ved å kjøre <code>sudo lsof -i:3020</code> eller <code>sudo netstat -tnlp φ grep :3020</code> i terminalen din. Hvis noe av prosessen er bundet til den bør du sørge for å frigjøre porten og prøve å kjøre <code>PreMiD</code> igjen.

### PreMiD's AppImage starter ikke på innlogging
Som vi har angitt i vårt **Linux repository**, så kan ikke AppImage startes opp ved innlogging. Du kan legge den til manuelt ved å gjøre disse trinnene:
1. Opprett en fil med navn <strong x-id="1">rc.local</strong> i <code>/etc</code> mappen.
2. Åpne denne filen i ditt favoritt-redigeringsprogram og lim inn kode ved å endre noen ting:
```bash
#!/bin/bash
# Kreves for å kjøre som /bin/bash (hvis du bruker zsh etc. du kan endre det.)

# Eksempel: /hjem/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Lagre fil og chmod den som kjørbar `sudo chmod a+x /etc/rc.local`.
4. Start PCen og PreMiD AppImage på nytt ved innlogging.

<a name="macos"></a>

# MacOS feilsøking
### Feil ved oppretting av mappe %s
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

Dersom du får denne feilen betyr det at kontoen din ikke har administratorrettigheter og at du må opprette mappen manuelt ved å gjøre disse trinnene:
1. Åpne finder og åpne **Programmer** mappen.
2. Høyreklikk på tom plass, klikk **Opprett mappe**.
3. Til denne mappen tildeler `PreMiD` navn (husk tidligere brukte bokstaver).
4. Åpne installasjonsprogrammet på nytt.

# Det har ikke løst mitt problem
Åpne en sak i [#support](https://discord.premid.app/).