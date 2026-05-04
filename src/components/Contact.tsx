import { motion } from 'framer-motion';
import { SectionProps } from '../App';

const ContactItem = ({
  icon,
  label,
  value,
  href,
  index,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    whileHover={{ y: -5, transition: { duration: 0.25 } }}
  >
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card glow-border p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-all duration-300 group block"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-0.5">{label}</p>
          <p className="text-white font-bold text-sm">{value}</p>
        </div>
        <span className="ms-auto text-yellow-500/0 group-hover:text-yellow-500/60 transition-all">↗</span>
      </a>
    ) : (
      <div className="glass-card glow-border p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-0.5">{label}</p>
          <p className="text-white font-bold text-sm">{value}</p>
        </div>
      </div>
    )}
  </motion.div>
);

const Contact = ({ lang, t }: SectionProps) => {
  const c = t.contact;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            {lang === 'ar' ? 'تواصل' : 'Contact'}
          </p>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-subtitle">{c.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ContactItem
            icon="📞"
            label={lang === 'ar' ? 'هاتف' : 'Téléphone'}
            value={c.phone}
            href={`tel:${c.phone.replace(/\s/g, '')}`}
            index={0}
          />
          <ContactItem
            icon="📍"
            label={lang === 'ar' ? 'العنوان' : 'Adresse'}
            value={c.address}
            index={1}
          />
          <ContactItem
            icon="💬"
            label="WhatsApp"
            value={c.whatsapp}
            href={`https://wa.me/212600000000`}
            index={2}
          />
        </div>

        {/* Final CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 glass-card rounded-2xl p-8 relative overflow-hidden text-center border border-yellow-500/15"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/8 to-yellow-500/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
          <div className="relative z-10">
            <p className="text-white/50 text-sm mb-3">
              {lang === 'ar' ? '⚡ نحن جاهزون لتحليل حسابك الإعلاني مجانًا' : '⚡ Prêts à auditer votre compte publicitaire gratuitement'}
            </p>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-base pulse-cta"
            >
              {lang === 'ar' ? 'طلب تحليل مجاني ←' : 'Demander un audit gratuit →'}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
