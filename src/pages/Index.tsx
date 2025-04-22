import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AIBuddy } from '@/components/ai-buddy';
import { Preloader } from '@/components/preloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
          <AIBuddy />
        </>
      )}
    </>
  );
};

export default Index;
