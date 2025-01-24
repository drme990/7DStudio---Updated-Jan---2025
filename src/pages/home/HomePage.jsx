import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

/* Import the sections */
import HeroSection from './sections/HeroSection';
import CopiedSection from './sections/CopiedSection';
import LogosSection from './sections/LogosSection';
import ProjectsSection from './sections/ProjectsSection';
import CounterSection from './sections/CounterSection';
import ProcessSection from './sections/ProcessSection';
import BenefitsSection from './sections/BenefitsSection';
import ServicesSection from './sections/ServicesSection';
import ComparisonSection from './sections/ComparisonSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSections from './sections/PricingSections';
import FrequentlySection from './sections/FrequentlySection';
import TakeAction from './sections/TakeAction';

/* Import the components */
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Glow from '../../components/Glow';
import GoBackTop from '../../components/GoBackTop';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get('scrollTo');

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80,
      });
    }
  }, [location]);

  return (
    <div className="relative pt-20 md:pt-36 overflow-x-hidden">
      <Helmet>
        <title>Seven Design Studio | Luxury Logo & Branding for High-End Businesses in GCC</title>
        <meta
          name="description"
          content="Seven Design Studio specializes in creating premium logo designs and luxury branding for high-end businesses in Saudi Arabia, UAE, Qatar, and GCC. We turn simple concepts into iconic brands. Elevate your brand with us."
        />
        <meta
          name="keywords"
          content="Luxury logo design, Premium branding agency, High-end brand identity, Logo design studio in GCC, Luxury branding in Saudi Arabia, Iconic brand design, Professional logo design, Branding for high-end businesses, Creative logo design in UAE, Corporate branding in Qatar, تصميم لوجو فاخر, تصميم هوية بصرية للفئة العليا, تصميم براند في الخليج, استوديو تصميم لوجو في السعودية, تصميم هوية بصرية فاخرة, تصميم لوجو في دبي, خدمات تصميم العلامات التجارية, تصميم لوجو احترافي, تصميم براند للشركات الراقية,  تصميم لوجو في قطر"
        />
        <meta name="author" content="Seven Design Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Header />
      <HeroSection />
      <GoBackTop />
      <div className="grid-bg">
        <CopiedSection />
        <LogosSection />
        <ProjectsSection />
        <CounterSection />
        <ProcessSection />
        <BenefitsSection />
        <ServicesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <PricingSections />
        <FrequentlySection />
        <TakeAction />
      </div>
      <div className="h-8 md:h-16 z-0 grid-bg">
        <Glow
          className="absolute bottom-[600px] md:bottom-[450px] translate-y-full"
          isMoving={false}
          shrink={true}
        />
      </div>
      <div className="grid-bg">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
