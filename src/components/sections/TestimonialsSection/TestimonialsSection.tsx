import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "Futurlogix no nos entregó una herramienta, nos entregó una estrategia. Transformaron nuestra forma de operar y, como resultado, nuestra rentabilidad.",
    name: "Ana García",
    role: "CEO, Journeest Hotel Group"
  },
  {
    quote: "La profundidad de su análisis y la calidad de su ejecución técnica están en otro nivel. Son verdaderos socios de crecimiento.",
    name: "Carlos Rodríguez",
    role: "Director de Innovación, E-Commerce Innovators"
  },
  {
    quote: "Liberar a nuestro equipo de las tareas repetitivas nos ha permitido volver a centrarnos en la hospitalidad. El impacto en la moral y en la satisfacción del cliente ha sido inmenso.",
    name: "Laura Martínez",
    role: "Directora de Operaciones, Cadena Hotelera Sol"
  },
  // Duplicamos para un efecto de bucle infinito
  {
    quote: "Futurlogix no nos entregó una herramienta, nos entregó una estrategia. Transformaron nuestra forma de operar y, como resultado, nuestra rentabilidad.",
    name: "Ana García",
    role: "CEO, Journeest Hotel Group"
  },
  {
    quote: "La profundidad de su análisis y la calidad de su ejecución técnica están en otro nivel. Son verdaderos socios de crecimiento.",
    name: "Carlos Rodríguez",
    role: "Director de Innovación, E-Commerce Innovators"
  },
  {
    quote: "Liberar a nuestro equipo de las tareas repetitivas nos ha permitido volver a centrarnos en la hospitalidad. El impacto en la moral y en la satisfacción del cliente ha sido inmenso.",
    name: "Laura Martínez",
    role: "Directora de Operaciones, Cadena Hotelera Sol"
  },
];

const TestimonialsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>La Voz de Nuestros Socios</h2>
      <div className={styles.marqueeContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}></div>
              <div>
                <p className={styles.authorName}>{testimonial.name}</p>
                <p className={styles.authorRole}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;