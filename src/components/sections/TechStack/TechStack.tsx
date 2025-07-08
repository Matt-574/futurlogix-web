import Logo from '../../layout/Logo';
import styles from './TechStack.module.css';

const techLogos = [
  { label: "React", src: "https://via.placeholder.com/50x50/000000/61DAFB?text=React" },
  { label: "Node.js", src: "https://via.placeholder.com/50x50/000000/68A063?text=Node" },
  { label: "Python", src: "https://via.placeholder.com/50x50/000000/3776AB?text=Python" },
  { label: "Vite", src: "https://via.placeholder.com/50x50/000000/646CFF?text=Vite" },
  { label: "AWS", src: "https://via.placeholder.com/50x50/000000/FF9900?text=AWS" },
  { label: "GCP", src: "https://via.placeholder.com/50x50/000000/4285F4?text=GCP" },
  { label: "Docker", src: "https://via.placeholder.com/50x50/000000/2496ED?text=Docker" },
  { label: "K8s", src: "https://via.placeholder.com/50x50/000000/326CE5?text=K8s" },
];

const TechStack = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Tecnología de Vanguardia como Estándar</h2>
      <div className={styles.orbitingContainer}>
        <div className={styles.centerLogo}>
          <Logo />
        </div>
        
        <div className={`${styles.orbit} ${styles.orbit1}`}>
          {techLogos.slice(0, 4).map((tech, index) => (
            <div key={index} className={`${styles.techLogo} ${styles[`techLogo${index + 1}`]}`}>
              <img src={tech.src} alt={tech.label} />
            </div>
          ))}
        </div>
        
        <div className={`${styles.orbit} ${styles.orbit2}`}>
          {techLogos.slice(4, 8).map((tech, index) => (
            <div key={index} className={`${styles.techLogo} ${styles[`techLogo${index + 5}`]}`}>
              <img src={tech.src} alt={tech.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
