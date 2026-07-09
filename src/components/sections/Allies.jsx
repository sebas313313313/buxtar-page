/**
 * Allies section.
 * Infinite scrolling carousel of partner logos with an interactive modal.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import allies from '../../data/allies';
import { useLanguage } from '../../context/LanguageContext';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { SectionTitle } from '../ui';

const Allies = () => {
  const { t } = useLanguage();
  const [selectedClient, setSelectedClient] = useState(null);
  
  // Duplicate for infinite scroll effect
  const duplicatedClients = [...allies, ...allies];

  // Lock body scroll when modal is open
  const handleOpenModal = (client) => {
    setSelectedClient(client);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Section id="aliados" dark>
      <Container>
        <SectionTitle
          badge="Nuestra Red"
          title="Aliados Estratégicos"
          subtitle="Instituciones y aliados que impulsan la innovación tecnológica junto a Buxtar"
        />
      </Container>

      {/* Carousel container with 'group' to pause on hover */}
      <div className="relative overflow-hidden py-12 group cursor-pointer">
        {/* Left and Right fades */}
        {/* Left and Right fades removed for strict color support */}

        <motion.div
          className="flex items-center gap-12 animate-scroll group-hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              onClick={() => handleOpenModal(client)}
              className="flex-shrink-0 flex items-center justify-center w-36 h-24 px-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 bg-white shadow-sm rounded-xl hover:bg-brand-gray/5 border border-brand-gray/30 hover:border-brand-gray/50 hover:shadow-md"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-lg bg-white rounded-3xl border border-brand-gray/30 shadow-2xl p-8 md:p-10 text-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-brand-gray hover:text-black bg-brand-gray/10 hover:bg-brand-gray/20 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6 bg-white rounded-2xl p-4 shadow-inner">
                  <img
                    src={selectedClient.logo}
                    alt={selectedClient.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-3">
                  {selectedClient.name}
                </h3>
                
                <p className="text-brand-gray leading-relaxed mb-8">
                  {selectedClient.description}
                </p>

                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-medium rounded-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Allies;
