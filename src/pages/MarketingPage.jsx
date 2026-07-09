import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';

/* ── Sub-services con imagen ──────────────────────────────────── */
const SUB_SERVICES = [
  {
    id: 'branding',
    title: 'Diseño de marca',
    desc: 'Creamos la identidad de tu empresa de manera única y llamativa para lograr una marca memorable que destaque de la competencia.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'web',
    title: 'Diseño de sitios web',
    desc: 'Diseñamos, desarrollamos y optimizamos tu sitio web con la que darás a conocer tu marca de manera creativa a tus clientes potenciales.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'ads',
    title: 'Campañas de publicidad paga',
    desc: 'Fortalecemos y orientamos tus anuncios a clientes potenciales haciendo uso de plataformas como Meta, Google Ads, Linkedin e Instagram, ayudando a tu empresa a cumplir los objetivos propuestos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'programatica',
    title: 'Campañas de Programática',
    desc: 'Promociona tu marca y fideliza tus clientes accediendo a espacios publicitarios en el momento y lugar adecuado.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'content',
    title: 'Estrategias de marketing de contenidos',
    desc: 'Atrae a tus clientes con estrategias orgánicas personalizadas, creativas y diferentes. Creamos contenidos relevantes enfocados en la identidad y crecimiento de tu marca.',
    image: 'https://images.unsplash.com/photo-1432828610008-afb95660caa3?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'automation',
    title: 'Automatización de marketing',
    desc: 'Utilizamos tecnología innovadora para automatizar tus procesos de marketing y te ayudamos a reducir tus esfuerzos manuales para aumentar la eficacia de tus acciones.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 'chatbot',
    title: 'Chatbot',
    desc: 'Automatiza las respuestas a tus clientes y obtén soluciones rápidas, escalables con interacciones proactivas y así mejorar la experiencia de tu marca.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=900'
  }
];

/* ── Component ─────────────────────────────────────────────────── */
const MarketingPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
          alt="Marketing Digital"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay: lighter top (navbar), heavy bottom */}
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
                Área de Marketing
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Marketing <span className="text-brand-orange">Digital</span>
              </h1>
              <div className="w-20 h-1.5 bg-brand-orange mb-8" />
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Consultoría en Inbound Marketing
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
              Te brindamos nuestro acompañamiento en{' '}
              <span className="text-black font-semibold">crear, planear y ejecutar</span> tu
              estrategia de marketing orientada a resultados de valor a tu cliente potencial ideal.
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
                <div className={`grid lg:grid-cols-2 gap-0 items-stretch min-h-[400px]`}>

                  {/* Image column */}
                  <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-72 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Subtle orange accent line on edge */}
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
              ¿Listo para impulsar tu marca?
            </h2>
            <p className="text-brand-gray text-lg mb-10">
              Contáctanos y juntos construimos la estrategia digital perfecta para tu empresa.
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

export default MarketingPage;
