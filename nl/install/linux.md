---
title: Linux
description: Aan de slag met de PreMiD installatie op Linux
published: true
date: 2020-03-15T17:29:16.527Z
tags:
---

> Voordat je verder gaat, zorg ervoor dat je systeem voldoet aan alle [vereisten](/install/requirements).{.is-info}

De installatie van de applicatie is van groot belang, omdat de extensie op zichzelf niets kan doen.

# Installeer

<table>
  <tr>
    <th>Ondersteunde Linux distributie</th>
    <th>Methode</th>
    <th>Installeren</th>
    <th>Aanvullende Notities</th>
  </tr>
  <tr>
    <td>Alle</td>
    <td>Portable <a href="https://github.com/PreMiD/Linux/releases/latest">AppImage</a></td>
    <td>
        <code>wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod +x PreMiD*.AppImage</code><br>run <code>./PreMiD*.AppImage</code> nadien of dubbelklik het
    </td>
    <td><b>Dit is het aanbevolen pakket</b> om te gebruiken, of u wilt PreMiD proberen of u wilt het gewoon niet installeren ( of het in een USB-stick stoppen), het is altijd up-to-date maar <i>start niet automatisch bij het opstarten van het systeem</i>, dus als je het moe wordt om het elke keer te moeten openen, gebruik dan de andere methodes hieronder (volgens uw Linux distributie)</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Arch User Repository</a></td>
    <td>Met yay :<br><code>yay -S premid</code><br></td>
    <td rowspan="4">Als je distro pacman gebruikt, dan moet je eerst een van de helpers installeren. Als je er geen hebt, wordt Yay aanbevolen, voer uit :<br><code>git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si</code><br>then <code>yay -S premid</code>, zoals in de vorige kolom is bepaald.<br><br>Andere AUR/Pacman helpers werken ook, hoewel de functionaliteit van elke anders is waardoor je problemen kunt ondervinden tijdens het gebruik ervan.</td>
  </tr>
  <tr>
    <td>Met pakku :<br><code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>Met pacaur :<br><code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>Met trizen :<br><code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Handmatig</a></td>
    <td>Niet aanbevolen, niet beginnersvriendelijk en niet automatisch bijwerken.</td>
  </tr>
  <tr>
    <td>Overige</td>
    <td>-</td>
    <td>-</td>
    <td>Binnenkort (TM), gebruik de AppImage voor nu</td>
  </tr>
</table>

> Vergeet niet [de **extensie**](/install)toe te voegen.{.is-warning}

# Meer info
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}