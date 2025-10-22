// main.jsx atau index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import AppTes from './AppTes';// Import AppRouter yang baru dibuat
import './index.css'; // File styling Tailwind/CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTes />
  </React.StrictMode>,
);