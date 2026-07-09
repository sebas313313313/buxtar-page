import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import allies from '../data/allies';

/* ── Org Chart Nodes ─────────────────────────────────────────── */
const ORG_NODES = [
  { id: 'junta',     label: 'Junta Directiva',         angle: 90,  ring: 'inner' },
  { id: 'comercial', label: 'Comercial · Gte. Líder Mktg', angle: 90,  ring: 'mid', sub: ['Equipo comercial principal', 'Líderes Zonas Geográficas'] },
  { id: 'mktg',     label: 'Área Marketing Digital · CMO', angle: 0,   ring: 'mid', sub: ['Eq. MUD: Publicistas, Ma. Contenidos', 'Eq. Programación: Diseñadores, Gestores'] },
  { id: 'cto',      label: 'Área Desarrollo · CTO Innovación', angle: 270, ring: 'mid', sub: ['Líder Ag. Cafetera: Devs, Diseñadores', 'Líder Proyecto X', 'Líder Pruebas: Tester'] },
  { id: 'proyectos',label: 'Oficina de Proyectos',     angle: 180, ring: 'mid', sub: ['Equipo de Proyectos', 'Asesor Jurídico', 'CM - Advisors'] },
  { id: 'exec',     label: 'Dirección Ejecutiva',       angle: 270, ring: 'inner' },
  { id: 'admin',    label: 'Área Admin. Financiera',    angle: 135, ring: 'outer', sub: ['Aux. Contable · Contadora · CFO'] },
  { id: 'rrhh',     label: 'Talento Humano',            angle: 45,  ring: 'outer', sub: ['Líder T.H.'] },
];

