---
title: Parallel Scans
description: Added in version **2.2.0**
---

## Run Scans in Parallel

Version 2.2.0 introduces the `--parallel` option.  If you're one of those people who use `feroxbuster` to scan 100s of hosts at a time, this is the option for you! `--parallel` spawns a child process per target passed in over stdin (recursive directories are still async within each child).

The number of parallel scans is limited to whatever you pass to `--parallel`. When one child finishes its scan, the next child will be spawned.  

## Output 

Unfortunately, using `--parallel` limits terminal output such that only discovered URLs are shown. No amount of `-v`'s will help you here. I imagine this isn't too big of a deal, as folks that need `--parallel` probably aren't sitting there watching the output... 🙃

## Example 
```
cat large-target-list | ./feroxbuster --stdin --parallel 10 --extract-links --auto-bail
```

Resulting Process List (illustrative):
```
feroxbuster --stdin --parallel 10
 \_ feroxbuster --silent --extract-links --auto-bail -u https://target-one
 \_ feroxbuster --silent --extract-links --auto-bail -u https://target-two
 \_ feroxbuster --silent --extract-links --auto-bail -u https://target-three
 \_ ...
 \_ feroxbuster --silent --extract-links --auto-bail -u https://target-ten
```

## Logging Parallel Scans 

As of `v2.3.2`, logging while using `--parallel` uses the value of `-o`|`--output` as a seed to create a directory named `OUTPUT_VALUE-TIMESTAMP.logs/`. Within the directory, an individual log file is created for each target passed over stdin.

### Example 
```
cat large-target-list | ./feroxbuster --stdin --parallel 10 --output super-cool-mega-scan
```

Resulting directory structure (illustrative):
```
super-cool-mega-scan-1627865696.logs/
├── ferox-https_target_one_com-1627865696.log
├── ...
└── ferox-https_target_two_net-1627865696.log
```
