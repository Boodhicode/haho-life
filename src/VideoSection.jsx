import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Testimoni Dokter: Keakuratan Alat Monitor",
    category: "Testimoni Dokter",
    thumb: "https://images.unsplash.com/photo-1627856014756-f068dbd1f5ff?auto=format&fit=crop&w=900&q=60",
    url: "https://www.youtube.com/embed/VIDEO_ID_1",
    desc: "Dr. Arif menjelaskan pengalaman menggunakan Monitor VitalSign Pro di ruang ICU.",
  },
  {
    id: 2,
    title: "Demo Produk: Infus Pump Ultra",
    category: "Demo Produk",
    thumb: "https://images.unsplash.com/photo-1618221752929-3c6c7c5c3a8b?auto=format&fit=crop&w=900&q=60",
    url: "https://www.youtube.com/embed/VIDEO_ID_2",
    desc: "Demo lengkap fitur keamanan dan presisi pada Infus Pump Ultra.",
  },
  {
    id: 3,
    title: "Testimoni Klinik Sehat",
    category: "Testimoni Klinik",
    thumb: "https://images.unsplash.com/photo-1606203228577-b4ad5b2c2f45?auto=format&fit=crop&w=900&q=60",
    url: "https://www.youtube.com/embed/VIDEO_ID_3",
    desc: "Pimpinan Klinik Sehat menceritakan efisiensi penggunaan Portable Ultrasound S1.",
  },
];

export default function VideoSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="video" className="mt-20 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Video Promosi & Testimoni</h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          Saksikan pengalaman dokter, klinik, dan tenaga medis dalam menggunakan produk kami.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <motion.div
            key={v.id}
            whileHover={{ scale: 1.03 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md bg-slate-50"
            onClick={() => setSelected(v)}
          >
            <img src={v.thumb} alt={v.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Play size={48} className="text-white drop-shadow-lg" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-800">{v.title}</h3>
              <p className="text-xs text-teal-600 mt-1">{v.category}</p>
              <p className="text-sm text-slate-600 mt-2 line-clamp-2">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Video */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h4 className="font-semibold text-slate-800">{selected.title}</h4>
                <button onClick={() => setSelected(null)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X size={18} />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  src={selected.url}
                  title={selected.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-sm text-slate-600">{selected.desc}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
