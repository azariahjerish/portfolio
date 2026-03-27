import styles from './Tag.module.css';

interface Props {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'green' | 'blue';
}

export function Tag({ children, variant = 'default' }: Props) {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>
      {children}
    </span>
  );
}
