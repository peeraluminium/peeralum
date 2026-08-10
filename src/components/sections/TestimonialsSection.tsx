import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'משפחת כהן, תל אביב',
    text: 'העבודה מול פאר אלומיניום הייתה מעולה מהרגע הראשון. הייעוץ היה מקצועי, העמידה בלוחות הזמנים הייתה מושלמת והתוצאה הסופית של המרפסת והחלונות עלתה על כל הציפיות שלנו. רמת גימור שלא רואים כל יום.',
    rating: 5
  },
  {
    id: 2,
    name: 'אדריכלית שרון לוי',
    text: 'כאדריכלית, אני דורשת שלמות בפרויקטים שלי. פאר אלומיניום הם השותפים הקבועים שלי בשנים האחרונות. הם מצליחים להוציא לפועל עיצובים מורכבים ברמת דיוק מירבית ותמיד מספקים פתרונות יצירתיים לשטח.',
    rating: 5
  },
  {
    id: 3,
    name: 'ירון בן דוד, סביון',
    text: 'התקנו פרגולה חשמלית ותריסים בכל הבית. איכות החומרים מורגשת מיד, והמנועים שקטים מאוד. הצוות שעבד כאן היה אדיב, מסודר והשאיר את המקום נקי. ממליץ בחום למי שמחפש פרימיום אמיתי.',
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 relative bg-primary overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-gold font-medium tracking-widest text-sm mb-3 block">המלצות</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">מה הלקוחות שלנו אומרים</h2>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-none glass hidden md:flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-none glass hidden md:flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden px-4 md:px-20 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative glass-dark p-8 md:p-12 rounded-none border border-gold/20 mx-auto max-w-3xl"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/20" />
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white md:text-xl font-light leading-loose mb-8">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="text-gold font-heading font-medium text-lg">
                  {testimonials[currentIndex].name}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  i === currentIndex ? "bg-gold w-8" : "bg-white/20 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
