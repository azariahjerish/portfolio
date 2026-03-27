import React from 'react';
import { capabilities } from '@/data/portfolio';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import styles from './Capabilities.module.css';

export function Capabilities() {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="capabilities" className={styles.section} aria-labelledby="capabilities-heading">
      <SectionLabel text="What I Actually Do" />

      <h2 id="capabilities-heading" className={styles.heading}>
        Not a generalist. A specialist.
      </h2>
      <p className={styles.intro}>
        Three years working exclusively on systems where money moves. Every capability below
        comes from production code, not tutorials.
      </p>

      <div className={styles.grid}>
        {capabilities.map((cap) => (
          <article 
            key={cap.id} 
            className={styles.card}
            onMouseMove={handleMouseMove}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <span className={styles.cardTag}>{cap.tag}</span>
            </div>
            <p className={styles.cardBody}>{cap.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
