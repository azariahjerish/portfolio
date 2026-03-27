import React from 'react';
import { projects } from '@/data/portfolio';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import { Tag } from '@/components/ui/Tag/Tag';
import styles from './Work.module.css';

export function Work() {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <SectionLabel text="Selected Work" />

      <h2 id="work-heading" className={styles.heading}>
        Systems I actually shipped.
      </h2>
      <p className={styles.intro}>
        No side projects. No hackathons. Production systems in regulated financial environments.
      </p>

      <div className={styles.list}>
        {projects.map((proj, idx) => (
          <article 
            key={proj.id} 
            className={styles.card}
            onMouseMove={handleMouseMove}
          >
            {/* Left: number only */}
            <div className={styles.indexCol}>
              <span className={styles.index}>0{idx + 1}</span>
            </div>

            {/* Right: all content */}
            <div className={styles.content}>
              {/* Top row: badges + company */}
              <div className={styles.metaRow}>
                <span className={styles.type}>{proj.type}</span>
                <span className={styles.period}>{proj.period}</span>
                <span className={styles.company}>{proj.company}</span>
              </div>

              {/* Title */}
              <h3 className={styles.title}>{proj.name}</h3>

              {/* Summary */}
              <p className={styles.summary}>{proj.summary}</p>

              {/* Highlights */}
              <ul className={styles.highlights} aria-label="Key highlights">
                {proj.highlights.map((h, i) => (
                  <li key={i} className={styles.highlight}>
                    <span className={styles.checkmark} aria-hidden="true">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className={styles.tags}>
                {proj.stack.map((tech) => (
                  <Tag key={tech} variant="default">{tech}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
