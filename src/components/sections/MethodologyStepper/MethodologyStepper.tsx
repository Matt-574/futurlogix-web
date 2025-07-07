import React from 'react';
import { motion } from 'framer-motion';
import styles from './MethodologyStepper.module.css';

const methodologySteps = [
  {
    number: "01",
    title: "Inmersión y Diagnóstico Estratégico",
    description: "No podemos transformar lo que no entendemos profundamente. Esta fase es una inmersión total en tu negocio. A través de nuestra plataforma especialista `Journeest`, talleres con tus equipos clave y un análisis exhaustivo de tus datos y procesos, creamos un mapa preciso de tu estado actual.",
    deliverables: ["Informe de Oportunidad de Crecimiento", "Mapa de Fricción Operativa", "Benchmark de Madurez Digital"]
  },
  {
    number: "02",
    title: "Arquitectura y Diseño de la Solución",
    description: "Aquí es donde la visión toma forma. En un proceso de co-diseño colaborativo, traducimos los hallazgos en un plan de acción técnico y estratégico. Creamos los planos de tu futura ventaja competitiva, desde la arquitectura de sistemas hasta el diseño de la experiencia de usuario.",
    deliverables: ["Roadmap Tecnológico y de Producto", "Prototipos Interactivos (PoC)", "Arquitectura de la Solución"]
  },
  {
    number: "03",
    title: "Implementación, Optimización y Escalamiento",
    description: "La ejecución es todo. Utilizando metodologías ágiles, nuestros equipos implementan la solución en ciclos cortos, entregando valor desde las primeras semanas. Nuestro trabajo no termina con el lanzamiento; monitorizamos, analizamos y optimizamos en un ciclo virtuoso.",
    deliverables: ["Plataforma/Solución en Producción", "Dashboard de ROI y Métricas", "Revisiones de Negocio Trimestrales (QBRs)"]
  }
];

const CheckIcon = () => (
  <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const MethodologyStepper = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.stepper}>
          {methodologySteps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.stepIcon}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                <h4 className={styles.deliverablesTitle}>Entregables Clave:</h4>
                <ul className={styles.deliverablesList}>
                  {step.deliverables.map(item => (
                    <li key={item} className={styles.deliverableItem}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyStepper;
