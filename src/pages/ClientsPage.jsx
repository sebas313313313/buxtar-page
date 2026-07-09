import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clients from '../data/clients';
import Container from '../components/layout/Container';

/* ── Group clients by year ────────────────────────────────────── */
const groupByYear = (arr) => {
  const map = {};
  arr.forEach(c => {
    if (!map[c.year]) map[c.year] = [];
    map[c.year].push(c);
  });
  return Object.entries(map).sort(([a], [b]) => a - b);
};

/* ── Client Modal ─────────────────────────────────────────────── */
const ClientModal = ({ client, onClose }) => (
  <AnimatePresence>
    {client && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 z-10"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-brand-gray/10 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-white border border-brand-gray/20 rounded-2xl flex items-center justify-center p-4 shadow-sm mb-6">
              <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
            </div>
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-1">{client.sector} · {client.year}</span>
            <h3 className="text-2xl font-extrabold text-black mb-1">{client.name}</h3>
            <div className="w-10 h-1 bg-brand-orange my-4 rounded-full" />
            <p className="text-brand-gray leading-relaxed">{client.description}</p>
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange/90 transition-colors w-full"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ── Page ─────────────────────────────────────────────────────── */
const ClientsPage = () => {
  const [selected, setSelected] = useState(null);
  const grouped = groupByYear(clients);
  const years = grouped.map(([y]) => y);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="relative bg-black pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(rgba(246,134,24,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(246,134,24,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/40 rounded-full mb-6">
              Nuestra Red
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Nuestros <span className="text-brand-orange">Clientes</span>
            </h1>
            <div className="w-20 h-1.5 bg-brand-orange mx-auto mb-8" />
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Empresas e instituciones de múltiples sectores que han confiado en Buxtar para dar el salto digital.
            </p>
          </motion.div>

          {/* Summary stats */}
          <div className="mt-16 grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 max-w-2xl mx-auto">
            {[
              { value: `${clients.length}+`, label: 'Clientes' },
              { value: `${years.length * 2}+`, label: 'Proyectos' },
              { value: `${years.length}`, label: 'Años activos' },
            ].map(s => (
              <div key={s.label} className="bg-black/50 py-8 text-center">
                <div className="text-3xl font-extrabold text-brand-orange mb-1">{s.value}</div>
                <div className="text-xs text-brand-gray uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── TIMELINE ── */}
      <div className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 rounded-full mb-5">
              Trayectoria
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Historia de confianza</h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-gray/20 -translate-x-1/2" />

            {grouped.map(([year, yearClients], groupIdx) => (
              <div key={year} className="relative mb-16">
                {/* Year badge on the line */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative z-10 px-6 py-2 bg-brand-orange text-white text-sm font-extrabold rounded-full shadow-lg shadow-brand-orange/30"
                  >
                    {year}
                  </motion.div>
                </div>

                {/* Client logos for this year — alternating left/right */}
                <div className="flex flex-col gap-6">
                  {yearClients.map((client, ci) => {
                    const isLeft = (groupIdx + ci) % 2 === 0;
                    return (
                      <motion.div
                        key={client.id}
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: ci * 0.1 }}
                        className={`relative flex ${isLeft ? 'justify-end pr-[52%]' : 'justify-start pl-[52%]'}`}
                      >
                        {/* Connector line to center */}
                        <div className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-brand-gray/20 w-8 ${isLeft ? 'right-[50%]' : 'left-[50%]'}`} />
                        {/* Dot on center line */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-orange border-2 border-white shadow-md z-10" />

                        {/* Client card */}
                        <button
                          onClick={() => setSelected(client)}
                          className="group flex items-center gap-3 bg-white border border-brand-gray/20 rounded-xl px-4 py-3 shadow-sm hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 max-w-[220px] w-full"
                        >
                          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white border border-brand-gray/10 rounded-lg p-1.5">
                            <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-sm font-bold text-black group-hover:text-brand-orange transition-colors truncate">{client.name}</div>
                            <div className="text-xs text-brand-gray">{client.sector}</div>
                          </div>
                          <svg className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* End cap */}
            <div className="flex justify-center">
              <div className="w-4 h-4 rounded-full bg-brand-orange shadow-lg shadow-brand-orange/30" />
            </div>
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-24 bg-white border-t border-brand-gray/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              ¿Quieres ser parte de nuestra historia?
            </h2>
            <p className="text-brand-gray text-lg mb-10">
              Únete a las empresas e instituciones que ya confían en Buxtar para su transformación digital.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-orange text-white text-base font-bold rounded-xl hover:bg-brand-orange/90 transition-all duration-300 shadow-lg shadow-brand-orange/20"
            >
              Contáctanos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Container>
      </div>

      <ClientModal client={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default ClientsPage;
