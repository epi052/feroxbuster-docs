---
title: "Deny List"
weight: 18
categories: ["examples"]
tags: ["feature", "deny", "block"]
description: >
  Added in version **2.3.0**
---

## Prevent Specific Domain/Directory Scans

{{% alert title="Heads up" color="warning" %}}
This action is taken **BEFORE** a request is sent to the target, which differs from the filter-* options that are applied to responses
{{% /alert %}}


Version 2.3.0 introduces the `--dont-scan` option. The values passed to `--dont-scan` act as a deny-list.  The values 
can be an entire domain (`http://some.domain`), a specific folder (`http://some.domain/js`), or a specific file 
(`http://some.domain/some-application/stupid-page.php`)  If a folder/domain is used any sub-folder/sub-file of the 
url passed to `--dont-scan` will be **blocked before it can be requested**.

## Example

Given the command 

```
./feroxbuster -u http://some.domain --dont-scan http://some.domain/js
```

`http://some.domain` will be scanned recursively, but any url path that begins with `/js/` will not be requested at all.

## Denying a Parent Directory

A caveat to the sub-folder/sub-file rule is when the value passed to `--dont-scan` is a parent of the scan you want to 
perform. When denying at a hierarchical level higher than your scan, only sub-files/sub-folders of your `-u|--stdin` 
value(s) will be processed.

```
./feroxbuster -u http://some.domain/some-application --dont-scan http://some.domain/
```

In the command above, only `http://some.domain/some-application` and children of that directory found via recursion will
be scanned. Anything *outside* of `/some-application` will not be scanned.
