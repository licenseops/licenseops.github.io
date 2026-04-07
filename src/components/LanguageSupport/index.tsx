import type {ReactNode} from 'react';
import React from 'react';
import SectionHeader from '@site/src/components/common/SectionHeader';
import styles from './styles.module.css';

interface LanguageGroup {
  style: string;
  languages: string;
}

const languageGroups: LanguageGroup[] = [
  {
    style: '//',
    languages: 'Go, Rust, Java, JavaScript, TypeScript, C/C++, C#, Swift, Kotlin, Scala, Dart, Protobuf, Zig',
  },
  {
    style: '#',
    languages: 'Python, Ruby, Shell, Perl, YAML, TOML, Terraform, Dockerfile, Makefile, R, Elixir, Nix',
  },
  {
    style: '--',
    languages: 'Haskell, Lua, SQL, Ada, Elm',
  },
  {
    style: '/* */',
    languages: 'CSS, SCSS, Less',
  },
  {
    style: '<!-- -->',
    languages: 'HTML, XML, SVG, Vue',
  },
];

export default function LanguageSupport(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="50+ Languages Supported">
          <p>
            LicenseOps auto-detects the correct comment syntax for each file type.
            No configuration needed — it just works.
          </p>
        </SectionHeader>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Comment Style</th>
                <th>Languages</th>
              </tr>
            </thead>
            <tbody>
              {languageGroups.map((group, index) => (
                <tr key={index}>
                  <td>
                    <code className={styles.styleCode}>{group.style}</code>
                  </td>
                  <td>{group.languages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.extras}>
          <div className={styles.extraCard}>
            <h4>Smart Handling</h4>
            <p>Preserves shebangs, Python encoding declarations, and skips generated files automatically.</p>
          </div>
          <div className={styles.extraCard}>
            <h4>Auto-Skip</h4>
            <p>Binary files, images, fonts, lock files, and minified assets are skipped by default.</p>
          </div>
          <div className={styles.extraCard}>
            <h4>Gitignore-Aware</h4>
            <p>Respects your .gitignore patterns — no need to duplicate exclusion rules.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
