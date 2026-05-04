import { motion } from 'framer-motion';
import { SectionProps } from '../App';

// 🎬 Replace with your Vimeo video ID (e.g. '123456789')
const VIMEO_ID = '';

const wordVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};


const Hero = ({ lang, t }: SectionProps) => {
  const words = t.hero.headline.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient BG */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />


      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-5 py-16">

        {/* Headline — word by word, slightly smaller */}
        <motion.h1
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
          }}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.18] mb-6"
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
        >
          {words.map((word, i) => {
            const isHighlight =
              word.includes('ستراتيجية') ||
              word.includes('stratégie') ||
              word.includes('المشكل') ||
              word.includes("c'est");
            return (
              <motion.span
                key={i}
                variants={wordVariant}
                className={`inline-block mx-1 ${isHighlight ? 'gradient-text' : ''}`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* Vimeo video — before buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto mb-10"
        >
          <div className="glass-card glow-border rounded-2xl overflow-hidden aspect-video relative">
            {VIMEO_ID ? (
              <iframe
                src={`https://player.vimeo.com/video/${VIMEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title="Shark Digital"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                  >
                    <span className="text-white text-2xl ml-1">▶</span>
                  </motion.div>
                  <p className="text-white/40 text-sm">{t.hero.videoLabel}</p>
                </div>
              </>
            )}
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-yellow-500/40 rounded-tl pointer-events-none" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-yellow-500/40 rounded-tr pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-yellow-500/40 rounded-bl pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-yellow-500/40 rounded-br pointer-events-none" />
          </div>
          {/* Glow under video */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-purple-600/20 blur-2xl rounded-full pointer-events-none" />
        </motion.div>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex justify-center"
        >
          <motion.a
            href="#contact-form"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-lg pulse-cta hover:scale-105 transition-transform"
          >
            {t.hero.cta}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-white/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
