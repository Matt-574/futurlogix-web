import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './CaseStudySolution.module.css';

interface CaseStudySolutionProps {
  solutionTitle: string;
  solutionSteps: {
    title: string;
    description: string;
    image: string; // URL de la imagen o diagrama
  }[];
}

const CaseStudySolution: React.FC<CaseStudySolutionProps> = ({
  solutionTitle,
  solutionSteps,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Lógica para cambiar la imagen/diagrama según el paso visible
  const currentStepIndex = useTransform(scrollYProgress, [0, 1], [0, solutionSteps.length - 1]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.leftPanel}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
        >
          <h2 className={styles.solutionTitle}>{solutionTitle}</h2>
          <div className={styles.solutionImageContainer}>
            {/* Renderiza la imagen del paso actual */}
            {solutionSteps.map((step, index) => (
              <motion.img
                key={index}
                src={step.image}
                alt={step.title}
                className={styles.solutionImage}
                style={{
                  opacity: useTransform(currentStepIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]),
                }}
              />
            ))}
          </div>
        </motion.div>
        <div className={styles.rightPanel}>
          {solutionSteps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepContent}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySolution;
