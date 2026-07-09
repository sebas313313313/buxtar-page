import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import services from '../data/services';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { SectionTitle, Button } from '../components/ui';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Servicio no encontrado</h1>
          <Link to="/servicios">
            <Button>Volver a Servicios</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Section id="servicio-detalle">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link to="/servicios" className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark mb-8 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a Servicios
            </Link>
            
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
              </svg>
            </div>

            <SectionTitle 
              title={t(`services.items.${service.id}.title`)} 
              subtitle={t(`services.items.${service.id}.description`)}
              centered={false}
            />

            <div className="mt-12 prose max-w-none text-brand-gray">
              <div className="p-8 border-2 border-dashed border-brand-gray/20 rounded-2xl text-center">
                <p className="text-lg">
                  Aquí se colocará la información detallada para el servicio de <strong>{t(`services.items.${service.id}.title`)}</strong>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ServiceDetailPage;
