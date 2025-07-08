import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import ThreeDAnimatedLogo from '../../common/ThreeDAnimatedLogo';
import { SparklesPreview } from '../../ui/SparklesPreview';

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
        <SparklesPreview />
        <p className={styles.subtitle}>
          Para líderes que no buscan una herramienta, sino una ventaja competitiva. Diseñamos y construimos tu futuro rentable.
        </p>
        {/* El logo 3D ahora se renderiza debajo del texto */}
        <div className={styles.threeDLogoInlineContainer}>
          <ThreeDAnimatedLogo />
        </div>
      </motion.div>
      <div className={styles.scrollIndicator}>
        <span>↓</span>
      </div>
    </section>
  );
};
export default HeroSection;