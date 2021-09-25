---
categories: ["installation"]
tags: ["snap", "linux"]
title: "Snap Install"
linkTitle: "Snap Install"
description: >
  Install via the feroxbuster Snap package
---

## Install using `snap`

```
sudo snap install feroxbuster
```

## Gotchas

The only gotcha here is that the snap package can only read wordlists from a few specific locations. There are a few
possible solutions, of which two are shown below.

If the wordlist is on the same partition as your home directory, it can be hard-linked into `~/snap/feroxbuster/common`

```
ln /path/to/the/wordlist ~/snap/feroxbuster/common
./feroxbuster -u http://localhost -w ~/snap/feroxbuster/common/wordlist
```

If the wordlist is on a separate partition, hard-linking won't work. You'll need to copy it into the snap directory.

```
cp /path/to/the/wordlist ~/snap/feroxbuster/common
./feroxbuster -u http://localhost -w ~/snap/feroxbuster/common/wordlist
```
