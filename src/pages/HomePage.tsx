import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';
import { useSEO } from '@/hooks/useSEO';

export function HomePage() {
  useSEO({
    title: 'דף הבית',
    description: 'פאר אלומיניום - מומחים בעבודות אלומיניום, פרגולות חשמליות, חלונות, מרפסות, דלתות, גדרות ושערים.',
    keywords: 'פאר אלומיניום, עבודות אלומיניום, פרגולות חשמליות, חלונות אלומיניום',
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection preview />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