/* ── Digital Advantages ─────────────────────────────────────── */
const ADVANTAGES = [
  { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Rentabilidad medible', desc: 'Optimiza tus recursos publicitarios y mide el retorno de cada inversión en tiempo real.' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Conexión con tu público', desc: 'Llegamos a tu audiencia ideal con campañas orgánicas y pagas diseñadas para tus objetivos.' },
  { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', title: 'Interacción directa', desc: 'Facilita la proximidad con tus usuarios; entender su comportamiento nunca fue tan sencillo.' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Resultados en tiempo real', desc: 'Accede a tus métricas al instante y ajusta tu estrategia para maximizar el impacto.' },
  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Alcance global', desc: 'Llega a usuarios en cualquier parte del mundo sin las limitaciones de los medios tradicionales.' },
  { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Optimización de costos', desc: 'Atrae nuevos clientes, reduce costos operativos y potencia tus recursos con herramientas digitales.' },
];

/* ── Timeline ───────────────────────────────────────────────── */
const MILESTONES = [
  { year: '2015', title: 'Fundación', desc: 'Nace Buxtar Corp S.A.S. con la misión de transformar empresas a través de tecnología digital.' },
  { year: '2016', title: 'Primeros proyectos', desc: 'Formulación de los primeros proyectos con Minciencias y entidades públicas nacionales.' },
  { year: '2017', title: 'Expansión digital', desc: 'Consolidación del área de Marketing Digital y primeras alianzas con Microsoft y BBVA.' },
  { year: '2018', title: 'Portafolio tecnológico', desc: 'Lanzamiento de aplicaciones propias como Heroican y alianzas con el ecosistema startup colombiano.' },
  { year: '2020', title: 'Pandemia & resiliencia', desc: 'Adaptación y liderazgo en la digitalización de empresas durante la crisis COVID-19.' },
  { year: '2022', title: 'Cuarta Revolución', desc: 'Integración de IA, IoT y soluciones de transformación digital de cuarta revolución industrial.' },
  { year: '2024', title: 'Presente', desc: 'Más de 50 clientes, 4 líneas de servicio activas y proyección de expansión internacional.' },
];

/* ── Allies ticker ──────────────────────────────────────────── */
const AlliesTicker = () => {
  const doubled = [...allies, ...allies];
  return (
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((ally, i) => (
          <div
            key={`${ally.id}-${i}`}
            className="flex-shrink-0 flex items-center justify-center w-36 h-20 px-4 bg-white border border-brand-gray/20 rounded-xl shadow-sm grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
          >
            <img src={ally.logo} alt={ally.name} className="max-w-full max-h-full object-contain" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ── Page ───────────────────────────────────────────────────── */
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="relative bg-black pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(246,134,24,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(246,134,24,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/40 rounded-full mb-8">
                Sobre Nosotros
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                Tecnología que <span className="text-brand-orange">conecta</span> marcas con el mundo
              </h1>
              <div className="w-20 h-1.5 bg-brand-orange mb-8" />
              <p className="text-xl text-white/70 leading-relaxed">
                BUXTAR desarrolla estrategias digitales que establecen conexiones bidireccionales entre la marca y su público objetivo, generando valor real y crecimiento sostenible.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
              className="grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'Años de experiencia' },
                { value: '50+', label: 'Clientes activos' },
                { value: '4', label: 'Líneas de servicio' },
                { value: '100+', label: 'Proyectos exitosos' },
              ].map(s => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-brand-orange/10 hover:border-brand-orange/20 transition-all duration-300">
                  <div className="text-4xl font-extrabold text-brand-orange mb-2">{s.value}</div>
                  <div className="text-sm text-white/60 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>

      {/* ── QUIÉNES SOMOS ── */}
      <div className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-6">Conócenos</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">¿Quiénes somos?</h2>
              <div className="w-16 h-1 bg-brand-orange mb-8" />
              <p className="text-lg text-brand-gray leading-relaxed mb-8">
                Somos una empresa tecnológica conformada por un equipo especializado en <strong className="text-black">marketing digital</strong> y <strong className="text-black">desarrollo de software</strong>, comprometidos con los objetivos comerciales de nuestros clientes a través de medios digitales y tecnologías de vanguardia.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed">
                Implementamos proyectos con tecnologías de la <strong className="text-black">Cuarta Revolución Industrial</strong> orientados a crear productos nuevos y generar innovación incremental o disruptiva en el tejido empresarial colombiano e internacional.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
                  title: 'Nuestra Misión',
                  desc: 'Crear soluciones tecnológicas y conexiones digitales en todo el mundo que mejoren los procesos empresariales e impacten positivamente en la calidad de vida de las personas.',
                },
                {
                  icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
                  title: 'Nuestra Visión',
                  desc: 'Ser aliados estratégicos de las empresas para ayudarles a su crecimiento, expansión e implementación de nuevas tecnologías, optimizando procesos y costos, generando valor a la marca de nuestros clientes.',
                },
              ].map((card, i) => (
                <motion.div key={card.title}
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group flex gap-5 p-7 rounded-2xl border border-brand-gray/20 hover:border-brand-orange/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-black text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                    <p className="text-brand-gray leading-relaxed text-sm">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── ORG CHART ── */}
      <div className="py-24 bg-[#f9f9f9] border-y border-brand-gray/10">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">Estructura Organizacional</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Nuestro Equipo</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto" />
          </div>

          {/* ── ULTRA PREMIUM ORG CHART (UNIVERSAL RESPONSIVE) ── */}
          <div className="w-full flex justify-center items-center h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden -mt-4">
            <div className="relative w-[1000px] h-[1000px] flex-shrink-0 flex items-center justify-center font-sans transform scale-[0.35] sm:scale-[0.45] md:scale-[0.55] lg:scale-[0.65] xl:scale-[0.75] origin-center">
              
              {/* Ambient Background Glow */}
              <div className="absolute inset-0 bg-brand-orange/5 blur-[120px] rounded-full scale-[1.2] z-0 pointer-events-none" />

              {/* Rings & Orbiting Particles */}
              {/* Outer Ring (Radius 360) */}
              <div className="absolute w-[720px] h-[720px] z-10">
                <motion.div initial={{ opacity: 0, rotate: -90 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute inset-0 rounded-full border-[2px] border-dashed border-gray-200/60" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-brand-orange rounded-full shadow-[0_0_15px_#f68618]" />
                </motion.div>
              </div>

              {/* Middle Ring (Radius 250) */}
              <div className="absolute w-[500px] h-[500px] z-10">
                <motion.div initial={{ opacity: 0, rotate: 90 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute inset-0 rounded-full border-[2px] border-dashed border-gray-300/80" />
              </div>

              {/* Inner Solid Ring (Radius 130) */}
              <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute w-[260px] h-[260px] rounded-full border-4 border-brand-orange shadow-[0_0_30px_rgba(246,134,24,0.15)] z-10" />
              
              {/* Radar Ripple Effect behind Center */}
              <motion.div animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute w-[200px] h-[200px] rounded-full border-2 border-brand-orange z-0" />
              
              {/* Center Core */}
              <div className="absolute z-20" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }} className="w-[180px] h-[180px] rounded-full bg-black flex flex-col items-center justify-center shadow-[0_0_40px_rgba(246,134,24,0.5)] hover:shadow-[0_0_70px_rgba(246,134,24,0.8)] transition-shadow duration-500 overflow-hidden group">
                  <span className="text-[40px] font-extrabold tracking-wider text-white relative z-10">BU<span className="text-brand-orange">X</span>TAR</span>
                  <span className="text-[9px] font-semibold tracking-[0.3em] text-white mt-1 relative z-10">DIGITAL MARKETING</span>
                </motion.div>
              </div>

              {/* ── Inner Ring Tags (Radius 130) ── */}
              <div className="absolute z-30" style={{ left: '50%', top: 'calc(50% - 140px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="px-6 py-2 bg-brand-orange text-white rounded-full font-bold shadow-[0_10px_20px_-10px_#f68618] uppercase tracking-wide text-xs border border-orange-400">Junta Directiva</motion.div>
              </div>

              <div className="absolute z-30" style={{ left: '50%', top: 'calc(50% + 140px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="px-6 py-2 bg-black text-white border border-brand-orange rounded-full font-bold shadow-[0_10px_20px_-10px_rgba(0,0,0,0.8)] uppercase tracking-wide text-xs">Dirección Ejecutiva</motion.div>
              </div>

              {/* ── Middle Ring Cards (Radius 250) ── */}
              {/* TOP: Comercial */}
              <div className="absolute z-40 w-52" style={{ left: '50%', top: 'calc(50% - 250px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="bg-white p-3.5 rounded-2xl shadow-2xl text-center border-b-4 border-b-brand-orange hover:scale-105 transition-transform cursor-default">
                  <div className="font-bold text-brand-orange text-xs mb-1 uppercase tracking-wider">Comercial</div>
                  <div className="text-[11px] font-bold text-gray-800">Gerente - Líder Mcdeo</div>
                </motion.div>
              </div>

              {/* RIGHT: Mktg. Digital */}
              <div className="absolute z-40 w-52" style={{ left: 'calc(50% + 250px)', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="bg-white p-3.5 rounded-2xl shadow-2xl text-center border-b-4 border-b-brand-orange hover:scale-105 transition-transform cursor-default">
                  <div className="font-bold text-brand-orange text-xs mb-1 uppercase tracking-wider">Área Marketing Digital</div>
                  <div className="text-[11px] font-bold text-gray-800">CMO. Líder MKD</div>
                </motion.div>
              </div>

              {/* BOTTOM: Desarrollo */}
              <div className="absolute z-40 w-52" style={{ left: '50%', top: 'calc(50% + 250px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="bg-white p-3.5 rounded-2xl shadow-2xl text-center border-b-4 border-b-brand-orange hover:scale-105 transition-transform cursor-default">
                  <div className="font-bold text-brand-orange text-xs mb-1 uppercase tracking-wider">Área de desarrollo</div>
                  <div className="text-[11px] font-bold text-gray-800">CTO. Innovación</div>
                </motion.div>
              </div>

              {/* LEFT: Oficina Proyectos */}
              <div className="absolute z-40 w-52" style={{ left: 'calc(50% - 250px)', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="bg-white p-3.5 rounded-2xl shadow-2xl text-center border-b-4 border-b-brand-orange hover:scale-105 transition-transform cursor-default">
                  <div className="font-bold text-brand-orange text-xs mb-1 uppercase tracking-wider">Oficina de Proyectos</div>
                  <div className="text-[11px] font-bold text-gray-800">Equipo de proyectos</div>
                </motion.div>
              </div>

              {/* ── Outer Ring Teams (Radius ~360) ── */}
              
              {/* TOP Outer (Comercial) */}
              <div className="absolute z-30 w-56" style={{ left: '50%', top: 'calc(50% - 350px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white/70 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-xl text-center text-xs font-bold text-gray-700">Equipo comercial principal</motion.div>
              </div>
              
              <div className="absolute z-30 w-[160px]" style={{ left: 'calc(50% - 210px)', top: 'calc(50% - 310px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="bg-white/70 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-xl text-xs font-bold text-gray-700 space-y-1">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Aliados</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Comisiones</div>
                </motion.div>
              </div>

              <div className="absolute z-30 w-[160px]" style={{ left: 'calc(50% + 210px)', top: 'calc(50% - 310px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="bg-white/70 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-xl text-xs font-bold text-gray-700 space-y-1">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Líderes Zonas</div>
                  <div className="text-[10px] text-gray-500 ml-3.5">(geográficas)</div>
                </motion.div>
              </div>

              {/* RIGHT Outer (Marketing) */}
              <div className="absolute z-30 w-[170px]" style={{ left: 'calc(50% + 410px)', top: 'calc(50% - 100px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="bg-white/70 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-xl text-xs font-bold text-gray-700 space-y-1.5">
                  <div className="text-black font-extrabold mb-2 border-b border-gray-200/60 pb-1">Eq. MUD</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Publicistas</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Ma. contenidos</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Manejo clientes</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Manejo cuentas</div>
                </motion.div>
              </div>

              <div className="absolute z-30 w-[170px]" style={{ left: 'calc(50% + 410px)', top: 'calc(50% + 110px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="bg-white/70 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-xl text-xs font-bold text-gray-700 space-y-1.5">
                  <div className="text-black font-extrabold mb-2 border-b border-gray-200/60 pb-1">Eq. Programación</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Diseñadores</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Manejo de cuentas</div>
                </motion.div>
              </div>

              {/* BOTTOM Outer (Desarrollo) */}
              <div className="absolute z-30 w-56" style={{ left: '50%', top: 'calc(50% + 350px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }} className="bg-white/70 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-xl text-center text-xs font-bold text-gray-700">Líder Proyecto X</motion.div>
              </div>

              <div className="absolute z-30 w-[170px]" style={{ left: 'calc(50% - 210px)', top: 'calc(50% + 310px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} className="bg-white/70 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-xl text-xs font-bold text-gray-700 space-y-1.5">
                  <div className="text-black font-extrabold mb-2 border-b border-gray-200/60 pb-1 leading-tight">Líder Agen. Cafetera</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Desarrolladores</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Diseñador</div>
                </motion.div>
              </div>

              <div className="absolute z-30 w-[170px]" style={{ left: 'calc(50% + 210px)', top: 'calc(50% + 310px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} className="bg-white/70 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-xl text-xs font-bold text-gray-700 space-y-1.5">
                  <div className="text-black font-extrabold mb-2 border-b border-gray-200/60 pb-1">Líder Pruebas</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Tester</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" /> Eq. pruebas</div>
                </motion.div>
              </div>

              {/* LEFT Outer (Oficina Proyectos) */}
              <div className="absolute z-30 w-[170px]" style={{ left: 'calc(50% - 410px)', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }} className="bg-white/70 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-xl text-xs font-bold text-gray-700 text-center">Equipo de Proyectos</motion.div>
              </div>

              {/* ── Corners (Support / Admin - Dark Theme - Radius ~460) ── */}
              {/* Top Left */}
              <div className="absolute z-50 w-[160px]" style={{ left: 'calc(50% - 380px)', top: 'calc(50% - 410px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.3 }} className="bg-gradient-to-br from-[#1a1a1a] to-black text-white p-4 rounded-2xl shadow-2xl border border-white/10 border-l-4 border-l-brand-orange hover:-translate-x-1 transition-transform">
                  <div className="font-bold text-xs mb-3 text-white leading-tight">Área Admin Financiera</div>
                  <div className="text-[10px] text-gray-400 font-medium space-y-1.5">
                    <div>- AUX contable</div>
                    <div>- Contadora</div>
                    <div>- CFO</div>
                  </div>
                </motion.div>
              </div>
              
              {/* Top Right */}
              <div className="absolute z-50 w-[160px]" style={{ left: 'calc(50% + 380px)', top: 'calc(50% - 410px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.4 }} className="bg-gradient-to-bl from-[#1a1a1a] to-black text-white p-4 rounded-2xl shadow-2xl border border-white/10 border-r-4 border-r-brand-orange text-right hover:translate-x-1 transition-transform">
                  <div className="font-bold text-xs mb-3 text-white">Talento Humano</div>
                  <div className="text-[10px] text-gray-400 font-medium space-y-1.5">
                    <div>- Líder T.H.</div>
                    <div>- Talento Humano</div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Left */}
              <div className="absolute z-50 w-[160px]" style={{ left: 'calc(50% - 380px)', top: 'calc(50% + 410px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.5 }} className="bg-gradient-to-tr from-[#1a1a1a] to-black text-white p-4 rounded-2xl shadow-2xl border border-white/10 border-l-4 border-l-brand-orange hover:-translate-x-1 transition-transform">
                  <div className="font-bold text-xs mb-3 text-white">Asesor jurídico</div>
                  <div className="text-[10px] text-gray-400 font-medium space-y-1.5">
                    <div>- Jurídica</div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Right */}
              <div className="absolute z-50 w-[160px]" style={{ left: 'calc(50% + 380px)', top: 'calc(50% + 410px)', transform: 'translate(-50%, -50%)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.6 }} className="bg-gradient-to-tl from-[#1a1a1a] to-black text-white p-4 rounded-2xl shadow-2xl border border-white/10 border-r-4 border-r-brand-orange text-right hover:translate-x-1 transition-transform">
                  <div className="font-bold text-xs mb-3 text-white">CM</div>
                  <div className="text-[10px] text-gray-400 font-medium space-y-1.5">
                    <div>- Asesores - Advisors</div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </Container>
      </div>

      {/* ── DIGITAL ADVANTAGES ── */}
      <div className="py-24 bg-black">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">Propuesta de Valor</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Ventajas del marketing digital para tu empresa</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mb-8" />
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">Con Buxtar lograrás optimizar los recursos publicitarios de tu empresa y alcanzar una rentabilidad sostenida.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <motion.div key={adv.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-4 p-6 rounded-2xl border border-white/10 hover:border-brand-orange/40 hover:bg-brand-orange/5 transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={adv.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── SOBRE NOSOTROS (quote block) ── */}
      <div className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-6">Por qué elegirnos</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">Sobre Buxtar</h2>
              <div className="w-16 h-1 bg-brand-orange mb-8" />
              <div className="space-y-5 text-brand-gray text-lg leading-relaxed">
                <p>En Buxtar implementamos proyectos con <strong className="text-black">tecnologías de la Cuarta Revolución Industrial</strong> orientados a crear productos nuevos y generar innovación incremental o disruptiva empresarial.</p>
                <p>Creamos estrategias digitales que permiten utilizar internet como <strong className="text-black">canal de comunicación y negocios efectivo</strong> entre las empresas y sus clientes potenciales.</p>
                <p>Para tu empresa es fundamental atraer y consolidar clientes, alcanzar nuevos mercados y fortalecer su imagen a través de internet.</p>
              </div>
            </div>
            <div className="space-y-4 pt-4">
              {[
                { title: 'Conexiones bidireccionales', desc: 'Establecemos canales de comunicación directa entre tu marca y tu público, generando lealtad y engagement genuino.' },
                { title: 'Atracción de nuevos clientes', desc: 'Internet permite captar clientes sin barreras geográficas, disminuir costos de adquisición y optimizar recursos.' },
                { title: 'Presencia global', desc: 'Buxtar crea las conexiones rentables que tu empresa necesita para crecer más allá de las fronteras locales.' },
              ].map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl border border-brand-gray/20 hover:border-brand-orange/40 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-brand-orange">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1">{item.title}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── ALLIES TICKER ── */}
      <div className="py-16 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-4">Alianzas Estratégicas</span>
            <h2 className="text-3xl font-extrabold text-black">Nuestros Aliados</h2>
          </div>
        </Container>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <AlliesTicker />
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div className="py-24 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">Trayectoria</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Nuestra Historia</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Horizontal line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-brand-gray/20 hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center">
                  {/* Dot */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-brand-orange border-4 border-white shadow-md flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="text-brand-orange font-extrabold text-lg mb-2">{m.year}</div>
                  <div className="text-black font-bold text-sm mb-2">{m.title}</div>
                  <p className="text-brand-gray text-xs leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-24 bg-black border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-brand-gray text-lg mb-10">
              Conoce todas nuestras soluciones y da el primer paso hacia la digitalización exitosa de tu negocio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/servicios" className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange text-white text-base font-bold rounded-xl hover:bg-brand-orange/90 transition-all duration-300 shadow-lg shadow-brand-orange/20">
                Ver servicios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/contacto" className="inline-flex items-center gap-2 px-10 py-4 bg-transparent text-white text-base font-bold rounded-xl border-2 border-white/20 hover:border-brand-orange/60 hover:text-brand-orange transition-all duration-300">
                Contáctanos
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
