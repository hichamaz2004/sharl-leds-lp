import { useState, useEffect } from 'react';
import { Lang, Translations, translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogosStrip from './components/LogosStrip';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import ContactForm from './components/ContactForm';

export interface SectionProps {
  lang: Lang;
  t: Translations;
}

function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const props: SectionProps = { lang, t };

  return (
    <div
      className="bg-shark-bg min-h-screen overflow-x-hidden"
      style={{ fontFamily: lang === 'ar' ? 'Tajawal, sans-serif' : 'Inter, sans-serif' }}
    >
      <Navbar lang={lang} t={t} setLang={setLang} />
      <Hero {...props} />
      <LogosStrip {...props} />
      <Testimonials {...props} />
      <Results {...props} />
      <ContactForm {...props} />

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-sm">
          © 2025 Shark Digital. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'Tous droits réservés'}.
        </p>
      </footer>
    </div>
  );
}

export default App;
