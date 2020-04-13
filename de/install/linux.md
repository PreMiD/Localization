---
title: Linux
description: Erste Schritte einer PreMiD-Installation unter Linux
published: true
date: 2020-03-15T17:29:16.527Z
tags:
---

> Bevor Du fortfährst, stelle sicher, dass Dein System alle [Anforderungen erfüllt](/install/requirements).{.is-info}

Die Installation der Anwendung ist sehr wichtig, da die Erweiterung allein nicht funktionieren würde.

# Installieren

<table>
  <tr>
    <th>Unterstützte Linux-Distribution</th>
    <th>Methode</th>
    <th>Installieren</th>
    <th>Zusätzliche Anmerkungen</th>
  </tr>
  <tr>
    <td>Alle</td>
    <td>Portable <a href="https://github.com/PreMiD/Linux/releases/latest">AppImage</a></td>
    <td>
        <code>wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod +x PreMiD*.AppImage</code><br>starten <code>./PreMiD*.AppImage</code> oder klicken Sie es einfach doppelt an
    </td>
    <td><b>Dies ist das empfohlene Paket</b>zu verwenden, entweder wenn Sie PreMiD ausprobieren möchten oder es einfach nicht installieren möchten (oder es in einen USB-Stick kopieren möchten), es ist immer auf dem neuesten Stand aber <i> wird beim Systemstart nicht automatisch gestartet</i>, wenn sie es also satt haben, es jedes Mal öffnen zu müssen, verwenden Sie die folgenden Methoden (entsprechend Ihrer Linux-Distribution)</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Arch Nutzerquelle</a></td>
    <td>Benutzt yay :<code>yay -S premid</code><br></td>
    <td rowspan="4">Wenn deine Distribution Pacman verwendet, musst du zuerst einen der Helfer installieren. Wenn du keine hast, ist Yay empfohlen, führe dies aus: <code>git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si<br>dann<code>yay -S premid</code>, wie in der vorherigen Spalte angegeben.<br> Andere AUR / Pacman-Helfer arbeiten ebenfalls, obwohl die Funktionen der einzelnen Nutzer unterschiedlich sind, sodass bei der Verwendung möglicherweise Probleme auftreten könnten.</td>
  </tr>
  <tr>
    <td>Wenn du pakku benutzt:<code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>Wenn du pacaur benutzt:<code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>Wenn du trizen benutzt:<code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Manuell</a></td>
    <td>Nicht empfohlen, nicht anfängerfreundlich und aktualisiert nicht automatisch.</td>
  </tr>
  <tr>
    <td>Andere</td>
    <td>-</td>
    <td>-</td>
    <td>Bald (TM), benutze AppImage für jetzt</td>
  </tr>
</table>

> Vergiss nicht, [die **Erweiterung**](/install) hinzuzufügen.{.is-warning}

# Mehr Informationen
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}