import React from 'react';
import MethodologyStepper from '../components/sections/MethodologyStepper/MethodologyStepper';
import CollaborationPrinciples from '../components/sections/CollaborationPrinciples/CollaborationPrinciples';
import { Link } from 'react-router-dom';

const MetodologiaPage = () => {
  return (
    <div className="pt-20 text-white">
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          El Éxito no es un Accidente. Es un Proceso.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          La innovación disruptiva requiere más que tecnología brillante; exige una metodología rigurosa. Nuestro proceso está diseñado para minimizar el riesgo, maximizar la colaboración y garantizar que cada acción esté alineada con tus objetivos de negocio.
        </p>
      </header>

      <main>
        <MethodologyStepper />
        <CollaborationPrinciples />
      </main>

      <section className="text-center py-24 px-4">
        <h2 className="text-3xl font-bold mb-4">¿Listo para iniciar el proceso?</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          La transformación comienza con un solo paso. Nuestro diagnóstico estratégico es el punto de partida para un partnership que redefinirá tu negocio.
        </p>
        <Link 
          to="/contacto" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Iniciar mi Diagnóstico
        </Link>
      </section>
    </div>
  );
};

export default MetodologiaPage;
