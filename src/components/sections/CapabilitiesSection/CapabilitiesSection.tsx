import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './CapabilitiesSection.module.css';

const capabilities = [
  {
    title: "IA & Automatización Inteligente",
    description: "Transformamos tus procesos en sistemas autónomos que aprenden y mejoran.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  },
  {
    title: "Estrategia y Arquitectura de Datos",
    description: "Convertimos tus datos en tu activo más valioso para decisiones inteligentes.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M12 18v-6"/><path d="M15 15l-3-3-3 3"/></svg>'
  },
  {
    title: "Desarrollo de Software a Medida",
    description: "Construimos las aplicaciones y plataformas robustas que tu negocio necesita para escalar.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10z"/><path d="M12 4v16"/><path d="M7 12h10"/></svg>'
  },
  {
    title: "Experiencias Digitales (DXP)",
    description: "Diseñamos interfaces y experiencias de cliente que te diferencian de la competencia.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
  },
  {
    title: "Modernización Cloud & DevOps",
    description: "Migramos y optimizamos tu infraestructura para una máxima eficiencia y escalabilidad.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26a8 8 0 1 0-11.48 0H6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"/><path d="M12 12v6"/><path d="M15 15l-3 3-3-3"/></svg>'
  },
  {
    title: "Ciberseguridad Proactiva",
    description: "Protegemos tu negocio con estrategias de seguridad que anticipan las amenazas.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
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
            whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
          >
            <div className={styles.cardIcon} dangerouslySetInnerHTML={{ __html: cap.icon }} />
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