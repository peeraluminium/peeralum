import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Mail } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export function PrivacyPage() {
  useSEO({
    title: 'מדיניות פרטיות',
    description: 'מדיניות הפרטיות של אתר פאר אלומיניום. גלו מידע על האופן בו אנו אוספים ושומרים על פרטיותכם.',
  });

  return (
    <main className="pt-32 pb-20 bg-primary-dark min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark p-8 md:p-12 border border-gold/20"
          dir="rtl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">מדיניות פרטיות</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">1. כללי</h2>
              <p>
                פאר אלומיניום (להלן: "החברה") מכבדת את פרטיות המשתמשים באתר האינטרנט שהיא מנהלת ומפעילה. מסמך זה מפרט את האופן בו אנו אוספים ומשתמשים במידע הנמסר לנו.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">2. איסוף מידע</h2>
              <p>
                אנו עשויים לאסוף מידע הנמסר על ידך באופן יזום בעת מילוי טפסים באתר (כגון שם, טלפון, ודוא"ל) לצורך יצירת קשר ומתן שירות. כמו כן, האתר עשוי לאסוף מידע סטטיסטי אנונימי על הרגלי הגלישה שלך לצרכי ניתוח ושיפור חווית המשתמש.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">3. שימוש במידע</h2>
              <p>
                השימוש במידע שנאסף ייעשה רק על פי מדיניות זו או על פי הוראות כל דין, וזאת למטרות הבאות:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>ליצירת קשר עמך בעקבות פנייתך.</li>
                <li>לשיפור, שינוי ושידרוג חווית השימוש באתר.</li>
                <li>לצרכי שירות לקוחות וניהול הפרויקט שלך.</li>
                <li>למשלוח מידע שיווקי או פרסומי (רק במידה וניתנה הסכמתך המפורשת).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">4. עוגיות (Cookies)</h2>
              <p>
                האתר משתמש ב"עוגיות" לצורך תפעולו השוטף והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר, לאימות פרטים, וכדי להתאים את האתר להעדפותיך האישיות.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">5. אבטחת מידע</h2>
              <p>
                החברה מיישמת מערכות ונהלים עדכניים לאבטחת מידע כדי לצמצם את הסיכונים לחדירה בלתי-מורשית, אך אינה יכולה להבטיח חסינות מוחלטת מפני פריצות ושיבושים.
              </p>
            </section>

            <div className="glass p-6 border border-white/10 rounded-xl flex items-center gap-4">
              <Mail className="w-6 h-6 text-gold shrink-0" />
              <div>
                <p className="font-bold text-white">שאלות בנושא פרטיות?</p>
                <p>ניתן לפנות אלינו בדוא"ל: peeraluminium@gmail.com</p>
              </div>
            </div>

            <p className="text-sm pt-8 border-t border-white/10 italic">
              עדכון אחרון: מאי 2024
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
