import { CustomCursor } from '@/components/ui/CustomCursor/CustomCursor';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { Hero } from '@/components/sections/Hero/Hero';
import { Capabilities } from '@/components/sections/Capabilities/Capabilities';
import { Work } from '@/components/sections/Work/Work';
import { Systems } from '@/components/sections/Systems/Systems';
import { TechStack } from '@/components/sections/TechStack/TechStack';
import { Contact } from '@/components/sections/Contact/Contact';
import styles from './App.module.css';

function App() {
  return (
    <>
      <CustomCursor />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.main} id="main-content">
          <div className={styles.content}>
            <Hero />
            <div className={styles.divider} />
            <Capabilities />
            <div className={styles.divider} />
            <Work />
            <div className={styles.divider} />
            <Systems />
            <div className={styles.divider} />
            <TechStack />
            <div className={styles.divider} />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
