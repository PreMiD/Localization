---
title: macOS
description: শুরু করা যাক PreMiD ইন্সটলেশন ম্যাকওএস - এ
published: true
date: 2020-02-12T22:08:37.439Z
tags:
---

> আরো দূরে যাওয়ার আগে, নিশ্চিত করো যে তোমার সিস্টেম সব [রিকোয়ারমেন্টগুলো](/install/requirements) পূরণ করে। 
> 
> {.is-info}

অ্যাপ্লিকেশানটির ইন্সটলেশন খুবই গুরুত্বপূর্ণ কেননা এক্সটেনশনটি নিজ থেকে কিছুই করতে পারেনা।

# ইনস্টল
1. আমাদের ডাউনলোড পেজে যাও [এখানে ক্লিক করে](https://premid.app/downloads)।
2. সিলেক্ট করো **OS X**
3. আর্কাইভটি এক্সট্রাক্ট করো যদি প্রয়োজন হয়।
4. ইন্সটলারটি ওপেন করো।
5. A **security alert** may appear if you're installing PreMiD for the first time. If it does, follow the steps under [Allow apps from unidentified developers](https://docs.premid.app/install/macos#allow-apps-from-unidentified-developers)
> এটার কারণ হচ্ছে আমাদের কাছে কোড সাইনিং সার্টিফিকেট (CSC) নেই। [সাপোর্ট করো আমাদের](https://www.patreon.com/Timeraa) এটার জন্য টাকা যোগাতে।{.is-info}
6. সিলেক্ট করো যখন চাওয়া হবে।
7. অ্যাক্সেস দাও কানেকশনগুলোকে **ফায়ারওয়াল** দ্বারা এবং কন্ট্রোল করো **সিস্টেম ইভেন্টগুলো** যখন চাওয়া হবে।

অ্যাপ্লিকেশানটি অটোমেটিকভাবে স্টার্ট হয়ে যাবে। তোমার মেনু বারে চিহ্নটি চেক করো।

> ভুলে যেও না [অ্যাড করতে **এক্সটেনশনটি**](/install)। 
> 
> {.is-warning}

![](https://img.icons8.com/color/2x/mac-logo.png) {.align-abstopright}

## Allow apps from unidentified developers
Steps for macOS Big Sur (11.0+):
1. Right click on our installer.
2. Click open in the dropdown menu.
3. Click open in popup.

Steps for older macOS versions:
1. Open System Preferences.
2. Go to the Security & Privacy tab.
3. Click on the lock and enter your password or scan your fingerprint so you can make changes.
4. Change the setting for 'Allow apps downloaded from' to 'App Store and identified developers' from just 'App Store'.