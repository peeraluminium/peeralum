import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'ראשי', path: '/' },
  { name: 'שירותים', path: '/services' },
  { name: 'אודות', path: '/about' },
  { name: 'פרויקטים', path: '/projects' },
  { name: 'צור קשר', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled ? 'bg-primary-dark/95 py-3 md:py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-5 md:py-6'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="https://i.postimg.cc/SQrxhgs0/5924ebad-9cb6-41ae-8cd8-3143bd0f97c0-removalai-preview.png" 
                alt="פאר אלומיניום" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className={cn(
                "font-heading font-bold text-lg sm:text-2xl tracking-tight transition-colors duration-300",
                isScrolled ? "text-white" : "text-white"
              )}>
                פאר <span className="font-light text-gold">אלומיניום</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative text-sm font-medium transition-colors hover:text-gold"
                  >
                    <span className={cn(isActive ? 'text-gold' : 'text-white/70')}>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                        initial={false}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Contact CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:0527409149"
                className="hidden lg:flex items-center gap-2 text-sm font-medium text-white hover:text-gold transition-colors border border-white/20 hover:border-gold/50 rounded-none px-5 py-2 glass"
              >
                <Phone className="w-4 h-4" />
                <span>052-740-9149</span>
              </a>

              <button
                className="md:hidden p-2 text-white hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary-dark/95 z-[60]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-primary-dark border-r border-white/5 z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-end">
                <button
                  className="p-2 text-gray-500 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col px-8 gap-6 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-heading text-2xl font-light text-white hover:text-gold transition-colors border-b border-white/5 pb-4"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-8 mt-auto flex flex-col gap-4">
                <a
                  href="https://wa.me/972527897767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 text-gold border border-gold/30 rounded-none py-4 font-medium hover:bg-gold hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>וואטסאפ</span>
                </a>
                <a
                  href="tel:0527409149"
                  className="flex items-center justify-center gap-2 w-full bg-gold/10 text-gold border border-gold/30 rounded-none py-4 font-medium hover:bg-gold/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>052-740-9149</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
