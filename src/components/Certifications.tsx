import { motion } from 'framer-motion';
import { SectionProps } from '../App';

const badgeColors: Record<string, { bg: string; text: string; glow: string }> = {
  META: { bg: 'from-blue-600 to-indigo-700', text: '#60a5fa', glow: 'rgba(96,165,250,0.25)' },
  GOOGLE: { bg: 'from-red-500 via-yellow-500 to-green-500', text: '#fbbf24', glow: 'rgba(251,191,36,0.25)' },
  TIKTOK: { bg: 'from-gray-800 to-black', text: '#f9fafb', glow: 'rgba(249,250,251,0.15)' },
};

const CertCard = ({
  item,
  index,
}: {
  item: { name: string; badge: string; desc: string };
  index: number;
}) => {
  const colors = badgeColors[item.badge];

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -20, y: 30 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        boxShadow: `0 0 50px ${colors.glow}, 0 20px 60px rgba(0,0,0,0.4)`,
        transition: { duration: 0.3 },
      }}
      className="glass-card glow-border p-8 flex flex-col items-center text-center gap-5 relative overflow-hidden group cursor-default"
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${colors.glow}, transparent 70%)` }}
      />

      {/* Badge circle */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="relative w-20 h-20"
      >
        {/* Rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
          style={{ animation: 'spin-slow 20s linear infinite' }}
        />
        {/* Badge */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`absolute inset-2 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg`}
        >
          <span className="text-white font-black text-xs tracking-wider">{item.badge}</span>
        </motion.div>
      </motion.div>

      {/* Verified checkmark */}
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
          <span className="text-green-400 text-xs font-black">✓</span>
        </div>
        <span className="text-green-400/80 text-xs font-bold uppercase tracking-wider">Certified</span>
      </div>

      <div>
        <h3 className="text-white font-black text-base mb-1.5">{item.name}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-yellow-500/30 transition-all duration-500" />
    </motion.div>
  );
};

const Certifications = ({ lang, t }: SectionProps) => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/15 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            {lang === 'ar' ? 'اعتمادات' : 'Certifications'}
          </p>
          <h2 className="section-title">{t.certifications.title}</h2>
          <p className="section-subtitle">{t.certifications.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.certifications.items.map((item, i) => (
            <CertCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
