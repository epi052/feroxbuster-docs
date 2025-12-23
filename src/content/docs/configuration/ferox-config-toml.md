---
title: Configuration File
description: Configure feroxbuster settings using a .toml file
---

## ferox-config.toml

After built-in default values are set, any values defined in a `ferox-config.toml` config file will override the built-in defaults.

`feroxbuster` searches for `ferox-config.toml` in the following locations (in the order shown):

- `/etc/feroxbuster/` (global)
- `CONFIG_DIR/feroxbuster/` (per-user)
- The same directory as the `feroxbuster` executable (per-user)
- The user's current working directory (per-target)

> `CONFIG_DIR` is defined as the following:
> - Linux: `$XDG_CONFIG_HOME` or `$HOME/.config` i.e. `/home/bob/.config`
> - MacOS: `$HOME/Library/Application Support` i.e. `/Users/bob/Library/Application Support`
> - Windows: `{FOLDERID_RoamingAppData}` i.e. `C:\Users\Bob\AppData\Roaming`

If more than one valid configuration file is found, each one overwrites the values found previously.

If no configuration file is found, nothing happens at this stage.

As an example, let's say that we prefer to use a different wordlist as our default when scanning; we can set the `wordlist` value in the config file to override the baked-in default.

Notes of interest:

- it's ok to only specify values you want to change without specifying anything else
- variable names in `ferox-config.toml` must match their command-line counterpart

```toml
# ferox-config.toml

wordlist = "/wordlists/jhaddix/all.txt"
```

A pre-made configuration file with examples of all available settings can be found in `ferox-config.toml.example`.

```toml
# Example configuration for feroxbuster
#
# If you wish to provide persistent settings to feroxbuster, rename this file to ferox-config.toml and make sure
# it resides in the same directory as the feroxbuster binary.
#
# After that, uncomment any line to override the default value provided by the binary itself.
#
# Any setting used here can be overridden by the corresponding command line option/argument
#
# wordlist = "/wordlists/seclists/Discovery/Web-Content/raft-medium-directories.txt"
# status_codes = [200, 500]
# filter_status = [301]
# threads = 1
# timeout = 5
# proxy = "http://127.0.0.1:8080"
# replay_proxy = "http://127.0.0.1:8081"
# replay_codes = [200, 302]
# verbosity = 1
# parallel = 8
# scan_limit = 6
# rate_limit = 250
# quiet = true
# silent = true
# auto_tune = true
# auto_bail = true
# json = true
# output = "/targets/ellingson_mineral_company/gibson.txt"
# debug_log = "/var/log/find-the-derp.log"
# user_agent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
# random_agent = false
# redirects = true
# insecure = true
# collect_words = true
# collect_backups = true
# collect_extensions = true
# extensions = ["php", "html"]
# dont_collect = ["png", "gif", "jpg", "jpeg"]
# methods = ["GET", "POST"]
# data = [11, 12, 13, 14, 15]
# url_denylist = ["http://dont-scan.me", "https://also-not.me"]
# any subdomain of a domain provided to scope is implicitly allowed also.
# so things like "api.other.com" and "sub.third.com" would also be considered
# in-scope given the example config below.
# scope = ["example.com", "other.com", "third.com"]
# regex_denylist = ["/deny.*"]
# no_recursion = true
# add_slash = true
# stdin = true
# dont_filter = true
# extract_links = true
# depth = 1
# limit_bars = 3
# force_recursion = true
# filter_size = [5174]
# filter_regex = ["^ignore me$"]
# filter_similar = ["https://somesite.com/soft404"]
# filter_word_count = [993]
# filter_line_count = [35, 36]
# queries = [["name","value"], ["rick", "astley"]]
# save_state = false
# time_limit = "10m"
# server_certs = ["/some/cert.pem", "/some/other/cert.pem"]
# client_cert = "/some/client/cert.pem"
# client_key = "/some/client/key.pem"
# request_file = "/some/raw/request/file"
# protocol = "http"
# scan_dir_listings = true
# unique = true
# response_size_limit = 4194304

# headers can be specified on multiple lines or as an inline table
#
# inline example
# headers = {"stuff" = "things"}
#
# multi-line example
#   note: if multi-line is used, all key/value pairs under it belong to the headers table until the next table
#         is found or the end of the file is reached
#
# If you want to use [headers], UNCOMMENT the line below
# [headers]
# stuff = "things"
# more = "headers"
```
