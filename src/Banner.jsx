import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="banner-hipertermia"
      className="relative w-full overflow-hidden py-10"
    >
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-purple-100"
        >
          <img
            src="./assets/banner-hipertermia.webp"
            alt="Banner Terapi Hipertermia"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;