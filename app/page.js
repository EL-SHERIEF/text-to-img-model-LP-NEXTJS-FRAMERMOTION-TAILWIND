import NavigationBar from './components/NavigationBar';
import HeroContent from './components/HeroContent';
import FloatingMockups from './components/FloatingMockups';
import MarqueeLogos from './components/MarqueeLogos';
import ProductOverview from './components/ProductOverview';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import TrialSection from './components/TrialSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030a11] text-white overflow-hidden">

      {/* Content */}
      <div className="relative">
        <NavigationBar />

        <section className="relative pt-44 pb-32">
            <HeroContent />
            <FloatingMockups />
        </section>

        {/* Logos Section */}
        <section className="relative z-10 pb-32">
          <MarqueeLogos />
        </section>

        {/* Product Overview Section */}
        <section className="relative z-10">
          <ProductOverview />
        </section>

        {/* Features Section */}
        <section className="relative z-10">
          <FeaturesSection />
        </section>

        {/* Benefits Section */}
        <section className="relative z-10">
          <BenefitsSection />
        </section>

        {/* Pricing Section */}
        <section className="relative z-10">
          <PricingSection />
        </section>

        {/* Testimonials Section */}
        <section className="relative z-10">
          <TestimonialsSection />
        </section>

        {/* Trial Section */}
        <section className="relative z-10">
          <TrialSection />
        </section>

        {/* FAQ Section */}
        <section className="relative z-10">
          <FAQSection />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
