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
