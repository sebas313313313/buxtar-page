import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

/* ─── "¿Qué hacemos?" feature pills ───────────────────────────────────── */
const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    label: 'Transformación Digital',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    label: 'Análisis de Datos',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    label: 'Desarrollo de Software',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    label: 'Aplicaciones Móviles',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
    label: 'Consultoría TI',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: 'Marketing Digital',
  },
];

/* ─── Values (Misión / Visión) ─────────────────────────────────────────── */
const VALUES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Nuestra Misión',
    text: 'Crear soluciones tecnológicas y conexiones digitales en todo el mundo que mejoren los procesos empresariales e impacten positivamente en la calidad de vida de las personas.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Nuestra Visión',
    text: 'Ser aliados estratégicos de las empresas para ayudarles a su crecimiento, expansión e implementación de nuevas tecnologías, para optimizar procesos y costos, generando valor a la marca de nuestros clientes.',
  },
];

/* ─── Component ────────────────────────────────────────────────────────── */
const Home = () => {
  return (
    <>
      <Hero />

      {/* ── ¿Qué hacemos? ── */}
      <Section id="que-hacemos" className="bg-white">
        <Container>
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Nuestra Propuesta
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              ¿Qué hacemos?
            </h2>
            {/* orange rule */}
            <div className="w-16 h-1 bg-brand-orange mx-auto mb-8 rounded-full" />
            <p className="text-brand-gray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Buxtar implementa la transformación digital empresarial por medio de la integración
              de tecnologías digitales en todas las áreas de las empresas, cambiando
              fundamentalmente la forma en que opera y brinda valor a sus clientes.
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                className="group flex flex-col items-center text-center p-8 border border-brand-gray/20 rounded-2xl hover:border-brand-orange/50 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-black text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <span className="text-black font-semibold text-sm tracking-wide">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Nuestros Valores ── */}
      <Section id="valores" className="bg-white">
        <Container>
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Lo que nos mueve
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              Nuestros valores
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                className="relative group flex flex-col gap-6 p-10 rounded-2xl border border-brand-gray/20 hover:border-brand-orange/40 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* background hover glow */}
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors duration-500 rounded-2xl" />

                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-5">
                  {/* Icon circle */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">{v.title}</h3>
                    <p className="text-brand-gray leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;
