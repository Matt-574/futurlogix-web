import { motion } from 'framer-motion';
import React from 'react';
import styles from './AlternativeContact.module.css';

const AlternativeContact: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divider}></div>
      <h2 className={styles.title}>Otras Vías de Contacto</h2>
      <div className={styles.contentGrid}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Consultas de Prensa o Inversores</h3>
          <p>Para consultas específicas de medios o relaciones con inversores, por favor, escriba a <a href="mailto:partners@futurlogix.com">partners@futurlogix.com</a>.</p>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Talento</h3>
          <p>¿Interesado en unirte a nuestro equipo? Visita nuestro perfil en <a href="https://www.linkedin.com/company/futurlogix" target="_blank" rel="noopener noreferrer">LinkedIn</a> para ver las oportunidades abiertas.</p>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Ubicación</h3>
          <p>Construyendo el futuro desde [Tu Ciudad/País].</p>
          {/* Aquí se podría integrar un mapa sutil */}
        </motion.div>
      </div>
    </section>
  );
};

export default AlternativeContact;
