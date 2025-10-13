// Footer.jsx
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react'; // Ikon Medsos

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-teal-700 pb-8">
          
          {/* Kolom 1: Logo & Deskripsi Singkat */}
          <div>
            <span className="text-2xl font-bold text-yellow-400">PURE HEALTH</span>
            <p className="text-sm mt-2 text-teal-300">
              Solusi kesehatan alami yang murni dan terpercaya untuk gaya hidup yang lebih baik.
            </p>
          </div>
          
          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-teal-300">
              <li><a href="/about" className="hover:text-yellow-400">Tentang Kami</a></li>
              <li><a href="/faq" className="hover:text-yellow-400">FAQ</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Hubungi Kami</a></li>
            </ul>
          </div>
          
          {/* Kolom 3: Informasi Produk */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Bantuan</h4>
            <ul className="space-y-2 text-sm text-teal-300">
              <li><a href="/products" className="hover:text-yellow-400">Semua Produk</a></li>
              <li><a href="/shipping" className="hover:text-yellow-400">Pengiriman</a></li>
              <li><a href="/terms" className="hover:text-yellow-400">Syarat & Ketentuan</a></li>
              <li><a href="/privacy" className="hover:text-yellow-400">Kebijakan Privasi</a></li>
            </ul>
          </div>
          
          {/* Kolom 4: Media Sosial & Newsletter */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Ikuti Kami</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-yellow-400"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-yellow-400"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-yellow-400"><Twitter className="w-6 h-6" /></a>
            </div>
            <p className="text-sm text-teal-300 mb-2">Dapatkan diskon eksklusif!</p>
            <div className="flex">
              <input type="email" placeholder="Email Anda" className="p-2 text-gray-800 rounded-l-md w-full" />
              <button className="bg-yellow-600 hover:bg-yellow-700 p-2 rounded-r-md text-sm font-medium">Daftar</button>
            </div>
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="text-center mt-6 text-sm text-teal-400">
          &copy; 2024 PURE HEALTH. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;