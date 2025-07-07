import HeroSection from '../components/sections/HeroSection/HeroSection';
import CapabilitiesSection from '../components/sections/CapabilitiesSection/CapabilitiesSection';
import MethodologyIntroSection from '../components/sections/MethodologyIntroSection/MethodologyIntroSection';
import ShowcaseSection from '../components/sections/ShowcaseSection/ShowcaseSection';
import ClosingSection from '../components/sections/ClosingSection/ClosingSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CapabilitiesSection />
      <MethodologyIntroSection />
      <ShowcaseSection />
      <ClosingSection />
    </div>
  );
};

export default HomePage;
