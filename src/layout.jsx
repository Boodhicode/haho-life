// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header'; // Pastikan path ini benar
import Footer from './footer'; // Pastikan path ini benar
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Konten Halaman akan dimuat di sini */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;