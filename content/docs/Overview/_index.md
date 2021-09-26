---
title: "📖 Overview"
linkTitle: "📖 Overview"
weight: 1
description: >
---

## 😕 What the heck is a ferox anyway?

Ferox is short for Ferric Oxide. Ferric Oxide, simply put, is rust. The name rustbuster was taken, so I decided on a
variation. 🤷

## 🤔 What's it do tho?

`feroxbuster` is a tool designed to perform [Forced Browsing](https://owasp.org/www-community/attacks/Forced_browsing).

Forced browsing is an attack where the aim is to enumerate and access resources that are not referenced by the web
application, but are still accessible by an attacker.

`feroxbuster` uses brute force combined with a wordlist to search for unlinked content in target directories. These
resources may store sensitive information about web applications and operational systems, such as source code,
credentials, internal network addressing, etc...

This attack is also known as Predictable Resource Location, File Enumeration, Directory Enumeration, and Resource
Enumeration.

## 🏁 I'm in a hurry, how about a short demo? 

I got you.

![demo](demo.gif)

## 🚀 Where to next?

* [Installation](../installation/): Make with the scanning already
* [Configuration](../configuration/): Learn about the different tweaks you can make to your scans
* [Interpret Results](../configuration/): Learn how to interpret the results displayed by feroxbuster
* [Examples](../examples/): See examples and demos of feroxbuster's available features
* [Frequently Asked Questions](../faq/): Get answers to common questions and issues
* [Compare with Similar Tools](../compare/): Feature set comparison of similar scanning tools