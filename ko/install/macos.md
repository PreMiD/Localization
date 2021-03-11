---
title: macOS
description: Getting started with a PreMiD installation on macOS
published: true
date: 2020-02-12T22:08:37.439Z
tags:
---

> 설치를 진행하기 전에, 시스템이 [요구사항](/install/requirements)을 충족하는지 확인해주세요. 
> 
> {.is-info}

애플리케이션만으로는 아무것도 할 수 없기에 확장 프로그램 설치가 매우 중요합니다.

# 설치
1. 오른쪽의 링크를 눌러 다운로드 페이지로 들어가세요. [페이지로 이동](https://premid.app/downloads)
2. Choose **OS X**.
3. Extract the archive if necessary.
4. Open the installer.
5. A **security alert** may appear if you're installing PreMiD for the first time. If it does, follow the steps under [Allow apps from unidentified developers](https://docs.premid.app/install/macos#allow-apps-from-unidentified-developers)
> This is because we do not have a Code Signing Certificate (CSC). [Support us](https://www.patreon.com/Timeraa) to fund it.{.is-info}
6. Choose open when prompted.
7. Grant access to connections through **Firewall** and control **System Events** when prompted.

The application will start automatically. Check for the symbol in your menu bar.

> Do not forget to [add the **extension**](/install). 
> 
> {.is-warning}

![](https://img.icons8.com/color/2x/mac-logo.png) {.align-abstopright}

## Allow apps from unidentified developers
Steps for macOS BigSur (11.0+):
1. Right click on our installer.
2. Click open in the dropdown menu.
3. Click open in popup.

Steps for older macOS versions:
1. Open System Preferences.
2. Go to the Security & Privacy tab.
3. Click on the lock and enter your password or scan your fingerprint so you can make changes.
4. Change the setting for 'Allow apps downloaded from' to 'App Store and identified developers' from just 'App Store'.