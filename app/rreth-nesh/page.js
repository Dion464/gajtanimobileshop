"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#333333]">
            RRETH <span className="text-[#ff0000]">NESH</span>
          </h1>
          <div className="mt-4 h-1 w-24 bg-[#ff0000] mx-auto" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/about-us.jpg"
              alt="About Gajtani Mobile"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#333333]">
              Historia Jonë
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Që nga viti 2010, Gajtani Mobile ka qenë në pararojë të teknologjisë mobile në Kosovë. 
              Ne kemi ndërtuar reputacionin tonë duke ofruar produkte cilësore dhe shërbim të shkëlqyer për klientët tanë.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#333333] mb-2">Misioni</h3>
                <p className="text-gray-600">
                  Të sjellim teknologjinë më të fundit dhe më cilësore për klientët tanë, duke ofruar zgjidhje inovative.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#333333] mb-2">Vizioni</h3>
                <p className="text-gray-600">
                  Të bëhemi lider në tregun e teknologjisë mobile në Kosovë, duke vendosur standarde të reja në shërbimin ndaj klientit.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                Kontaktoni Me Ne
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600 hover:text-[#ff0000] transition-colors">
                  <a href="tel:044131000">Tel: 044 131 000</a>
                </p>
                <p className="text-gray-600 hover:text-[#ff0000] transition-colors">
                  <a href="tel:044684007">Tel: 044 684 007</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
