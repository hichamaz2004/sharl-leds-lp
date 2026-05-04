import { motion } from 'framer-motion';
import { SectionProps } from '../App';

const icons: Record<string, JSX.Element> = {
  fb: (
    <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
      <rect width="36" height="36" rx="8" fill="#1877F2" opacity="0.15" />
      <path
        d="M20.5 19h2.5l1-4H20.5v-2c0-1 .5-2 2-2H24V7.5S22.7 7 21.3 7C18.3 7 16.5 8.7 16.5 12v3H14v4h2.5V29h4V19z"
        fill="#1877F2"
      />
    </svg>
  ),
  gg: (
    <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
      <rect width="36" height="36" rx="8" fill="#4285F4" opacity="0.12" />
      <path
        d="M28 18.2c0-.7-.06-1.4-.17-2H18v3.8h5.6A4.8 4.8 0 0121.5 23v2.4h3.3C26.7 23.5 28 21 28 18.2z"
        fill="#4285F4"
      />
      <path
        d="M18 28c2.7 0 5-.9 6.8-2.5L21.5 23C20.5 23.7 19.3 24 18 24c-2.6 0-4.8-1.7-5.6-4H9v2.5A10 10 0 0018 28z"
        fill="#34A853"
      />
      <path
        d="M12.4 20c-.2-.7-.4-1.3-.4-2s.2-1.3.4-2V13.5H9A10 10 0 008 18c0 1.6.4 3.1 1 4.5L12.4 20z"
        fill="#FBBC05"
      />
      <path
        d="M18 12c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 009 13.5L12.4 16C13.2 13.7 15.4 12 18 12z"
        fill="#EA4335"
      />
    </svg>
  ),
  tt: (
    <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
      <rect width="36" height="36" rx="8" fill="#000" opacity="0.3" />
      <path
        d="M24.5 9.5h-3.2V22a3.3 3.3 0 01-3.3 3 3.3 3.3 0 01-3.3-3 3.3 3.3 0 013.3-3c.3 0 .6 0 .9.1V15.8a6.5 6.5 0 00-.9-.1 6.5 6.5 0 00-6.5 6.5 6.5 6.5 0 006.5 6.5 6.5 6.5 0 006.5-6.5V15a9.2 9.2 0 005.5 1.8v-3.2a5.9 5.9 0 01-5.5-4.1z"
        fill="white"
        opacity="0.9"
      />
    </svg>
  ),
  cr: (
    <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
      <rect width="36" height="36" rx="8" fill="#F5A623" opacity="0.12" />
      <path
        d="M25 11L15 21l-2 5 5-2L28 14a2.8 2.8 0 000-4 2.8 2.8 0 00-3 1z"
        stroke="#F5A623"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M8 27h20" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
};

const ServiceCard = ({
  item,
  index,
}: {
  item: { icon: string; title: string; desc: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        boxShadow: '0 0 40px rgba(245, 166, 35, 0.2), 0 20px 60px rgba(0,0,0,0.4)',
        borderColor: 'rgba(245, 166, 35, 0.3)',
        transition: { duration: 0.3 },
      }}
      className="glass-card glow-border p-7 flex flex-col gap-5 cursor-default relative overflow-hidden group"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-yellow-500/40 transition-all duration-500" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl overflow-hidden">{icons[item.icon]}</div>

      {/* Text */}
      <div>
        <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
      </div>

      {/* Arrow */}
      <div className="mt-auto flex items-center gap-2 text-yellow-500/0 group-hover:text-yellow-500/80 transition-all duration-300">
        <span className="text-sm font-bold">→</span>
      </div>

      {/* BG glow on hover */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-500/0 group-hover:bg-yellow-500/5 rounded-full blur-2xl transition-all duration-500" />
    </motion.div>
  );
};

const Services = ({ lang, t }: SectionProps) => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            {lang === 'ar' ? 'ما نقدمه' : 'Ce que nous faisons'}
          </p>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle text-2xl font-black text-yellow-500/80 mt-2">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.services.items.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
