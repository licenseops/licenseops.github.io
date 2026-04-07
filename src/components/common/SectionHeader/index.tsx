import React from 'react';
import styles from './styles.module.css';

type SectionHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export default function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      {children && (
        <div className={styles.description}>
          {children}
        </div>
      )}
    </>
  );
}
