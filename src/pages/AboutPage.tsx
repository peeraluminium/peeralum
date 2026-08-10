import { motion } from 'framer-motion';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CTASection } from '@/components/sections/CTASection';
import { useSEO } from '@/hooks/useSEO';

export function AboutPage() {
  useSEO({
    title: 'אודותינו',
    description: 'פאר אלומיניום הוקמה מתוך חזון להביא סטנדרט חדש לענף האלומיניום בישראל. שילוב מדויק בין אומנות, טכנולוגיה ושירות אישי.',
    keywords: 'אודות פאר אלומיניום, חברת אלומיניום פרימיום, אלומיניום ישראל',
  });

  return (
    <>
      <section className="pt-40 pb-24 bg-primary-dark relative overflow-hidden">
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-medium tracking-widest text-sm mb-4 block">אודות החברה</span>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">המצוינות באלומיניום היא השליחות שלנו</h1>
              <div className="space-y-6 text-lg text-gray-100 leading-relaxed">
                <p>
                  פאר אלומיניום הוקמה מתוך חזון להביא סטנדרט חדש לענף האלומיניום בישראל. שילוב מדויק בין אומנות, טכנולוגיה, ושירות אישי, יוצר עבור מאות לקוחותינו חווית מגורים ברמה אחרת.
                </p>
                <p>
                  אנו מתמחים בפתרונות מעטפת אלומיניום ווזכוכית לפרויקטים יוקרתיים — החל מווילות, פנטהאוזים, ועד לעסקים ומוסדות. לאורך עשרות שנות פעילותנו, צברנו ידע הנדסי רחב המאפשר לנו לפצח כל אתגר עיצובי תוך שמירה על ביטחון ובטיחות מרבית.
                </p>
                <p className="text-white font-medium pl-6 border-l-2 border-gold pt-2 pb-2">
                  "אנו לא מתפשרים על איכות החומרים, לא מתפשרים בפיקוח על הייצור, ובוודאי שלא במהלך ההתקנה בית הלקוח."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-none overflow-hidden glass p-2"
            >
              <img 
                src="https://i.postimg.cc/0NFpwQkQ/514366137-122147981060679723-1541847750303197058-n.jpg" 
                alt="House Design" 
                className="w-full h-full object-cover rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 right-10 left-10">
                <div className="glass-dark border border-white/10 p-6 rounded-none text-center">
                  <div className="text-3xl font-heading font-bold text-gold mb-2">+10</div>
                  <div className="text-white font-medium">שנות מצוינות ומוניטין</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <CTASection />
    </>
  );
}
