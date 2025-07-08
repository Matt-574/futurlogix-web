import { motion } from 'framer-motion';
import React from 'react';
import styles from './ContactHero.module.css';

interface ContactHeroProps {
  title: string;
  description: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({
  title,
  description,
}) => {
  return (
    <section className={styles.heroSection}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {description}
      </motion.p>
    </section>
  );
};

export default ContactHero;
