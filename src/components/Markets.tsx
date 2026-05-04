import { motion } from 'framer-motion';
import { SectionProps } from '../App';

/*
  All SVG coordinates use equirectangular projection in a 1000×500 viewBox:
    x = (lon + 180) / 360 * 1000
    y = (90  − lat) / 180 * 500
*/

const PATHS = [
  /* ── North America ── */
  'M33,53 L333,69 L319,128 L278,181 L256,206 L194,186 L156,117 L83,83Z',
  /* ── Greenland ── */
  'M356,81 L431,39 L450,78 L431,69Z',
  /* ── Iceland ── */
  'M439,69 L464,67 L461,75 L433,75Z',
  /* ── South America ── */
  'M283,228 L328,222 L403,264 L389,311 L314,403 L300,403 L278,264Z',
  /* ── Europe (mainland) ── */
  'M475,144 L506,108 L528,97 L589,56 L639,61 L622,144 L575,147 L486,150Z',
  /* ── Scandinavia ── */
  'M514,92 L528,97 L589,56 L581,69 L556,92Z',
  /* ── UK ── */
  'M486,111 L492,86 L506,108Z',
  /* ── Africa ── */
  'M461,153 L603,167 L617,217 L639,217 L597,344 L550,347 L533,300 L508,231 L458,222 L453,206Z',
  /* ── Arabian Peninsula ── */
  'M603,161 L658,183 L639,217 L619,217 L603,189Z',
  /* ── Asia (Russia + mainland) ── */
  'M583,61 L861,56 L967,78 L889,153 L861,189 L789,239 L722,228 L689,186 L622,144 L639,61Z',
  /* ── Indian subcontinent ── */
  'M689,186 L714,172 L756,189 L722,211 L722,228 L714,228 L703,197Z',
  /* ── SE Asia peninsula ── */
  'M789,239 L820,250 L814,272 L797,264 L789,247Z',
  /* ── Australia ── */
  'M817,311 L864,283 L928,325 L919,356 L883,347 L819,347Z',
  /* ── Japan ── */
  'M892,125 L906,119 L919,133 L908,147 L894,139Z',
  /* ── Madagascar ── */
  'M583,278 L592,264 L597,289 L589,306 L578,297Z',
];

/* Morocco highlight — same projection */
const MOROCCO = 'M461,153 L494,147 L511,158 L503,172 L472,175 L453,164Z';

/* ── Market pin data ────────────────────────────────────────── */
const MARKETS = [
  {
    id: 'morocco',
    flag: '🇲🇦',
    labelAr: 'المغرب',
    labelFr: 'Maroc',
    badgeAr: 'السوق الرئيسي',
    badgeFr: 'Marché Principal',
    statsAr: '+120 عميل',
    statsFr: '+120 clients',
    /* lon=-6 lat=32 */
    pin: { x: 48.3, y: 32 },
    /* card floats to the LEFT of pin */
    card: { side: 'above' as const, tx: '-108%' },
    color: '#F5A623',
    featured: true,
  },
  {
    id: 'europe',
    flag: '🇪🇺',
    labelAr: 'أوروبا',
    labelFr: 'Europe',
    badgeAr: 'حضور أوروبي',
    badgeFr: 'Présence Européenne',
    statsAr: '+15 عميل',
    statsFr: '+15 clients',
    /* lon=10 lat=52 — central Europe */
    pin: { x: 52.8, y: 21.1 },
    /* card floats to the RIGHT of pin */
    card: { side: 'above' as const, tx: '8%' },
    color: '#60a5fa',
    featured: false,
  },
  {
    id: 'gulf',
    flag: '🇦🇪',
    labelAr: 'الخليج العربي',
    labelFr: 'Golfe Arabique',
    badgeAr: 'سوق نامي',
    badgeFr: 'En croissance',
    statsAr: '+20 عميل',
    statsFr: '+20 clients',
    /* lon=54 lat=24 — UAE */
    pin: { x: 65, y: 36.6 },
    card: { side: 'above' as const, tx: '-50%' },
    color: '#a78bfa',
    featured: false,
  },
  {
    id: 'africa',
    flag: '🌍',
    labelAr: 'أفريقيا',
    labelFr: 'Afrique',
    badgeAr: 'سوق واعد',
    badgeFr: 'Marché Prometteur',
    statsAr: '+5 عميل',
    statsFr: '+5 clients',
    /* lon=22 lat=2 — Central Africa */
    pin: { x: 56.1, y: 48.9 },
    card: { side: 'below' as const, tx: '4%' },
    color: '#34d399',
    featured: false,
  },
];

