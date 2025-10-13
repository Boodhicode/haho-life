// AboutUs.jsx
import React from 'react';
import { Target, Heart, TreeDeciduous } from 'lucide-react'; // Ikon Lucide

const AboutUs = () => {
  return (
    <div className="pt-20 bg-white"> {/* pt-20 untuk memberi ruang di bawah Header */}
      <div className="container mx-auto px-4 lg:px-8 py-12">

        {/* Hero Mini Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">Tentang Kami</h1>
          <p className="mt-3 text-xl text-gray-500">Kisah di Balik Kesehatan Alami Anda.</p>
        </div>

        {/* Kisah Merek (Our Story) */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-teal-600 mb-6">Perjalanan PURE HEALTH</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              PURE HEALTH didirikan pada tahun 2018 dengan satu visi sederhana: menyediakan solusi kesehatan alami yang murni dan efektif untuk semua orang. Kami percaya bahwa **kesehatan sejati berakar pada kekuatan alam** dan bukan bahan kimia buatan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Semua berawal dari kebutuhan pribadi kami akan suplemen yang bisa dipercaya. Setelah bertahun-tahun penelitian dan formulasi, kami menciptakan produk yang kami banggakan dan gunakan setiap hari. Komitmen kami adalah kualitas tanpa kompromi.
            </p>
            <blockquote className="mt-6 border-l-4 border-yellow-600 pl-4 italic text-gray-700">
                "Kami berkomitmen untuk membuat alam menjadi mitra terdekat dalam perjalanan kesehatan Anda."
            </blockquote>
          </div>
          <div className="lg:w-1/2">
            {/* Placeholder untuk foto tim atau pendiri */}
            <div className="bg-gray-100 h-64 lg:h-96 rounded-xl shadow-lg flex items-center justify-center">
              <p className="text-gray-500">[Placeholder: Foto Tim atau Ilustrasi Bahan Baku]</p>
            </div>
          </div>
        </div>
        
        {/* Misi & Nilai Kami */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Misi & Nilai Inti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Nilai 1 */}
                <div className="text-center p-6 border border-gray-100 rounded-lg">
                    <Target className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                    <h4 className="text-xl font-semibold mb-2">Integritas</h4>
                    <p className="text-gray-600 text-sm">Bertindak transparan dari sumber bahan hingga proses produksi akhir.</p>
                </div>
                {/* Nilai 2 */}
                <div className="text-center p-6 border border-gray-100 rounded-lg">
                    <Heart className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                    <h4 className="text-xl font-semibold mb-2">Kualitas Tanpa Kompromi</h4>
                    <p className="text-gray-600 text-sm">Memastikan setiap produk memenuhi standar tertinggi BPOM dan Halal.</p>
                </div>
                {/* Nilai 3 */}
                <div className="text-center p-6 border border-gray-100 rounded-lg">
                    <TreeDeciduous className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                    <h4 className="text-xl font-semibold mb-2">Keberlanjutan</h4>
                    <p className="text-gray-600 text-sm">Komitmen pada praktik ramah lingkungan dan dukungan pada petani lokal.</p>
                </div>
            </div>
        </div>
      </div>
      {/* Catatan: Footer akan ditambahkan setelah ini */}
    </div>
  );
};

export default AboutUs;