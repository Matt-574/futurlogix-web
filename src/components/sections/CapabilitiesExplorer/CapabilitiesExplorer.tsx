import { motion } from 'framer-motion';
import styles from './CapabilitiesExplorer.module.css';

const capabilitiesData = [
  {
    title: "IA & Automatización Inteligente",
    description: "Creamos 'fuerzas de trabajo digitales': sistemas autónomos que no solo ejecutan tareas, sino que aprenden, se adaptan y optimizan los procesos en tiempo real, liberando a tu equipo para que se centre en la estrategia.",
    subItems: ["Análisis Predictivo", "Procesamiento de Lenguaje Natural (NLP)", "IA Generativa", "RPA"]
  },
  {
    title: "Estrategia y Arquitectura de Datos",
    description: "Rompemos los silos de información, diseñamos una 'única fuente de la verdad' y construimos pipelines robustos. Transformamos datos crudos en inteligencia accionable para el motor de decisiones de tu negocio.",
    subItems: ["Data Warehousing", "Business Intelligence (BI)", "Pipelines ETL/ELT", "Gobernanza de Datos"]
  },
  {
    title: "Desarrollo de Plataformas a Medida",
    description: "Cuando las soluciones estándar no son suficientes, construimos la tuya. Creamos aplicaciones, SaaS y sistemas empresariales que son seguros, escalables y perfectamente alineados con tus procesos.",
    subItems: ["Desarrollo Full-Stack", "Microservicios", "Diseño de APIs", "Apps Móviles"]
  },
  {
    title: "Experiencias Digitales (DXP) & UI/UX",
    description: "Nos obsesionamos con el lado humano de la tecnología, diseñando interfaces intuitivas y experiencias memorables que deleitan a tus clientes y empleados, reforzando tu marca en cada punto de contacto.",
    subItems: ["User Research", "Diseño de Experiencia (UX)", "Diseño de Interfaz (UI)", "Sistemas de Diseño"]
  },
  {
    title: "Modernización Cloud & DevOps",
    description: "Le damos a tu negocio la agilidad y resiliencia de una empresa nativa digital. Migramos tus sistemas, implementamos una cultura DevOps y automatizamos los ciclos de desarrollo para acelerar tu innovación.",
    subItems: ["Migración a la Nube", "Infraestructura como Código (IaC)", "CI/CD", "Kubernetes"]
  },
  {
    title: "Ciberseguridad Proactiva",
    description: "Integramos la seguridad en cada fase del ciclo de vida del desarrollo (DevSecOps). No solo reaccionamos a las amenazas; las anticipamos y diseñamos sistemas resilientes desde el núcleo.",
    subItems: ["Pentesting", "Monitoreo de Seguridad (SIEM)", "Arquitecturas Zero Trust", "DevSecOps"]
  }
];

const CapabilitiesExplorer = () => {
  return (
    <div className={styles.grid}>
      {capabilitiesData.map((cap, index) => (
        <motion.div
          key={index}
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{cap.title}</h3>
          </div>
          <p className={styles.cardDescription}>{cap.description}</p>
          <div className={styles.subCapabilities}>
            <h4 className={styles.subTitle}>Sub-capacidades clave:</h4>
            <div className={styles.tagList}>
              {cap.subItems.map(item => <span key={item} className={styles.tag}>{item}</span>)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CapabilitiesExplorer;