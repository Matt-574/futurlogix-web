import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyHero from '../components/sections/CaseStudyHero/CaseStudyHero';
import CaseStudyContext from '../components/sections/CaseStudyContext/CaseStudyContext';
import CaseStudySolution from '../components/sections/CaseStudySolution/CaseStudySolution';
import CaseStudyImpact from '../components/sections/CaseStudyImpact/CaseStudyImpact';
import CaseStudyTestimonial from '../components/sections/CaseStudyTestimonial/CaseStudyTestimonial';
import CaseStudyCta from '../components/sections/CaseStudyCta/CaseStudyCta';

// Datos de ejemplo para los casos de éxito
const caseStudiesData = {
  "journeest-hotel-group": {
    hero: {
      title: "Reinventando la experiencia del huésped para un líder hotelero",
      resultsSummary: "+25% Ingresos Directos, -40% Tareas Manuales, +15% Satisfacción Cliente",
      clientLogo: "https://via.placeholder.com/100x50/FFFFFF/000000?text=Journeest+Logo",
      backgroundImage: "https://via.placeholder.com/1920x1080/0A0A0A/FFFFFF?text=Hotel+Background",
    },
    context: {
      narrativeTitle: "El Reto: Un Potencial sin Explotar.",
      narrativeContent: "Antes de Futurlogix, Journeest enfrentaba desafíos significativos en la gestión de sus operaciones. La falta de automatización y la dispersión de datos generaban ineficiencias, limitando su capacidad de escalar y ofrecer una experiencia de cliente consistente. Sus sistemas heredados no permitían una visión 360 del huésped, lo que resultaba en oportunidades perdidas y una alta carga de trabajo manual para su equipo.",
      clientData: {
        client: "Journeest Hotel Group",
        industry: "Turismo y Hospitalidad",
        services: [
          "IA & Automatización",
          "Estrategia y Arquitectura de Datos",
          "Desarrollo de Software a Medida",
        ],
      },
    },
    solution: {
      solutionTitle: "Nuestra Respuesta: Una Solución Integral.",
      solutionSteps: [
        {
          title: "Diagnóstico Profundo",
          description: "Realizamos un análisis exhaustivo de sus operaciones, identificando cuellos de botella y oportunidades de optimización. Esto incluyó auditorías de sistemas, flujos de trabajo y entrevistas con el personal clave.",
          image: "https://via.placeholder.com/800x600/0A0A0A/FFFFFF?text=Diagrama+Diagnostico",
        },
        {
          title: "Diseño de Plataforma a Medida",
          description: "Diseñamos y construimos una plataforma centralizada que integraba todos sus sistemas, desde la gestión de reservas hasta la atención al cliente. La plataforma incluía módulos de IA para automatización y personalización.",
          image: "https://via.placeholder.com/800x600/0A0A0A/FFFFFF?text=Diagrama+Plataforma",
        },
        {
          title: "Implementación y Optimización Continua",
          description: "Implementamos la solución en fases, asegurando una transición suave y minimizando interrupciones. Continuamos optimizando la plataforma basándonos en el feedback y el rendimiento, garantizando un crecimiento sostenido.",
          image: "https://via.placeholder.com/800x600/0A0A0A/FFFFFF?text=Diagrama+Optimización",
        },
      ],
    },
    impact: {
      metrics: [
        { value: "+25%", label: "Ingresos Directos" },
        { value: "-40%", label: "Tareas Manuales" },
        { value: "+15%", label: "Satisfacción Cliente" },
      ],
      dataCards: [
        {
          title: "Automatización de Procesos",
          description: "Se automatizaron el 85% de las consultas de clientes, liberando al personal para tareas de mayor valor.",
        },
        {
          title: "Visión 360 del Cliente",
          description: "La integración de datos permitió una visión unificada del cliente, mejorando la personalización de ofertas y servicios.",
        },
      ],
    },
    testimonial: {
      quote: "Futurlogix no nos entregó una herramienta, nos entregó una estrategia. Transformaron nuestra forma de operar y, como resultado, nuestra rentabilidad. La profundidad de su análisis y la calidad de su ejecución técnica están en otro nivel. Son verdaderos socios de crecimiento.",
      authorName: "Ana García",
      authorRole: "CEO, Journeest Hotel Group",
      authorAvatar: "https://via.placeholder.com/150/0000FF/FFFFFF?text=AG",
    },
    cta: {
      title: "¿Tu empresa podría ser nuestro próximo caso de éxito?",
      description: "Cada reto es una oportunidad de crecimiento. Si te sientes identificado con esta historia, hablemos de cómo podemos diseñar la tuya.",
      ctaText: "Iniciar mi Conversación Estratégica",
      ctaLink: "/contacto",
    },
  },
  // Puedes añadir más casos de éxito aquí
};

const CasoDeExitoDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudiesData[slug as keyof typeof caseStudiesData] : undefined;

  if (!caseStudy) {
    return (
      <div className="pt-20 text-white min-h-screen text-center">
        <h1 className="text-4xl font-bold">Caso de Éxito no encontrado</h1>
        <p className="text-lg mt-4">Lo sentimos, el caso de éxito que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className="pt-20 text-white">
      <CaseStudyHero
        title={caseStudy.hero.title}
        resultsSummary={caseStudy.hero.resultsSummary}
        clientLogo={caseStudy.hero.clientLogo}
        backgroundImage={caseStudy.hero.backgroundImage}
      />
      <CaseStudyContext
        narrativeTitle={caseStudy.context.narrativeTitle}
        narrativeContent={caseStudy.context.narrativeContent}
        clientData={caseStudy.context.clientData}
      />
      <CaseStudySolution
        solutionTitle={caseStudy.solution.solutionTitle}
        solutionSteps={caseStudy.solution.solutionSteps}
      />
      <CaseStudyImpact
        metrics={caseStudy.impact.metrics}
        dataCards={caseStudy.impact.dataCards}
      />
      <CaseStudyTestimonial
        quote={caseStudy.testimonial.quote}
        authorName={caseStudy.testimonial.authorName}
        authorRole={caseStudy.testimonial.authorRole}
        authorAvatar={caseStudy.testimonial.authorAvatar}
      />
      <CaseStudyCta
        title={caseStudy.cta.title}
        description={caseStudy.cta.description}
        ctaText={caseStudy.cta.ctaText}
        ctaLink={caseStudy.cta.ctaLink}
      />
    </div>
  );
};

export default CasoDeExitoDetailPage;
