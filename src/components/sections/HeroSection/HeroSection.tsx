import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.shapeBlurContainer}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
      </div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          De la <span className={styles.gradientText}>Complejidad</span> al Crecimiento.
        </h1>
        <p className={styles.subtitle}>
          Para líderes que no buscan una herramienta, sino una ventaja competitiva. Diseñamos y construimos tu futuro rentable.
        </p>
      </motion.div>
      <div className={styles.scrollIndicator}>
        <span>↓</span>
      </div>
    </section>
  );
};
export default HeroSection;