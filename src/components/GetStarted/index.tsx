import type {ReactNode} from 'react';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SectionHeader from '@site/src/components/common/SectionHeader';
import Button from '@site/src/components/common/Button';
import styles from './styles.module.css';

interface InstallOption {
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

const installOptions: InstallOption[] = [
  {
    title: 'Binary / Go Install',
    subtitle: 'Install the lops binary and start checking headers.',
    features: [
      'Download from GitHub Releases or go install.',
      'Create a .licenseops.yaml config or use CLI flags.',
      'Run lops check to validate, lops fix to auto-add headers.',
    ],
    buttonText: 'Installation Guide',
    buttonLink: '/docs/',
  },
  {
    title: 'Docker',
    subtitle: 'Run lops in a container with zero setup.',
    features: [
      'No local installation required.',
      'Mount your project and run check or fix.',
      'Ideal for CI pipelines and reproducible environments.',
    ],
    buttonText: 'CI Integration Guide',
    buttonLink: '/docs/ci-integration/',
  },
];

function InstallCard({option}: {option: InstallOption}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{option.title}</h3>
        <p className={styles.cardSubtitle}>{option.subtitle}</p>

        <ul className={styles.featuresList}>
          {option.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <Button to={useBaseUrl(option.buttonLink)}>
        {option.buttonText}
      </Button>
    </div>
  );
}

export default function GetStarted(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="Get Started with LicenseOps">
          <p>
            Install in seconds, configure once, and enforce license compliance everywhere.
          </p>
        </SectionHeader>

        <div className={styles.grid}>
          {installOptions.map((option, index) => (
            <InstallCard key={index} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}
