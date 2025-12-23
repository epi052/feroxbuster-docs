---
title: Download a Release
description: Install a pre-built binary from the Releases page
---

Most OS/architecture combinations can be installed dynamically using one of the methods shown below.

## Linux (32 and 64-bit) & MacOS

```bash
curl -sL https://raw.githubusercontent.com/epi052/feroxbuster/master/install-nix.sh | bash
```

## Windows x86

```powershell
https://github.com/epi052/feroxbuster/releases/latest/download/x86-windows-feroxbuster.exe.zip
Expand-Archive .\feroxbuster.zip
.\feroxbuster\feroxbuster.exe -V
```

## Windows x86_64

```powershell
Invoke-WebRequest https://github.com/epi052/feroxbuster/releases/latest/download/x86_64-windows-feroxbuster.exe.zip -OutFile feroxbuster.zip
Expand-Archive .\feroxbuster.zip
.\feroxbuster\feroxbuster.exe -V
```

## All other releases

Releases for `armv7`, `aarch64`, and an `x86_64 .deb` can be found in the [Releases](https://github.com/epi052/feroxbuster/releases) section.
