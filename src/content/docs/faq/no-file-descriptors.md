---
title: No file descriptors available
description: Run `ulimit -n 4096`
---

## No file descriptors available

Why do I get a bunch of `No file descriptors available (os error 24)` errors?

---

There are a few potential causes of this error. The simplest is that your operating system sets an open file limit that
is aggressively low. Through personal testing, I've found that `4096` is a reasonable open file limit (this will vary
based on your exact setup).

There are quite a few options to solve this particular problem, of which a handful are shown below.

### Increase the Number of Open Files

We'll start by increasing the number of open files the OS allows. On my Kali install, the default was `1024`, and I know
some MacOS installs use `256` 😕.

#### Edit `/etc/security/limits.conf`

One option to up the limit is to edit `/etc/security/limits.conf` so that it includes the two lines below.

- `*` represents all users
- `hard` and `soft` indicate the hard and soft limits for the OS
- `nofile` is the number of open files option.

```
/etc/security/limits.conf
-------------------------
...
*        soft nofile 4096
*        hard nofile 8192
...
```

#### Use `ulimit` directly

A faster option, that is **not** persistent, is to simply use the `ulimit` command to change the setting.

```
ulimit -n 4096
```

### Additional Tweaks (may not be needed)

If you still find yourself hitting the file limit with the above changes, there are a few additional tweaks that may
help.

> This section was shamelessly stolen from this [stackoverflow answer](https://stackoverflow.com/a/3923785). More information is included in that post and is recommended reading if you end up needing to use this section.

✨ Special thanks to HTB user [@sparkla](https://www.hackthebox.eu/home/users/profile/221599) for their help with
identifying these additional tweaks ✨

#### Increase the ephemeral port range, and decrease the tcp_fin_timeout.

The ephermal port range defines the maximum number of outbound sockets a host can create from a particular I.P. address.
The fin_timeout defines the minimum time these sockets will stay in TIME_WAIT state (unusable after being used once).
Usual system defaults are

- `net.ipv4.ip_local_port_range = 32768   61000`
- `net.ipv4.tcp_fin_timeout = 60`

This basically means your system cannot consistently guarantee more than `(61000 - 32768) / 60 = 470` sockets per
second.

```
sudo sysctl net.ipv4.ip_local_port_range="15000 61000"
sudo sysctl net.ipv4.tcp_fin_timeout=30
```

#### Allow socket reuse while in a `TIME_WAIT` status

This allows fast cycling of sockets in time_wait state and re-using them. Make sure to read
post [Coping with the TCP TIME-WAIT](https://vincent.bernat.ch/en/blog/2014-tcp-time-wait-state-linux) from Vincent
Bernat to understand the implications.

```
sudo sysctl net.ipv4.tcp_tw_reuse=1 
```
