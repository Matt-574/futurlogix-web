import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './CaseStudiesGallery.module.css';

const caseStudies = [
  {
    slug: "journeest-hotel-group",
    industry: "Turismo y Hospitalidad",
    title: "Reinventando la experiencia del huésped para un líder hotelero",
    metrics: [
      { value: "+25%", label: "Ingresos Directos" },
      { value: "-40%", label: "Tareas Manuales" },
    ]
  },
  {
    slug: "e-commerce-innovators",
    industry: "E-Commerce",
    title: "Escalando operaciones de un marketplace de alto crecimiento con IA",
    metrics: [
      { value: "92%", label: "Satisfacción Cliente" },
      { value: "3X", label: "Capacidad de Soporte" },
    ]
  },
  // Añadir más casos de éxito aquí
];

const CaseStudiesGallery = () => {
  return (
    <div className={styles.grid}>
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.slug}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link to={`/casos-de-exito/${study.slug}`} className={styles.card}>
            <div className={styles.imageContainer}>
              {/* Aquí iría una imagen real */}
            </div>
            <div className={styles.content}>
              <span className={styles.industryTag}>{study.industry}</span>
              <h3 className={styles.title}>{study.title}</h3>
              <div className={styles.metrics}>
                {study.metrics.map(metric => (
                  <div key={metric.label} className={styles.metricItem}>
                    <p className={styles.metricValue}>{metric.value}</p>
                    <p className={styles.metricLabel}>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CaseStudiesGallery;