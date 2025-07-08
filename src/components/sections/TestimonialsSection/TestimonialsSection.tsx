import { motion } from 'framer-motion';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "Futurlogix no nos entregó una herramienta, nos entregó una estrategia. Transformaron nuestra forma de operar y, como resultado, nuestra rentabilidad.",
    name: "Ana García",
    role: "CEO, Journeest Hotel Group",
    avatar: "https://via.placeholder.com/150/0000FF/FFFFFF?text=AG", // Placeholder para avatar
    companyLogo: "https://via.placeholder.com/100x50/000000/FFFFFF?text=Logo1" // Placeholder para logo de empresa
  },
  {
    quote: "La profundidad de su análisis y la calidad de su ejecución técnica están en otro nivel. Son verdaderos socios de crecimiento.",
    name: "Carlos Rodríguez",
    role: "Director de Innovación, E-Commerce Innovators",
    avatar: "https://via.placeholder.com/150/FF0000/FFFFFF?text=CR",
    companyLogo: "https://via.placeholder.com/100x50/000000/FFFFFF?text=Logo2"
  },
  {
    quote: "Liberar a nuestro equipo de las tareas repetitivas nos ha permitido volver a centrarnos en la hospitalidad. El impacto en la moral y en la satisfacción del cliente ha sido inmenso.",
    name: "Laura Martínez",
    role: "Directora de Operaciones, Cadena Hotelera Sol",
    avatar: "https://via.placeholder.com/150/00FF00/FFFFFF?text=LM",
    companyLogo: "https://via.placeholder.com/100x50/000000/FFFFFF?text=Logo3"
  },
  {
    quote: "Futurlogix no nos entregó una herramienta, nos entregó una estrategia. Transformaron nuestra forma de operar y, como resultado, nuestra rentabilidad.",
    name: "Ana García",
    role: "CEO, Journeest Hotel Group",
    avatar: "https://via.placeholder.com/150/0000FF/FFFFFF?text=AG", // Placeholder para avatar
    companyLogo: "https://via.placeholder.com/100x50/000000/FFFFFF?text=Logo1" // Placeholder para logo de empresa
  },
  {
    quote: "La profundidad de su análisis y la calidad de su ejecución técnica están en otro nivel. Son verdaderos socios de crecimiento.",
    name: "Carlos Rodríguez",
    role: "Director de Innovación, E-Commerce Innovators",
    avatar: "https://via.placeholder.com/150/FF0000/FFFFFF?text=CR",
    companyLogo: "https://via.placeholder.com/100x50/000000/FFFFFF?text=Logo2"
  },
  {
    quote: "Liberar a nuestro equipo de las tareas repetitivas nos ha permitido volver a centrarnos en la hospitalidad. El impacto en la moral y en la satisfacción del cliente ha sido inmenso.",
    name: "Laura Martínez",
    role: "Directora de Operaciones, Cadena Hotelera Sol",
    avatar: "https://via.placeholder.com/150/00FF00/FFFFFF?text=LM",
    companyLogo: "https://via.placeholder.com/100x50/000000/FFFFFF?text=Logo3"
  },
];

const TestimonialsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>La Voz de Nuestros Socios</h2>
      <div className={styles.marqueeContainer}>
        <motion.div
          className={styles.marqueeContent}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.authorInfo}>
                <img src={testimonial.avatar} alt={testimonial.name} className={styles.authorAvatar} />
                <div>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
              <img src={testimonial.companyLogo} alt="Company Logo" className={styles.companyLogo} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;