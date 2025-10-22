import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.25, duration: 0.8, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-rose-50 py-20 md:py-20"
    >
      {/* Background Glow Shapes */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/4 -z-10" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-rose-200/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      >
        {/* ==================== LEFT TEXT SECTION ==================== */}
        <motion.div variants={item} className="space-y-6 text-center md:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 bg-purple-100/60 px-3 py-1 rounded-full text-sm font-medium w-max mx-auto md:mx-0"
          >
            <span className="text-purple-700">World’s First</span>
            <span className="text-slate-500">
              Microcrystalline Magnetic + Far Infrared
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
          >
            Perangkat Guna Rumah{" "}
            <span className="bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
              Hipertemia
            </span>{" "}
            <br className="hidden md:block" /> #1 Dunia
          </motion.h2>

          <motion.p
            variants={item}
            className="text-slate-600 max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Cukup 30 menit sehari dapat meningkatkan sirkulasi, suhu tubuh, serta
            membantu perbaikan mikro-sirkulasi dan kesehatan mental. Aman digunakan
            di rumah dengan panduan dan kontak layanan purna jual.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 0px 25px rgba(168,85,247,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-rose-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Hubungi Sekarang
            </motion.a>

            <motion.a
              href="#kegunaan"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#faf5ff",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md border border-purple-300 text-purple-700 font-medium bg-white hover:bg-purple-50 transition-all duration-300"
            >
              Lihat Kegunaan
            </motion.a>
          </motion.div>

          {/* Decorative Benefits */}
          <motion.div
            variants={item}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {[
              "Meningkatkan kekebalan",
              "Memperbaiki sirkulasi darah",
              "Meningkatkan mikrosirkulasi",
              "Meningkatkan suhu tubuh",
              "Memperbaiki tekanan darah",
              "Mengurangi pembengkakan & rasa sakit",
            ].map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="flex items-start gap-2 bg-white/70 p-3 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-full bg-purple-50 text-purple-600 font-bold">
                  {i + 1}
                </div>
                <div className="text-sm text-slate-700">{b}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Subtle glow decoration */}
          <div className="hidden md:block absolute left-10 bottom-24 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-300 to-rose-400 opacity-60 blur-3xl animate-pulse -z-10" />
        </motion.div>

        {/* ==================== RIGHT IMAGE SECTION ==================== */}
        <motion.div
          variants={item}
          className="relative flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <motion.img
            src="./src/assets/3.png"
            alt="Produk Haho Life"
            className="w-[85%]  object-contain drop-shadow-2xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />

          {/* Soft gradient glow */}
          <motion.div
            className="absolute -left-12 -top-16 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-200 to-rose-200 opacity-70 blur-2xl"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
