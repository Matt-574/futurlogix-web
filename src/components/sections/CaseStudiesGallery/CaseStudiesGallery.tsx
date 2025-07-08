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
    ],
    backgroundImage: "https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Hotel",
    clientLogo: "https://via.placeholder.com/80x40/FFFFFF/000000?text=Client1",
  },
  {
    slug: "e-commerce-innovators",
    industry: "E-Commerce",
    title: "Escalando operaciones de un marketplace de alto crecimiento con IA",
    metrics: [
      { value: "92%", label: "Satisfacción Cliente" },
      { value: "3X", label: "Capacidad de Soporte" },
    ],
    backgroundImage: "https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Ecommerce",
    clientLogo: "https://via.placeholder.com/80x40/FFFFFF/000000?text=Client2",
  },
  {
    slug: "manufacturing-optimization",
    industry: "Manufactura",
    title: "Optimización de la cadena de suministro con IA y Big Data",
    metrics: [
      { value: "+15%", label: "Eficiencia Producción" },
      { value: "-20%", label: "Costos Operativos" },
    ],
    backgroundImage: "https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Manufactura",
    clientLogo: "https://via.placeholder.com/80x40/FFFFFF/000000?text=Client3",
  },
  {
    slug: "financial-services-transformation",
    industry: "Servicios Financieros",
    title: "Transformación digital de servicios financieros con blockchain",
    metrics: [
      { value: "+30%", label: "Velocidad Transacción" },
      { value: "-10%", label: "Costos Compliance" },
    ],
    backgroundImage: "https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Finanzas",
    clientLogo: "https://via.placeholder.com/80x40/FFFFFF/000000?text=Client4",
  },
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
          whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
          className={styles.gridItem} /* Añadir esta clase para el masonry */
        >
          <Link to={`/casos-de-exito/${study.slug}`} className={styles.card}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${study.backgroundImage})` }}>
              <img src={study.clientLogo} alt="Client Logo" className={styles.clientLogo} />
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