/**
 * Careers page – "Trabaja con nosotros".
 * Lists open positions and provides an application form.
 */
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { SectionTitle, Input, Button } from '../components/ui';

/* ── Job data ─────────────────────────────────────────────── */
const jobListings = [
  {
    id: 'community-manager',
    title: 'Community Manager',
    location: 'Popayán - Cauca',
    category: 'Community',
    date: 'noviembre 30, 2022',
  },
  {
    id: 'programador',
    title: 'Programador',
    location: 'Remoto',
    category: 'Programador',
    date: 'noviembre 30, 2022',
  },
  {
    id: 'disenador-grafico',
    title: 'Diseñador Gráfico',
    location: 'Popayán - Cauca',
    category: 'Diseñador',
    date: 'noviembre 30, 2022',
  },
];

/* ── Component ─────────────────────────────────────────────── */
const CareersPage = () => {
  const formRef = useRef(null);

  /* Form state */
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    portfolio: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* Helpers */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  const scrollToForm = (positionTitle) => {
    setForm((prev) => ({ ...prev, position: positionTitle }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!form.email.trim()) newErrors.email = 'El correo es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Ingresa un correo válido';
    if (!form.position) newErrors.position = 'Selecciona un cargo';
    if (!form.message.trim()) newErrors.message = 'El mensaje es obligatorio';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    // Mark all as touched
    const allTouched = {};
    Object.keys(form).forEach((k) => (allTouched[k] = true));
    setTouched(allTouched);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Career application:', { ...form, file });
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', phone: '', email: '', position: '', portfolio: '', message: '' });
      setFile(null);
      setTouched({});
      setErrors({});
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Trabaja con nosotros | Buxtar Digital Solutions</title>
        <meta name="description" content="Únete al equipo de Buxtar. Conoce nuestras vacantes disponibles y aplica ahora." />
      </Helmet>

      <div className="pt-24">
        {/* ── Hero ────────────────────────────────────────── */}
        <Section id="careers-hero" dark>
          <Container>
            <SectionTitle
              badge="Únete al equipo"
              title="Trabaja con nosotros"
              subtitle="En Buxtar queremos contar con tu experticia. Forma parte de un equipo innovador y profesional, aplica ahora."
            />
          </Container>
        </Section>

        {/* ── Job listings ───────────────────────────────── */}
        <Section id="careers-listings" dark>
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Table header */}
              <div className="hidden md:grid md:grid-cols-4 gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-brand-gray border-b border-gray-200">
                <span>Cargo</span>
                <span>Ubicación</span>
                <span>Categoría</span>
                <span>Fecha</span>
              </div>

              {/* Job rows */}
              <div className="divide-y divide-gray-100">
                {jobListings.map((job, i) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-5 rounded-xl hover:bg-brand-orange/5 transition-colors duration-300 cursor-pointer items-center"
                    onClick={() => scrollToForm(job.title)}
                  >
                    <div>
                      <h3 className="font-bold text-black group-hover:text-brand-orange transition-colors duration-300">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-gray">
                      <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-orange/10 text-brand-orange">
                        {job.category}
                      </span>
                    </div>
                    <div className="text-sm text-brand-gray">
                      {job.date}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* ── Application form ───────────────────────────── */}
        <Section id="careers-form" dark>
          <Container>
            <div ref={formRef} className="max-w-3xl mx-auto scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                    Aplica a una vacante
                  </h2>
                  <p className="text-brand-gray">
                    Completa el formulario y nos pondremos en contacto contigo
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-gray-200/60 shadow-sm rounded-2xl p-6 md:p-8 space-y-5"
                  noValidate
                >
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Nombre completo"
                      name="name"
                      placeholder="Tu nombre completo"
                      value={form.name}
                      error={errors.name}
                      touched={touched.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={100}
                    />
                    <Input
                      label="Teléfono"
                      name="phone"
                      type="tel"
                      placeholder="Ej: 3017515768"
                      value={form.phone}
                      error={errors.phone}
                      touched={touched.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={20}
                    />
                  </div>

                  {/* Email + Position */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Correo electrónico"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      error={errors.email}
                      touched={touched.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={254}
                    />

                    {/* Position select */}
                    <div className="space-y-1.5">
                      <label htmlFor="position" className="block text-sm font-medium text-black">
                        Cargo al que quieres aplicar <span className="text-brand-orange ml-1">*</span>
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`
                          w-full px-4 py-3 rounded-xl bg-white border transition-all duration-300
                          text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30
                          ${touched.position && errors.position
                            ? 'border-red-500'
                            : 'border-gray-300/60 hover:border-gray-400 focus:border-brand-orange/50'
                          }
                        `}
                      >
                        <option value="">Selecciona un cargo</option>
                        {jobListings.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                      <AnimatePresence>
                        {touched.position && errors.position && (
                          <motion.p
                            className="text-red-400 text-xs mt-1 flex items-center gap-1"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            role="alert"
                          >
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.position}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Portfolio link */}
                  <Input
                    label="Link de tu portafolio"
                    name="portfolio"
                    type="url"
                    placeholder="https://tuportafolio.com"
                    value={form.portfolio}
                    error={errors.portfolio}
                    touched={touched.portfolio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {/* File upload */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-black">
                      Hoja de vida / CV
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="cv-upload"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="cv-upload"
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-white border border-gray-300/60 hover:border-gray-400 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                          </svg>
                        </div>
                        <span className="text-sm text-brand-gray truncate">
                          {file ? file.name : 'Seleccionar archivo (PDF, DOC, DOCX)'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <Input
                    label="Mensaje"
                    name="message"
                    type="textarea"
                    placeholder="Cuéntanos por qué quieres trabajar con nosotros..."
                    value={form.message}
                    error={errors.message}
                    touched={touched.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    maxLength={2000}
                    rows={5}
                  />

                  {/* Success message */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        ¡Aplicación enviada con éxito! Revisaremos tu información y te contactaremos pronto.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full" disabled={submitted}>
                    Enviar aplicación
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </Button>
                </form>
              </motion.div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default CareersPage;
