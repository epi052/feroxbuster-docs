---
title: "Dynamic Collection Settings"
weight: 23
categories: ["examples"]
tags: ["feature", "dynamic", "collect", "extract"]
description: >
  Added in version **2.6.0**
---

## Dynamic Collection Settings

Version 2.6.0 added a whole category of features named **Dynamic Collection Settings**. The general premise of each
feature is that additional requests are made based on the target site's observed state. 

## Collect Backups

Using `--collect-backups` means that for every file found during a scan, `feroxbuster` sends additional queries for the 
following extensions:

- `~`
- `.bak`
- `.bak2`
- `.old`
- `.1`
- `.swp`

Any url that wasn't filtered out via status code, size, similarity, etc... is considered _found_.

## Collect Extensions

Using `--collect-extensions` means that any found url that has an extension will be added as an extension to try for
all future requests.  

There is a (large) [default list](https://github.com/epi052/feroxbuster/blob/main/src/lib.rs#L60) of extensions that
are ignored by `--collect-extensions`. If `--dont-collect` is used, the default list isn't used, and whatever values
are passed to `--dont-collect` are used instead. 

## Collect Words

Using `--collect-words` means that each valid response's html is parsed, and words considered **important** are added
to the wordlist to be requested.

A word's importance is determined via a Natural Language Processing model and is considered against the entire corpus
of parsed html. 

## Examples

### Collect Backups

```
feroxbuster -u https://some-example-site.com --collect-backups
```

Assuming a found file of:

`200      GET      127l      292w     4161c https://some-example-site.com/index.php`

The following **additional** requests are made to `some-example-site.com`:
- `index.php~` (append extension)
- `index.php.bak`
- `index.php.bak2`
- `index.php.old`
- `index.php.1`
- `index.bak` - (replace original extension)
- `.index.php.swp` - (vim swap, prefix `.` and append `.swp`)

### Collect Extensions

> most useful with `--extract-links`; may cause number of expected requests to explode

```
feroxbuster -u https://some-example-site.com --collect-extensions
```

Let's say our wordlist contains five entries:
- `index.php`
- `stuff`
- `things`
- `mostuff`
- `mothings`

Assuming a found file of:

`200      GET      127l      292w     4161c https://some-example-site.com/index.php`

`--collect-extensions` would effectively add `.php` to feroxbuster's internal state, as though `.php` were passed via 
`--extensions|-x`. The result would be the following requests.

- `stuff`
- `stuff.php`
- `things`
- `things.php`
- `mostuff`
- `mostuff.php`
- `mothings`
- `mothings.php`

There are caveats to the requests that will be made, mostly due to timing of finding the extension vs. requests already
in-flight, but conceptually, the above is true.

### Collect Words

```
feroxbuster -u https://some-example-site.com --collect-words
```

Assume four pages were found:

- `https://some-example-site.com/doc1`
- `https://some-example-site.com/doc2`
- `https://some-example-site.com/doc3`
- `https://some-example-site.com/doc4`

And their contents were as follows:

- `doc1` - `Air quality in the sunny island improved gradually throughout Wednesday.`
- `doc2` - `Air quality in Singapore on Wednesday continued to get worse as haze hit the island.`
- `doc3` - `The air quality in Singapore is monitored through a network of air monitoring stations located in different parts of the island`
- `doc4` - `The air quality in Singapore got worse on Wednesday.`

The following endpoints would be requested, in addition to whatever was in the normal wordlist.

- `/gradually`
- `/network`
- `/hit`
- `/located`
- `/continued`
- `/island`
- `/worse`
- `/monitored`
- `/monitoring`
- `/haze`
- `/different`
- `/stations`
- `/sunny`
- `/singapore`
- `/improved`
- `/parts`
- `/wednesday`

