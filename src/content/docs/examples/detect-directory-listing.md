---
title: Detect Directory Listing
description: Added in version **2.5.0** by @godylockz; revised in **2.6.0**; enhanced in **2.13.1**
---

## Detect Directory Listing

Version 2.5.0 introduces the ability to detect when a server has directory listing enabled. When such a directory is found, `feroxbuster` will either report, or report and scan, depending on whether or not `--extract-links` was used.

## Detection Methods

### Standard Detection (v2.5.0+)

`feroxbuster` can detect directory listings from common web servers by analyzing the page title:

- **Apache/Python/Tomcat**: `Index of /` or `Directory Listing for /`
- **ASP.NET**: `Directory Listing -- /`

### Enhanced Heuristic Detection (v2.13.1+)

For custom or non-standard directory listings that don't use recognizable titles, `feroxbuster` now employs advanced heuristics. It looks for multiple signals that indicate directory listing behavior:

1. **Parent Directory Links**: Links with `href="../"` or `href=".."`, or text containing "parent directory", "to parent", or "up to parent"
2. **Directory Table Headers**: Table headers indicating file listings, such as:
   - Name-related: "File Name", "Filename", "Name"
   - Size-related: "Size", "File Size"
   - Time-related: "Date", "Last Modified", "Modified", "Last Mod"
3. **Sorting Query Parameters**: Links containing auto-index sorting parameters like:
   - `?C=N` (sort by name)
   - `?C=S` (sort by size)
   - `?C=M` (sort by modified)
   - `?C=D` (sort by date)
4. **High Link Density**: Multiple links (≥3) pointing to files or directories

**Detection Threshold**: At least **2 of these 4 signals** must be present to classify a page as a custom directory listing. This threshold helps avoid false positives on regular web pages while still catching non-standard directory listings.

This enhanced detection can identify directory listings from custom implementations, Content Management Systems, or web servers with non-standard configurations.

## Examples

### Without `--extract-links`

When `--extract-links` is **not** used, directory listing is simply reported. No further actions are taken.

```
feroxbuster -u https://some-example-site.com
```

![dir-list-no-tack-e](/feroxbuster-docs/images/examples/dir-list-no-tack-e.png)

### With `--extract-links`

When `--extract-links` is used, each link in the response is extracted and requested.

```
feroxbuster -u https://some-example-site.com --extract-links
```

![dir-list-with-tack-e](/feroxbuster-docs/images/examples/dir-list-with-tack-e.png)