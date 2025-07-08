import React from 'react';
import ContactHero from '../components/sections/ContactHero/ContactHero';
import PartnershipForm from '../components/sections/PartnershipForm/PartnershipForm';
import AlternativeContact from '../components/sections/AlternativeContact/AlternativeContact';

const ContactPage = () => {
  return (
    <div className="pt-20 text-white">
      <ContactHero
        title="Iniciemos la Conversación."
        description="No estamos buscando clientes. Estamos buscando socios para construir la próxima generación de líderes en la industria. Si compartes nuestra ambición, este es el punto de partida."
      />
      <PartnershipForm />
      <AlternativeContact />
    </div>
  );
};

export default ContactPage;