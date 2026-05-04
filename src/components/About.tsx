import { motion } from 'framer-motion';
import { SectionProps } from '../App';

const About = ({ lang, t }: SectionProps) => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700/8 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/8 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`flex flex-col lg:flex-row gap-12 items-center ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              {lang === 'ar' ? 'من نحن' : 'À propos'}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white leading-snug mb-6"
              style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
            >
              {t.about.title}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">{t.about.paragraph1}</p>
            <p className="text-white/60 text-base leading-relaxed mb-8">{t.about.paragraph2}</p>

            {/* Location */}
            <div className="flex items-center gap-3 glass-card glow-border px-4 py-3 rounded-xl w-fit">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-white font-bold text-sm">{t.about.location}</p>
                <p className="text-white/40 text-xs">{t.about.city}</p>
              </div>
            </div>
          </motion.div>

          {/* Stats side */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="glass-card glow-border p-6 text-center relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-4xl font-black gradient-text mb-1">{stat.value}</p>
                  <p className="text-white/40 text-xs font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Shark tagline card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 glass-card p-5 rounded-xl border border-yellow-500/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5" />
              <div className="relative flex items-start gap-3">
                <span className="text-2xl mt-0.5 shrink-0">🦈</span>
                <p className="text-white/70 text-sm leading-relaxed font-medium">
                  {lang === 'ar'
                    ? 'القرش ما كيصيدش الفريسة ديالو — كيدور عليها. نحن بحال هكاك في السوق.'
                    : "Le requin ne chasse pas au hasard — il cible. C'est exactement notre approche sur le marché."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
