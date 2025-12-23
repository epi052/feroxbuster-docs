---
title: Unique Responses
description: Added in version **2.12.0**
---

## Show Only Unique Responses

Version 2.12.0 introduces the `--unique` flag to automatically filter out duplicate and (very) near-duplicate responses during scanning. This feature is particularly useful when dealing with WAFs, load balancers, or applications with wildcard routing that generate many identical responses, reducing output noise and making results easier to analyze.

When `--unique` is enabled, feroxbuster uses an intelligent similarity detection algorithm (simhash) to identify and filter out responses that are substantially similar to previously seen responses.

## How It Works

The unique filtering mechanism:
- Analyzes response content using simhash fingerprinting
- Compares new responses against previously seen responses  
- Filters out responses that are highly similar (stricter than `--filter-similar-to`)
- Automatically adds similarity filters on-the-fly as new unique responses are discovered

## Use Cases

The `--unique` flag is especially beneficial when:
- **WAF Interference**: When Web Application Firewalls return identical responses for multiple blocked requests
- **Wildcard Routing**: Applications that serve the same content for non-existent paths (e.g., SPA routing)
- **Load Balancer Behavior**: When load balancers return consistent error pages
- **Parameter Fuzzing**: When multiple parameter values trigger identical responses
- **Large Wordlists**: Reducing noise when using comprehensive dictionaries

## Examples

### Basic Usage

Enable unique response filtering for a standard scan:

```
feroxbuster -u https://example.com/ --unique
```

### Combined with Status Code Filtering

Use unique filtering alongside traditional filters:

```
feroxbuster -u https://example.com/ --unique --filter-status 404,403
```


## Configuration File

The unique filtering can also be enabled via configuration file:

```toml
# ferox-config.toml
unique = true
```

## Example Output Comparison

### Without `--unique`:
```
404      GET        5l       12w      150c https://example.com/admin
404      GET        5l       12w      150c https://example.com/admins  
404      GET        5l       12w      150c https://example.com/administrator
404      GET        5l       12w      150c https://example.com/adminpanel
200      GET       25l       89w     1247c https://example.com/login
404      GET        5l       12w      150c https://example.com/manage
404      GET        5l       12w      150c https://example.com/management
```

### With `--unique`:
```
404      GET        5l       12w      150c https://example.com/admin
200      GET       25l       89w     1247c https://example.com/login
```

## Implementation Notes

- Uses the same simhash algorithm as similarity filtering but with a much stricter cutoff
- Filters are applied dynamically as new responses are encountered
- Works in conjunction with existing filtering mechanisms
- First occurrence of each unique response pattern is always shown
