// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Konten Teks Kiri */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Tingkatkan <span className="text-teal-600">Daya Tahan Tubuh</span> Anda, Alami & Maksimal
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Formula alami pilihan dari bahan organik murni untuk kesehatan optimal sepanjang hari. Rasakan perbedaannya!
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Jelajahi Produk Kami
            </button>
            <button className="bg-transparent border border-teal-600 text-teal-600 text-lg font-semibold py-3 px-8 rounded-full hover:bg-teal-50 transition duration-300">
              Lihat Kisah Kami
            </button>
          </div>
        </div>

        {/* Visual Produk Kanan */}
        <div className="lg:w-1/2 flex justify-center">
          {/* Placeholder untuk Gambar Produk High-Res */}
          <div className="w-full max-w-lg bg-gray-100 rounded-xl shadow-2xl p-6 flex justify-center items-center">
            {/* Ganti div ini dengan tag <img> produk Anda */}
            <p className="text-gray-500 text-center py-16">
              [Placeholder: Gambar Produk PURE HEALTH High-Resolution]
            </p>
          </div>
        </div>
      </div>
      
      {/* Baris Kepercayaan/Sertifikasi */}
      <div className="container mx-auto mt-12 px-4 lg:px-8 border-t border-gray-200 pt-6">
          <div className="flex justify-around items-center text-gray-600 text-sm font-medium">
              <span className="flex items-center space-x-2">
                ⭐ 4.9/5 Rating Pelanggan
              </span>
              <span className="flex items-center space-x-2">
                ✅ BPOM Approved
              </span>
              <span className="flex items-center space-x-2">
                ☪️ Halal Certified
              </span>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;