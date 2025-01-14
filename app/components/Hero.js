"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#000000] to-[#1a1a1a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010535312"
          alt="Hero Background"
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="text-7xl font-bold text-white mb-6">
            GAJTANI<span className="text-[#ff0000]"></span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Zbuloni koleksionin ton të produkteve të fundit teknologjike dhe
            shërbimeve profesionale.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#ff0000] text-white text-lg tracking-wider hover:bg-white hover:text-[#ff0000] transition-colors"
          >
            EKSPLORO PRODUKTET
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent" />
    </section>
  );
}
