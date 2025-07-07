import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Capacidades", href: "/capacidades" },
  { name: "Casos de Éxito", href: "/casos-de-exito" },
  { name: "Metodología", href: "/metodologia" },
  { name: "Visión", href: "/vision" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={styles.navbar}
    >
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        {/* --- Navegación de Escritorio --- */}
        <div className={styles.desktopNav}>
            <div className={styles.navItems}>
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
        </div>

        <div className={styles.desktopNav}>
            <NavLink to="/contacto" className={styles.ctaButton}>
              Iniciar Conversación
            </NavLink>
        </div>

        {/* --- Botón de Menú Móvil --- */}
        <div className={styles.mobileMenuButton}>
          <button onClick={toggleMobileMenu} type="button">
            {isMobileMenuOpen ? (
              <svg className="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Menú Desplegable Móvil --- */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuNav}>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className={styles.mobileCtaContainer}>
             <NavLink
                to="/contacto"
                onClick={closeMobileMenu}
                className={`${styles.ctaButton} ${styles.mobileCtaButton}`}
             >
                Iniciar Conversación
             </NavLink>
          </div>
        </div>
      )}
    </motion.nav>
  );
};
export default Navbar;
