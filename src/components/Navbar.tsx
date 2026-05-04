import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lang, Translations } from '../translations';

interface NavbarProps {
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
}

const SharkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sg" x1="5" y1="8" x2="35" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5A623" />
        <stop offset="1" stopColor="#FF6B00" />
      </linearGradient>
    </defs>
    <path
      d="M5 22C8 16 14 10 22 9L35 8L28 16L35 20L22 19L30 28L14 26L20 32L5 22Z"
      fill="url(#sg)"
    />
  </svg>
);

const Navbar = ({ lang, t, setLang }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-card rounded-none border-b border-white/8 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <SharkIcon />
          <span className="text-white font-black text-xl tracking-tight">
            Shark <span className="gradient-text">Digital</span>
          </span>
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language switcher */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-0.5">
            {(['ar', 'fr'] as Lang[]).map((l) => (
              <motion.button
                key={l}
                onClick={() => setLang(l)}
                whileTap={{ scale: 0.93 }}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  lang === l
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {l}
              </motion.button>
            ))}
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
