import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import WhyNovaFrames from '@/components/WhyNovaFrames';
import Industries from '@/components/Industries';
import PhilosophyBanner from '@/components/PhilosophyBanner';
import Leadership from '@/components/Leadership';
import ClientMarquee from '@/components/ClientMarquee';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <Services />
      <Process />
      <CaseStudies />
      <WhyNovaFrames />
      <Industries />
      <PhilosophyBanner />
      <Leadership />
      <ClientMarquee />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
