import { systemsContent } from '@/data/portfolio';
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel';
import styles from './Systems.module.css';

export function Systems() {
  return (
    <section id="systems" className={styles.section} aria-labelledby="systems-heading">
      <SectionLabel text="Systems Thinking" />

      <h2 id="systems-heading" className={styles.heading}>
        How I reason about systems before I build them.
      </h2>

      <p className={styles.intro}>{systemsContent.intro}</p>

      <div className={styles.principles}>
        {systemsContent.principles.map((p, idx) => (
          <article key={p.id} className={styles.principle}>
            <div className={styles.principleNumber}>
              <span>{String(idx + 1).padStart(2, '0')}</span>
            </div>
            <div className={styles.principleContent}>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleBody}>{p.body}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Architecture Diagram — simplified visual */}
      <div className={styles.diagram} role="img" aria-label="Simplified microservices architecture diagram">
        <div className={styles.diagramLabel}>Architecture Pattern</div>
        <div className={styles.diagramFlow}>
          <ArchNode label="Angular" sub="Micro-frontend" color="blue" />
          <Arrow />
          <ArchNode label="API Gateway" sub="Spring Boot" color="accent" />
          <Arrow />
          <div className={styles.serviceGroup}>
            <ArchNode label="Payment Svc" sub="Go" color="green" small />
            <ArchNode label="Allocation Svc" sub="Go" color="green" small />
            <ArchNode label="Compliance Svc" sub="Java" color="green" small />
          </div>
          <Arrow />
          <ArchNode label="Databases" sub="MySQL / MariaDB" color="default" />
        </div>
      </div>
    </section>
  );
}

function ArchNode({
  label,
  sub,
  color,
  small = false,
}: {
  label: string;
  sub: string;
  color: 'blue' | 'accent' | 'green' | 'default';
  small?: boolean;
}) {
  return (
    <div className={`${styles.archNode} ${styles[`node_${color}`]} ${small ? styles.archNodeSmall : ''}`}>
      <span className={styles.archNodeLabel}>{label}</span>
      <span className={styles.archNodeSub}>{sub}</span>
    </div>
  );
}

function Arrow() {
  return <div className={styles.arrow} aria-hidden="true">→</div>;
}
