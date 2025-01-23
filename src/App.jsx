import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ReactLenis } from 'lenis/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import ScrollToTop from './components/ScrollToTop';
import LoaderFullPage from './components/LoaderFullPage';
import GradientSVG from './components/GradientSVG';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const Meeting = lazy(() => import('./pages/meeting/Meeting'));
const Terms = lazy(() => import('./pages/terms/Terms'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'));

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop />
        <GradientSVG />
        <InnerApp />
      </BrowserRouter>
    </ReactLenis>
  );
};

const InnerApp = () => {
  return (
    <Suspense fallback={<LoaderFullPage />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meeting-booking" element={<Meeting />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

// Initialize i18n with performance optimizations
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'subdomain'],
      lookupCookie: 'i18next',
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/languages/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: true, // Leverage suspense for better async handling
    },
  });

export default App;
