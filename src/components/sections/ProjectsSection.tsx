import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['הכל', 'פרגולות', 'פרגולות חשמליות', 'חלונות', 'תריסים', 'מרפסות', 'גדרות ושערים', 'מיוחדות'];

const projectsData = [
  { id: 1, category: 'פרגולות', img: 'https://i.postimg.cc/nrwSjxPG/583079496-122160372482679723-8997100608699941802-n.jpg', title: 'פרגולת יוקרה חשמלית' },
  { id: 2, category: 'פרגולות', img: 'https://i.postimg.cc/hGqy7p2d/583932089-122160372458679723-4104645901272161099-n.jpg', title: 'פתרון הצללה מתקדם' },
  { id: 3, category: 'פרגולות', img: 'https://i.postimg.cc/Mp00gxYZ/581959666-122160372410679723-7349740087872557549-n.jpg', title: 'פרויקט פנטהאוז' },
  { id: 4, category: 'חלונות', img: 'https://i.postimg.cc/dQzxYsG3/470679246-122106848918679723-4757180027799105274-n.jpg', title: 'מערכות מינימליסטיות' },
  { id: 5, category: 'מרפסות', img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108515/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA1_nmjgsv.jpg', title: 'סגירת מרפסת מעוצבת' },
  { id: 6, category: 'מרפסות', img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108518/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA4_np2jng.jpg', title: 'מרפסת שמש יוקרתית' },
  { id: 7, category: ['מרפסות', 'פרגולות'], img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108617/%D7%9E%D7%A8%D7%A4%D7%A1%D7%AA5_dl3oei.jpg', title: 'פתרונות אלומיניום למרפסות' },
  { id: 8, category: 'מיוחדות', img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108513/%D7%97%D7%A6%D7%A81_rt4v3c.jpg', title: 'עיצוב חצר מודרנית' },
  { id: 9, category: 'מיוחדות', img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1779108514/%D7%97%D7%A6%D7%A83_vjgh94.jpg', title: 'פרויקט גינה יוקרתי' },
  { id: 10, category: 'פרגולות', img: 'https://i.postimg.cc/0NFpwQkQ/514366137-122147981060679723-1541847750303197058-n.jpg', title: 'חלונות בפרופיל בלגי' },
  { id: 11, category: 'פרגולות', img: 'https://i.postimg.cc/SRNC0zDs/495988777-122138057150679723-6648381721390118404-n.jpg', title: 'תריסי אור מעוצבים' },
  { id: 12, category: 'מיוחדות', img: 'https://i.postimg.cc/gJG6RZ9H/480775738-122124960068679723-3622081260069768387-n.jpg', title: 'חיפוי קירות אלומיניום' },
  { id: 13, category: 'פרגולות', img: 'https://i.postimg.cc/W481BYKb/475760483-122122143896679723-8868963865258193764-n.jpg', title: 'מפתחי זכוכית גדולים' },
  { id: 14, category: ['מרפסות', 'תריסים'], img: 'https://i.postimg.cc/tC32GhX2/535541656-122151599672679723-824718632320376572-n.jpg', title: 'סגירת מרפסת יוקרתית' },
  { id: 15, category: ['מרפסות', 'תריסים'], img: 'https://i.postimg.cc/NFh7W0ZY/535074473-122151599636679723-5774521590908551228-n.jpg', title: 'פתרון אלומיניום למרפסת' },
  { id: 16, category: 'פרגולות', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814503/35098410-d3e0-4b2d-83e1-cd418b916158_l3ld1v.jpg', title: 'התקנת פרגולה' },
  { id: 17, category: 'חלונות', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814868/b2b1572b-8cf8-47a6-9dc7-ed60eb9c6617_p1javd.jpg', title: 'התקנת חלונות' },
  { id: 18, category: 'חלונות', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814849/1e724b8c-bf25-4e68-84d7-bb2ca4c6d38f_erkhbz.jpg', title: 'עיצוב חלונות אלומיניום' },
  { id: 19, category: ['חלונות', 'מרפסות', 'פרגולות חשמליות'], img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814522/7015f4ab-d75c-4ad4-a404-3927bfc131de_rsuwix.jpg', title: 'שילוב עבודות אלומיניום' },
  { id: 20, category: 'פרגולות חשמליות', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814445/17d0fcfc-3eea-411f-a266-183f4ec818d5_f4adcm.jpg', title: 'פרגולה חשמלית מעוצבת' },
  { id: 21, category: 'פרגולות חשמליות', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814417/72b04116-0964-4327-ad52-0ede8c5fb6c4_fpzuwb.jpg', title: 'פרגולת אלומיניום חשמלית' },
  { id: 22, category: 'פרגולות חשמליות', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814376/4ac41562-799a-4788-8f78-1dc9fe680f48_fpagfz.jpg', title: 'פרויקט פרגולה חשמלית' },
  { id: 23, category: 'גדרות ושערים', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814350/b8efe44d-60d7-479e-9b60-b0b24ab199c8_n2arei.jpg', title: 'גדר אלומיניום מעוצבת' },
  { id: 24, category: 'גדרות ושערים', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814335/f72fb8b5-e6b8-4922-af45-a36ea7afaa8d_bqriac.jpg', title: 'שער חשמלי מאלומיניום' },
  { id: 25, category: 'גדרות ושערים', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814321/34b953d6-4070-4ff8-97bc-1d53ffd51fcb_wrlj59.jpg', title: 'שער חניה יוקרתי' },
  { id: 26, category: 'גדרות ושערים', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779814281/cbc81bd2-a77e-4436-9005-346e98d38bec_xvsahp.jpg', title: 'גדר מעוצבת משולבת' },
  { id: 27, category: 'גדרות ושערים', img: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1779869423/ed3c6b1c-3982-46ba-884f-c0afcf01706a_pwm3tz.jpg', title: 'שער חניה מעוצב' },
];

export function ProjectsSection({ preview = false }: { preview?: boolean }) {
  const [activeTab, setActiveTab] = useState('הכל');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeTab === 'הכל' 
    ? projectsData 
    : projectsData.filter(p => Array.isArray(p.category) ? p.category.includes(activeTab) : p.category === activeTab);

  const displayProjects = preview ? projectsData.slice(0, 4) : filteredProjects;

  return (
    <section className={cn(
      "pb-24 md:pb-32 bg-primary-dark",
      preview ? "pt-12 md:pt-32" : "pt-28 md:pt-40"
    )}>
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <div className="flex flex-col md:items-center md:text-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-gold font-medium tracking-widest text-sm mb-3 hidden md:block">גלריית השראות</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-6">עבודות נבחרות</h2>
            <p className="text-gray-300 text-base sm:text-lg">טעימה קטנה מהפרויקטים היוקרתיים שביצענו ברחבי הארץ. איכות ניכרת בפרטים הקטנים.</p>
          </motion.div>
          
          {preview && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/projects" className="inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-gold hover:text-white hover:border-white transition-colors duration-300 font-medium">
                צפה בכל הפרויקטים
              </Link>
            </motion.div>
          )}
        </div>

        {/* Filter Tabs */}
        {!preview && (
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 border",
                  activeTab === cat 
                    ? "bg-gold border-gold text-white shadow-lg" 
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-gold/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <motion.div 
          layout
          className={cn(
            "grid gap-4 sm:gap-6",
            preview ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3"
          )}
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative cursor-pointer rounded-none overflow-hidden aspect-[4/3] bg-primary border border-white/5 hover:border-gold/30 transition-colors"
                onClick={() => setSelectedImage(project.img)}
              >
                <img 
                   src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-sm font-medium mb-2 block">
                      {Array.isArray(project.category) ? project.category.join(' / ') : project.category}
                    </span>
                    <h4 className="text-white font-heading text-xl font-medium flex justify-between items-center">
                      {project.title}
                      <ZoomIn className="w-5 h-5 text-gray-400" />
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-primary-dark/95"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full glass text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage}
              alt="Project Full View"
              className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
