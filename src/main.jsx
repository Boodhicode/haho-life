// main.jsx atau index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';// Import AppRouter yang baru dibuat
import './index.css'; // File styling Tailwind/CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <link rel="preload" href="/main.js" as="script"></link>
  </React.StrictMode>,
);