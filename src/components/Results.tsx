import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionProps } from '../App';

const screenshots = [
  { src: '/screenshots/screen%20(1).png',  platform: 'Meta Ads Manager',   metric: 'ROAS 4.7x' },
  { src: '/screenshots/screen%20(2).png',  platform: 'Meta Ads Manager',  metric: 'CPA -62%'  },
  { src: '/screenshots/screen%20(3).png',  platform: 'Meta Ads Manager',  metric: 'Revenue x3'},
  { src: '/screenshots/screen%20(4).png',  platform: 'Meta Ads Manager',   metric: '+340%'     },
  { src: '/screenshots/screen%20(6).png',  platform: 'Meta Ads Manager',   metric: '+580%'     },
  { src: '/screenshots/screen%20(5).png', platform: 'Meta Ads Manager',  metric: '+900%'     },
];

const N = screenshots.length;

const Results = ({ lang, t }: SectionProps) => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox]   = useState<string | null>(null);
  const [paused,  setPaused]      = useState(false);

  const prev = () => setCurrent(i => (i - 1 + N) % N);
  const next = () => setCurrent(i => (i + 1)     % N);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent(i => (i + 1) % N), 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="results" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            {lang === 'ar' ? 'النتائج' : 'Résultats'}
          </p>
          <h2 className="section-title">{t.results.title}</h2>
          <p className="section-subtitle">{t.results.subtitle}</p>
        </motion.div>

        {/* ── 3-D Carousel ── */}
        <div
          className="relative h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px]"
          style={{ perspective: '1400px' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {screenshots.map((shot, i) => {
            const raw  = (i - current + N) % N;
            const norm = raw > N / 2 ? raw - N : raw; // –N/2 … N/2
            const abs  = Math.abs(norm);
            const isCenter  = norm === 0;
            const isSide    = abs === 1;
            const isVisible = abs <= 1;

            return (
              <motion.div
                key={i}
                animate={{
                  x:       `${norm * 58}%`,
                  rotateY:  norm * -50,
                  scale:    isCenter ? 1 : isSide ? 0.78 : 0.55,
                  opacity:  isCenter ? 1 : isSide ? 0.70 : 0,
                  zIndex:   isCenter ? 20 : isSide ? 10 : 0,
                }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  if (isCenter) { setLightbox(shot.src); return; }
                  norm < 0 ? prev() : next();
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '22.5%',          /* centers a 55%-wide card */
                  width: '55%',
                  maxWidth: '720px',
                  transformStyle: 'preserve-3d',
                  cursor: isCenter ? 'zoom-in' : isVisible ? 'pointer' : 'default',
                  border: isCenter
                    ? '1px solid rgba(245,166,35,0.35)'
                    : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: isCenter
                    ? '0 40px 80px rgba(0,0,0,0.65), 0 0 60px rgba(245,166,35,0.08)'
                    : '0 20px 50px rgba(0,0,0,0.5)',
                  background: '#08091a',
                }}
              >
                {/* Screenshot */}
                <img
                  src={shot.src}
                  alt={shot.platform}
                  className="w-full h-auto block"
                  draggable={false}
                />

                {/* Bottom label — center card only */}
                {isCenter && (
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)' }}
                  >
                    <span className="text-white/80 text-xs font-semibold">{shot.platform}</span>
                    <span
                      className="text-xs font-black px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}
                    >
                      {shot.metric}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-5 mt-10">

          {/* Prev */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
          >
            {lang === 'ar' ? '→' : '←'}
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  height: '8px',
                  width: i === current ? '28px' : '8px',
                  borderRadius: '4px',
                  background: i === current
                    ? 'linear-gradient(to right, #F5A623, #FF6B00)'
                    : 'rgba(255,255,255,0.18)',
                  transition: 'all 0.35s ease',
                }}
              />
            ))}
          </div>

          {/* Next */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
          >
            {lang === 'ar' ? '←' : '→'}
          </motion.button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)' }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1,    opacity: 1, y: 0  }}
              exit={{    scale: 0.92, opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 40px 120px rgba(0,0,0,0.8)' }}
            >
              <img src={lightbox} alt="" className="w-full h-auto block" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all text-sm"
              >✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Results;
