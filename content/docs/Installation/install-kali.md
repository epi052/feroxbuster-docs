---
categories: ["installation"]
tags: ["kali", "linux"]
title: "Kali Install"
linkTitle: "Kali Install"
description: >
  Install on Kali Linux
---

## Kali Install

🥳 `feroxbuster` was recently added to the official Kali Linux repos 🥳 

If you're using kali, this is the preferred install method. Installing from the repos adds a [**ferox-config.toml**](../..//configuration/ferox-config-toml/) in `/etc/feroxbuster/`, adds command completion for bash, fish, and zsh, includes a man page entry, and installs `feroxbuster` itself. 

```
sudo apt update && sudo apt install -y feroxbuster
```
