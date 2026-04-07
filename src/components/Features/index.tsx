import type {ReactNode} from 'react';
import React from 'react';
import SectionHeader from '@site/src/components/common/SectionHeader';
import styles from './styles.module.css';

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: 'Check & Fix',
    description:
      'Validate that all source files have compliant license headers, or auto-add and replace them in-place with a single command.',
  },
  {
    title: 'Multiple formats',
    description:
      'SPDX short (1-line and 2-line), REUSE, Apache 2.0 boilerplate, GPL/LGPL/AGPL boilerplate, and custom Go templates.',
  },
  {
    title: '50+ languages',
    description:
      'Correct comment syntax for Go, Rust, Python, JavaScript/TypeScript, Java, C/C++, Shell, YAML, CSS, HTML, SQL, and many more.',
  },
  {
    title: 'SPDX expressions',
    description:
      'Full SPDX expression support including AND, OR, WITH operators. Dual-license with "Apache-2.0 OR MIT" or add exceptions.',
  },
  {
    title: 'Smart file handling',
    description:
      'Preserves shebangs and Python encoding declarations. Skips generated files and binaries automatically.',
  },
  {
    title: 'Gitignore-aware',
    description:
      'Respects .gitignore patterns automatically. No need to duplicate exclusion rules in your license config.',
  },
  {
    title: 'Cross-format migration',
    description:
      'Switch from one header format to another without manual cleanup. Old headers are fully detected, stripped, and replaced.',
  },
  {
    title: 'CI-ready',
    description:
      'Clean exit codes, --dry-run mode, Docker image, and GitHub Actions compatible. Fail fast in your pipeline.',
  },
  {
    title: 'Zero config viable',
    description:
      'Works with just CLI flags — no config file needed. Or commit .licenseops.yaml for team-wide consistency.',
  },
];

export default function Features(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="What is LicenseOps?">
          <p>
            LicenseOps (<code>lops</code>) is a fast CLI tool for managing license headers
            across your entire codebase. Built for automation — CI pipelines,
            pre-commit hooks, and local development workflows.
          </p>
        </SectionHeader>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
