---
categories: ["installation"]
tags: ["docker", "linux", "mac", "windows"]
title: "Docker Install"
linkTitle: "Docker Install"
description: >
  Install via Docker
---

## Docker Install

> The following steps assume you have docker installed / setup

Thanks to github user **@EONRaider**, we have an official docker image pushed to the docker hub with each new release.

You can simply jump right into usage with  `sudo docker run epi052/feroxbuster ...`!

## Basic usage

```
sudo docker run --init -it epi052/feroxbuster -u http://example.com -x js,html
```

## Piping from stdin and proxying all requests through socks5 proxy

```
cat targets.txt | sudo docker run --net=host --init -i epi052/feroxbuster --stdin -x js,html --proxy socks5://127.0.0.1:9050
```

## Mount a volume to pass in `ferox-config.toml`

You've got some options available if you want to pass in a config file.  [`ferox-buster.toml`](docs/configuration/ferox-config-toml/) can
live in multiple locations and still be valid, so it's up to you how you'd like to pass it in. Below are a few valid
examples:

```
sudo docker run --init -v $(pwd)/ferox-config.toml:/etc/feroxbuster/ferox-config.toml -it epi052/feroxbuster -u http://example.com
```

```
sudo docker run --init -v ~/.config/feroxbuster:/root/.config/feroxbuster -it epi052/feroxbuster -u http://example.com
```

Note: If you are on a SELinux enforced system, you will need to pass the `:Z` attribute also.

```
docker run --init -v (pwd)/ferox-config.toml:/etc/feroxbuster/ferox-config.toml:Z -it epi052/feroxbuster -u http://example.com
```

## Define an alias for simplicity

```
alias feroxbuster="sudo docker run --init -v ~/.config/feroxbuster:/root/.config/feroxbuster -i epi052/feroxbuster"
```
