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
    <td><b>Рекомендований пакет</b> для використання. Якщо ви хочете спробувати PreMiD або просто не хочете встановлювати його (або можливо відправити його в USB флешку), але <i>не запускається самостійно при завантаженні системи,</i> тому, якщо ви втомилися відкривати його щоразу, використовуйте інші методи нижче (відповідно до вашого дистрибутиву Linux).</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Користувацький репозиторій Arch</a></td>
    <td>Використовуючи yay :<br><code>yay -S premid</code><br></td>
    <td rowspan="4">Якщо ваш дистрибутив використовує pacman, тоді ви повинні встановити один з помічників в першу чергу. Якщо ви не маєте жодних с перелічених, ми рекомендуємо Yay виконайте:<br><code>git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si</code><br> згодом <code>yay -S premid</code>, як це показано в попередньому стовпці.<br><br>Інші помічники AUR/Pacman працюють чудово, хоча функціонал кожного з них є складним, то ж не виключено, що ви стикнетеся зі складнощами коли будете їх використовувати.</td>
  </tr>
  <tr>
    <td>Використовуючи pakku: <br><code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>Використовуючи pacaur: <br><code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>Використовуючи trizen: <br><code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Вручну</a></td>
    <td>Не рекомендується, не дружній для початківців і не оновлюється автоматично.</td>
  </tr>
  <tr>
    <td>Інше</td>
    <td>-</td>
    <td>-</td>
    <td>Незабаром (TM), а поки що використовуйте AppImage</td>
  </tr>
</table>

> Не забудьте [додати розширення ****](/install).{.is-warning}

# Детальніше
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}