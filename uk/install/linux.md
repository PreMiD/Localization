---
title: Linux
description: Початок роботи із встановленням PreMiD на Linux
published: true
date: 2020-03-15T17:29:16.527Z
tags:
---

> Перед тим, як піти далі, переконайтеся, що ваша система відповідає всім вимогам [](/install/requirements).{.is-info}

Встановлення програми дуже важливе, оскільки розширення не може робити нічого самостійно.

# Установлення

<table>
  <tr>
    <th>Підтримувані дистрибутиви Linux</th>
    <th>Метод</th>
    <th>Установлення</th>
    <th>Додаткові примітки</th>
  </tr>
  <tr>
    <td>Усе</td>
    <td>Портативний <a href="https://github.com/PreMiD/Linux/releases/latest">AppImage</a></td>
    <td>
        <code>wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod +x PreMiD*.AppImage</code><br>run <code>./PreMiD*.AppImage</code> afterwards or just double-click it
    </td>
    <td><b>Рекомендований пакет</b> для використання, або якщо ви хочете спробувати PreMiD або просто не хочете встановити його (або можливо поставити його в USB флешку), це завжди актуально, але <i>не автозапускається при старті системи</i> так що, якщо ви втомилися відкривати його щоразу, використовуйте інші методи нижче (відповідно до вашого дистрибутиву Linux)</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Arch User Repository</a></td>
    <td>Використовуючи yay :<br><code>yay -S premid</code><br></td>
    <td rowspan="4">Якщо ваш дистрибутив використовує пакман, тоді ви повинні встановити один з помічників в першу чергу. If you don't have any, Yay is recommended, run :<br><code>git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si</code><br>then <code>yay -S premid</code>, as instructed in the previous column.<br><br>Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.</td>
  </tr>
  <tr>
    <td>Використовуючи pakku :<br><code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>Використовуючи pacaur :<br><code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>Використовуючи trizen :<br><code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Вручну</a></td>
    <td>Не рекомендується, не дружній для початківців і не оновлюється автоматично.</td>
  </tr>
  <tr>
    <td>Інші</td>
    <td>-</td>
    <td>-</td>
    <td>Незабаром (TM), на даний момент використовуйте AppImage</td>
  </tr>
</table>

> Не забудьте [додати розширення ****](/install).{.is-warning}

# Детальніше
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}