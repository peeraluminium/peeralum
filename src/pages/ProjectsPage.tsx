import { motion } from 'framer-motion';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CTASection } from '@/components/sections/CTASection';
import { useSEO } from '@/hooks/useSEO';

export function ProjectsPage() {
  useSEO({
    title: 'פרויקטים',
    description: 'הגלריה של פאר אלומיניום - מגוון פרויקטים של עבודות אלומיניום הכוללים פרגולות, מרפסות, דלתות, חלונות ועוד.',
    keywords: 'פרויקטים באלומיניום, גלרית עבודות אלומיניום, עיצוב אלומיניום',
  });

  return (
    <>
      <ProjectsSection preview={false} />

      <CTASection />
    </>
  );
}
