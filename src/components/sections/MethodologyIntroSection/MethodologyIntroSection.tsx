import { motion } from 'framer-motion';
import styles from './MethodologyIntroSection.module.css';

const steps = [
  {
    number: "01",
    title: "Diagnosticar",
    description: "Entendemos el ADN de tu negocio para descubrir el potencial oculto. No adivinamos; medimos."
  },
  {
    number: "02",
    title: "Diseñar",
    description: "Arquitectamos tu ventaja competitiva. Diseñamos la solución tecnológica a medida que te posiciona para dominar tu mercado."
  },
  {
    number: "03",
    title: "Escalar",
    description: "Tu crecimiento es nuestro roadmap. Implementamos, medimos y optimizamos para asegurar un crecimiento exponencial y sostenible."
  }
];

const MethodologyIntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Nuestro Método: Un Proceso, Tres Fases.
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            La innovación disruptiva requiere más que tecnología brillante; exige una metodología rigurosa.
          </motion.p>
        </div>
        <div className={styles.rightPanel}>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.stepCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className={styles.stepNumber}>{step.number}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MethodologyIntroSection;

