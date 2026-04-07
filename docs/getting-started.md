---
sidebar_position: 2
sidebar_label: Getting Started
title: Getting Started
description: Install LicenseOps and add license headers to your project in under 3 minutes.
---

# Getting Started

Get from zero to compliant license headers in 3 minutes.

## 1. Install

Pick one:

```bash
# Binary (Linux/macOS)
curl -sSL https://github.com/chalindukodikara/licenseops/releases/latest/download/lops_Linux_x86_64.tar.gz | tar xz
sudo mv lops /usr/local/bin/

# Go install
go install github.com/chalindukodikara/licenseops/cmd/lops@latest

# Docker (no install needed)
docker run --rm -v "$PWD":/src -w /src ghcr.io/chalindukodikara/licenseops check
```

Verify it works:

```bash
lops --help
```

## 2. Check Your Project

Run a one-liner to see which files are missing headers:

```bash
lops check -l Apache-2.0 -o "Your Name" .
```

- `-l` — the SPDX license identifier
- `-o` — the copyright holder
- `.` — scan the current directory

:::tip
Use `-v` (verbose) to see every file's status, not just failures.
:::

If all files are compliant, you'll see exit code 0. If any are missing headers, you'll see which ones and exit code 1.

## 3. Fix Headers Automatically

Add headers to all files that need them:

```bash
lops fix -l Apache-2.0 -o "Your Name" .
```

:::note
`fix` preserves shebangs (`#!/...`), Python encoding declarations, and skips generated files and binaries automatically.
:::

## 4. Create a Config File

For team-wide consistency, commit a `.licenseops.yaml` to your repo:

```yaml
license: Apache-2.0
copyright-holder: 'Your Name or Organization'

exclude:
  - 'vendor/**'
  - 'node_modules/**'
  - '**/dist/**'
```

Now you can run without flags:

```bash
lops check
lops fix
```

## 5. Add to CI

Add a license check to your GitHub Actions pipeline:

```yaml
- name: Install lops
  run: |
    curl -sSL https://github.com/chalindukodikara/licenseops/releases/latest/download/licenser_Linux_x86_64.tar.gz | tar xz
    sudo mv lops /usr/local/bin/

- name: Check license headers
  run: lops check
```

See the [CI Integration Guide](ci-integration.md) for GitLab CI, pre-commit hooks, Docker, and auto-fix workflows.

## Choose Your Format

Not sure which header format to use? Here's a quick decision guide:

| If you want...                                | Use format       |
| --------------------------------------------- | ---------------- |
| Short, machine-readable headers (recommended) | `spdx` (default) |
| FSFE REUSE compliance                         | `reuse`          |
| Full Apache boilerplate in every file         | `apache-long`    |
| Full GPL/LGPL/AGPL boilerplate                | `gpl-long`       |
| Organization-specific custom headers          | `custom`         |

See [Header Format Comparison](formats.md) for side-by-side examples.

## Next Steps

- [Configuration Guide](configuration.md) — full config file reference, CLI flags, exclude patterns
- [Use Cases](use-cases.md) — 12 real-world scenarios (Go, Python, Rust, JS/TS, multi-language, and more)
- [Supported Languages](supported-languages.md) — all 50+ file types
- [Custom Templates](custom-templates.md) — define your own header format
