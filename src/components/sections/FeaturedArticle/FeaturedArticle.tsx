import { motion } from 'framer-motion';
import React from 'react';
import styles from './FeaturedArticle.module.css';

interface FeaturedArticleProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  description,
  link,
  image,
}) => {
  return (
    <section className={styles.section}>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <span className={styles.readMore}>Leer más →</span>
        </div>
      </motion.a>
    </section>
  );
};

export default FeaturedArticle;
