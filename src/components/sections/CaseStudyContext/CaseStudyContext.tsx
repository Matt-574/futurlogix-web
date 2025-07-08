import { motion } from 'framer-motion';
import React from 'react';
import styles from './CaseStudyContext.module.css';

interface CaseStudyContextProps {
  narrativeTitle: string;
  narrativeContent: string;
  clientData: {
    client: string;
    industry: string;
    services: string[];
  };
}

const CaseStudyContext: React.FC<CaseStudyContextProps> = ({
  narrativeTitle,
  narrativeContent,
  clientData,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.narrativeColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.narrativeTitle}>{narrativeTitle}</h2>
          <p className={styles.narrativeContent}>{narrativeContent}</p>
        </motion.div>
        <motion.div
          className={styles.dataColumn}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.dataCard}>
            <h3 className={styles.cardTitle}>Datos Clave del Cliente</h3>
            <p><strong>Cliente:</strong> {clientData.client}</p>
            <p><strong>Industria:</strong> {clientData.industry}</p>
            <p><strong>Servicios Prestados:</strong></p>
            <ul>
              {clientData.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyContext;
