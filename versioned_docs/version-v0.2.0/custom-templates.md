---
sidebar_position: 3
sidebar_label: Custom Templates
title: Custom Header Templates
description: Define organization-specific license headers using Go template syntax.
---

# Custom Header Templates

When the built-in formats don't fit your needs, use `format: custom` with a Go template file.

## Setup

**.licenseops.yaml:**

```yaml
license: MIT
copyright-holder: 'Acme Corp'
format: custom
header-template: 'headers/header.tmpl'
```

## Template Variables

| Variable          | Description         | Example Value   |
| ----------------- | ------------------- | --------------- |
| `{{.Year}}`       | Copyright year      | `2026`          |
| `{{.Holder}}`     | Copyright holder    | `Acme Corp`     |
| `{{.License}}`    | SPDX license ID     | `MIT`           |
| `{{.Comment}}`    | Line comment prefix | `//`, `#`, `--` |
| `{{.BlockStart}}` | Block comment open  | `/*`, `<!--`    |
| `{{.BlockEnd}}`   | Block comment close | `*/`, `-->`     |

- For line-comment languages (Go, Python, etc.): `{{.Comment}}` is set, `{{.BlockStart}}`/`{{.BlockEnd}}` are empty.
- For block-comment-only languages (CSS, HTML): `{{.BlockStart}}`/`{{.BlockEnd}}` are set, `{{.Comment}}` is empty.

## Examples

### Standard Copyright + License Reference

**headers/standard.tmpl:**

```
{{.Comment}} Copyright (c) {{.Year}} {{.Holder}}. All rights reserved.
{{.Comment}} Use of this source code is governed by a {{.License}} license
{{.Comment}} that can be found in the LICENSE file.
```

**Output (Go):**

```go
// Copyright (c) 2026 Acme Corp. All rights reserved.
// Use of this source code is governed by a MIT license
// that can be found in the LICENSE file.

package main
```

**Output (Python):**

```python
# Copyright (c) 2026 Acme Corp. All rights reserved.
# Use of this source code is governed by a MIT license
# that can be found in the LICENSE file.

def main():
    pass
```

### SPDX + Proprietary Notice

**headers/proprietary.tmpl:**

```
{{.Comment}} Copyright {{.Year}} {{.Holder}}
{{.Comment}} SPDX-License-Identifier: {{.License}}
{{.Comment}}
{{.Comment}} CONFIDENTIAL - Do not distribute without written permission.
```

**Output:**

```go
// Copyright 2026 Acme Corp
// SPDX-License-Identifier: MIT
//
// CONFIDENTIAL - Do not distribute without written permission.

package main
```

### Block Comment Template (for CSS/HTML)

For languages that only support block comments, use `{{.BlockStart}}` and `{{.BlockEnd}}`:

**headers/block.tmpl:**

```
{{if .Comment}}{{.Comment}} Copyright {{.Year}} {{.Holder}}
{{.Comment}} SPDX-License-Identifier: {{.License}}{{else}}{{.BlockStart}}
 Copyright {{.Year}} {{.Holder}}
 SPDX-License-Identifier: {{.License}}
{{.BlockEnd}}{{end}}
```

This template uses Go's `{{if}}` to switch between line and block styles automatically.

### Minimal — Year and License Only

**headers/minimal.tmpl:**

```
{{.Comment}} {{.Year}} | {{.License}}
```

**Output:**

```go
// 2026 | MIT

package main
```

## How Check Works with Custom Templates

When running `lops check` with a custom template:

1. The template is rendered with `{{.Year}}` replaced by a wildcard pattern (`\d{4}`)
2. The rendered text is converted to a regex
3. The first N lines of each file are matched against this regex
4. If the match succeeds and is followed by a blank line, the file is compliant

This means:

- Year changes don't cause false failures (any 4-digit year is accepted)
- The rest of the header must match exactly (holder, license, text)

## How Fix Works with Custom Templates

When running `lops fix`:

1. Any existing header (in any known format) is stripped first
2. The template is rendered with the configured values
3. The rendered header is prepended to the file
4. Shebangs and encoding declarations are preserved

## Limitations

:::warning
Templates using complex Go template logic (loops, range, functions) may not detect correctly during `check`. Keep templates simple — static text with variable substitutions works best.
:::

- The `{{.Comment}}` variable is empty for block-comment-only languages (CSS, HTML) — use `{{if .Comment}}` to handle both styles in a single template
- Template files must be valid Go [`text/template`](https://pkg.go.dev/text/template) syntax

## See Also

- [Header Formats](formats.md) — compare built-in formats before building a custom one
- [Supported Languages](supported-languages.md) — understand which languages use line vs. block comments
- [Configuration Guide](configuration.md) — `format: custom` and `header-template` reference
