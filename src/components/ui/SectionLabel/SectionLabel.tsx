import styles from './SectionLabel.module.css';

interface Props {
  text: string;
  id?: string;
}

export function SectionLabel({ text, id }: Props) {
  return (
    <div className={styles.wrapper} id={id}>
      <span className={styles.line} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
