import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative">
      <Navigation onWatchReel={() => setIsVideoModalOpen(true)} />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
};

export default Index;
