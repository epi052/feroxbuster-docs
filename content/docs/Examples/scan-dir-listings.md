---
title: "Scan Directory Listings"
weight: 27
categories: ["examples"]
tags: ["feature", "force", "directory", "listing"]
description: >
  Added in version **2.11.0**
---

## Force scans to recurse into directory listings

Version 2.11.0 allows users to force feroxbuster to scan directory listings. Prior to 2.11.0, when feroxbuster encountered a directory listing, it would simply parse the `<a>` tags, report the results, queue any additional folders found in the `<a>` tags, and then move onto its next objective.

Not scanning directory listings makes sense, generally, but web servers can be configured to both allow directory listing while also hiding files/folders from that listing. That's where `--scan-dir-listings` comes in. When `--scan-dir-listings` is used, feroxbuster will perform it's typical `<a>` tag parsing et. al., but will also perform a scan of that directory.

## Example 

```
feroxbuster -u https://some-example-site.com --scan-dir-listings
```

## Example (`--thorough`)

The `--thorough` meta-option also sets `--scan-dir-listings`

```
feroxbuster -u https://some-example-site.com --thorough
```
