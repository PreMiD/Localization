---
title: Linux
description: Primeiros passos com a instalação do PreMiD no Linux
published: true
date: 2020-03-15T17:29:16.527Z
tags:
---

> Antes de continuar, certifique-se de que seu sistema atenda a todos os [requisitos](/install/requirements).{.is-info}

A instalação do aplicativo é muito importante, uma vez que a extensão não pode fazer nada por si só.

# Instalação

<table>
  <tr>
    <th>Distribuição Linux suportada</th>
    <th>Método</th>
    <th>Instalação</th>
    <th>Notas Adicionais</th>
  </tr>
  <tr>
    <td>Todas</td>
    <td>Portable <a href="https://github.com/PreMiD/Linux/releases/latest">AppImage</a></td>
    <td>
        <code>wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod +x PreMiD*.AppImage</code><br>inicie <code>./PreMiD*.AppImage</code> depois ou apenas dê um duplo-clique nele
    </td>
    <td><b>Este é o pacote recomendado</b> para usar, se você quiser experimentar o PreMiD ou simplesmente não quiser instalá-lo (ou talvez colocá-lo em um pendrive), ele está sempre atualizado, mas <i> não é iniciado automaticamente na inicialização do sistema </i>; portanto, se você se cansar de abri-lo toda vez, use os outros métodos abaixo (de acordo com a distribuição do Linux)</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Arch User Repository</a></td>
    <td>Using yay :<br><code>yay -S premid</code><br></td>
    <td rowspan="4">Se sua distribuição usa pacman, você deve instalar um dos ajudantes primeiro. Se você não tiver, Yay é recomendado, execute: <br> <code> git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si </code> <br> então <code> yay -S premid </code>, conforme instruído na coluna anterior. <br> <br> Outros auxiliares do AUR / Pacman também funcionam, embora a funcionalidade de cada um seja diferente, portanto você poderá enfrentar problemas ao usá-los.</td>
  </tr>
  <tr>
    <td>Using pakku :<br><code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>Using pacaur :<br><code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>Using trizen :<br><code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Manually</a></td>
    <td>Não recomendado, não é para iniciantes e não é atualizado automaticamente.</td>
  </tr>
  <tr>
    <td>Outros</td>
    <td>-</td>
    <td>-</td>
    <td>Em breve (TM), use o AppImage por enquanto</td>
  </tr>
</table>

> Não se esqueça de [adicionar a **extensão**](/install).{.is-warning}

# Mais informação
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}