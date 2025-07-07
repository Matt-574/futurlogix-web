import Logo from '../../layout/Logo';
import styles from './TechStack.module.css';

// Placeholder para los logos de las tecnologías.
// En un proyecto real, usarías los SVGs o imágenes reales.
const TechIcon = ({ label }: { label: string }) => (
  <div style={{ fontSize: '10px', color: '#9ca3af' }}>{label}</div>
);

const TechStack = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Tecnología de Vanguardia como Estándar</h2>
      <div className={styles.orbitingContainer}>
        <div className={styles.centerLogo}>
          <Logo />
        </div>
        
        <div className={`${styles.orbit} ${styles.orbit1}`}>
          <div className={`${styles.techLogo} ${styles.techLogo1}`}><TechIcon label="React" /></div>
          <div className={`${styles.techLogo} ${styles.techLogo2}`}><TechIcon label="Node.js" /></div>
          <div className={`${styles.techLogo} ${styles.techLogo3}`}><TechIcon label="Python" /></div>
          <div className={`${styles.techLogo} ${styles.techLogo4}`}><TechIcon label="Vite" /></div>
        </div>
        
        <div className={`${styles.orbit} ${styles.orbit2}`}>
          <div className={`${styles.techLogo} ${styles.techLogo5}`}><TechIcon label="AWS" /></div>
          <div className={`${styles.techLogo} ${styles.techLogo6}`}><TechIcon label="GCP" /></div>
          <div className={`${styles.techLogo} ${styles.techLogo7}`}><TechIcon label="Docker" /></div>
          <div className={`${styles.techLogo} ${styles.techLogo8}`}><TechIcon label="K8s" /></div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
