---
title: Scope
description: Added in version **2.13.0**
---

## Scope Option

The `--scope` option allows you to specify additional domains that should be considered "in-scope" during feroxbuster scans. This can help you avoid accidentally attacking endpoints or hosts that you don't have permission to test.

## Basic Usage

```bash
feroxbuster -u https://example.com --scope other-example.com example-sibling.com
```

## How Scope Works

### Default Behavior

By default, feroxbuster automatically includes the target URL's domain in the scope list. When you specify additional URLs via `--scope`, they are added to this internal scope list along with the original target.

A URL is considered **in-scope** if:
1. It belongs to the same domain as any URL in the scope list, OR  
2. It belongs to a subdomain of any domain in the scope list

So, any domain added to the scope is effectively wildcarded for subdomains, e.g. `example.com` => `example.com || *.example.com`

### Automatic Scope Population

The scope list is automatically populated with:
- The target URL from `--url` (or URLs from `--stdin`)
- Any domains/URLs you specify with `--scope`

## Scope Application

The scope checking applies to:
- **Redirect following** (when `--redirects` is enabled)  
- **Link extraction** (assuming `--dont-extract-links` is false, which is the default)
- **Recursive directory scanning**

URLs that fall outside the defined scope are automatically filtered out to prevent accidental scanning of unauthorized targets.
 
## Configuration File

You can also specify scope in your `ferox-config.toml`:

```toml
scope = ["example.com", "dev-example.com", "partner.otherdomain.com"]
```

## Examples

### Single Additional Domain
```bash
feroxbuster -u https://example.com --scope dev-example.com
```
**In-scope URLs:**
- `example.com` and all its subdomains (from target URL)
- `dev-example.com` and all its subdomains (from --scope)

### Multiple Domains
```bash
feroxbuster -u https://example.com --scope dev-example.com partner.otherdomain.com
```
**In-scope URLs:**
- `example.com` and all its subdomains
- `dev-example.com` and all its subdomains  
- `partner.otherdomain.com` and all its subdomains

### With Redirects
```bash
feroxbuster -u https://example.com --scope dev-example.com --redirects
```
Now if `example.com/login` redirects to `dev-example.com/auth/login`, feroxbuster will follow the redirect because `dev-example.com` is in scope.

## Related Options

- `--dont-scan`: Use this to exclude specific URLs/domains (deny list)
- `--redirects`: Enable redirect following (scope applies to redirect targets)
