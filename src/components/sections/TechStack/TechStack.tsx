import { techStack } from '@/data/portfolio';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import styles from './TechStack.module.css';

export function TechStack() {
  return (
    <section id="stack" className={styles.section} aria-labelledby="stack-heading">
      <SectionLabel text="Tech Stack" />

      <h2 id="stack-heading" className={styles.heading}>
        Tools I use in production.
      </h2>
      <p className={styles.intro}>
        Grouped by function — not alphabetically. The domain column is what sets my stack apart from
        a typical full-stack engineer's.
      </p>

      <div className={styles.groups}>
        {techStack.map((group) => (
          <div key={group.label} className={styles.group}>
            <h3 className={styles.groupLabel}>{group.label}</h3>
            <div className={styles.items}>
              {group.items.map((tech) => (
                <span key={tech} className={styles.item}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
