import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeMetaPixel } from './services/MetaPixel.js';
import App from './App.jsx';
import './index.css';

// Initialize Meta Pixel
initializeMetaPixel();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
