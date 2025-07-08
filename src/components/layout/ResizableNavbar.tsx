"use client";
import React, { useState, createContext, useContext } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "./Logo"; // Asegúrate que la ruta al Logo sea correcta
import styles from "./Navbar.module.css"; // Usaremos tus estilos existentes

// --- Interfaces y Contexto ---
interface NavContextType {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};

// --- Componentes de la Navbar ---

// 1. Proveedor de Contexto
export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <NavContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }}>
      {children}
    </NavContext.Provider>
  );
};

// 2. Componente Principal de la Navbar (con lógica de scroll)
export const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 150);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={styles.navbar}
    >
      {children}
    </motion.nav>
  );
};

// 3. Contenedor del cuerpo de la Navbar
export const NavBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.navbarContainer}>{children}</div>
);

// 4. Logo
export const NavbarLogo = () => (
  <div className={styles.logoContainer}>
    <Logo />
  </div>
);

// 5. Items de Navegación (Escritorio)
interface NavItem {
  name: string;
  href: string;
}

export const NavItems: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <div className={styles.desktopNav}>
    <div className={styles.navItems}>
      {items.map((item) => (
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
);

// 6. Botón CTA (Call to Action)
export const NavbarButton: React.FC<{ to: string; children: React.ReactNode; }> = ({ to, children }) => (
    <div className={styles.desktopNav}>
        <NavLink to={to} className={styles.ctaButton}>
            {children}
        </NavLink>
    </div>
);


// --- Componentes Móviles ---

// 7. Contenedor principal para móvil
export const MobileNav: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

// 8. Cabecera del menú móvil
export const MobileNavHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={`${styles.navbarContainer} ${styles.mobileOnly}`}>
        {children}
    </div>
);

// 9. Botón para abrir/cerrar menú móvil
export const MobileNavToggle = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useNav();
  return (
    <div className={styles.mobileMenuButton}>
      <button onClick={toggleMobileMenu} type="button">
        {isMobileMenuOpen ? (
          <svg className="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>
    </div>
  );
};

// 10. Menú desplegable móvil
interface MobileNavMenuProps {
    items: NavItem[];
    cta: { name: string; href: string; };
}
export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ items, cta }) => {
    const { isMobileMenuOpen, closeMobileMenu } = useNav();

    if (!isMobileMenuOpen) return null;

    return (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuNav}>
            {items.map((item) => (
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
                to={cta.href}
                onClick={closeMobileMenu}
                className={`${styles.ctaButton} ${styles.mobileCtaButton}`}
             >
                {cta.name}
             </NavLink>
          </div>
        </div>
    )
}
