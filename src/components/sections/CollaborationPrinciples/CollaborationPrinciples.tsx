import React from 'react';
import { motion } from 'framer-motion';
import styles from './CollaborationPrinciples.module.css';

const principles = [
  {
    title: "Partners, no Proveedores",
    description: "Tu éxito es nuestro éxito. Nuestro modelo de negocio se alinea con tus resultados, asegurando que siempre estemos en el mismo equipo."
  },
  {
    title: "Obsesión por el ROI",
    description: "Cada línea de código y cada decisión de diseño se justifica por el valor tangible que aporta a tu cuenta de resultados."
  },
  {
    title: "Transparencia Radical",
    description: "Comunicación abierta, acceso a los datos y una hoja de ruta clara. Construimos relaciones a largo plazo basadas en la confianza."
  }
];

const CollaborationPrinciples = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestra Forma de Trabajar</h2>
      <div className={styles.grid}>
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className={styles.borderBeam}></div> {/* Nuevo div para el efecto de borde */}
            <h3 className={styles.cardTitle}>{principle.title}</h3>
            <p className={styles.cardDescription}>{principle.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CollaborationPrinciples;
