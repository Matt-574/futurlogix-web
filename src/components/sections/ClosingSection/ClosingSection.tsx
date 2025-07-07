import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ClosingSection.module.css';

const ClosingSection = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ¿Listo para diseñar tu futuro?
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        No estamos buscando clientes. Estamos buscando socios para construir la próxima generación de líderes en la industria. Si compartes nuestra ambición, iniciemos la conversación.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link to="/contacto" className={styles.ctaButton}>
          Iniciar una Conversación Estratégica
        </Link>
      </motion.div>
    </section>
  );
};

export default ClosingSection;