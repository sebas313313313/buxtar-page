import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/layout/Container';

/* ── Technologies (with devicons logos) ─────────────────────── */
const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const TECHNOLOGIES = [
  { name: 'JavaScript',   logo: `${DEVICONS}/javascript/javascript-original.svg` },
  { name: 'TypeScript',   logo: `${DEVICONS}/typescript/typescript-original.svg` },
  { name: 'React Native', logo: `${DEVICONS}/react/react-original.svg` },
  { name: 'Angular',      logo: `${DEVICONS}/angular/angular-original.svg` },
  { name: 'Flutter',      logo: `${DEVICONS}/flutter/flutter-original.svg` },
  { name: 'Node.js',      logo: `${DEVICONS}/nodejs/nodejs-original.svg` },
  { name: 'Python',       logo: `${DEVICONS}/python/python-original.svg` },
  { name: 'PHP',          logo: `${DEVICONS}/php/php-original.svg` },
  { name: 'Laravel',      logo: `${DEVICONS}/laravel/laravel-original.svg` },
  { name: 'Django',       logo: `${DEVICONS}/django/django-plain.svg` },
  { name: 'Spring Boot',  logo: `${DEVICONS}/spring/spring-original.svg` },
  { name: 'Vite',         logo: `${DEVICONS}/vitejs/vitejs-original.svg` },
  { name: 'HTML5',        logo: `${DEVICONS}/html5/html5-original.svg` },
  { name: 'CSS3',         logo: `${DEVICONS}/css3/css3-original.svg` },
  { name: 'MySQL',        logo: `${DEVICONS}/mysql/mysql-original.svg` },
  { name: 'PostgreSQL',   logo: `${DEVICONS}/postgresql/postgresql-original.svg` },
  { name: 'MongoDB',      logo: `${DEVICONS}/mongodb/mongodb-original.svg` },
  { name: 'SQL Server',   logo: `${DEVICONS}/microsoftsqlserver/microsoftsqlserver-original.svg` },
  { name: 'AWS',          logo: `${DEVICONS}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: 'Azure',        logo: `${DEVICONS}/azure/azure-original.svg` },
];

/* ── Apps (real icons from /logosapps/) ─────────────────────── */
const APPS = [
  {
    id: 'heroican',
    name: 'Heroican',
    icon: '/logosapps/heroican',
    platform: 'Android',
    color: '#F68618',
    desc: 'Desarrollada en Android nativo, que utiliza el potencial de las redes sociales para crear escuadrones de búsqueda para encontrar mascotas perdidas. Por medio de geolocalización informa a las demás personas que tienen la aplicación móvil para crear una comunidad en pro de encontrar animalitos perdidos. Además permite hacer adopciones, publicar tips y crear perfiles y galerías de fotos por mascota.',
    link: null,
  },
  {
    id: 'coffee-agenda',
    name: 'Coffee Agenda',
    icon: '/logosapps/agendacafetera',
    platform: 'Web / App',
    color: '#6F4E37',
    desc: 'Aplicación de gestión integral para el sector cafetero. Creamos la identidad de tu empresa de manera única y llamativa para lograr una marca memorable que destaque de la competencia.',
    link: null,
  },
  {
    id: 'conexcoffee',
    name: 'ConexCoffee',
    icon: '/logosapps/conexcoffe',
    platform: 'Sitio Web',
    color: '#4CAF50',
    desc: 'Diseñamos, desarrollamos y optimizamos tu sitio web con la que darás a conocer tu marca de manera creativa a tus clientes potenciales.',
    link: null,
  },
  {
    id: 'en-dios-confio',
    name: 'En Dios Confío',
    icon: '/logosapps/endiosconfio',
    platform: 'Android / iOS',
    color: '#7B68EE',
    desc: 'En Dios Confío es una aplicación que ayuda a personas de habla hispana a edificar su vida y tomar mejores decisiones en momentos importantes. A través de En Dios Confío se puede acceder a la palabra del Señor: consejos, mensajes diarios, devocionales, videos, oraciones y demás recursos que guían a cada creyente, con la sabiduría eterna del Creador.',
    link: '#',
  },
  {
    id: 'superheroes',
    name: 'Superhéroes por la Paz',
    icon: '/logosapps/heroesporlapaz',
    platform: 'Unity / Mobile',
    color: '#E91E63',
    desc: 'Aplicación móvil desarrollada en Unity que permite a los niños conocer a Colombia y sus regiones, convirtiéndose en Superhéroes a medida que van completando retos y ganando los poderes que completarán su súper traje, para convertirse en un verdadero Superhéroe por La Paz.',
    link: '#',
  },
  {
    id: 'apuestale',
    name: 'Apuestale a la Paz',
    icon: '/logosapps/ApuestaleALaPaz',
    platform: 'App / Web',
    color: '#009688',
    desc: 'Herramienta lúdica y divertida para que los jóvenes entre 13 a 17 años entiendan la ley, la interioricen y usen esos conocimientos en caso de victimización, a través del juego.',
    link: null,
  },
];

/* ── Infinite tech ticker ───────────────────────────────────── */
const TechTicker = ({ techs, direction = 1 }) => {
  const repeated = [...techs, ...techs, ...techs];
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: direction === 1 ? ['0%', '-33.33%'] : ['-33.33%', '0%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-brand-gray/20 bg-white shadow-sm hover:border-brand-orange/40 hover:shadow-md transition-all duration-200 cursor-default whitespace-nowrap group"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-black group-hover:text-brand-orange transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ── App Modal ──────────────────────────────────────────────── */
const AppModal = ({ app, onClose }) => (
  <AnimatePresence>
    {app && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 z-10"
          initial={{ scale: 0.92, y: 24 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.92, y: 24 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-brand-gray/10 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* App icon + title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-brand-gray/20 shadow-lg flex-shrink-0 bg-white">
              <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-black">{app.name}</h3>
              <span className="text-sm font-semibold text-brand-orange">{app.platform}</span>
            </div>
          </div>

          <div className="w-12 h-1 bg-brand-orange mb-6 rounded-full" />

          <p className="text-brand-gray leading-relaxed text-base">{app.desc}</p>

          {app.link && (
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange/90 transition-colors"
            >
              Descargar app
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ── Page ───────────────────────────────────────────────────── */
const SoftwarePage = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const half = Math.ceil(TECHNOLOGIES.length / 2);
  const row1 = TECHNOLOGIES.slice(0, half);
  const row2 = TECHNOLOGIES.slice(half);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─── */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600"
          alt="Desarrollo de Software"
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
                Ingeniería Digital
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Desarrollo de <span className="text-brand-orange">Software</span>
              </h1>
              <div className="w-20 h-1.5 bg-brand-orange mb-8" />
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Desarrollo web y móvil
              </p>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* ── INTRO ─── */}
      <div className="bg-white border-b border-brand-gray/10">
        <Container>
          <div className="py-16 max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              Diseñamos, desarrollamos e implementamos un software{' '}
              <span className="text-black font-semibold">optimizado para los procesos de tu empresa</span>,
              logrando crear un entorno sencillo e intuitivo.
            </p>
          </div>
        </Container>
      </div>

      {/* ── TECH CAROUSEL ─── */}
      <div className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Stack Tecnológico
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Nuestras Tecnologías</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-2" />
          </div>
        </Container>

        {/* Row 1 – left to right */}
        <TechTicker techs={row1} direction={1} />
        {/* Row 2 – right to left */}
        <TechTicker techs={row2} direction={-1} />
      </div>

      {/* ── APPS ─── */}
      <div className="py-24 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Nuestro Portafolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Aplicaciones propias desarrolladas
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-2 mb-4" />
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">
              Haz clic en cualquier aplicación para ver sus detalles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {APPS.map((app, i) => (
              <motion.button
                key={app.id}
                onClick={() => setSelectedApp(app)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-brand-gray/20 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
              >
                {/* Real app icon */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-brand-gray/10 shadow-md mb-5 group-hover:scale-110 transition-transform duration-300 bg-white">
                  <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base font-bold text-black group-hover:text-brand-orange transition-colors leading-tight mb-2">
                  {app.name}
                </h3>
                <span className="text-xs text-brand-gray font-medium">{app.platform}</span>
              </motion.button>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ─── */}
      <div className="py-24 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-brand-gray text-lg mb-10">
              Cuéntanos tu idea y la convertimos en un producto digital de alta calidad.
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

      {/* ── MODAL ─── */}
      <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
    </div>
  );
};

export default SoftwarePage;
