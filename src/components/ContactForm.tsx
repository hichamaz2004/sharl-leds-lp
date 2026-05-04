import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionProps } from '../App';

interface FormState {
  name: string;
  phone: string;
  company: string;
  sector: string;
  budget: string;
}

const ContactForm = ({ lang, t }: SectionProps) => {
  const f = t.form;
  const [form, setForm] = useState<FormState>({ name: '', phone: '', company: '', sector: '', budget: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = '✕';
    if (!form.phone.trim() || form.phone.trim().length < 8) e.phone = '✕';
    if (!form.company.trim()) e.company = '✕';
    if (!form.sector) e.sector = '✕';
    if (!form.budget) e.budget = '✕';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const inputClass = (field: keyof FormState) =>
    `input-field ${errors[field] ? 'border-red-500/60 focus:border-red-500' : ''}`;

  return (
    <section id="contact-form" className="section-padding relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
            {lang === 'ar' ? 'ابدأ الآن' : 'Commencer'}
          </p>
          <h2 className="section-title">{f.title}</h2>
          <p className="section-subtitle">{f.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card glow-border p-8 relative overflow-hidden"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="py-12 flex flex-col items-center gap-4 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-4xl shadow-2xl"
                >
                  ✓
                </motion.div>
                <h3 className="text-white text-2xl font-black">{f.success}</h3>
                <p className="text-white/50 text-base">{f.successSub}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                    {f.name}
                  </label>
                  <input
                    type="text"
                    placeholder={f.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass('name')}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                    {f.phone}
                  </label>
                  <input
                    type="tel"
                    placeholder={f.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass('phone')}
                    dir="ltr"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                    {f.company}
                  </label>
                  <input
                    type="text"
                    placeholder={f.companyPlaceholder}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClass('company')}
                  />
                </div>

                {/* Sector + Budget in two columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                      {f.sector}
                    </label>
                    <select
                      value={form.sector}
                      onChange={(e) => setForm({ ...form, sector: e.target.value })}
                      className={inputClass('sector')}
                    >
                      <option value="">{f.sectorPlaceholder}</option>
                      {f.sectorOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                      {f.budget}
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputClass('budget')}
                    >
                      <option value="">{f.budgetPlaceholder}</option>
                      {f.budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Validation hint */}
                {Object.keys(errors).length > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400/80 text-xs text-center"
                  >
                    {lang === 'ar' ? 'يرجى ملء جميع الحقول' : 'Veuillez remplir tous les champs'}
                  </motion.p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-base disabled:opacity-70 disabled:cursor-not-allowed pulse-cta relative overflow-hidden"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full block"
                      />
                      {lang === 'ar' ? 'جاري الإرسال…' : 'Envoi en cours…'}
                    </span>
                  ) : (
                    f.cta
                  )}
                </motion.button>

                <p className="text-white/25 text-xs text-center">
                  {lang === 'ar'
                    ? '🔒 بياناتك محمية ولن تُشارك مع أطراف ثالثة'
                    : '🔒 Vos données sont protégées et ne seront jamais partagées'}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
