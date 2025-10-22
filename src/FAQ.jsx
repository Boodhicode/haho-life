import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Komponen FAQItem (Accordion dengan animasi lembut)
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl shadow-sm transition-all duration-300 border ${
        isOpen
          ? "border-teal-500 bg-white shadow-md"
          : "border-gray-200 bg-gray-50 hover:bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
      >
        <h3 className="font-semibold text-lg text-gray-800">{question}</h3>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-teal-600" : "rotate-0 text-gray-400"
          }`}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Animasi expand konten */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      </div>
    </div>
  );
};

// Komponen Utama FAQ
const FAQ = () => {
  const faqData = [
    {
      q: "Apakah produk PURE HEALTH sudah terdaftar di BPOM?",
      a: "Ya, semua produk PURE HEALTH telah melalui pengujian ketat dan terdaftar secara resmi di Badan Pengawas Obat dan Makanan (BPOM) Indonesia.",
    },
    {
      q: "Apakah produk Anda aman untuk vegetarian/vegan?",
      a: "Sebagian besar produk kami berbasis tumbuhan dan aman untuk vegetarian. Namun, pastikan untuk memeriksa label produk spesifik di halaman detail untuk konfirmasi 100% vegan.",
    },
    {
      q: "Berapa lama waktu pengiriman ke luar kota?",
      a: "Waktu pengiriman standar adalah 2-4 hari kerja untuk wilayah Jabodetabek, dan 4-7 hari kerja untuk luar pulau Jawa, terhitung sejak pembayaran dikonfirmasi.",
    },
    {
      q: "Bagaimana cara melakukan pengembalian atau penukaran produk?",
      a: "Anda dapat mengajukan pengembalian dalam waktu 7 hari setelah penerimaan, dengan catatan produk masih tersegel dan disertai bukti pembelian. Silakan hubungi tim CS kami melalui halaman Kontak.",
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-teal-50 via-white to-teal-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Halaman */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal-100 text-teal-700 rounded-full">
              <HelpCircle className="w-7 h-7" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Pertanyaan Umum (FAQ)
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Kami telah merangkum pertanyaan yang sering diajukan oleh pelanggan kami.
          </p>
        </div>

        {/* List FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.q} answer={item.a} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white/80 backdrop-blur-sm border border-teal-100 rounded-3xl shadow-sm py-10 px-6">
          <h3 className="text-2xl font-bold text-teal-700 mb-2">
            Tidak menemukan jawaban yang Anda cari?
          </h3>
          <p className="text-gray-600 mb-6">
            Tim dukungan kami siap membantu Anda secara langsung.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
            