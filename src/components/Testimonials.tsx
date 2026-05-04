import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../App';

const BAR_COUNT = 28;

const Waveform = ({ isPlaying }: { isPlaying: boolean }) => {
  const heights = useRef(
    Array.from({ length: BAR_COUNT }, () => Math.random() * 0.6 + 0.2)
  ).current;

  return (
    <div className="flex items-center gap-[2px] h-10 flex-1">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-full bg-gradient-to-t from-yellow-500 to-orange-400"
          animate={
            isPlaying
              ? {
                  scaleY: [h, Math.min(h * 2.8, 1), h * 0.3, Math.min(h * 2, 0.95), h],
                }
              : { scaleY: 0.12 }
          }
          transition={
            isPlaying
              ? {
                  duration: 0.5 + Math.random() * 0.5,
                  delay: i * 0.035,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
              : { duration: 0.4 }
          }
          style={{ height: '100%', transformOrigin: 'center' }}
        />
      ))}
    </div>
  );
};

const AudioCard = ({
  firstName,
  role,
  company,
  index,
}: {
  firstName: string;
  role: string;
  company: string;
  index: number;
}) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioSrc = `/audio/${firstName.toLowerCase()}.mp3`;

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.addEventListener('ended', () => setPlaying(false));
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="glass-card glow-border p-6 flex flex-col items-center gap-5 relative overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

      {/* Name + role + company */}
      <div className="text-center">
        <p className="text-white font-black text-xl tracking-wide mb-1">{firstName}</p>
        <p className="text-yellow-500/80 text-xs font-semibold">{role}</p>
        <p className="text-white/35 text-xs mt-0.5">{company}</p>
      </div>

      {/* Waveform player */}
      <div className="w-full flex items-center gap-3 glass-card-light rounded-2xl px-4 py-3">
        <motion.button
          onClick={togglePlay}
          whileTap={{ scale: 0.88 }}
          whileHover={{ scale: 1.08 }}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg"
        >
          <span className="text-black text-xs font-black" style={{ marginLeft: playing ? 0 : '2px' }}>
            {playing ? '■' : '▶'}
          </span>
        </motion.button>
        <Waveform isPlaying={playing} />
      </div>
    </motion.div>
  );
};

const Testimonials = ({ lang, t }: SectionProps) => {
  const clients = t.testimonials.clients.map((c) => ({
    firstName: c.name.split(' ')[0],
    role: c.role,
    company: c.company,
  }));

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            {lang === 'ar' ? 'شهادات العملاء' : 'Témoignages'}
          </p>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {clients.map((c, i) => (
            <AudioCard key={i} firstName={c.firstName} role={c.role} company={c.company} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
