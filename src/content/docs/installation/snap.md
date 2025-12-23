---
title: Snap Install
description: Install via the feroxbuster Snap package
---

## Install using snap

```bash
sudo snap install feroxbuster
```

## Gotchas

The snap package can only read wordlists from a few specific locations. There are a few possible solutions, of which two are shown below.

If the wordlist is on the same partition as your home directory, it can be hard-linked into `~/snap/feroxbuster/common`:

```bash
ln /path/to/the/wordlist ~/snap/feroxbuster/common
./feroxbuster -u http://localhost -w ~/snap/feroxbuster/common/wordlist
```

If the wordlist is on a separate partition, hard-linking won't work. You'll need to copy it into the snap directory:

```bash
cp /path/to/the/wordlist ~/snap/feroxbuster/common
./feroxbuster -u http://localhost -w ~/snap/feroxbuster/common/wordlist
```
