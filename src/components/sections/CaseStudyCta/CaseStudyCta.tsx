import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CaseStudyCta.module.css';

interface CaseStudyCtaProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const CaseStudyCta: React.FC<CaseStudyCtaProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link to={ctaLink} className={styles.ctaButton}>
          {ctaText}
        </Link>
      </motion.div>
    </section>
  );
};

export default CaseStudyCta;
