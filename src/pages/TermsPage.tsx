import React from 'react';
import { motion } from 'motion/react';
import { FileText, AlertCircle, Info } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export function TermsPage() {
  useSEO({
    title: 'תנאי שימוש',
    description: 'תנאי השימוש באתר פאר אלומיניום. אנא קראו בעיון לפני השימוש בשירותי האתר.',
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
              <FileText className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">תנאי שימוש</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">1. הסכמה לתנאים</h2>
              <p>
                השימוש באתר פאר אלומיניום (להלן: "האתר") כפוף לתנאי השימוש המפורטים להלן. גלישה באתר ושימוש בשירותיו מעידים על הסכמתך לתנאים אלו במלואם. אם אינך מסכים לתנאים אלו, הנך מתבקש לחדול מהשימוש באתר.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">2. קניין רוחני</h2>
              <p>
                כל התכנים המופיעים באתר, לרבות טקסטים, תמונות, לוגואים, עיצובים וגרפיקה, הם רכושה הבלעדי של חברת פאר אלומיניום והם מוגנים על פי חוקי זכויות יוצרים. אין להעתיק, להפיץ, לשכפל או להשתמש בתכנים אלו ללא קבלת אישור מפורש ובכתב מהחברה.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">3. השימוש באתר</h2>
              <p>
                השימוש באתר מותר למטרות פרטיות ואישיות בלבד. הנך מתחייב שלא לעשות כל שימוש המזיק לאתר, לשרתים או לרשתות המחוברים אליו. חל איסור מוחלט על שימוש במידע מהאתר לצרכים מסחריים מתחרים.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">4. הגבלת אחריות</h2>
              <p>
                החברה עושה מאמץ להבטיח כי המידע באתר יהיה מדויק ומעודכן. עם זאת, התכנים מוגשים כמות שהם (AS-IS) והחברה אינה אחראית לטעויות או אי-דיוקים. השימוש באתר ובמידע שבו הוא על אחריות המשתמש בלבד.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">5. קישורים חיצוניים</h2>
              <p>
                האתר עשוי להכיל קישורים לאתרים אחרים שאינם מופעלים על ידי החברה. החברה אינה אחראית לתוכן אתרים אלו או למדיניות הפרטיות שלהם.
              </p>
            </section>

            <div className="bg-gold/5 p-6 border border-gold/20 rounded-xl flex items-start gap-4">
              <Info className="w-6 h-6 text-gold shrink-0 mt-1" />
              <p className="text-sm">
                החברה שומרת לעצמה את הזכות לעדכן או לשנות את תנאי השימוש מעת לעת ללא הודעה מוקדמת. מומלץ לעיין בדף זה מעת לעת.
              </p>
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
