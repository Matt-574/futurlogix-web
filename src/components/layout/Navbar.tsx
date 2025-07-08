import {
  NavProvider,
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ResizableNavbar";

const navItems = [
  { name: "Capacidades", href: "/capacidades" },
  { name: "Casos de Éxito", href: "/casos-de-exito" },
  { name: "Metodología", href: "/metodologia" },
  { name: "Visión", href: "/vision" },
];

const cta = { name: "Iniciar Conversación", href: "/contacto" };

const NewNavbar = () => {
  return (
    <NavProvider>
      <Navbar>
        {/* --- Navegación de Escritorio --- */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton to={cta.href}>{cta.name}</NavbarButton>
        </NavBody>

        {/* --- Navegación Móvil --- */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle />
          </MobileNavHeader>
          <MobileNavMenu items={navItems} cta={cta} />
        </MobileNav>
      </Navbar>
    </NavProvider>
  );
};

export default NewNavbar;