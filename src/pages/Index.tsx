import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesBar from "../components/FeaturesBar";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesBar />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
