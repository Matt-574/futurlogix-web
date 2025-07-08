import { motion } from 'framer-motion';
import React from 'react';
import styles from './CaseStudyHero.module.css';

interface CaseStudyHeroProps {
  title: string;
  resultsSummary: string;
  clientLogo: string;
  backgroundImage: string;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  title,
  resultsSummary,
  clientLogo,
  backgroundImage,
}) => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.img
          src={clientLogo}
          alt="Client Logo"
          className={styles.clientLogo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className={styles.resultsSummary}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {resultsSummary}
        </motion.p>
      </div>
    </section>
  );
};

export default CaseStudyHero;
