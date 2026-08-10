import { motion } from 'framer-motion';
import { Home, Layers, Sun, Maximize2, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Sun,
    title: 'פרגולות אלומיניום',
    desc: 'הצללה חכמה ומעוצבת המשתלבת באופן מושלם עם מבנה הבית, עמידה בפני כל תנאי מזג האוויר.',
    image: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108513/%D7%97%D7%A6%D7%A81_rt4v3c.jpg'
  },
  {
    icon: Maximize2,
    title: 'חלונות אלומיניום',
    desc: 'מערכות חלונות דור חדש, מינימליסטיות ויוקרתיות, המאפשרות כניסת אור טבעי מקסימלית.',
    image: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108514/%D7%97%D7%A6%D7%A83_vjgh94.jpg'
  },
  {
    icon: Layers,
    title: 'מערכת זכוכית פנורמית',
    desc: 'שליטה חכמה ואלגנטית על התאורה והפרטיות שלכם, עם מנועים שקטים ואמינים מתקדמים.',
    image: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108515/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA1_nmjgsv.jpg'
  },
  {
    icon: Home,
    title: 'מרפסות וזכוכיות',
    desc: 'סגירות חורף ומעקות זכוכית ברמות הבטיחות והגימור הגבוהות ביותר לאסתטיקה נקייה.',
    image: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108518/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA4_np2jng.jpg'
  },
  {
    icon: Box,
    title: 'עבודות בהתאמה אישית',
    desc: 'תכנון וייצור אלמנטים ייחודיים מאלומיניום לפי חזון האדריכל והלקוח, ללא גבולות עיצוביים.',
    image: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108617/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA5_dl3oei.jpg'
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 relative bg-primary-dark">
      {/* Texture */}
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-gold font-medium tracking-widest text-sm mb-3 block">תחומי התמחות</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">פתרונות מקיפים לשלמות אדריכלית</h2>
          <p className="text-gray-300 text-lg">אנו מספקים מעטפת מלאה של פתרונות אלומיניום, החל מתכנון הנדסי מוקפד ועד להתקנה ברמות הגימור הגבוהות ביותר.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-none overflow-hidden glass-dark transition-all duration-500 hover:-translate-y-[2px]"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent z-10 transition-colors group-active:from-primary-dark/80 group-hover:from-primary-dark/80 lg:group-hover:from-primary-dark/30 lg:group-active:from-primary-dark/30" />
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-700 group-active:blur-[1px] group-hover:blur-[1px] lg:group-hover:blur-none lg:group-active:blur-none group-active:brightness-75 group-hover:brightness-75 lg:group-hover:brightness-100 lg:group-active:brightness-100" />
                </div>
                
                {/* Content */}
                <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[320px]">
                  <div className="w-12 h-12 rounded-none mb-6 flex items-center text-gold group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
