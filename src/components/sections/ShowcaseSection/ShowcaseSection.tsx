import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowcaseSection.module.css';

const ShowcaseSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.8], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className={styles.section}>
      <h2 className={styles.title}>Donde la Estrategia se Convierte en Realidad</h2>
      
      <div className={styles.geminiContainer}>
        <motion.div
          style={{ scale, opacity, x }}
          className={styles.geminiContent}
        >
          <h3 className={styles.geminiTitle}>Industria Destacada: Turismo y Hospitalidad</h3>
          <p className={styles.geminiDescription}>
            Hemos revolucionado el sector turístico a través de nuestra marca especialista, <span className={styles.gradientText}>Journeest</span>. Transformamos las operaciones de hoteles y empresas de servicios, automatizando la comunicación, duplicando reservas directas y creando experiencias de cliente inolvidables.
          </p>
          <Link to="/casos-de-exito/journeest" className={styles.ctaButton}>
            Ver Caso de Éxito Completo
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default ShowcaseSection;