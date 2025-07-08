import { motion } from 'framer-motion';
import React from 'react';
import styles from './CaseStudyTestimonial.module.css';

interface CaseStudyTestimonialProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
}

const CaseStudyTestimonial: React.FC<CaseStudyTestimonialProps> = ({
  quote,
  authorName,
  authorRole,
  authorAvatar,
}) => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.testimonialContent}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.quote}>"{quote}"</p>
        <div className={styles.authorInfo}>
          <img src={authorAvatar} alt={authorName} className={styles.authorAvatar} />
          <div>
            <p className={styles.authorName}>{authorName}</p>
            <p className={styles.authorRole}>{authorRole}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudyTestimonial;
