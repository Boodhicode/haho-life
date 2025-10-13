// FeaturesSection.jsx
import React from 'react';
import { Leaf, FlaskConical, ShieldCheck } from 'lucide-react'; // Ikon Lucide

const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Bahan Alami',
      description: 'Kami hanya menggunakan bahan organik terbaik yang dipanen secara etis dan berkelanjutan.',
    },
    {
      icon: FlaskConical,
      title: 'Formulasi Murni',
      description: 'Dibuat dengan pengawasan ahli, tanpa bahan kimia berbahaya, pengawet, atau pewarna buatan.',
    },
    {
      icon: ShieldCheck,
      title: 'Terbukti Efektif',
      description: 'Produk kami telah melalui pengujian klinis dan terdaftar resmi di BPOM.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mengapa Memilih PURE HEALTH?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;