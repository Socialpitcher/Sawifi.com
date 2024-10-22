import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import CardData from './utiles/CardData.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CardData>
        <App />
      </CardData>
    </BrowserRouter>
  </StrictMode>
);
