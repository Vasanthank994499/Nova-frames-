import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TeamCarousel from '@/components/TeamCarousel';
import VideoShowcase from '@/components/VideoShowcase';
import Metrics from '@/components/Metrics';
import Leadership from '@/components/Leadership';
import ClientMarquee from '@/components/ClientMarquee';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TeamCarousel />
      <VideoShowcase />
      <Metrics />
      <Leadership />
      <ClientMarquee />
    </>
  );
}
