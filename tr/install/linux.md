---
title: Linux
description: Linux'ta PreMiD kurulumuna başlarken
published: true
date: 2020-03-15T17:29:16.527Z
tags:
---

> İlerlemeden önce sisteminizin tüm [gereksinimleri](/install/requirements) karşıladığından emin olun.{.is-info}

Eklenti, uygulaması olmadan bir işe yaramayacağı için uygulamanın da de yüklü olması gerekmektedir.

# Yükleme

<table>
  <tr>
    <th>Desteklenen Linux Dağıtımı</th>
    <th>Yöntem</th>
    <th>Yükleniyor</th>
    <th>Ek Notlar</th>
  </tr>
  <tr>
    <td>Tümü</td>
    <td>Taşınabilir <a href="https://github.com/PreMiD/Linux/releases/latest">AppImage</a></td>
    <td>
        <code>wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod +x PreMiD*.AppImage</code><br>çalıştır <code>./PreMiD*.AppImage</code> sonra veya çift tıkla
    </td>
    <td>PreMiD'i sadece test etmeyi istemeniz durumunda veya yükleme değil, taşınabilir bir USB içerisinde taşımak istemeniz durumunda kullanabileceğiniz <b>en iyi yöntem</b>, kendini güncelleyebilir ancak sistem başlangıcında otomatik çalışamaz, her seferinde açmakla uğraşmak istemiyorsanız, aşağıdan dağıtımınıza uygun yükleme yöntemlerine göz atın.</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Arch Kullanıcı Deposu</a></td>
    <td>yay kullanarak :<br><code>yay -S premid</code><br></td>
    <td rowspan="4">Dağıtımınız pacman kullanıyorsa, AUR depolarına ulaşmak için bir yardımcı kurmanız gereklidir. Eğer kurulu bir taneye sahip değilseniz, Yay kullanmanızı öneririz, <br><code>git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si</code><br>sonrasında ise <code>yay -S premid</code>.<br><br>Diğer AUR/Pacman yardımcıları da çalışır ancak hepsinin fonksiyonları farklı çalıştığı için hepsi sisteminizde çalışmayabilir. Bu durumda bir diğerini deneyin.</td>
  </tr>
  <tr>
    <td>pakku kullanarak :<br><code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>pacaur kullanarak :<br><code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>trizen kullanarak :<br><code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Elle</a></td>
    <td>Tavsiye edilmez, yeni kullanıcı dostu değildir ve otomatik güncelleme almaz.</td>
  </tr>
  <tr>
    <td>Diğerleri</td>
    <td>-</td>
    <td>-</td>
    <td>Yakında, şimdilik AppImage seçeneğini kullanın.</td>
  </tr>
</table>

> **[Eklentiyi](/install)** de eklemeyi unutmayın.{.is-warning}

# Daha fazla bilgi
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}