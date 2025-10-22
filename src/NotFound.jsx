// NotFound.jsx

import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    // Gunakan full-screen height (min-h-screen) karena komponen ini TIDAK menggunakan Layout (Header/Footer)
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full">
        
        {/* Kode Error Besar */}
        <h1 className="text-9xl font-extrabold text-teal-600 mb-4">404</h1>
        
        {/* Judul */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
        
        {/* Pesan ramah */}
        <p className="text-gray-600 mb-6">
          Ups! Kami tidak dapat menemukan halaman yang Anda cari. Mungkin tautan yang Anda ikuti sudah usang atau salah ketik.
        </p>
        
        {/* Tombol kembali ke Beranda */}
        <Link 
          to="/" 
          className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;