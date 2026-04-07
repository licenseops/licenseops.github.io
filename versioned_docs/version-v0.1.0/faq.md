---
sidebar_position: 10
sidebar_label: FAQ
title: FAQ & Troubleshooting
description: Common questions and troubleshooting tips for LicenseOps.
---

# FAQ & Troubleshooting

## Common Questions

### What's the difference between `check` and `fix`?

- **`check`** reads files and reports which ones are missing or have incorrect headers. It never modifies files. Exit code 1 if any file is non-compliant.
- **`fix`** reads files and adds or replaces headers in-place. Use `--dry-run` to preview changes without writing.

### Does `fix` overwrite existing headers?

Yes. If a file already has a header in any recognized format (SPDX, REUSE, Apache, GPL), `fix` strips it and inserts the new one. This is how format migration works.

:::warning
If your existing header contains custom text beyond the standard format (e.g. additional notices), that text will be removed during `fix`. Use `--dry-run` first to verify.
:::

### Can I use `lops` without a config file?

Yes. Pass everything via CLI flags:

```bash
lops check -l MIT -o "Your Name" .
```

If `.licenseops.yaml` doesn't exist, `lops` silently falls back to defaults — no error.

### Does `lops` modify files I haven't staged in git?

`lops fix` modifies files on disk regardless of git status. It respects `.gitignore` patterns (files ignored by git won't be scanned), but it doesn't look at `git status`. Run `lops fix --dry-run` first to see what would change.

### How does year matching work during `check`?

During `check`, the year in headers is matched with a wildcard — any 4-digit year is accepted. This means files with `Copyright 2024` will pass `check` even if your config says `year: 2026`. The `fix` command always writes the configured year.

### Can I use SPDX expressions like `Apache-2.0 OR MIT`?

Yes. The `license` field accepts full SPDX expressions with `AND`, `OR`, `WITH` operators, and parentheses:

```yaml
license: "Apache-2.0 OR MIT"
license: "GPL-3.0-only WITH Classpath-exception-2.0"
license: "Apache-2.0 AND (MIT OR BSD-2-Clause)"
```

### What happens to files with no comment syntax (JSON, images)?

They are automatically skipped. LicenseOps only processes files where it knows the comment syntax. See [Supported Languages](supported-languages.md) for the full list.

### How are shebangs handled?

LicenseOps preserves shebang lines (`#!/...`) at the top of files. The license header is inserted after the shebang (and after Python encoding declarations, if present).

## Common Errors

### `Error: license is required`

You need to specify a license either in `.licenseops.yaml` or via the `-l` flag:

```bash
lops check -l MIT .
```

### `Error: copyright-holder is required for 'reuse' format`

The `reuse`, `apache-long`, and `gpl-long` formats require a copyright holder. Add it to your config or use `-o`:

```bash
lops check -f reuse -l MIT -o "Your Name" .
```

### `Error: 'apache-long' format requires license: Apache-2.0`

The `apache-long` format only works with `Apache-2.0`. If you're using a different license, use `spdx` or `reuse` format instead.

### Files are being skipped that I want to check

Check if they match a default exclude pattern (`vendor/**`, `node_modules/**`, `.git/**`, `third_party/**`). Also check:

- Is the file a binary or data type? (`.json`, `.png`, etc. are always skipped)
- Does the file contain `DO NOT EDIT` or `@generated` markers? (Skipped when `skip-generated: true`)
- Is the file matched by `.gitignore`? (Skipped when `gitignore: true`)

Use `-v` (verbose) to see why specific files are skipped.

### Headers are added but in the wrong comment style

LicenseOps detects comment style by file extension. If a file has an unusual extension, it may not be recognized. Check [Supported Languages](supported-languages.md) for the full extension mapping.

## Exit Codes

| Code | Meaning                                               | Action                         |
| ---- | ----------------------------------------------------- | ------------------------------ |
| 0    | All files compliant (check) or all fixed (fix)        | Nothing to do                  |
| 1    | Non-compliant files found                             | Run `lops fix` or fix manually |
| 2    | Runtime error (bad config, IO error, invalid license) | Check the error message        |
