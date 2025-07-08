import React from 'react';
import VisionHero from '../components/sections/VisionHero/VisionHero';
import FeaturedArticle from '../components/sections/FeaturedArticle/FeaturedArticle';
import AnalysisLibrary from '../components/sections/AnalysisLibrary/AnalysisLibrary';
import SubscriptionCta from '../components/sections/SubscriptionCta/SubscriptionCta';

const VisionPage = () => {
  return (
    <div className="pt-20 text-white">
      <VisionHero
        title="Pensando en el Mañana, Hoy."
        description="El futuro no se predice, se construye. En esta sección, compartimos nuestra perspectiva sobre las fuerzas que están modelando la próxima era de los negocios."
      />
      <FeaturedArticle
        title="El Impacto de la IA Generativa en la Industria 4.0"
        description="Un análisis profundo sobre cómo la inteligencia artificial generativa está redefiniendo los modelos de negocio y las operaciones en la era de la Industria 4.0."
        link="#"
        image="https://via.placeholder.com/800x400/0A0A0A/FFFFFF?text=IA+Generativa"
      />
      <AnalysisLibrary />
      <SubscriptionCta />
    </div>
  );
};

export default VisionPage;