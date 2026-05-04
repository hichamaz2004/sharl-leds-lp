import { motion } from 'framer-motion';
import { SectionProps } from '../App';

const base = import.meta.env.BASE_URL;
const logos = [
  { name: 'Client 1', src: `${base}logos/logo (8).png` },
  { name: 'Client 2', src: `${base}logos/logo (9).png` },
  { name: 'Client 3', src: `${base}logos/logo (10).png` },
  { name: 'Client 4', src: `${base}logos/logo (11).png` },
  { name: 'Client 5', src: `${base}logos/logo (12).png` },
  { name: 'Client 6', src: `${base}logos/logo (13).png` },
  { name: 'Client 7', src: `${base}logos/logo (14).png` },
  { name: 'Client 8', src: `${base}logos/logo (15).png` },
  { name: 'Client 9', src: `${base}logos/logo (16).png` },
];

const track = [...logos, ...logos, ...logos, ...logos];

const MARQUEE_CSS = `
  @keyframes marquee-fwd {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-bwd {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .marquee-fwd {
    animation: marquee-fwd 38s linear infinite;
    will-change: transform;
  }
  .marquee-bwd {
    animation: marquee-bwd 30s linear infinite;
    will-change: transform;
  }
  .marquee-wrap:hover .marquee-fwd,
  .marquee-wrap:hover .marquee-bwd {
    animation-play-state: paused;
  }
`;

const LogoCard = ({ name, src }: { name: string; src: string }) => (
  <div
    className="group relative flex items-center justify-center shrink-0 cursor-pointer"
    style={{
      width: '200px',
      height: '110px',
      borderRadius: '20px',
      background: 'linear-gradient(145deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.025) 100%)',
      border: '1px solid rgba(255,255,255,0.085)',
      boxShadow: '0 2px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
    }}
  >
    {/* Top shine */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        borderRadius: '20px',
        background: 'linear-gradient(140deg, rgba(255,255,255,0.12) 0%, transparent 55%)',
      }}
    />
    {/* Hover orange glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        borderRadius: '20px',
        background: 'radial-gradient(ellipse at 50% 110%, rgba(245,166,35,0.22) 0%, transparent 65%)',
        boxShadow: '0 0 40px rgba(245,166,35,0.1), inset 0 0 20px rgba(245,166,35,0.04)',
      }}
    />
    {/* Hover border glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ borderRadius: '20px', border: '1px solid rgba(245,166,35,0.25)' }}
    />
    <img
      src={src}
      alt={name}
      className="relative z-10 object-contain opacity-60 group-hover:opacity-100 transition-all duration-400 group-hover:scale-105"
      style={{ width: '140px', height: '70px', borderRadius: '10px' }}
    />
  </div>
);

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    className="marquee-wrap overflow-hidden"
    style={{
      maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
    }}
  >
    <div className={`flex gap-5 w-max ${reverse ? 'marquee-bwd' : 'marquee-fwd'}`}>
      {track.map((logo, i) => (
        <LogoCard key={i} {...logo} />
      ))}
    </div>
  </div>
);

const LogosStrip = ({ lang, t }: SectionProps) => (
  <section id="logos" className="py-20 relative overflow-hidden">
    <style>{MARQUEE_CSS}</style>

    {/* Background radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse 75% 55% at 50% 50%, rgba(245,166,35,0.04) 0%, transparent 70%)',
      }}
    />

    {/* Subtle dot grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    {/* Top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(245,166,35,0.35) 35%, rgba(245,166,35,0.35) 65%, transparent 100%)',
      }}
    />

    {/* Bottom accent line */}
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 35%, rgba(255,255,255,0.07) 65%, transparent 100%)',
      }}
    />

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-14 px-5"
    >
      <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
        {lang === 'ar' ? 'ثقة العملاء' : 'Ils nous font confiance'}
      </p>
      <h2 className="section-title">{t.logos.title}</h2>
      <p className="section-subtitle">
        {lang === 'ar'
          ? 'علامات تجارية مغربية تثق في نتائجنا'
          : 'Des marques marocaines qui font confiance à nos résultats'}
      </p>
    </motion.div>

    {/* Dual marquee rows */}
    <div className="space-y-3 mb-14">
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>

  </section>
);

export default LogosStrip;
