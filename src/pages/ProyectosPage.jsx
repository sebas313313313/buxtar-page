import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';

/* ── Services with alternating image+text ───────────────────── */
const SERVICES = [
  {
    id: 'marco-logico',
    title: 'Formulación de proyectos Marco Lógico — MGA',
    desc: 'Acompañamos la formulación y estructuración de proyectos de inversión usando la Metodología General Ajustada (MGA), herramienta oficial del Departamento Nacional de Planeación de Colombia. Organizamos de forma modular la información en cuatro procesos: identificación, preparación, evaluación y programación, garantizando que cada proyecto sea eficiente, eficaz y esté alineado con los objetivos del Plan Nacional de Desarrollo.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=900',
    tags: ['MGA Web', 'Marco Lógico', 'DNP', 'Inversión pública'],
  },
  {
    id: 'estudios-mercado',
    title: 'Estudios de mercado',
    desc: 'Realizamos investigaciones y análisis de mercado que te permiten conocer el entorno competitivo, identificar oportunidades de negocio, entender el comportamiento del consumidor y proyectar la demanda de tu producto o servicio. Nuestros estudios son la base para la toma de decisiones estratégicas sólidas y fundamentadas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900',
    tags: ['Análisis sectorial', 'Segmentación', 'Demanda', 'Competitividad'],
  },
  {
    id: 'estudios-financieros',
    title: 'Estudios financieros',
    desc: 'Elaboramos modelos financieros robustos que incluyen proyecciones de flujo de caja, análisis de rentabilidad (VPN, TIR), estructuración de fuentes de financiación y evaluación del retorno de inversión. Traducimos la viabilidad económica de tu proyecto en indicadores claros y comprensibles para inversionistas, entidades públicas y privadas.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900',
    tags: ['Flujo de caja', 'VPN / TIR', 'Financiación', 'ROI'],
  },
  {
    id: 'evaluaciones',
    title: 'Evaluaciones técnicas y financieras de proyectos',
    desc: 'Realizamos evaluaciones integrales que combinan el análisis técnico (capacidad operativa, recursos, cronogramas) con la evaluación financiera (costos, beneficios, impacto económico y social). Nuestras evaluaciones son la herramienta que necesitan las empresas e instituciones para validar la viabilidad de sus iniciativas antes de comprometer recursos.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=900',
    tags: ['Viabilidad técnica', 'Impacto social', 'Costos-beneficios', 'Due Diligence'],
  },
];

/* ── Stats ──────────────────────────────────────────────────── */
const STATS = [
  { value: '50+', label: 'Proyectos formulados' },
  { value: '10+', label: 'Años de experiencia' },
  { value: '100%', label: 'Metodología MGA' },
  { value: '$M+', label: 'En recursos gestionados' },
];

/* ── Page ───────────────────────────────────────────────────── */
const ProyectosPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─── */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
          alt="Formulación de proyectos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/85" />

        <div className="absolute top-28 left-0 right-0 z-20">
          <Container>
            <Link to="/servicios" className="inline-flex items-center text-white/80 hover:text-brand-orange transition-colors text-sm font-semibold uppercase tracking-wider">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a Servicios
            </Link>
          </Container>
        </div>

        <div className="absolute inset-0 flex items-center z-10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/40 rounded-full mb-6">
                Consultoría Estratégica
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Formulación y <span className="text-brand-orange">Evaluación</span> de Proyectos
              </h1>
              <div className="w-20 h-1.5 bg-brand-orange mb-8" />
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Convertimos tus ideas en proyectos viables, bien estructurados y listos para recibir financiación pública o privada.
              </p>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* ── STATS STRIP ─── */}
      <div className="bg-black border-b border-white/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-10 px-6 text-center group hover:bg-brand-orange/5 transition-colors">
                <div className="text-4xl font-extrabold text-brand-orange mb-1">{stat.value}</div>
                <div className="text-brand-gray text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── INTRO ─── */}
      <div className="bg-white border-b border-brand-gray/10">
        <Container>
          <div className="py-16 max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              En Buxtar acompañamos a empresas e instituciones en la{' '}
              <span className="text-black font-semibold">estructuración, formulación y evaluación</span>{' '}
              de proyectos de inversión, utilizando metodologías reconocidas a nivel nacional e internacional para garantizar su viabilidad y éxito.
            </p>
          </div>
        </Container>
      </div>

      {/* ── SERVICES HEADER ─── */}
      <div className="pt-20 pb-4 bg-white">
        <Container>
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">
              ¿En qué te ayudamos?
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-6" />
          </div>
        </Container>
      </div>

      {/* ── ALTERNATING IMAGE + TEXT ─── */}
      <div className="bg-white">
        {SERVICES.map((svc, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`border-t border-brand-gray/10 ${index % 2 !== 0 ? 'bg-[#f9f9f9]' : 'bg-white'}`}
            >
              <Container>
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[420px]">

                  {/* Image */}
                  <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-72 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className={`absolute top-0 bottom-0 w-1 bg-brand-orange ${isEven ? 'right-0' : 'left-0'}`} />
                  </div>

                  {/* Text */}
                  <div className={`flex flex-col justify-center py-12 px-8 lg:px-16 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-4">
                      {String(index + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
                      {svc.title}
                    </h3>
                    <div className="w-10 h-1 bg-brand-orange mb-6" />
                    <p className="text-brand-gray text-lg leading-relaxed mb-8">
                      {svc.desc}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold text-brand-orange border border-brand-orange/30 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          );
        })}
      </div>

      {/* ── WHY BUXTAR ─── */}
      <div className="py-24 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Nuestra Propuesta
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">¿Por qué elegir a Buxtar?</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Metodología Probada',
                desc: 'Aplicamos metodologías reconocidas como Marco Lógico y MGA del DNP, garantizando rigor técnico y aceptación ante entidades financiadoras.',
              },
              {
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
                title: 'Equipo Especializado',
                desc: 'Contamos con profesionales con experiencia en formulación de proyectos públicos, privados y de cooperación internacional.',
              },
              {
                icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                title: 'Resultados Tangibles',
                desc: 'Más de 50 proyectos formulados y aprobados ante entidades como Minciencias, SENA, Innpulsa, Fonade y cooperantes internacionales.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-brand-gray/20 hover:border-brand-orange/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-black text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ─── */}
      <div className="py-24 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              ¿Tienes un proyecto que necesitas formular?
            </h2>
            <p className="text-brand-gray text-lg mb-10">
              Cuéntanos tu idea y juntos la estructuramos para que tenga el mejor impacto y acceso a financiación.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange text-white text-base font-bold rounded-xl hover:bg-brand-orange/90 transition-all duration-300 shadow-lg shadow-brand-orange/20"
            >
              Hablemos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProyectosPage;
