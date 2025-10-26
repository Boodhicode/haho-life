import React from "react";
import { motion } from "framer-motion";
import heroImg from "/assets/3.webp";// pastikan path benar

const HeroSection = () => {
  // Variants animasi container dan item
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-rose-5 py-20"
    >
      {/* Background Glow Shapes */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-purple-200/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/4 z-[-1]" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-rose-200/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 z-[-1]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center"
      >
        {/* ==================== LEFT TEXT SECTION ==================== */}
        <motion.div variants={container} className="space-y-6 text-center md:text-left">
          {/* Tagline */}
          <motion.div
            variants={item}
            className="hidden sm:flex justify-center md:justify-start gap-2 bg-purple-100/60 px-4 py-1.5 rounded-full text-sm font-medium w-max mx-auto md:mx-0"
          >
            <span className="text-purple-700 font-semibold">World’s First</span>
            <span className="text-slate-500">
              Microcrystalline Magnetic + Far Infrared
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={item}
            className="font-extrabold leading-tight text-gray-900 text-4xl sm:text-5xl lg:text-[3.3rem]"
          >
            <span className="block">Perangkat Guna Rumah</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Hipertermia
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 variants={item}>
            <span className="block mt-2 text-lg font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              #Prinsip Suhu Menentukan Tahap Kesehatan
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-slate-600 max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Cukup 30 menit sehari dapat meningkatkan sirkulasi, suhu tubuh, serta
            membantu perbaikan mikro-sirkulasi dan kesehatan mental. Aman digunakan
            di rumah dengan panduan dan layanan purna jual.
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

        </motion.div>

        {/* ==================== RIGHT IMAGE SECTION ==================== */}
        <motion.div
          variants={item}
          className="relative hidden md:flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <motion.img
            src={heroImg}
            alt="Produk Haho Life"
            className="w-[85%] object-contain drop-shadow-2xl"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />

          {/* Subtle glow animation */}
          <motion.div
            className="absolute left-5 -top-16 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-200 to-rose-200 opacity-70 blur-2xl "
            animate={{ opacity: [0.6, 0.8, 0.6], scale: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
