import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Mohon isi semua field." });
      return;
    }

    // Simulasi kirim data
    setStatus({ type: "success", text: "Terima kasih! Kami akan menghubungi Anda segera." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-purple-50 to-rose-50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-purple-800">Hubungi Kami</h1>
          <p className="mt-3 text-lg text-gray-600">
            Isi formulir atau gunakan kontak cepat di bawah untuk menjadwalkan demo atau konsultasi.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulir Kontak */}
          <div className="lg:w-1/2 p-8 bg-white rounded-2xl shadow-xl border border-purple-100">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">Kirim Pesan</h2>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-purple-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                    placeholder="Nama Anda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-purple-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                    placeholder="email@contoh.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-purple-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50"
                  placeholder="Tuliskan pesan Anda di sini..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-[1.02]"
              >
                Kirim Pesan
              </button>

              {status && (
                <div
                  className={`mt-3 text-sm text-center ${
                    status.type === "error" ? "text-rose-600" : "text-green-600"
                  }`}
                >
                  {status.text}
                </div>
              )}
            </form>
          </div>

          {/* Kontak Langsung */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-2xl font-bold text-purple-700">Kontak Cepat</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email Kami</h4>
                  <p className="text-gray-600">info@haholife.id</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Telepon & WhatsApp</h4>
                  <p className="text-gray-600">+62 812-3456-789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Harmoni Sehat No. 88, Jakarta Selatan, 12920
                  </p>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="w-full h-64 bg-gradient-to-r from-purple-100 to-rose-100 rounded-2xl flex items-center justify-center shadow-md border border-purple-200 mt-6">
              <p className="text-gray-500">[Google Maps Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
