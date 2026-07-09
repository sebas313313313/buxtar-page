/**
 * Main App component.
 * Assembles all pages of the MPA using React Router.
 */
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { COMPANY } from './utils/constants';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import AlliesPage from './pages/AlliesPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ConsultoriaPage from './pages/ConsultoriaPage';
import MarketingPage from './pages/MarketingPage';
import SoftwarePage from './pages/SoftwarePage';
import ProyectosPage from './pages/ProyectosPage';
import CareersPage from './pages/CareersPage';

/** Inner app component that uses language context */
const AppContent = () => {
  const { t } = useLanguage();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{COMPANY.fullName} | {t('hero.badge')}</title>
        <meta name="description" content={t('hero.description')} />
        <meta name="keywords" content="desarrollo software, transformación digital, consultoría TI, aplicaciones móviles, Buxtar, Colombia" />
        <meta property="og:title" content={`${COMPANY.fullName} | ${t('hero.badge')}`} />
        <meta property="og:description" content={t('hero.description')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={COMPANY.fullName} />
        <meta name="twitter:description" content={t('hero.description')} />
      </Helmet>

      <Router>
        <div className="min-h-screen flex flex-col bg-white text-black custom-scrollbar">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/servicios/consultoria-transformacion" element={<ConsultoriaPage />} />
              <Route path="/servicios/marketing-digital" element={<MarketingPage />} />
              <Route path="/servicios/desarrollo-software" element={<SoftwarePage />} />
              <Route path="/servicios/formulacion-proyectos" element={<ProyectosPage />} />
              <Route path="/servicios/:id" element={<ServiceDetailPage />} />
              <Route path="/clientes" element={<ClientsPage />} />
              <Route path="/aliados" element={<AlliesPage />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/noticias" element={<NewsPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/trabaja-con-nosotros" element={<CareersPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

/** Root App with LanguageProvider wrapping everything */
const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
