import type {ReactNode} from 'react';
import React from 'react';
import SectionHeader from '@site/src/components/common/SectionHeader';
import styles from './styles.module.css';

interface Format {
  title: string;
  configValue: string;
  example: string;
  description: string;
}

const formats: Format[] = [
  {
    title: 'SPDX (2-line)',
    configValue: 'spdx',
    example: '// Copyright 2026 Acme Corp\n// SPDX-License-Identifier: Apache-2.0',
    description: 'Default choice. Clean, machine-readable, and widely recognized by compliance tools.',
  },
  {
    title: 'SPDX (1-line)',
    configValue: 'spdx (no owner)',
    example: '// SPDX-License-Identifier: MIT',
    description: 'Minimal one-line header without per-file copyright. Used by the Linux kernel.',
  },
  {
    title: 'REUSE',
    configValue: 'reuse',
    example: '// SPDX-FileCopyrightText: 2026 Acme Corp\n// SPDX-License-Identifier: Apache-2.0',
    description: 'FSFE REUSE specification compliant. Machine-readable copyright with standard tags.',
  },
  {
    title: 'Apache 2.0 Boilerplate',
    configValue: 'apache-long',
    example: '// Copyright 2026 Acme Corp\n//\n// Licensed under the Apache License, Version 2.0\n// ...(full 14-line boilerplate)',
    description: 'Full Apache Foundation boilerplate. Legally self-contained in every file.',
  },
  {
    title: 'GPL/LGPL/AGPL',
    configValue: 'gpl-long',
    example: '// Copyright 2026 Acme Corp\n//\n// This program is free software...\n// ...(full GNU boilerplate)',
    description: 'FSF-recommended full boilerplate. Auto-selects GPL, LGPL, or AGPL wording.',
  },
  {
    title: 'Custom Template',
    configValue: 'custom',
    example: '// Copyright (c) {{.Year}} {{.Holder}}\n// Licensed under {{.License}}',
    description: 'User-defined Go templates for organization-specific headers.',
  },
];

function FormatCard({format}: {format: Format}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{format.title}</h3>
        <code className={styles.configBadge}>{format.configValue}</code>
      </div>
      <pre className={styles.codeBlock}>
        <code>{format.example}</code>
      </pre>
      <p className={styles.cardDescription}>{format.description}</p>
    </div>
  );
}

export default function SupportedFormats(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="Supported Header Formats">
          <p>
            Choose from 5 built-in formats or define your own with custom templates.
            Migrate between formats automatically.
          </p>
        </SectionHeader>

        <div className={styles.grid}>
          {formats.map((format, index) => (
            <FormatCard key={index} format={format} />
          ))}
        </div>
      </div>
    </section>
  );
}
