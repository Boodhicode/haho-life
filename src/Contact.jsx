// Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Ikon Lucide

const Contact = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        
        {/* Hero Mini Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">Hubungi Kami</h1>
          <p className="mt-3 text-xl text-gray-500">Kami Siap Mendengarkan dan Membantu.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Formulir Kontak (Kiri) */}
          <div className="lg:w-1/2 p-8 bg-gray-50 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kirim Pesan Kepada Kami</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" placeholder="Nama Anda" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" placeholder="email@contoh.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subjek</label>
                <input type="text" id="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" placeholder="Pertanyaan tentang produk" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" placeholder="Tulis pesan Anda di sini..." required></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-[1.01]"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
          
          {/* Detail Kontak & Peta (Kanan) */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Atau Temukan Kami Di Sini</h2>

            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-gray-800">Email Dukungan</h4>
                        <p className="text-gray-600">info@purehealth.co.id</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-gray-800">Telepon & WhatsApp</h4>
                        <p className="text-gray-600">+62 812-3456-7890 (Layanan Pelanggan)</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-gray-800">Alamat Kantor Pusat</h4>
                        <p className="text-gray-600">Jl. Kesehatan No. 123, Blok A, Jakarta Selatan, 12920</p>
                    </div>
                </div>
            </div>

            {/* Placeholder Peta */}
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center mt-6 shadow-md">
              <p className="text-gray-500">[Placeholder: Embed Google Maps]</p>
            </div>
          </div>
        </div>
      </div>
      {/* Catatan: Footer akan ditambahkan setelah ini */}
    </div>
  );
};

export default Contact;