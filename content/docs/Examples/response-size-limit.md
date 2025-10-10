---
title: "Response Size Limit"
weight: 30
categories: ["examples"]
tags: ["feature", "limit", "memory", "size", "performance"]
description: >
  Added in version **2.12.0**
---

## Limit Response Body Size

Version 2.12.0 introduces the `--response-size-limit` flag to prevent out-of-memory errors when scanning targets that return very large response bodies. This feature is particularly useful when encountering servers that serve large files such as backups, database dumps, or media files that could exhaust system memory.

By default, feroxbuster sets a 4MB (4,194,304 bytes) limit on response body reading, which provides protection against unexpected memory issues while still allowing most legitimate web content to be processed fully.

## How It Works

The response size limiting mechanism:
- Reads only the first N bytes of each HTTP response body
- Prevents memory exhaustion from unexpectedly large responses
- Allows normal processing for responses under the size limit
- Works seamlessly with all other feroxbuster features (filtering, extraction, etc.)
- Does not affect HTTP status codes, headers, or other response metadata

## Use Cases

The `--response-size-limit` flag is especially beneficial when:
- **Large File Exposure**: Servers accidentally expose backup files, database dumps, or archives
- **Memory-Constrained Environments**: Running feroxbuster on systems with limited RAM
- **Automated Scanning**: Preventing scans from failing due to unexpected large responses
- **CI/CD Pipelines**: Ensuring consistent memory usage in automated security testing
- **Shared Infrastructure**: Preventing resource exhaustion on shared systems

## Examples

### Basic Usage

Set a custom response size limit:

```
feroxbuster -u https://example.com/ --response-size-limit 1048576
```
*Limits response reading to 1MB (1,048,576 bytes)*

### Conservative Memory Usage

Use a smaller limit for memory-constrained environments:

```
feroxbuster -u https://example.com/ --response-size-limit 512000
```
*Limits response reading to 500KB*

### Large Content Scanning

Increase the limit when expecting larger legitimate responses:

```
feroxbuster -u https://example.com/ --response-size-limit 10485760
```
*Limits response reading to 10MB*

### Combined with Other Limits

Use alongside other resource management options:

```
feroxbuster -u https://example.com/ --response-size-limit 2097152 --rate-limit 50 --threads 10
```
*Combines 2MB response limit with rate limiting and thread control*

## Configuration File

The response size limit can also be configured via the configuration file:

```toml
# ferox-config.toml
response_size_limit = 2097152  # 2MB in bytes
```

## Size Calculations

Common size values for reference:

| Size | Bytes | Use Case |
|------|-------|----------|
| 512KB | 524,288 | Conservative, minimal memory usage |
| 1MB | 1,048,576 | Light scanning, embedded systems |
| 4MB | 4,194,304 | **Default** - Balanced protection and functionality |
| 8MB | 8,388,608 | Large page content, rich applications |
| 16MB | 16,777,216 | Very large responses, media content |

## Banner Display

When the response size limit differs from the default (4MB), it will be displayed in the scan banner:

```
───────────────────────────────────────────────────────────────────────────
 🎯  Target Url            │ https://example.com/
 🚀  Threads               │ 50
 📖  Wordlist              │ /wordlists/common.txt
 📏  Response Size Limit   │ 2097152 bytes
───────────────────────────────────────────────────────────────────────────
```

## Behavior with Large Responses

When a response exceeds the size limit:
- ✅ Status code, headers, and metadata are fully processed
- ✅ First N bytes of content are available for filtering and extraction
- ✅ Response is still reported and logged normally
- ⚠️ Content beyond the limit is truncated and not processed
- ⚠️ Word/line counts may be lower than actual values for truncated responses

## Example Output

Response that exceeds the size limit:
```
200      GET       45l      123w     4194304c https://example.com/backup.sql  (truncated to size limit)
```
*Note: The content length (4MB) shows the bytes actually read and processed, not the full response size*

## Performance Considerations

- **Memory Protection**: Prevents unexpected OOM errors from large responses
- **Scan Reliability**: Ensures scans complete even when encountering large files
- **Processing Speed**: May slightly improve performance by avoiding large content processing

## Compatibility

The response size limit:
- Works with all scan modes (recursive, single-target, etc.)
- Compatible with all filtering options
- Functions normally with extraction and link following
- Integrates with similarity and unique response filtering
- Maintains full compatibility with output formats

## Implementation Notes

- Uses chunked reading to implement the size limit efficiently
- Limit applies only to response body content, not headers or metadata
- Very large limits may still cause memory issues on constrained systems
