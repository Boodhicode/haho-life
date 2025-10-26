import React, { useState } from "react";

const Vidio = () => {
  return (
    <section
      id="video"
      className="relative py-24 bg-gradient-to-b from-white via-purple-50 to-rose-50 rounded-[2rem] shadow-xl overflow-hidden mt-16 mb-10"
    >
      {/* Background efek */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute w-96 h-96 bg-pink-300/30 rounded-full blur-3xl -top-20 left-10"></div>
                        <div className="absolute w-80 h-80 bg-purple-300/30 rounded-full blur-3xl bottom-0 right-10"></div>
                    </div>

                    <div className="relative max-w-5xl mx-auto px-6 text-center">
                        <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-rose-500 bg-clip-text text-transparent mb-6 drop-shadow-sm">
                            🎥 Lihat Bagaimana Terapi Hipertermia Bekerja
                        </h3>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                            Video berikut menjelaskan prinsip dan manfaat terapi hipertermia secara visual — disertai ilustrasi dan data klinis singkat.
                        </p>

                        {/* Frame YouTube */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-purple-200 hover:scale-[1.01] transition-transform duration-300">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/gBPXi4DTVIQ?autoplay=0&rel=0"
                                title="Video Terapi Hipertermia"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>
  );
};

export default Vidio;
            