---
title: Android/Termux Install
description: Build feroxbuster from source on Android using Termux
---

This guide covers building `feroxbuster` from source on Android using Termux, particularly for 32-bit ARM devices (armeabi-v7a) where prebuilt binaries are not available.

> Tested on armeabi-v7a (ARM32) architecture using Rust from the Termux repository

## Install Dependencies

Update Termux packages and install required build dependencies:

```bash
pkg update && pkg upgrade -y
pkg install git clang make cmake pkg-config python rust -y
```

## Clone and Build

Clone the repository and build from source:

```bash
git clone https://github.com/epi052/feroxbuster.git
cd feroxbuster
cargo build --release
```

## Install

Copy the compiled binary to your PATH:

```bash
cp target/release/feroxbuster $PREFIX/bin/
chmod +x $PREFIX/bin/feroxbuster
```

## Verify Installation

```bash
feroxbuster --version
```

---

Contributed by [@pg9051](https://github.com/pg9051)
