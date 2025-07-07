import CaseStudiesGallery from '../components/sections/CaseStudiesGallery/CaseStudiesGallery';
import TestimonialsSection from '../components/sections/TestimonialsSection/TestimonialsSection';

const CasosDeExitoPage = () => {
  return (
    <div className="pt-20 text-white">
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Resultados, no Promesas
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          Nuestra mayor satisfacción es el crecimiento medible de nuestros socios. Explora cómo hemos transformado negocios a través de la inteligencia y la ejecución.
        </p>
      </header>

      <main className="py-16 px-4">
        <CaseStudiesGallery />
      </main>

      <TestimonialsSection />
    </div>
  );
};

export default CasosDeExitoPage;
