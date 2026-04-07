import type {ReactNode} from 'react';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Button from '@site/src/components/common/Button';
import styles from './styles.module.css';

export default function HomepageHero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className="container">
        <ThemedImage
          alt="LicenseOps Logo"
          className={styles.heroLogo}
          sources={{
            light: useBaseUrl('/img/licenseops-logo.svg'),
            dark: useBaseUrl('/img/licenseops-logo-dark.svg'),
          }}
        />

        <h1 className={styles.heroTitle}>LicenseOps</h1>

        <h2 className={styles.heroTagline}>
          License headers, automated across 50+ languages
        </h2>
        <h3 className={styles.heroSubtitle}>
          Check, fix, and migrate license headers in CI, pre-commit hooks, or locally
        </h3>

        <div className={styles.heroCode}>
          <code>$ lops check -l Apache-2.0 -o "Acme Corp" .</code>
        </div>

        <div className={styles.heroButtons}>
          <Button to={useBaseUrl('/docs/getting-started/')}>
            Get Started
          </Button>
          <Button to={useBaseUrl('/docs/use-cases/')}>
            Use Cases
          </Button>
          <Button to="https://github.com/chalindukodikara/licenseops" className={styles.githubStarButton}>
            <svg className={styles.starIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            Star on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