/* ── Pulsing pin ──────────────────────────────────────────── */
const Pin = ({ color, featured }: { color: string; featured: boolean }) => {
  const r = featured ? 7 : 5;
  return (
    <div className="relative" style={{ width: r * 2, height: r * 2 }}>
      {[2, 3.2, 4.6].map((scale, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ background: color }}
          animate={{ scale: [1, scale], opacity: [0.5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: i * 0.6 }}
        />
      ))}
      <div
        className="absolute inset-0 rounded-full z-10"
        style={{ background: color, boxShadow: `0 0 ${featured ? 14 : 8}px ${color}` }}
      />
    </div>
  );
};

/* ── Popup card ───────────────────────────────────────────── */
const PopupCard = ({
  market,
  lang,
}: {
  market: (typeof MARKETS)[0];
  lang: string;
}) => {
  const above = market.card.side === 'above';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: above ? 6 : -6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.25 }}
      style={{
        position: 'absolute',
        left: '50%',
        transform: `translateX(${market.card.tx})`,
        ...(above ? { bottom: 'calc(100% + 10px)' } : { top: 'calc(100% + 10px)' }),
        minWidth: '138px',
        background: 'rgba(7,8,22,0.94)',
        border: `1px solid ${market.color}38`,
        borderRadius: '12px',
        padding: '9px 11px',
        backdropFilter: 'blur(18px)',
        boxShadow: `0 8px 28px rgba(0,0,0,0.55), 0 0 0 1px ${market.color}15`,
        direction: 'ltr',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        zIndex: 30,
      }}
    >
      {/* Tip */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: 7, height: 7,
          background: 'rgba(7,8,22,0.94)',
          ...(above
            ? { bottom: -4, borderRight: `1px solid ${market.color}38`, borderBottom: `1px solid ${market.color}38` }
            : { top: -4,    borderLeft:  `1px solid ${market.color}38`, borderTop:    `1px solid ${market.color}38` }),
        }}
      />
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-base leading-none">{market.flag}</span>
        <div>
          <p className="text-white font-black text-xs leading-tight">
            {lang === 'ar' ? market.labelAr : market.labelFr}
          </p>
          <p className="text-[10px] font-semibold mt-0.5" style={{ color: market.color }}>
            {lang === 'ar' ? market.badgeAr : market.badgeFr}
          </p>
        </div>
      </div>
      <div
        className="text-[10px] font-black pt-1.5 mt-1 border-t"
        style={{ color: market.color, borderColor: `${market.color}20` }}
      >
        {lang === 'ar' ? market.statsAr : market.statsFr}
      </div>
    </motion.div>
  );
};

/* ── Section ─────────────────────────────────────────────── */
const Markets = ({ lang }: SectionProps) => (
  <section id="markets" className="section-padding relative overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(245,166,35,0.04) 0%, transparent 70%)',
      }}
    />

    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="text-center mb-14"
      >
        <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
          {lang === 'ar' ? 'أسواقنا' : 'Nos Marchés'}
        </p>
        <h2 className="section-title">
          {lang === 'ar' ? 'حضور دولي، تأثير محلي' : 'Présence internationale, impact local'}
        </h2>
        <p className="section-subtitle">
          {lang === 'ar'
            ? 'نخدمو عملاء في المغرب، الخليج، أوروبا وأفريقيا'
            : 'Nous servons des clients au Maroc, Golfe, Europe et Afrique'}
        </p>
      </motion.div>

      {/* Map  — 2:1 aspect container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
        style={{ aspectRatio: '2 / 1' }}
      >
        {/* SVG world map */}
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <pattern id="mdots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1.35" fill="rgba(255,255,255,0.11)" />
            </pattern>
            <pattern id="mdots-gold" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1.35" fill="rgba(245,166,35,0.32)" />
            </pattern>
          </defs>

          {PATHS.map((d, i) => (
            <path key={i} d={d} fill="url(#mdots)" />
          ))}

          {/* Morocco orange-dot overlay */}
          <path d={MOROCCO} fill="url(#mdots-gold)" />
        </svg>

        {/* Pins + popup cards */}
        {MARKETS.map((m) => (
          <div
            key={m.id}
            style={{
              position: 'absolute',
              left: `${m.pin.x}%`,
              top: `${m.pin.y}%`,
              width: 0,
              height: 0,
            }}
          >
            <PopupCard market={m} lang={lang} />
            <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }}>
              <Pin color={m.color} featured={m.featured} />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Market chips — always visible on mobile */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {MARKETS.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{
              background: `${m.color}12`,
              border: `1px solid ${m.color}30`,
              color: m.color,
            }}
          >
            <span>{m.flag}</span>
            <span>{lang === 'ar' ? m.labelAr : m.labelFr}</span>
            {m.featured && (
              <span
                className="text-[10px] px-1.5 py-0.5 rounded-full font-black"
                style={{ background: `${m.color}22` }}
              >
                {lang === 'ar' ? 'الرئيسي' : 'Principal'}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Markets;
