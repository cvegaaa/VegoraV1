import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  // Espera 1 segundo (1000ms) y luego añade la clase .hidden
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 1000);
});