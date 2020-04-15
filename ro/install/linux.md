---
title: Linux
description: Getting started with a PreMiD installation on Linux
published: true
date: 2020-03-15T17:29:16.527Z
tags:
---

> Before going any further, make sure your system meets all the [requirements](/install/requirements).{.is-info}

The installation of the application is very important as the extension can not do anything by itself.

# Instalează

<table>
  <tr>
    <th>Distribuția Linux suportată</th>
    <th>Metoda</th>
    <th>Instalarea</th>
    <th>Note Adiționale</th>
  </tr>
  <tr>
    <td>Toate</td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest">AppImage</a> Portabilă</td>
    <td>
        <code>wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod +x PreMiD*.AppImage</code><br>Rulează <code>./PreMiD*.AppImage</code> după aceea sau doar fă dublu clic
    </td>
    <td><b>Acesta este pachetul recomandat</b> pentru folosire, fie dacă vrei doar să testezi PreMiD sau pur și simplu nu vrei să-l instalezi (sau poate îl pui într-un stick USB), e mereu actualizat la zi dar <i>nu pornește odată cu sistemul</i>, deci dacă obosești să îl pornești manual de fiecare dată, folosește metodele de mai jos (în funcție de distribuția ta de Linux)</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Arch User Repository</a></td>
    <td>Folosind yay:<br><code>yay -S premid</code><br></td>
    <td rowspan="4">Dacă distribuția ta folosește pacman, atunci trebuie să instalezi unul dintre helperi mai întâi. Dacă nu ai niciun helper, Yay este recomandat, rulează comanda:<br><code>git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si</code><br>apoi <code>yay -S premid</code>, așa cum am spus în coloana anterioară.<br><br>Alți helperi AUR/Pacman funcționează de asemenea, dar fiecare are o funcționalitate diferită așa că ați putea întâmpina probleme folosindu-i.</td>
  </tr>
  <tr>
    <td>Folosind pakku:<br><code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>Folosind pacaur:<br><code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>Folosind trizen:<br><code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Instalare manuală</a></td>
    <td>Nu este recomandată, nu e ușoară pentru începători și nu se actualizează automat.</td>
  </tr>
  <tr>
    <td>Altele</td>
    <td>-</td>
    <td>-</td>
    <td>Soon™️, folosește AppImage-ul între timp</td>
  </tr>
</table>

> Do not forget to [add the **extension**](/install).{.is-warning}

# Mai multe informații
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}