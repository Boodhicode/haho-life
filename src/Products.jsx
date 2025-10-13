// Products.jsx

import React from 'react';
// Anda bisa mengimpor Link dari 'react-router-dom' jika setiap produk memiliki halaman detail
// import { Link } from 'react-router-dom'; 

const productData = [
  {
    id: 1,
    name: "Immune Booster Forte",
    description: "Meningkatkan daya tahan tubuh 3x lebih cepat dengan ekstrak kunyit dan jahe merah.",
    price: "Rp 150.000",
    imageUrl: "[Placeholder: Suplemen Merah]",
    tag: "Terlaris",
  },
  {
    id: 2,
    name: "Calm Sleep Formula",
    description: "Membantu relaksasi dan kualitas tidur lebih nyenyak dengan ekstrak chamomile alami.",
    price: "Rp 120.000",
    imageUrl: "[Placeholder: Suplemen Biru]",
    tag: "Baru",
  },
  {
    id: 3,
    name: "Daily Vitamin C Complex",
    description: "Asupan vitamin C harian murni yang penting untuk kulit dan energi.",
    price: "Rp 95.000",
    imageUrl: "[Placeholder: Suplemen Oranye]",
    tag: "",
  },
  {
    id: 4,
    name: "Probiotic Gut Health",
    description: "Menjaga keseimbangan flora usus untuk pencernaan yang lebih sehat dan ringan.",
    price: "Rp 145.000",
    imageUrl: "[Placeholder: Suplemen Hijau]",
    tag: "Premium",
  },
];

const Products = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen"> 
      <div className="container mx-auto px-4 lg:px-8 py-12">

        {/* Header Halaman Produk */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">Koleksi Produk Kami</h1>
          <p className="mt-3 text-xl text-gray-500">Pilih formula terbaik dari alam untuk kebutuhan kesehatan spesifik Anda.</p>
        </div>

        {/* Filter/Sort (Opsional, Tambahkan di sini) */}
        {/* <div className="flex justify-end mb-8">...</div> */}

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              
              {/* Gambar Produk Placeholder */}
              <div className="h-56 bg-gray-200 flex items-center justify-center relative">
                <p className="text-gray-500">{product.imageUrl}</p>
                {product.tag && (
                    <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full 
                        ${product.tag === 'Terlaris' ? 'bg-yellow-600 text-white' : 'bg-teal-600 text-white'}`}
                    >
                        {product.tag}
                    </span>
                )}
              </div>
              
              {/* Detail Produk */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 h-10 overflow-hidden">{product.description}</p>
                
                <p className="text-2xl font-extrabold text-teal-600 my-4">{product.price}</p>
                
                {/* Tombol CTA */}
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-full transition duration-300">
                  Lihat Detail & Beli
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;