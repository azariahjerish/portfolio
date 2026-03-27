import { profile } from '@/data/portfolio';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} />
        <span className={styles.eyebrowText}>Full Stack Engineer · 3 yrs</span>
      </div>

      <h2 id="hero-heading" className={styles.headline}>
        {profile.tagline}
      </h2>

      <p className={styles.sub}>{profile.subTagline}</p>

      <div className={styles.pillsRow}>
        {['Payment Gateways', 'NSE / MCX', 'Java · Go', 'Spring Boot', 'Angular'].map((pill) => (
          <span key={pill} className={styles.pill}>{pill}</span>
        ))}
      </div>

      <div className={styles.statsRow}>
        <Stat value="3" label="Years building financial systems" />
        <Stat value="3" label="Live payment integrations" />
        <Stat value="2" label="Exchange APIs integrated" />
      </div>

      <div className={styles.cta}>
        <button
          className={styles.ctaPrimary}
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        >
          See My Work
        </button>
        <a
          href={`mailto:${profile.email}`}
          className={styles.ctaSecondary}
          aria-label="Email Azariah Jerish"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}
