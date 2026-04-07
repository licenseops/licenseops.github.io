import type {ReactNode} from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHero from '@site/src/components/HomepageHero';
import Features from '@site/src/components/Features';
import SupportedFormats from '@site/src/components/SupportedFormats';
import GetStarted from '@site/src/components/GetStarted';
import LanguageSupport from '@site/src/components/LanguageSupport';
import Community from '@site/src/components/Community';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.tagline}
      description="A fast CLI tool to check, fix, and migrate license headers across 50+ languages. Supports SPDX, REUSE, Apache/GPL boilerplates, and custom templates."
    >
      <div className={styles.homepage}>
        <HomepageHero />
        <Features />
        <SupportedFormats />
        <GetStarted />
        <LanguageSupport />
        <Community />
      </div>
    </Layout>
  );
}
