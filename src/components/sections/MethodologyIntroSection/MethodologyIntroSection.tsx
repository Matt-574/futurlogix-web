import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './MethodologyIntroSection.module.css';

const steps = [
  {
    number: "01",
    title: "Diagnosticar",
    description: "Entendemos el ADN de tu negocio para descubrir el potencial oculto. No adivinamos; medimos.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  },
  {
    number: "02",
    title: "Diseñar",
    description: "Arquitectamos tu ventaja competitiva. Diseñamos la solución tecnológica a medida que te posiciona para dominar tu mercado.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M12 18v-6"/><path d="M15 15l-3-3-3 3"/></svg>'
  },
  {
    number: "03",
    title: "Escalar",
    description: "Tu crecimiento es nuestro roadmap. Implementamos, medimos y optimizamos para asegurar un crecimiento exponencial y sostenible.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  }
];

const MethodologyIntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.leftPanel}
          style={{ opacity }}
        >
          <h2 className={styles.title}>
            Nuestro Método: Un Proceso, Tres Fases.
          </h2>
          <p className={styles.description}>
            La innovación disruptiva requiere más que tecnología brillante; exige una metodología rigurosa.
          </p>
          {/* Icono que cambia con el scroll - Placeholder por ahora */}
          <div className={styles.changingIcon}>
            {/* Aquí se podría implementar la lógica para cambiar el icono basado en el scrollYProgress */}
            <div dangerouslySetInnerHTML={{ __html: steps[0].icon }} />
          </div>
        </motion.div>
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

