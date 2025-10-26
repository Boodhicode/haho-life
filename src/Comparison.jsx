import React from 'react';

const Comparison = () => {
  return (
    <section
      id="comparison"
      className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 rounded-[2.5rem] shadow-lg overflow-hidden mt-10"
    >
      {/* Dekorasi latar belakang */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-200/40 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-rose-200/40 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-purple-700 mb-14 drop-shadow-sm">
          ✨ Perbandingan Keringat Olahraga vs Terapi Hyperthermia (DT2)
        </h3>

        {/* Grid 3 perbandingan */}
        <div className="space-y-10">
          {[
            {
              title: "1. Perbedaan Mekanisme",
              left: "Panas dihasilkan di tingkat sel. Detoksikasi mendalam & mengeluarkan kelembapan serta racun internal tubuh.",
              right: "Mengatur suhu tubuh tetapi efek detoksikasi terbatas. Terjadi hanya di lapisan epidermis permukaan.",
              image: "./assets/heat-cells.webp",
            },
            {
              title: "2. Perbedaan Komposisi Keringat",
              left: "Mengeluarkan limbah metabolisme & racun dalam (asam laktat, urea).",
              right: "Terutama air & elektrolit (natrium, kalium). Jernih & tidak berbau.",
              image: "./assets/sweat-composition.webp",
            },
            {
              title: "3. Perbedaan Respon Fisiologis",
              left: "Memberi rasa hangat & relaksasi mendalam. Detoks menyeluruh tanpa kelelahan.",
              right: "Peningkatan detak jantung & aktivitas otot signifikan, memerlukan energi besar.",
              image: "./assets/workout-vs-relax.webp",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white/80 backdrop-blur-lg border border-purple-100 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Kolom kiri */}
              <div className="md:col-span-1 space-y-3 text-center md:text-left">
                <h4 className="text-xl font-bold text-purple-600">{item.title}</h4>
                <p className="text-sm text-slate-700 font-semibold flex justify-center md:justify-start items-center gap-1">
                  <span>✨</span> Terapi Hyperthermia (DT2)
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">{item.left}</p>
              </div>

              {/* Gambar */}
              <div className="relative flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-lg object-cover w-full max-w-[340px] h-52 md:h-60 border border-purple-100 w-full aspect-[16/9]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-100/10 to-transparent"></div>
              </div>

              {/* Kolom kanan */}
              <div className="md:col-span-1 space-y-3 text-center md:text-left border-t md:border-t-0 md:border-l border-rose-200 md:pl-6">
                <p className="text-sm text-slate-700 font-semibold flex justify-center md:justify-start items-center gap-1">
                  <span>💪</span> Keringat Olahraga
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">{item.right}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;