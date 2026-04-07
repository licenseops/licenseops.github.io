---
sidebar_position: 2
sidebar_label: Supported Languages
title: Supported Languages
description: Complete list of 50+ languages and file types supported by LicenseOps, organized by comment style.
---

# Supported Languages

LicenseOps automatically detects the correct comment syntax based on file extension or filename.

## Line Comment `//`

| Extension             | Language                |
| --------------------- | ----------------------- |
| `.go`                 | Go                      |
| `.rs`                 | Rust                    |
| `.java`               | Java                    |
| `.js`, `.jsx`         | JavaScript              |
| `.ts`, `.tsx`         | TypeScript              |
| `.c`, `.h`            | C                       |
| `.cpp`, `.hpp`, `.cc` | C++                     |
| `.cs`                 | C#                      |
| `.swift`              | Swift                   |
| `.kt`, `.kts`         | Kotlin                  |
| `.scala`              | Scala                   |
| `.dart`               | Dart                    |
| `.proto`              | Protocol Buffers        |
| `.groovy`             | Groovy                  |
| `.zig`                | Zig                     |
| `.m`, `.mm`           | Objective-C             |
| `.v`, `.sv`           | Verilog / SystemVerilog |

**Filenames:** `Jenkinsfile`

## Line Comment `#`

| Extension                       | Language        |
| ------------------------------- | --------------- |
| `.py`, `.pyi`                   | Python          |
| `.rb`                           | Ruby            |
| `.sh`, `.bash`, `.zsh`, `.fish` | Shell           |
| `.pl`, `.pm`                    | Perl            |
| `.yaml`, `.yml`                 | YAML            |
| `.toml`                         | TOML            |
| `.dockerfile`                   | Dockerfile      |
| `.mk`                           | Makefile        |
| `.tf`, `.hcl`                   | Terraform / HCL |
| `.r`, `.R`                      | R               |
| `.ex`, `.exs`                   | Elixir          |
| `.nix`                          | Nix             |
| `.conf`                         | Config files    |
| `.cmake`                        | CMake           |
| `.ps1`, `.psm1`                 | PowerShell      |
| `.tcl`                          | Tcl             |

**Filenames:** `Dockerfile`, `Makefile`, `Rakefile`, `Gemfile`, `Vagrantfile`

## Line Comment `--`

| Extension | Language |
| --------- | -------- |
| `.hs`     | Haskell  |
| `.lua`    | Lua      |
| `.sql`    | SQL      |
| `.ada`    | Ada      |
| `.elm`    | Elm      |

## Block Comment `/* */`

| Extension | Language |
| --------- | -------- |
| `.css`    | CSS      |
| `.scss`   | SCSS     |
| `.less`   | Less     |

These languages have no line-comment syntax. Headers use multi-line block comments:

```css
/*
 Copyright 2026 Acme Corp
 SPDX-License-Identifier: Apache-2.0
*/
```

For SPDX 1-line mode:

```css
/* SPDX-License-Identifier: MIT */
```

## Block Comment `<!-- -->`

| Extension       | Language |
| --------------- | -------- |
| `.html`, `.htm` | HTML     |
| `.xml`          | XML      |
| `.svg`          | SVG      |
| `.vue`          | Vue      |

## Skipped by Default

These file types are always skipped — they either have no comment syntax or are binary. You cannot add license headers to these types:

| Category     | Extensions                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| Data         | `.json`, `.lock`, `.sum`, `.mod`, `.map`                                                               |
| Images       | `.png`, `.jpg`, `.jpeg`, `.gif`, `.ico`, `.bmp`, `.webp`, `.tiff`                                      |
| Fonts        | `.woff`, `.woff2`, `.ttf`, `.otf`, `.eot`                                                              |
| Binary       | `.wasm`, `.pdf`, `.zip`, `.tar`, `.gz`, `.bz2`, `.xz`, `.zst`, `.bin`, `.exe`, `.dll`, `.so`, `.dylib` |
| Object files | `.o`, `.a`, `.lib`                                                                                     |
| Media        | `.mp3`, `.mp4`, `.wav`, `.avi`                                                                         |
| Minified     | `.min.js`, `.min.css`                                                                                  |
| Generated    | `.pb.go`, `.patch`, `.diff`                                                                            |

## Special File Handling

### Shebang Lines (`#!/...`)

Files starting with a shebang are handled correctly — the header is inserted after the shebang:

```python
#!/usr/bin/env python3

# Copyright 2026 Acme Corp
# SPDX-License-Identifier: Apache-2.0

def main():
    pass
```

### Python Encoding Declarations

Python files with encoding declarations (`# -*- coding: utf-8 -*-`) have the header inserted after both the shebang and encoding:

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Copyright 2026 Acme Corp
# SPDX-License-Identifier: Apache-2.0

def main():
    pass
```

### Generated Files

Files containing `Code generated ... DO NOT EDIT` or `@generated` markers are automatically skipped when `skip-generated: true` (the default). This is checked in the first 30 lines of each file.

:::tip
Use `-v` (verbose) to see which files are skipped and why.
:::

## See Also

- [Header Formats](formats.md) — how headers adapt to line vs. block comment styles
- [Custom Templates](custom-templates.md) — handling both line and block comment languages in templates
- [Use Cases](use-cases.md) — multi-language project example (use case #11)
