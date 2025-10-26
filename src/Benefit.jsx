import React, { useState } from "react";

const Benefit = () => {
  const benefits = [
        "Meningkatkan kekebalan",
        "Memperbaiki sirkulasi darah",
        "Meningkatkan mikrosirkulasi",
        "Meningkatkan suhu tubuh",
        "Memperbaiki tekanan darah",
        "Mengurangi pembengkakan & rasa sakit",
        "Meningkatkan kesehatan mental",
    ];

  return (
    <section id="kegunaan" className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/60 p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold mb-4 text-purple-700">Kegunaan Utama</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, idx) => (
              <article
                key={idx}
                className="flex gap-4 items-start p-3 rounded-lg hover:bg-rose-50 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center font-semibold text-purple-600">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{b}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Deskripsi singkat tentang bagaimana {b.toLowerCase()} dapat terbantu menggunakan perangkat ini.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>


        <aside className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-2xl shadow">
          <h4 className="text-lg font-semibold mb-3">Manfaat Singkat</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>30 menit latihan setara dengan 2 jam aerobik alami</li>
            <li>Membantu drainage limfatik & detoks ringan</li>
            <li>Aman untuk penggunaan di rumah dengan panduan</li>
          </ul>

          <div className="mt-6">
            <h5 className="text-sm font-medium text-slate-700">Highlight</h5>
            <div className="mt-2 text-xs text-slate-500">36 juta gerakan sel tubuh (klaim produk) — lihat panduan & studi untuk verifikasi.</div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Benefit;
