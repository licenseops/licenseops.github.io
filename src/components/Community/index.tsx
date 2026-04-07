import type {ReactNode} from 'react';
import React from 'react';
import SectionHeader from '@site/src/components/common/SectionHeader';
import Button from '@site/src/components/common/Button';
import styles from './styles.module.css';

interface CommunityAction {
  description: string;
  buttonText: string;
  link: string;
}

const communityActions: CommunityAction[] = [
  {
    description: 'Help shape LicenseOps by submitting features, fixes, or improvements.',
    buttonText: 'Contribute',
    link: 'https://github.com/chalindukodikara/licenseops',
  },
  {
    description: 'Found a bug or have an idea? Open an issue and let us know.',
    buttonText: 'Report Issues',
    link: 'https://github.com/chalindukodikara/licenseops/issues',
  },
  {
    description: 'Ask questions, share use cases, and connect with other users.',
    buttonText: 'Discussions',
    link: 'https://github.com/chalindukodikara/licenseops/issues',
  },
];

function CommunityCard({action}: {action: CommunityAction}) {
  return (
    <div className={styles.card}>
      <Button to={action.link}>
        {action.buttonText}
      </Button>
      <p className={styles.description}>{action.description}</p>
    </div>
  );
}

export default function Community(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="Join the Community">
          <p>LicenseOps is open-source and Apache-2.0 licensed. We'd love your contributions.</p>
        </SectionHeader>

        <div className={styles.grid}>
          {communityActions.map((action, index) => (
            <CommunityCard key={index} action={action} />
          ))}
        </div>
      </div>
    </section>
  );
}
