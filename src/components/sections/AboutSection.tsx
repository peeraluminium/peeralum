import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="pt-24 pb-12 md:py-24 bg-primary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square relative flex items-center justify-center">
               <img 
                 src="https://i.postimg.cc/0NFpwQkQ/514366137-122147981060679723-1541847750303197058-n.jpg" 
                 alt="Professional aluminum work" 
                 className="w-full h-full object-cover relative z-10 shadow-2xl"
               />
               <div className="absolute -bottom-10 -right-10 bg-gold p-8 hidden md:block z-20 shadow-xl">
                 <p className="text-white font-bold text-4xl mb-1">10+</p>
                 <p className="text-white text-sm font-medium">שנות ניסיון</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:text-center lg:text-center"
          >
            <span className="text-gold font-medium tracking-widest text-sm mb-4 block">מי אנחנו</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              המומחים שלכם לפתרונות אלומיניום
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl md:mx-auto">
              פאר אלומיניום היא חברה בעלת מוניטין של עשרות שנים בתכנון, ייצור והתקנה של מערכות אלומיניום מתקדמות. אנו שמים דגש על איכות בלתי מתפשרת, אסתטיקה מודרנית ושירות אישי לכל לקוח.
            </p>
            
            <ul className="space-y-4 mb-10 inline-block text-right">
              {[
                'ידע הנדסי וטכני נרחב',
                'שימוש בחומרים האיכותיים ביותר',
                'ליווי אישי משלב התכנון ועד הגמר',
                'עמידה קפדנית בלוחות זמנים'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="block pt-4 mx-auto">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-3 text-gold font-bold hover:gap-5 transition-all duration-300 group"
              >
                <span>קראו עוד עלינו</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
