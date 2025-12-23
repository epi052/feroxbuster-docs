---
title: Kali Install
description: Install on Kali Linux
---

`feroxbuster` is available in the official Kali Linux repos!

If you're using Kali, this is the preferred install method. Installing from the repos adds a [ferox-config.toml](/feroxbuster-docs/configuration/ferox-config-toml/) in `/etc/feroxbuster/`, adds command completion for bash, fish, and zsh, includes a man page entry, and installs `feroxbuster` itself.

```bash
sudo apt update && sudo apt install -y feroxbuster
```
