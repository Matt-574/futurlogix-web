import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './CapabilitiesSection.module.css';

const capabilities = [
  {
    title: "IA & Automatización Inteligente",
    description: "Transformamos tus procesos en sistemas autónomos que aprenden y mejoran."
  },
  {
    title: "Estrategia y Arquitectura de Datos",
    description: "Convertimos tus datos en tu activo más valioso para decisiones inteligentes."
  },
  {
    title: "Desarrollo de Software a Medida",
    description: "Construimos las aplicaciones y plataformas robustas que tu negocio necesita para escalar."
  },
  {
    title: "Experiencias Digitales (DXP)",
    description: "Diseñamos interfaces y experiencias de cliente que te diferencian de la competencia."
  },
  {
    title: "Modernización Cloud & DevOps",
    description: "Migramos y optimizamos tu infraestructura para una máxima eficiencia y escalabilidad."
  },
  {
    title: "Ciberseguridad Proactiva",
    description: "Protegemos tu negocio con estrategias de seguridad que anticipan las amenazas."
  },
];

const CapabilitiesSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestras Capacidades. Tu Ventaja Competitiva.</h2>
      <div className={styles.grid}>
        {capabilities.map((cap, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3 className={styles.cardTitle}>{cap.title}</h3>
            <p className={styles.cardDescription}>{cap.description}</p>
          </motion.div>
        ))}
      </div>
       <div className={styles.ctaContainer}>
            <Link to="/capacidades" className={styles.ctaButton}>
              Explorar Todas las Capacidades
            </Link>
        </div>
    </section>
  );
};
export default CapabilitiesSection;