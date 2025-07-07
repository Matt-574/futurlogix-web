import CapabilitiesExplorer from '../components/sections/CapabilitiesExplorer/CapabilitiesExplorer';
import TechStack from '../components/sections/TechStack/TechStack';
// Importaremos más secciones aquí si es necesario, como un CTA final.

const CapacidadesPage = () => {
  return (
    <div className="pt-20 text-white">
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Capacidades para Liderar el Futuro
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          No ofrecemos 'servicios'. Ofrecemos capacidades de transformación. Cada una es un motor diseñado para integrarse, potenciar las demás y generar un impacto compuesto en tu negocio.
        </p>
      </header>

      <main className="py-16 px-4">
        <CapabilitiesExplorer />
      </main>

      <TechStack />
      
      {/* Aquí podríamos añadir una sección de CTA final si fuera necesario */}
    </div>
  );
};

export default CapacidadesPage;
