// Home.jsx

import React from 'react';
import HeroSection from './HeroSection';         // Bagian paling atas halaman Home
import FeaturesSection from './FeaturesSection'; // Bagian Keunggulan Produk
// import ShowcaseProduct dari komponen lain (jika sudah dibuat)
// import TestimoniSection dari komponen lain (jika sudah dibuat)

const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Banner Utama) */}
      <HeroSection />

      {/* 2. Features Section (Keunggulan Produk) */}
      {/* Section ini diletakkan setelah Hero untuk menjelaskan mengapa memilih produk */}
      <FeaturesSection />

      {/* 3. Showcase Produk (Tambahkan jika sudah membuat komponennya) */}
      {/* <ProductShowcase /> */}

      {/* 4. Testimoni (Tambahkan jika sudah membuat komponennya) */}
      {/* <TestimonialSection /> */}
      
      {/* Catatan: Header dan Footer sudah diatur di Layout.jsx */}
    </div>
  );
};

export default Home;