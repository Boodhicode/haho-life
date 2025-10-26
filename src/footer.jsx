// src/Footer.jsx
import React from "react";
import { Instagram, Facebook, Twitter, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-fuchsia-800 to-rose-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Grid Utama */}
        {/* <div className="flex grid-cols-1 md:grid-2 gap-10 border-b border-fuchsia-700/50 pb-10"> */}

          {/* Kolom 1: Profil Pribadi */}
          <div className="flex items-center text-center md:items-start md:text-left flex-col md:flex-row">
            <img
              src="./assets/profile.jpg" // Ganti sesuai lokasi fotomu
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-pink-400 shadow-md md:mr-6 mb-4 md:mb-0"
            />
            <div className="ml-4 space-y-2 w-full">
              <h2 className="text-2xl font-bold text-yellow-300 tracking-wide">ASWIN</h2>
              <p className="text-sm text-pink-200 mt-2 w-auto ">
                Temukan solusi inovatif untuk perawatan pasien kritis dengan alat terapi hipotermia kami!
                Dirancang dengan teknologi medis mutakhir, alat ini membantu mengontrol suhu tubuh secara presisi untuk mendukung pemulihan otak dan organ vital.
                Saya siap membantu Anda memahami manfaat klinisnya dan bagaimana perangkat ini dapat meningkatkan standar pelayanan di fasilitas kesehatan Anda.
              </p>

              {/* Kontak */}
              <div className="mt-4 space-y-2 text-sm text-pink-200">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-yellow-300" /> +62 823-7675-1119
                </p>
              </div>
            </div>

          </div>

          {/* Kolom 3: Media Sosial */}
          {/* <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="font-semibold mb-4 text-yellow-300 text-lg">Ikuti Saya</h4>
            <div className="flex space-x-5 mb-4">
              <a href="#" className="hover:text-yellow-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <button className="bg-gradient-to-r from-fuchsia-600 to-rose-600 hover:from-fuchsia-500 hover:to-rose-500 text-white font-medium px-4 py-2 rounded-full text-sm shadow-md transition">
              Hubungi Saya
            </button>
          </div> */}
        {/* </div> */}

        {/* Hak Cipta */}
        <div className="text-center mt-8 text-sm text-pink-300">
          &copy; {new Date().getFullYear()} HAHO LIFE — Dibuat oleh BoodhiCode 💜
        </div>
      </div>
    </footer>
  );
};

export default Footer;
