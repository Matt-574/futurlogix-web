import { motion } from 'framer-motion';
import React from 'react';
import styles from './CaseStudyImpact.module.css';

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyImpactProps {
  metrics: Metric[];
  dataCards: {
    title: string;
    description: string;
  }[];
}

const CaseStudyImpact: React.FC<CaseStudyImpactProps> = ({
  metrics,
  dataCards,
}) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Resultados Medibles. Crecimiento Real.</h2>
      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className={styles.metricCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <p className={styles.metricValue}>{metric.value}</p>
            <p className={styles.metricLabel}>{metric.label}</p>
          </motion.div>
        ))}
      </div>
      <div className={styles.dataCardsGrid}>
        {dataCards.map((card, index) => (
          <motion.div
            key={index}
            className={styles.dataCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyImpact;
