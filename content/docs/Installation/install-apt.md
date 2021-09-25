---
categories: ["installation"]
tags: ["apt", "linux", "pre-built"]
title: "apt Install"
linkTitle: "apt Install"
description: >
  Install via `apt`
---

## apt Install

Download `feroxbuster_amd64.deb` from the [Releases](https://github.com/epi052/feroxbuster/releases) section. After
that, use your favorite package manager to install the `.deb`.

```
curl -sLO https://github.com/epi052/feroxbuster/releases/latest/download/feroxbuster_amd64.deb.zip
unzip feroxbuster_amd64.deb.zip
sudo apt install ./feroxbuster_*_amd64.deb
```
