import React from 'react';
import { motion } from 'motion/react';
import { Accessibility, CheckCircle2 } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export function AccessibilityPage() {
  useSEO({
    title: 'הצהרת נגישות',
    description: 'הצהרת הנגישות של אתר פאר אלומיניום. אנו מחויבים לספק חווית גלישה שוויונית לכלל הלקוחות.',
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
              <Accessibility className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">הצהרת נגישות</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">מבוא</h2>
              <p>
                בחברת פאר אלומיניום אנו רואים חשיבות עליונה בהנגשת האתר והשירותים שלנו לכלל חלקי האוכלוסייה, כולל אנשים עם מוגבלויות. אנו מאמינים כי האינטרנט צריך להיות נגיש לכולם ומחויבים לספק חווית גלישה שוויונית ומכובדת.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">רמת הנגישות</h2>
              <p>
                אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013. התאמות הנגישות בוצעו ע"פ המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך ה-WCAG2.0 הבינלאומי.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">התאמות שבוצעו באתר</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'תמיכה בניווט מקלדת מלא',
                  'אפשרות לשינוי ניגודיות צבעים',
                  'הגדלת גופן ללא פגיעה במבנה האתר',
                  'הדגשת קישורים ברורה',
                  'תמיכה בטכנולוגיות מסייעות (קוראי מסך)',
                  'מבנה היררכי נכון של כותרות ותגיות',
                  'טקסט חלופי (Alt text) לכל התמונות המשמעותיות',
                  'ביטול אנימציות והבהובים'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">דרכי פנייה ומשוב</h2>
              <p>
                למרות מאמצינו להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים שטרם הונגשו במלואם. אם נתקלתם בבעיה או שיש לכם הצעה לשיפור, נשמח לשמוע מכם.
              </p>
              <div className="glass p-6 border border-white/10 space-y-2">
                <p><strong>רכז נגישות:</strong> פאר אלומיניום</p>
                <p><strong>טלפון:</strong> 052-740-9149</p>
                <p><strong>דוא"ל:</strong> peeraluminium@gmail.com</p>
              </div>
            </section>

            <p className="text-sm pt-8 border-t border-white/10 italic">
              עדכון אחרון: מאי 2024
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
