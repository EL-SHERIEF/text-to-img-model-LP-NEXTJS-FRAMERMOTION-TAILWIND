import NavigationBar from './components/NavigationBar';
import HeroContent from './components/HeroContent';
import FloatingMockups from './components/FloatingMockups';
import GlowEffect from './components/GlowEffect';
import MarqueeLogos from './components/MarqueeLogos';
import ProductOverview from './components/ProductOverview';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <GlowEffect />

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <NavigationBar />

        {/* Hero Section */}
        <section className="relative pt-40 pb-32">
          <div className="relative z-10">
            <HeroContent />
          </div>
          <div className="absolute inset-0 z-0">
            <FloatingMockups />
          </div>
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
      </div>
    </main>
  );
}
