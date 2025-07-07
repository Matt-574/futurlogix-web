import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from './Footer.module.css';

const navItems = [
  { name: "Capacidades", href: "/capacidades" },
  { name: "Casos de Éxito", href: "/casos-de-exito" },
  { name: "Metodología", href: "/metodologia" },
  { name: "Visión", href: "/vision" },
  { name: "Contacto", href: "/contacto" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Columna 1: Logo y Redes Sociales */}
          <div className={styles.logoAndSocial}>
            <Logo />
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Puedes añadir más redes sociales aquí */}
            </div>
          </div>

          {/* Columna 2: Enlaces de Navegación */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <div className={styles.footerLinks}>
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} className={styles.footerLink}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className={styles.footerLinks}>
              <p>Construyendo el futuro desde [Tu Ciudad/País]</p>
              <a href="mailto:partners@futurlogix.com" className={styles.footerLink}>
                partners@futurlogix.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} Futurlogix. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;