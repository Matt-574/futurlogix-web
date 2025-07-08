import { motion } from 'framer-motion';
import React from 'react';
import styles from './SubscriptionCta.module.css';

const SubscriptionCta: React.FC = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Únete a Nuestra Visión
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Recibe nuestros análisis y perspectivas directamente en tu bandeja de entrada.
      </motion.p>

      <motion.form
        className={styles.form}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Suscribirse
        </button>
      </motion.form>
    </section>
  );
};

export default SubscriptionCta;
