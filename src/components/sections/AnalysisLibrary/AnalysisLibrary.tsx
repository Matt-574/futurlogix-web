import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from './AnalysisLibrary.module.css';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  link: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'El Futuro de la IA en la Estrategia Empresarial',
    category: 'IA',
    date: 'Julio 2025',
    link: '#',
  },
  {
    id: '2',
    title: 'Data-Driven Decisions: Maximizando el ROI',
    category: 'Datos',
    date: 'Junio 2025',
    link: '#',
  },
  {
    id: '3',
    title: 'DevOps: Agilidad y Escalabilidad en la Nube',
    category: 'Cloud',
    date: 'Mayo 2025',
    link: '#',
  },
  {
    id: '4',
    title: 'UX/UI: Diseñando Experiencias Memorables',
    category: 'UX/UI',
    date: 'Abril 2025',
    link: '#',
  },
  {
    id: '5',
    title: 'Ciberseguridad Proactiva: Protegiendo tu Activo Más Valioso',
    category: 'Seguridad',
    date: 'Marzo 2025',
    link: '#',
  },
];

const categories = ['Todos', 'IA', 'Datos', 'Cloud', 'UX/UI', 'Seguridad'];

const AnalysisLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredArticles = articles.filter((article) =>
    activeCategory === 'Todos' ? true : article.category === activeCategory
  );

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Biblioteca de Análisis</h2>
      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tabButton} ${activeCategory === category ? styles.activeTab : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.articlesGrid}>
        {filteredArticles.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.articleCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
          >
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleMeta}>{article.category} | {article.date}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default AnalysisLibrary;
