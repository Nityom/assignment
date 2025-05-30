import HeaderSection from '../components/HeaderSection';
import HeroSection from '../components/HeroSection';
import ClientLogoSection from '../components/ClientLogoSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import TechVisionSection from '../components/TechVisionSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import ToolsSection from '../components/ToolsSection';

function Home() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection />
      <ClientLogoSection />
      <ServicesSection />
      <ToolsSection/>
      <FeaturesSection />
      <TechVisionSection />
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;
