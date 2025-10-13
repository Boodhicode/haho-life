// AppRouter.jsx (atau file utama konfigurasi router)

import React from 'react';
import { HashRouter, RouterProvider } from 'react-router-dom';

// Import Layout dan Komponen Halaman
import Layout from './layout'; 
import Home from './Home';         // Asumsikan Home.jsx menggabungkan Hero & Features
import AboutUs from './AboutUs';   // Halaman About Us
import Contact from './Contact';   // Halaman Kontak
import Products from './Products'; // Komponen Products (Perlu dibuat)
// import NotFound from './NotFound'; // Komponen 404 (Perlu dibuat)
import './index.css'; // Pastikan styling global diimpor
// 1. Definisikan Struktur Router
const router = HashRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFound />, // Komponen yang tampil jika rute tidak ditemukan (404)
    children: [
      {
        index: true, // Menggantikan path: '/' sebagai root child route
        element: <Home />,
      },
      {
        path: 'about', // Akan menjadi /about
        element: <AboutUs />,
      },
      {
        path: 'contact', // Akan menjadi /contact
        element: <Contact />,
      },
      {
        path: 'products', // Akan menjadi /products
        element: <Products />,
      },
      // Anda bisa menambahkan rute lain seperti /faq atau /blog di sini
    ],
  },
]);

// 2. Eksport Komponen Router Provider
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;