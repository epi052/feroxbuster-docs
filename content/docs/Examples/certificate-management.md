---
title: "Server and Client Certificate Management"
weight: 20
categories: ["examples"]
tags: ["feature", "certificate", "mtls", "ssl"]
description: >
  Added in version **2.10.0** by @lavafroth and @epi052
---

# Server and Client Certificate Management

Version 2.10.0 introduces three flags:

- `--server-certs`
- `--client-cert`
- `--client-key`

# When to use Certificate Management

When a server requires mutual transport layer security (mTLS) authentication,
the client upon verification of the server certificate, is required to send its
own certificate to the server. The server subsequently checks its list of trusted
CAs and verifies the client's certificate.

In such a situation, the `--client-key` flag needs to be supplied a `.pem` file
which has the PKCS #8 PEM encoded private key and the `--client-cert` flag must
be supplied a PEM encoded certificate for the client. Additional root CA
certificates may need to be supplied through `--server-certs` as a `.pem` or `.der` file
if the server uses a self-signed certificate.

For example, if the server uses a root certificate called `ca-crt.pem` and the client
is issued a certificate `client-crt.pem`and a key file `client-key.pem`, we will run:

```
feroxbuster --url https://localhost \
    --client-key client-key.pem \
    --client-cert client-crt.pem \
    --server-certs ca-crt.pem
```
