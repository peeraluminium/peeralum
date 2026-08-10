import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
        <img 
          src="https://i.postimg.cc/gJG6RZ9H/480775738-122124960068679723-3622081260069768387-n.jpg" 
          alt="פתרונות אלומיניום" 
          className="w-full h-full object-cover object-center shadow-inner"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <div className="flex flex-col items-start md:items-center justify-center max-w-4xl mx-auto md:text-center text-right">
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            פתרונות אלומיניום ברמה אחרת.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed md:mx-auto text-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            תכנון וביצוע של פרגולות, חלונות, תריסים ומערכות אלומיניום מתקדמות המשלבות טכנולוגיה עילית עם עיצוב פרימיום.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto pt-4 md:justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              to="/contact" 
              className="group relative flex items-center justify-center gap-3 bg-primary-dark border border-white/20 text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 shadow-lg hover:bg-primary transition-all duration-300"
            >
              <span className="relative z-10">לקבלת הצעת מחיר</span>
            </Link>
            
            <Link 
              to="/projects" 
              className="group flex items-center justify-center gap-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium px-6 py-3.5 sm:px-8 sm:py-4 transition-all duration-300 shadow-lg"
            >
              <span>צפייה בתיק עבודות</span>
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
