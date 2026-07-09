import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';

const SUB_SERVICES = [
  {
    id: 'blockchain',
    title: 'Blockchain',
    desc: 'Digitalizamos tus transacciones estableciendo modelos comerciales mejorados sin incurrir en grandes costos.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'analitica',
    title: 'Analítica de datos',
    desc: 'Comprendemos la necesidad de tu negocio para implementar modelos de analítica avanzada y así entender todo tu entorno digital. Nosotros proveemos este servicio para que puedas tomar decisiones acertadas y destinadas al crecimiento de tu negocio.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'bigdata',
    title: 'Big Data',
    desc: 'Ofrecemos soluciones en el análisis e interpretación de tus datos para transformarlo en valor con recursos prácticos, estratégicos y completos.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'dev',
    title: 'Desarrollo de software web - móvil',
    desc: 'Prestamos un servicio integral para la creación y desarrollo de plataformas web-móvil facilitando la compatibilidad con cualquier dispositivo.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'iot',
    title: 'IoT — Internet de las cosas',
    desc: 'Con la implementación de proyectos con tecnologías IoT te ayudamos a captar, transformar y generar valor con los datos para fortalecer tus procesos productivos y empresariales.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'ai',
    title: 'Inteligencia Artificial',
    desc: 'Nuestro servicio y soluciones de IA te apoyará a impactar y escalar tu negocio para obtener el máximo valor.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'metaverse',
    title: 'Metaverso',
    desc: 'Contamos con las plataformas y capacitaciones en el mundo del metaverso para crear modelos de negocio digitales exitosos para tu marca.',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'digital-trans',
    title: 'Digital Transformación',
    desc: 'Creamos y Transformamos los procesos digitales de tu marca para cumplir con el mercado evolutivo en vigencia y ofrecer valor a nuestros clientes.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=900'
  }
];

const ConsultoriaPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/consultoria_hero.png"
          alt="Consultoría y Transformación Digital"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

        {/* Back link */}
        <div className="absolute top-28 left-0 right-0 z-20">
          <Container>
            <Link
              to="/servicios"
              className="inline-flex items-center text-white/80 hover:text-brand-orange transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a Servicios
            </Link>
          </Container>
        </div>

        {/* Hero text */}
        <div className="absolute inset-0 flex items-center z-10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/40 rounded-full mb-6">
                Transformación Empresarial
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Consultoría y{' '}
                <span className="text-brand-orange">Transformación</span>{' '}
                Digital
              </h1>
              <div className="w-20 h-1.5 bg-brand-orange mb-8" />
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Fomentamos y acompañamos la evolución digital de tu empresa creando estrategias innovadoras para generar resultados tangibles.
              </p>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* ── INTRO STRIP ─────────────────────────────────────────── */}
      <div className="bg-white border-b border-brand-gray/10">
        <Container>
          <div className="py-16 max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              Integramos{' '}
              <span className="text-black font-semibold">tecnologías digitales en todas las áreas de tu empresa</span>,
              cambiando fundamentalmente la forma en que opera y brinda valor a sus clientes.
            </p>
          </div>
        </Container>
      </div>

      {/* ── SERVICIOS HEADER ─────────────────────────────────────── */}
      <div className="py-20 bg-white">
        <Container>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Nuestras Capacidades
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">
              Cubrimos tus necesidades
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-6" />
          </div>
        </Container>
      </div>

      {/* ── ALTERNATING IMAGE + TEXT SECTIONS ───────────────────── */}
      <div className="bg-white">
        {SUB_SERVICES.map((sub, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`border-t border-brand-gray/10 ${index % 2 !== 0 ? 'bg-[#f9f9f9]' : 'bg-white'}`}
            >
              <Container>
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[400px]">

                  {/* Image column */}
                  <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-72 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className={`absolute top-0 bottom-0 w-1 bg-brand-orange ${isEven ? 'right-0' : 'left-0'}`} />
                  </div>

                  {/* Text column */}
                  <div className={`flex flex-col justify-center py-12 px-8 lg:px-16 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-4">
                      {String(index + 1).padStart(2, '0')} / {String(SUB_SERVICES.length).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
                      {sub.title}
                    </h3>
                    <div className="w-10 h-1 bg-brand-orange mb-6" />
                    <p className="text-brand-gray text-lg leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                </div>
              </Container>
            </motion.div>
          );
        })}
      </div>

      {/* ── CTA BOTTOM ───────────────────────────────────────────── */}
      <div className="py-24 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-brand-gray text-lg mb-10">
              Contáctanos y construimos juntos la hoja de ruta digital que tu organización necesita.
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

export default ConsultoriaPage;
