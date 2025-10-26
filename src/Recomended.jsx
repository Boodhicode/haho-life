import React, { useEffect, useRef, useState } from "react";

const Recomended = () => {
  
    const conditions = [
        {
            title: "Tekanan Darah Tinggi (Hipertensi)",
            image: "./assets/hipertensi.webp",
        },
        {
            title: "Diabetes & Asam Urat",
            image: "./assets/diabetes.webp",
        },
        {
            title: "Tumor & Kanker ",
            image: "./assets/tumor-kanker.webp",
        },
        {
            title: "Gangguan Tidur & Insomnia",
            image: "./assets/tidur.webp",
        },
        {
            title: "Sakit Kepala & Migrain",
            image: "./assets/migrain.webp",
        },
        {
            title: "Nyeri Otot & Sendi (Fibromyalgia / Osteoarthritis)",
            image: "./assets/nyeri-sendi.webp",
        },
        {
            title: "Strok & Pemulihan Pasca Stroke",
            image: "./assets/strok.webp",
        },
        {
            title: "Metabolisme Lemah / Gangguan Pencernaan",
            image: "./assets/obesitas.webp",
        },
    ];
  return (
    <section
      id="indikasi"
      className="relative py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50 rounded-[2rem] mt-10 overflow-hidden"
    >
      {/* background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-80 h-80 bg-rose-300/20 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-rose-600 drop-shadow-sm mb-10">
          💗 Direkomendasikan untuk Penderita
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundImage: `url(${c.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* overlay gradasi */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 group-hover:from-purple-500/20 group-hover:to-rose-500/30 transition-all duration-500"></div>

              {/* isi */}
              <div className="relative z-10 flex flex-col items-center justify-center text-white p-6 min-h-[180px] backdrop-blur-[2px]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-lg font-bold mb-3">
                  {i + 1}
                </div>
                <p className="font-semibold text-sm sm:text-base leading-relaxed drop-shadow-md">
                  {c.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recomended;